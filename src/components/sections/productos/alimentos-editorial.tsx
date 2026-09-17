"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Utensils, Sparkles } from "lucide-react";
import { ALIMENTOS_BRANDS } from "./productos-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaSprout } from "@/components/ui/organic-shapes";

export function AlimentosEditorial() {
  return (
    <div className="space-y-8 sm:space-y-10 lg:space-y-14 relative">
      {/* Chapter Watermark */}
      <div className="absolute -top-10 right-10 pointer-events-none select-none z-0 overflow-hidden text-right hidden md:block">
        <ParallaxElement speed={-0.2} horizontalSpeed={-0.08} fadeEffect="in-out">
          <span className="text-[70px] sm:text-[110px] lg:text-[150px] font-black text-[#009539]/[0.03] uppercase tracking-tighter leading-none block">
            ALIMENTOS
          </span>
        </ParallaxElement>
      </div>

      {/* Chapter 01 Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-5 sm:gap-6 pb-6 border-b border-gray-100 relative z-10">
        <div className="space-y-2.5 sm:space-y-3 max-w-2xl">
          <ParallaxElement speed={0.24} fadeEffect="in-out">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
              01 • División Alimentos
            </span>
          </ParallaxElement>
          <ParallaxElement speed={0.18} fadeEffect="in-out">
            <h3 className="text-2xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight leading-tight">
              Nuestras Marcas de Alimentos
            </h3>
          </ParallaxElement>
          <ParallaxElement speed={0.12} fadeEffect="in-out">
            <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
              Una selección líder de marcas B2C y B2B que aportan sabor, nutrición y calidad garantizada en cada mesa venezolana.
            </p>
          </ParallaxElement>
        </div>

        <ParallaxElement speed={0.06}>
          <Link
            href="/en-construccion"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a3c6a]/5 hover:bg-[#1a3c6a] text-[#1a3c6a] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 w-fit group shadow-xs hover:-translate-y-0.5 cursor-pointer"
          >
            <span>Ver catálogo de marcas</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ParallaxElement>
      </div>

      {/* Main Grid: Brands Logo Showcase (Left 7 cols) + Culinary Photo (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 sm:gap-8 lg:gap-10 items-stretch">
        
        {/* Left: Brand Logo Showcase Cards */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between space-y-5 sm:space-y-6">
          
          {/* Section Subtitle / Header Status */}
          <ParallaxElement speed={0.16} fadeEffect="in-out">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#009539] shrink-0" />
                <span className="font-semibold text-gray-700">Nuestras Marcas</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-light truncate">
                  Portafolio líder en consumo masivo y nutrición
                </span>
              </div>
              <span className="text-[11px] font-bold text-[#02afab] bg-[#02afab]/10 px-2.5 py-0.5 rounded-full shrink-0">
                7 Marcas
              </span>
            </div>
          </ParallaxElement>

          {/* Unified Brand Cards Grid (Responsive & Mobile-Optimized) */}
          <ParallaxElement speed={0.10} fadeEffect="in-out">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 sm:gap-4">
              {ALIMENTOS_BRANDS.map((brand, index) => {
                const isLastOnMobile = index === ALIMENTOS_BRANDS.length - 1;

                return (
                  <Link
                    key={brand.id}
                    href={brand.href}
                    className={`group relative p-3.5 sm:p-5 rounded-2xl sm:rounded-3xl bg-white border border-slate-200/90 hover:border-[#02afab] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5 flex flex-col justify-between overflow-hidden cursor-pointer ${
                      isLastOnMobile ? "col-span-2 sm:col-span-1" : ""
                    }`}
                  >
                    {/* Brand Logo Container */}
                    <div
                      className={`h-20 sm:h-28 w-full rounded-xl sm:rounded-2xl ${brand.logoBg} border border-slate-100/80 flex flex-col items-center justify-center p-2.5 sm:p-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] shadow-2xs`}
                    >
                      {/* Clean Category Badge */}
                      <div className="absolute top-2 left-2 pointer-events-none">
                        <span className="text-[9px] sm:text-[10px] font-extrabold uppercase tracking-wider px-2 py-0.5 rounded-full bg-white/95 text-[#1a3c6a] shadow-xs">
                          {brand.category}
                        </span>
                      </div>

                      {brand.logoUrl ? (
                        <div className="relative w-full h-full flex items-center justify-center p-2">
                          <Image
                            src={brand.logoUrl}
                            alt={`Logo ${brand.name}`}
                            fill
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
                          <span className="text-xs sm:text-sm font-bold text-[#1a3c6a] group-hover:text-[#02afab] transition-colors truncate">
                            {brand.name}
                          </span>
                          <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#02afab] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5 shrink-0" />
                        </div>
                        <p className="text-[11px] sm:text-xs text-gray-500 font-light line-clamp-2 leading-relaxed mt-0.5">
                          {brand.tagline}
                        </p>
                      </div>

                      {brand.badge && (
                        <div className="pt-2 mt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] sm:text-[11px] font-bold text-[#009539]">
                          <Sparkles className="w-3 h-3 text-[#94c11e] shrink-0" />
                          <span className="truncate">{brand.badge}</span>
                        </div>
                      )}
                    </div>
                  </Link>
                );
              })}
            </div>
          </ParallaxElement>

          {/* Institutional Note */}
          <ParallaxElement speed={0.03} fadeEffect="in-out">
            <div className="p-3.5 sm:p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-2 text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#009539] shrink-0" />
                <span>Harinas, Pastas, Aceites, Grasas y Endulzantes con presencia en todo el país.</span>
              </span>
              <span className="font-bold text-[#1a3c6a] hidden sm:inline shrink-0">Calidad Venezolana</span>
            </div>
          </ParallaxElement>
        </div>

        {/* Right: Rich Food Photography with Overhanging 3D Protrusion & Floating Badges */}
        <div className="lg:col-span-5 relative h-full min-h-[300px] sm:min-h-[420px] lg:min-h-full">
          
          {/* Floating Sprout Leaf at Top-Right (Speed -0.28, rotate) */}
          <div className="absolute -top-8 -right-6 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.28} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaSprout size={110} />
            </ParallaxElement>
          </div>

          {/* Crisp Main Photo with Counter-Parallax (-0.08) */}
          <ParallaxElement speed={-0.08} fadeEffect="in-out" className="h-full">
            <div className="relative h-full min-h-[280px] sm:min-h-[460px] rounded-2xl sm:rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-xl lg:shadow-2xl border-2 sm:border-4 border-white bg-white group">
              <Image
                src="/images/alimentos-showcase.webp"
                alt="Mesa y alimentos Grupo Mimesa"
                fill
                className="object-cover object-center group-hover:scale-105 transition-transform duration-700 ease-out"
                sizes="(max-width: 1024px) 100vw, 40vw"
                priority={false}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/85 via-transparent to-transparent pointer-events-none" />

              {/* Bottom In-Photo Information */}
              <div className="absolute bottom-3 sm:bottom-5 inset-x-3 sm:inset-x-5 z-10 p-3 sm:p-4 rounded-xl sm:rounded-2xl bg-white/95 backdrop-blur-md border border-white/60 text-[#1a3c6a] flex items-center justify-between shadow-lg">
                <div className="space-y-0.5">
                  <p className="text-[10px] sm:text-[11px] font-extrabold uppercase tracking-wider text-[#009539]">
                    Nutrición y Calidad
                  </p>
                  <p className="text-xs sm:text-sm font-black text-[#1a3c6a]">
                    Presentes en cada hogar venezolano
                  </p>
                </div>
                <Link
                  href="/en-construccion"
                  className="p-2 sm:p-2.5 rounded-xl bg-[#02afab] hover:bg-[#009539] text-white transition-colors shadow-md cursor-pointer shrink-0 ml-2"
                  aria-label="Ver productos"
                >
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </ParallaxElement>

          {/* Overhanging Floating Frosted Pill Sobresaliendo at Bottom-Left (Speed 0.28) */}
          <div className="absolute -bottom-6 -left-6 z-20 hidden sm:block pointer-events-none">
            <ParallaxElement speed={0.28} fadeEffect="in-out">
              <div className="p-4 rounded-2xl shadow-2xl bg-white/95 backdrop-blur-md border border-white/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#009539] text-white shadow-xs">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#1a3c6a]">Tradición & Sabor</p>
                  <p className="text-[11px] text-gray-500 font-medium">Llegando a millones de mesas</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

      </div>
    </div>
  );
}
