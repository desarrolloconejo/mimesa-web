import React from "react";
import Image from "next/image";
import { FooterContent } from "./footer-content";
import { ContactoContent } from "@/components/sections/contacto/contacto-content";
import { BleedingBrandLeaves, MimesaSprout } from "@/components/ui/organic-shapes";

interface FooterWrapperProps {
  includeContact?: boolean;
}

export function FooterWrapper({ includeContact = false }: FooterWrapperProps) {
  return (
    <footer className="relative bg-[#0e2440] text-white overflow-hidden select-none">
      {/* 1. Base Prussian Navy Layer */}
      <div className="absolute inset-0 bg-[#0e2440] z-0" />

      {/* 2. Authentic Cyanotype Smooth Paper Wash Texture (Single Unbroken Image Canvas) */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/textures/cyanotype-smooth.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-90 mix-blend-normal"
        />
      </div>

      {/* 3. Fine Paper Grain & Dust Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* 4. Depth Vignette matching Heros */}
      <div className="absolute inset-0 bg-gradient-to-b from-[#0e2440]/60 via-[#183c6b]/30 to-[#050e19]/90 pointer-events-none z-0" />

      {/* 5. Bleeding Brand Leaves strictly in POWDERY WHITE */}
      <BleedingBrandLeaves
        position="top-right"
        variant="white"
        className="opacity-95 z-10"
      />

      {/* 6. Floating Powdery White Dust Dot Accents */}
      <div className="absolute top-1/4 right-1/4 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.7)] blur-[0.4px] pointer-events-none z-10" />
      <div className="absolute top-[38%] right-[20%] w-2 h-2 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.5)] blur-[0.3px] pointer-events-none z-10" />

      {/* 7. Sprout Watermark in powdery white chalk */}
      <div className="absolute -bottom-20 -left-16 opacity-[0.10] pointer-events-none z-0">
        <MimesaSprout size={420} variant="white" />
      </div>

      {/* 8. Contact Section (Seamlessly integrated when includeContact is true) */}
      {includeContact && (
        <section id="contacto" className="relative z-10">
          <ContactoContent showBackground={false} />
        </section>
      )}

      {/* 9. Footer Content */}
      <div className="relative z-20">
        <FooterContent />
      </div>
    </footer>
  );
}
