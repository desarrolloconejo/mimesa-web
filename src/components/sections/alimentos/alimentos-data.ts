export interface ProductPackshot {
  id: string;
  name: string;
  presentation: string;
  imageUrl: string;
  badge?: string;
  description?: string;
}

export interface BrandProductLine {
  id: string;
  name: string;
  tagline: string;
  badge?: string;
  description?: string;
  products: ProductPackshot[];
}

export interface FoodBrandDetail {
  id: string;
  number: string;
  name: string;
  category: string;
  tagline: string;
  badge: string;
  color: string;
  lightBg: string;
  borderColor: string;
  logoUrl?: string;
  heroDescription: string;
  lines?: BrandProductLine[];
  products?: ProductPackshot[];
  attributes: string[];
  benefits: string[];
  culinaryUses?: string;
  presentations?: string[];
  industrialRelation?: {
    title: string;
    description: string;
    linkText: string;
    href: string;
  };
}

export interface IngredientItem {
  id: string;
  name: string;
  category: "harinas" | "aceites" | "grasas" | "endulzantes";
  categoryLabel: string;
  tagline: string;
  badge?: string;
  logoUrl?: string;
  productImageUrl?: string;
  description: string;
  attributes?: string[];
  benefits?: string[];
  applicationsSaladas?: string[];
  applicationsDulces?: string[];
  applicationsGeneral?: string[];
  presentations?: string[];
  variants?: {
    name: string;
    description: string;
    attributes?: string[];
    benefits?: string[];
    applications?: string[];
  }[];
}

