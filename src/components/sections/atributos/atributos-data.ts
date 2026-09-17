import { Zap, ShieldCheck, Award } from "lucide-react";

export interface AtributoItem {
  id: string;
  num: string;
  title: string;
  tagline: string;
  description: string;
  icon: typeof Zap;
  color: string;
  lightBg: string;
  borderColor: string;
  badge: string;
  highlightText?: string;
}

export const ATRIBUTOS_CTA_DATA = {
  badge: "Nuestra Esencia y Compromiso",
  titleMain: "Atributos que nos acompañan",
  titleGradient: "en todo momento",
  subtitle:
    "Valores forjados en más de 35 años de historia que guían nuestras decisiones diarias, unen a nuestro talento humano y garantizan la máxima calidad en los hogares de Venezuela.",
  pills: [
    { label: "Fluidez Operativa", icon: Zap, color: "#02afab" },
    { label: "Integridad Innegociable", icon: ShieldCheck, color: "#009539" },
    { label: "+35 Años de Solidez", icon: Award, color: "#94c11e" },
  ],
  ctaButtonText: "Conoce nuestros atributos",
  ctaButtonLink: "#atributos-detalle",
};

export const ATRIBUTOS_ITEMS: AtributoItem[] = [
  {
    id: "flexibilidad",
    num: "01",
    title: "Flexibilidad",
    tagline: "Procesos dinámicos impulsados por las ideas de nuestra gente",
    description:
      "Confiamos en nuestros procesos y en su fluidez. Cada trabajador de esta empresa es parte de la razón por la cual somos líderes en nuestra industria. Sus conocimientos e ideas suman a que nuestros procesos sean lo más dinámicos, lo que da como resultado productos de excelente calidad que llegan a los venezolanos para enriquecer sus hogares.",
    icon: Zap,
    color: "#02afab",
    lightBg: "bg-[#02afab]/10",
    borderColor: "hover:border-[#02afab]",
    badge: "Fluidez & Innovación",
    highlightText: "Procesos dinámicos y calidad que enriquecen los hogares",
  },
  {
    id: "etica",
    num: "02",
    title: "Ética",
    tagline: "Hacemos las cosas bien o no las hacemos, siempre con optimismo",
    description:
      "Escogemos el camino correcto, no el más sencillo. Nuestro compromiso es ofrecer un lugar en el que no solo van a crecer nuestros colaboradores, sino en el que se sientan respetados y valorados para que tengan la seguridad de compartir ideas que contribuyan en hacernos mejores personas, trabajadores, y empresa. En Grupo Mimesa hacemos las cosas bien, o no las hacemos, siempre con gran optimismo y determinación.",
    icon: ShieldCheck,
    color: "#009539",
    lightBg: "bg-[#009539]/10",
    borderColor: "hover:border-[#009539]",
    badge: "Integridad & Respeto",
    highlightText: "El camino correcto, respeto mutuo y determinación",
  },
  {
    id: "experiencia",
    num: "03",
    title: "Experiencia",
    tagline: "Más de 35 años de trayectoria, la misma gente y el compromiso de siempre",
    description:
      "Somos una empresa que nace con más de 35 años de experiencia. Ahora, emprendemos un nuevo camino, con solidez y seguridad, así como la oportunidad de crecer más y a nuestra manera. Somos la misma gente, el mismo talento, con el compromiso de siempre.",
    icon: Award,
    color: "#94c11e",
    lightBg: "bg-[#94c11e]/15",
    borderColor: "hover:border-[#94c11e]",
    badge: "Solidez & Trayectoria",
    highlightText: "35+ Años de experiencia con el mismo talento y pasión",
  },
];
