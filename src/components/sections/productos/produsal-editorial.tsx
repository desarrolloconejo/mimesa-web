"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Mountain, Sun, Factory } from "lucide-react";
import { PRODUSAL_DATA } from "./productos-data";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MimesaLeafLime } from "@/components/ui/organic-shapes";

export function ProdusalEditorial() {
  const { title, subtitle, description, metrics, href } = PRODUSAL_DATA;

  return (
    <div className="space-y-10 lg:space-y-14 pt-12 border-t border-gray-100 relative">
      {/* Chapter Watermark */}
      <div className="absolute -top-6 right-12 pointer-events-none select-none z-0 overflow-hidden text-right hidden md:block">
        <ParallaxElement speed={-0.2} horizontalSpeed={0.08} fadeEffect="in-out">
          <span className="text-[70px] sm:text-[110px] lg:text-[150px] font-black text-[#02afab]/[0.03] uppercase tracking-tighter leading-none block">
            PRODUSAL
          </span>
        </ParallaxElement>
      </div>

      {/* Chapter 02 Header */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-6 border-b border-gray-100 relative z-10">
        <div className="space-y-3 max-w-3xl">
          <ParallaxElement speed={0.24} fadeEffect="in-out">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab] block">
              02 • División Salina & Agroindustrial
            </span>
          </ParallaxElement>
          <ParallaxElement speed={0.18} fadeEffect="in-out">
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight leading-tight">
              {title}: {subtitle}
            </h3>
          </ParallaxElement>
          <ParallaxElement speed={0.12} fadeEffect="in-out">
            <p className="text-base text-gray-600 font-light leading-relaxed">
              {description}
            </p>
          </ParallaxElement>
        </div>

        <ParallaxElement speed={0.06} fadeEffect="in-out">
          <Link
            href={href}
            className="inline-flex items-center gap-2 px-6 py-3.5 rounded-full bg-[#02afab] hover:bg-[#009539] text-white text-xs sm:text-sm font-bold shadow-lg shadow-[#02afab]/20 hover:shadow-xl transition-all duration-300 w-fit group hover:-translate-y-0.5"
          >
            <span>Conocer Complejo Produsal</span>
            <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
          </Link>
        </ParallaxElement>
      </div>

      {/* 3 Clean Metrics Cards (Cascading differential speeds: 0.16, 0.10, 0.04) */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6 relative z-10">
        {metrics.map((metric, idx) => {
          const Icon = metric.icon;
          const cardSpeeds = [0.16, 0.10, 0.04];
          const cardSpeed = cardSpeeds[idx] ?? 0.08;
          return (
            <ParallaxElement key={idx} speed={cardSpeed} fadeEffect="in-out" className="h-full">
              <div
                className="h-full p-6 sm:p-8 rounded-3xl bg-[#f8faf9] hover:bg-white border border-slate-150/70 hover:border-[#02afab]/40 shadow-xs hover:shadow-xl transition-all duration-300 hover:-translate-y-1 space-y-3 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-[11px] font-extrabold uppercase tracking-wider text-gray-400">
                    {metric.unit}
                  </span>
                </div>

                <div className="space-y-1 pt-2">
                  <h4 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight">
                    {metric.value}
                  </h4>
                  <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                    {metric.label}
                  </p>
                </div>
              </div>
            </ParallaxElement>
          );
        })}
      </div>

      {/* Full-Width Panoramic Photography with Overhanging 3D Floating Element */}
      <div className="relative w-full pt-4 pb-12">
        {/* Floating Lime Leaf at Top-Right */}
        <div className="absolute -top-6 -right-6 z-20 pointer-events-none hidden sm:block">
          <ParallaxElement speed={-0.30} rotateSpeed={-0.25} fadeEffect="in-out">
            <MimesaLeafLime size={110} />
          </ParallaxElement>
        </div>

        {/* Panoramic Salinas Photo with Counter-Parallax */}
        <ParallaxElement speed={-0.06} fadeEffect="in-out" className="w-full">
          <div className="relative w-full h-[380px] sm:h-[480px] lg:h-[560px] rounded-3xl lg:rounded-[2.5rem] overflow-hidden shadow-2xl border-4 border-white bg-white group">
            <Image
              src="/images/produsal-salinas.webp"
              alt="Complejo de sal solar Produsal en Los Olivitos Zulia"
              fill
              className="object-cover object-center group-hover:scale-105 transition-transform duration-1000 ease-out"
              sizes="100vw"
              priority={false}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/80 via-[#1a3c6a]/15 to-transparent pointer-events-none" />
          </div>
        </ParallaxElement>

        {/* Overhanging Protruding Floating Bottom Card (Speed 0.26) */}
        <div className="absolute -bottom-4 sm:-bottom-6 inset-x-4 sm:inset-x-10 z-20 max-w-2xl pointer-events-auto">
          <ParallaxElement speed={0.26} fadeEffect="in-out">
            <div className="p-6 sm:p-8 rounded-3xl bg-white/95 backdrop-blur-md border border-white/80 shadow-2xl text-[#1a3c6a] space-y-2">
              <span className="text-xs font-bold uppercase tracking-widest text-[#009539] block">
                Complejo de Producción de Sal Solar Los Olivitos
              </span>
              <h4 className="text-xl sm:text-2xl font-black text-[#1a3c6a]">
                Una de las plantas salinas por evaporación solar más modernas del mundo
              </h4>
              <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                Abastecimiento estratégico de sal pura y de grado industrial para toda Venezuela y mercados internacionales.
              </p>
            </div>
          </ParallaxElement>
        </div>
      </div>
    </div>
  );
}
