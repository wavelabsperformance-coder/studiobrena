// =============================================================
// BRENA WERNECK ARQUITETURA — Conteúdo editável
// Todos os textos, imagens e dados do site moram aqui.
// Substitua valores reais quando disponíveis.
// =============================================================

import heroBrena from "@/assets/images/hero-brena.jpg";
import aboutBrena from "@/assets/images/about-brena.jpg";
import project01 from "@/assets/images/project-01.jpg";
import project02 from "@/assets/images/project-02.jpg";
import project03 from "@/assets/images/project-03.jpg";
import project04 from "@/assets/images/project-04.jpg";
import project05 from "@/assets/images/project-05.jpg";
import process01 from "@/assets/images/process-01.jpg";

export const brand = {
  name: "Brena Werneck",
  shortName: "BW",
  discipline: "Arquitetura + Interiores",
  tagline: "Projetos autorais de arquitetura, interiores e gestão de obra.",
};

export const contact = {
  whatsappNumber: "5531999999999", // 55 + DDD + número
  whatsappDisplay: "+55 (31) 99999-9999",
  phone: "+55 (31) 3333-3333",
  email: "contato@brenawerneck.com.br",
  instagram: "@brenawerneckarquitetura",
  instagramUrl: "https://instagram.com/brenawerneckarquitetura",
  addressLine: "Av. do Contorno, 0000 — Sala 000",
  district: "Funcionários",
  city: "Belo Horizonte",
  state: "MG",
  cep: "30000-000",
  mapsEmbedSrc:
    "https://www.google.com/maps?q=Av.+do+Contorno+Funcion%C3%A1rios+Belo+Horizonte&output=embed",
  mapsLink:
    "https://www.google.com/maps/search/?api=1&query=Av.+do+Contorno+Funcion%C3%A1rios+Belo+Horizonte",
};

export const legal = {
  razaoSocial: "Brena Werneck Arquitetura LTDA",
  nomeFantasia: "Brena Werneck Arquitetura",
  cnpj: "00.000.000/0001-00",
};

export const hero = {
  image: heroBrena,
  eyebrow: "Estúdio de Arquitetura — Belo Horizonte / MG",
  nameLine1: "Brena",
  nameLine2: "Werneck",
  cta: { label: "Explorar Projetos", to: "/portfolio" },
};

export const about = {
  short: {
    eyebrow: "Sobre",
    title:
      "Arquitetura como construção silenciosa de tempo, matéria e gesto.",
    body: "Brena Werneck conduz projetos de arquitetura, interiores, reformas e legalizações com atenção ao essencial. Cada obra nasce de uma escuta cuidadosa do território, da rotina e do desejo de quem habita.",
    image: aboutBrena,
  },
  full: {
    historia:
      "Brena Werneck fundou seu estúdio com a convicção de que arquitetura é, antes de tudo, atenção. Atenção ao corpo que mora, à luz que passa, ao gesto que se repete. Há mais de uma década projeta residências, interiores e reformas que recusam o ruído e procuram a permanência.",
    filosofia:
      "Trabalhamos com poucos elementos. Materiais honestos, paletas restritas, proporções estudadas. Cada decisão é uma redução até restar apenas o necessário — e o necessário, ali, se torna abundante.",
    valores: [
      { n: "01", t: "Escuta", d: "O projeto começa antes do desenho." },
      { n: "02", t: "Materialidade", d: "A textura, o tato, a luz que envelhece bem." },
      { n: "03", t: "Tempo", d: "Atemporalidade como compromisso, não como estilo." },
      { n: "04", t: "Cuidado", d: "Acompanhamento próximo da concepção à entrega." },
    ],
  },
};

export type Project = {
  slug: string;
  title: string;
  category: string;
  year: string;
  location: string;
  area: string;
  cover: string;
  layout: "wide" | "tall" | "square";
  intro: string;
  description: string[];
  differentials: string[];
  gallery: { src: string; alt: string; aspect: "wide" | "tall" | "square" }[];
  seoDescription: string;
};

