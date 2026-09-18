import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, CheckCircle2, ChevronRight, Building2, Sparkles } from "lucide-react";

export interface BrandShowcaseItem {
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
  packshotUrl?: string;
  description: string;
  presentations: string[];
  keyAttributes: string[];
  culinaryUses: string;
}

export const ALIMENTOS_EDITORIAL_BRANDS: BrandShowcaseItem[] = [
  {
    id: "blancaflor",
    number: "01",
    name: "BlancaFlor",
    category: "Harinas de Trigo",
    tagline: "Tradición y pureza para la repostería y panes de la familia",
    badge: "Líder en Harinas",
    color: "#1a3c6a",
    lightBg: "bg-blue-50/50",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
    packshotUrl: "/images/productos/BLANCAFLOR-LEUDANTE-PRODUCTO1.webp",
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
    id: "ronco",
    number: "02",
    name: "Ronco",
    category: "Pastas de Trigo Durum",
    tagline: "La pasta hecha con cariño que acompaña a los venezolanos",
    badge: "50+ Años de Tradición",
    color: "#c8102e",
    lightBg: "bg-red-50/50",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/RONCO-LOGO.webp",
    packshotUrl: "/images/productos/RONCO-PREMIUM-PLUMA-PRODUCTO2.webp",
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
    id: "fiorentina",
    number: "03",
    name: "Fiorentina",
    category: "Pastas Especiales",
    tagline: "La mejor relación precio/valor dentro del portafolio",
    badge: "Selección Especial",
    color: "#00387b",
    lightBg: "bg-blue-50/50",
    borderColor: "border-blue-200/80",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
    packshotUrl: "/images/productos/FIORENTINA-PLUMA-PRODUCTO2.webp",
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
    id: "vatel",
    number: "04",
    name: "Vatel",
    category: "Aceites Vegetales 100% Puros",
    tagline: "El aceite de siempre que resalta el sabor de tus comidas",
    badge: "Tradición Culinaria",
    color: "#dc2626",
    lightBg: "bg-red-50/50",
    borderColor: "border-red-200/80",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
    packshotUrl: "/images/productos/VATEL-VEGETAL-1LT.webp",
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
    id: "purilev",
    number: "05",
    name: "Purilev",
    category: "Aceite Saludable & Omega 3",
    tagline: "El equilibrio entre lo sano y lo sabroso",
    badge: "Mayor Contenido de Omega 3",
    color: "#15803d",
    lightBg: "bg-emerald-50/50",
    borderColor: "border-emerald-200/80",
    logoUrl: "/images/productos/PURILEV-LOGO.webp",
    packshotUrl: "/images/productos/PURILEV-CANOLA-HD-TRANS.webp",
    description:
      "La alternativa más saludable dentro del portafolio. Aceite versátil con el mayor contenido de Omega 3, bajo en grasas saturadas y con sabor y olor neutro.",
    presentations: ["Botella 1 Litro"],
    keyAttributes: [
      "Mayor contenido de Omega 3 entre todos los aceites vegetales",
      "Bajo en grasas saturadas y libre de colesterol",
      "0% Grasas Trans con olor y sabor neutro",
    ],
    culinaryUses: "Ensaladas frescas, vinagretas, repostería ligera y cocina saludable.",
  },
  {
    id: "los-3-cochinitos",
    number: "06",
    name: "Los 3 Cochinitos",
    category: "Grasas & Mantecas Tradicionales",
    tagline: "Más de 50 años potenciando el sabor auténtico de las comidas",
    badge: "50+ Años de Sazón",
    color: "#b91c1c",
    lightBg: "bg-rose-50/50",
    borderColor: "border-rose-200/80",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
    packshotUrl: "/images/productos/3COCHINITOS-MANTECA-HD-TRANS.webp",
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
    number: "07",
    name: "truvía",
    category: "Endulzante Natural Stevia",
    tagline: "La nueva generación de endulzantes sin calorías a base de stevia",
    badge: "Origen Natural",
    color: "#16a34a",
    lightBg: "bg-green-50/50",
    borderColor: "border-green-200/80",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
    packshotUrl: "/images/productos/TRUVIA-INGREDIENTES-PRODUCTO1.webp",
    description:
      "Elaborado a base de extracto de la hoja de stevia y eritritol, con tan solo 3 ingredientes de origen natural. Endulza sin calorías café, bebidas y horneados.",
    presentations: [
      "Bolsa de 482 gr",
      "Paquete de 400 sobres",
      "Paquete de 40 sobres",
      "Tarro de 280 gr",
    ],
    keyAttributes: [
      "Cero calorías por porción",
      "Solo 3 ingredientes de origen natural",
      "Sin gluten, amigable para dieta Keto y Certificación Kosher Parve",
    ],
    culinaryUses: "Endulzar café, té, yogur, bebidas frías y hornear postres favoritos.",
  },
];

