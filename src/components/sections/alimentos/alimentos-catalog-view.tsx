"use client";

import React, { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowRight,
  CheckCircle2,
  ChevronRight,
  Sparkles,
} from "lucide-react";

export interface BrandShowcaseItem {
  id: string;
  number: string;
  name: string;
  category: string;
  filterCategory: "aceites" | "pastas" | "harinas" | "grasas" | "endulzantes";
  tagline: string;
  badge: string;
  color: string;
  lightBg: string;
  borderColor: string;
  logoUrl?: string;
  packshotUrl?: string;
  packshots?: { label: string; url: string; badge?: string }[];
  description: string;
  presentations: string[];
  keyAttributes: string[];
  culinaryUses: string;
}

export const CONSUMO_MASIVO_FILTERS = [
  { id: "todos", label: "Todas las Marcas", icon: "all" },
  { id: "aceites", label: "Aceites Vegetales", icon: "oil" },
  { id: "pastas", label: "Pastas de Trigo Durum", icon: "pasta" },
  { id: "harinas", label: "Harinas de Trigo", icon: "flour" },
  { id: "grasas", label: "Grasas & Mantecas", icon: "fat" },
  { id: "endulzantes", label: "Endulzantes Naturales", icon: "sweet" },
] as const;

export const CONSUMO_MASIVO_BRANDS: BrandShowcaseItem[] = [
  {
    id: "vatel",
    number: "01",
    name: "Vatel",
    category: "Aceites Vegetales 100% Puros",
    filterCategory: "aceites",
    tagline: "El aceite de siempre que resalta el sabor de tus comidas",
    badge: "Tradición Culinaria",
    color: "#dc2626",
    lightBg: "bg-red-50/50",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
    packshotUrl: "/images/productos/vatel/vatel-vegetal-1l.webp",
    packshots: [
      { label: "Vatel Vegetal 1L", url: "/images/productos/vatel/vatel-vegetal-1l.webp", badge: "Vegetal 100%" },
      { label: "Vatel Soya 1L", url: "/images/productos/vatel/vatel-soya-1l.webp", badge: "Soya Pura" },
    ],
    description:
      "La marca de tradición venezolana con soluciones especializadas: Vatel Vegetal (ideal para frituras crujientes), Vatel Soya (sofritos y guisos) y Edición Especial 5 veces filtrado.",
    presentations: [
      "Vatel Vegetal 1 Litro",
      "Vatel Soya 1L, 500ml, 250ml",
      "Edición Especial 900ml",
    ],
    keyAttributes: [
      "Más resistente al calor: absorbe menos en alimentos",
      "Genera menos olor y menos humo al freír",
      "Edición Especial 5 veces filtrado con tapa antigoteo",
    ],
    culinaryUses: "Frituras crujientes, sofritos criollos, guisos, aderezos y cocina diaria.",
  },
  {
    id: "ronco",
    number: "02",
    name: "Ronco",
    category: "Pastas de Trigo Durum",
    filterCategory: "pastas",
    tagline: "La pasta hecha con cariño que acompaña a los venezolanos",
    badge: "50+ Años de Tradición",
    color: "#c8102e",
    lightBg: "bg-red-50/50",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/ronco/LOGORONCO.webp",
    packshotUrl: "/images/productos/ronco/premium/pluma-1kg.webp",
    packshots: [
      { label: "Premium Pluma", url: "/images/productos/ronco/premium/pluma-1kg.webp", badge: "Línea Premium" },
      { label: "Pasticho Artesanal", url: "/images/productos/ronco/especialidades/pasticho-directo-al-horno.webp", badge: "Línea Artesanal" },
      { label: "Jet Codos", url: "/images/productos/ronco/jet/codo-jet-500g.webp", badge: "Cocción Rápida" },
      { label: "Vitaminas Tornillo", url: "/images/productos/ronco/enriquecida/tornillo-enriquecida-500g.webp", badge: "Nutrición Plus" },
    ],
    description:
      "Es la marca de pastas hecha con cariño, que ha acompañado a los venezolanos por más de 50 años. Elaborada con 100% trigo durum en sus versiones Premium, Especialidades (Jet y Vitaminas) y Artesanal.",
    presentations: [
      "Línea Premium (Vermicelli, Pluma, Tornillo, Dedal)",
      "Especialidades Jet & Vitaminas",
      "Línea Artesanal & Pasticho",
    ],
    keyAttributes: [
      "100% Sémola de trigo durum seleccionada",
      "Más sueltecita y no se pega al cocinarla",
      "Punto al dente garantizado y resistencia al morderla",
    ],
    culinaryUses: "Perfecta para almuerzos familiares, recetas con salsas tradicionales y ensaladas frías.",
  },
  {
    id: "blancaflor",
    number: "03",
    name: "BlancaFlor",
    category: "Harinas de Trigo",
    filterCategory: "harinas",
    tagline: "Tradición y pureza para la repostería y panes de la familia",
    badge: "Líder en Harinas",
    color: "#183c6b",
    lightBg: "bg-blue-50/50",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
    packshotUrl: "/images/productos/BLANCAFLOR-LEUDANTE-PRODUCTO1.webp",
    packshots: [
      { label: "Leudante 1kg", url: "/images/productos/BLANCAFLOR-LEUDANTE-PRODUCTO1.webp", badge: "Repostería" },
      { label: "Todo Uso 1kg", url: "/images/productos/BLANCAFLOR-TODOUSO-PRODUCTO2.webp", badge: "Panes y Masas" },
    ],
    description:
      "Elaborada a partir de trigos rigurosamente seleccionados, BlancaFlor ofrece una molienda de máxima finura y uniformidad, asegurando elasticidad, volumen y textura esponjosa en cada horneado.",
    presentations: ["1 Kg Todo Uso", "1 Kg Leudante", "Sacos de 25 Kg y 45 Kg"],
    keyAttributes: [
      "Molienda fina de alta consistencia",
      "Excelente desarrollo de gluten para masas",
      "Garantía de esponjosidad en repostería",
    ],
    culinaryUses: "Ideal para tortas, panquecas, galletas, panes artesanales y masas para empanadas.",
  },
  {
    id: "fiorentina",
    number: "04",
    name: "Fiorentina",
    category: "Pastas Especiales",
    filterCategory: "pastas",
    tagline: "La mejor relación precio/valor dentro del portafolio",
    badge: "Selección Especial",
    color: "#00387b",
    lightBg: "bg-blue-50/50",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
    packshotUrl: "/images/productos/fiorentina/fiorentina-tornillo-1kg.webp",
    packshots: [
      { label: "Tornillo 1kg", url: "/images/productos/fiorentina/fiorentina-tornillo-1kg.webp", badge: "Línea Corta" },
      { label: "Vermicelli 1kg", url: "/images/productos/fiorentina/fiorentina-vermicelli-1kg.webp", badge: "Línea Larga" },
    ],
    description:
      "Es la marca tradicional que ofrece la mejor relación precio/valor dentro del portafolio, elaborada con altos estándares de calidad en las presentaciones preferidas del consumidor.",
    presentations: ["Tornillo 500g", "Pluma 500g", "Vermicelli 500g"],
    keyAttributes: [
      "Elaborada con altos estándares de calidad",
      "La mejor relación precio valor dentro del portafolio",
      "Buena firmeza y rendimiento en cocción",
    ],
    culinaryUses: "Especial para recetas cotidianas, pastas con mariscos, reducciones y ensaladas.",
  },
  {
    id: "los-3-cochinitos",
    number: "05",
    name: "Los 3 Cochinitos",
    category: "Grasas & Mantecas Tradicionales",
    filterCategory: "grasas",
    tagline: "Más de 50 años potenciando el sabor auténtico de las comidas",
    badge: "50+ Años de Sazón",
    color: "#b91c1c",
    lightBg: "bg-rose-50/50",
    borderColor: "border-rose-200/80",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
    packshotUrl: "/images/productos/3COCHINITOS-MANTECA-HD-TRANS.webp",
    packshots: [
      { label: "Manteca 500g", url: "/images/productos/3COCHINITOS-MANTECA-HD-TRANS.webp", badge: "Sazón Tradicional" },
      { label: "Aceite Comestible", url: "/images/productos/3COCHINITOS-ACEITE-PRODUCTO1.png", badge: "Fritura Criolla" },
    ],
    description:
      "Un aliado con más de 50 años en el mercado para potenciar el sabor de los alimentos. Utilizado para repostería, platos tradicionales criollos y con excelente desempeño al freír.",
    presentations: ["Pote tradicional y formatos de servicio"],
    keyAttributes: [
      "Realza el sabor auténtico de las comidas venezolanas",
      "Excelente estabilidad y desempeño en fritura profunda",
      "Aporta textura, humedad y suavidad a masas",
    ],
    culinaryUses: "Cremados, panificación, horneados, fritura de empanadas y cocina típica.",
  },
  {
    id: "truvia",
    number: "06",
    name: "truvía",
    category: "Endulzante Natural Stevia",
    filterCategory: "endulzantes",
    tagline: "La nueva generación de endulzantes sin calorías a base de stevia",
    badge: "Origen Natural",
    color: "#16a34a",
    lightBg: "bg-green-50/50",
    borderColor: "border-green-200/80",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
    packshotUrl: "/images/productos/truvia/truvia-producto1.webp",
    packshots: [
      { label: "Doypack 482g", url: "/images/productos/truvia/truvia-producto1.webp", badge: "Familiar" },
      { label: "Frasco Cuchareable", url: "/images/productos/truvia/truvia-producto3.webp", badge: "Mesa" },
      { label: "Sobres Individuales", url: "/images/productos/truvia/truvia-producto4.webp", badge: "Porciones" },
    ],
    description:
      "Elaborado a base de extracto de la hoja de stevia y eritritol, con tan solo 3 ingredientes de origen natural. Endulza sin calorías café, bebidas y horneados.",
    presentations: [
      "Bolsa de 482 gr",
      "Formatos individuales para servicio de mesa",
    ],
    keyAttributes: [
      "Cero calorías por porción",
      "Solo 3 ingredientes de origen natural",
      "Sin gluten, amigable para dieta Keto y Certificación Kosher Parve",
    ],
    culinaryUses: "Endulzar café, té, yogur, bebidas frías y hornear postres favoritos.",
  },
];

