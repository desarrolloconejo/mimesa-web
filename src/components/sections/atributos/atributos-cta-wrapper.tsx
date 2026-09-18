import React from "react";
import { AtributosCtaContent } from "./atributos-cta-content";
import { AtributosFixedBg } from "./atributos-fixed-bg";

export function AtributosCtaWrapper() {
  return (
    <section
      id="atributos"
      className="relative overflow-hidden bg-[#16365f] text-white [clip-path:inset(0_0_0_0)]"
      style={{ clipPath: "inset(0 0 0 0)" }}
    >
      {/* 
        Fixed Background Canvas:
        Stays 100% locked to the screen viewport via native CSS clip-path windowing.
        Zero JS, zero scroll lag, zero seams on fast scroll.
      */}
      <AtributosFixedBg />

      {/* Foreground Content (Scrolls naturally over the fixed background) */}
      <AtributosCtaContent />
    </section>
  );
}
