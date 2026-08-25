// =============================================================
//  Internacionaliza · UFG — i18n controlado (PT ⇄ EN)
//
//  Tradução própria, sem serviços externos. O app sempre RENDERIZA
//  em PT (fonte da verdade); este motor sobrepõe EN traduzindo os
//  nós de texto e atributos do DOM via dicionário exato, e desfaz
//  (EN→PT) ao voltar. Como os dados são fixos, todo texto renderizado
//  é constante e o dicionário cobre 100%.
// =============================================================

const ATTRS = ["placeholder", "title", "aria-label"];

// Dicionário PT → EN. (chave = string EXATA renderizada, sem espaços nas pontas)
export const DICT = {
  // ---------- Chrome: topbar / sidebar / gate ----------
  "Universidade Federal de Goiás": "Federal University of Goiás",
  "Pró-Reitoria de Pós-Graduação": "Office of the Dean of Graduate Studies",
  "Relações Internacionais": "International Relations",
  "Visão Geral": "Overview",
  "Painel Institucional de Internacionalização": "Institutional Panel on Internationalization",
  "Buscar país, pesquisador, convênio, fonte…": "Search country, researcher, agreement, source…",
  "Recolher menu": "Collapse menu",
  "Internacionaliza": "Internacionaliza",
  "Acesso restrito. Entre com sua conta institucional para continuar.":
    "Restricted access. Sign in with your institutional account to continue.",
  "Entrar com Google": "Sign in with Google",
  "Traduzir para inglês": "Translate to English",
  "Voltar ao português": "Back to Portuguese",
  "Papel:": "Role:",
  "Sair": "Sign out",

  // ---------- NAV: grupos e itens ----------
  "Panorama": "Overview",
  "Gestão": "Management",
  "Dimensões de Maturidade": "Maturity Dimensions",
  "Aprendizagem & Qualidade": "Learning & Quality",
  "Governança": "Governance",
  "Mapa Global": "Global Map",
  "Financiamento & Fomento": "Funding & Development",
  "Modalidades de Ação": "Action Modalities",
  "Perfis": "Profiles",
  "Eventos Internacionais": "International Events",
  "ODS · Agenda 2030": "SDGs · 2030 Agenda",
  "Diagnóstico & Maturidade": "Diagnosis & Maturity",
  "Convênios & Parcerias": "Agreements & Partnerships",
  "Mobilidade Física": "Physical Mobility",
  "Mobilidade Virtual": "Virtual Mobility",
  "Currículo Internacionalizado": "Internationalized Curriculum",
  "Produção Científica": "Scientific Production",
  "Beneficiários & Diversidade": "Beneficiaries & Diversity",
  "Comunicação": "Communication",
  "Internacionalização em Casa": "Internationalization at Home",
  "Competências Interculturais": "Intercultural Competencies",
  "Capacitação Docente": "Faculty Development",
  "Capacitação para Internacionalização": "Capacity Building for Internationalization",
  "Avaliação & Qualidade": "Evaluation & Quality",
  "Riscos": "Risks",
  "NOVO": "NEW",

  // ---------- Crumbs ----------
  "Transversal": "Cross-cutting",
  "Dimensão 1": "Dimension 1",
  "Dimensão 2": "Dimension 2",
  "Dimensão 3": "Dimension 3",
  "Dimensão 4": "Dimension 4",
  "Dimensão 5": "Dimension 5",
  "Dimensão 6": "Dimension 6",
  "Dimensão 7": "Dimension 7",

  // ---------- Footer ----------
  "Dados de demonstração · Diretoria Administrativa e Financeira · DAF/PRPG · UFG · 2026":
    "Demonstration data · Administrative and Financial Office · DAF/PRPG · UFG · 2026",

  // ---------- Continentes / países ----------
  "Europa": "Europe",
  "América Latina e Caribe": "Latin America and the Caribbean",
  "América do Norte": "North America",
  "África": "Africa",
  "Ásia": "Asia",
  "Oceania": "Oceania",
  "França": "France",
  "Alemanha": "Germany",
  "Espanha": "Spain",
  "Itália": "Italy",
  "Holanda": "Netherlands",
  "Países Baixos": "Netherlands",
  "Reino Unido": "United Kingdom",
  "México": "Mexico",
  "Argentina": "Argentina",
  "Colômbia": "Colombia",
  "Chile": "Chile",
  "Peru": "Peru",
  "África do Sul": "South Africa",
  "Moçambique": "Mozambique",
  "Quênia": "Kenya",
  "China": "China",
  "Japão": "Japan",
  "Índia": "India",
  "Austrália": "Australia",
  "Canadá": "Canada",
  "EUA": "USA",

  // ---------- Mapa-múndi (rótulos SVG, maiúsculas) ----------
  "AMÉRICA DO NORTE": "NORTH AMERICA",
  "AMÉRICA LATINA E CARIBE": "LATIN AMERICA & CARIBBEAN",
  "EUROPA": "EUROPE",
  "ÁFRICA": "AFRICA",
  "ÁSIA": "ASIA",
  "OCEANIA": "OCEANIA",

  // ---------- Cidades ----------
  "Lisboa": "Lisbon", "Madri": "Madrid", "Cidade do México": "Mexico City",
  "Cidade do Cabo": "Cape Town", "Nairóbi": "Nairobi", "Pequim": "Beijing",
  "Tóquio": "Tokyo", "Nova Délhi": "New Delhi", "Berlim": "Berlin",
  "Londres": "London", "Amsterdã": "Amsterdam", "Bolonha": "Bologna",

  // Rótulos combinados "Cidade · País" (tooltip do mapa, foco, top destinos)
  "Lisboa · Portugal": "Lisbon · Portugal",
  "Porto · Portugal": "Porto · Portugal",
  "Coimbra · Portugal": "Coimbra · Portugal",
  "Paris · França": "Paris · France",
  "Montpellier · França": "Montpellier · France",
  "Berlim · Alemanha": "Berlin · Germany",
  "Madri · Espanha": "Madrid · Spain",
  "Barcelona · Espanha": "Barcelona · Spain",
  "Londres · Reino Unido": "London · United Kingdom",
  "Amsterdã · Países Baixos": "Amsterdam · Netherlands",
  "Bolonha · Itália": "Bologna · Italy",
  "Boston · EUA": "Boston · USA",
  "Davis · EUA": "Davis · USA",
  "Toronto · Canadá": "Toronto · Canada",
  "Cidade do México · México": "Mexico City · Mexico",
  "Buenos Aires · Argentina": "Buenos Aires · Argentina",
  "Bogotá · Colômbia": "Bogotá · Colombia",
  "Santiago · Chile": "Santiago · Chile",
  "Lima · Peru": "Lima · Peru",
  "Cidade do Cabo · África do Sul": "Cape Town · South Africa",
  "Maputo · Moçambique": "Maputo · Mozambique",
  "Nairóbi · Quênia": "Nairobi · Kenya",
  "Pequim · China": "Beijing · China",
  "Tóquio · Japão": "Tokyo · Japan",
  "Nova Délhi · Índia": "New Delhi · India",
  "Sydney · Austrália": "Sydney · Australia",
  "Melbourne · Austrália": "Melbourne · Australia",

  // ===================================================================
  //  VISÃO GERAL
  // ===================================================================
  "Retrato consolidado da internacionalização da instituição: financiamento, mobilidade global, parcerias, produção científica e maturidade, sob um modelo de maturidade ampliado para onze dimensões aplicado a toda a instituição.":
    "A consolidated portrait of the institution's internationalization: funding, global mobility, partnerships, scientific production and maturity, under an expanded eleven-dimension maturity model applied to the whole institution.",
  "Painel Institucional": "Institutional Panel",
  "Levar a pesquisa brasileira ao mundo e trazer o mundo para a pós-graduação. Acompanhamento contínuo da internacionalização institucional em todas as suas vertentes, da captação de financiamento ao impacto científico global.":
    "Taking Brazilian research to the world and bringing the world to graduate studies. Continuous monitoring of institutional internationalization across all its fronts, from securing funding to global scientific impact.",
  "55/100 Maturidade": "55/100 Maturity",
  "118 convênios vigentes": "118 active agreements",
  "Índice de Maturidade": "Maturity Index",
  "modelo ampliado (11 dim.) · núcleo 62": "expanded model (11 dim.) · core 62",
  "Financiamento captado": "Funding raised",
  "12 meses · 9 fontes": "12 months · 9 sources",
  "Mobilidade total": "Total mobility",
  "Coautoria internacional": "International co-authorship",
  "312 de 821 produções": "312 of 821 productions",
  "Maturidade por dimensão": "Maturity by dimension",
  "Sete dimensões centrais · escala 0 a 100": "Seven core dimensions · scale 0 to 100",
  "Diagnóstico": "Diagnosis",
  "Convênios": "Agreements",
  "Mobilidade": "Mobility",
  "Currículo": "Curriculum",
  "Produção": "Production",
  "Diversidade": "Diversity",
  "Sede (UFG)": "Headquarters (UFG)",
  "Predomínio saída": "Outbound predominance",
  "Predomínio entrada": "Inbound predominance",
  "Financiamento por fonte": "Funding by source",
  "Top 6 · R$": "Top 6 · R$",
  "CAPES (PrInt/Global.edu)": "CAPES (PrInt/Global.edu)",
  "Erasmus+ / UE": "Erasmus+ / EU",
  "Institucional/PROAP": "Institutional/PROAP",
  "Bilaterais/Organismos": "Bilateral/Agencies",
  "Mobilidade por continente": "Mobility by continent",
  "OUT + IN": "OUT + IN",
  "Destaques do período": "Highlights of the period",
  "27 eventos internacionais organizados": "27 international events organized",
  "Congressos, escolas e workshops com 14 países": "Conferences, schools and workshops with 14 countries",
  "9 acordos de dupla titulação ativos": "9 active dual-degree agreements",
  "SRI · Europa, América Latina e Ásia": "SRI · Europe, Latin America and Asia",
  "540 pesquisadores com engajamento": "540 researchers engaged",
  "Mobilidade, coautoria ou rede internacional": "Mobility, co-authorship or international network",

  // ===================================================================
  //  MAPA GLOBAL
  // ===================================================================
  "Fluxos de pesquisadores, estudantes e docentes pelo mundo. Cada nó é uma cidade parceira, dimensionado pelo volume de mobilidade e colorido pela direção predominante. Filtre por continente para detalhar país e cidade.":
    "Flows of researchers, students and faculty across the world. Each node is a partner city, sized by mobility volume and colored by predominant direction. Filter by continent to drill down to country and city.",
  "Todos os continentes": "All continents",
  "UFG": "UFG",
  "Saída (OUT)": "Outbound (OUT)",
  "Entrada (IN)": "Inbound (IN)",
  "Equilíbrio": "Balanced",
  "Pessoas mobilizadas": "People mobilized",
  "ao exterior": "abroad",
  "ao Brasil": "to Brazil",
  "Países · cidades": "Countries · cities",
  "com fluxo": "with flow",
  "Detalhe por cidade": "Detail by city",
  "Cidade": "City", "País": "Country", "Continente": "Continent",
  "OUT": "OUT", "IN": "IN", "Saldo": "Balance", "Total": "Total",
  "Saldo IN/OUT": "IN/OUT balance",
  "Limpar seleção": "Clear selection",

  // ===================================================================
  //  FINANCIAMENTO
  // ===================================================================
  "Identificação de todas as fontes de recurso que sustentam a internacionalização, não apenas CAPES. Mapeia origem (nacional, estadual, internacional, próprio), modalidade de aplicação e instrumento de execução (TED, AUXPE, convênio, fundação de apoio).":
    "Identification of all funding sources that sustain internationalization, not just CAPES. Maps origin (national, state, international, own), application modality and execution instrument (TED, AUXPE, agreement, support foundation).",
  "Total captado (12m)": "Total raised (12m)",
  "9 fontes ativas": "9 active sources",
  "Recurso internacional": "International funding",
  "23% do total · UE, bilaterais, organismos": "23% of total · EU, bilateral, agencies",
  "Contrapartida institucional": "Institutional counterpart",
  "PROAP + matching": "PROAP + matching",
  "Execução comprometida": "Committed execution",
  "empenhado/liquidado": "committed/settled",
  "Distribuição por origem": "Distribution by origin",
  "Captado": "Raised",
  "Federal (CAPES, CNPq, FINEP)": "Federal (CAPES, CNPq, FINEP)",
  "Internacional (UE, bilaterais, organismos)": "International (EU, bilateral, agencies)",
  "Estadual (FAPEG)": "State (FAPEG)",
  "Institucional/próprio": "Institutional/own",
  "Aplicação por fonte": "Application by source",
  "Aplicação por modalidade": "Application by modality",
  "Por fonte": "By source",
  "Por modalidade": "By modality",
  "Missões e diárias intl.": "International missions and per diems",
  "Projetos de cooperação": "Cooperation projects",
  "Mobilidade (apoio)": "Mobility (support)",
  "Infraestrutura/serviços": "Infrastructure/services",
  "Dupla titulação/cotutela": "Dual degree/co-tutelle",
  "Instrumentos de financiamento ativos": "Active funding instruments",
  "Fonte · modalidade · instrumento · vigência": "Source · modality · instrument · term",
  "Fonte / Programa": "Source / Program",
  "Modalidade": "Modality", "Instrumento": "Instrument", "Valor": "Value",
  "Vigência": "Term", "Status": "Status",
  "Bolsas pagas diretamente pela agência (fora do TED) não compõem o custeio institucional.":
    "Scholarships paid directly by the agency (outside the TED) are not part of institutional funding.",
  "CAPES · Global.edu (Rede GAIA)": "CAPES · Global.edu (GAIA Network)",
  "Missões + projetos": "Missions + projects",
  "CAPES · PrInt": "CAPES · PrInt",
  "Mobilidade + missões": "Mobility + missions",
  "CNPq · Chamada cooperação": "CNPq · Cooperation call",
  "Projetos de pesquisa": "Research projects",
  "Convênio": "Agreement",
  "Erasmus+ KA171": "Erasmus+ KA171",
  "Mobilidade discente/docente": "Student/faculty mobility",
  "Acordo UE": "EU agreement",
  "FAPEG · Cofinanciamento": "FAPEG · Co-funding",
  "Contrapartida rede": "Network counterpart",
  "Institucional · PROAP": "Institutional · PROAP",
  "Apoio à pós-graduação": "Graduate studies support",
  "Recurso próprio": "Own funds",
  "Fulbright / DAAD": "Fulbright / DAAD",
  "Bolsas e cátedras": "Scholarships and chairs",
  "Bilateral": "Bilateral",
  "UNESCO / BID": "UNESCO / IDB",
  "Projeto temático": "Thematic project",
  "Organismo intl.": "Intl. agency",
  "Vigente": "Active",
  "Em adesão": "Joining",
  "Prospecção": "Prospecting",

  // ===================================================================
  //  MODALIDADES DE AÇÃO
  // ===================================================================
  "Taxonomia das ações de internacionalização da instituição, classificada segundo os eixos do modelo de internacionalização abrangente (Hudzik) e os seis pilares ACE/CIGE: mobilidade, parcerias, currículo/co-currículo, política docente, compromisso institucional e governança.":
    "Taxonomy of the institution's internationalization actions, classified by the axes of the comprehensive internationalization model (Hudzik) and the six ACE/CIGE pillars: mobility, partnerships, curriculum/co-curriculum, faculty policy, institutional commitment and governance.",
  "Ações registradas (12m)": "Actions recorded (12m)",
  "8 modalidades": "8 modalities",
  "Internacionalização em casa": "Internationalization at home",
  "COIL, disciplinas em inglês, idiomas": "COIL, courses in English, languages",
  "Estudantes internacionais": "International students",
  "recebidos · 18 países": "received · 18 countries",
  "Redes/consórcios": "Networks/consortia",
  "participação institucional": "institutional participation",
  "Volume por modalidade de ação": "Volume by action modality",
  "nº de ações no período": "no. of actions in the period",
  "Mobilidade discente (sanduíche)": "Student mobility (sandwich)",
  "Cooperação em pesquisa": "Research cooperation",
  "Missões docentes/técnicas": "Faculty/technical missions",
  "Eventos internacionais": "International events",
  "Acordos e convênios": "Accords and agreements",
  "Captação de estrangeiros": "Attracting foreigners",
  "Dupla titulação / cotutela": "Dual degree / co-tutelle",
  "Referências internacionais incorporadas": "International references incorporated",
  "A taxonomia e os indicadores deste sistema seguem os principais marcos da literatura de internacionalização do ensino superior:":
    "The taxonomy and indicators of this system follow the main milestones of the higher-education internationalization literature:",
  "Internacionalização abrangente: infundir a dimensão internacional no ensino, pesquisa e extensão; compromisso confirmado pela ação.":
    "Comprehensive internationalization: infusing the international dimension into teaching, research and outreach; commitment confirmed by action.",
  "Seis pilares: compromisso institucional; governança e estrutura; currículo e co-currículo; política docente; mobilidade; e parcerias.":
    "Six pillars: institutional commitment; governance and structure; curriculum and co-curriculum; faculty policy; mobility; and partnerships.",
  "Definição-referência: integrar a dimensão internacional, intercultural e global aos fins, funções e oferta da educação.":
    "Reference definition: integrating the international, intercultural and global dimension into the purposes, functions and delivery of education.",
  "Indicadores de mapeamento e perfil; foco em insumos, produtos e resultados/impacto.":
    "Mapping and profile indicators; focus on inputs, outputs and outcomes/impact.",
  "Internacionalização para a sociedade: extensão internacional e impacto comunitário, não só mobilidade.":
    "Internationalization for society: international outreach and community impact, not just mobility.",
  "COIL, currículo internacionalizado, idiomas e interculturalidade para quem não viaja.":
    "COIL, internationalized curriculum, languages and interculturality for those who do not travel.",
  "Modalidades × indicadores monitorados": "Modalities × monitored indicators",
  "mapeamento operacional": "operational mapping",
  "Pilar ACE/CIGE": "ACE/CIGE pillar",
  "Fonte de dado": "Data source",
  "Indicador-chave": "Key indicator",
  "ODS típica": "Typical SDG",
  "Mobilidade discente": "Student mobility",
  "Pedidos de bolsa (DAF)": "Scholarship requests (DAF)",
  "Nº saídas/entradas, duração média": "No. outbound/inbound, average duration",
  "Parcerias": "Partnerships",
  "Coautoria internacional (%)": "International co-authorship (%)",
  "SRI (parâmetro único)": "SRI (single parameter)",
  "Disciplinas em LE, COIL, idiomas": "Courses in foreign language, COIL, languages",
  "Acordos/convênios": "Accords/agreements",
  "Banco da SRI": "SRI database",
  "Nº ativos, cobertura geográfica": "No. active, geographic coverage",
  "SRI · Sucupira": "SRI · Sucupira",
  "Estudantes recebidos por país": "Students received by country",
  "Cadastro institucional": "Institutional registry",
  "Eventos, países, participantes": "Events, countries, participants",

  // ===================================================================
  //  CONVÊNIOS
  // ===================================================================
  "Acordos internacionais vigentes geridos pela SRI (Comitê Administrativo): MoUs, acordos de cooperação, dupla titulação e cotutela. Integração via base de dados da SRI, com cobertura geográfica e situação de cada instrumento.":
    "Active international accords managed by the SRI (Administrative Committee): MoUs, cooperation accords, dual degrees and co-tutelle. Integration via the SRI database, with geographic coverage and status of each instrument.",
  "Convênios vigentes": "Active agreements",
  "34 países": "34 countries",
  "Dupla titulação": "Dual degree",
  "mestrado e doutorado": "master's and doctorate",
  "Cotutela ativa": "Active co-tutelle",
  "teses em andamento": "ongoing theses",
  "A vencer (12m)": "Expiring (12m)",
  "renovação recomendada": "renewal recommended",
  "Convênios por região": "Agreements by region",
  "nº de instrumentos": "no. of instruments",
  "Por tipo de instrumento": "By instrument type",
  "Acordos": "Accords",
  "Memorando (MoU)": "Memorandum (MoU)",
  "Acordo de cooperação": "Cooperation accord",
  "Cotutela": "Co-tutelle",
  "Acordos em destaque": "Featured accords",
  "gestão SRI": "SRI management",
  "Instituição parceira": "Partner institution",
  "Tipo": "Type", "Áreas": "Areas",
  "Cooperação": "Cooperation", "MoU": "MoU",
  "A vencer": "Expiring", "Em assinatura": "Being signed",
  "Sustentabilidade, Saúde": "Sustainability, Health",
  "Biodiversidade": "Biodiversity",
  "Clima, Energia": "Climate, Energy",
  "Equidade social": "Social equity",
  "Saúde Única": "One Health",
  "Inovação": "Innovation",
  "Universidade de Coimbra": "University of Coimbra",
  "Univ. de Buenos Aires": "Univ. of Buenos Aires",

  // ===================================================================
  //  MOBILIDADE FÍSICA
  // ===================================================================
  "Movimentações físicas IN (entrada no Brasil) e OUT (saída para o exterior) de discentes, docentes e técnicos, coletadas automaticamente a partir dos pedidos de gastos e registros de bolsas do sistema DAF. A internacionalização sem deslocamento é acompanhada no módulo Mobilidade Virtual.":
    "Physical IN (entry into Brazil) and OUT (departure abroad) movements of students, faculty and staff, collected automatically from spending requests and scholarship records of the DAF system. Internationalization without travel is tracked in the Virtual Mobility module.",
  "Total mobilizados": "Total mobilized",
  "12 meses": "12 months",
  "brasileiros ao exterior": "Brazilians abroad",
  "estrangeiros ao Brasil": "foreigners to Brazil",
  "Balanço IN/OUT": "IN/OUT balance",
  "déficit de entrada": "inbound deficit",
  "OUT vs. IN": "OUT vs. IN",
  "Saída por modalidade (OUT)": "Outbound by modality (OUT)",
  "Entrada por modalidade (IN)": "Inbound by modality (IN)",
  "Disc.": "Stud.", "Doc.": "Fac.", "Téc.": "Staff",
  "Doutorado sanduíche": "Sandwich doctorate",
  "Prof. visitante sênior": "Senior visiting professor",
  "Missão de trabalho": "Work mission",
  "Capacitação técnica": "Technical training",
  "Estágio pós-doutoral": "Postdoctoral fellowship",
  "Dout. sanduíche no Brasil": "Sandwich doctorate in Brazil",
  "Prof. visitante no Brasil": "Visiting professor in Brazil",
  "Pós-doc no Brasil": "Postdoc in Brazil",
  "Estudante de intercâmbio": "Exchange student",
  "Cooperação técnica": "Technical cooperation",
  "Top destinos (cidades)": "Top destinations (cities)",

  // ===================================================================
  //  MOBILIDADE VIRTUAL
  // ===================================================================
  "Mobilidade virtual: experiências internacionais sem deslocamento físico: intercâmbio virtual, disciplinas COIL, bancas e palestras internacionais remotas, estágios virtuais e semanas internacionais híbridas. Complementa a mobilidade física, amplia o alcance e reduz barreiras de custo, visto e tempo.":
    "Virtual mobility: international experiences without physical travel: virtual exchange, COIL courses, remote international defenses and lectures, virtual internships and hybrid international weeks. It complements physical mobility, broadens reach and reduces cost, visa and time barriers.",
  "Participações virtuais (12m)": "Virtual participations (12m)",
  "sem deslocamento físico": "without physical travel",
  "Estudantes únicos alcançados": "Unique students reached",
  "cobertura ampliada": "broadened coverage",
  "Disciplinas COIL ativas": "Active COIL courses",
  "salas colaborativas internacionais": "international collaborative classrooms",
  "Países envolvidos": "Countries involved",
  "parcerias remotas": "remote partnerships",
  "Mobilidade física vs. virtual": "Physical vs. virtual mobility",
  "nº de participações nos últimos 12 meses": "no. of participations in the last 12 months",
  "Física (OUT+IN)": "Physical (OUT+IN)",
  "Virtual": "Virtual",
  "A mobilidade virtual cresce como via complementar: atinge quem não pode se deslocar e mantém parcerias ativas de forma contínua.":
    "Virtual mobility grows as a complementary path: it reaches those who cannot travel and keeps partnerships continuously active.",
  "Por modalidade virtual": "By virtual modality",
  "Participações": "Participations",
  "Disciplinas COIL": "COIL courses",
  "Intercâmbio virtual": "Virtual exchange",
  "Bancas / defesas remotas": "Remote defenses",
  "Palestras internacionais": "International lectures",
  "Estágio virtual": "Virtual internship",
  "Semana internacional híbrida": "Hybrid international week",
  "Top países em mobilidade virtual": "Top countries in virtual mobility",
  "participações": "participations",
  "Por que medir a mobilidade virtual": "Why measure virtual mobility",
  "A mobilidade virtual ganhou centralidade no pós-pandemia como forma inclusiva de internacionalização, com referências de Beelen & Jones e da literatura de intercâmbio virtual e COIL:":
    "Virtual mobility gained prominence after the pandemic as an inclusive form of internationalization, drawing on Beelen & Jones and the virtual exchange and COIL literature:",
  "Acesso e equidade": "Access and equity",
  "Elimina barreiras de custo, visto e tempo: alcança estudantes que nunca fariam mobilidade física.":
    "Removes cost, visa and time barriers: reaches students who would never do physical mobility.",
  "Continuidade": "Continuity",
  "Mantém parcerias internacionais ativas de forma contínua, e não apenas pontual.":
    "Keeps international partnerships continuously active, not just occasionally.",
  "COIL": "COIL",
  "Disciplinas espelhadas com universidades estrangeiras, com resultados de aprendizagem interculturais avaliáveis.":
    "Mirrored courses with foreign universities, with assessable intercultural learning outcomes.",
  "Complementar, não substituta": "Complementary, not a substitute",
  "A mobilidade virtual amplia a física; juntas, formam a estratégia de mobilidade da instituição.":
    "Virtual mobility expands physical mobility; together they form the institution's mobility strategy.",
  "Atividades de mobilidade virtual em andamento": "Ongoing virtual mobility activities",
  "registro consolidado": "consolidated record",
  "Participantes": "Participants",
  "Disciplina COIL · Mudanças Climáticas": "COIL course · Climate Change",
  "Banca de doutorado remota": "Remote doctoral defense",
  "Ciclo de palestras internacionais": "International lecture series",
  "Estágio virtual de pesquisa": "Virtual research internship",
  "Universidade do Porto": "University of Porto",

  // ===================================================================
  //  CURRÍCULO INTERNACIONALIZADO
  // ===================================================================
  "Internacionalização do currículo (IoC): integração intencional de dimensões internacionais e interculturais nos resultados de aprendizagem, conteúdos e métodos de ensino. Vai além das disciplinas em língua estrangeira: abrange o currículo formal, o informal (co-currículo) e o oculto, na perspectiva de Leask.":
    "Internationalization of the curriculum (IoC): intentional integration of international and intercultural dimensions into learning outcomes, content and teaching methods. It goes beyond foreign-language courses: it covers the formal, informal (co-curriculum) and hidden curriculum, in Leask's perspective.",
  "Disciplinas com resultados de aprendizagem internacionalizados": "Courses with internationalized learning outcomes",
  "objetivos interculturais explícitos": "explicit intercultural objectives",
  "Disciplinas em LE (EMI)": "Foreign-language courses (EMI)",
  "inglês, espanhol, francês": "English, Spanish, French",
  "PPGs com currículo internacionalizado": "Programs with internationalized curriculum",
  "meta institucional: 60%": "institutional target: 60%",
  "acordos curriculares vigentes": "active curricular agreements",
  "Resultados de aprendizagem internacionalizados por área": "Internationalized learning outcomes by field",
  "disciplinas com objetivos interculturais mapeados": "courses with mapped intercultural objectives",
  "Ciências Ambientais": "Environmental Sciences",
  "Saúde": "Health",
  "Ciências Sociais": "Social Sciences",
  "Engenharias": "Engineering",
  "Agrárias": "Agricultural Sciences",
  "Humanas": "Humanities",
  "As três camadas do currículo (Leask)": "The three layers of the curriculum (Leask)",
  "A internacionalização do currículo não se resume às ementas. O sistema acompanha as três camadas que, juntas, formam a experiência internacional do estudante:":
    "Internationalization of the curriculum is not limited to syllabi. The system tracks the three layers that together form the student's international experience:",
  "Currículo formal": "Formal curriculum",
  "Resultados de aprendizagem, conteúdos, bibliografia e avaliação com dimensão internacional e intercultural explícita.":
    "Learning outcomes, content, bibliography and assessment with an explicit international and intercultural dimension.",
  "Currículo informal (co-currículo)": "Informal curriculum (co-curriculum)",
  "Semanas internacionais, COIL, tandem linguístico, recepção de visitantes e atividades interculturais fora da sala.":
    "International weeks, COIL, language tandem, hosting visitors and intercultural activities outside the classroom.",
  "Currículo oculto": "Hidden curriculum",
  "Mensagens implícitas do ambiente: diversidade do corpo docente, sinalização multilíngue, valorização de outras culturas.":
    "Implicit messages of the environment: faculty diversity, multilingual signage, valuing of other cultures.",
  "Acessível a todos": "Accessible to all",
  "O currículo internacionalizado é a via para alcançar quem não realiza mobilidade física: internacionalização para todos.":
    "The internationalized curriculum is the way to reach those who do not undertake physical mobility: internationalization for all.",

  // ===================================================================
  //  PRODUÇÃO CIENTÍFICA
  // ===================================================================
  "Publicações detectadas automaticamente via APIs ORCID e OpenAlex e script Lattes, sujeitas à validação do coordenador. Identificação automática de coautoria internacional, alinhamento às ODS e citação a fomentadores.":
    "Publications detected automatically via the ORCID and OpenAlex APIs and a Lattes script, subject to coordinator validation. Automatic identification of international co-authorship, alignment with SDGs and citation of funders.",
  "Detectadas (12m)": "Detected (12m)",
  "Validadas": "Validated",
  "74% do total": "74% of total",
  "38% · 41 países": "38% · 41 countries",
  "Pendentes de validação": "Pending validation",
  "aguardando coordenador": "awaiting coordinator",
  "Todas": "All",
  "Pendentes": "Pending",
  "Por tipo de produção": "By production type",
  "Produções": "Productions",
  "Artigo": "Article", "Capítulo": "Chapter", "Anais": "Proceedings",
  "Livro": "Book", "Técnica": "Technical", "Capítulo de livro": "Book chapter",
  "Coautoria internacional por país": "International co-authorship by country",
  // produção: cards (prodCard)
  "Validado": "Validated", "Pendente": "Pending",
  "Coautoria intl.": "Intl. co-authorship",
  "Cita fomento": "Cites funding", "Não cita": "Does not cite", "Citação indef.": "Citation undefined",
  "Validar": "Validate", "Contestar": "Contest", "Reclassificar": "Reclassify",
  "Biodiversidade e Sustentabilidade": "Biodiversity and Sustainability",
  "Saúde Única": "One Health",
  "Equidade e Diversidade": "Equity and Diversity",
  "Transição Energética": "Energy Transition",
  "Ciência e Inovação": "Science and Innovation",

  // ===================================================================
  //  BENEFICIÁRIOS & DIVERSIDADE
  // ===================================================================
  "Cadastro dos beneficiários das ações de internacionalização, alimentando os indicadores de diversidade e inclusão (raça, gênero, região de origem e IDH), tratados como critério transversal de equidade do sistema.":
    "Registry of the beneficiaries of internationalization actions, feeding the diversity and inclusion indicators (race, gender, region of origin and HDI), treated as a cross-cutting equity criterion of the system.",
  "Beneficiários cadastrados": "Registered beneficiaries",
  "discentes, docentes, técnicos": "students, faculty, staff",
  "Mulheres": "Women",
  "em ações de mobilidade": "in mobility actions",
  "Regiões N/NE/CO": "N/NE/CW regions",
  "origem dos beneficiários": "origin of beneficiaries",
  "Ações afirmativas": "Affirmative action",
  "cotas raciais e sociais": "racial and social quotas",
  "Gênero": "Gender",
  "Pessoas": "People",
  "Homens": "Men",
  "Não informado": "Not informed",
  "Autodeclaração de raça/cor": "Self-declared race/color",
  "Branca": "White", "Parda": "Mixed", "Preta": "Black",
  "Indígena/Amarela": "Indigenous/Asian", "N/I": "N/A",
  "Região de origem": "Region of origin",
  "Centro-Oeste": "Central-West", "Sudeste": "Southeast",
  "Nordeste": "Northeast", "Norte": "North", "Sul": "South",
  "Por que a diversidade é uma dimensão": "Why diversity is a dimension",
  "O modelo ACE/CIGE trata diversidade, equidade e inclusão como lente estratégica transversal: ir além da diversidade numérica para garantir um ambiente equitativo e acolhedor. Aqui ela é medida em cada ação internacional.":
    "The ACE/CIGE model treats diversity, equity and inclusion as a cross-cutting strategic lens: going beyond numerical diversity to ensure an equitable and welcoming environment. Here it is measured in every international action.",
  "Critério de equidade": "Equity criterion",
  "A diversidade compõe a pontuação de mérito do beneficiário: raça, gênero, região e IDH.":
    "Diversity is part of the beneficiary's merit score: race, gender, region and HDI.",
  "Equidade de acesso": "Access equity",
  "Monitorar a participação de grupos sub-representados na mobilidade internacional.":
    "Monitor the participation of underrepresented groups in international mobility.",

  // ===================================================================
  //  EVENTOS
  // ===================================================================
  "Eventos de caráter internacional organizados ou sediados pela instituição (congressos, escolas avançadas, simpósios e workshops), com instituições, países e público envolvidos.":
    "International events organized or hosted by the institution (conferences, advanced schools, symposia and workshops), with institutions, countries and audience involved.",
  "Eventos (12m)": "Events (12m)",
  "organizados/sediados": "organized/hosted",
  "palestrantes e parceiros": "speakers and partners",
  "presencial + remoto": "in-person + remote",
  "Palestrantes intl.": "Intl. speakers",
  "convidados estrangeiros": "foreign guests",
  "Eventos em destaque": "Featured events",
  "Escola Avançada em Saúde Planetária": "Advanced School in Planetary Health",
  "Simpósio Internacional de Biodiversidade do Cerrado": "International Symposium on Cerrado Biodiversity",
  "Workshop COIL · Clima e Território": "COIL Workshop · Climate and Territory",
  "Conferência de Equidade e Direitos Humanos": "Conference on Equity and Human Rights",
  "países": "countries", "palestrantes": "speakers", "univ.": "univ.",

  // ===================================================================
  //  PERFIS
  // ===================================================================
  "Perfil de internacionalização de servidores, docentes e pesquisadores: ORCID obrigatório, idiomas, mobilidades realizadas, coautoria internacional e redes. Base para extração curricular e indicadores de diversidade.":
    "Internationalization profile of staff, faculty and researchers: mandatory ORCID, languages, mobility undertaken, international co-authorship and networks. Basis for CV extraction and diversity indicators.",
  "Cadastrados c/ ORCID": "Registered w/ ORCID",
  "96% dos vinculados": "96% of affiliated",
  "Com engajamento intl.": "With intl. engagement",
  "mobilidade, coautoria ou rede": "mobility, co-authorship or network",
  "Docentes visitantes": "Visiting faculty",
  "estrangeiros recebidos": "foreigners received",
  "Idiomas declarados": "Declared languages",
  "média 1,8 por pessoa": "average 1.8 per person",
  "Perfis em destaque": "Featured profiles",
  "Ciências Ambientais · Rede GAIA": "Environmental Sciences · GAIA Network",
  "Líder de tema": "Theme leader",
  "Saúde Única · Saúde Coletiva": "One Health · Public Health",
  "Pesquisador": "Researcher",
  "Equidade e Direitos Humanos": "Equity and Human Rights",
  "Coord. de rede": "Network coord.",
  "SRI · Cooperação Internacional": "SRI · International Cooperation",
  "Técnico": "Staff member",
  "Mobilidades": "Mobilities",
  "Missões": "Missions", "Idiomas": "Languages", "Convênios geridos": "Agreements managed",
  "Inglês": "English", "Espanhol": "Spanish", "Francês": "French",
  "Alemão": "German", "Português L2": "Portuguese L2", "Português": "Portuguese",

  // ===================================================================
  //  ODS
  // ===================================================================
  "Alinhamento de toda a produção e das ações de internacionalização aos Objetivos de Desenvolvimento Sustentável. Detecção automática a partir dos temas das produções e dos eixos das redes.":
    "Alignment of all production and internationalization actions with the Sustainable Development Goals. Automatic detection from production themes and network axes.",
  "ODS contempladas": "SDGs addressed",
  "apenas ODS 1 sem vínculo direto": "only SDG 1 without direct link",
  "Produções vinculadas": "Linked productions",
  "com ao menos 1 ODS": "with at least 1 SDG",
  "ODS predominante": "Predominant SDG",
  "Ação Climática · 118 produções": "Climate Action · 118 productions",
  "Ações por ODS": "Actions by SDG",
  "mobilidade, eventos, projetos": "mobility, events, projects",
  "Mapa de calor de produções por ODS": "Heatmap of productions by SDG",
  "detecção automática": "automatic detection",
  "prod.": "prod.",

  // ===================================================================
  //  DIAGNÓSTICO
  // ===================================================================
  "Linha de base e índice de maturidade da internacionalização. O índice central soma sete dimensões; o modelo ampliado incorpora currículo, internacionalização em casa, competências interculturais e avaliação, revelando as frentes prioritárias. Funciona como baseline para medir a evolução.":
    "Baseline and maturity index of internationalization. The core index sums seven dimensions; the expanded model incorporates curriculum, internationalization at home, intercultural competencies and evaluation, revealing the priority fronts. It serves as a baseline to measure progress.",
  "Índice ampliado": "Expanded index",
  "11 dimensões · núcleo 62": "11 dimensions · core 62",
  "Dimensão mais forte": "Strongest dimension",
  "Dimensão a desenvolver": "Dimension to develop",
  "Competências": "Competencies",
  "interculturais · 36/100": "intercultural · 36/100",
  "Cobertura de dados": "Data coverage",
  "métricas alimentadas": "metrics populated",
  "escala 0 a 100": "scale 0 to 100",
  "Peso relativo e nível por dimensão": "Relative weight and level by dimension",
  "soma = 426 pts": "sum = 426 pts",
  "Regra de cálculo: total geral = Σ dimensões; peso relativo = dimensão/total; detalhamento por métrica dentro de cada dimensão.":
    "Calculation rule: overall total = Σ dimensions; relative weight = dimension/total; breakdown by metric within each dimension.",
  "Modelo de maturidade ampliado · currículo e aprendizagem": "Expanded maturity model · curriculum and learning",
  "índice central 62 · índice ampliado 55": "core index 62 · expanded index 55",
  "Ao incorporar as dimensões que a literatura especializada considera centrais: internacionalização do currículo (Leask), internacionalização em casa (Beelen & Jones), competências interculturais (Deardorff) e avaliação por resultados (de Wit), a maturidade real é puxada para baixo justamente nessas frentes. Elas se tornam as prioridades institucionais.":
    "By incorporating the dimensions that the specialized literature considers central — internationalization of the curriculum (Leask), internationalization at home (Beelen & Jones), intercultural competencies (Deardorff) and outcomes-based evaluation (de Wit) — real maturity is pulled down precisely on these fronts. They become the institutional priorities.",
  "Currículo internacionalizado": "Internationalized curriculum",
  "Competências interculturais": "Intercultural competencies",
  "Capacitação docente": "Faculty development",
  "Avaliação & qualidade": "Evaluation & quality",
  "Índice ampliado = média das 11 dimensões = 55/100. As quatro dimensões marcadas como NOVO foram incorporadas a partir da pesquisa em internacionalização do currículo e avaliação.":
    "Expanded index = average of the 11 dimensions = 55/100. The four dimensions marked NEW were incorporated from research on curriculum internationalization and evaluation.",
  "Como o índice se ancora nos frameworks": "How the index anchors in the frameworks",
  "O modelo combina os seis pilares ACE/CIGE da internacionalização abrangente com a literatura de currículo e avaliação, garantindo comparabilidade internacional:":
    "The model combines the six ACE/CIGE pillars of comprehensive internationalization with the curriculum and evaluation literature, ensuring international comparability:",
  "Compromisso & governança (ACE)": "Commitment & governance (ACE)",
  "→ Diagnóstico (baseline, missão, estrutura e monitoramento institucional).":
    "→ Diagnosis (baseline, mission, structure and institutional monitoring).",
  "Parcerias (ACE)": "Partnerships (ACE)",
  "→ Convênios Internacionais (acordos, dupla titulação, cotutela).":
    "→ International Agreements (accords, dual degree, co-tutelle).",
  "Mobilidade (ACE)": "Mobility (ACE)",
  "→ Mobilidade física (IN/OUT) e mobilidade virtual.":
    "→ Physical mobility (IN/OUT) and virtual mobility.",
  "Currículo e co-currículo (Leask)": "Curriculum and co-curriculum (Leask)",
  "→ Currículo internacionalizado e internacionalização em casa (IaH), alcançando todos os estudantes.":
    "→ Internationalized curriculum and internationalization at home (IaH), reaching all students.",
  "Resultados de aprendizagem (Deardorff)": "Learning outcomes (Deardorff)",
  "→ Competências interculturais: do produto para o resultado.":
    "→ Intercultural competencies: from output to outcome.",
  "Pessoas (Leask / ACE)": "People (Leask / ACE)",
  "→ Capacitação docente e técnica como motor da internacionalização do currículo.":
    "→ Faculty and staff development as the engine of curriculum internationalization.",
  "Avaliação (de Wit / IMPI)": "Evaluation (de Wit / IMPI)",
  "→ Lógica insumo→processo→produto→resultado e percepção dos stakeholders.":
    "→ Input→process→output→outcome logic and stakeholder perception.",
  "Lente DEI": "DEI lens",
  "→ Beneficiários & Diversidade (raça, gênero, região, IDH).":
    "→ Beneficiaries & Diversity (race, gender, region, HDI).",

  // ===================================================================
  //  COMUNICAÇÃO
  // ===================================================================
  "Divulgação das ações de internacionalização na mídia e nos canais institucionais, com páginas em múltiplos idiomas mantidas pela SRI. Cada instituição parceira cadastra de forma corresponsável.":
    "Dissemination of internationalization actions in the media and institutional channels, with pages in multiple languages maintained by the SRI. Each partner institution registers content under shared responsibility.",
  "Publicações na mídia": "Media publications",
  "Idiomas dos portais": "Portal languages",
  "PT · EN · ES": "PT · EN · ES",
  "Alcance estimado": "Estimated reach",
  "visualizações": "views",
  "Releases bilíngues": "Bilingual releases",
  "do total publicado": "of total published",
  "Publicações por canal": "Publications by channel",
  "Portal institucional": "Institutional portal",
  "Mídia externa": "External media",
  "Redes sociais": "Social media",
  "Newsletter intl.": "Intl. newsletter",
  "Conteúdo por idioma": "Content by language",
  "Peças": "Pieces",

  // ===================================================================
  //  INTERNACIONALIZAÇÃO EM CASA
  // ===================================================================
  "Internacionalização em casa (IaH): integração intencional de dimensões internacionais e interculturais no currículo formal e informal, no ambiente doméstico de aprendizagem. É a via para alcançar todos os estudantes, não apenas a minoria que realiza mobilidade física.":
    "Internationalization at home (IaH): intentional integration of international and intercultural dimensions into the formal and informal curriculum, within the domestic learning environment. It is the way to reach all students, not just the minority who undertake physical mobility.",
  "Estudantes alcançados (IaH)": "Students reached (IaH)",
  "no ambiente doméstico de aprendizagem": "in the domestic learning environment",
  "Cobertura do corpo discente": "Student body coverage",
  "Mobilidade virtual (12m)": "Virtual mobility (12m)",
  "intercâmbios e aulas espelhadas": "exchanges and mirrored classes",
  "Alcance: a ponta do iceberg": "Reach: the tip of the iceberg",
  "mobilidade física vs. internacionalização em casa · nº de estudantes": "physical mobility vs. internationalization at home · no. of students",
  "Mobilidade física (OUT+IN)": "Physical mobility (OUT+IN)",
  "Alcançados por IaH": "Reached by IaH",
  "A mobilidade física atinge uma fração do corpo discente; a internacionalização em casa multiplica o alcance da experiência internacional.":
    "Physical mobility reaches a fraction of the student body; internationalization at home multiplies the reach of the international experience.",
  "O que é internacionalização em casa": "What is internationalization at home",
  "Eixo central da literatura para uma internacionalização inclusiva, com referências de Beelen & Jones, Leask e de Wit:":
    "A central axis of the literature for inclusive internationalization, drawing on Beelen & Jones, Leask and de Wit:",
  "Definição (Beelen & Jones)": "Definition (Beelen & Jones)",
  "Integração intencional de dimensões internacionais e interculturais no currículo formal e informal, para todos os estudantes, dentro do ambiente doméstico.":
    "Intentional integration of international and intercultural dimensions into the formal and informal curriculum, for all students, within the domestic environment.",
  "COIL / aula colaborativa": "COIL / collaborative class",
  "Disciplinas espelhadas com universidades estrangeiras e projetos conjuntos online, sem deslocamento.":
    "Mirrored courses with foreign universities and joint online projects, without travel.",
  "Mobilidade virtual": "Virtual mobility",
  "Intercâmbio virtual, palestras e bancas internacionais remotas, semanas internacionais híbridas.":
    "Virtual exchange, remote international lectures and defenses, hybrid international weeks.",
  "Por que importa": "Why it matters",
  "A mobilidade física é elitista por natureza; a IaH democratiza o acesso à competência internacional.":
    "Physical mobility is elitist by nature; IaH democratizes access to international competence.",
  "Disciplinas COIL e colaborações de ensino em andamento": "Ongoing COIL courses and teaching collaborations",
  "currículo informal · parcerias de ensino intercultural": "informal curriculum · intercultural teaching partnerships",
  "Disciplina / Componente": "Course / Component",
  "Área": "Field", "Estudantes": "Students",
  "Mudanças Climáticas e Sociedade": "Climate Change and Society",
  "Saúde Global e Equidade": "Global Health and Equity",
  "Métodos Interculturais de Pesquisa": "Intercultural Research Methods",
  "Cidades Sustentáveis": "Sustainable Cities",
  "Gestão Pública Comparada": "Comparative Public Management",
  "Bioeconomia Amazônica": "Amazonian Bioeconomy",
  "Ambientais": "Environmental", "Sociais": "Social",

  // ===================================================================
  //  COMPETÊNCIAS INTERCULTURAIS
  // ===================================================================
  "Avaliação do desenvolvimento de competências interculturais dos estudantes: a passagem de indicadores de produto (quantos participaram) para indicadores de resultado (o que de fato aprenderam). Estruturada no modelo processual de competência intercultural de Deardorff.":
    "Assessment of students' development of intercultural competencies: the shift from output indicators (how many participated) to outcome indicators (what they actually learned). Structured on Deardorff's process model of intercultural competence.",
  "Estudantes avaliados": "Students assessed",
  "instrumento aplicado pré e pós": "instrument applied pre and post",
  "Ganho médio de competência": "Average competency gain",
  "pré→pós": "pre→post",
  "escala de competência intercultural": "intercultural competence scale",
  "Disciplinas com resultados mapeados": "Courses with mapped outcomes",
  "PPGs com meta de cidadania global": "Programs with global-citizenship goal",
  "em construção": "under construction",
  "Dimensões da competência intercultural (Deardorff)": "Dimensions of intercultural competence (Deardorff)",
  "pontuação média dos formandos · escala 0 a 100": "average score of graduates · scale 0 to 100",
  "Atitudes": "Attitudes", "Conhecimento": "Knowledge", "Habilidades": "Skills",
  "Result. internos": "Internal outcomes", "Result. externos": "External outcomes",
  "Ganho de competência intercultural por área": "Intercultural competence gain by field",
  "variação pré→pós, em pontos": "pre→post change, in points",
  "De produtos para resultados de aprendizagem": "From outputs to learning outcomes",
  "A literatura de avaliação distingue o que se conta do que se aprende, com referências de Deardorff, de Wit/IMPI e Leask:":
    "The evaluation literature distinguishes what is counted from what is learned, drawing on Deardorff, de Wit/IMPI and Leask:",
  "Modelo de Deardorff": "Deardorff's model",
  "Competência intercultural como ciclo: atitudes → conhecimento e habilidades → resultados internos (adaptabilidade) → resultados externos (comportamento eficaz).":
    "Intercultural competence as a cycle: attitudes → knowledge and skills → internal outcomes (adaptability) → external outcomes (effective behavior).",
  "Insumo → produto → resultado": "Input → output → outcome",
  "Não basta medir mobilidades e disciplinas (produtos); é preciso medir o desenvolvimento do estudante (resultado).":
    "Measuring mobilities and courses (outputs) is not enough; one must measure the student's development (outcome).",
  "Resultados de aprendizagem": "Learning outcomes",
  "Objetivos interculturais explícitos nas ementas tornam o aprendizado avaliável e comparável.":
    "Explicit intercultural objectives in syllabi make learning assessable and comparable.",
  "Cidadania global": "Global citizenship",
  "Horizonte da formação: capacidade de atuar de forma ética e eficaz em contextos diversos.":
    "Horizon of education: the ability to act ethically and effectively in diverse contexts.",

  // ===================================================================
  //  CAPACITAÇÃO
  // ===================================================================
  "Desenvolvimento da capacidade de docentes e técnicos para internacionalizar, pré-condição da internacionalização do currículo. Sem corpo docente preparado, não há currículo internacionalizado: a formação de pessoas é o motor do processo.":
    "Developing the capacity of faculty and staff to internationalize, a precondition for curriculum internationalization. Without a prepared faculty there is no internationalized curriculum: developing people is the engine of the process.",
  "Docentes capacitados": "Faculty trained",
  "34% do corpo docente": "34% of the faculty",
  "Técnicos capacitados": "Staff trained",
  "secretarias e SRI": "secretariats and SRI",
  "Turmas de formação (12m)": "Training cohorts (12m)",
  "oficinas e trilhas": "workshops and tracks",
  "Docentes com proficiência em LE certificada": "Faculty with certified foreign-language proficiency",
  "meta: 45%": "target: 45%",
  "Capacitações por tema": "Training by theme",
  "participantes nos últimos 12 meses": "participants in the last 12 months",
  "Design de currículo internacionalizado": "Internationalized curriculum design",
  "COIL e colaboração online": "COIL and online collaboration",
  "Competência intercultural docente": "Faculty intercultural competence",
  "Idiomas / ensino em LE (EMI)": "Languages / foreign-language teaching (EMI)",
  "Gestão da internacionalização": "Internationalization management",
  "Por que a capacitação docente é estratégica": "Why faculty development is strategic",
  "O desenvolvimento de pessoas é apontado como condição central da internacionalização do currículo, com referências de Leask, ACE/CIGE e Hudzik:":
    "Developing people is identified as a central condition for curriculum internationalization, drawing on Leask, ACE/CIGE and Hudzik:",
  "Staff development (Leask)": "Staff development (Leask)",
  "A internacionalização do currículo só avança quando docentes são apoiados a redesenhar resultados de aprendizagem e métodos.":
    "Curriculum internationalization only advances when faculty are supported to redesign learning outcomes and methods.",
  "Políticas e práticas docentes (ACE)": "Faculty policies and practices (ACE)",
  "Pilar do modelo de internacionalização abrangente: critérios de carreira, formação e incentivo.":
    "A pillar of the comprehensive internationalization model: career criteria, training and incentives.",
  "Capacidade intercultural": "Intercultural capacity",
  "Ensinar em sala diversa e mediar projetos COIL exige competências específicas, desenvolvíveis por formação.":
    "Teaching in a diverse classroom and mediating COIL projects requires specific competencies, developable through training.",
  "Técnicos e gestores": "Staff and managers",
  "A internacionalização também depende de equipes administrativas preparadas para acolher e operar fluxos internacionais.":
    "Internationalization also depends on administrative teams prepared to welcome and operate international flows.",

  // ===================================================================
  //  AVALIAÇÃO & QUALIDADE
  // ===================================================================
  "Avaliação da internacionalização por critérios de qualidade e evidências, organizada na lógica insumo → processo → produto → resultado. Integra a percepção das partes interessadas (estudantes, docentes, técnicos e gestão) como fonte de melhoria contínua.":
    "Evaluation of internationalization by quality criteria and evidence, organized in the input → process → output → outcome logic. It integrates stakeholder perception (students, faculty, staff and management) as a source of continuous improvement.",
  "Critérios de qualidade avaliados": "Quality criteria assessed",
  "instrumento de autoavaliação": "self-assessment instrument",
  "Evidências documentadas": "Documented evidence",
  "lastro para cada critério": "backing for each criterion",
  "Ciclo de autoavaliação": "Self-assessment cycle",
  "Concluído": "Completed",
  "periodicidade anual": "annual frequency",
  "Satisfação média (stakeholders)": "Average satisfaction (stakeholders)",
  "média ponderada dos públicos": "weighted average of audiences",

  // ===================================================================
  //  RISCOS
  // ===================================================================
  "Identificação, mensuração e monitoramento de riscos da internacionalização para apoiar a tomada de decisão. Registro, classificação por severidade e histórico de tratativas, sob a Coordenação da Rede.":
    "Identification, measurement and monitoring of internationalization risks to support decision-making. Logging, severity classification and history of actions, under the Network Coordination.",
  "Riscos monitorados": "Risks monitored",
  "registro ativo": "active log",
  "Severidade alta": "High severity",
  "requerem ação": "require action",
  "Mitigados (12m)": "Mitigated (12m)",
  "tratativas concluídas": "actions completed",
  "Em acompanhamento": "Under follow-up",
  "severidade média": "medium severity",
  "Matriz de riscos": "Risk matrix",
  "classificação por severidade": "classification by severity",
  "Risco": "Risk", "Dimensão": "Dimension",
  "Probabilidade": "Probability", "Impacto": "Impact",
  "Severidade": "Severity", "Tratativa": "Action",
  "Financiamento": "Funding", "Beneficiários": "Beneficiaries",
  "Alta": "High", "Média": "Medium", "Baixa": "Low",
  "Alto": "High", "Médio": "Medium", "Baixo": "Low",
  "Recolhimento de saldo não executado": "Clawback of unexecuted balance",
  "Cronograma de empenho mensal": "Monthly commitment schedule",
  "Câmbio sobre missões internacionais": "Exchange-rate exposure on international missions",
  "Reserva de contingência": "Contingency reserve",
  "Atraso em adesão FAPEG": "Delay in FAPEG enrollment",
  "Articulação com PROAD": "Coordination with PROAD",
  "Vínculo Sucupira incompleto": "Incomplete Sucupira linkage",
  "Conferência semestral": "Semiannual review",
  "Parâmetro de currículo não homologado": "Curriculum parameter not approved",
  "Definição pela SRI": "Definition by SRI",
  "Conflito coordenador/anuência": "Coordinator/consent conflict",
  "Decisão do Comitê Gestor": "Steering Committee decision",

  // ---------- Nomes dos ODS (mapa de calor) ----------
  "Erradicação da Pobreza": "No Poverty",
  "Fome Zero": "Zero Hunger",
  "Saúde e Bem-Estar": "Good Health and Well-Being",
  "Educação de Qualidade": "Quality Education",
  "Igualdade de Gênero": "Gender Equality",
  "Água Potável e Saneamento": "Clean Water and Sanitation",
  "Energia Limpa": "Affordable and Clean Energy",
  "Trabalho e Crescimento": "Decent Work and Economic Growth",
  "Indústria e Inovação": "Industry, Innovation and Infrastructure",
  "Redução das Desigualdades": "Reduced Inequalities",
  "Cidades Sustentáveis": "Sustainable Cities and Communities",
  "Consumo Responsável": "Responsible Consumption and Production",
  "Ação Climática": "Climate Action",
  "Vida na Água": "Life Below Water",
  "Vida Terrestre": "Life on Land",
  "Paz e Instituições": "Peace, Justice and Strong Institutions",

  // ---------- Combos / rótulos pendentes ----------
  "21 países com fluxo ativo": "21 countries with active flow",
  "OUT 114 · IN 58 · 21 países": "OUT 114 · IN 58 · 21 countries",
  "Passe o mouse sobre uma cidade para ver os fluxos · clique para fixar o detalhe. As partículas indicam o sentido:":
    "Hover over a city to see the flows · click to pin the detail. The particles indicate the direction:",
  "azul = saída": "blue = outbound",
  "verde = entrada": "green = inbound",
  "todos os continentes": "all continents",
  "1,2 mi": "1.2M",
  "Anual": "Annual",
  "Organismos (UNESCO/BID)": "Agencies (UNESCO/IDB)",
  "Saúde Única · Saúde Coletiva": "One Health · Public Health",
  "Profa. R. P. Bastos": "Prof. R. P. Bastos",
  "Profa. C. Oliveira": "Prof. C. Oliveira",
  "Téc. A. Müller": "Staff A. Müller",
  // produção: veículos (traduz só "Fonte:")
  "Restoration Ecology · v.34 · Fonte: OpenAlex + ORCID": "Restoration Ecology · v.34 · Source: OpenAlex + ORCID",
  "One Health Journal · v.18 · Fonte: ORCID": "One Health Journal · v.18 · Source: ORCID",
  "EDUSP · cap.12 · Fonte: Lattes": "EDUSP · ch.12 · Source: Lattes",
  "Energy Policy · v.190 · Fonte: OpenAlex": "Energy Policy · v.190 · Source: OpenAlex",
  "Rev. Gestão Universitária · Fonte: Lattes": "Univ. Management Journal · Source: Lattes",
  // datas (meses que diferem)
  "Fev/2026": "Feb/2026",
  "Dez/2025": "Dec/2025",
  "Abr/2026": "Apr/2026",
  "Mai/2026 · Goiânia + remoto": "May/2026 · Goiânia + remote",
  "Fev/2026 · online": "Feb/2026 · online",

  // ===================================================================
  //  AVALIAÇÃO & QUALIDADE (restante)
  // ===================================================================
  "Avaliar para evoluir": "Evaluate to evolve",
  "A internacionalização na lógica insumo → processo → produto → resultado": "Internationalization in the input → process → output → outcome logic",
  "Insumo": "Input", "Processo": "Process", "Produto": "Output", "Resultado": "Outcome",
  "o que entra": "what comes in", "o que se faz": "what is done",
  "o que sai": "what comes out", "o que muda": "what changes",
  "Recursos financeiros": "Financial resources",
  "Financiamento captado · convênios firmados · políticas e estrutura · capacitação docente":
    "Funding raised · agreements signed · policies and structure · faculty development",
  "Mobilidade · COIL · disciplinas internacionalizadas · eventos · comunicação multilíngue":
    "Mobility · COIL · internationalized courses · events · multilingual communication",
  "Publicações em coautoria · acordos ativos · estudantes alcançados · titulações conjuntas":
    "Co-authored publications · active agreements · students reached · joint degrees",
  "Competência intercultural · cidadania global · empregabilidade internacional · sustentabilidade":
    "Intercultural competence · global citizenship · international employability · sustainability",
  "Indicadores de resultado": "Outcome indicators",
  "O foco se desloca de quantidade de atividades para impacto na formação e na pesquisa.":
    "The focus shifts from the quantity of activities to the impact on education and research.",
  "Barreiras percebidas pelos estudantes": "Barriers perceived by students",
  "% que apontam cada barreira ao processo": "% citing each barrier to the process",
  "Tempo / carga acadêmica": "Time / academic workload",
  "Idioma": "Language",
  "Recursos financeiros ": "Financial resources",
  "Falta de informação": "Lack of information",
  "Reconhecimento na carreira": "Career recognition",
  "satisfação com a internacionalização, por público (%)": "satisfaction with internationalization, by audience (%)",
  "Estudantes": "Students", "Docentes": "Faculty", "Técnicos": "Staff",
  "Gestão / coordenação": "Management / coordination",
  "Critérios de qualidade": "Quality criteria",
  "A avaliação por critérios de qualidade e a escuta das partes interessadas sustentam a melhoria contínua, com referências de de Wit/IMPI e da literatura de avaliação da internacionalização:":
    "Evaluation by quality criteria and listening to stakeholders sustain continuous improvement, drawing on de Wit/IMPI and the internationalization-evaluation literature:",
  "Cada critério é avaliado com evidências, não com percepção isolada: base para autoavaliação e benchmarking.":
    "Each criterion is assessed with evidence, not isolated perception: the basis for self-assessment and benchmarking.",
  "Percepção das partes interessadas": "Stakeholder perception",
  "Percepção dos stakeholders": "Stakeholder perception",
  "Estudantes, docentes e técnicos revelam barreiras e oportunidades que os números não capturam.":
    "Students, faculty and staff reveal barriers and opportunities that numbers do not capture.",
  "Indicadores de resultado ": "Outcome indicators",
  "modelo de indicadores de de Wit / IMPI · evita medir só atividade e passa a medir impacto":
    "de Wit / IMPI indicator model · avoids measuring only activity and starts measuring impact",
  "Ciclo de melhoria": "Improvement cycle",
  "Diagnóstico → metas → ação → reavaliação, em periodicidade definida, fecha o ciclo de gestão.":
    "Diagnosis → targets → action → reassessment, at a defined frequency, closes the management cycle.",

  // ---------- Janela de boas-vindas (abertura) ----------
  "Internacionalização em movimento": "Internationalization in motion",
  "Bem-vindo(a) ao": "Welcome to",
  "O painel de internacionalização da UFG em movimento: convênios, mobilidade, produção científica e impacto global, tudo em um panorama vivo.":
    "UFG's internationalization panel in motion: agreements, mobility, scientific production and global impact, all in one living overview.",
  "Entrar no painel": "Enter the panel",
  "Fechar": "Close",
  "Fechar boas-vindas": "Close welcome",
};

