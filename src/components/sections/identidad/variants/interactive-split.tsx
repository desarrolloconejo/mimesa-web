"use client";

import React, { useState } from "react";
import Image from "next/image";
import {
  ShieldCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
  ChevronRight,
  Home,
} from "lucide-react";
import { IDENTIDAD_DATA } from "../identidad-data";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";

const valueIcons = [
  ShieldCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
];

export function InteractiveSplit() {
  const { proposito, valores, negocio, ofertaValor, filosofia } = IDENTIDAD_DATA;
  const [activeValueIndex, setActiveValueIndex] = useState<number>(0);

  return (
    <div className="space-y-24">
      
      {/* ========================================================
          1. SPLIT STAGE: Propósito & Cinematographic Organic Visual
         ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left (6 cols): Purpose Narrative */}
        <div className="lg:col-span-6 space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
            {proposito.kicker}
          </span>

          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#183c6b] tracking-tight leading-[1.08]">
            {proposito.titleLine1}{" "}
            <span className="text-[#009539]">
              {proposito.titleLine2}
            </span>
          </h2>

          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
            {proposito.description}
          </p>

          <div className="p-5 rounded-2xl bg-white border border-gray-100 shadow-sm flex items-center justify-between gap-4">
            <div className="space-y-1">
              <span className="text-xs font-bold text-[#009539] uppercase tracking-wider">
                {negocio.badge}
              </span>
              <p className="text-xs sm:text-sm text-gray-700 font-medium">
                {negocio.headline}
              </p>
            </div>
            <div className="p-2.5 rounded-xl bg-gray-50 shrink-0">
              <MimesaSprout size={28} />
            </div>
          </div>
        </div>

        {/* Right (6 cols): Organic Framed Window */}
        <div className="lg:col-span-6 relative">
          <div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white aspect-[16/11]">
            <Image
              src="/images/planta-la-encrucijada.webp"
              alt="Propósito y legado Grupo Mimesa"
              fill
              className="object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183c6b]/90 via-[#183c6b]/20 to-transparent" />

            {/* Overlaid Floating Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 rounded-2xl bg-white/95 backdrop-blur-md shadow-xl border border-white/40 text-[#183c6b]">
              <span className="text-[10px] font-black uppercase tracking-wider text-[#02aeaa]">
                {negocio.uniqueBadge}
              </span>
              <p className="text-sm font-bold mt-1 text-[#183c6b]">
                {negocio.uniqueText}
              </p>
            </div>
          </div>

          <div className="absolute -top-6 -left-6 pointer-events-none hidden sm:block">
            <MimesaLeafGreen size={85} opacity={0.8} />
          </div>
        </div>

      </div>

      {/* ========================================================
          2. LIVING VALUES CANVAS: Interactive Tabs / Accordion
         ======================================================== */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div>
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
              Cultura Viva
            </span>
            <h3 className="text-3xl sm:text-4xl font-black text-[#183c6b]">
              Nuestros Valores
            </h3>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 max-w-sm">
            Toca cada valor para descubrir cómo lo llevamos a la práctica en nuestro día a día.
          </p>
        </div>

        {/* 4 Interactive Vertical / Horizontal Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4">
          {valores.map((val, idx) => {
            const isSelected = activeValueIndex === idx;
            const Icon = valueIcons[idx];

            return (
              <div
                key={val.id}
                onClick={() => setActiveValueIndex(idx)}
                className={`relative rounded-3xl p-6 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between border ${
                  isSelected
                    ? "bg-white shadow-2xl border-[#02aeaa] ring-2 ring-[#02aeaa]/20 -translate-y-1"
                    : "bg-white/70 hover:bg-white border-gray-100 hover:shadow-md"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono font-bold text-gray-400">
                      /{val.number}
                    </span>
                    <div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center transition-colors ${
                        isSelected
                          ? "bg-[#02aeaa] text-white"
                          : "bg-gray-100 text-gray-500"
                      }`}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h4 className="text-xl font-black text-[#183c6b] mb-2">
                    {val.title}
                  </h4>

                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {val.description}
                  </p>
                </div>

                <div className="pt-6 mt-6 border-t border-gray-100 flex items-center justify-between">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#02aeaa]">
                    {val.shortTag}
                  </span>
                  <ChevronRight
                    className={`w-4 h-4 transition-transform ${
                      isSelected ? "text-[#02aeaa] translate-x-1" : "text-gray-300"
                    }`}
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. HIGH-CONTRAST CAPSULE: Oferta de Valor
         ======================================================== */}
      <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-[#0a182b] via-[#122c4f] to-[#183c6b] text-white p-8 sm:p-12 shadow-2xl">
        <div className="absolute top-0 right-0 w-96 h-96 bg-[#02aeaa]/15 rounded-full blur-3xl pointer-events-none" />
        
        <div className="relative z-10 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-widest text-[#30deda]">
              Diferencial Competitivo
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-white">
              {ofertaValor.title}
            </h3>
            <p className="text-xs sm:text-sm text-gray-300 font-light">
              Cuatro pilares innegociables que sustentan nuestra reputación en el mercado agroindustrial.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {ofertaValor.pilares.map((pilar) => (
              <div
                key={pilar.id}
                className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:border-[#02aeaa]/50 hover:bg-white/10 transition-all duration-300"
              >
                <span className="text-xs font-mono text-[#30deda] block mb-2 font-bold">
                  {pilar.num} //
                </span>
                <h4 className="text-base font-bold text-white mb-1">
                  {pilar.title}
                </h4>
                <p className="text-xs text-gray-300 font-light">
                  {pilar.subtitle}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ========================================================
          4. NUESTRA FILOSOFÍA: Open Manifesto & Callout
         ======================================================== */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
        
        {/* Left: Documentary Image (5 cols) */}
        <div className="lg:col-span-5 relative">
          <div className="relative rounded-3xl overflow-hidden shadow-xl border-4 border-white aspect-[4/3]">
            <Image
              src="/images/linea-embotellado-krones.webp"
              alt="Filosofía y personas de Grupo Mimesa"
              fill
              className="object-cover"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 pointer-events-none hidden sm:block">
            <MimesaLeafLime size={80} opacity={0.9} />
          </div>
        </div>

        {/* Right: Narrative (7 cols) */}
        <div className="lg:col-span-7 space-y-5">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
            {filosofia.badge}
          </span>

          <h3 className="text-2xl sm:text-4xl font-black text-[#183c6b]">
            {filosofia.title}
          </h3>

          <div className="space-y-3.5 text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            <p>{filosofia.paragraph1}</p>
            <p className="text-gray-800 font-normal border-l-2 border-[#02aeaa] pl-4 italic">
              {filosofia.paragraph2}
            </p>
          </div>

          <div className="pt-3">
            <a
              href="#inicio"
              className="inline-flex items-center gap-2 text-xs font-bold text-[#183c6b] hover:text-[#02aeaa] transition-colors"
            >
              <Home className="w-4 h-4 text-[#02aeaa]" />
              <span>Volver al inicio (grupomimesa.com)</span>
            </a>
          </div>
        </div>

      </div>

    </div>
  );
}
