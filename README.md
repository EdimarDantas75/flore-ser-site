# 🌱 Flore-Ser · Site + Painel de Extensão Socioambiental

Sistema do projeto de extensão **Flore-Ser** — *"ocupar os espaços públicos comuns como forma de (r)existência"* — da Universidade Federal de Goiás (Chamada Pública FAPEG nº 12/2025). Ressignifica praças, jardins e canteiros de **Goiânia** com mutirões de plantio (nativas do Cerrado, PANCs, hortas), oficinas de arte-educação e eventos culturais.

O painel foi construído sobre a arquitetura do painel-irmão **Ecoa** (internacionalização/UFG) e **regionalizado** para a realidade municipal. Hoje é um **sistema único** com a identidade **"Herbário Comum"**.

## 📦 Este repositório é um sistema único com duas faces

| Página | O que é |
|---|---|
| **`index.html`** | **Home / site de divulgação** (público) — apresenta o projeto e leva ao painel. É **gerada** de `_v1-divulgacao/index.html` por `scripts/gerar-index.py` e usa os estilos da v1 (`_v1-divulgacao/styles.css`). |
| **`painel.html`** | **O painel** — dashboard com abertura fotográfica, mapa de satélite de Goiânia e views derivadas do inventário real de ações. |

> A pasta `_v1-divulgacao/` é a **fonte da landing** (html/css/js/assets) — não é mais "congelada". **Edite a landing lá** e rode `python scripts/gerar-index.py` para atualizar a raiz.

## ▶️ Como rodar (IMPORTANTE)

O painel usa **ES Modules** + **`fetch`** dos dados locais, que **só funcionam via `http://`** — abrir os HTML direto (`file://`) **não funciona** (o navegador bloqueia). Suba o servidor de desenvolvimento:

```bash
# na pasta do projeto:
python serve.py
# depois abra no navegador:
#   http://localhost:5051            ← home (site de divulgação)
#   http://localhost:5051/painel.html  ← painel
```

O `serve.py` é multi-thread e manda `no-cache` (evita versões velhas em cache). Sem ele, `python -m http.server 5051` ou `npx serve -l 5051` também servem.

## 🎨 Identidade — "Herbário Comum"

Paleta de herbário/Cerrado — papel `#F4EDDD`, creme `#EADFC7`, verde-musgo `#38512F`, oliva `#5C6A34`, terracota `#C0603A`, ocre `#D89B34`, tinta `#2A2418`. Tipografia **Fraunces** (display) + **Source Serif 4** (texto) + **Space Mono** (dados). A **abertura do painel** usa a foto de inspiração do projeto (`assets/img/hero-cerrado.jpg`).

## 🗂️ Estrutura

```
Flore-Ser/
├── index.html              # home / site de divulgação (usa _v1-divulgacao/styles.css)
├── painel.html             # casca do painel (abertura, topbar, sidebar, main)
├── styles.css              # design system do painel (identidade Herbário Comum)
├── script.js               # app do painel (views, mapa, render)
├── serve.py                # servidor de dev (porta 5051, no-cache, multi-thread)
├── apresentacao.html       # apresentação institucional (slides)
├── assets/js/
│   ├── firebase-config.js  # config Firebase + flag USAR_FIREBASE
│   ├── data-source.js      # camada de dados (seeds → construir())
│   ├── data-write.js       # operações de escrita
│   ├── auth.js             # autenticação
│   └── i18n.js             # (desativado — app é pt-BR)
├── data/
│   ├── seed/*.json         # dados reais de Goiânia (derivados do Inventário de Ações)
│   ├── seed/Inventario Flore-Ser.xlsx  # inventário-fonte
│   └── world.json          # topojson do globo 3D
├── scripts/
│   ├── gerar-index.py      # regenera o index.html da raiz a partir da landing
│   └── publicar.sh         # publica o snapshot público (GitHub Pages, sem chaves)
├── firebase.json · firestore.rules · storage.rules · .firebaserc
└── _v1-divulgacao/         # fonte da landing (html/css/js/assets)
```

## 🔌 Modo de operação atual: **LOCAL**

- `USAR_FIREBASE = false` (em `assets/js/firebase-config.js`) → painel **público, sem login**.
- `carregarDados()` lê direto de `data/seed/*.json` (Firestore desligado).
- **Todas as views são honestas**: os números vêm do inventário real (13 espaços com atividade registrada, sendo 2 pilotos — Biblioteca Central e Humanidades 2) e as **metas do plano** (24 espaços, 100 extensionistas, ~10.000 pessoas) aparecem sempre como *meta*, nunca como realizado.

Para trocar os dados, edite os JSON em `data/seed/` (mantendo o schema).

## 🗺️ Mapa (Google Maps com reserva Esri)

