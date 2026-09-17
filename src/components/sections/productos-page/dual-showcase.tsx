"use client";

import React from "react";
import Image from "next/image";
import { ArrowRight, Utensils, Waves, CheckCircle2, Sparkles } from "lucide-react";
import { CategoryFilter } from "./productos-hero";

interface DualShowcaseProps {
  onSelectCategory: (category: CategoryFilter) => void;
}

export function DualShowcase({ onSelectCategory }: DualShowcaseProps) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        
        {/* ========================================================
            CARD 1: DIVISIÓN ALIMENTOS (Cálido, Hogareño, Nutrición)
           ======================================================== */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white via-white to-[#f4faf6] border border-slate-200/90 p-6 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#009539]/30 transition-all duration-300 group overflow-hidden">
          {/* Top Brand Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#009539] via-[#94c11e] to-[#02afab]" />

          <div className="space-y-6 relative z-10">
            {/* Header & Badges */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#009539]/10 text-[#009539]">
                <Utensils className="w-3.5 h-3.5" />
                <span>01 • Consumo Masivo</span>
              </span>
              <span className="text-xs font-bold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-full">
                7 Marcas Líderes
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-[#1a3c6a] tracking-tight group-hover:text-[#009539] transition-colors">
                División Alimentos
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Productos básicos de alta calidad que acompañan las comidas diarias de millones de familias venezolanas: harinas puras, pastas de sémola durum, aceites vegetales, grasas tradicionales y endulzantes naturales.
              </p>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-150">
              <Image
                src="/images/alimentos-showcase.webp"
                alt="Marcas de alimentos Grupo Mimesa en la cocina"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  BlancaFlor • Ronco • Fiorentina • Vatel • Purilev • Los 3 Cochinitos • truvía
                </p>
              </div>
            </div>

            {/* Category Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Harinas de Trigo
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Pastas Premium
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Aceites Puros
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Grasas Tradicionales
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Endulzante Natural
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 relative z-10">
            <button
              type="button"
              onClick={() => onSelectCategory("alimentos")}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#009539] hover:bg-[#007a3d] text-white font-bold text-sm shadow-lg shadow-[#009539]/20 hover:shadow-xl transition-all duration-300 group/btn cursor-pointer"
            >
              <span>Ver portafolio de alimentos</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

        {/* ========================================================
            CARD 2: DIVISIÓN PRODUSAL (Sal Marina, Solar, Industrial)
           ======================================================== */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-gradient-to-b from-white via-white to-[#f0faf9] border border-slate-200/90 p-6 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#02afab]/30 transition-all duration-300 group overflow-hidden">
          {/* Top Brand Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-[#02afab] via-[#30deda] to-[#1a3c6a]" />

          <div className="space-y-6 relative z-10">
            {/* Header & Badges */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#02afab]/10 text-[#02afab]">
                <Waves className="w-3.5 h-3.5" />
                <span>02 • Sal Solar & Industria</span>
              </span>
              <span className="text-xs font-bold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-full">
                Los Olivitos, Zulia
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-[#1a3c6a] tracking-tight group-hover:text-[#02afab] transition-colors">
                Complejo Salinero Produsal
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                El mayor parque salinero solar sostenible de Venezuela. Mediante la fuerza natural del sol y los vientos alisios del Caribe, producimos sal marina de extrema pureza para la mesa familiar, la industria química y la nutrición animal.
              </p>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-150">
              <Image
                src="/images/produsal-salinas.webp"
                alt="Parque Salinero Los Olivitos de Produsal"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/80 via-transparent to-transparent flex items-end p-4 sm:p-5">
                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  +40.000 Ha de evaporación solar natural • Pureza &gt;99.5%
                </p>
              </div>
            </div>

            {/* Category Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-teal-50 text-[#02afab] border border-[#02afab]/20">
                Sal Fina de Mesa
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-teal-50 text-[#02afab] border border-[#02afab]/20">
                Sal Marina Parrillera
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-teal-50 text-[#02afab] border border-[#02afab]/20">
                Grado Industrial & Químico
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-teal-50 text-[#02afab] border border-[#02afab]/20">
                Nutrición y Ganadería
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 relative z-10">
            <button
              type="button"
              onClick={() => onSelectCategory("produsal")}
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#02afab] hover:bg-[#009539] text-white font-bold text-sm shadow-lg shadow-[#02afab]/20 hover:shadow-xl transition-all duration-300 group/btn cursor-pointer"
            >
              <span>Ver complejo y aplicaciones</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </button>
          </div>
        </div>

      </div>
    </section>
  );
}