// Termos que NÃO devem ser sinalizados pela auditoria (iguais em PT/EN, siglas, nomes próprios).
const IGNORAR = new Set([
  "gov.br", "CAPES", "UFG", "PRPG", "SRI", "DAF", "ORCID", "OpenAlex", "Lattes",
  "CNPq", "FAPEG", "PROAP", "PROAD", "FINEP", "UE", "BID", "UNESCO", "COIL",
  "Rede GAIA", "GAIA", "EMI", "IaH", "IoC", "ACE/CIGE", "ACE", "CIGE", "DEI",
  "Hudzik (2015)", "Knight (2004)", "IMPI (UE) / de Wit", "DAAD · IHES", "DAAD",
  "PT · EN · ES", "Σ", "ED", "EN", "PT", "Ecoa", "ecoa",
  // nomes próprios idênticos em PT/EN
  "Portugal", "Paris", "Porto", "Boston", "Davis", "Toronto", "Buenos Aires",
  "Bogotá", "Santiago", "Lima", "Maputo", "Sydney", "Melbourne", "Barcelona",
  "Montpellier", "Coimbra", "Jan/2026", "Mar/2026",
  "UFG · Goiânia", "UFG · Sorbonne", "DAF/PRPG · SRI · UFG", "ACE / CIGE",
  "ORCID · OpenAlex · Lattes", "h-index", "gov", "br",
  // instituições parceiras (nomes próprios)
  "Humboldt-Universität", "Sorbonne Université", "Tsinghua University",
  "Univ. of Cape Town", "Curtin University", "Politecnico di Milano",
  "Universidad de Guadalajara", "Université de Poitiers", "Wageningen University",
  // dados bibliográficos (não se traduz título/autor de publicação)
  "Cerrado biome restoration under climate change scenarios",
  "Integrated surveillance of emerging zoonotic diseases in the Brazilian Cerrado",
  "Memory politics and social justice: comparative Latin-American narratives",
  "Energy transition pathways for the Amazon basin",
  "Avaliação de políticas públicas de internacionalização no Centro-Oeste",
  "R. P. Bastos, M. C. Silva, J. Fernandez (PT)",
  "L. Ferreira, A. Moura, A. Müller (DE)",
  "C. Oliveira, P. Martins, D. Walker (US)",
  "F. Lima, K. Schäfer (DE), R. Sousa",
  "E. Dantas, A. Aline", "Prof. L. Ferreira",
]);

