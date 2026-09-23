"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ParallaxElement } from "@/components/ui/parallax-element";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
  BleedingBrandLeaves,
} from "@/components/ui/organic-shapes";

/**
 * Hero Content for Root Home Page (/)
 *
 * Implements:
 * - Clean white background with elements in their official corresponding brand colors
 *   (Lime #95c11e, Green #009539, Cyan #02aeaa)
 * - Slide 11: Uniform Gilroy Black (900) headline typography
 * - Slide 12: Bleeding Brand Leaves in official brand colors
 */
export function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4 sm:pb-6 flex-1 flex flex-col justify-between h-full">
      {/* Slide 12: Bleeding Brand Leaves in Official Brand Colors on White Background */}
      <BleedingBrandLeaves
        position="top-right"
        variant="brand"
        className="opacity-95"
      />

      {/* Official Mimesa Complete Symbol (Sprout) in Official Brand Colors on Left Edge */}
      <div className="absolute top-1/3 -left-10 sm:-left-16 lg:-left-24 z-10 pointer-events-none opacity-90 hidden sm:block">
        <ParallaxElement speed={-0.35} rotateSpeed={0.2} fadeEffect="fade-out" fadeIntensity={1.2}>
          <MimesaSprout size={160} variant="brand" />
        </ParallaxElement>
      </div>

      {/* Floating Brand Shapes in Balanced Outer Corners - Official Colors */}
      <div className="absolute top-14 right-4 sm:right-10 lg:right-16 z-10 pointer-events-none hidden sm:block">
        <ParallaxElement speed={-0.25} rotateSpeed={0.3} fadeEffect="fade-out" fadeIntensity={1.3}>
          <MimesaLeafLime size={105} variant="brand" opacity={0.9} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-16 left-4 sm:left-10 lg:left-16 z-10 pointer-events-none hidden md:block">
        <ParallaxElement speed={0.3} rotateSpeed={-0.2} fadeEffect="fade-out" fadeIntensity={1.2}>
          <MimesaLeafGreen size={90} variant="brand" opacity={0.9} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-20 right-6 sm:right-14 z-10 pointer-events-none hidden xl:block">
        <ParallaxElement speed={-0.2} rotateSpeed={0.2} fadeEffect="fade-out" fadeIntensity={1.4}>
          <MimesaDotCyan size={38} variant="brand" opacity={0.85} />
        </ParallaxElement>
      </div>

      {/* Center Main Hero Block (Horizontally Centered Layout) */}
      <div className="max-w-3xl lg:max-w-[860px] xl:max-w-[920px] mx-auto text-center space-y-6 sm:space-y-8 my-auto px-2 sm:px-4">
        <ParallaxElement speed={0.08} fadeEffect="fade-out" fadeIntensity={0.8}>
          <div className="space-y-4 sm:space-y-6 flex flex-col items-center">
            {/* Centered Editorial Headline with Uniform Gilroy Black */}
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-[4.4rem] font-black tracking-tight text-[#0e2440] leading-[1.08] sm:leading-[1.04] uppercase animate-hero-fade font-heading">
              <span className="block sm:whitespace-nowrap">
                Empresa de{" "}
                <span className="text-[#009539]">
                  alimentos
                </span>
              </span>
              <span className="block sm:whitespace-nowrap text-[#0e2440]">
                en Venezuela
              </span>
            </h1>

            <p className="text-sm sm:text-base text-gray-600 font-body font-normal max-w-2xl mx-auto leading-relaxed animate-hero-fade [animation-delay:200ms]">
              Nutriendo el corazón y el futuro de las familias venezolanas con
              calidad agroindustrial, innovación constante y compromiso por nuestra tierra.
            </p>
          </div>

          {/* Centered Action Trigger Buttons (Gilroy Font & Bold Weight) */}
          <div className="flex flex-wrap items-center justify-center gap-4 sm:gap-5 pt-4 sm:pt-6 animate-hero-fade [animation-delay:350ms]">
            <Link
              href="#quienes-somos"
              id="hero-cta-descubre"
              className="group inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-heading font-bold bg-[#02aeaa] text-white hover:bg-[#009539] transition-all duration-300 shadow-xl shadow-[#02aeaa]/25 hover:shadow-2xl hover:shadow-[#009539]/30 hover:-translate-y-1 active:translate-y-0"
            >
              <span>Conoce nuestra historia</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-white" />
              </div>
            </Link>

            <Link
              href="/contacto"
              id="hero-cta-contacto"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-heading font-bold text-[#0e2440] bg-slate-50 hover:bg-[#0e2440] hover:text-white border border-gray-200/80 shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1 active:translate-y-0"
            >
              <span>Contáctanos</span>
            </Link>
          </div>
        </ParallaxElement>
      </div>

      {/* Bottom Creative Bar: Origin Statement & Scroll Prompt */}
      <div className="w-full pt-4 sm:pt-6 border-t border-gray-100 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm animate-hero-fade [animation-delay:500ms]">
        
        {/* Left: Origin Statement with Brand Pebble Dot */}
        <div className="flex items-center gap-2.5 text-gray-500">
          <div className="w-2.5 h-2.5 rounded-full bg-[#95c11e] animate-pulse" />
          <span className="font-medium tracking-wide">Tradición agroalimentaria con visión de futuro</span>
        </div>

        {/* Right: Scroll Indicator */}
        <Link
          href="#quienes-somos"
          className="group inline-flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-widest font-bold text-gray-500 hover:text-[#02aeaa] transition-colors"
          aria-label="Deslizar para explorar"
        >
          <span>Explora más</span>
          <span className="w-1.5 h-1.5 rounded-full bg-[#02aeaa] group-hover:scale-125 transition-transform" />
        </Link>
      </div>
    </div>
  );
}
