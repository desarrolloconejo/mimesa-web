"use client";

import React from "react";
import Image from "next/image";
import { Users } from "lucide-react";
import { TRABAJA_DATA } from "./trabaja-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaLeafLime } from "@/components/ui/organic-shapes";

export function TrabajaContent() {
  return (
    <div className="w-full bg-white relative overflow-hidden select-none">
      {/* Colossal Parallax Watermark Text in Background */}
      <div className="absolute top-10 right-6 sm:right-12 pointer-events-none select-none z-0 overflow-hidden text-right hidden sm:block">
        <ParallaxElement speed={-0.25} horizontalSpeed={0.08} fadeEffect="in-out">
          <span className="text-[80px] sm:text-[130px] md:text-[170px] font-black text-[#16365f]/[0.025] uppercase tracking-tighter leading-none block">
            TALENTO
          </span>
        </ParallaxElement>
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[640px] lg:min-h-[760px] items-stretch">
        
        {/* ========================================================
            LEFT COLUMN: Continuous Organic Image with Floating Protrusions
           ======================================================== */}
        <div className="lg:col-span-5 xl:col-span-5 relative min-h-[440px] sm:min-h-[520px] lg:min-h-full flex flex-col bg-slate-100 order-2 lg:order-1">
          
          {/* Floating Organic Leaf at Top-Left */}
          <div className="absolute -top-8 -left-6 z-30 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.32} rotateSpeed={-0.25} fadeEffect="in-out">
              <MimesaLeafLime size={100} />
            </ParallaxElement>
          </div>

          <ParallaxElement speed={-0.08} fadeEffect="in-out" className="relative h-full w-full min-h-[440px] lg:min-h-full overflow-hidden">
            <Image
              src={TRABAJA_DATA.image.src}
              alt={TRABAJA_DATA.image.alt}
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 42vw"
              priority
            />
            {/* Subtle Gradient Overlays for Depth */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-l from-black/10 via-transparent to-transparent pointer-events-none" />
          </ParallaxElement>

          {/* Desktop: Continuous Undulating S-Curve continuing from Compromiso Social */}
          <svg
            viewBox="0 0 120 1000"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-y-0 -right-1 w-24 lg:w-32 xl:w-40 h-full z-20 pointer-events-none fill-white"
          >
            {/* Starts at top right (x=70) matching the exit point of Compromiso Social */}
            <path d="M 120,0 L 70,0 C 95,200 115,380 50,560 C 15,720 30,860 50,1000 L 120,1000 Z" />
          </svg>

          {/* Mobile: Bottom Wave Boundary */}
          <svg
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            className="block lg:hidden absolute bottom-0 inset-x-0 w-full h-10 sm:h-14 z-20 pointer-events-none fill-white"
          >
            <path d="M 0,80 L 1000,80 L 1000,25 C 750,70 450,5 0,35 Z" />
          </svg>

          {/* Protruding Floating Frosted Badge Sobresaliendo at Bottom-Left (Speed 0.28) */}
          <div className="absolute bottom-8 left-6 sm:left-10 z-30 pointer-events-none">
            <ParallaxElement speed={0.28} fadeEffect="in-out">
              <div className="p-4 rounded-2xl shadow-xl bg-white/95 backdrop-blur-md border border-white/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#009539] text-white shadow-xs">
                  <Users className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-black text-[#16365f]">Talento & Oportunidad</p>
                  <p className="text-[11px] text-gray-500 font-medium">Creciendo juntos con calidad</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* ========================================================
            RIGHT COLUMN: Pure Editorial Copywriting & Bullets (Stepped velocities)
           ======================================================== */}
        <div className="lg:col-span-7 xl:col-span-7 flex flex-col justify-center py-16 sm:py-24 lg:py-28 px-6 sm:px-12 lg:px-16 xl:px-24 relative z-10 order-1 lg:order-2">
          <div className="max-w-xl space-y-7">
            
            {/* Headline strictly in two lines */}
            <ParallaxElement speed={0.22} fadeEffect="in-out">
              <h2 className="text-3xl sm:text-4xl lg:text-[2.7rem] font-black text-[#16365f] tracking-tight leading-[1.16]">
                ¿Conoces a alguien que quiera <br className="hidden sm:inline" />
                sumarse a nuestro equipo?
              </h2>
            </ParallaxElement>

            {/* Subheading */}
            <ParallaxElement speed={0.15} fadeEffect="in-out">
              <p className="text-sm sm:text-base text-gray-700 font-normal">
                {TRABAJA_DATA.leadText}
              </p>
            </ParallaxElement>

            {/* Bullet Points with Classic Bullets */}
            <ParallaxElement speed={0.09} fadeEffect="in-out">
              <ul className="space-y-3.5 text-sm sm:text-[0.98rem] text-gray-700 font-normal leading-relaxed pl-1">
                {TRABAJA_DATA.bulletPoints.map((bullet, idx) => (
                  <li key={idx} className="flex items-start gap-3">
                    <span className="text-[#16365f] font-black text-base leading-tight select-none">
                      •
                    </span>
                    <span>{bullet}</span>
                  </li>
                ))}
              </ul>
            </ParallaxElement>

            {/* Invitation Text & Bold Email Link */}
            <ParallaxElement speed={0.03} fadeEffect="in-out">
              <div className="pt-2 space-y-3">
                <p className="text-sm sm:text-base text-gray-700 font-normal">
                  {TRABAJA_DATA.invitationText}
                </p>
                <a
                  href={`mailto:${TRABAJA_DATA.email}?subject=Postulaci%C3%B3n%20Laboral%20-%20Grupo%20Mimesa`}
                  className="inline-block text-base sm:text-lg lg:text-xl font-black text-[#16365f] hover:text-[#02afab] transition-colors focus:outline-none underline decoration-2 underline-offset-4"
                >
                  {TRABAJA_DATA.email}
                </a>
              </div>
            </ParallaxElement>

          </div>
        </div>

      </div>
    </div>
  );
}
