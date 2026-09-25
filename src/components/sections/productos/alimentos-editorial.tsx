"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Utensils, Sparkles, ShoppingBag, Wheat } from "lucide-react";
import { CONSUMO_MASIVO_BRANDS, INGREDIENTES_BRANDS } from "./productos-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaSprout } from "@/components/ui/organic-shapes";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";

type FilterTab = "consumo-masivo" | "ingredientes";

export function AlimentosEditorial() {
  const [activeFilter, setActiveFilter] = useState<FilterTab>("consumo-masivo");

  const currentBrands =
    activeFilter === "consumo-masivo" ? CONSUMO_MASIVO_BRANDS : INGREDIENTES_BRANDS;

  const catalogHref =
    activeFilter === "consumo-masivo" ? "/productos/consumo-masivo" : "/productos/ingredientes";

  const catalogText =
    activeFilter === "consumo-masivo"
      ? "Ver catálogo Consumo Masivo"
      : "Ver catálogo Ingredientes";

  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-12 relative">
      {/* Chapter Watermark (Subtle Background Decorative) */}
      <div className="absolute -top-10 right-10 pointer-events-none select-none z-0 overflow-hidden text-right hidden md:block">
        <ParallaxElement speed={-0.15} horizontalSpeed={-0.05}>
          <span className="text-[60px] sm:text-[90px] lg:text-[130px] font-black text-[#009539]/[0.03] uppercase tracking-tighter leading-none block">
            CONSUMO MASIVO
          </span>
        </ParallaxElement>
      </div>

      {/* Section Header - Clean without 01 prefix */}
      <FadeIn direction="up" delay={0.08} className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-6 border-b border-gray-100 relative z-10">
        <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
            División Consumo Masivo & Ingredientes
          </span>
          <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
            Nuestras Marcas de Consumo Masivo
          </h3>
          <p className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed">
            Una selección líder de marcas de consumo y soluciones de ingredientes que aportan sabor, nutrición y rendimiento en cada mesa e industria venezolana.
          </p>
        </div>

        <Link
          href={catalogHref}
          className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#183c6b]/5 hover:bg-[#183c6b] text-[#183c6b] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 w-fit group shadow-xs hover:-translate-y-0.5 cursor-pointer"
        >
          <span>{catalogText}</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </Link>
      </FadeIn>

      {/* Main Grid: Brands Logo Showcase (Left 7 cols) + Culinary Photo (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-start relative z-10">
        
        {/* Left: Brand Logo Showcase Cards with Filter Switcher */}
        <FadeIn direction="up" delay={0.08} className="lg:col-span-7 flex flex-col justify-between space-y-5 sm:space-y-6">
          
          {/* Filter Tabs Header */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 px-1">
            {/* Interactive Filter Pills */}
            <div className="inline-flex items-center p-1 rounded-2xl bg-slate-100 border border-slate-200/80 shadow-inner">
              <button
                type="button"
                onClick={() => setActiveFilter("consumo-masivo")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === "consumo-masivo"
                    ? "bg-[#183c6b] text-white shadow-md shadow-[#183c6b]/20"
                    : "text-slate-600 hover:text-[#183c6b] hover:bg-white/60"
                }`}
              >
                <ShoppingBag className="w-4 h-4" />
                <span>Consumo Masivo</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    activeFilter === "consumo-masivo"
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {CONSUMO_MASIVO_BRANDS.length}
                </span>
              </button>

              <button
                type="button"
                onClick={() => setActiveFilter("ingredientes")}
                className={`inline-flex items-center gap-2 px-4 py-2 rounded-xl text-xs sm:text-sm font-heading font-bold transition-all duration-300 cursor-pointer ${
                  activeFilter === "ingredientes"
                    ? "bg-[#009539] text-white shadow-md shadow-[#009539]/20"
                    : "text-slate-600 hover:text-[#009539] hover:bg-white/60"
                }`}
              >
                <Wheat className="w-4 h-4" />
                <span>Ingredientes</span>
                <span
                  className={`text-[10px] font-extrabold px-1.5 py-0.2 rounded-full ${
                    activeFilter === "ingredientes"
                      ? "bg-white/20 text-white"
                      : "bg-slate-200 text-slate-700"
                  }`}
                >
                  {INGREDIENTES_BRANDS.length}
                </span>
              </button>
            </div>

            {/* Status indicator */}
            <div className="flex items-center gap-2 text-xs text-gray-500">
              <span className="w-2 h-2 rounded-full bg-[#009539] shrink-0" />
              <span className="font-semibold text-gray-700">
                {activeFilter === "consumo-masivo" ? "Marcas Líderes de Consumo" : "Soluciones para Panadería & Alimentos"}
              </span>
            </div>
          </div>

          {/* Unified Brand Cards Grid with Tab-Change Entrance Animations */}
          <div
            key={activeFilter}
            className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4"
          >
            {currentBrands.map((brand, index) => {
              const isLastOnMobile = index === currentBrands.length - 1 && currentBrands.length % 2 !== 0;

              return (
                <div
                  key={`${activeFilter}-${brand.id}`}
                  style={{ animationDelay: `${index * 40}ms` }}
                  className={`animate-brand-card ${isLastOnMobile ? "col-span-2 sm:col-span-1" : ""}`}
                >
                  <Link
                    href={brand.href}
                    className="group relative p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#02aeaa] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden cursor-pointer h-full"
                  >
                    {/* Brand Logo Container: Fondo Blanco Puro, Limpio sin etiqueta en la esquina */}
                    <div
                      className="h-20 sm:h-28 w-full rounded-xl sm:rounded-2xl bg-white border border-slate-150/90 shadow-2xs flex flex-col items-center justify-center p-2.5 sm:p-3 relative overflow-hidden transition-all duration-300 group-hover:scale-[1.02] group-hover:border-[#02aeaa]/40"
                    >
                      {brand.logoUrl ? (
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                          <Image
                            src={brand.logoUrl}
                            alt={`Logo ${brand.name}`}
                            fill
                            loading="eager"
                            className="object-contain p-1"
                          />
                        </div>
                      ) : (
                        <div className="text-center select-none pt-2 sm:pt-3 max-w-[90%]">
                          <span
                            className="text-base sm:text-xl font-black tracking-tight leading-none block drop-shadow-xs truncate"
                            style={{ color: brand.logoColor }}
                          >
                            {brand.logoText}
                          </span>
                          {brand.logoSub && (
                            <span className="text-[10px] sm:text-[11px] font-medium text-gray-500 tracking-wide block mt-1 truncate">
                              {brand.logoSub}
                            </span>
                          )}
                        </div>
                      )}
                    </div>

                    {/* Brand Details */}
                    <div className="pt-2.5 sm:pt-3 space-y-1 flex-1 flex flex-col justify-between">
                      <div>
                        <div className="flex items-center justify-between gap-1">
                          <span className="text-xs sm:text-sm font-bold text-[#183c6b] group-hover:text-[#02aeaa] transition-colors truncate">
                            {brand.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#02aeaa] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-500 font-light line-clamp-2 leading-relaxed mt-0.5">
                          {brand.tagline}
                        </p>
                      </div>

                      {/* Etiqueta de categoría al final debajo (reemplazando las letras verdes) */}
                      <div className="pt-2 mt-2 border-t border-slate-100 flex items-center justify-between">
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-md bg-slate-100 text-[#183c6b] group-hover:bg-[#02aeaa]/10 group-hover:text-[#02aeaa] transition-colors">
                          {brand.category}
                        </span>
                      </div>
                    </div>
                  </Link>
                </div>
              );
            })}
          </div>

          {/* Institutional Note */}
          <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-600">
            <span className="flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#009539] shrink-0" />
              <span>
                {activeFilter === "consumo-masivo"
                  ? "Harinas, Pastas, Aceites, Grasas y Endulzantes con presencia en todo el país."
                  : "Mantecas, aceites industriales, harinas de trigo de alta fuerza y endulzantes para la industria."}
              </span>
            </span>
            <span className="font-bold text-[#183c6b] hidden sm:inline shrink-0">Calidad Venezolana</span>
          </div>
        </FadeIn>

        {/* Right: Rich Food Photography with Fixed Placement & Constant Dimensions */}
        <FadeIn direction="up" delay={0.16} className="lg:col-span-5 relative w-full lg:sticky lg:top-28">
          
          {/* Floating Sprout Leaf at Top-Right (Decorative) */}
          <div className="absolute -top-8 -right-6 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.20} rotateSpeed={0.20}>
              <MimesaSprout size={110} />
            </ParallaxElement>
          </div>

          {/* Crisp Main Photo with Fixed, Stable Height - Never resizes or stretches between tabs */}
          <div className="relative w-full h-[380px] sm:h-[460px] lg:h-[560px] xl:h-[580px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-2 sm:border-4 border-white bg-white group">
            <Image
              src="/images/planta-la-encrucijada.webp"
              alt="Empaque y producción de alimentos esenciales Grupo Mimesa"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
              sizes="(max-width: 1024px) 100vw, 40vw"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#183c6b]/85 via-transparent to-transparent pointer-events-none" />

            {/* Repositioned Floating Pill at Top-Left: Sin solapamiento con la tarjeta inferior */}
            <div className="absolute top-4 left-4 sm:top-5 sm:left-5 z-20 pointer-events-none">
              <div className="p-3 sm:p-3.5 rounded-2xl shadow-xl bg-white/95 backdrop-blur-md border border-white/80 flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-[#009539] text-white shadow-xs">
                  <Utensils className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#183c6b]">Tradición & Sabor</p>
                  <p className="text-[11px] text-gray-500 font-medium">Llegando a millones de mesas</p>
                </div>
              </div>
            </div>

            {/* Bottom In-Photo Information: Totalmente despejada y visible */}
            <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/80 text-[#183c6b] flex items-center justify-between shadow-lg">
              <div className="space-y-0.5">
                <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#009539]">
                  Nutrición y Calidad
                </p>
                <p className="text-xs sm:text-sm font-black text-[#183c6b]">
                  Presentes en cada hogar venezolano
                </p>
              </div>
              <Link
                href={catalogHref}
                className="p-2 sm:p-2.5 rounded-xl bg-[#02aeaa] hover:bg-[#009539] text-white transition-colors shadow-md cursor-pointer shrink-0 ml-2"
                aria-label="Ver catálogo de productos"
              >
                <ArrowUpRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
        </FadeIn>

      </div>
    </div>
  );
}
