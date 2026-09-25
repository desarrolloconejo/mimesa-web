import React from "react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { NLPStackingCards } from "@/components/sections/programa-nlp/nlp-stacking-cards";

export const metadata = {
  title: "Programa Nutriendo la Prosperidad | Grupo Mimesa",
  description:
    "Descubre el Programa Nutriendo la Prosperidad de Grupo Mimesa: +780.000 porciones servidas, +30.000 canastas entregadas y alimentación escolar con propósito en alianza con el DVC.",
};

export default function ProgramaNLPPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#07172b] selection:bg-[#95c11e] selection:text-[#0c223f]">
      {/* Header Corporativo Global */}
      <HeaderWrapper />

      {/* Main Full-Width Stacking Cards Experience */}
      <main className="flex-1 w-full relative">
        <NLPStackingCards />
      </main>

      {/* Footer Corporativo Global */}
      <FooterWrapper />
    </div>
  );
}
