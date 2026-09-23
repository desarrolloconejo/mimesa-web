"use client";

import React from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { COMPROMISO_SOCIAL_DATA } from "./compromiso-social-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaSprout } from "@/components/ui/organic-shapes";

export function CompromisoSocialContent() {
  const handleScrollTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <div className="w-full bg-white relative overflow-hidden select-none">
      
      {/* Colossal Parallax Watermark Text in Background */}
      <div className="absolute top-10 right-6 sm:right-12 pointer-events-none select-none z-0 overflow-hidden text-right hidden sm:block">
        <ParallaxElement speed={-0.25} horizontalSpeed={-0.08} fadeEffect="in-out">
          <span className="text-[80px] sm:text-[130px] md:text-[170px] font-black text-[#02aeaa]/[0.035] uppercase tracking-tighter leading-none block">
            VENEZUELA
          </span>
        </ParallaxElement>
      </div>

      {/* Ambient background brand aura */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 rounded-full bg-[#02aeaa]/5 blur-3xl pointer-events-none" />

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[620px] lg:min-h-[720px] items-stretch">
        
        {/* ========================================================
            LEFT COLUMN: Lab & Research Image with S-Curve Mask & Floating Protrusions
           ======================================================== */}
        <div className="lg:col-span-5 xl:col-span-5 relative min-h-[420px] sm:min-h-[500px] lg:min-h-full flex flex-col bg-slate-100 order-2 lg:order-1">
          
          {/* Floating Organic Leaf at Top-Left */}
          <div className="absolute -top-6 -left-6 z-30 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.30} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaSprout size={100} />
            </ParallaxElement>
          </div>

          {/* Static, solid photo without scroll translation or fade */}
          <div className="relative h-full w-full min-h-[420px] lg:min-h-full overflow-hidden">
            <Image
              src={COMPROMISO_SOCIAL_DATA.image.src}
              alt={COMPROMISO_SOCIAL_DATA.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Subtle Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />
          </div>

          {/* Desktop: Continuous Undulating S-Curve on RIGHT edge of the left image */}
          <svg
            viewBox="0 0 120 1000"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-y-0 -right-1 w-24 lg:w-32 xl:w-40 h-full z-20 pointer-events-none fill-white"
          >
            {/* Starts at top right (x=45), curves to x=70 at bottom to connect seamlessly with section below */}
            <path d="M 120,0 L 45,0 C 105,200 115,360 65,520 C 25,660 45,820 70,1000 L 120,1000 Z" />
          </svg>

          {/* Mobile: Bottom Wave Boundary */}
          <svg
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            className="block lg:hidden absolute bottom-0 inset-x-0 w-full h-10 sm:h-14 z-20 pointer-events-none fill-white"
          >
            <path d="M 0,80 L 1000,80 L 1000,25 C 750,70 450,5 0,35 Z" />
          </svg>

          {/* Protruding Floating Frosted Badge Sobresaliendo at Bottom-Left (Speed 0.28) */}
          <div className="absolute bottom-8 left-6 sm:left-10 z-30 pointer-events-none">
            <ParallaxElement speed={0.28} fadeEffect="in-out">
              <div className="p-4 rounded-2xl shadow-xl bg-white/95 backdrop-blur-md border border-white/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#02aeaa] text-white shadow-xs">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#16365f]">Compromiso con el País</p>
                  <p className="text-[11px] text-gray-500 font-medium">Nutrición y desarrollo social</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Editorial Copywriting (Stepped individual velocities)
           ======================================================== */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10 order-1 lg:order-2">
          <div className="max-w-xl space-y-6 sm:space-y-7">
            
            {/* Main Headline */}
            <ParallaxElement speed={0.22} fadeEffect="in-out">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.85rem] font-black text-[#16365f] tracking-tight leading-[1.15]">
                {COMPROMISO_SOCIAL_DATA.headline}
              </h2>
            </ParallaxElement>

            {/* Paragraph 1 */}
            <ParallaxElement speed={0.14} fadeEffect="in-out">
              <p className="text-sm sm:text-base lg:text-[1.02rem] text-[#2c4260] leading-relaxed font-normal">
                {COMPROMISO_SOCIAL_DATA.paragraph1}
              </p>
            </ParallaxElement>

            {/* Paragraph 2 */}
            <ParallaxElement speed={0.08} fadeEffect="in-out">
              <p className="text-sm sm:text-base lg:text-[1.02rem] text-[#2c4260] leading-relaxed font-normal">
                {COMPROMISO_SOCIAL_DATA.paragraph2}
              </p>
            </ParallaxElement>

            {/* CTA Button: Solid Navy Pill "Volver al inicio" */}
            <ParallaxElement speed={0.03} fadeEffect="in-out">
              <div className="pt-2 sm:pt-4">
                <button
                  type="button"
                  onClick={handleScrollTop}
                  className="px-8 py-3 rounded-full bg-[#1b3c66] hover:bg-[#142e4e] text-white text-sm font-semibold shadow-md shadow-[#1b3c66]/20 hover:scale-105 active:scale-95 transition-all duration-300 focus:outline-none focus:ring-2 focus:ring-[#02aeaa] cursor-pointer"
                >
                  {COMPROMISO_SOCIAL_DATA.ctaButtonText}
                </button>
              </div>
            </ParallaxElement>

          </div>
        </div>

      </div>
    </div>
  );
}