O painel usa a **Google Maps JavaScript API** (`MAPA_PROVEDOR='google'` em `script.js`, chave em `GMAPS_KEY`). Se o Google recusar a chave (billing/restrição), o mapa **cai sozinho no híbrido Esri via Leaflet** (satélite + estradas + nomes, grátis) — nunca fica vazio. O Leaflet está vendorizado em `_v1-divulgacao/assets/vendor/leaflet/`. Os marcadores são passarinhos com o nome do lugar; o campo **`status`** de cada espaço (`data/seed/cidades.json`) controla a aparência: `realizado` = sólido · `planejado` = esmaecido.

> ⚠️ A chave do Maps é **de navegador** (visível por design) e vai junto no site público — a proteção certa é no [Google Cloud](https://console.cloud.google.com) →
> *Credenciais*: **Referenciadores HTTP** (`http://localhost:5051/*` + `https://edimardantas75.github.io/*`) e **Restrição de API** só para *Maps JavaScript API*, com **billing ativo**. A chave atual é herdada do projeto irmão: restrinja-a ou troque por uma própria.

## 🚀 Publicar com backend próprio (Firebase) — quando quiser

O modelo de acesso planejado é **"os dois"**: área **pública** (qualquer pessoa explora) + área de **gestão** com login (equipe edita dados).

Passos:
1. Criar um projeto Firebase próprio (ex.: `flore-ser-ufg`) no [console](https://console.firebase.google.com).
2. Colar as credenciais em `assets/js/firebase-config.js` e o projeto em `.firebaserc`.
3. Popular o Firestore com os seeds (`data/seed/`) — as coleções mantêm os nomes atuais.
4. Ajustar `firestore.rules` para **leitura pública** + **escrita autenticada** (gestão).
5. Religar `USAR_FIREBASE = true` e implementar o fluxo "os dois" (público + login opcional).
6. Publicar: `firebase deploy --only hosting`.

> ⚠️ As credenciais atuais em `firebase-config.js` ainda são do projeto **internacionaliza-ufg** — não usar em produção sem criar o projeto próprio.
> Nota: o hosting **publica `data/seed/`** de propósito — em modo local o painel lê os JSON de lá.

## ✅ Status da regionalização

- [x] **1.** Rebrand de identidade — hoje **"Herbário Comum"** em todo o sistema (site + painel)
- [x] **2.** pt-BR (motor i18n desativado)
- [x] **3.** Menu e títulos das views em vocabulário Flore-Ser
- [x] **4.** Seeds reais de Goiânia (Inventário de Ações) + modo local + views honestas
- [x] **5.** Mapa de Goiânia — satélite **Esri/Leaflet grátis** (Google opcional)
- [x] **6.** Conteúdo interno das views + views novas (Espaços Públicos, Exposição Fotográfica)
- [x] **6b.** Editor de dados (CRUD) com os ids reais dos seeds (fontes, modalidades, dimensões, regiões)
- [ ] **7.** Firebase próprio + "os dois" (público + gestão)

### Pendências com a coordenação
- [ ] Confirmar os **espaços restantes da meta de 24** (o inventário registra atividade em 13; faltam 11 a mapear)
- [ ] Definir se o **Parreiral** entra como espaço (tem acervo fotográfico, mas não está no inventário)
- [ ] Arquivo da **marca institucional** → `assets/img/marcas-institucionais.jpg`
- [ ] Números de **público das edições** da Feira Multicultural e os anos das edições II e IV

## 🌐 Publicação — link público (GitHub Pages)

Site no ar: **https://edimardantas75.github.io/flore-ser-site/** (painel em `/painel.html`).

É um **snapshot público** no repositório separado `flore-ser-site` — o repositório
principal continua **privado**. A chave do **Firebase** é removida na publicação;
a do **Google Maps** vai junto de propósito (chave de navegador, protegida por
restrição de referenciador no Google Cloud).

**Para atualizar o site público** depois de mexer no projeto:

```bash
bash scripts/publicar.sh      # gera o index, monta o snapshot limpo e faz push
```

## 🔥 Firebase Hosting — URL própria (flore-ser-86479.web.app)

Projeto Firebase: **flore-ser-86479** (criado pela coordenação). O deploy é
**automático, sem terminal**: o workflow `.github/workflows/deploy-firebase.yml`
viaja no snapshot do `publicar.sh` e roda no repositório público `flore-ser-site`
a cada push, usando o secret `FIREBASE_SERVICE_ACCOUNT` (chave de conta de
serviço gerada no console → Configurações do projeto → Contas de serviço,
colada em flore-ser-site → Settings → Secrets → Actions).

Ou seja: `bash scripts/publicar.sh` publica no GitHub Pages **e** dispara o
deploy no Firebase. Site: **https://flore-ser-86479.web.app** (painel em
`/painel.html`, apresentação em `/apresentacao.html`). Lembrar de incluir
`https://flore-ser-86479.web.app/*` nos referenciadores da chave do Maps.

---

**Flore-Ser** · Projeto de Extensão · UFG · FAPEG 12/2025 · Coordenação: Elis Veloso (SIBI/UFG) e Luiz Mello (FCS) · Goiânia — GO

Autor do Sistema: Edimar Dantas (UFG)