// ============================================================================
// 1. MARCAS DE CONSUMO MASIVO
// ============================================================================
export const FOOD_BRANDS: Record<string, FoodBrandDetail> = {
  vatel: {
    id: "vatel",
    number: "01",
    name: "Vatel",
    category: "Aceites Comestibles 100% Puros",
    tagline: "Tradición, confianza y soluciones especializadas en aceites",
    badge: "Tradición Venezolana",
    color: "#dc2626",
    lightBg: "bg-red-50/60",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
    heroDescription:
      "La marca de tradición para el consumidor venezolano, ahora con soluciones especializadas para responder a las necesidades de nuestros clientes, brindando calidad, confianza y conocimiento a la categoría de aceites.",
    lines: [
      {
        id: "vegetal",
        name: "Vatel Vegetal",
        tagline: "La opción ideal para frituras doraditas y crujientes",
        badge: "Fritura Perfecta",
        description:
          "Aceite elaborado con una mezcla de aceites refinados y desodorizados de origen 100% vegetal. Por su composición, es la opción ideal para freír.",
        products: [
          {
            id: "vatel-vegetal-1lt",
            name: "Vatel Vegetal 1 Litro",
            presentation: "1 Litro",
            imageUrl: "/images/productos/vatel/vatel-vegetal-1l.webp",
            badge: "100% Vegetal",
            description: "Resistente a altas temperaturas con menor absorción en los alimentos.",
          },
        ],
      },
      {
        id: "soya",
        name: "Vatel Soya",
        tagline: "Aceite versátil ideal para sofritos, guisos y salsas",
        badge: "Guisos & Salsas",
        description:
          "Aceite versátil elaborado bajo los mejores estándares de calidad y procesos productivos, perfecto para resaltar el sabor en guisos y aderezos.",
        products: [
          {
            id: "vatel-soya-1lt",
            name: "Vatel Soya 1 Litro",
            presentation: "1 Litro",
            imageUrl: "/images/productos/vatel/vatel-soya-1l.webp",
            badge: "Formato Familiar",
          },
          {
            id: "vatel-soya-500ml",
            name: "Vatel Soya 500 ml",
            presentation: "500 ml",
            imageUrl: "/images/productos/VATEL-SOYA-500ML.webp",
            badge: "Formato Medio",
          },
          {
            id: "vatel-soya-250ml",
            name: "Vatel Soya 250 ml",
            presentation: "250 ml",
            imageUrl: "/images/productos/VATEL-SOYA-250ML.webp",
            badge: "Formato Práctico",
          },
        ],
      },
      {
        id: "edicion-especial",
        name: "Vatel Edición Especial",
        tagline: "5 veces filtrado con botella práctica y tapa antigoteo",
        badge: "Edición Especial 900ml",
        description:
          "Un aceite de soya 5 veces filtrado, con una botella práctica para el consumidor y una tapa antigoteo, ideal para salsas y aderezos.",
        products: [
          {
            id: "vatel-edicion-especial-900ml",
            name: "Vatel Edición Especial 900 ml",
            presentation: "900 ml (5 veces filtrado)",
            imageUrl: "/images/productos/vatel/vatel-soya-1l.webp",
            badge: "5 Veces Filtrado",
            description: "No produce olor, genera menos humo y ofrece el sabor más puro.",
          },
        ],
      },
      {
        id: "vatel-pro",
        name: "Vatel Pro (Línea Profesional)",
        tagline: "Soluciones de alto rendimiento para food service y panadería",
        badge: "Uso Profesional",
        description:
          "Aceite comestible, aceite para fritura profunda y grasas especializadas diseñadas para resistir jornadas intensivas de cocina industrial.",
        products: [
          {
            id: "vatelpro-fritura",
            name: "Vatel Pro Fritura",
            presentation: "Bidón / Granel Industrial",
            imageUrl: "/images/productos/VATELPRO-FRITURA-PRODUCTO1.webp",
            badge: "Fritura Continua",
          },
          {
            id: "vatelpro-comestible",
            name: "Vatel Pro Comestible",
            presentation: "Bidón Profesional",
            imageUrl: "/images/productos/VATELPRO-COMESTIBLE-PRODUCTO2.webp",
            badge: "Comestible Profesional",
          },
          {
            id: "vatelpro-grasas",
            name: "Vatel Pro Grasas Especializadas",
            presentation: "Caja Profesional",
            imageUrl: "/images/productos/VATELPRO-GRASAS-FRITURAESPECIALIZADA-INGREDIENTE-PRODUCTO1.webp",
            badge: "Grasas Fritura",
          },
        ],
      },
    ],
    attributes: [
      "Vatel Vegetal: Aceite elaborado con mezcla refinada y desodorizada 100% vegetal, ideal para freír.",
      "Vatel Soya: Aceite versátil elaborado bajo rigurosos estándares para sofritos, guisos y salsas.",
      "Edición Especial: Aceite de soya 5 veces filtrado, con envase ergonómico y tapa antigoteo.",
      "Presentaciones: Vatel Vegetal 1Lt; Vatel Soya 1Lt, 500ml, 250ml; Edición Especial 900ml.",
    ],
    benefits: [
      "Frituras más doraditas y crujientes porque es más resistente al calor.",
      "Los alimentos lo absorben menos, manteniendo la ligereza y crocancia.",
      "Genera menos olores y menos humo al freír.",
      "Edición Especial: No produce olor, genera menos humo y ofrece el sabor más puro de los alimentos.",
    ],
    culinaryUses: "Frituras secas y doradas, sofritos criollos, guisos, aderezos y salsas emulsionadas.",
    presentations: ["Vatel Vegetal 1 Lt", "Vatel Soya 1 Lt", "Vatel Soya 500 ml", "Vatel Soya 250 ml", "Edición Especial 900 ml"],
    industrialRelation: {
      title: "¿Requieres aceite para cocinas industriales o restaurantes?",
      description: "Conoce Vatel Pro Fritura y Vatel Pro Comestible en presentaciones de alto rendimiento.",
      linkText: "Explorar Línea Vatel Pro Profesional",
      href: "/productos/ingredientes#vatel-pro",
    },
  },

  ronco: {
    id: "ronco",
    number: "02",
    name: "Ronco",
    category: "Pastas de Trigo Durum",
    tagline: "La pasta hecha con cariño que acompaña a los venezolanos",
    badge: "50+ Años de Tradición",
    color: "#c8102e",
    lightBg: "bg-red-50/60",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/ronco/LOGORONCO.webp",
    heroDescription:
      "Es la marca de pastas hecha con cariño, que ha acompañado a los venezolanos por más de 50 años. Elaborada con la mejor materia prima: 100% trigo durum y rigurosos procesos, la hacen la pasta de mejor calidad y la preferida por los consumidores.",
    lines: [
      {
        id: "premium",
        name: "Línea Premium",
        tagline: "La alternativa tradicional que entrega cariño en cada plato",
        badge: "01 • Tradición & Calidad",
        description:
          "La alternativa tradicional preferida por los hogares venezolanos, elaborada con 100% trigo durum para asegurar el punto perfecto al dente.",
        products: [
          {
            id: "premium-vermicelli",
            name: "Ronco Premium Vermicelli",
            presentation: "1 Kg y 500g",
            imageUrl: "/images/productos/ronco/premium/vermicelli-1kg.webp",
            badge: "Largo Tradicional",
          },
          {
            id: "premium-pluma",
            name: "Ronco Premium Pluma",
            presentation: "1 Kg y 500g",
            imageUrl: "/images/productos/ronco/premium/pluma-1kg.webp",
            badge: "Pasta Corta",
          },
          {
            id: "premium-tornillo",
            name: "Ronco Premium Tornillo",
            presentation: "1 Kg y 500g",
            imageUrl: "/images/productos/ronco/premium/tornillo-1kg.webp",
            badge: "Pasta Corta",
          },
          {
            id: "premium-dedal",
            name: "Ronco Premium Dedal",
            presentation: "1 Kg y 500g",
            imageUrl: "/images/productos/ronco/premium/dedal-1kg.webp",
            badge: "Para Sopas y Ensaladas",
          },
        ],
      },
      {
        id: "especialidades",
        name: "Línea Especialidades",
        tagline: "Innovación, rapidez y nutrición reforzada: Jet y Vitaminas",
        badge: "02 • Especialidades",
        description:
          "Incluye la versión Jet de cocción rápida (menor tiempo de cocción con la misma calidad de Ronco) y la versión enriquecida con Vitaminas.",
        products: [
          {
            id: "jet-vermicelli",
            name: "Ronco Jet Vermicelli",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/vermicelli-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "jet-pluma",
            name: "Ronco Jet Pluma",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/pluma-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "jet-rigaton",
            name: "Ronco Jet Rigatón",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/rigaton-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "jet-codos",
            name: "Ronco Jet Codos",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/codo-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "jet-caracol",
            name: "Ronco Jet Caracol",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/caracol-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "jet-dedal",
            name: "Ronco Jet Dedal",
            presentation: "500g - Cocción Rápida",
            imageUrl: "/images/productos/ronco/jet/dedal-jet-500g.webp",
            badge: "Cocción Rápida Jet",
          },
          {
            id: "vitaminas-vermicelli",
            name: "Ronco Vitaminas Vermicelli",
            presentation: "500g - Nutrición Plus",
            imageUrl: "/images/productos/ronco/enriquecida/vermicelli-enriquecida-500g.webp",
            badge: "Enriquecida con Vitaminas",
          },
          {
            id: "vitaminas-pluma",
            name: "Ronco Vitaminas Pluma",
            presentation: "500g - Nutrición Plus",
            imageUrl: "/images/productos/ronco/enriquecida/pluma-enriquecida-500g.webp",
            badge: "Enriquecida con Vitaminas",
          },
          {
            id: "vitaminas-tornillo",
            name: "Ronco Vitaminas Tornillo",
            presentation: "500g - Nutrición Plus",
            imageUrl: "/images/productos/ronco/enriquecida/tornillo-enriquecida-500g.webp",
            badge: "Enriquecida con Vitaminas",
          },
          {
            id: "vitaminas-dedal",
            name: "Ronco Vitaminas Dedal",
            presentation: "500g - Nutrición Plus",
            imageUrl: "/images/productos/ronco/enriquecida/dedal-enriquecida-500g.webp",
            badge: "Enriquecida con Vitaminas",
          },
        ],
      },
      {
        id: "artesanal",
        name: "Línea Artesanal & Especial",
        tagline: "Elaboración clásica para recetas gourmet y momentos especiales",
        badge: "03 • Artesanal & Pasticho",
        description:
          "Hojas de pasticho directo al horno y tradicional, y cintas fettuccine de textura aterciopelada que retienen salsas con maestría.",
        products: [
          {
            id: "artesanal-pasticho-1",
            name: "Ronco Pasticho Directo al Horno",
            presentation: "500g - Listo para Hornear",
            imageUrl: "/images/productos/ronco/especialidades/pasticho-directo-al-horno.webp",
            badge: "Directo al Horno",
          },
          {
            id: "artesanal-pasticho-2",
            name: "Ronco Pasticho Tradicional",
            presentation: "500g - Tradicional",
            imageUrl: "/images/productos/ronco/especialidades/pasticho-tradicional.webp",
            badge: "Gourmet Familiar",
          },
          {
            id: "artesanal-fettuccine",
            name: "Ronco Artesanal Fettuccine",
            presentation: "500g",
            imageUrl: "/images/productos/ronco/especialidades/fettuccine.webp",
            badge: "Cinta Tradicional",
          },
          {
            id: "artesanal-larga",
            name: "Ronco Larga Especialidades",
            presentation: "1 Kg / 500g",
            imageUrl: "/images/productos/ronco/especialidades/larga-especialidades-1kg.webp",
            badge: "Pasta Larga",
          },
        ],
      },
    ],
    attributes: [
      "Ronco es la pasta hecha con cariño que ofrece las versiones de pasta preferidas por el consumidor.",
      "Premium: La alternativa tradicional que acompaña al consumidor a entregar el cariño en cada plato.",
      "Jet: La versión de cocción rápida que brinda la misma calidad de Ronco en menor tiempo.",
      "Materia prima de excelencia: 100% trigo durum seleccionado.",
    ],
    benefits: [
      "Mayor aporte nutricional por su contenido de trigo durum de calidad.",
      "Más sueltecita: se separa naturalmente al servir.",
      "No se pega al cocinarla gracias a su bajo desprendimiento de almidón.",
      "Menor desprendimiento de almidón en el agua de cocción.",
      "Mantiene consistencia y ofrece excelente resistencia al morderla (al dente perfecto).",
      "Mejor color dorado y sabor auténtico a pasta de trigo durum.",
    ],
    culinaryUses: "Pastas al dente, pastichos horneados, sopas nutritivas y recetas familiares.",
  },

  blancaflor: {
    id: "blancaflor",
    number: "03",
    name: "BlancaFlor",
    category: "Harinas de Trigo",
    tagline: "Tradición y pureza para la repostería y panes de la familia",
    badge: "Líder en Harinas",
    color: "#183c6b",
    lightBg: "bg-blue-50/60",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
    heroDescription:
      "Harinas de trigo tradicionales en el mercado venezolano, elaboradas con rigurosos procesos y los mejores trigos. Este producto viene en las presentaciones preferidas por el consumidor: Todo Uso y Leudante, ideales para acompañar al consumidor en cualquier preparación.",
    products: [
      {
        id: "leudante",
        name: "BlancaFlor Leudante",
        presentation: "1 Kg",
        imageUrl: "/images/productos/BLANCAFLOR-LEUDANTE-PRODUCTO1.webp",
        badge: "Repostería & Tortas",
        description: "Fórmula con leudante balanceado que garantiza bizcochos y tortas suaves y de gran volumen.",
      },
      {
        id: "todouso",
        name: "BlancaFlor Todo Uso",
        presentation: "1 Kg",
        imageUrl: "/images/productos/BLANCAFLOR-TODOUSO-PRODUCTO2.webp",
        badge: "Multipropósito",
        description: "La harina ideal para panquecas, galletas, masas saladas y recetas del día a día.",
      },
    ],
    attributes: [
      "Elaborada con rigurosos procesos de molienda y los mejores trigos seleccionados.",
      "Disponible en las presentaciones preferidas por el consumidor: Todo Uso y Leudante.",
      "Calidad constante que asegura esponjosidad y textura superior en horneados.",
    ],
    benefits: [
      "Ideal para acompañar al consumidor en cualquier tipo de preparación dulce o salada.",
      "Excelente desarrollo de masas con mínima merma y gran rendimiento.",
      "Blancura natural, aroma puro y libre de impurezas.",
    ],
    culinaryUses: "Tortas, panquecas, galletas, panes artesanales, masas para pastelitos y empanadas.",
    presentations: ["1 Kg Todo Uso", "1 Kg Leudante"],
    industrialRelation: {
      title: "¿Buscas harinas para panaderías y pastelerías a escala?",
      description: "Conoce Rey del Norte y Gramoven en sacos de 20kg y 45kg con alta proteína y premezclas listas.",
      linkText: "Ver Harinas Industriales",
      href: "/productos/ingredientes#rey-del-norte",
    },
  },

  fiorentina: {
    id: "fiorentina",
    number: "04",
    name: "Fiorentina",
    category: "Pastas Tradicionales",
    tagline: "La mejor relación precio/valor dentro del portafolio",
    badge: "Excelente Precio/Valor",
    color: "#00387b",
    lightBg: "bg-blue-50/60",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
    heroDescription:
      "Es la marca tradicional que ofrece la mejor relación precio/valor dentro del portafolio, buscando entregar una buena pasta al consumidor.",
    products: [
      {
        id: "fiorentina-tornillo",
        name: "Fiorentina Tornillo",
        presentation: "1 Kg / 500g",
        imageUrl: "/images/productos/fiorentina/fiorentina-tornillo-1kg.webp",
        badge: "Pasta Corta",
        description: "Forma espiralada ideal para retener salsas de tomate, queso o vegetales.",
      },
      {
        id: "fiorentina-pluma",
        name: "Fiorentina Pluma",
        presentation: "500g",
        imageUrl: "/images/productos/FIORENTINA-PLUMA-PRODUCTO2.webp",
        badge: "Pasta Corta",
        description: "Corte biselado que combina con todo tipo de preparaciones cotidianas.",
      },
      {
        id: "fiorentina-vermicelli",
        name: "Fiorentina Vermicelli",
        presentation: "1 Kg / 500g",
        imageUrl: "/images/productos/fiorentina/fiorentina-vermicelli-1kg.webp",
        badge: "Pasta Larga",
        description: "Pasta larga rendidora y consistente, ideal para el menú diario.",
      },
    ],
    attributes: [
      "Pastas elaboradas con altos estándares de calidad.",
      "Disponible en las presentaciones preferidas del consumidor (Tornillo, Pluma y Vermicelli).",
      "Compromiso de entrega de una buena pasta accesible para todos los hogares.",
    ],
    benefits: [
      "Elaborada con altos estándares de calidad y procesos certificados.",
      "La mejor relación precio/valor dentro de todo el portafolio de pastas.",
      "Fácil cocción, buen rendimiento y consistencia confiable en la mesa.",
    ],
    culinaryUses: "Almuerzos diarios, ensaladas frías de pasta, sopas y platos rendidores.",
    presentations: ["500g / 1Kg Tornillo", "500g Pluma", "500g / 1Kg Vermicelli"],
  },

  "los-3-cochinitos": {
    id: "los-3-cochinitos",
    number: "05",
    name: "Los 3 Cochinitos",
    category: "Grasas y Mantecas Tradicionales",
    tagline: "Más de 50 años potenciando el sabor auténtico de la cocina venezolana",
    badge: "50+ Años de Sazón",
    color: "#b91c1c",
    lightBg: "bg-rose-50/60",
    borderColor: "border-rose-200/80",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
    heroDescription:
      "Con más de 50 años en el mercado, Los Tres Cochinitos es un aliado para potenciar el sabor de los alimentos que puede ser utilizado para distintas preparaciones en repostería y platos tradicionales de la cocina venezolana, además de tener un excelente desempeño al freír.",
    products: [
      {
        id: "cochinitos-producto1",
        name: "Los 3 Cochinitos Manteca Tradicional",
        presentation: "Pote / Empaque Tradicional",
        imageUrl: "/images/productos/3COCHINITOS-MANTECA-HD-TRANS.webp",
        badge: "Sabor Criollo Inconfundible",
        description: "Aporta suavidad, humedad y ese toque crujiente incomparable en masas y frituras.",
      },
    ],
    attributes: [
      "Más de cinco décadas de liderazgo indiscutible en las cocinas tradicionales venezolanas.",
      "Excelente desempeño y estabilidad al freír a altas temperaturas.",
      "Versatilidad probada en panificación, repostería y platos típicos regionales.",
    ],
    benefits: [
      "Potencia el sabor auténtico de las preparaciones caseras y tradicionales.",
      "Otorga textura crujiente y dorada en frituras sin resecar el alimento.",
      "Aporta suavidad, humedad y estructura superior a masas dulces y saladas.",
      "Excelente rendimiento por preparación.",
    ],
    culinaryUses: "Cremados, panificación, horneados, fritura de empanadas y pastelitos, y platos típicos venezolanos.",
    presentations: ["Formatos de consumo y servicio gastronómico"],
    industrialRelation: {
      title: "¿Requieres mantecas industriales para panadería a gran escala?",
      description: "Descubre Tresco y Trescolt en bloques profesionales para panaderías y galleterías.",
      linkText: "Ver Mantecas Industriales",
      href: "/productos/ingredientes#tresco",
    },
  },

  truvia: {
    id: "truvia",
    number: "06",
    name: "truvía",
    category: "Endulzante Natural Stevia",
    tagline: "La nueva generación de endulzantes de origen natural sin calorías",
    badge: "Zero Calorías • Stevia",
    color: "#16a34a",
    lightBg: "bg-green-50/60",
    borderColor: "border-green-200/80",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
    heroDescription:
      "Truvía forma parte de la nueva generación de endulzantes. Está elaborado a base de stevia y cuenta con tan solo tres ingredientes de origen natural: eritritol, extracto de la hoja de stevia y sabores naturales.",
    products: [
      {
        id: "truvia-consumo",
        name: "Truvía Stevia Mesa",
        presentation: "Sobres / Tarro",
        imageUrl: "/images/productos/truvia/truvia-producto1.webp",
        badge: "Consumo Diario",
        description: "El toque dulce perfecto para café, té, batidos y repostería casera sin calorías.",
      },
      {
        id: "truvia-ingrediente",
        name: "Truvía Formato Granel e Industrial",
        presentation: "Bolsa 482g y Cajas 400 Sobres",
        imageUrl: "/images/productos/truvia/truvia-producto3.webp",
        badge: "Repostería & Food Service",
        description: "Solución endulzante de alto rendimiento para horneados, cafeterías y bebidas.",
      },
    ],
    attributes: [
      "Elaborado a base de extracto de la hoja de stevia y eritritol de origen natural.",
      "Solo tres ingredientes de origen natural: eritritol, extracto de hoja de stevia y aromas naturales.",
      "Aporta un delicioso y satisfactorio sabor dulce sin dejar regusto metálico.",
    ],
    benefits: [
      "No aporta calorías: disfruta el dulce cuidando tu ingesta calórica.",
      "Elaborado solo con 3 ingredientes de origen natural.",
      "No contiene gluten (Gluten Free).",
      "Es amigable para la dieta Keto y estilo de vida bajo en carbohidratos.",
      "Certificación Kosher (Certificado Parve).",
    ],
    culinaryUses: "Endulzar café, té, yogur, jugos y bebidas; hornear tortas y postres; cocina saludable diaria.",
    presentations: [
      "Bolsa de 482 gr",
      "Paquete de 400 sobres",
      "Paquete de 40 sobres",
      "Tarro de 280 gr",
    ],
  },
};

