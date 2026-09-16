export interface ValorItem {
  id: string;
  number: string;
  title: string;
  description: string;
  shortTag: string;
  color: string;
  accentBg: string;
}

export interface OfertaPilar {
  id: string;
  num: string;
  title: string;
  subtitle: string;
}

export const IDENTIDAD_DATA = {
  proposito: {
    kicker: "Nuestro propósito",
    titleLine1: "Juntos alimentamos",
    titleLine2: "un futuro mejor",
    description:
      "Nuestra razón de ser une la fuerza productiva de cada rincón del país para llevar nutrición, salud y bienestar con excelencia a cada mesa venezolana.",
  },
  valores: [
    {
      id: "integridad",
      number: "01",
      title: "Integridad",
      description:
        "Hacemos lo correcto, siendo coherentes entre lo que decimos y lo que hacemos.",
      shortTag: "Coherencia y Ética",
      color: "#02afab",
      accentBg: "from-[#02afab]/10 to-transparent",
    },
    {
      id: "agilidad",
      number: "02",
      title: "Agilidad",
      description:
        "Pensamos y actuamos con rapidez y eficacia para lograr lo que nos proponemos. Nos adaptamos con facilidad al cambio y hacemos que las cosas pasen para que el cliente quede satisfecho.",
      shortTag: "Rapidez y Eficacia",
      color: "#94c11e",
      accentBg: "from-[#94c11e]/10 to-transparent",
    },
    {
      id: "respeto",
      number: "03",
      title: "Respeto",
      description:
        "Las personas van primero, somos inclusivos y valoramos las diferencias, cuidamos a los nuestros.",
      shortTag: "Gente Primero",
      color: "#009539",
      accentBg: "from-[#009539]/10 to-transparent",
    },
    {
      id: "responsabilidad",
      number: "04",
      title: "Responsabilidad",
      description:
        "Nos hacemos cargos de nuestras tareas y compromisos, generando resultados de calidad y un impacto positivo en los demás.",
      shortTag: "Compromiso e Impacto",
      color: "#1a3c6a",
      accentBg: "from-[#1a3c6a]/10 to-transparent",
    },
  ] as ValorItem[],
  negocio: {
    badge: "Nuestro negocio",
    headline:
      "Creamos marcas fuertes para proveer soluciones nutricionales y de salud, que brindan bienestar.",
    uniqueBadge: "Lo que nos hace únicos y diferentes",
    uniqueText: "Nuestra propuesta de valor, la más integral y rentable del mercado.",
  },
  ofertaValor: {
    title: "Nuestra oferta de valor",
    pilares: [
      {
        id: "confiabilidad",
        num: "01",
        title: "Confiabilidad",
        subtitle: "Procesos certificados y entregas consistentes",
      },
      {
        id: "desempeno",
        num: "02",
        title: "Desempeño de productos",
        subtitle: "Alta eficiencia nutricional e industrial",
      },
      {
        id: "conocimiento",
        num: "03",
        title: "Conocimiento y apoyo técnico",
        subtitle: "Acompañamiento experto en cada etapa",
      },
      {
        id: "transparencia",
        num: "04",
        title: "Transparencia",
        subtitle: "Relaciones éticas y trazabilidad clara",
      },
    ] as OfertaPilar[],
  },
  filosofia: {
    badge: "Nuestra filosofía",
    title: "Así vivimos el día a día en la compañía",
    paragraph1:
      "Además de ser nuestra definición, impactar vidas es el trasfondo de cada una de nuestras unidades de negocio. Trabajar a diario desde la creatividad e innovación de nuestro talento humano altamente calificado, nos permite desarrollar día a día, nuevas y diferentes ideas que optimicen nuestros procesos y garanticen el éxito de nuestros clientes.",
    paragraph2:
      "Así rendimos honor a la gran experticia, legado sólido y entusiasmo, que pone por encima de todo a nuestras personas, la ética y los valores humanos, para así enriquecer al país, su desarrollo y poder garantizar un mejor mañana para todos.",
  },
};
