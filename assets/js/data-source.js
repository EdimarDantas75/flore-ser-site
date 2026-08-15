// =============================================================
//  Flore-ser · UFG — Camada de dados
//
//  Carrega os dados do painel com cadeia de fallback:
//    1) Cloud Firestore   (quando configurado e acessível)
//    2) Seeds locais       (data/seed/*.json — a mesma fonte da verdade)
//    3) null               (script.js mantém os defaults embutidos)
//
//  Devolve os dados já no FORMATO LEGADO que o script.js consome
//  (CITIES, ODS_COLORS, ODS_NAMES, PRODUCOES, HUB, radarAxes,
//   financePorFonte), de modo que a migração não muda a renderização.
// =============================================================

const MESES = ["", "Jan", "Fev", "Mar", "Abr", "Mai", "Jun", "Jul", "Ago", "Set", "Out", "Nov", "Dez"];

// rótulos curtos do radar por dimensão (núcleo) — dimensões do Flore-ser
const RADAR_LABEL = {
  dim_plantio: "Plantio",
  dim_arte: "Arte-Educação",
  dim_engajamento: "Engajamento",
  dim_escolas: "Escolas",
  dim_biodiversidade: "Biodiversidade",
  dim_parcerias: "Parcerias",
  dim_comunicacao: "Comunicação",
};

// cores das barras de apoio/financiamento por fonte — paleta Cerrado
const FONTE_COR = {
  fonte_fapeg: "#8cc63f",
  fonte_proec: "#5aa64a",
  fonte_ufg: "#f5b301",
  fonte_amma: "#6fae2e",
  fonte_municipal: "#c0603a",
  fonte_ecomamor: "#d99e00",
  fonte_doacoes: "#a8c256",
};

const COLECOES = [
  "paises", "cidades", "ods", "dimensoes", "fontes_financiamento",
  "modalidades_acao", "fluxos_mobilidade", "captacoes", "producoes",
  "diagnosticos_maturidade", "convenios", "eventos_internacionais",
  "riscos", "agregados",
];

/* ---------- API pública ---------- */

export async function carregarDados() {
  // Flore-ser · Passo 4: modo LOCAL — lê direto dos seeds de Goiânia (Firestore religado no Passo 7).
  try {
    const raw = await lerSeeds();
    console.info("[dados] Origem: seeds locais (data/seed/)");
    return construir(raw);
  } catch (e) {
    console.warn("[dados] Seeds indisponíveis — mantendo dados embutidos.", e?.message || e);
    return null;
  }
}

/* ---------- Origem 1: Firestore ---------- */

async function lerFirestore() {
  const cfg = await import("./firebase-config.js").catch(() => null);
  if (!cfg?.db) return null;
  const { collection, getDocs, doc, getDoc } =
    await import("https://www.gstatic.com/firebasejs/10.7.1/firebase-firestore.js");

  const raw = {};
  await Promise.all(COLECOES.map(async (nome) => {
    const snap = await getDocs(collection(cfg.db, nome));
    raw[nome] = snap.docs.map((d) => ({ id: d.id, ...d.data() }));
  }));
  const instSnap = await getDoc(doc(cfg.db, "config", "instituicao"));
  raw.instituicao = instSnap.exists() ? { id: instSnap.id, ...instSnap.data() } : null;

  // se vier vazio (banco não populado), sinaliza para cair no fallback
  if (!raw.cidades?.length) return null;
  return normalizarChaves(raw);
}

/* ---------- Origem 2: seeds locais ---------- */

async function lerSeeds() {
  const nomes = [...COLECOES, "instituicao"];
  const arquivos = await Promise.all(
    nomes.map((n) => fetch(`data/seed/${n}.json`).then((r) => {
      if (!r.ok) throw new Error(`${n}.json HTTP ${r.status}`);
      return r.json();
    }))
  );
  const raw = {};
  nomes.forEach((n, i) => { raw[n] = arquivos[i]; });
  return normalizarChaves(raw);
}

// unifica nomes de coleção -> chaves curtas usadas em construir()
function normalizarChaves(raw) {
  return {
    paises: raw.paises || [],
    cidades: raw.cidades || [],
    ods: raw.ods || [],
    dimensoes: raw.dimensoes || [],
    fontes: raw.fontes_financiamento || [],
    modalidades: raw.modalidades_acao || [],
    fluxos: raw.fluxos_mobilidade || [],
    captacoes: raw.captacoes || [],
    producoes: raw.producoes || [],
    diagnosticos: raw.diagnosticos_maturidade || [],
    convenios: raw.convenios || [],
    eventos: raw.eventos_internacionais || [],
    riscos: raw.riscos || [],
    agregados: raw.agregados || [],
    instituicao: raw.instituicao || null,
  };
}

