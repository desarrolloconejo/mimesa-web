import React from "react";
import { AtributosCtaContent } from "./atributos-cta-content";
import { AtributosFixedBg } from "./atributos-fixed-bg";

export function AtributosCtaWrapper() {
  return (
    <section
      id="atributos"
      className="relative overflow-hidden bg-[#0e2440] text-white"
    >
      {/* Background Canvas */}
      <AtributosFixedBg />

      {/* Foreground Content */}
      <AtributosCtaContent />
    </section>
  );
}
