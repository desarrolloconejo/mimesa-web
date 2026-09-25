"use client";

import React from "react";
import { ChevronDown } from "lucide-react";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaLeafLime, MimesaLeafGreen } from "@/components/ui/organic-shapes";
import { FadeIn } from "@/components/ui/fade-in";

export function AtributosCtaContent() {
  const scrollToDetalle = (e: React.MouseEvent<HTMLAnchorElement>) => {
    e.preventDefault();
    const target = document.querySelector("#atributos-detalle");
    if (target) {
      target.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="relative z-10 w-full min-h-[480px] sm:min-h-[560px] md:min-h-[640px] flex flex-col items-center justify-center px-4 sm:px-6 py-28 sm:py-36 md:py-44 overflow-hidden">
      
      {/* Floating Powdery White Leaf Accents on the sides */}
      <div className="absolute top-12 left-8 lg:left-16 pointer-events-none select-none hidden sm:block z-10">
        <MimesaLeafLime size={95} variant="white" />
      </div>

      <div className="absolute bottom-12 right-8 lg:right-16 pointer-events-none select-none hidden sm:block z-10">
        <MimesaLeafGreen size={90} variant="white" />
      </div>

      {/* Core Typography: Solid, Permanent, Clean */}
      <FadeIn direction="up" delay={0.08} className="text-center max-w-4xl mx-auto select-none space-y-2 sm:space-y-3 relative z-20">
        <h2 className="text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white tracking-tight leading-[1.08] drop-shadow-md">
          Atributos que nos acompañan
        </h2>
        <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-light text-white/95 tracking-tight leading-[1.1]">
          en todo momento
        </p>
      </FadeIn>

      {/* Minimalist Interactive Scroll Indicator */}
      <FadeIn direction="up" delay={0.16} className="pt-12 sm:pt-16 relative z-20">
        <a
          href="#atributos-detalle"
          onClick={scrollToDetalle}
          className="group inline-flex flex-col items-center gap-2 text-white/60 hover:text-white transition-all duration-300 cursor-pointer"
          aria-label="Ir a detalle de atributos"
        >
          <span className="text-[11px] sm:text-xs font-semibold tracking-widest uppercase text-white/50 group-hover:text-[#30deda] transition-colors duration-300">
            Descubrir
          </span>
          <div className="w-8 h-8 rounded-full bg-white/5 group-hover:bg-white/15 border border-white/10 group-hover:border-[#02aeaa] flex items-center justify-center transition-all duration-300 shadow-sm group-hover:scale-110">
            <ChevronDown className="w-4 h-4 text-[#30deda] group-hover:translate-y-0.5 transition-transform duration-300" />
          </div>
        </a>
      </FadeIn>

    </div>
  );
}
