import React from "react";
import { QuienesSomosContent } from "./quienes-somos-content";
import {
  GlowOrb,
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function QuienesSomosWrapper() {
  return (
    <section
      id="quienes-somos"
      className="relative overflow-hidden bg-gradient-to-b from-white via-[#f3f9f6] to-white"
    >
      {/* Ambient Lighting Orbs */}
      <GlowOrb color="green" className="top-1/4 -left-48 w-[700px] h-[700px] opacity-15" />
      <GlowOrb color="lime" className="top-2/3 -right-48 w-[650px] h-[650px] opacity-15" />
      <GlowOrb color="cyan" className="bottom-10 left-1/4 w-[600px] h-[600px] opacity-15" />

      {/* Subtle Floating Parallax Background Brand Shapes */}
      <div className="absolute top-20 right-8 pointer-events-none hidden lg:block opacity-75">
        <ParallaxElement speed={-0.3} rotateSpeed={0.3}>
          <MimesaLeafGreen size={140} />
        </ParallaxElement>
      </div>

      <div className="absolute top-1/2 left-4 pointer-events-none hidden lg:block opacity-75">
        <ParallaxElement speed={0.3} rotateSpeed={-0.2}>
          <MimesaLeafLime size={150} />
        </ParallaxElement>
      </div>

      <div className="absolute bottom-24 right-12 pointer-events-none hidden lg:block opacity-75">
        <ParallaxElement speed={-0.25} rotateSpeed={0.3}>
          <MimesaDotCyan size={60} />
        </ParallaxElement>
      </div>

      <QuienesSomosContent />
    </section>
  );
}
