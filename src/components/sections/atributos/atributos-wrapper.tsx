import React from "react";
import { AtributosContent } from "./atributos-content";
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function AtributosWrapper() {
  return (
    <section
      id="atributos-detalle"
      className="relative overflow-clip bg-gradient-to-b from-white via-[#f9fbf9] to-white"
    >
      {/* Ambient Lighting Orbs */}
      <GlowOrb color="cyan" className="top-1/4 -left-48 w-[600px] h-[600px] opacity-15" />
      <GlowOrb color="lime" className="bottom-1/3 -right-48 w-[550px] h-[550px] opacity-15" />
      <GlowOrb color="green" className="bottom-10 left-1/4 w-[500px] h-[500px] opacity-10" />

      {/* Floating Organic Brand Elements with Parallax */}
      <div className="absolute top-20 left-6 pointer-events-none hidden xl:block opacity-50">
        <ParallaxElement speed={-0.25} rotateSpeed={0.2} fadeEffect="in-out">
          <MimesaLeafLime size={100} />
        </ParallaxElement>
      </div>
      <div className="absolute bottom-28 left-12 pointer-events-none hidden xl:block opacity-50">
        <ParallaxElement speed={0.3} rotateSpeed={-0.25} fadeEffect="in-out">
          <MimesaLeafGreen size={110} />
        </ParallaxElement>
      </div>
      <div className="absolute top-1/2 left-8 pointer-events-none hidden xl:block opacity-60">
        <ParallaxElement speed={0.2} rotateSpeed={-0.15} fadeEffect="in-out">
          <MimesaDotCyan size={42} />
        </ParallaxElement>
      </div>

      <AtributosContent />
    </section>
  );
}
