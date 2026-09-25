"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  CheckCircle2,
  Package,
  Sparkles,
  ArrowRight,
} from "lucide-react";
import {
  INGREDIENTES_CATALOG,
  IngredienteBrand,
} from "./ingredientes-data";

export function IngredientesCatalogView() {
  const [selectedPacks, setSelectedPacks] = useState<Record<string, number>>({});

  return (
    <div className="space-y-12 sm:space-y-16">
      {/* ========================================================
          ENCABEZADO DE SECCIÓN EDITORIAL & CONTEXTO INDUSTRIAL
         ======================================================== */}
      <div className="max-w-4xl space-y-4 text-left">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
          División Agroindustrial • Soluciones Industriales
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
          Ingredientes de alto rendimiento para la industria
        </h2>
        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
          Suministramos materias primas esenciales, grasas especializadas y harinas de trigo de fuerza profesional a panaderías, obradores, plantas de alimentos y cadenas gastronómicas en toda Venezuela.
        </p>
      </div>

      {/* ========================================================
          LISTADO EDITORIAL SECUENCIAL DE MARCAS DE INGREDIENTES
         ======================================================== */}
      <div className="space-y-16 sm:space-y-24">
        {INGREDIENTES_CATALOG.map((brand, index) => {
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
                      {brand.badge}
                    </span>
                  </div>

                  {/* Packshot Real Industrial Central */}
                  <div className="relative z-10 my-4 h-64 sm:h-72 w-full flex items-center justify-center">
                    <div
                      className="absolute w-48 h-48 rounded-full blur-2xl opacity-15 pointer-events-none"
                      style={{ backgroundColor: brand.color }}
                    />

                    {currentPackshot ? (
                      <div
                        key={currentPackshot}
                        className="animate-brand-card relative flex items-center justify-center group-hover/card:scale-105 transition-transform duration-500"
                      >
                        <Image
                          src={currentPackshot}
                          alt={`Empaque industrial ${brand.name}`}
                          width={400}
                          height={400}
                          unoptimized
                          className="object-contain max-h-60 sm:max-h-68 max-w-[260px] sm:max-w-[280px] w-auto h-auto drop-shadow-xl"
                        />
                      </div>
                    ) : (
                      <div className="text-center space-y-1">
                        <div
                          className="text-4xl sm:text-5xl font-black tracking-tight"
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

                  {/* Selector interactivo de Formatos Industriales si la marca tiene múltiples */}
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
                              ? "bg-[#183c6b] text-white border-[#183c6b] shadow-xs"
                              : "bg-white/80 hover:bg-white text-slate-600 border-slate-200"
                          }`}
                        >
                          {pack.label}
                        </button>
                      ))}
                    </div>
                  )}

                  {/* Logo Corporativo Institucional */}
                  {brand.logoUrl && (
                    <div className="mt-2 h-10 w-32 relative flex items-center justify-center grayscale group-hover/card:grayscale-0 transition-all duration-300">
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
                    COLUMNA DE CONTENIDO TÉCNICO Y COMERCIAL (7 Cols)
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

                  {/* Bloque: Presentaciones Industriales */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      <Package className="w-3.5 h-3.5" style={{ color: brand.color }} />
                      <span>Formatos & Presentaciones Industriales</span>
                    </div>
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

                  {/* Bloque: Atributos Técnicos Diferenciales */}
                  <div className="space-y-2 pt-1">
                    <div className="flex items-center gap-1.5 text-xs font-extrabold uppercase tracking-wider text-slate-500">
                      <Sparkles className="w-3.5 h-3.5" style={{ color: brand.color }} />
                      <span>Rendimiento y ventajas de proceso</span>
                    </div>
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

                  {/* Bloque: Aplicaciones Industriales */}
                  <div className="p-4 rounded-2xl bg-white/90 border border-slate-200/80 space-y-1">
                    <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block">
                      Aplicación y destino industrial:
                    </span>
                    <p className="text-xs sm:text-sm text-slate-700 leading-relaxed font-medium">
                      {brand.industrialUses}
                    </p>
                  </div>

                  {/* CTA Comercial: Contacto Industrial */}
                  <div className="pt-2">
                    <Link
                      href="/contacto?asunto=cotizacion-ingredientes"
                      className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl font-bold text-xs sm:text-sm text-white shadow-md transition-all duration-200 hover:scale-[1.02] cursor-pointer"
                      style={{ backgroundColor: brand.color }}
                    >
                      <span>Solicitar cotización industrial</span>
                      <ArrowRight className="w-4 h-4" />
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