// ============================================================================
// 2. CATÁLOGO DE INGREDIENTES INDUSTRIALES & PANADERÍA
// ============================================================================
export const INGREDIENTES_DATA: IngredientItem[] = [
  // 1. TRESCO & TRESCOLT (Mantecas & Grasas Panaderas)
  {
    id: "tresco",
    name: "Tresco",
    category: "grasas",
    categoryLabel: "Mantecas Industriales",
    tagline: "El experto en mantecas: realza sabor, optimiza textura y brillo",
    badge: "Experto en Mantecas",
    logoUrl: "/images/productos/TRESCO-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/TRESCO-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Es el experto en Mantecas, con un producto versátil que realza el sabor, optimiza textura, aporta humedad, suavidad y brillo a las preparaciones más exigentes.",
    attributes: [
      "En las masas: realza el sabor, optimiza la textura y aporta humedad, suavidad y brillo.",
      "Punto de fusión calibrado para una integración homogénea en amasadoras mecánicas.",
    ],
    benefits: [
      "Manteca versátil y multipropósito con usos en panificación, pastelería y rellenos en general.",
      "Neutro de carácter sensorial por lo que realza el sabor original de las preparaciones.",
      "Aumenta la vida útil del pan terminado manteniéndolo tierno por más tiempo.",
    ],
    applicationsGeneral: [
      "Panificación y pastelería, obleas (wafer), relleno de galletas y barras energéticas.",
      "Masas saladas: pan francés, canillas, campesino, pan sándwich, pan sobado, perros calientes, hamburguesas, cachitos y pastelitos.",
      "Hojaldres y pastelería fina (en cantidad de 3 Kg de harina y hasta 2 L de agua).",
    ],
  },
  {
    id: "trescolt",
    name: "Trescolt",
    category: "grasas",
    categoryLabel: "Mantecas Especiales",
    tagline: "Especialista en plasticidad y laminado de masas",
    badge: "Plasticidad Superior",
    logoUrl: "/images/productos/TRESCOLT-LOGO-HD-TRANS.webp",
    productImageUrl: "/images/productos/TRESCOLT-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Es el experto en Mantecas, con un producto versátil que realza el sabor, optimiza textura, aporta humedad, suavidad y brillo a las preparaciones más exigentes.",
    attributes: [
      "En las masas: realza el sabor, optimiza la textura y aporta humedad, suavidad y brillo.",
      "Excelente plasticidad a distintas temperaturas de trabajo en panaderías.",
    ],
    benefits: [
      "Manteca versátil y multipropósito con usos en panificación, pastelería y rellenos.",
      "Neutro de carácter sensorial.",
      "Ideal para masas laminadas que requieren capas definidas sin fundirse prematuramente.",
    ],
    applicationsGeneral: [
      "Panificación y pastelería, wafer, relleno de galletas y barras energéticas.",
      "Masas saladas: pan francés, canillas, campesinos, pan sándwich, pan sobado, perros calientes, hamburguesas, cachitos, pastelitos y hojaldres.",
      "En pastelería, en cantidad de 3 Kg de harina y hasta 2 L de agua.",
    ],
  },

  // 2. VATEL PRO (Aceites & Fritura Especializada)
  {
    id: "vatel-pro",
    name: "Vatel Pro",
    category: "aceites",
    categoryLabel: "Aceites & Grasas Profesionales",
    tagline: "Ingeniería en aceites y grasas para fritura profunda y cocina profesional",
    badge: "Línea Profesional",
    logoUrl: "/images/productos/VATELPRO-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/vegetal-18.webp",
    description:
      "Línea profesional desarrollada para resistir las exigencias de freidoras continuas, restaurantes, panificadoras y plantas de alimentos, integrando aceites especializados y grasas de alto rendimiento.",
    variants: [
      {
        name: "Vatel Pro Fritura Especializada",
        description: "Aceite formulado para freidoras de alto tráfico con aditivos antioxidantes certificados que evitan humos y olores.",
        benefits: ["Resiste más ciclos de fritura sin degradarse.", "Alimentos más crocantes y secos."],
      },
      {
        name: "Vatel Pro Comestible",
        description: "Aceite neutro para emulsiones, mayonesas, salsas, aderezos y cocción general.",
        benefits: ["Pureza superior y máxima estabilidad oxidativa."],
      },
      {
        name: "Vatel Pro Grasas Fritura",
        description: "Grasas sólidas y semisólidas formuladas para jornadas continuas de fritura industrial sin descomposición.",
        benefits: ["Alto punto de humo y resistencia a la hidrólisis.", "Acabado seco en donas, churros y empanadas."],
      },
    ],
    attributes: [
      "Alto punto de humo y resistencia térmica superior en freidoras continuas.",
      "Cero alteración del sabor y olor natural de los alimentos.",
    ],
    benefits: [
      "Mayor vida útil y rendimiento económico por ciclo de fritura.",
      "Reducción de absorción de grasa en el producto terminado.",
    ],
    applicationsGeneral: [
      "Cadenas de comida rápida, polleras, restaurantes, catering, panificadoras y plantas de snacks.",
    ],
    presentations: ["Bidón 18 Litros", "Bloque / Caja Industrial"],
  },

  // 3. REY DEL NORTE (Harinas & Premezclas Panaderas)
  {
    id: "rey-del-norte",
    name: "Rey del Norte",
    category: "harinas",
    categoryLabel: "Harinas & Premezclas Panaderas",
    tagline: "Desarrollo superior del pan: harina de alta proteína y premezclas listas",
    badge: "Alta Proteína Panadera",
    logoUrl: "/images/productos/REYDELNORTE-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/REYDELNORTE-SINFONDO.webp",
    description:
      "Rey del Norte viene a cubrir las necesidades de tener una harina de excelente y alto desempeño ofreciendo un desarrollo superior del pan, siendo una harina de trigo de alta proteína especial para panadería y pastelería.",
    attributes: [
      "Harina de trigo de alta proteína para productos de panadería y pastelería.",
      "Tiene mejoradores que ayudan sustancialmente a su desempeño.",
      "Puede rendir hasta para 60 Kgs de pan en preparación de masas saladas.",
    ],
    benefits: [
      "Desarrolla excelente volumen en preparaciones de panadería.",
      "Soporta hasta 22 - 23 Litros de agua por saco, lo que produce mayor rendimiento de masa final.",
      "Fácil manejo y formado de aplicaciones o recetas en el obrador panadero.",
      "Genera masas tenaces de buena extensibilidad y buen balance de elasticidad.",
      "Soporta el encavado de panes.",
      "Excelentes propiedades sensoriales: blancura, sabor y olor inconfundibles.",
      "Canales destino: panaderías artesanales e industriales.",
    ],
    applicationsSaladas: [
      "Pan francés, canillas y pan campesino",
      "Pan tipo sándwich y pan sobado",
      "Pan para perros calientes y hamburguesas",
      "Cachitos y pastelitos",
      "Hojaldre (en pastelería: 3 Kg de harina y hasta 2L de agua)",
    ],
    applicationsDulces: [
      "Pan dulce y pan andino",
      "Catalinas y golfeados",
      "Tortas y panqués (mezclas con harina sandwichera y leudante)",
      "Galletas artesanales y pasta seca",
    ],
    variants: [
      {
        name: "Rey del Norte – Premezcla Semidulce 20kg",
        description:
          "Solución que da continuidad operativa a tu negocio, garantizando la calidad del producto final de una manera fácil y rápida cubriendo los 4 ingredientes más importantes para masas semidulces.",
        attributes: [
          "Contiene los ingredientes principales: sólo requiere levadura y agua.",
          "Versatilidad para calibrar sabor y dulzor.",
          "Control de fórmula estandarizado reduciendo tiempos de pesado.",
          "Garantías totales de inocuidad alimentaria.",
        ],
        benefits: [
          "Minimiza errores de formulación y variaciones en el pan.",
          "Masas más tolerantes a la fermentación.",
          "Descomplejiza la gestión de compras y optimiza almacenamiento.",
        ],
        applications: [
          "Cachitos, mini lunch y mini pan de jamón",
          "Pizza, pan sándwich, hamburguesa y perro caliente",
          "Pan de mantequilla",
        ],
      },
      {
        name: "Rey del Norte – Premezcla Dulce 20kg",
        description:
          "Solución que da continuidad operativa garantizando calidad uniforme en masas dulces cubriendo los 4 ingredientes esenciales.",
        attributes: [
          "Contiene los ingredientes principales: sólo requiere agua y levadura.",
          "Permite modificar características organolépticas según la receta.",
          "Reducción de tiempos de preparación e inocuidad garantizada.",
        ],
        benefits: [
          "Mayor rapidez de elaboración al suprimir pesaje de múltiples insumos.",
          "Control de inventarios más eficiente y menor merma.",
          "No requiere cambio en los equipos del proceso productivo.",
        ],
        applications: [
          "Pan andino, piñitas y golfeados",
          "Acemitas y tunjitas",
          "Pan de guayaba y queso",
        ],
      },
    ],
  },

  // 4. GRAMOVEN (Harinas Panaderas)
  {
    id: "gramoven",
    name: "Gramoven",
    category: "harinas",
    categoryLabel: "Harinas Panaderas",
    tagline: "El balance perfecto de trigos seleccionados para panadería",
    badge: "Estándar Panadero",
    logoUrl: "/images/productos/GRAMOVEN-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/GRAMOVEN-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Gramoven viene a cubrir las necesidades de una harina estándar con el balance perfecto de trigos especialmente seleccionados para las preparaciones cotidianas en panadería y pastelería.",
    attributes: [
      "Harina de trigo con mejoradores para productos de panadería.",
      "Rinde hasta 60 Kg de pan en preparaciones de masas saladas.",
      "Molienda uniforme con tolerancia comprobada en mesa de trabajo.",
    ],
    benefits: [
      "Produce panes de buen volumen y corteza atractiva.",
      "Soporta hasta 22 - 23 Litros de agua por saco.",
      "Fácil manejo y formado de aplicaciones en panadería.",
      "Soporta el encavado de panes.",
      "Propiedades sensoriales esperadas: blancura, sabor y olor limpios.",
      "Canal destino: panaderías artesanales y panificadoras medianas.",
    ],
    applicationsSaladas: [
      "Pan francés, canilla y campesino",
      "Pan siciliano, gallego, sobado y pan árabe",
      "Panes integrales",
      "Panes de perro caliente, hamburguesas y cachitos",
      "Pan de jamón, mini pan de jamón y croissant",
      "Tequeños, pastelitos y pizzas",
      "Hojaldre, tortas, panqués, donas y bombas",
    ],
    applicationsDulces: ["Pan andino, pan dulce (diversas variedades) y catalinas."],
  },

  // 5. EL REY (Harinas & Aceites Especiales)
  {
    id: "el-rey",
    name: "El Rey",
    category: "aceites",
    categoryLabel: "Aceites Profesionales",
    tagline: "Rendimiento y pureza para servicios de alimentación",
    badge: "Food Service",
    logoUrl: "/images/productos/ELREY-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/ELREY-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Línea de aceites para el sector hostelero, cafeterías e industrias de snacks que requieren abastecimiento confiable y frituras crujientes.",
    attributes: ["Alto rendimiento térmico y mínima formación de residuos."],
    benefits: ["Mayor vida útil en freidoras industriales."],
    applicationsGeneral: ["Cocinas comerciales, catering y frituras de alto tráfico."],
  },

  // 6. GRANO DE ORO (Harinas Panificables)
  {
    id: "grano-de-oro",
    name: "Grano de Oro",
    category: "harinas",
    categoryLabel: "Harinas Especiales",
    tagline: "Calidad y textura garantizada para preparaciones de alta exigencia",
    badge: "Molienda Selecta",
    logoUrl: "/images/productos/GRANODEORO-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/GRANODEORO-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Molienda equilibrada de trigos seleccionados que brinda versatilidad en obradores artesanales y talleres de pastelería.",
    attributes: ["Grano seleccionado con perfil proteico adaptable a diversas recetas."],
    benefits: ["Elasticidad balanceada y color dorado al hornear."],
    applicationsGeneral: ["Panes rústicos, panquecas, masa quebrada y bizcochos."],
  },

  // 7. BRANCA (Aceites Industriales)
  {
    id: "branca",
    name: "Branca",
    category: "aceites",
    categoryLabel: "Aceites Industriales",
    tagline: "El aceite más versátil para variedad de preparaciones",
    badge: "Alto Rendimiento",
    logoUrl: "/images/productos/BRANCA-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/BRANCA-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Es el aceite más versátil dentro del portafolio por su buen desempeño en variedad de preparaciones, haciéndolo una excelente opción para preparar cualquier plato a escala comercial.",
    attributes: [
      "Mezcla de aceites refinados con punto de humo balanceado.",
      "Comportamiento estable en cocción continua.",
    ],
    benefits: [
      "Excelente relación costo-rendimiento para restaurantes y comedores industriales.",
      "Sabor neutro que potencia el sazón de cada receta.",
    ],
    applicationsGeneral: ["Salteados, sofritos, frituras ligeras y aderezos."],
  },

  // 8. CONSUL (Harinas & Grasas Industriales)
  {
    id: "consul",
    name: "Consul",
    category: "harinas",
    categoryLabel: "Harinas Industriales",
    tagline: "Rendimiento y solidez para manufactura alimentaria",
    badge: "Harina Industrial",
    logoUrl: "/images/productos/CONSUL-INGREDIENTE-LOGO.webp",
    productImageUrl: "/images/productos/CONSUL-INGREDIENTE-PRODUCTO1.webp",
    description:
      "Harina industrial desarrollada para procesos continuos de panificación, galletería y masas que exigen desempeño predecible y rentabilidad operativa.",
    attributes: ["Formulación constante para líneas de producción mecanizadas."],
    benefits: ["Óptimo costo-rendimiento y estabilidad en procesos de alto volumen."],
    applicationsGeneral: ["Galletas, pastas secas, empanizados y panificación comercial."],
  },

  // 9. TRUVÍA (Endulzantes Industriales)
  {
    id: "truvia-ingredientes",
    name: "Truvía Soluciones Industriales",
    category: "endulzantes",
    categoryLabel: "Endulzantes de Origen Natural",
    tagline: "Dulzura vegetal sin calorías para formulaciones y food service",
    badge: "Stevia Industrial",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
    productImageUrl: "/images/productos/TRUVIA-INGREDIENTES-PRODUCTO1.webp",
    description:
      "Truvía forma parte de la nueva generación de endulzantes. Elaborado a base de stevia con tan solo tres ingredientes de origen natural (eritritol, extracto de hoja de stevia y sabores naturales), en formatos adaptados a cafeterías, pastelerías saludables y desarrollo de alimentos bajos en calorías.",
    attributes: [
      "No aporta calorías a las formulaciones finales.",
      "Elaborado solo con 3 ingredientes de origen natural.",
      "Sin gluten (Gluten Free) y certificado Kosher Parve.",
      "Amigable para dietas Keto y control glucémico.",
    ],
    benefits: [
      "Permite sustituir o reducir azúcar en recetas manteniendo el dulzor deseado.",
      "Estable a temperaturas habituales de horneado y pasteurización.",
      "Disponibilidad en cajas dispensadoras para cafeterías y sacos/bolsas para obradores.",
    ],
    presentations: [
      "Bolsa de 482 gr",
      "Paquete de 400 sobres (Food Service)",
      "Paquete de 40 sobres",
      "Tarro de 280 gr",
    ],
    applicationsGeneral: [
      "Bebidas calientes y frías, pastelería sin azúcar, postres saludables, yogures y helados.",
    ],
  },
];
