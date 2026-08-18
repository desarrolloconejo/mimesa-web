import React from "react";
import Image from "next/image";
import { HeroContent } from "./hero-content";
import { GlowOrb } from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function HeroWrapper() {
  return (
    <section
      id="inicio"
      className="relative h-screen min-h-[660px] max-h-[1200px] w-full flex flex-col justify-between overflow-hidden bg-[#0a182b]"
    >
      {/* Background Image with Subtle Parallax Movement */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <ParallaxElement speed={0.3} scaleSpeed={0.1} className="w-full h-[115%] -top-[7%] relative">
          <Image
            src="/images/hero-production.webp"
            alt="Grupo Mimesa - Producción Agroindustrial en Venezuela"
            fill
            priority
            className="object-cover object-center transform scale-105"
          />
        </ParallaxElement>
      </div>

      {/* Layered Gradient Overlays for Optimal Text Legibility & Brand Colors */}
      <div className="absolute inset-0 z-10 bg-gradient-to-r from-[#0a182b] via-[#0f2747]/90 to-[#009539]/35" />
      <div className="absolute inset-0 z-10 bg-gradient-to-t from-[#0a182b] via-transparent to-[#0a182b]/70" />
      <div className="absolute inset-0 z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-[#02afab]/20 via-transparent to-transparent" />

      {/* Ambient Lighting Orbs */}
      <GlowOrb color="cyan" className="-top-32 -left-32 w-[500px] h-[500px] opacity-35 z-10" />
      <GlowOrb color="lime" className="bottom-0 right-0 w-[450px] h-[450px] opacity-25 z-10" />

      {/* Hero Interactive & Editorial Content fitting exactly in Viewport */}
      <HeroContent />
    </section>
  );
}
