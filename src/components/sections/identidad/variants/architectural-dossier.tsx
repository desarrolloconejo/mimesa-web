"use client";

import React from "react";
import Image from "next/image";
import {
  ArrowDownRight,
  ShieldCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
  Home,
} from "lucide-react";
import { IDENTIDAD_DATA } from "../identidad-data";
import { MimesaSprout } from "@/components/ui/organic-shapes";

const valueIcons = [
  ShieldCheck,
  Zap,
  HeartHandshake,
  CheckCircle2,
];

export function ArchitecturalDossier() {
  const { proposito, valores, negocio, ofertaValor, filosofia } = IDENTIDAD_DATA;

  return (
    <div className="space-y-16">
      
      {/* ========================================================
          1. DOSSIER HEADER: Precision Swiss Grid
         ======================================================== */}
      <div className="border border-gray-200 rounded-3xl bg-white overflow-hidden shadow-sm">
        
        {/* Top Meta Bar */}
        <div className="px-6 py-3 border-b border-gray-100 bg-gray-50/70 flex flex-wrap items-center justify-between gap-4 text-xs font-mono text-gray-500">
          <div className="flex items-center gap-2">
            <span className="w-2 h-2 rounded-full bg-[#009539]" />
            <span className="font-bold text-[#183c6b]">GRUPO MIMESA // IDENTIDAD CORPORATIVA</span>
          </div>
          <span className="text-[11px]">[REF: 1978-2024 / PROPÓSITO & VALORES]</span>
        </div>

        {/* Purpose Manifesto Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 divide-y lg:divide-y-0 lg:divide-x divide-gray-100">
          
          {/* Left: Giant Typography (7 cols) */}
          <div className="lg:col-span-7 p-8 sm:p-12 space-y-6 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-mono font-bold uppercase tracking-widest text-[#02aeaa]">
                // {proposito.kicker}
              </span>

              <h2 className="text-4xl sm:text-6xl font-black text-[#183c6b] tracking-tight leading-[1.06]">
                {proposito.titleLine1} <br />
                <span className="text-[#009539]">
                  {proposito.titleLine2}
                </span>
              </h2>

              <p className="text-base text-gray-600 font-light leading-relaxed pt-2">
                {proposito.description}
              </p>
            </div>

            <div className="pt-6 border-t border-gray-100 flex flex-wrap items-center justify-between gap-4 text-xs">
              <div className="space-y-0.5">
                <span className="font-bold text-[#183c6b] block">{negocio.badge}:</span>
                <span className="text-gray-500 font-light">{negocio.headline}</span>
              </div>
              <a
                href="#inicio"
                className="inline-flex items-center gap-1.5 font-bold text-[#02aeaa] hover:underline"
              >
                <Home className="w-3.5 h-3.5" />
                <span>Volver al inicio</span>
              </a>
            </div>
          </div>

          {/* Right: Technical Visual Framing (5 cols) */}
          <div className="lg:col-span-5 p-6 sm:p-8 bg-gray-50/40 flex flex-col justify-between space-y-6">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200">
              <Image
                src="/images/planta-la-encrucijada.webp"
                alt="Planta agroindustrial Mimesa"
                fill
                className="object-cover"
              />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[10px] font-mono text-[#183c6b] font-bold">
                [VENEZUELA // AGROALIMENTOS]
              </div>
            </div>

            <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
              <span className="text-[10px] font-mono uppercase text-[#009539] font-bold">
                {negocio.uniqueBadge}
              </span>
              <p className="text-xs font-bold text-[#183c6b]">
                {negocio.uniqueText}
              </p>
            </div>
          </div>

        </div>

      </div>

      {/* ========================================================
          2. VALUES MATRIX: 4-Quadrant Technical Grid
         ======================================================== */}
      <div className="border border-gray-200 rounded-3xl bg-white overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/70 flex items-center justify-between">
          <h3 className="text-sm font-mono font-bold uppercase text-[#183c6b]">
            // MATRIZ DE PRINCIPIOS Y VALORES
          </h3>
          <span className="text-xs font-mono text-gray-400">4 EJES INMUTABLES</span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100 border-b border-gray-100">
          {valores.slice(0, 2).map((val, idx) => {
            const Icon = valueIcons[idx];
            return (
              <div key={val.id} className="p-8 sm:p-10 space-y-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#02aeaa]">
                    [VALOR {val.number}]
                  </span>
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="text-2xl font-black text-[#183c6b]">
                  {val.title}
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 divide-y md:divide-y-0 md:divide-x divide-gray-100">
          {valores.slice(2, 4).map((val, idx) => {
            const Icon = valueIcons[idx + 2];
            return (
              <div key={val.id} className="p-8 sm:p-10 space-y-4 hover:bg-gray-50/50 transition-colors">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-mono font-bold text-[#009539]">
                    [VALOR {val.number}]
                  </span>
                  <Icon className="w-5 h-5 text-gray-400" />
                </div>
                <h4 className="text-2xl font-black text-[#183c6b]">
                  {val.title}
                </h4>
                <p className="text-sm text-gray-600 font-light leading-relaxed">
                  {val.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. VALUE PROPOSITION: Tabular Dossier
         ======================================================== */}
      <div className="border border-gray-200 rounded-3xl bg-white overflow-hidden shadow-sm">
        <div className="px-6 py-4 border-b border-gray-100 bg-gray-50/70">
          <span className="text-xs font-mono font-bold uppercase text-[#183c6b]">
            // {ofertaValor.title}
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-gray-100">
          {ofertaValor.pilares.map((pilar) => (
            <div key={pilar.id} className="p-6 sm:p-7 space-y-2 hover:bg-gray-50/50 transition-colors">
              <span className="text-xs font-mono font-bold text-gray-400 block">
                P-0{pilar.num}
              </span>
              <h5 className="text-base font-black text-[#183c6b]">
                {pilar.title}
              </h5>
              <p className="text-xs text-gray-500 font-light leading-relaxed">
                {pilar.subtitle}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* ========================================================
          4. PHILOSOPHY MANIFESTO: Clean Editorial Reading
         ======================================================== */}
      <div className="border border-gray-200 rounded-3xl bg-white p-8 sm:p-12 overflow-hidden shadow-sm">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-2xl overflow-hidden aspect-[4/3] border border-gray-200">
              <Image
                src="/images/linea-embotellado-krones.webp"
                alt="Tecnología y talento humano Grupo Mimesa"
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            </div>
            <span className="block text-[11px] font-mono text-gray-400 mt-2">
              [FIG 1.2: TALENTO HUMANO Y ÉTICA PRODUCTIVA]
            </span>
          </div>

          <div className="lg:col-span-7 space-y-4">
            <span className="text-xs font-mono font-bold uppercase text-[#009539]">
              // {filosofia.badge}
            </span>
            <h4 className="text-2xl sm:text-3xl font-black text-[#183c6b]">
              {filosofia.title}
            </h4>
            <div className="space-y-3 text-sm text-gray-600 font-light leading-relaxed">
              <p>{filosofia.paragraph1}</p>
              <p className="p-4 bg-gray-50 border border-gray-100 rounded-xl text-gray-800 font-normal">
                {filosofia.paragraph2}
              </p>
            </div>
          </div>

        </div>
      </div>

    </div>
  );
}