export const projects: Project[] = [
  {
    slug: "casa-mineira",
    title: "Casa Mineira",
    category: "Residencial",
    year: "2024",
    location: "Nova Lima, MG",
    area: "420 m²",
    cover: project01,
    layout: "wide",
    intro:
      "Residência de pé-direito duplo em uma encosta de mata atlântica, organizada em torno de um pátio de travertino.",
    description: [
      "A casa parte de uma decisão simples: trazer a paisagem para dentro. O programa se desdobra em três volumes brancos articulados por aberturas amplas, cortinas de linho e madeira de carvalho.",
      "O mobiliário foi desenhado caso a caso, em diálogo com a luz natural que percorre o pátio ao longo do dia.",
    ],
    differentials: [
      "Projeto integral de arquitetura, interiores e paisagismo",
      "Detalhamento marcenaria sob medida",
      "Acompanhamento de obra durante 14 meses",
    ],
    gallery: [
      { src: project01, alt: "Sala de estar pé-direito duplo", aspect: "wide" },
      { src: project02, alt: "Cozinha monolítica em travertino", aspect: "tall" },
      { src: project03, alt: "Banheiro principal", aspect: "wide" },
    ],
    seoDescription:
      "Residência de 420 m² em Nova Lima projetada por Brena Werneck. Travertino, carvalho e luz natural em um projeto autoral.",
  },
  {
    slug: "apartamento-savassi",
    title: "Apartamento Savassi",
    category: "Interiores",
    year: "2024",
    location: "Belo Horizonte, MG",
    area: "180 m²",
    cover: project02,
    layout: "tall",
    intro:
      "Reforma integral de apartamento em edifício clássico, com novo plano para a cozinha e área social integradas.",
    description: [
      "A intervenção partilhou paredes, refez instalações e reinaugurou a luz. Uma única ilha monolítica organiza o cotidiano da família.",
      "Paleta restrita a três materiais: travertino honed, lacca taupe e parquet de carvalho fumê.",
    ],
    differentials: [
      "Layout integrado social + cozinha",
      "Iluminação cênica indireta",
      "Marcenaria sem puxadores",
    ],
    gallery: [
      { src: project02, alt: "Cozinha integrada", aspect: "tall" },
      { src: project01, alt: "Sala social", aspect: "wide" },
      { src: project05, alt: "Moodboard de materiais", aspect: "tall" },
    ],
    seoDescription:
      "Reforma de apartamento na Savassi com design de interiores autoral. 180 m², materiais nobres, marcenaria sob medida.",
  },
  {
    slug: "casa-serra",
    title: "Casa Serra",
    category: "Residencial",
    year: "2023",
    location: "Lagoa Santa, MG",
    area: "560 m²",
    cover: project04,
    layout: "wide",
    intro:
      "Casa térrea desenhada para o horizonte: um plano contínuo de cobertura, brises de madeira e espelho d'água frontal.",
    description: [
      "A implantação respeita o relevo e abre toda a fachada principal para o pôr do sol. Os ambientes internos seguem uma única cota.",
      "Brises verticais filtram a luz oeste e devolvem ao interior um clima de pavilhão tropical contemporâneo.",
    ],
    differentials: [
      "Gerenciamento completo da obra",
      "Detalhamento de brises e cobertura",
      "Paisagismo nativo integrado",
    ],
    gallery: [
      { src: project04, alt: "Fachada principal ao entardecer", aspect: "wide" },
      { src: project01, alt: "Sala integrada", aspect: "wide" },
      { src: project03, alt: "Suíte principal", aspect: "wide" },
    ],
    seoDescription:
      "Casa contemporânea de 560 m² em Lagoa Santa. Implantação respeitosa ao terreno e linguagem arquitetônica autoral.",
  },
  {
    slug: "spa-lume",
    title: "Spa Lume",
    category: "Comercial",
    year: "2023",
    location: "Belo Horizonte, MG",
    area: "240 m²",
    cover: project03,
    layout: "tall",
    intro:
      "Espaço de bem-estar concebido como um pequeno templo doméstico: pedra, água, madeira e silêncio.",
    description: [
      "Toda a iluminação é indireta. As paredes em travertino book-matched conduzem o olhar até a banheira monolítica central.",
      "A composição materializa uma marca que se posiciona pelo discreto.",
    ],
    differentials: [
      "Identidade espacial alinhada à marca",
      "Acústica e iluminação cênica",
      "Mobiliário e luminárias desenhados sob medida",
    ],
    gallery: [
      { src: project03, alt: "Sala de banho principal", aspect: "wide" },
      { src: project05, alt: "Estudo de materiais", aspect: "tall" },
      { src: project02, alt: "Recepção", aspect: "tall" },
    ],
    seoDescription:
      "Projeto comercial Spa Lume: 240 m² em Belo Horizonte com arquitetura sensorial e materialidade refinada.",
  },
  {
    slug: "materia-projeto",
    title: "Estudo · Matéria",
    category: "Pesquisa",
    year: "2024",
    location: "Estúdio BW",
    area: "—",
    cover: project05,
    layout: "square",
    intro:
      "Um exercício contínuo de curadoria de materiais que alimenta cada projeto do escritório.",
    description: [
      "A pesquisa de matéria-prima é parte do método. Pedras, madeiras, metais e tecidos são testados em conjunto antes de chegar ao projeto.",
    ],
    differentials: [
      "Biblioteca de materiais autoral",
      "Parceria com fornecedores selecionados",
      "Curadoria por projeto",
    ],
    gallery: [
      { src: project05, alt: "Moodboard", aspect: "tall" },
      { src: process01, alt: "Esboço de planta", aspect: "tall" },
    ],
    seoDescription:
      "Pesquisa de materiais autoral do estúdio Brena Werneck Arquitetura.",
  },
];