/* ---------- Construção do formato legado ---------- */

function construir(raw) {
  const paisPorId = Object.fromEntries(raw.paises.map((p) => [p.id, p]));

  // CITIES: junta cidade + país + fluxos OUT/IN
  const CITIES = raw.cidades.map((c) => {
    const fl = raw.fluxos.filter((f) => f.cidade_id === c.id);
    const out = fl.find((f) => f.tipo === "OUT")?.quantidade || 0;
    const inn = fl.find((f) => f.tipo === "IN")?.quantidade || 0;
    return {
      city: c.nome,
      country: paisPorId[c.pais_id]?.nome || "",
      cont: c.continente,
      lat: c.lat, lon: c.lon,
      out, in: inn,
      status: c.status || "planejado",   // 'realizado' = já teve atividade no espaço
      levantamento: c.levantamento || null, // inventário botânico do espaço (quando feito)
    };
  });

  // ODS
  const ODS_COLORS = {}, ODS_NAMES = {};
  raw.ods.forEach((o) => { ODS_COLORS[o.numero] = o.cor; ODS_NAMES[o.numero] = o.nome; });

  // PRODUCOES
  const PRODUCOES = raw.producoes.map((p) => ({
    t: p.titulo,
    au: (p.autores || []).join(", "),
    j: p.veiculo,
    src: p.fonte_dados,
    d: `${MESES[p.mes] || ""}/${p.ano}`,
    tipo: p.tipo,
    st: (p.status === "plantada" ? "Validado" : "Pendente"), // plantada -> Validado; planejada -> Pendente
    intl: p.veiculo === "Nativa do Cerrado",                 // "nativa do Cerrado" reaproveita o realce de destaque
    cat: p.veiculo,                                          // categoria botânica (Nativa/PANC/Medicinal)
    ods: p.ods || [],
    tema: p.tema,
    cita: p.cita_fomento,
  }));

  // HUB
  const inst = raw.instituicao;
  const HUB = inst
    ? { name: inst.sede_cidade, lat: inst.sede_lat, lon: inst.sede_lon }
    : null;

  // radar (dimensões núcleo, ano mais recente)
  const radarAxes = raw.diagnosticos
    .filter((d) => !d.deleted_at && RADAR_LABEL[d.dimensao_id])
    .sort((a, b) => (raw.dimensoes.findIndex((x) => x.id === a.dimensao_id))
                  - (raw.dimensoes.findIndex((x) => x.id === b.dimensao_id)))
    .map((d) => ({ label: RADAR_LABEL[d.dimensao_id], value: d.score }));

  // financiamento por fonte (R$), maior -> menor
  const financePorFonte = raw.captacoes
    .filter((c) => !c.deleted_at)
    .sort((a, b) => b.valor - a.valor)
    .map((c) => ({
      label: raw.fontes.find((f) => f.id === c.fonte_id)?.nome || c.fonte_id,
      value: c.valor,
      color: FONTE_COR[c.fonte_id] || "#7fd9e8",
    }));

  // registros (somente não apagados), preservando a ordem do seed
  const ativos = (arr) => arr.filter((x) => !x.deleted_at);
  const convenios = ativos(raw.convenios);
  const eventos = ativos(raw.eventos);
  const riscos = ativos(raw.riscos);

  // agregados pré-computados (gráficos de população)
  const agg = Object.fromEntries(raw.agregados.map((a) => [a.id, a]));
  const finOrigem = agg.fin_origem?.slices || null;
  const finPorMod = agg.fin_modalidade?.series || null;
  const convRegiao = agg.conv_regiao?.series || null;
  const convTipo = agg.conv_tipo?.slices || null;

  return {
    CITIES, ODS_COLORS, ODS_NAMES, PRODUCOES, HUB, radarAxes, financePorFonte,
    convenios, eventos, riscos, finOrigem, finPorMod, convRegiao, convTipo,
  };
}

/* ---------- util ---------- */
function comTimeout(promise, ms) {
  return Promise.race([
    promise,
    new Promise((_, rej) => setTimeout(() => rej(new Error("timeout")), ms)),
  ]);
}