// Padrões com número interpolado (não cabem no dicionário exato).
const PADROES = {
  en: [[/^(\d+) cidades$/, "$1 cities"], [/^(\d{4}) a (\d{4})$/, "$1 to $2"]],
  pt: [[/^(\d+) cities$/, "$1 cidades"], [/^(\d{4}) to (\d{4})$/, "$1 a $2"]],
};
// Prefixos simbólicos antes do rótulo (🌐 nota · 🗣 idioma · ▲▼ tendência).
const PREFIXO = /^([\u{1F310}\u{1F5E3}▲▼️]+\s*)(.+)$/u;

// ---------------- Motor ----------------
let LANG = "pt";
const REVERSE = {};
for (const k in DICT) if (DICT[k] !== k && REVERSE[DICT[k]] === undefined) REVERSE[DICT[k]] = k;

export function idioma() { return LANG; }

// Tradução de `key` no sentido `para` ('en'|'pt'); null se desconhecida.
function resolver(key, para) {
  const map = para === "en" ? DICT : REVERSE;
  if (map[key] !== undefined) return map[key];
  const pm = key.match(PREFIXO);
  if (pm && map[pm[2]] !== undefined) return pm[1] + map[pm[2]];
  for (const [re, rep] of PADROES[para]) if (re.test(key)) return key.replace(re, rep);
  return null;
}

