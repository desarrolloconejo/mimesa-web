"use client";

import React from "react";
import { COMPROMISO_DATA } from "./compromiso-data";
import { ParallaxElement } from "@/components/ui/parallax-element";


export function CompromisoContent() {
  return (
    <div className="relative w-full min-h-[560px] sm:min-h-[640px] lg:min-h-[700px] flex items-center justify-center overflow-hidden py-24 sm:py-32 lg:py-36 bg-white select-none">
      
      {/* Colossal Parallax Watermark Text in Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <ParallaxElement speed={-0.3} horizontalSpeed={0.1} fadeEffect="in-out">
          <span className="text-[90px] sm:text-[150px] md:text-[210px] font-black text-[#16365f]/[0.025] uppercase tracking-tighter leading-none block">
            HERENCIA
          </span>
        </ParallaxElement>
      </div>

      {/* 1. Subtle Ambient Dynamic Glows */}
      <div className="absolute top-1/4 left-1/4 w-[420px] h-[420px] rounded-full bg-gradient-to-tr from-[#95c11e]/10 via-[#02aeaa]/5 to-transparent blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[460px] h-[460px] rounded-full bg-gradient-to-bl from-[#02aeaa]/12 via-[#009539]/6 to-transparent blur-3xl pointer-events-none" />

      {/* 2. Dynamic Orbital Rings (Slow Continuous Rotation) */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center overflow-hidden">
        <svg
          viewBox="0 0 1200 800"
          className="w-[140%] h-[140%] max-w-none opacity-25 select-none"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Inner Orbital Arc */}
          <circle
            cx="600"
            cy="400"
            r="320"
            stroke="#02aeaa"
            strokeWidth="1.2"
            strokeDasharray="6 8"
            strokeOpacity="0.45"
            className="animate-spin [animation-duration:90s]"
          />
          {/* Outer Orbital Ellipse */}
          <ellipse
            cx="600"
            cy="400"
            rx="520"
            ry="300"
            stroke="#16365f"
            strokeWidth="1"
            strokeDasharray="4 10"
            strokeOpacity="0.25"
            transform="rotate(-8 600 400)"
          />
        </svg>
      </div>

      {/* 3. Top-Left Organic Element: Deep Navy Curved Stem + Lime Sprouting Leaf (#95c11e) */}
      <div className="absolute top-0 -left-6 sm:-left-4 lg:left-0 z-10 pointer-events-none">
        <ParallaxElement speed={-0.2} rotateSpeed={0.08} fadeEffect="in-out">
          <svg
            width="280"
            height="320"
            viewBox="0 0 280 320"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-44 sm:w-60 lg:w-72 h-auto drop-shadow-sm"
          >
            <path
              d="M-20 -10 C 25 60, 40 160, 15 260 C 2 310, -10 340, -30 350 L -60 350 L -60 -10 Z"
              fill="#0d2b52"
            />
            <path
              d="M10 95 C 20 40, 95 30, 200 42 C 220 95, 160 165, 80 165 C 35 165, 10 135, 10 95 Z"
              fill="#95c11e"
            />
          </svg>
        </ParallaxElement>
      </div>

      {/* 4. Top-Right Organic Element: Deep Green Floating Leaf (#009539) */}
      <div className="absolute -top-6 -right-10 sm:-right-8 lg:right-0 z-10 pointer-events-none">
        <ParallaxElement speed={0.25} rotateSpeed={-0.15} fadeEffect="in-out">
          <svg
            width="260"
            height="260"
            viewBox="0 0 260 260"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-40 sm:w-56 lg:w-68 h-auto drop-shadow-sm"
          >
            <path
              d="M260 0 C 200 40, 110 110, 115 200 C 180 235, 250 170, 280 80 Z"
              fill="#009539"
              transform="rotate(10 180 100)"
            />
          </svg>
        </ParallaxElement>
      </div>

      {/* 5. Central Editorial Typography with Scroll Fade In-Out */}
      <div className="relative z-20 max-w-4xl mx-auto px-6 sm:px-8 text-center space-y-5 sm:space-y-6">
        
        <ParallaxElement speed={0.22}>
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block mb-2">
            {COMPROMISO_DATA.badge}
          </span>
        </ParallaxElement>

        {/* Headline: "Compromiso que heredamos" */}
        <ParallaxElement speed={0.16}>
          <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-[4.2rem] font-black text-[#16365f] tracking-tight leading-[1.12]">
            {COMPROMISO_DATA.headline}
          </h2>
        </ParallaxElement>

        {/* Subheadline lines - Standardized to text-sm sm:text-base font-normal */}
        <ParallaxElement speed={0.10}>
          <div className="space-y-1 text-sm sm:text-base text-[#244b7a] font-normal leading-relaxed max-w-2xl mx-auto">
            <p>{COMPROMISO_DATA.subheadlineLine1}</p>
            <p className="font-semibold text-[#16365f]">
              {COMPROMISO_DATA.subheadlineLine2}
            </p>
          </div>
        </ParallaxElement>

        {/* Decorative Center Accent */}
        <ParallaxElement speed={0.05}>
          <div className="pt-4 sm:pt-6 flex items-center justify-center gap-2 text-xs text-gray-400">
            <span className="w-8 h-px bg-gradient-to-r from-transparent to-[#02aeaa]" />
            <span className="w-2.5 h-2.5 rounded-full bg-[#02aeaa] shadow-sm shadow-[#02aeaa]/50" />
            <span className="w-8 h-px bg-gradient-to-l from-transparent to-[#02aeaa]" />
          </div>
        </ParallaxElement>
      </div>

    </div>
  );
}
