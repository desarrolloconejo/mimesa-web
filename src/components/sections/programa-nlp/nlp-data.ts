export interface NLPEje {
  id: string;
  number: string;
  title: string;
  tagline: string;
  description: string;
  highlights: string[];
  icon: string;
}

export interface NLPMetric {
  value: string;
  label: string;
  description: string;
}

export const NLP_DATA = {
  hero: {
    kicker: "ACCIÓN SOCIAL & RESPONSABILIDAD COMPARTIDA",
    titlePrefix: "Programa ",
    titleHighlight1: "Nutriendo la",
    titleHighlight2: "Prosperidad",
    titleSuffix: "",
    programName: "Nutriendo la Prosperidad",
    timeframe: "Alimentar con propósito desde 2019 — 2026",
    summary:
      "La iniciativa de impacto social más profunda de Grupo Mimesa. Nace del compromiso ético y humano de transformar la realidad nutricional de la primera infancia en las comunidades e instituciones educativas cercanas a nuestras plantas y zonas de influencia.",
    imageSrc: "/images/nlp/NLPMIMESA-IMAGEN1.webp",
  },

  alianza: {
    badge: "ALIANZA ESTRATÉGICA & TRANSPARENCIA",
    title: "Una causa compartida con el Dividendo Voluntario para la Comunidad (DVC)",
    lead: "La acción social con rigor metodológico y transparencia.",
    paragraph1:
      "Desde 2019, Grupo Mimesa selló una alianza de largo plazo con el Dividendo Voluntario para la Comunidad (DVC). Juntos diseñamos, implementamos y auditamos cada entrega nutricional, asegurando que cada gramo de alimento llegue con dignidad y eficacia a los niños y familias que más lo necesitan.",
    paragraph2:
      "El programa se fundamenta en dos principios irrenunciables: adaptabilidad y flexibilidad. Estos pilares nos permiten responder con agilidad ante los desafíos locales y garantizar continuidad alimentaria ininterrumpida a lo largo de los años.",
    statsNote: "Supervisión nutricional y pesaje periódico para medir el desarrollo infantil.",
    imageSrc: "/images/nlp/NLPMIMESA-IMAGEN.webp",
  },

  ejes: [
    {
      id: "nutricion",
      number: "01",
      title: "NUTRICIÓN",
      tagline: "Alimentación balanceada y de alto valor calórico-proteico",
      description:
        "Suministro regular y sostenido de productos esenciales de nuestras marcas líderes: harinas fortificadas BlancaFlor, pastas enriquecidas Ronco y aceites puros Vatel. Diseñamos menús evaluados por especialistas para cubrir los requerimientos nutricionales de la primera infancia.",
      highlights: [
        "Aporte proteico y de micronutrientes esenciales (hierro, zinc, ácido fólico)",
        "Garantía de calidad de origen y frescura en cada entrega",
        "Atención directa a comedores escolares diarios",
      ],
      icon: "Utensils",
    },
    {
      id: "educacion",
      number: "02",
      title: "EDUCACIÓN",
      tagline: "Formación integral para madres, cocineras y docentes",
      description:
        "La nutrición trasciende el plato: capacitamos a las madres procesadoras y docentes en técnicas de manipulación segura de alimentos, aprovechamiento culinario y fomento de hábitos alimenticios saludables en el hogar y en la escuela.",
      highlights: [
        "Talleres prácticos de cocina nutritiva y balanceada",
        "Guías didácticas sobre inocuidad e higiene alimentaria",
        "Educación nutricional lúdica para los niños beneficiarios",
      ],
      icon: "GraduationCap",
    },
    {
      id: "comunidad",
      number: "03",
      title: "COMUNIDAD",
      tagline: "Voluntariado corporativo y dotación de comedores",
      description:
        "Los colaboradores de Grupo Mimesa son el corazón del programa. A través del Voluntariado Mimesa, nuestro equipo participa directamente en las jornadas de despacho, cocina y acondicionamiento de comedores, construyendo vínculos genuinos con cada comunidad.",
      highlights: [
        "Dotación de utensilios, equipos y mejoras en cocinas escolares",
        "Jornadas presenciales de voluntariado corporativo activo",
        "Fortalecimiento del tejido social y el liderazgo comunitario",
      ],
      icon: "HeartHandshake",
    },
  ],

  impacto: {
    badge: "HUELLA Y RESULTADOS CONCRETOS (2019 — 2026)",
    title: "Cifras que transforman vidas y construyen futuro",
    subtitle:
      "Cada número representa una sonrisa, un plato caliente y un plato servido con amor y dignidad en las mesas de Venezuela.",
    metrics: [
      {
        value: "+780.000",
        label: "PORCIONES SERVIDAS",
        description: "Raciones alimenticias completas preparadas y disfrutadas en comedores escolares.",
      },
      {
        value: "+30.000",
        label: "CANASTAS ENTREGADAS",
        description: "Bolsas de víveres integrales distribuidas directamente a núcleos familiares vulnerables.",
      },
      {
        value: "+7 Años",
        label: "DE IMPACTO SOSTENIDO",
        description: "Continuidad ininterrumpida desde 2019 apostando al futuro de la infancia venezolana.",
      },
      {
        value: "100%",
        label: "VOLUNTARIADO COMPROMETIDO",
        description: "Participación directa y solidaria de los colaboradores de toda la familia Grupo Mimesa.",
      },
    ],
  },

  galeria: {
    badge: "REGISTRO VISUAL EN EL TERRENO",
    title: "Nuestras jornadas en imágenes",
    subtitle:
      "Pasa el cursor sobre cada fotografía para expandir el momento.",
    items: [
      {
        src: "/images/voluntarios-salud-mimesa.webp",
        alt: "Equipo voluntario de salud y especialistas del Programa Nutriendo la Prosperidad",
        title: "Equipo de Salud y Nutrición",
        caption: "Profesionales y voluntarios de Grupo Mimesa dedicados al seguimiento y bienestar de las comunidades.",
      },
      {
        src: "/images/nlp/NLPMIMESA-IMAGEN7.webp",
        alt: "Dotación de paquetes de alimentos fortificados Nutrisoy",
        title: "Dotación Fortificada Nutrisoy",
        caption: "Entrega directa de productos enriquecidos con vitaminas y minerales esenciales.",
      },
      {
        src: "/images/voluntarios-taller-comunidad.webp",
        alt: "Voluntarios de Grupo Mimesa en taller de cocina nutritiva con madres comunitarias",
        title: "Talleres y Cocina Nutritiva",
        caption: "Capacitación práctica y fomento de hábitos alimenticios saludables junto a madres de la comunidad.",
      },
      {
        src: "/images/nlp/NLPMIMESA-IMAGEN3.webp",
        alt: "Niñas y niños disfrutando merienda nutritiva en el aula",
        title: "Meriendas Escolares y Convivencia",
        caption: "Momentos de alegría y nutrición que impulsan la asistencia y rendimiento escolar.",
      },
      {
        src: "/images/nlp/NLPMIMESA-IMAGEN10.webp",
        alt: "Jornada de empaquetado y logística de víveres",
        title: "Logística y Canastas Familiares",
        caption: "Organización y control de calidad en cada paquete de víveres destinado a los hogares.",
      },
    ],
  },

  manifiesto: {
    kicker: "NUESTRO COMPROMISO ETERNO CON VENEZUELA",
    headline: "JUNTOS ALIMENTAMOS UN FUTURO MEJOR.",
    paragraph:
      "En Grupo Mimesa creemos que no hay progreso posible sin una nutrición adecuada desde los primeros años de vida. El Programa NLP no es solo una iniciativa de responsabilidad social: es nuestra promesa viva de nutrir los sueños, la salud y la esperanza de las futuras generaciones de nuestro país.",
    ctaPrimario: "Contáctanos para alianzas",
    ctaSecundario: "Conoce más sobre Grupo Mimesa",
    imageSrc: "/images/nlp/NLPMIMESA-IMAGEN2.webp",
  },
};
