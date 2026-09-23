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

export const ALIMENTOS_BRANDS: BrandItem[] = [
  {
    id: "blancaflor",
    name: "BlancaFlor",
    category: "Harinas",
    tagline: "Tradición y pureza para la repostería y panes de la familia",
    badge: "Líder en Harinas",
    href: "/productos/alimentos/blancaflor",
    logoColor: "#183c6b",
    logoBg: "bg-blue-50/60",
    logoText: "BlancaFlor",
    logoSub: "Harina de Trigo",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
  },
  {
    id: "ronco",
    name: "Ronco",
    category: "Pastas",
    tagline: "El sabor inconfundible y punto perfecto en cada plato",
    badge: "Sabor Venezolano",
    href: "/productos/alimentos/ronco",
    logoColor: "#c8102e",
    logoBg: "bg-red-50/60",
    logoText: "RONCO",
    logoSub: "Pastas de Calidad",
    logoUrl: "/images/productos/RONCO-LOGO.webp",
  },
  {
    id: "fiorentina",
    name: "Fiorentina",
    category: "Pastas",
    tagline: "Calidad premium inspirada en la auténtica cocina italiana",
    badge: "Selección Especial",
    href: "/productos/alimentos/fiorentina",
    logoColor: "#00387b",
    logoBg: "bg-blue-50/60",
    logoText: "Fiorentina",
    logoSub: "Pasta Premium",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
  },
  {
    id: "vatel",
    name: "Vatel",
    category: "Aceites",
    tagline: "El aceite de siempre que resalta el sabor de tus comidas",
    badge: "Tradición Culinaria",
    href: "/productos/alimentos/vatel",
    logoColor: "#dc2626",
    logoBg: "bg-red-50/60",
    logoText: "VATEL",
    logoSub: "Aceite 100% Puro",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
  },
  {
    id: "purilev",
    name: "Purilev",
    category: "Aceites",
    tagline: "Ligereza, salud y máxima pureza para el bienestar del hogar",
    badge: "Salud y Pureza",
    href: "/productos/alimentos/purilev",
    logoColor: "#15803d",
    logoBg: "bg-emerald-50/60",
    logoText: "Purilev",
    logoSub: "Aceite Vegetal",
    logoUrl: "/images/productos/PURILEV-LOGO.webp",
  },
  {
    id: "los-3-cochinitos",
    name: "Los 3 cochinitos",
    category: "Grasas",
    tagline: "Rendimiento y sazón tradicional para preparaciones auténticas",
    badge: "Rendimiento y Sabor",
    href: "/productos/alimentos/los-3-cochinitos",
    logoColor: "#b91c1c",
    logoBg: "bg-rose-50/60",
    logoText: "Los 3 Cochinitos",
    logoSub: "Manteca y Grasas",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
  },
  {
    id: "truvia",
    name: "truvia",
    category: "Endulzantes",
    tagline: "Dulzura natural de origen vegetal sin calorías añadidas",
    badge: "Origen Natural",
    href: "/productos/alimentos/truvia",
    logoColor: "#16a34a",
    logoBg: "bg-green-50/60",
    logoText: "truvía",
    logoSub: "Endulzante Natural",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
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
