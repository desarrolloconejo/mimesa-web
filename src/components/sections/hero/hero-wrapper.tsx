import React from "react";
import Image from "next/image";
import { HeroContent } from "./hero-content";
import { GlowOrb } from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

/**
 * Root Home Hero Wrapper
 *
 * Implements:
 * - Luminous, elegant white background
 * - Organic brand shapes in their official corresponding colors (Lime #95c11e, Green #009539, Cyan #02aeaa)
 */
export function HeroWrapper() {
  return (
    <section
      id="inicio"
      className="relative min-h-screen w-full flex flex-col justify-between overflow-hidden bg-white text-[#0e2440]"
    >
      {/* 1. Base Clean White & Subtle Atmospheric Light Gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-white via-[#fcfefe] to-[#f8fbf9] -z-30" />

      {/* 2. Very Subtle Agroindustrial Production Watermark Underlay */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none opacity-[0.06] mix-blend-multiply">
        <ParallaxElement speed={0.15} scaleSpeed={0.04} className="w-full h-[115%] -top-[7%] relative">
          <Image
            src="/images/planta-molienda-industrial.webp"
            alt="Grupo Mimesa - Producción Agroindustrial en Venezuela"
            fill
            priority
            className="object-cover object-center scale-105"
          />
        </ParallaxElement>
      </div>

      {/* 3. Subtle Brand Ambient Glow Orbs */}
      <GlowOrb color="cyan" className="-top-32 -left-32 w-[500px] h-[500px] opacity-15 z-0" />
      <GlowOrb color="lime" className="bottom-0 right-0 w-[450px] h-[450px] opacity-12 z-0" />

      {/* 4. Subtle background micro-dot grid for corporate polish */}
      <div
        className="absolute inset-0 opacity-[0.04] pointer-events-none z-0 bg-repeat"
        style={{
          backgroundImage:
            "radial-gradient(circle at 1px 1px, #0e2440 1px, transparent 0)",
          backgroundSize: "32px 32px",
        }}
      />

      {/* 5. Hero Content with Brand Colored Elements */}
      <HeroContent />
    </section>
  );
}
