import React from "react";
import { ProductosContent } from "./productos-content";
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function ProductosWrapper() {
  return (
    <section
      id="productos"
      className="relative overflow-clip bg-gradient-to-b from-white via-[#f7faf8] to-white"
    >
      {/* Ambient Lighting Orbs */}
      <GlowOrb color="green" className="top-1/4 -right-48 w-[650px] h-[650px] opacity-15" />
      <GlowOrb color="cyan" className="top-2/3 -left-48 w-[600px] h-[600px] opacity-15" />
      <GlowOrb color="lime" className="bottom-16 right-1/4 w-[550px] h-[550px] opacity-10" />

      {/* Floating Organic Brand Elements with Parallax */}
      <div className="absolute top-28 left-6 pointer-events-none hidden xl:block opacity-50">
        <ParallaxElement speed={-0.25} rotateSpeed={0.2} fadeEffect="in-out">
          <MimesaLeafLime size={105} />
        </ParallaxElement>
      </div>
      <div className="absolute bottom-28 right-8 pointer-events-none hidden xl:block opacity-50">
        <ParallaxElement speed={0.28} rotateSpeed={-0.25} fadeEffect="in-out">
          <MimesaLeafGreen size={115} />
        </ParallaxElement>
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none hidden xl:block opacity-55">
        <ParallaxElement speed={0.18} rotateSpeed={-0.15} fadeEffect="in-out">
          <MimesaDotCyan size={42} />
        </ParallaxElement>
      </div>

      <ProductosContent />
    </section>
  );
}
