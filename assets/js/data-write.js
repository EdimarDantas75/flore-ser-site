// =============================================================
//  Flore-ser · UFG — Camada de ESCRITA (Firestore)
//
//  Complementa data-source.js (leitura). Grava/atualiza registros
//  das coleções operacionais, seguindo as regras do firestore.rules:
//   - Escrita exige papel gestor+ (gestor | governanca | admin).
//   - Nunca apaga: remoção é lógica (deleted_at), coerente com naoApaga().
//   - Carimba updated_at / updated_by para auditoria simples no cliente.
//
//  Só funciona com Firebase ATIVO (USAR_FIREBASE=true) e usuário logado
//  com papel adequado; em modo demonstração, lança erro claro.
// =============================================================

const PAPEIS_ESCRITA = new Set(["gestor", "governanca", "admin"]);

/** O papel informado pode escrever nas coleções operacionais? */
export function podeEditar(papel) {
  return PAPEIS_ESCRITA.has(papel);
}

/** Carrega db + funções do Firestore sob demanda; null se indisponível. */
async function contexto() {
  const cfg = await import("./firebase-config.js").catch(() => null);
  if (!cfg?.db || !cfg?.USAR_FIREBASE) return null;
  const fs = await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");
  return { db: cfg.db, fs };
}

function exigeFirebase(ctx) {
  if (!ctx) {
    throw new Error(
      "Edição indisponível: o sistema está em modo demonstração. " +
      "Configure o Firebase (credenciais reais) e entre com uma conta gestor."
    );
  }
}

/** Gera um id estável a partir de um prefixo + rótulo (sem acentos/espaços). */
export function gerarId(prefixo, rotulo) {
  const base = String(rotulo || "")
    .normalize("NFD").replace(new RegExp("[\\u0300-\\u036f]", "g"), "")
    .toLowerCase().replace(/[^a-z0-9]+/g, "_").replace(/^_+|_+$/g, "")
    .slice(0, 40) || "item";
  return `${prefixo}_${base}`;
}

/**
 * Cria ou atualiza um registro (merge). Carimba updated_at/updated_by.
 * @param {string} colecao  nome da coleção (ex.: 'convenios')
 * @param {string} id       id do documento
 * @param {object} dados    campos a gravar
 * @param {object} user     usuário logado (Firebase Auth) — para updated_by
 */
export async function salvarRegistro(colecao, id, dados, user) {
  const ctx = await contexto();
  exigeFirebase(ctx);
  const { db, fs } = ctx;
  const payload = {
    ...dados,
    deleted_at: dados.deleted_at ?? null,
    updated_at: fs.serverTimestamp(),
    updated_by: user?.email || user?.uid || "desconhecido",
  };
  await fs.setDoc(fs.doc(db, colecao, id), payload, { merge: true });
  return { id, ...payload };
}

/** Remoção lógica: marca deleted_at (coerente com as regras de soft delete). */
export async function removerRegistro(colecao, id, user) {
  const ctx = await contexto();
  exigeFirebase(ctx);
  const { db, fs } = ctx;
  await fs.updateDoc(fs.doc(db, colecao, id), {
    deleted_at: fs.serverTimestamp(),
    updated_at: fs.serverTimestamp(),
    updated_by: user?.email || user?.uid || "desconhecido",
  });
  return { id, removido: true };
}

/** Restaura um registro removido logicamente (deleted_at = null). */
export async function restaurarRegistro(colecao, id, user) {
  return salvarRegistro(colecao, id, { deleted_at: null }, user);
}

/** Lê todos os documentos de uma coleção (para as telas de edição). */
export async function lerColecao(colecao) {
  const ctx = await contexto();
  exigeFirebase(ctx);
  const { db, fs } = ctx;
  const snap = await fs.getDocs(fs.collection(db, colecao));
  return snap.docs.map((d) => ({ id: d.id, ...d.data() }));
}

/**
 * Anexos de feedback SEM Cloud Storage: imagens são comprimidas pelo cliente
 * e embutidas como data URL dentro do próprio documento do Firestore.
 *  - ANEXO_MAX_BYTES: tamanho do arquivo ORIGINAL aceito (antes de comprimir).
 *  - ANEXO_TOTAL_MAX: soma dos anexos JÁ comprimidos, com folga sob o limite
 *    de 1 MiB por documento do Firestore.
 */
export const ANEXO_MAX_BYTES = 10 * 1024 * 1024;
export const ANEXO_TOTAL_MAX = 850 * 1024;
export function anexoTipoOk(file) {
  const t = file?.type || "";
  // Só imagens que a compressão preserva fielmente em JPEG estático: sem PDF
  // (não cabe), sem SVG (script ativo) e sem GIF (perderia a animação).
  return /^image\/(png|jpe?g|webp)$/.test(t);
}

/** Soma aproximada (bytes) do conteúdo data URL de uma lista de anexos. */
export function tamanhoAnexos(anexos) {
  return (anexos || []).reduce((s, a) => s + (a && typeof a.url === "string" ? a.url.length : 0), 0);
}

/**
 * Envia um feedback (qualquer usuário autenticado). Registra autor, data e
 * status inicial. `anexos` são imagens já comprimidas pelo cliente, embutidas
 * como data URL (`[{nome,url,tipo,tamanho}]`). Sem Cloud Storage: o conteúdo
 * vive no próprio documento. Só data URL de imagem é aceita (bloqueia payload
 * não-imagem) e o total é limitado para caber no doc de 1 MiB do Firestore.
 * @param {object} dados    assunto/tipo/prioridade/mensagem/tela
 * @param {object} user     usuário logado (Firebase Auth)
 * @param {Array}  [anexos] [{nome,url(dataURL de imagem),tipo,tamanho}]
 */
export async function enviarFeedback(dados, user, anexos) {
  const ctx = await contexto();
  exigeFirebase(ctx);
  const { db, fs } = ctx;
  // só data URL de imagem entra no documento
  const limpos = (Array.isArray(anexos) ? anexos : [])
    .filter((a) => a && typeof a.url === "string" && /^data:image\//i.test(a.url))
    .map((a) => ({
      nome: String(a.nome || "imagem").slice(0, 120),
      url: a.url,
      tipo: /^data:(image\/[a-z+]+)/i.test(a.url) ? RegExp.$1 : "image/jpeg",
      tamanho: a.tamanho || Math.round((a.url.length - a.url.indexOf(",") - 1) * 0.75),
    }));
  if (tamanhoAnexos(limpos) > ANEXO_TOTAL_MAX) {
    throw new Error("Anexos excedem o limite total (~850 KB). Remova ou reduza imagens.");
  }
  const id = "fb_" + Date.now().toString(36) + Math.random().toString(36).slice(2, 6);
  const payload = {
    ...dados,
    anexos: limpos,
    status: "aberto",
    autor: user?.email || user?.uid || "anônimo",
    criado_em: fs.serverTimestamp(),
    deleted_at: null,
  };
  // trava final: texto + imagens juntos precisam caber no doc de 1 MiB do Firestore
  if (JSON.stringify({ ...payload, criado_em: 0 }).length > 1_000_000) {
    throw new Error("Feedback muito grande (texto + imagens). Reduza a mensagem ou remova imagens.");
  }
  await fs.setDoc(fs.doc(db, "feedbacks", id), payload);
  return { id, anexos: limpos.length };
}
