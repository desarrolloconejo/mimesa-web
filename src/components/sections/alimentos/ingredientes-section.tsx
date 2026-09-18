"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Wheat,
  Droplet,
  Sparkles,
  Layers,
  CheckCircle2,
  ArrowRight,
  ShieldCheck,
  ChevronDown,
  Building2,
  FileSpreadsheet,
} from "lucide-react";
import { INGREDIENTES_DATA, IngredientItem } from "./alimentos-data";

const CATEGORIES = [
  { id: "todas", label: "Todas las Soluciones", icon: Layers },
  { id: "harinas", label: "Harinas & Premezclas", icon: Wheat },
  { id: "aceites", label: "Aceites Profesionales", icon: Droplet },
  { id: "grasas", label: "Grasas & Mantecas", icon: Sparkles },
  { id: "endulzantes", label: "Endulzantes Industriales", icon: Sparkles },
];

export function IngredientesSection() {
  const [selectedCat, setSelectedCat] = useState<string>("todas");
  const [expandedId, setExpandedId] = useState<string | null>(null);

  const filteredItems =
    selectedCat === "todas"
      ? INGREDIENTES_DATA
      : INGREDIENTES_DATA.filter((item) => item.category === selectedCat);

  const handleCategoryChange = (catId: string) => {
    const currentY = window.scrollY;
    setSelectedCat(catId);
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentY, behavior: "instant" });
    });
  };

  return (
    <section
      id="ingredientes"
      className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-[#f4f8fb] to-white border-t border-slate-200/80 scroll-mt-24 z-10"
    >
      <div className="max-w-7xl mx-auto space-y-12 sm:space-y-16">
        {/* Encabezado Editorial de la Sección */}
        <div className="max-w-4xl space-y-4 text-left">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#1a3c6a]/10 text-[#1a3c6a] text-xs font-black uppercase tracking-widest">
            <Building2 className="w-3.5 h-3.5 text-[#02afab]" />
            <span>Línea Industrial & Panadería</span>
          </div>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight leading-tight">
            <span className="block">Ingredientes y Soluciones</span>
            <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
              para la Industria y Panadería
            </span>
          </h2>

          <p className="text-base sm:text-lg text-slate-600 font-light leading-relaxed pt-1">
            Abastecemos con materias primas de alto rendimiento y rigurosa inocuidad a panaderías artesanales, obradores industriales, pastelerías, restaurantes y plantas de manufactura alimentaria en todo el país.
          </p>
        </div>

        {/* Barra de Filtros por Categoría de Ingrediente */}
        <div className="flex flex-wrap gap-2 sm:gap-3 p-1.5 rounded-2xl bg-slate-100/80 border border-slate-200/70 w-fit">
          {CATEGORIES.map((cat) => {
            const Icon = cat.icon;
            const isActive = selectedCat === cat.id;

            return (
              <button
                key={cat.id}
                type="button"
                onClick={() => handleCategoryChange(cat.id)}
                className={`flex items-center gap-2 px-4 py-2.5 rounded-xl text-xs sm:text-sm font-bold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-[#1a3c6a] text-white shadow-md shadow-[#1a3c6a]/20 scale-[1.02]"
                    : "text-slate-600 hover:text-[#1a3c6a] hover:bg-white/60"
                }`}
              >
                <Icon className={`w-4 h-4 ${isActive ? "text-[#02afab]" : "text-slate-400"}`} />
                <span>{cat.label}</span>
              </button>
            );
          })}
        </div>

        {/* Grid de Tarjetas Técnicas de Ingredientes con min-height estable para prevenir salto de scroll */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-10 min-h-[420px]">
          {filteredItems.map((item) => {
            const isExpanded = expandedId === item.id;
            const mainPresentation = item.presentations?.[0] || "Formato Industrial";

            return (
              <div
                key={item.id}
                className="rounded-[2.5rem] bg-white border border-slate-200/90 p-6 sm:p-8 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between h-full space-y-6 group"
              >
                {/* Bloque Superior de la Tarjeta */}
                <div className="space-y-5">
                  {/* Títulos y Categoría */}
                  <div className="flex items-start justify-between gap-4">
                    <div className="space-y-1">
                      <span className="text-[10px] font-black uppercase tracking-wider text-[#02afab] block">
                        {item.categoryLabel}
                      </span>
                      <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                        {item.name}
                      </h3>
                      <p className="text-xs font-semibold text-slate-500 pt-0.5 line-clamp-1">
                        {item.tagline}
                      </p>
                    </div>

                    {item.badge && (
                      <span className="px-3 py-1 rounded-xl text-[10px] font-extrabold uppercase tracking-wider bg-slate-100 text-slate-700 border border-slate-200/80 shrink-0">
                        {item.badge}
                      </span>
                    )}
                  </div>

                  {/* Stage Unificado de Producto y Logo sobre Fondo Blanco Puro */}
                  <div className="bg-white rounded-2xl p-5 border border-slate-200/80 shadow-2xs relative flex flex-col sm:flex-row items-center justify-between gap-5 h-56 sm:h-60 overflow-hidden group/stage">
                    {/* Badge Flotante de Presentación */}
                    <div className="absolute top-3 right-3 z-10">
                      <span className="px-2.5 py-1 rounded-lg text-[10px] font-bold bg-slate-100/95 text-slate-600 border border-slate-200/70 shadow-2xs backdrop-blur-xs">
                        {mainPresentation}
                      </span>
                    </div>

                    {/* Contenedor del Logo Oficial con Fondito Blanco Impecable y Mayor Espacio */}
                    <div className="flex items-center justify-center p-3.5 bg-white rounded-2xl border border-slate-200/90 h-16 sm:h-20 w-40 sm:w-48 relative overflow-hidden shadow-xs shrink-0 self-start sm:self-center">
                      {item.logoUrl ? (
                        <div className="relative w-full h-full">
                          <Image
                            src={item.logoUrl}
                            alt={`Logo oficial ${item.name}`}
                            fill
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <span className="text-sm font-black text-[#1a3c6a] tracking-tight truncate">
                          {item.name}
                        </span>
                      )}
                    </div>

                    {/* Packshot Industrial Normalizado en Altura (Mayor Presencia Visual) */}
                    <div className="flex-1 flex items-center justify-center h-full w-full relative">
                      {item.productImageUrl ? (
                        <div className="relative h-full w-full flex items-center justify-center group-hover/stage:scale-105 transition-transform duration-300">
                          <Image
                            src={item.productImageUrl}
                            alt={`Presentación industrial ${item.name}`}
                            width={300}
                            height={340}
                            className="max-h-48 sm:max-h-52 w-auto max-w-[190px] sm:max-w-[210px] object-contain drop-shadow-md"
                          />
                        </div>
                      ) : (
                        <div className="text-center text-xs text-slate-400 font-medium">
                          Suministro en sacos y granel
                        </div>
                      )}
                    </div>
                  </div>

                  {/* Descripción Técnica con Altura Homogénea */}
                  <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed min-h-[38px] line-clamp-2">
                    {item.description}
                  </p>

                  {/* Cualidades y Desempeño en 2 Filas Limpias */}
                  {((item.attributes && item.attributes.length > 0) ||
                    (item.benefits && item.benefits.length > 0)) && (
                    <div className="space-y-2 pt-1 border-t border-slate-100">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Cualidades & Desempeño
                      </span>
                      <div className="space-y-1.5">
                        {item.attributes?.slice(0, 1).map((attr) => (
                          <div key={attr} className="flex items-start gap-2 text-xs text-slate-700">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#009539] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{attr}</span>
                          </div>
                        ))}
                        {item.benefits?.slice(0, 1).map((ben) => (
                          <div key={ben} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                            <CheckCircle2 className="w-3.5 h-3.5 text-[#02afab] shrink-0 mt-0.5" />
                            <span className="line-clamp-1">{ben}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* Aplicaciones Recomendadas */}
                  {(item.applicationsSaladas || item.applicationsGeneral) && (
                    <div className="space-y-1.5 pt-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-400 block">
                        Aplicaciones Recomendadas
                      </span>
                      <div className="flex flex-wrap gap-1.5 min-h-[26px]">
                        {(item.applicationsSaladas || item.applicationsGeneral)
                          ?.slice(0, 3)
                          .map((app) => (
                            <span
                              key={app}
                              className="text-[10px] font-medium px-2.5 py-0.5 rounded-lg bg-slate-100/90 text-slate-700 border border-slate-200/60"
                            >
                              {app}
                            </span>
                          ))}
                      </div>
                    </div>
                  )}

                  {/* Acordeón de Variantes / Premezclas */}
                  {item.variants && item.variants.length > 0 && (
                    <div className="pt-1">
                      <button
                        type="button"
                        onClick={() => setExpandedId(isExpanded ? null : item.id)}
                        className="w-full flex items-center justify-between px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200/80 text-xs font-bold text-[#1a3c6a] hover:bg-slate-100/80 transition-colors cursor-pointer"
                      >
                        <span>Ver Variedades & Premezclas ({item.variants.length})</span>
                        <ChevronDown
                          className={`w-4 h-4 text-[#02afab] transition-transform duration-200 ${
                            isExpanded ? "rotate-180" : ""
                          }`}
                        />
                      </button>

                      {isExpanded && (
                        <div className="mt-2.5 space-y-3 p-3.5 rounded-xl bg-slate-50/90 border border-slate-200/70 animate-fade-in text-xs">
                          {item.variants.map((v) => (
                            <div key={v.name} className="space-y-1 pb-2 border-b border-slate-200/60 last:border-0 last:pb-0">
                              <h4 className="font-bold text-[#1a3c6a] text-xs">
                                {v.name}
                              </h4>
                              <p className="text-slate-600 text-[11px] leading-relaxed">
                                {v.description}
                              </p>
                              {v.applications && (
                                <div className="flex flex-wrap gap-1 pt-0.5">
                                  {v.applications.slice(0, 3).map((app) => (
                                    <span
                                      key={app}
                                      className="text-[9px] px-1.5 py-0.5 rounded bg-white text-slate-600 border border-slate-200"
                                    >
                                      {app}
                                    </span>
                                  ))}
                                </div>
                              )}
                            </div>
                          ))}
                        </div>
                      )}
                    </div>
                  )}
                </div>

                {/* Pie de Tarjeta Fijado al Final */}
                <div className="mt-auto pt-4 border-t border-slate-100 flex items-center justify-between gap-3 text-xs text-slate-500">
                  <div className="flex items-center gap-2 font-medium">
                    <ShieldCheck className="w-4 h-4 text-[#009539]" />
                    <span>Inocuidad y Calidad Garantizada</span>
                  </div>
                  <span className="text-[11px] font-semibold text-slate-400">Grupo Mimesa</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
