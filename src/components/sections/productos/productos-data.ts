import { Wheat, Utensils, Droplet, Sparkles, Mountain, Factory, Sun } from "lucide-react";

export interface BrandItem {
  id: string;
  name: string;
  category: string;
  tagline: string;
  badge?: string;
  href: string;
  logoColor: string;
  logoBg: string;
  logoText: string;
  logoSub?: string;
  logoUrl?: string; // Ruta de imagen para cuando el cliente suministre los logos oficiales
}

export interface CategoryGroup {
  id: string;
  name: string;
  icon: typeof Wheat;
  color: string;
  lightBg: string;
  brands: BrandItem[];
}

export const PRODUCTOS_INTRO = {
  badge: "Nuestros Negocios",
  title: "Nuestros negocios y marcas",
  description:
    "Nuestra organización posee dos grandes negocios, y desde el negocio de la alimentación, contamos con las principales marcas de nuestra empresa, con ellas aportamos valor a las mesas de todos los venezolanos, desde los alimentos, la sal industrial y la nutrición animal. Poseemos marcas de consumo masivo y soluciones industriales, que son perfectas para cada una de las audiencias. Nuestro foco fue, es y será ofrecer productos de calidad para cada uno de los hogares, manteniendo nuestra esencia y calidad distintiva.",
};

export const CONSUMO_MASIVO_BRANDS: BrandItem[] = [
  {
    id: "vatel",
    name: "Vatel",
    category: "Aceites",
    tagline: "El aceite de siempre que resalta el sabor de tus comidas",
    badge: "Tradición Culinaria",
    href: "/productos/consumo-masivo/vatel",
    logoColor: "#dc2626",
    logoBg: "bg-red-50/60",
    logoText: "VATEL",
    logoSub: "Aceite 100% Puro",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
  },
  {
    id: "ronco",
    name: "Ronco",
    category: "Pastas",
    tagline: "El sabor inconfundible y punto perfecto en cada plato",
    badge: "Sabor Venezolano",
    href: "/productos/consumo-masivo/ronco",
    logoColor: "#c8102e",
    logoBg: "bg-red-50/60",
    logoText: "RONCO",
    logoSub: "Pastas de Calidad",
    logoUrl: "/images/productos/ronco/LOGORONCO.webp",
  },
  {
    id: "blancaflor",
    name: "BlancaFlor",
    category: "Harinas",
    tagline: "Tradición y pureza para la repostería y panes de la familia",
    badge: "Líder en Harinas",
    href: "/productos/consumo-masivo/blancaflor",
    logoColor: "#183c6b",
    logoBg: "bg-blue-50/60",
    logoText: "BlancaFlor",
    logoSub: "Harina de Trigo",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
  },
  {
    id: "fiorentina",
    name: "Fiorentina",
    category: "Pastas",
    tagline: "Calidad premium inspirada en la auténtica cocina italiana",
    badge: "Selección Especial",
    href: "/productos/consumo-masivo/fiorentina",
    logoColor: "#00387b",
    logoBg: "bg-blue-50/60",
    logoText: "Fiorentina",
    logoSub: "Pasta Premium",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
  },
  {
    id: "los-3-cochinitos",
    name: "Los 3 cochinitos",
    category: "Grasas",
    tagline: "Rendimiento y sazón tradicional para preparaciones auténticas",
    badge: "Rendimiento y Sabor",
    href: "/productos/consumo-masivo/los-3-cochinitos",
    logoColor: "#b91c1c",
    logoBg: "bg-rose-50/60",
    logoText: "Los 3 Cochinitos",
    logoSub: "Manteca y Grasas",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
  },
  {
    id: "truvia",
    name: "truvía",
    category: "Endulzantes",
    tagline: "Dulzura natural de origen vegetal sin calorías añadidas",
    badge: "Origen Natural",
    href: "/productos/consumo-masivo/truvia",
    logoColor: "#16a34a",
    logoBg: "bg-green-50/60",
    logoText: "truvía",
    logoSub: "Endulzante Natural",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
  },
];

// Alias para compatibilidad con código existente
export const ALIMENTOS_BRANDS = CONSUMO_MASIVO_BRANDS;

