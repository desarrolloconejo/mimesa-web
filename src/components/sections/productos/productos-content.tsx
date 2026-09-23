"use client";

import React from "react";
import { PRODUCTOS_INTRO } from "./productos-data";
import { AlimentosEditorial } from "./alimentos-editorial";
import { ProdusalEditorial } from "./produsal-editorial";
import { MimesaSprout, MimesaLeafLime, MimesaLeafGreen } from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function ProductosContent() {
  return (
    <div className="relative w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-36 space-y-20 lg:space-y-28 overflow-hidden select-none">
      
      {/* Colossal Parallax Watermark Text in Background */}
      <div className="absolute top-6 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <ParallaxElement speed={-0.35} horizontalSpeed={0.12} fadeEffect="in-out" fadeIntensity={0.9}>
          <span className="text-[100px] sm:text-[160px] md:text-[230px] font-black text-[#183c6b]/[0.025] uppercase tracking-tighter leading-none block">
            NEGOCIOS
          </span>
        </ParallaxElement>
      </div>

      {/* Floating Brand Isotype Elements with Parallax Rotation */}
      <div className="absolute top-16 -right-10 z-0 pointer-events-none hidden lg:block">
        <ParallaxElement speed={-0.3} rotateSpeed={0.25} fadeEffect="in-out">
          <MimesaSprout size={180} opacity={0.12} />
        </ParallaxElement>
      </div>

      <div className="absolute top-1/3 -left-12 z-0 pointer-events-none hidden lg:block">
        <ParallaxElement speed={0.25} rotateSpeed={-0.2} fadeEffect="in-out">
          <MimesaLeafLime size={130} opacity={0.15} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-1/4 -right-8 z-0 pointer-events-none hidden xl:block">
        <ParallaxElement speed={-0.2} rotateSpeed={0.15} fadeEffect="in-out">
          <MimesaLeafGreen size={110} opacity={0.12} />
        </ParallaxElement>
      </div>

      {/* ========================================================
          1. General Institutional Header
         ======================================================== */}
      <div className="relative z-10 max-w-4xl space-y-5">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
          {PRODUCTOS_INTRO.badge}
        </span>

        <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#183c6b] tracking-tight leading-[1.08]">
          {PRODUCTOS_INTRO.title}
        </h2>

        <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
          {PRODUCTOS_INTRO.description}
        </p>
      </div>

      {/* ========================================================
          2. Chapter 01: Negocio de Alimentación (Marcas de Consumo e Industriales)
         ======================================================== */}
      <div className="relative z-10">
        <AlimentosEditorial />
      </div>

      {/* ========================================================
          3. Chapter 02: Negocio de Sal Marina Solar (Produsal)
         ======================================================== */}
      <div className="relative z-10">
        <ProdusalEditorial />
      </div>

    </div>
  );
}