function aplicar(root, para) {
  if (!root) return;
  // nós de texto (inclui <text> de SVG)
  const w = document.createTreeWalker(root, NodeFilter.SHOW_TEXT, null);
  const nodes = [];
  while (w.nextNode()) nodes.push(w.currentNode);
  for (const n of nodes) {
    const raw = n.nodeValue, key = raw.trim();
    if (!key) continue;
    const t = resolver(key, para);
    if (t !== null && t !== key) n.nodeValue = raw.replace(key, t);
  }
  // atributos
  for (const attr of ATTRS) {
    const els = root.querySelectorAll ? root.querySelectorAll("[" + attr + "]") : [];
    els.forEach((el) => {
      const k = (el.getAttribute(attr) || "").trim();
      const t = resolver(k, para);
      if (t !== null && t !== k) el.setAttribute(attr, t);
    });
  }
}

/** Aplica o idioma ATUAL a uma subárvore recém-renderizada (PT). */
export function traduzir(root) {
  if (LANG === "en") aplicar(root || document.body, "en");
}

/** Define o idioma e re-traduz todo o documento. */
export function definir(l) {
  if (l === LANG) return;
  LANG = l;
  try { localStorage.setItem("UFG_LANG", l); } catch (e) {}
  document.documentElement.lang = l === "en" ? "en" : "pt-BR";
  aplicar(document.body, l);
}

export function alternar() { definir(LANG === "en" ? "pt" : "en"); }

/** Inicializa a partir do localStorage (chamado no boot). */
export function iniciar() {
  let salvo = "pt";
  try { salvo = localStorage.getItem("UFG_LANG") || "pt"; } catch (e) {}
  if (salvo === "en") { LANG = "pt"; definir("en"); }
}

/** Auditoria: lista textos PT ainda não traduzidos numa subárvore (para completar o dicionário). */
export function auditar(root) {
  const faltando = new Set();
  const w = document.createTreeWalker(root || document.body, NodeFilter.SHOW_TEXT, null);
  while (w.nextNode()) {
    const key = w.currentNode.nodeValue.trim();
    if (!key) continue;
    if (resolver(key, "en") !== null || resolver(key, "pt") !== null) continue; // já tratado
    if (IGNORAR.has(key)) continue;
    if (!/[A-Za-zÀ-ÿ]/.test(key)) continue;          // só símbolos/números
    if (/^[\d\s.,%·/+\-–—:()ºª]+$/.test(key)) continue;
    faltando.add(key);
  }
  return [...faltando];
}