export const homeFeatured = ["casa-mineira", "apartamento-savassi", "casa-serra", "spa-lume"];

export const process = {
  eyebrow: "Como nasce um projeto",
  title: "Quatro tempos, uma escuta contínua.",
  steps: [
    {
      n: "01",
      t: "Escuta",
      d: "Compreender o lugar, a rotina e o desejo silencioso do cliente.",
    },
    {
      n: "02",
      t: "Estudo",
      d: "Pesquisa de referências, materiais e proporções. Tradução em desenho.",
    },
    {
      n: "03",
      t: "Detalhamento",
      d: "Especificação completa, marcenaria sob medida e compatibilizações.",
    },
    {
      n: "04",
      t: "Obra",
      d: "Acompanhamento próximo, semana a semana, até a entrega das chaves.",
    },
  ],
  image: process01,
};

export type Service = {
  slug: string;
  title: string;
  short: string;
  intro: string;
  bullets: string[];
  faq: { q: string; a: string }[];
  cover: string;
  seoDescription: string;
};

export const services: Service[] = [
  {
    slug: "arquitetura-residencial",
    title: "Arquitetura Residencial",
    short: "Projetos de casas e residências.",
    intro:
      "Projetos integrais de arquitetura residencial — da implantação ao detalhamento construtivo.",
    bullets: [
      "Estudo preliminar e anteprojeto",
      "Projeto legal e executivo",
      "Compatibilização com complementares",
      "Acompanhamento da obra",
    ],
    faq: [
      { q: "Atendem todo o Brasil?", a: "Atendemos com base em Belo Horizonte, com projetos executados em diferentes estados." },
      { q: "Quanto tempo leva o projeto?", a: "Em média, de 4 a 8 meses entre estudo preliminar e projeto executivo, conforme o porte." },
    ],
    cover: project04,
    seoDescription:
      "Projetos de arquitetura residencial autoral em Belo Horizonte. Casas com identidade, materialidade refinada e acompanhamento próximo.",
  },
  {
    slug: "design-de-interiores",
    title: "Design de Interiores",
    short: "Interiores autorais e mobiliário sob medida.",
    intro:
      "Interiores pensados como extensão da arquitetura — cada elemento contribui para o conjunto.",
    bullets: [
      "Layout e mobiliário sob medida",
      "Curadoria de materiais e revestimentos",
      "Especificação de iluminação",
      "Estilismo final",
    ],
    faq: [
      { q: "Trabalham com mobiliário existente?", a: "Sim — incorporamos peças significativas ao novo projeto sempre que faz sentido." },
    ],
    cover: project02,
    seoDescription:
      "Design de interiores autoral em Belo Horizonte. Interiores com mobiliário sob medida e materialidade cuidada.",
  },
  {
    slug: "reformas",
    title: "Reformas",
    short: "Reformas residenciais e comerciais.",
    intro:
      "Reformas conduzidas com método, do diagnóstico técnico ao detalhamento final.",
    bullets: [
      "Diagnóstico técnico",
      "Projeto executivo de reforma",
      "Gestão e fiscalização",
      "Documentação para condomínio e prefeitura",
    ],
    faq: [
      { q: "Como funciona o orçamento de reforma?", a: "Após o levantamento técnico, elaboramos memorial e planilha para concorrência entre empreiteiras parceiras." },
    ],
    cover: project03,
    seoDescription:
      "Projeto e gestão de reformas residenciais em Belo Horizonte com acompanhamento técnico próximo.",
  },
  {
    slug: "gerenciamento-de-obras",
    title: "Gerenciamento de Obras",
    short: "Gestão técnica, prazos e custos.",
    intro:
      "Gerenciamento de obras com foco em qualidade construtiva, prazos e clareza orçamentária.",
    bullets: [
      "Concorrência e contratação",
      "Cronograma físico-financeiro",
      "Visitas técnicas semanais",
      "Diário de obra e relatórios",
    ],
    faq: [
      { q: "Indicam empreiteiras?", a: "Sim, contamos com uma rede de parceiros homologados pelo escritório." },
    ],
    cover: project01,
    seoDescription:
      "Gerenciamento de obras residenciais e comerciais. Cronograma, custos e qualidade sob acompanhamento contínuo.",
  },
  {
    slug: "legalizacoes",
    title: "Legalizações",
    short: "Projetos legais, alvarás e habite-se.",
    intro:
      "Regularização e legalização de imóveis junto a prefeituras e órgãos competentes.",
    bullets: [
      "Projeto legal e modificativo",
      "Alvará de construção",
      "Baixa e habite-se",
      "Regularização junto à prefeitura",
    ],
    faq: [
      { q: "Atendem regularização de imóveis antigos?", a: "Sim, conduzimos processos de regularização completos." },
    ],
    cover: project05,
    seoDescription:
      "Legalização e regularização de imóveis em Belo Horizonte. Projetos legais, alvarás e habite-se.",
  },
  {
    slug: "consultoria",
    title: "Consultoria",
    short: "Consultoria pontual para clientes e investidores.",
    intro:
      "Consultoria estratégica para clientes que precisam de uma leitura técnica antes de avançar.",
    bullets: [
      "Análise de imóveis para compra",
      "Estudos de viabilidade",
      "Curadoria de materiais",
      "Pareceres técnicos",
    ],
    faq: [
      { q: "A consultoria é cobrada por hora?", a: "Sim, em pacotes de horas técnicas ou por escopo definido em proposta." },
    ],
    cover: process01,
    seoDescription:
      "Consultoria de arquitetura e interiores em Belo Horizonte. Análise de imóveis, viabilidade e curadoria.",
  },
];

