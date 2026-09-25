"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Utensils, Building2, ShoppingBag } from "lucide-react";

interface DualShowcaseProps {
  onSelectCategory?: (category: any) => void;
}

export function DualShowcase({ onSelectCategory }: DualShowcaseProps = {}) {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16 sm:pb-24">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* ========================================================
            CARD 1: CONSUMO MASIVO (Marcas de Hogar & Nutrición)
           ======================================================== */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-200/90 p-6 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#009539]/30 transition-all duration-300 group overflow-hidden">
          {/* Top Brand Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#009539]" />

          <div className="space-y-6 relative z-10">
            {/* Header & Badges */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#009539]/10 text-[#009539]">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>Consumo Masivo</span>
              </span>
              <span className="text-xs font-bold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-full">
                6 Marcas Líderes
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-[#183c6b] tracking-tight group-hover:text-[#009539] transition-colors">
                Consumo Masivo
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Productos básicos de alta calidad que acompañan las comidas diarias de millones de familias venezolanas: aceites 100% puros, pastas de sémola durum, harinas finas, mantecas tradicionales y endulzantes naturales.
              </p>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-150">
              <Image
                src="/images/mimesa-pabellon-expo.webp"
                alt="Pabellón de marcas de consumo masivo Grupo Mimesa"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/85 via-[#0c223f]/30 to-transparent flex items-end p-4 sm:p-5">
                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  Vatel • Ronco • BlancaFlor • Fiorentina • Los 3 Cochinitos • truvía
                </p>
              </div>
            </div>

            {/* Category Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Aceites Vegetales
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Pastas Premium
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-emerald-50 text-[#009539] border border-[#009539]/20">
                Harinas de Trigo
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
            <Link
              href="/productos/consumo-masivo"
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#009539] hover:bg-[#007a3d] text-white font-bold text-sm shadow-lg shadow-[#009539]/20 hover:shadow-xl transition-all duration-300 group/btn cursor-pointer"
            >
              <span>Ver marcas de consumo masivo</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>

        {/* ========================================================
            CARD 2: INGREDIENTES INDUSTRIALES (Soluciones Industriales)
           ======================================================== */}
        <div className="relative rounded-[2rem] sm:rounded-[2.5rem] bg-white border border-slate-200/90 p-6 sm:p-10 flex flex-col justify-between shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:border-[#183c6b]/30 transition-all duration-300 group overflow-hidden">
          {/* Top Brand Stripe */}
          <div className="absolute top-0 left-0 right-0 h-1.5 bg-[#183c6b]" />

          <div className="space-y-6 relative z-10">
            {/* Header & Badges */}
            <div className="flex items-center justify-between gap-2 flex-wrap">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-extrabold uppercase tracking-wider bg-[#183c6b]/10 text-[#183c6b]">
                <Building2 className="w-3.5 h-3.5" />
                <span>Ingredientes Industriales</span>
              </span>
              <span className="text-xs font-bold text-gray-500 bg-slate-100 px-2.5 py-1 rounded-full">
                9 Soluciones Industriales
              </span>
            </div>

            {/* Title & Description */}
            <div className="space-y-2">
              <h2 className="text-2xl sm:text-4xl font-black text-[#183c6b] tracking-tight group-hover:text-[#02aeaa] transition-colors">
                Ingredientes & Agroindustria
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Materias primas e insumos técnicos para panaderías, obradores, plantas de alimentos y cadenas de comida rápida: mantecas de alto rendimiento, harinas panaderas y aceites de fritura continua.
              </p>
            </div>

            {/* Visual Image Banner */}
            <div className="relative h-48 sm:h-56 rounded-2xl overflow-hidden border border-slate-150">
              <Image
                src="/images/planta-la-encrucijada-ensacado.webp"
                alt="Línea automatizada de ensacado de harinas industriales Planta La Encrucijada"
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/85 via-[#0c223f]/30 to-transparent flex items-end p-4 sm:p-5">
                <p className="text-white text-xs sm:text-sm font-semibold drop-shadow-md">
                  Tresco • Vatel Pro • Rey del Norte • Gramoven • El Rey • Grano de Oro • Branca • Consul • truvía
                </p>
              </div>
            </div>

            {/* Category Tags Pills */}
            <div className="flex flex-wrap gap-2 pt-1">
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-[#183c6b] border border-[#183c6b]/20">
                Mantecas Panaderas
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-[#183c6b] border border-[#183c6b]/20">
                Fritura Especializada
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-[#183c6b] border border-[#183c6b]/20">
                Harinas Panificables
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-[#183c6b] border border-[#183c6b]/20">
                Sémolas Industriales
              </span>
              <span className="text-xs font-semibold px-3 py-1 rounded-lg bg-blue-50 text-[#183c6b] border border-[#183c6b]/20">
                Stevia Industrial
              </span>
            </div>
          </div>

          {/* Action Footer */}
          <div className="pt-8 relative z-10">
            <Link
              href="/productos/ingredientes"
              className="w-full inline-flex items-center justify-between px-6 py-3.5 rounded-xl bg-[#183c6b] hover:bg-[#0e2440] text-white font-bold text-sm shadow-lg shadow-[#183c6b]/20 hover:shadow-xl transition-all duration-300 group/btn cursor-pointer"
            >
              <span>Explorar ingredientes industriales</span>
              <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
