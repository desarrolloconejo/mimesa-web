"use client";

import React, { useState } from "react";
import Link from "next/link";
import { ArrowUpRight, Check, Utensils, Sparkles, Heart } from "lucide-react";
import { ALIMENTOS_BRANDS, BrandItem } from "../productos/productos-data";

// Specific culinary and nutritional attributes for each brand
const BRAND_DETAILS: Record<string, { specs: string[]; origin: string }> = {
  blancaflor: {
    specs: [
      "Trigo seleccionado de máxima pureza",
      "Ideal para panadería, pizzas y repostería",
      "Alto rendimiento y textura aireada",
    ],
    origin: "Tradición y confianza en la cocina",
  },
  ronco: {
    specs: [
      "100% sémola de trigo durum seleccionado",
      "Punto al dente garantizado en cada cocción",
      "Línea de cortes largos y cortos tradicionales",
    ],
    origin: "El sabor clásico de la mesa venezolana",
  },
  fiorentina: {
    specs: [
      "Receta inspirada en la gastronomía italiana",
      "Superficie porosa que absorbe mejor las salsas",
      "Elaboración premium con sémola especial",
    ],
    origin: "Selección gourmet para momentos especiales",
  },
  vatel: {
    specs: [
      "Aceite 100% vegetal refinado y puro",
      "Sabor neutro que realza el gusto natural",
      "Resistente a altas temperaturas de fritura",
    ],
    origin: "El aceite tradicional de los hogares",
  },
  purilev: {
    specs: [
      "Ultra filtrado para máxima ligereza",
      "0% colesterol y grasas trans",
      "Ideal para ensaladas, salteados y cocina saludable",
    ],
    origin: "Bienestar y pureza diaria",
  },
  "los-3-cochinitos": {
    specs: [
      "Grasa tradicional de alto punto de humo",
      "Rendimiento insuperable para panaderías y frituras",
      "Sazón y dorado perfecto en preparaciones criollas",
    ],
    origin: "Rendimiento y sazón auténtica",
  },
  truvia: {
    specs: [
      "Extracto natural de hojas de stevia",
      "Cero calorías por porción",
      "Dulzura balanceada sin sabor amargo residual",
    ],
    origin: "Dulzura natural de origen vegetal",
  },
};

export function AlimentosCatalog() {
  const [selectedCategory, setSelectedCategory] = useState<string>("all");

  const categories = [
    { id: "all", label: "Todas las Marcas", count: ALIMENTOS_BRANDS.length },
    { id: "Harinas", label: "Harinas", count: ALIMENTOS_BRANDS.filter((b) => b.category === "Harinas").length },
    { id: "Pastas", label: "Pastas", count: ALIMENTOS_BRANDS.filter((b) => b.category === "Pastas").length },
    { id: "Aceites", label: "Aceites", count: ALIMENTOS_BRANDS.filter((b) => b.category === "Aceites").length },
    { id: "Grasas", label: "Grasas", count: ALIMENTOS_BRANDS.filter((b) => b.category === "Grasas").length },
    { id: "Endulzantes", label: "Endulzantes", count: ALIMENTOS_BRANDS.filter((b) => b.category === "Endulzantes").length },
  ];

  const filteredBrands =
    selectedCategory === "all"
      ? ALIMENTOS_BRANDS
      : ALIMENTOS_BRANDS.filter((brand) => brand.category === selectedCategory);

  return (
    <section id="seccion-alimentos" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
        <div className="space-y-3 max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
            01 • Portafolio de Alimentos
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight">
            Nuestras 7 Marcas de Consumo Masivo
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Una selección de marcas icónicas que forman parte de la mesa de las familias venezolanas, combinando tecnología de molienda y empaque con los más altos estándares de calidad e inocuidad.
          </p>
        </div>

        {/* Category Pill Filters */}
        <div className="flex flex-wrap gap-1.5 p-1.5 bg-slate-100/90 rounded-2xl border border-slate-200/80 self-start md:self-end">
          {categories.map((cat) => (
            <button
              key={cat.id}
              type="button"
              onClick={() => setSelectedCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all duration-150 cursor-pointer ${
                selectedCategory === cat.id
                  ? "bg-[#009539] text-white shadow-xs"
                  : "text-slate-600 hover:text-[#009539] hover:bg-white/80"
              }`}
            >
              <span>{cat.label}</span>
              <span
                className={`ml-1.5 text-[10px] px-1.5 py-0.2 rounded-full font-extrabold ${
                  selectedCategory === cat.id ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                }`}
              >
                {cat.count}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Brands Cards Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 pt-10">
        {filteredBrands.map((brand) => {
          const detail = BRAND_DETAILS[brand.id] || {
            specs: ["Calidad certificada Mimesa", "Consumo masivo", "Nutrición familiar"],
            origin: "Tradición y valor",
          };

          return (
            <div
              key={brand.id}
              className="relative rounded-3xl bg-white border border-slate-200/90 hover:border-[#009539]/40 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden group"
            >
              {/* Top Accent Color Bar */}
              <div
                className="h-1.5 w-full transition-all duration-300 group-hover:h-2"
                style={{ backgroundColor: brand.logoColor || "#009539" }}
              />

              <div className="p-6 sm:p-7 space-y-5">
                {/* Header: Brand Name + Category Badge */}
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <div className="flex items-center gap-2">
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: brand.logoColor || "#009539" }}
                      />
                      <h3
                        className="text-2xl font-black tracking-tight transition-colors"
                        style={{ color: brand.logoColor || "#1a3c6a" }}
                      >
                        {brand.name}
                      </h3>
                    </div>
                    <span className="text-[11px] font-bold text-gray-400 uppercase tracking-wider block mt-1">
                      {brand.category} • {detail.origin}
                    </span>
                  </div>

                  {brand.badge && (
                    <span
                      className="text-[10px] font-extrabold px-2.5 py-1 rounded-full uppercase tracking-wider shrink-0"
                      style={{
                        backgroundColor: `${brand.logoColor}15` || "#00953915",
                        color: brand.logoColor || "#009539",
                      }}
                    >
                      {brand.badge}
                    </span>
                  )}
                </div>

                {/* Tagline */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium italic border-l-2 pl-3 py-0.5 border-slate-200 group-hover:border-[#009539] transition-colors">
                  "{brand.tagline}"
                </p>

                {/* Specific Benefits & Specs */}
                <ul className="space-y-2 text-xs text-slate-600 font-normal pt-1">
                  {detail.specs.map((spec, sIdx) => (
                    <li key={sIdx} className="flex items-start gap-2">
                      <Check className="w-3.5 h-3.5 text-[#009539] shrink-0 mt-0.5" />
                      <span>{spec}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Card Footer: Action */}
              <div className="px-6 py-4 border-t border-slate-100 bg-slate-50/50 flex items-center justify-between">
                <span className="text-[11px] font-semibold text-slate-400">
                  Garantía Grupo Mimesa
                </span>
                <Link
                  href="/en-construccion"
                  className="inline-flex items-center gap-1.5 text-xs font-bold text-[#009539] hover:text-[#007a3d] group/link transition-colors"
                >
                  <span>Ficha de producto</span>
                  <ArrowUpRight className="w-3.5 h-3.5 group-link-hover:translate-x-0.5 group-link-hover:-translate-y-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
