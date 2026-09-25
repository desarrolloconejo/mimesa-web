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

      {/* 2. Contact Section (Seamlessly integrated when includeContact is true) */}
      {includeContact && (
        <section id="contacto" className="relative z-10 overflow-hidden">
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/textures/TEXTURA6.webp"
              alt=""
              aria-hidden="true"
              fill
              loading="eager"
              priority
              unoptimized
              className="object-cover object-center w-full h-full opacity-85 mix-blend-normal"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-[#0e2440]/50 via-[#183c6b]/25 to-[#0e2440]/80 pointer-events-none" />
          </div>
          <div className="relative z-10">
            <ContactoContent showBackground={false} />
          </div>
        </section>
      )}

      {/* 3. Footer Bar Navigation Content with Dedicated Sharp Texture */}
      <div className="relative z-20 overflow-hidden border-t border-white/10">
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/textures/TEXTURA1.webp"
            alt=""
            aria-hidden="true"
            fill
            loading="eager"
            priority
            unoptimized
            className="object-cover object-bottom w-full h-full opacity-90 mix-blend-normal"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#050e19]/90 via-[#0e2440]/60 to-[#0e2440]/40 pointer-events-none" />
        </div>

        {/* Sprout Watermark in powdery white chalk */}
        <div className="absolute -bottom-20 -left-16 opacity-[0.10] pointer-events-none z-0">
          <MimesaSprout size={420} variant="white" />
        </div>

        {/* Footer Content */}
        <div className="relative z-10">
          <FooterContent />
        </div>
      </div>
    </footer>
  );
}
