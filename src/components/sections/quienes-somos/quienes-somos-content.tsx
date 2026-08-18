"use client";

import React from "react";
import Image from "next/image";
import {
  Sparkles,
  Utensils,
  History,
  Building2,
  Wheat,
  ArrowRight,
} from "lucide-react";
import { ParallaxElement } from "@/components/ui/parallax-element";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
} from "@/components/ui/organic-shapes";

export function QuienesSomosContent() {
  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 space-y-32 md:space-y-48">
      
      {/* Giant Parallax Watermark Text in Background */}
      <div className="absolute top-10 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <ParallaxElement speed={-0.35} horizontalSpeed={0.15} fadeEffect="in-out" fadeIntensity={1.0}>
          <span className="text-[120px] sm:text-[180px] md:text-[240px] font-black text-[#1a3c6a]/[0.03] uppercase tracking-tighter leading-none block">
            MIMESA
          </span>
        </ParallaxElement>
      </div>

      {/* ========================================================
          BLOCK 1: ¿Quiénes Somos? (Especialización & Unidades)
         ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Text Box with Multi-Layer Parallax Reactions (6 cols) */}
        <div className="lg:col-span-6 space-y-6">
          
          {/* Title Parallax Layer */}
          <ParallaxElement speed={0.28} fadeEffect="in-out" fadeIntensity={1.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1a3c6a] leading-[1.08] tracking-tight">
              ¿Quiénes{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
                somos?
              </span>
            </h2>
          </ParallaxElement>

          {/* Narrative Paragraph Parallax Layer */}
          <ParallaxElement speed={0.20} fadeEffect="in-out" fadeIntensity={1.0}>
            <p className="text-lg md:text-xl text-gray-700 leading-relaxed font-normal">
              Somos un <strong className="text-[#1a3c6a] font-bold">grupo empresarial especializado en producción de alimentos</strong>, conformado por diversas unidades de negocio que brindan productos y soluciones para impactar vidas y ayudar a enriquecer a Venezuela.
            </p>
          </ParallaxElement>

          {/* Interactive Feature Panels Parallax Layer */}
          <ParallaxElement speed={0.12} fadeEffect="in-out" fadeIntensity={1.0}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="p-5 rounded-2xl bg-white border border-[#1a3c6a]/10 shadow-xs hover:shadow-lg hover:border-[#02afab] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center mb-3 group-hover:bg-[#02afab] group-hover:text-white transition-all duration-300">
                  <Building2 className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1a3c6a]">Diversas Unidades</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Especializadas en toda la cadena de valor agroindustrial.
                </p>
              </div>

              <div className="p-5 rounded-2xl bg-white border border-[#1a3c6a]/10 shadow-xs hover:shadow-lg hover:border-[#94c11e] transition-all duration-300 group">
                <div className="w-12 h-12 rounded-xl bg-[#94c11e]/15 text-[#009539] flex items-center justify-center mb-3 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                  <Wheat className="w-6 h-6" />
                </div>
                <h3 className="text-base font-bold text-[#1a3c6a]">Impacto en Vidas</h3>
                <p className="text-xs text-gray-500 mt-1.5 leading-relaxed">
                  Nutrición y soluciones para enriquecer al país día a día.
                </p>
              </div>
            </div>
          </ParallaxElement>

        </div>

        {/* Right: Solid High-Quality Image Card Framed by Mimesa Brand Symbol (6 cols) */}
        <div className="lg:col-span-6 relative">
          
          {/* Complete Mimesa Sprout floating at Top-Right */}
          <div className="absolute -top-12 -right-8 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.3} rotateSpeed={0.3} fadeEffect="in-out" fadeIntensity={1.1}>
              <MimesaSprout size={130} />
            </ParallaxElement>
          </div>

          {/* Floating Lime Leaf at Bottom-Left */}
          <div className="absolute -bottom-8 -left-6 z-20 pointer-events-none">
            <ParallaxElement speed={0.35} rotateSpeed={-0.3} fadeEffect="in-out" fadeIntensity={1.1}>
              <MimesaLeafLime size={90} />
            </ParallaxElement>
          </div>

          {/* Clean, Crisp Image with Subtle Counter-Parallax and In-Out Fade */}
          <ParallaxElement speed={-0.08} fadeEffect="in-out" fadeIntensity={0.95}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src="/images/food-innovation.webp"
                alt="Unidades de negocio y desarrollo de alimentos Grupo Mimesa"
                width={640}
                height={480}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/80 via-transparent to-transparent opacity-60 group-hover:opacity-30 transition-opacity" />
              
              <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl glass-panel text-[#1a3c6a]">
                <p className="text-xs font-bold uppercase tracking-wider text-[#02afab]">
                  Innovación y Vanguardia
                </p>
                <p className="text-sm font-semibold">
                  Soluciones agroalimentarias que enriquecen a Venezuela
                </p>
              </div>
            </div>
          </ParallaxElement>

          {/* Floating Pill with Subtle Parallax */}
          <div className="absolute -bottom-6 -left-4 z-20 hidden sm:block">
            <ParallaxElement speed={0.25} fadeEffect="in-out" fadeIntensity={1.0}>
              <div className="glass-panel p-4 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#009539] text-white">
                  <Sparkles className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a3c6a]">Compromiso País</p>
                  <p className="text-[11px] text-gray-500">Impulsando el desarrollo</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>
      </div>

      {/* ========================================================
          BLOCK 2: ¿Por qué Mimesa? (Historia, Origen y Familia)
         ======================================================== */}
      <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Left: Solid Crisp Family Table Visual with Brand Symbol (6 cols) */}
        <div className="lg:col-span-6 relative order-2 lg:order-1">
          
          {/* Subtle Parallax Mimesa Green Leaf Shape */}
          <div className="absolute -top-10 -right-6 z-20 pointer-events-none">
            <ParallaxElement speed={-0.35} rotateSpeed={-0.3} fadeEffect="in-out" fadeIntensity={1.1}>
              <MimesaLeafGreen size={100} />
            </ParallaxElement>
          </div>

          <div className="absolute -bottom-8 -left-6 z-0 hidden sm:block">
            <div className="w-56 h-56 rounded-full bg-[#02afab]/15 blur-3xl" />
          </div>

          {/* Crisp Family Table Picture with Counter-Parallax */}
          <ParallaxElement speed={-0.08} fadeEffect="in-out" fadeIntensity={0.95}>
            <div className="relative z-10 rounded-3xl overflow-hidden shadow-2xl border-4 border-white bg-white group">
              <Image
                src="/images/family-table.webp"
                alt="Familia compartiendo en la mesa venezolana con productos Mimesa"
                width={640}
                height={480}
                className="w-full h-auto object-cover transform group-hover:scale-105 transition-transform duration-700"
              />
              
              <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/85 via-[#1a3c6a]/20 to-transparent opacity-75" />

              <div className="absolute top-5 left-5">
                <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-[#1a3c6a] shadow-lg">
                  <History className="w-3.5 h-3.5 text-[#02afab]" />
                  Nuestra Historia
                </span>
              </div>

              <div className="absolute bottom-5 left-5 right-5 p-5 rounded-2xl glass-panel-dark text-white border border-white/20">
                <p className="text-xs uppercase font-bold tracking-widest text-[#30deda]">
                  El Valor de la Mesa
                </p>
                <p className="text-sm font-medium text-gray-200 mt-1">
                  Unidos como una familia en la mesa de sus hogares
                </p>
              </div>
            </div>
          </ParallaxElement>

          {/* Floating Pill */}
          <div className="absolute -bottom-6 right-6 z-20 hidden sm:block">
            <ParallaxElement speed={0.25} fadeEffect="in-out" fadeIntensity={1.0}>
              <div className="glass-panel px-5 py-3.5 rounded-2xl shadow-xl border border-white/80 flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-[#94c11e] text-[#1a3c6a]">
                  <Utensils className="w-5 h-5" />
                </div>
                <div>
                  <p className="text-xs font-bold text-[#1a3c6a]">En cada hogar</p>
                  <p className="text-[11px] text-gray-500">Uniendo a las familias</p>
                </div>
              </div>
            </ParallaxElement>
          </div>
        </div>

        {/* Right: Story Narrative Box with Multi-Layer Parallax (6 cols) */}
        <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
          
          {/* Title Layer */}
          <ParallaxElement speed={0.28} fadeEffect="in-out" fadeIntensity={1.1}>
            <h2 className="text-3xl sm:text-5xl md:text-6xl font-black text-[#1a3c6a] leading-[1.08] tracking-tight">
              ¿Por qué{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#1a3c6a] via-[#02afab] to-[#94c11e]">
                Mimesa?
              </span>
            </h2>
          </ParallaxElement>

          {/* Narrative Text Layer */}
          <ParallaxElement speed={0.20} fadeEffect="in-out" fadeIntensity={1.0}>
            <div className="space-y-4 text-base sm:text-lg text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="text-[#1a3c6a] font-bold">Mimesa</strong> es un nombre que viene de uno de nuestros primeros productos que nos abrió las puertas al mercado venezolano. Es parte de nuestra historia y es recordado por nuestras audiencias.
              </p>
              <p>
                Honramos nuestra trayectoria en el país y nos unimos para trabajar en un solo propósito, <span className="text-[#1a3c6a] font-semibold italic">tal como una familia se une en la mesa de sus hogares.</span>
              </p>
            </div>
          </ParallaxElement>

          {/* Pillars List Parallax Layer */}
          <ParallaxElement speed={0.12} fadeEffect="in-out" fadeIntensity={1.0}>
            <div className="pt-2 space-y-3.5">
              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-[#1a3c6a]/10 hover:border-[#02afab] transition-all duration-300 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#02afab]/10 text-[#02afab] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">01</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1a3c6a]">Historia y Reconocimiento</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Un legado que nació con nuestro primer gran producto.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-[#1a3c6a]/10 hover:border-[#009539] transition-all duration-300 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">02</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1a3c6a]">Un Solo Propósito</h3>
                  <p className="text-xs text-gray-500 mt-0.5">Trabajamos juntos por el bienestar agroalimentario nacional.</p>
                </div>
              </div>

              <div className="flex items-start gap-4 p-4 rounded-2xl bg-white/90 border border-[#1a3c6a]/10 hover:border-[#94c11e] transition-all duration-300 shadow-xs">
                <div className="w-8 h-8 rounded-full bg-[#94c11e]/15 text-[#009539] flex items-center justify-center shrink-0 mt-0.5">
                  <span className="text-xs font-bold">03</span>
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#1a3c6a]">La Mesa de los Hogares</h3>
                  <p className="text-xs text-gray-500 mt-0.5">El punto de encuentro donde nace la calidez de la familia.</p>
                </div>
              </div>
            </div>
          </ParallaxElement>

        </div>
      </div>

      {/* ========================================================
          BLOCK 3: Full-Width Corporate Statement Banner
         ======================================================== */}
      <ParallaxElement speed={0.16} fadeEffect="in-out" fadeIntensity={0.9}>
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1a3c6a] via-[#122b4d] to-[#0a182b] text-white p-8 sm:p-14 lg:p-18 shadow-2xl border border-white/10">
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-[#02afab]/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-[#94c11e]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <h3 className="text-2xl sm:text-4xl font-black text-white leading-tight">
                Construyendo un futuro más próspero en la mesa de cada familia venezolana.
              </h3>
              <p className="text-sm sm:text-base text-gray-300 max-w-2xl font-light">
                Calidad que trasciende generaciones. Conoce cómo nuestras unidades de negocio trabajan en sincronía por Venezuela.
              </p>
            </div>

            <div className="lg:col-span-4 flex justify-start lg:justify-end">
              <a
                href="#contacto"
                className="inline-flex items-center gap-3 px-8 py-4 rounded-full text-sm font-bold bg-[#02afab] hover:bg-[#94c11e] text-[#0a182b] transition-all duration-300 shadow-xl shadow-[#02afab]/25 hover:shadow-[#94c11e]/30 hover:-translate-y-1 active:translate-y-0"
              >
                <span>Contáctanos</span>
                <ArrowRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </ParallaxElement>

    </div>
  );
}
