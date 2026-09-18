"use client";

import React from "react";
import Link from "next/link";
import { ChevronRight, Layers, Utensils, Waves, CheckCircle2 } from "lucide-react";
import { GlowOrb, MimesaLeafLime, MimesaDotCyan, MimesaSprout } from "@/components/ui/organic-shapes";

export type CategoryFilter = "all" | "alimentos" | "produsal";

interface ProductosHeroProps {
  activeCategory: CategoryFilter;
  onSelectCategory: (category: CategoryFilter) => void;
}

export function ProductosHero({ activeCategory, onSelectCategory }: ProductosHeroProps) {
  return (
    <section className="relative pt-24 sm:pt-28 lg:pt-32 pb-12 sm:pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto overflow-hidden">
      {/* Ambient Lighting Orbs */}
      <GlowOrb color="cyan" className="top-10 -left-40 w-[550px] h-[550px] opacity-20" />
      <GlowOrb color="green" className="top-1/3 -right-40 w-[500px] h-[500px] opacity-15" />
      <GlowOrb color="lime" className="bottom-0 left-1/3 w-[450px] h-[450px] opacity-15" />

      {/* Floating Organic Brand Elements */}
      <div className="absolute top-20 right-10 pointer-events-none hidden xl:block opacity-40 animate-float-gentle">
        <MimesaLeafLime size={90} />
      </div>
      <div className="absolute bottom-10 left-6 pointer-events-none hidden xl:block opacity-45">
        <MimesaDotCyan size={38} />
      </div>

      <div className="relative z-10 max-w-4xl space-y-6 sm:space-y-8">
        {/* Breadcrumb Navigation */}
        <nav
          className="flex items-center gap-2 text-xs font-semibold text-gray-400 select-none"
          aria-label="Ruta de navegación"
        >
          <Link href="/" className="hover:text-[#02afab] transition-colors">
            Inicio
          </Link>
          <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
          <span className="text-[#1a3c6a] font-bold">Productos</span>
        </nav>

        {/* Header Kicker & Titles */}
        <div className="space-y-4">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab] block">
            Portafolio de Alimentos & Soluciones Salinas
          </span>

          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a3c6a] tracking-tight leading-[1.12]">
            Soluciones que nutren los hogares e impulsan la industria venezolana.
          </h1>

          <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl">
            Nuestra organización posee dos grandes negocios: la división de{" "}
            <strong className="font-semibold text-gray-900">Alimentos de consumo masivo</strong>, con marcas de
            arraigo en la familia, y la división{" "}
            <strong className="font-semibold text-gray-900">Produsal</strong>, el complejo salinero solar de Los
            Olivitos que abastece a la industria y al consumo nacional.
          </p>
        </div>

        {/* Highlights Bar */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 sm:gap-4 pt-2">
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#009539] block">Marcas</span>
            <span className="text-[11px] text-gray-500 font-medium leading-tight block mt-0.5">
              Consumo Masivo
            </span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#02afab] block">+40.000 Ha</span>
            <span className="text-[11px] text-gray-500 font-medium leading-tight block mt-0.5">
              Parque Salinero Solar
            </span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#1a3c6a] block">100% Solar</span>
            <span className="text-[11px] text-gray-500 font-medium leading-tight block mt-0.5">
              Proceso Natural y Ecológico
            </span>
          </div>
          <div className="p-3.5 sm:p-4 rounded-2xl bg-white/80 backdrop-blur-md border border-slate-200/80 shadow-xs">
            <span className="text-xl sm:text-2xl font-black text-[#009539] block">Nacional</span>
            <span className="text-[11px] text-gray-500 font-medium leading-tight block mt-0.5">
              Distribución en todo el país
            </span>
          </div>
        </div>

        {/* Interactive Segmented Category Filter Switcher */}
        <div className="pt-4">
          <div className="inline-flex items-center p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/90 backdrop-blur-md shadow-inner gap-1 flex-wrap">
            <button
              type="button"
              onClick={() => onSelectCategory("all")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === "all"
                  ? "bg-[#1a3c6a] text-white shadow-md shadow-[#1a3c6a]/20 scale-[1.02]"
                  : "text-slate-600 hover:text-[#1a3c6a] hover:bg-white/60"
              }`}
            >
              <Layers className="w-4 h-4" />
              <span>Todos los Negocios</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  activeCategory === "all" ? "bg-white/20 text-white" : "bg-slate-200/80 text-slate-600"
                }`}
              >
                2
              </span>
            </button>

            <button
              type="button"
              onClick={() => onSelectCategory("alimentos")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === "alimentos"
                  ? "bg-[#009539] text-white shadow-md shadow-[#009539]/20 scale-[1.02]"
                  : "text-slate-600 hover:text-[#009539] hover:bg-white/60"
              }`}
            >
              <Utensils className="w-4 h-4" />
              <span>División Alimentos</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  activeCategory === "alimentos" ? "bg-white/20 text-white" : "bg-[#009539]/10 text-[#009539]"
                }`}
              >
                Marcas
              </span>
            </button>

            <button
              type="button"
              onClick={() => onSelectCategory("produsal")}
              className={`inline-flex items-center gap-2 px-4 sm:px-5 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                activeCategory === "produsal"
                  ? "bg-[#02afab] text-white shadow-md shadow-[#02afab]/20 scale-[1.02]"
                  : "text-slate-600 hover:text-[#02afab] hover:bg-white/60"
              }`}
            >
              <Waves className="w-4 h-4" />
              <span>División Produsal</span>
              <span
                className={`text-[10px] px-1.5 py-0.5 rounded-md font-extrabold ${
                  activeCategory === "produsal" ? "bg-white/20 text-white" : "bg-[#02afab]/10 text-[#02afab]"
                }`}
              >
                Sal Solar
              </span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
