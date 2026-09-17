import React from "react";
import { AtributosCtaContent } from "./atributos-cta-content";
import { AtributosFixedBg } from "./atributos-fixed-bg";

export function AtributosCtaWrapper() {
  return (
    <section
      id="atributos"
      className="relative overflow-hidden bg-[#16365f] text-white"
    >
      {/* 
        Fixed Background Canvas:
        Stays locked to the screen viewport while the user scrolls through this section.
      */}
      <AtributosFixedBg />

      {/* Foreground Content (Scrolls naturally over the fixed background) */}
      <AtributosCtaContent />
    </section>
  );
}