export function AlimentosCatalogView() {
  return (
    <div className="space-y-20 sm:space-y-28">
      {/* ========================================================
          ENCABEZADO DE SECCIÓN EDITORIAL (Sin pestañas ni filtros)
         ======================================================== */}
      <div className="max-w-3xl space-y-3 text-left">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
          Portafolio de Alimentos Grupo Mimesa
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight leading-tight">
          Nuestras marcas líderes
        </h2>
        <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
          Cada una de nuestras marcas cuenta con una identidad propia, procesos certificados y un propósito común: llevar calidad, sabor y nutrición a cada rincón de Venezuela.
        </p>
      </div>

      {/* Barra de navegación rápida: Marcas vs Ingredientes Industriales */}
      <div className="flex flex-wrap items-center justify-between gap-4 pb-2 border-b border-slate-200/80">
        <div className="flex flex-wrap items-center gap-2.5">
          <span className="px-3.5 py-1.5 rounded-xl bg-[#009539]/10 text-[#009539] text-xs font-bold">
            Marcas de Consumo Masivo
          </span>
          <a
            href="#ingredientes"
            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-slate-100 hover:bg-[#1a3c6a] hover:text-white text-slate-700 text-xs font-bold transition-colors cursor-pointer"
          >
            <Building2 className="w-3.5 h-3.5 text-[#02afab]" />
            <span>Ver ingredientes</span>
            <ArrowRight className="w-3 h-3" />
          </a>
        </div>
      </div>

      {/* ========================================================
          LISTADO EDITORIAL SECUENCIAL DE MARCAS (Ritmo Alternado)
         ======================================================== */}
      <div className="space-y-16 sm:space-y-24">
        {ALIMENTOS_EDITORIAL_BRANDS.map((brand, idx) => {
          const isEven = idx % 2 === 1;

          return (
            <div
              key={brand.id}
              id={brand.id}
              className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center p-8 sm:p-12 lg:p-14 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 group"
            >
              {/* Columna Texto e Información */}
              <div
                className={`lg:col-span-7 space-y-6 ${
                  isEven ? "lg:order-2" : "lg:order-1"
                }`}
              >
                {/* Kicker con número y categoría */}
                <div className="flex flex-wrap items-center gap-3">
                  <span
                    className="text-xs font-black uppercase tracking-widest"
                    style={{ color: brand.color }}
                  >
                    {brand.number} • {brand.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-bold text-slate-400">
                    {brand.badge}
                  </span>
                </div>

                {/* Título de la Marca */}
                <div className="space-y-1">
                  <h3
                    className="text-4xl sm:text-5xl lg:text-6xl font-black tracking-tight"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </h3>
                  <p className="text-base sm:text-lg font-bold text-slate-800 pt-1">
                    {brand.tagline}
                  </p>
                </div>

                {/* Narrativa Descriptiva */}
                <p className="text-sm sm:text-base text-slate-600 font-light leading-relaxed">
                  {brand.description}
                </p>

                {/* Usos Culinarios Destacados */}
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 font-medium leading-relaxed">
                  <span className="font-bold text-slate-900 block mb-0.5">
                    Aplicación sugerida:
                  </span>
                  {brand.culinaryUses}
                </div>

                {/* Formatos y Presentaciones */}
                <div className="space-y-2 pt-1">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-400 block">
                    Presentaciones Comerciales
                  </span>
                  <div className="flex flex-wrap gap-2">
                    {brand.presentations.map((p) => (
                      <span
                        key={p}
                        className="text-xs font-semibold px-3.5 py-1.5 rounded-xl bg-white border border-slate-200 text-slate-700 shadow-xs"
                      >
                        {p}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Botón de Enlace hacia la Página Individual de Marca */}
                <div className="pt-3">
                  <Link
                    href={`/productos/alimentos/${brand.id}`}
                    className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-white text-xs sm:text-sm font-bold shadow-lg hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 group/btn cursor-pointer"
                    style={{ backgroundColor: brand.color }}
                  >
                    <span>Explorar productos {brand.name}</span>
                    <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Columna Visual / Emblema & Packshot de Marca */}
              <div
                className={`lg:col-span-5 relative ${
                  isEven ? "lg:order-1" : "lg:order-2"
                }`}
              >
                <div className="p-6 sm:p-8 rounded-[2.5rem] bg-white border-2 border-slate-100/90 shadow-md hover:shadow-2xl transition-all duration-500 relative overflow-hidden flex flex-col justify-between min-h-[400px] sm:min-h-[440px] group/card">
                  {/* Barra de Acento Superior con el Color Oficial de la Marca */}
                  <div
                    className="h-1.5 w-full absolute top-0 left-0 transition-all duration-300 group-hover/card:h-2"
                    style={{ backgroundColor: brand.color }}
                  />

                  {/* Luz ambiental de fondo en el tono exacto de la marca */}
                  <div
                    className="absolute -right-12 -bottom-12 w-48 h-48 rounded-full blur-3xl opacity-15 pointer-events-none"
                    style={{ backgroundColor: brand.color }}
                  />
                  <div
                    className="absolute -left-12 -top-12 w-48 h-48 rounded-full blur-3xl opacity-10 pointer-events-none"
                    style={{ backgroundColor: brand.color }}
                  />

                  {/* Header de la tarjeta con Logo Oficial sobre Fondito Blanco Impecable y Mayor Amplitud */}
                  <div className="relative z-10 flex items-center justify-between gap-3">
                    {brand.logoUrl ? (
                      <div className="h-16 sm:h-20 w-44 sm:w-52 bg-white rounded-2xl p-2.5 flex items-center justify-center shadow-xs border border-slate-200/90 relative overflow-hidden shrink-0">
                        <Image
                          src={brand.logoUrl}
                          alt={`Logo oficial ${brand.name}`}
                          fill
                          className="object-contain p-1"
                        />
                      </div>
                    ) : (
                      <span
                        className="text-base font-black tracking-tight"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </span>
                    )}

                    <span
                      className="px-3 py-1 rounded-full text-[10px] font-extrabold uppercase tracking-wider shrink-0 border"
                      style={{
                        backgroundColor: `${brand.color}15`,
                        color: brand.color,
                        borderColor: `${brand.color}30`,
                      }}
                    >
                      {brand.badge}
                    </span>
                  </div>

                  {/* Packshot Real del Producto Central con Mayor Presencia y Escala Visual */}
                  <div className="relative z-10 my-4 h-64 sm:h-72 w-full flex items-center justify-center">
                    {/* Resplandor suave centrado tras el producto */}
                    <div
                      className="absolute w-48 h-48 rounded-full blur-2xl opacity-15 pointer-events-none"
                      style={{ backgroundColor: brand.color }}
                    />

                    {brand.packshotUrl ? (
                      <div className="relative flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500">
                        <Image
                          src={brand.packshotUrl}
                          alt={`Empaque ${brand.name}`}
                          width={400}
                          height={400}
                          className={`object-contain drop-shadow-xl ${
                            brand.id === "purilev" ? "max-h-60 sm:max-h-68 max-w-[150px] w-auto h-auto" :
                            brand.id === "los-3-cochinitos" ? "max-h-52 sm:max-h-60 max-w-[240px] sm:max-w-[260px] w-auto h-auto" :
                            brand.id === "truvia" ? "max-h-52 sm:max-h-60 max-w-[240px] sm:max-w-[260px] w-auto h-auto" :
                            brand.id === "fiorentina" ? "max-h-60 sm:max-h-68 max-w-[280px] w-auto h-auto" :
                            "max-h-60 sm:max-h-68 max-w-[260px] sm:max-w-[280px] w-auto h-auto"
                          }`}
                        />
                      </div>
                    ) : (
                      <div className="text-center space-y-1">
                        <div
                          className="text-4xl sm:text-5xl font-black tracking-tight drop-shadow-xs"
                          style={{ color: brand.color }}
                        >
                          {brand.name}
                        </div>
                        <p className="text-xs uppercase tracking-widest text-slate-400 font-bold">
                          {brand.category}
                        </p>
                      </div>
                    )}
                  </div>

                  {/* Atributos Clave en Píldoras Limpias */}
                  <div className="relative z-10 space-y-2 pt-3 border-t border-slate-100">
                    {brand.keyAttributes.slice(0, 2).map((attr) => (
                      <div
                        key={attr}
                        className="flex items-start gap-2 text-xs text-slate-700 font-medium"
                      >
                        <CheckCircle2 className="w-4 h-4 text-[#009539] shrink-0 mt-0.5" />
                        <span className="line-clamp-1">{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
