"use client";

import React from "react";
import Link from "next/link";
import { ArrowDown, ArrowUpRight } from "lucide-react";
import { ParallaxElement } from "@/components/ui/parallax-element";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";

export function HeroContent() {
  return (
    <div className="relative z-20 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 sm:pt-28 pb-4 sm:pb-6 flex-1 flex flex-col justify-between h-full">
      
      {/* Official Mimesa Complete Symbol (Sprout) on Far Left Edge */}
      <div className="absolute top-1/3 -left-8 sm:-left-14 lg:-left-20 z-10 pointer-events-none opacity-90 hidden sm:block">
        <ParallaxElement speed={-0.3} rotateSpeed={0.2}>
          <MimesaSprout size={180} />
        </ParallaxElement>
      </div>

      {/* Floating Individual Brand Shapes around Hero Canvas */}
      <div className="absolute top-24 right-8 md:right-16 z-10 pointer-events-none hidden sm:block">
        <ParallaxElement speed={-0.25} rotateSpeed={0.3}>
          <MimesaLeafLime size={110} opacity={0.85} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-20 right-8 md:right-20 z-10 pointer-events-none hidden md:block">
        <ParallaxElement speed={0.3} rotateSpeed={-0.2}>
          <MimesaLeafGreen size={95} opacity={0.85} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-28 left-1/3 z-10 pointer-events-none hidden xl:block">
        <ParallaxElement speed={-0.2} rotateSpeed={0.2}>
          <MimesaDotCyan size={42} opacity={0.8} />
        </ParallaxElement>
      </div>

      {/* Center Main Hero Block (Vertically centered with proportional scaling) */}
      <div className="max-w-4xl space-y-6 sm:space-y-8 my-auto pl-0 sm:pl-4 lg:pl-6">
        <ParallaxElement speed={0.15}>
          <div className="space-y-4 sm:space-y-6">
            {/* Massive Editorial Headline */}
            <h1 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-[5.2rem] font-black tracking-tight text-white leading-[1.08] sm:leading-[1.03] uppercase drop-shadow-md animate-hero-fade">
              Empresa de{" "}
              <span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-[#30deda] via-[#94c11e] to-[#ffffff]">
                alimentos
              </span>{" "}
              en Venezuela
            </h1>

            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-gray-200 font-light max-w-2xl leading-relaxed animate-hero-fade [animation-delay:200ms]">
              Nutriendo el corazón y el futuro de las familias venezolanas con
              calidad agroindustrial, innovación constante y compromiso por nuestra tierra.
            </p>
          </div>

          {/* Action Trigger Buttons */}
          <div className="flex flex-wrap items-center gap-4 sm:gap-5 pt-4 sm:pt-6 animate-hero-fade [animation-delay:350ms]">
            <Link
              href="#quienes-somos"
              id="hero-cta-descubre"
              className="group inline-flex items-center gap-2.5 sm:gap-3 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-bold bg-[#02afab] text-[#0a182b] hover:bg-[#30deda] transition-all duration-300 shadow-xl shadow-[#02afab]/30 hover:shadow-2xl hover:scale-105 active:scale-95"
            >
              <span>Conoce nuestra historia</span>
              <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-[#0a182b]/10 flex items-center justify-center group-hover:translate-x-1 group-hover:-translate-y-0.5 transition-transform">
                <ArrowUpRight className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-[#0a182b]" />
              </div>
            </Link>

            <Link
              href="#contacto"
              id="hero-cta-contacto"
              className="inline-flex items-center gap-2 px-6 sm:px-8 py-3 sm:py-3.5 rounded-full text-sm sm:text-base font-semibold text-white bg-white/10 hover:bg-white/20 border border-white/30 backdrop-blur-md transition-all duration-300 hover:border-white"
            >
              <span>Contáctanos</span>
            </Link>
          </div>
        </ParallaxElement>
      </div>

      {/* Bottom Creative Bar: Origin Statement & Scroll Prompt */}
      <div className="w-full pt-4 sm:pt-6 border-t border-white/15 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs sm:text-sm animate-hero-fade [animation-delay:500ms]">
        
        {/* Left: Origin Statement with Brand Pebble Dot */}
        <div className="flex items-center gap-2.5 text-gray-300">
          <div className="w-2.5 h-2.5 rounded-full bg-[#94c11e] animate-pulse" />
          <span className="font-medium tracking-wide">Tradición agroalimentaria con visión de futuro</span>
        </div>

        {/* Right: Scroll Indicator */}
        <Link
          href="#quienes-somos"
          className="group inline-flex items-center gap-2.5 text-[11px] sm:text-xs uppercase tracking-widest font-bold text-gray-300 hover:text-[#30deda] transition-colors"
          aria-label="Deslizar para explorar"
        >
          <span>Desliza para descubrir</span>
          <div className="w-7 h-7 sm:w-8 sm:h-8 rounded-full bg-white/10 group-hover:bg-[#02afab] border border-white/20 flex items-center justify-center text-white group-hover:text-[#0a182b] transition-all duration-300 group-hover:translate-y-0.5">
            <ArrowDown className="w-3.5 h-3.5 sm:w-4 sm:h-4 animate-bounce" />
          </div>
        </Link>
      </div>

    </div>
  );
}