export const INGREDIENTES_BRANDS: BrandItem[] = [
  {
    id: "tresco",
    name: "Tresco",
    category: "Mantecas & Grasas Panaderas",
    tagline: "Mantecas vegetales de alto rendimiento para panadería y galletería",
    badge: "Líder en Panificación",
    href: "/productos/ingredientes#tresco",
    logoColor: "#183c6b",
    logoBg: "bg-blue-50/60",
    logoText: "Tresco",
    logoSub: "Grasas Industriales",
    logoUrl: "/images/productos/TRESCO-INGREDIENTE-LOGO.webp",
  },
  {
    id: "vatel-pro",
    name: "Vatel Pro",
    category: "Aceites & Fritura Especializada",
    tagline: "Aceites comestibles de máxima estabilidad térmica para fritura industrial",
    badge: "Alto Rendimiento",
    href: "/productos/ingredientes#vatel-pro",
    logoColor: "#dc2626",
    logoBg: "bg-red-50/60",
    logoText: "Vatel Pro",
    logoSub: "Fritura Continua",
    logoUrl: "/images/productos/VATELPRO-INGREDIENTE-LOGO.webp",
  },
  {
    id: "rey-del-norte",
    name: "Rey del Norte",
    category: "Harinas Panificables",
    tagline: "Harinas de trigo de alta fuerza y absorción para panaderos profesionales",
    badge: "Fuerza & Rendimiento",
    href: "/productos/ingredientes#rey-del-norte",
    logoColor: "#009539",
    logoBg: "bg-green-50/60",
    logoText: "Rey del Norte",
    logoSub: "Harina de Trigo",
    logoUrl: "/images/productos/REYDELNORTE-INGREDIENTE-LOGO.webp",
  },
  {
    id: "gramoven",
    name: "Gramoven",
    category: "Harinas & Sémolas Industriales",
    tagline: "Molienda industrial de sémola durum y harinas acondicionadas",
    badge: "Calidad Industrial",
    href: "/productos/ingredientes#gramoven",
    logoColor: "#d97706",
    logoBg: "bg-amber-50/60",
    logoText: "Gramoven",
    logoSub: "Molienda de Trigo",
    logoUrl: "/images/productos/GRAMOVEN-INGREDIENTE-LOGO.webp",
  },
  {
    id: "el-rey",
    name: "El Rey",
    category: "Harinas Especiales de Trigo",
    tagline: "Harina panadera tradicional con equilibrio óptimo para amasado",
    badge: "Tradición Panadera",
    href: "/productos/ingredientes#el-rey",
    logoColor: "#c8102e",
    logoBg: "bg-red-50/60",
    logoText: "El Rey",
    logoSub: "Harina de Fuerza",
    logoUrl: "/images/productos/ELREY-INGREDIENTE-LOGO.webp",
  },
  {
    id: "grano-de-oro",
    name: "Grano de Oro",
    category: "Harinas Panificables",
    tagline: "Harina de trigo de máxima pureza para masas esponjosas y corteza dorada",
    badge: "Pureza & Esponjosidad",
    href: "/productos/ingredientes#grano-de-oro",
    logoColor: "#ca8a04",
    logoBg: "bg-yellow-50/60",
    logoText: "Grano de Oro",
    logoSub: "Harina Panadera",
    logoUrl: "/images/productos/GRANODEORO-INGREDIENTE-LOGO.webp",
  },
  {
    id: "branca",
    name: "Branca",
    category: "Mantecas Industriales",
    tagline: "Grasas vegetales emulsionadas para galletería y masas quebradas",
    badge: "Especialidad en Grasas",
    href: "/productos/ingredientes#branca",
    logoColor: "#0284c7",
    logoBg: "bg-sky-50/60",
    logoText: "Branca",
    logoSub: "Manteca Industrial",
    logoUrl: "/images/productos/BRANCA-INGREDIENTE-LOGO.webp",
  },
  {
    id: "consul",
    name: "Consul",
    category: "Grasas Vegetales Multiuso",
    tagline: "Manteca vegetal hidrogenada de consistencia plástica y alta estabilidad",
    badge: "Estabilidad & Plasticidad",
    href: "/productos/ingredientes#consul",
    logoColor: "#4f46e5",
    logoBg: "bg-indigo-50/60",
    logoText: "Consul",
    logoSub: "Grasa Multiuso",
    logoUrl: "/images/productos/CONSUL-INGREDIENTE-LOGO.webp",
  },
  {
    id: "truvia-industrial",
    name: "truvía Industrial",
    category: "Endulzantes Industriales",
    tagline: "Soluciones de stevia de alta pureza para food service y formulaciones industriales",
    badge: "Dulzura Sin Calorías",
    href: "/productos/ingredientes#truvia-industrial",
    logoColor: "#16a34a",
    logoBg: "bg-green-50/60",
    logoText: "truvía",
    logoSub: "Stevia Industrial",
    logoUrl: "/images/productos/TRUVIA-INGREDIENTE-LOGO.png",
  },
];

export const PRODUSAL_DATA = {
  title: "Produsal",
  subtitle: "Principal productora de sal de Venezuela",
  tagline: "Sal solar de calidad excepcional mediante procesos 100% naturales",
  logoUrl: "/images/productos/PRODUSAL-LOGO.webp",
  description:
    "Produsal es la principal productora de sal de Venezuela. Por año, genera más de 650.000 toneladas de sal. El complejo de producción de sal solar, ubicado en Los Olivitos, Municipio Miranda del estado Zulia, incluye una de las más recientes y modernas plantas salinas por evaporación solar del mundo. Produce sal solar de calidad, mediante un proceso totalmente natural.",
  metrics: [
    {
      value: "+650.000",
      unit: "Toneladas / año",
      label: "Capacidad de producción líder en la región",
      icon: Mountain,
    },
    {
      value: "100%",
      unit: "Evaporación Solar",
      label: "Proceso totalmente ecológico y natural",
      icon: Sun,
    },
    {
      value: "Los Olivitos",
      unit: "Miranda, Edo. Zulia",
      label: "Una de las plantas más modernas del mundo",
      icon: Factory,
    },
  ],
  href: "/en-construccion",
};
