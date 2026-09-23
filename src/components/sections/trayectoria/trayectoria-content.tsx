"use client";

import React from "react";

import { ParallaxElement } from "@/components/ui/parallax-element";
import {
  MimesaSprout,
  MimesaLeafLime,
} from "@/components/ui/organic-shapes";
import { TwoColumnTimeline } from "./two-column-timeline";

export function TrayectoriaContent() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 sm:py-28 space-y-12 sm:space-y-16">
      
      {/* Colossal Watermark Background Text */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <ParallaxElement speed={-0.25} horizontalSpeed={0.08} fadeEffect="in-out" fadeIntensity={0.8}>
          <span className="text-[100px] sm:text-[160px] md:text-[220px] font-black text-[#183c6b]/[0.025] uppercase tracking-tighter leading-none block">
            HISTORIA
          </span>
        </ParallaxElement>
      </div>

      {/* Floating Brand Isotype Elements with Parallax */}
      <div className="absolute top-10 -left-6 z-10 pointer-events-none hidden lg:block">
        <ParallaxElement speed={-0.3} rotateSpeed={0.2} fadeEffect="in-out">
          <MimesaSprout size={130} opacity={0.35} />
        </ParallaxElement>
      </div>

      <div className="absolute top-20 -right-8 z-10 pointer-events-none hidden lg:block">
        <ParallaxElement speed={0.25} rotateSpeed={-0.2} fadeEffect="in-out">
          <MimesaLeafLime size={105} opacity={0.4} />
        </ParallaxElement>
      </div>

      {/* Section Header */}
      <div className="relative z-10 max-w-3xl mx-auto text-center space-y-4">
        
        {/* Category Pill & Main Title Parallax Layer */}
        <ParallaxElement speed={0.24} fadeEffect="in-out" fadeIntensity={1.05}>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block mb-4">
            Nuestra Trayectoria
          </span>

          <h2 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#183c6b] tracking-tight leading-[1.08]">
            Hitos que forjaron la{" "}
            <span className="text-[#009539]">
              excelencia alimentaria
            </span>
          </h2>
        </ParallaxElement>

        {/* Narrative Subtitle Parallax Layer */}
        <ParallaxElement speed={0.16} fadeEffect="in-out" fadeIntensity={1.0}>
          <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed max-w-2xl mx-auto">
            Selecciona cada hito en la línea de tiempo para descubrir en detalle cómo hemos nutrido y
            acompañado la mesa de cada familia venezolana a lo largo de nuestra historia.
          </p>
        </ParallaxElement>

      </div>

      {/* Two-Column Interactive Timeline (13 Milestones, User Selection, Sticky Explanatory Card) */}
      <div className="relative z-10">
        <TwoColumnTimeline />
      </div>

    </div>
  );
}
