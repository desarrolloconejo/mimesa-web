"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Utensils, Sparkles, Image as ImageIcon } from "lucide-react";
import { ALIMENTOS_BRANDS } from "./productos-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaSprout } from "@/components/ui/organic-shapes";

export function AlimentosEditorial() {
  return (
    <div className="space-y-10 lg:space-y-14 relative">
      {/* Chapter Watermark */}
      <div className="absolute -top-10 right-10 pointer-events-none select-none z-0 overflow-hidden text-right hidden md:block">
        <ParallaxElement speed={-0.2} horizontalSpeed={-0.08} fadeEffect="in-out">
          <span className="text-[70px] sm:text-[110px] lg:text-[150px] font-black text-[#009539]/[0.03] uppercase tracking-tighter leading-none block">
            ALIMENTOS
          </span>
        </ParallaxElement>
      </div>

      {/* Chapter 01 Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-100 relative z-10">
        <div className="space-y-3 max-w-2xl">
          <ParallaxElement speed={0.24} fadeEffect="in-out">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#009539]/10 text-[#009539] text-xs font-extrabold uppercase tracking-wider w-fit">
              <Utensils className="w-3.5 h-3.5" />
              <span>01 • División Alimentos</span>
            </div>
          </ParallaxElement>
          <ParallaxElement speed={0.18} fadeEffect="in-out">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight leading-tight">
              Nuestras Marcas de Alimentos
            </h3>
          </ParallaxElement>
          <ParallaxElement speed={0.12} fadeEffect="in-out">
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Una selección líder de marcas B2C y B2B que aportan sabor, nutrición y calidad garantizada en cada mesa venezolana.
            </p>
          </ParallaxElement>
        </div>

        <ParallaxElement speed={0.06}>
          <Link
            href="/en-construccion"
            className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-[#1a3c6a]/5 hover:bg-[#1a3c6a] text-[#1a3c6a] hover:text-white text-xs sm:text-sm font-bold transition-all duration-300 w-fit group shadow-xs hover:-translate-y-0.5"
          >
            <span>Ver catálogo de marcas</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ParallaxElement>
      </div>

      {/* Main Grid: Brands Logo Showcase (Left 7 cols) + Culinary Photo (Right 5 cols) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch">
        
        {/* Left: Brand Logo Showcase Cards */}
        <div className="lg:col-span-7 h-full flex flex-col justify-between space-y-6">
          
          {/* Section Subtitle / Logo Notice */}
          <ParallaxElement speed={0.16} fadeEffect="in-out">
            <div className="flex items-center justify-between px-1">
              <div className="flex items-center gap-2 text-xs text-gray-500">
                <span className="w-2 h-2 rounded-full bg-[#009539]" />
                <span className="font-semibold text-gray-700">Nuestras Marcas</span>
                <span className="text-gray-300">•</span>
                <span className="text-gray-500 font-light">Espacios para logotipos oficiales</span>
              </div>
              <span className="text-[11px] font-bold text-[#02afab] bg-[#02afab]/10 px-2.5 py-0.5 rounded-full">
                7 Marcas
              </span>
            </div>
          </ParallaxElement>

          {/* Tiered Brand Cards - Top Tier (speed 0.12) */}
          <ParallaxElement speed={0.12} fadeEffect="in-out">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {ALIMENTOS_BRANDS.slice(0, 3).map((brand) => (
                <Link
                  key={brand.id}
                  href={brand.href}
                  className="group relative p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 hover:border-[#02afab] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className={`h-24 sm:h-28 w-full rounded-2xl ${brand.logoBg} border border-slate-100/80 flex flex-col items-center justify-center p-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] shadow-2xs`}
                  >
                    <div className="absolute top-2 inset-x-2.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/90 text-gray-600 shadow-2xs">
                        {brand.category}
                      </span>
                      <span className="text-[8px] font-semibold text-gray-400 bg-white/70 px-1 py-0.5 rounded">
                        Logo
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
                      <div className="text-center select-none pt-2">
                        <span
                          className="text-lg sm:text-xl font-black tracking-tight leading-none block drop-shadow-xs"
                          style={{ color: brand.logoColor }}
                        >
                          {brand.logoText}
                        </span>
                        {brand.logoSub && (
                          <span className="text-[10px] font-medium text-gray-500 tracking-wide block mt-1">
                            {brand.logoSub}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="absolute inset-1.5 rounded-xl border border-dashed border-black/5 pointer-events-none" />
                  </div>

                  <div className="pt-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1a3c6a] group-hover:text-[#02afab] transition-colors">
                        {brand.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#02afab] transition-colors" />
                    </div>
                    <p className="text-[11px] text-gray-500 font-light line-clamp-2 leading-relaxed">
                      {brand.tagline}
                    </p>
                  </div>

                  {brand.badge && (
                    <div className="pt-2 mt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-bold text-[#009539]">
                      <Sparkles className="w-3 h-3 text-[#94c11e]" />
                      <span className="truncate">{brand.badge}</span>
                    </div>
                  )}
                </Link>
              ))}
            </div>
          </ParallaxElement>

          {/* Tiered Brand Cards - Middle & Bottom Tier (speed 0.06) */}
          <ParallaxElement speed={0.06} fadeEffect="in-out">
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3.5 sm:gap-4">
              {ALIMENTOS_BRANDS.slice(3).map((brand) => (
                <Link
                  key={brand.id}
                  href={brand.href}
                  className="group relative p-4 sm:p-5 rounded-3xl bg-white border border-slate-200/90 hover:border-[#02afab] shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col justify-between overflow-hidden"
                >
                  <div
                    className={`h-24 sm:h-28 w-full rounded-2xl ${brand.logoBg} border border-slate-100/80 flex flex-col items-center justify-center p-3 relative overflow-hidden transition-transform duration-300 group-hover:scale-[1.02] shadow-2xs`}
                  >
                    <div className="absolute top-2 inset-x-2.5 flex items-center justify-between pointer-events-none">
                      <span className="text-[9px] font-extrabold uppercase tracking-wider px-1.5 py-0.5 rounded bg-white/90 text-gray-600 shadow-2xs">
                        {brand.category}
                      </span>
                      <span className="text-[8px] font-semibold text-gray-400 bg-white/70 px-1 py-0.5 rounded">
                        Logo
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
                      <div className="text-center select-none pt-2">
                        <span
                          className="text-lg sm:text-xl font-black tracking-tight leading-none block drop-shadow-xs"
                          style={{ color: brand.logoColor }}
                        >
                          {brand.logoText}
                        </span>
                        {brand.logoSub && (
                          <span className="text-[10px] font-medium text-gray-500 tracking-wide block mt-1">
                            {brand.logoSub}
                          </span>
                        )}
                      </div>
                    )}

                    <div className="absolute inset-1.5 rounded-xl border border-dashed border-black/5 pointer-events-none" />
                  </div>

                  <div className="pt-3 space-y-1">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-[#1a3c6a] group-hover:text-[#02afab] transition-colors">
                        {brand.name}
                      </span>
                      <ArrowUpRight className="w-3.5 h-3.5 text-gray-300 group-hover:text-[#02afab] transition-colors" />
                    </div>
                    <p className="text-[11px] text-gray-500 font-light line-clamp-2 leading-relaxed">
                      {brand.tagline}
                    </p>
                  </div>

                  {brand.badge && (
                    <div className="pt-2 mt-2 border-t border-gray-100 flex items-center gap-1.5 text-[10px] font-bold text-[#009539]">
                      <Sparkles className="w-3 h-3 text-[#94c11e]" />
                      <span className="truncate">{brand.badge}</span>
                    </div>
                  )}
                </Link>
              ))}

              {/* 8th Card: Portfolio Summary & Commitment to Quality */}
              <div className="p-4 sm:p-5 rounded-3xl bg-gradient-to-br from-[#f8faf9] to-[#edf7f5] border border-dashed border-[#02afab]/30 flex flex-col justify-between items-center text-center">
                <div className="h-24 sm:h-28 w-full rounded-2xl flex flex-col items-center justify-center p-3 relative">
                  <div className="w-9 h-9 rounded-xl bg-[#009539]/15 text-[#009539] flex items-center justify-center mb-1.5 shadow-2xs">
                    <Sparkles className="w-4 h-4" />
                  </div>
                  <span className="text-xs font-black text-[#1a3c6a]">100% Calidad</span>
                  <span className="text-[10px] text-gray-500 font-light">Sello Garantizado</span>
                </div>
                <div className="pt-2 space-y-0.5">
                  <p className="text-[11px] font-bold text-[#1a3c6a]">Compromiso Mimesa</p>
                  <p className="text-[10px] text-gray-500 font-light leading-tight">
                    Alimentos para todo el país
                  </p>
                </div>
              </div>
            </div>
          </ParallaxElement>

          {/* Institutional Note */}
          <ParallaxElement speed={0.03} fadeEffect="in-out">
            <div className="p-4 rounded-2xl bg-[#f8faf9] border border-gray-100 flex items-center justify-between text-xs text-gray-600">
              <span className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-[#009539]" />
                <span>Harinas, Pastas, Aceites, Grasas y Endulzantes con presencia en todo el país.</span>
              </span>
              <span className="font-bold text-[#1a3c6a] hidden sm:inline">Calidad Venezolana</span>
            </div>
          </ParallaxElement>
        </div>

        {/* Right: Rich Food Photography with Overhanging 3D Protrusion & Floating Badges */}
        <div className="lg:col-span-5 relative h-full min-h-[420px] lg:min-h-full">
          
          {/* Floating Sprout Leaf at Top-Right (Speed -0.28, rotate) */}
          <div className="absolute -top-8 -right-6 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.28} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaSprout size={110} />
            </ParallaxElement>
          </div>

          {/* Crisp Main Photo with Counter-Parallax (-0.08) */}
          <ParallaxElement speed={-0.08} fadeEffect="in-out" className="h-full">
            <div className="relative h-full min-h-[400px] sm:min-h-[460px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
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
              <div className="absolute bottom-5 inset-x-5 z-10 p-4 rounded-2xl bg-white/90 backdrop-blur-md border border-white/60 text-[#1a3c6a] flex items-center justify-between shadow-lg">
                <div className="space-y-0.5">
                  <p className="text-[11px] font-extrabold uppercase tracking-wider text-[#009539]">
                    Nutrición y Calidad
                  </p>
                  <p className="text-xs sm:text-sm font-black text-[#1a3c6a]">
                    Presentes en cada hogar venezolano
                  </p>
                </div>
                <Link
                  href="/en-construccion"
                  className="p-2 rounded-xl bg-[#02afab] hover:bg-[#009539] text-white transition-colors shadow-md"
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