export const ALIMENTOS_EDITORIAL_BRANDS = CONSUMO_MASIVO_BRANDS;

export function AlimentosCatalogView() {
  const [selectedPacks, setSelectedPacks] = useState<Record<string, number>>({});
  const filteredBrands = CONSUMO_MASIVO_BRANDS;

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ========================================================
          ENCABEZADO DE SECCIÓN EDITORIAL
         ======================================================== */}
      <div className="max-w-4xl space-y-4 text-left">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
          Consumo Masivo • Marcas Líderes Grupo Mimesa
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
          Nuestras marcas en la mesa venezolana
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
          Cada una de nuestras marcas cuenta con identidad propia, procesos certificados y un propósito común: llevar calidad, sabor y nutrición a cada hogar en Venezuela.
        </p>
      </div>

      {/* ========================================================
          LISTADO EDITORIAL SECUENCIAL DE MARCAS (Ritmo Alternado)
         ======================================================== */}
      <div className="space-y-16 sm:space-y-24">
        {filteredBrands.map((brand, index) => {
          const isEven = index % 2 === 1;
          const currentPackIndex = selectedPacks[brand.id] || 0;
          const currentPackshot =
            brand.packshots && brand.packshots.length > 0
              ? brand.packshots[currentPackIndex].url
              : brand.packshotUrl;

          return (
            <article
              key={brand.id}
              id={brand.id}
              className={`relative scroll-mt-28 rounded-3xl border ${brand.borderColor} ${brand.lightBg} p-6 sm:p-8 lg:p-12 transition-all duration-300 shadow-sm hover:shadow-xl group/card`}
            >
              <div
                className={`grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center ${
                  isEven ? "lg:flex-row-reverse" : ""
                }`}
              >
                {/* ----------------------------------------------------
                    COLUMNA VISUAL: PACKSHOT Y LOGO (5 Columnas)
                   ---------------------------------------------------- */}
                <div
                  className={`lg:col-span-5 flex flex-col items-center justify-center ${
                    isEven ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  {/* Fila Superior: Número y Badge */}
                  <div className="w-full flex items-center justify-between mb-4">
                    <span className="font-heading font-black text-2xl sm:text-3xl text-slate-300">
                      {brand.number}
                    </span>
                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shrink-0 border"
                      style={{
                        backgroundColor: `${brand.color}15`,
                        color: brand.color,
                        borderColor: `${brand.color}30`,
                      }}
                    >
                      {brand.packshots && brand.packshots[currentPackIndex]?.badge
                        ? brand.packshots[currentPackIndex].badge
                        : brand.badge}
                    </span>
                  </div>

                  {/* Packshot Real del Producto Central */}
                  <div className="relative z-10 my-4 h-64 sm:h-72 w-full flex items-center justify-center">
                    <div
                      className="absolute w-48 h-48 rounded-full blur-2xl opacity-15 pointer-events-none"
                      style={{ backgroundColor: brand.color }}
                    />

                    {currentPackshot && (
                      <div
                        key={currentPackshot}
                        className="animate-brand-card relative flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500"
                      >
                        <Image
                          src={currentPackshot}
                          alt={`Empaque ${brand.name}`}
                          width={400}
                          height={400}
                          unoptimized
                          className={`object-contain drop-shadow-xl ${
                            brand.id === "los-3-cochinitos"
                              ? "max-h-52 sm:max-h-60 max-w-[240px] sm:max-w-[260px] w-auto h-auto"
                              : brand.id === "truvia"
                              ? "max-h-52 sm:max-h-60 max-w-[240px] sm:max-w-[260px] w-auto h-auto"
                              : brand.id === "fiorentina"
                              ? "max-h-60 sm:max-h-68 max-w-[280px] w-auto h-auto"
                              : "max-h-60 sm:max-h-68 max-w-[260px] sm:max-w-[280px] w-auto h-auto"
                          }`}
                        />
                      </div>
                    )}
                  </div>

                  {/* Selector interactivo de Nuevos Empaques */}
                  {brand.packshots && brand.packshots.length > 1 && (
                    <div className="w-full flex items-center justify-center gap-1.5 flex-wrap pt-1 pb-3">
                      {brand.packshots.map((pack, pIdx) => (
                        <button
                          key={pIdx}
                          onClick={() =>
                            setSelectedPacks((prev) => ({
                              ...prev,
                              [brand.id]: pIdx,
                            }))
                          }
                          className={`px-2.5 py-1 rounded-lg text-[11px] font-bold transition-all duration-200 cursor-pointer border ${
                            currentPackIndex === pIdx
                              ? "text-white shadow-xs"
                              : "bg-white/80 hover:bg-white text-slate-600 border-slate-200"
                          }`}
                          style={
                            currentPackIndex === pIdx
                              ? { backgroundColor: brand.color, borderColor: brand.color }
                              : {}
                          }
                        >
                          {pack.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Logo Corporativo de la Marca */}
                  {brand.logoUrl && (
                    <div className="mt-2 h-12 w-36 relative flex items-center justify-center grayscale group-hover/card:grayscale-0 transition-all duration-300">
                      <Image
                        src={brand.logoUrl}
                        alt={`Logotipo ${brand.name}`}
                        fill
                        unoptimized
                        className="object-contain"
                      />
                    </div>
                  )}
                </div>

                {/* ----------------------------------------------------
                    COLUMNA DE CONTENIDO EDITORIAL (7 Columnas)
                   ---------------------------------------------------- */}
                <div
                  className={`lg:col-span-7 space-y-6 ${
                    isEven ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <div className="flex items-center gap-3">
                      <h3
                        className="text-2xl sm:text-3xl lg:text-4xl font-black font-heading tracking-tight"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </h3>
                      <span className="text-xs font-semibold px-2.5 py-0.5 rounded-md bg-white/80 border border-slate-200 text-slate-600">
                        {brand.category}
                      </span>
                    </div>
                    <p className="text-base sm:text-lg font-bold text-slate-800 leading-snug">
                      {brand.tagline}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-slate-600 leading-relaxed font-normal">
                    {brand.description}
                  </p>

                  {/* Presentaciones Comerciales */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                      Presentaciones disponibles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {brand.presentations.map((pres, idx) => (
                        <span
                          key={idx}
                          className="px-3 py-1 rounded-lg text-xs font-semibold bg-white border border-slate-200/90 text-slate-700 shadow-2xs"
                        >
                          {pres}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Atributos Clave */}
                  <div className="space-y-2 pt-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                      Atributos diferenciales
                    </span>
                    <ul className="space-y-1.5">
                      {brand.keyAttributes.map((attr, idx) => (
                        <li key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                          <CheckCircle2
                            className="w-4 h-4 shrink-0 mt-0.5"
                            style={{ color: brand.color }}
                          />
                          <span>{attr}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Usos Culinarios Destacados */}
                  <div className="p-4 rounded-2xl bg-white/80 border border-slate-200/60 space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-400 block">
                      Usos culinarios recomendados:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {brand.culinaryUses}
                    </p>
                  </div>

                  {/* CTA para ver más sobre la marca */}
                  <div className="pt-2">
                    <Link
                      href={`/productos/consumo-masivo/${brand.id}`}
                      className="inline-flex items-center gap-2 text-sm font-bold transition-all duration-150 hover:gap-3 group/link"
                      style={{ color: brand.color }}
                    >
                      <span>Conocer portafolio completo de {brand.name}</span>
                      <ArrowRight className="w-4 h-4 transition-transform group-hover/link:translate-x-0.5" />
                    </Link>
                  </div>
                </div>
              </div>
            </article>
          );
        })}
      </div>
    </div>
  );
}