export const testimonials = [
  { text: "Cada decisão foi pensada. O resultado é uma casa que parece sempre ter estado ali.", author: "M. R.", role: "Cliente, Nova Lima" },
  { text: "Brena escuta antes de desenhar. É um luxo raro.", author: "L. C.", role: "Cliente, Savassi" },
  { text: "Acompanhamento de obra impecável, do primeiro dia ao último.", author: "A. F.", role: "Cliente, Lagoa Santa" },
  { text: "Materialidade refinada e atemporal. Recomendamos sem ressalvas.", author: "G. B.", role: "Cliente, Belo Horizonte" },
  { text: "Um projeto silencioso, no melhor sentido da palavra.", author: "T. S.", role: "Cliente, BH" },
  { text: "Profissionalismo do primeiro contato à entrega da obra.", author: "R. P.", role: "Cliente, Belvedere" },
];

export const navigation = [
  { label: "Início", to: "/" },
  { label: "Sobre", to: "/sobre" },
  { label: "Serviços", to: "/servicos" },
  { label: "Portfólio", to: "/portfolio" },
  { label: "Galeria", to: "/galeria" },
  { label: "Contato", to: "/contato" },
];

export const finalCta = {
  eyebrow: "Conversar",
  title: "Vamos pensar o seu projeto juntos.",
  body: "Conte sobre seu terreno, seu imóvel ou sua ideia. Respondemos pessoalmente em até 24 horas úteis.",
};

export const blog = {
  title: "Diário",
  description: "Notas sobre arquitetura, matéria e processo.",
  posts: [] as { slug: string; title: string; date: string; excerpt: string; cover?: string }[],
};
