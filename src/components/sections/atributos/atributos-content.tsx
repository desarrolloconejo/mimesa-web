"use client";

import React, { useState } from "react";
import Image from "next/image";
import { ATRIBUTOS_ITEMS } from "./atributos-data";
import { MimesaSprout, MimesaLeafLime, MimesaLeafGreen } from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";

export function AtributosContent() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <div className="w-full bg-white relative overflow-hidden">
      
      {/* Background Decorative Ambient Isotype */}
      <div className="absolute top-10 -left-20 opacity-5 pointer-events-none hidden xl:block select-none">
        <MimesaSprout size={500} />
      </div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[720px] lg:min-h-[860px] items-stretch">
        
        {/* ========================================================
            Left Column: 3 Atributos (Flexibilidad, Ética, Experiencia)
           ======================================================== */}
        <div className="lg:col-span-6 xl:col-span-7 flex flex-col justify-center py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:pl-16 xl:pl-24 lg:pr-12 relative z-10">
          <div className="max-w-2xl space-y-10">
            
            {/* Header / Intro Badge */}
            <div className="space-y-4">
              <ParallaxElement speed={0.24} fadeEffect="in-out">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
                  Pilares de Acción
                </span>
              </ParallaxElement>

              <ParallaxElement speed={0.18} fadeEffect="in-out">
                <h3 className="text-3xl sm:text-5xl font-black text-[#183c6b] leading-[1.1] tracking-tight">
                  Nuestros principios en cada paso
                </h3>
              </ParallaxElement>
            </div>

            {/* Atributos Cards Stack with Cascading Differential Parallax (se arma y desarma) */}
            <div className="space-y-6">
              {ATRIBUTOS_ITEMS.map((item, idx) => {
                const Icon = item.icon;
                const isHovered = hoveredId === item.id;
                // Wide differential cascade: Card 0 = 0.16, Card 1 = 0.10, Card 2 = 0.04
                const cardSpeed = 0.16 - idx * 0.06;

                return (
                  <ParallaxElement key={item.id} speed={cardSpeed} fadeEffect="in-out">
                    <div
                      onMouseEnter={() => setHoveredId(item.id)}
                      onMouseLeave={() => setHoveredId(null)}
                      className={`relative rounded-3xl p-6 sm:p-8 bg-gradient-to-br from-white to-[#f8fafc] border border-gray-100 shadow-sm transition-all duration-300 hover:shadow-xl hover:-translate-y-1 overflow-hidden group ${item.borderColor}`}
                    >
                      {/* Watermark Number */}
                      <div className="absolute right-4 -bottom-4 text-7xl sm:text-8xl font-black text-gray-100 pointer-events-none select-none group-hover:text-gray-200/80 transition-colors duration-300">
                        {item.num}
                      </div>

                      <div className="relative z-10 space-y-4">
                        {/* Top Bar: Icon + Badge */}
                        <div className="flex items-center justify-between">
                          <div className="flex items-center gap-3">
                            <div
                              className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-transform duration-300 group-hover:scale-110 shadow-xs`}
                              style={{ backgroundColor: `${item.color}18`, color: item.color }}
                            >
                              <Icon className="w-6 h-6" />
                            </div>
                            <div>
                              <span
                                className="text-xs font-bold uppercase tracking-wider px-2.5 py-1 rounded-full border"
                                style={{
                                  color: item.color,
                                  borderColor: `${item.color}35`,
                                  backgroundColor: `${item.color}10`,
                                }}
                              >
                                {item.badge}
                              </span>
                            </div>
                          </div>

                          <span className="text-sm font-bold text-gray-400 group-hover:text-[#183c6b] transition-colors duration-300">
                            {item.num}
                          </span>
                        </div>

                        {/* Title & Tagline */}
                        <div>
                          <h4 className="text-2xl sm:text-3xl font-black text-[#183c6b] tracking-tight">
                            {item.title}
                          </h4>
                          <p className="text-xs sm:text-sm font-semibold text-gray-500 mt-1">
                            {item.tagline}
                          </p>
                        </div>

                        {/* Main Narrative Text */}
                        <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </ParallaxElement>
                );
              })}
            </div>

          </div>
        </div>

        {/* ========================================================
            Right Column: Imagen Continua con Elementos Sobresaliendo
           ======================================================== */}
        <div className="lg:col-span-6 xl:col-span-5 relative min-h-[500px] sm:min-h-[600px] lg:min-h-full overflow-hidden flex flex-col bg-slate-100">
          
          {/* Main Photo: Solid, crisp, static view without scroll fade/parallax */}
          <div className="relative h-full w-full min-h-[500px] lg:min-h-full overflow-hidden">
            <Image
              src="/images/atributos-talento.webp"
              alt="Talento humano y equipo de producción agroindustrial Grupo Mimesa"
              fill
              className="object-cover object-center"
              sizes="(max-width: 1024px) 100vw, 45vw"
              priority={false}
            />
            {/* Subtle Gradient Overlays for Depth and Contrast */}
            <div className="absolute inset-0 bg-gradient-to-t from-[#183c6b]/40 via-transparent to-transparent pointer-events-none" />
            <div className="absolute inset-0 bg-gradient-to-r from-black/10 via-transparent to-black/15 pointer-events-none" />
          </div>

          {/* Floating Sprout sobresaliendo over Top-Left */}
          <div className="absolute top-8 left-8 z-30 pointer-events-none hidden sm:block">
            <ParallaxElement speed={0.34} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaSprout size={110} />
            </ParallaxElement>
          </div>

          {/* Desktop: Continuous Undulating S-Curve Wave on Left Edge */}
          <svg
            viewBox="0 0 120 1000"
            preserveAspectRatio="none"
            className="hidden lg:block absolute inset-y-0 -left-1 w-28 lg:w-36 xl:w-44 h-full z-20 pointer-events-none fill-white"
          >
            <path d="M 0,0 L 75,0 C 18,220 8,360 55,500 C 110,640 18,800 60,1000 L 0,1000 Z" />
          </svg>

          {/* Mobile: Top Wave Boundary */}
          <svg
            viewBox="0 0 1000 80"
            preserveAspectRatio="none"
            className="block lg:hidden absolute top-0 inset-x-0 w-full h-10 sm:h-14 z-20 pointer-events-none fill-white"
          >
            <path d="M 0,0 L 1000,0 L 1000,25 C 750,70 450,5 0,35 Z" />
          </svg>

          {/* Floating Frosted Glass Badge sobresaliendo and gliding over the photo with positive parallax */}
          <div className="absolute bottom-8 right-8 z-30 pointer-events-none">
            <ParallaxElement speed={0.28} fadeEffect="in-out">
              <div className="bg-white/95 hover:bg-white backdrop-blur-md p-4 sm:p-5 rounded-3xl border border-white/60 shadow-2xl max-w-xs transition-all duration-300">
                <div className="flex items-center gap-3.5">
                  <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 flex items-center justify-center shrink-0">
                    <MimesaSprout size={36} />
                  </div>
                  <div>
                    <p className="text-sm font-heading font-bold tracking-tight text-[#183c6b]">
                      Grupo Mimesa
                    </p>
                    <p className="text-xs sm:text-sm font-black text-[#009539]">
                      +35 Años de Experiencia y Calidad
                    </p>
                    <p className="text-[10px] text-gray-500 font-medium">
                      Talento 100% Venezolano
                    </p>
                  </div>
                </div>
              </div>
            </ParallaxElement>
          </div>

        </div>

      </div>

    </div>
  );
}
