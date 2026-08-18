import React from "react";
import { FooterContent } from "./footer-content";
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";

export function FooterWrapper() {
  return (
    <footer
      id="contacto"
      className="relative bg-gradient-to-b from-[#1a3c6a] via-[#102747] to-[#0a182b] text-white overflow-hidden"
    >
      {/* Decorative Glow Orbs & Brand Shapes in Background */}
      <GlowOrb color="cyan" className="-top-32 -left-20 w-96 h-96 opacity-30" />
      <GlowOrb color="lime" className="bottom-0 -right-20 w-96 h-96 opacity-20" />

      <div className="absolute top-10 right-12 opacity-20 pointer-events-none rotate-12 hidden md:block">
        <MimesaLeafLime size={130} />
      </div>
      <div className="absolute bottom-16 left-8 opacity-20 pointer-events-none -rotate-12 hidden md:block">
        <MimesaDotCyan size={70} />
      </div>

      <FooterContent />
    </footer>
  );
}
