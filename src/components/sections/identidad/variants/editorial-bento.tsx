"use client";

import React, { useState } from "react";
import Image from "next/image";
import { Sparkles } from "lucide-react";
import { IDENTIDAD_DATA } from "../identidad-data";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
} from "@/components/ui/organic-shapes";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";

// Helper function to calculate SVG arc segment for thick donut quadrants
function getArcSvgPath(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startAngleDeg: number,
  endAngleDeg: number
) {
  const toRad = (deg: number) => ((deg - 90) * Math.PI) / 180;
  const startRad = toRad(startAngleDeg);
  const endRad = toRad(endAngleDeg);

  const x1 = cx + rOuter * Math.cos(startRad);
  const y1 = cy + rOuter * Math.sin(startRad);
  const x2 = cx + rOuter * Math.cos(endRad);
  const y2 = cy + rOuter * Math.sin(endRad);

  const x3 = cx + rInner * Math.cos(endRad);
  const y3 = cy + rInner * Math.sin(endRad);
  const x4 = cx + rInner * Math.cos(startRad);
  const y4 = cy + rInner * Math.sin(startRad);

  const largeArcFlag = endAngleDeg - startAngleDeg <= 180 ? "0" : "1";

  return [
    `M ${x1} ${y1}`,
    `A ${rOuter} ${rOuter} 0 ${largeArcFlag} 1 ${x2} ${y2}`,
    `L ${x3} ${y3}`,
    `A ${rInner} ${rInner} 0 ${largeArcFlag} 0 ${x4} ${y4}`,
    "Z",
  ].join(" ");
}

// 4 Pillars definition for the 4-Quadrant Ring
const PILARES_RUEDA = [
  {
    id: "confiabilidad",
    num: "01",
    title: "Confiabilidad",
    subtitle: "Procesos certificados y entregas consistentes",
    detailedStory:
      "Operamos bajo estrictos protocolos de calidad e inocuidad alimentaria. Nuestra logística integrada asegura abastecimiento continuo y relaciones de mutua confianza con cada socio.",
    color: "#30deda",
    startAngle: 3,
    endAngle: 87,
    midAngle: 45,
    tag: "Calidad Certificada",
  },
  {
    id: "desempeno",
    num: "02",
    title: "Desempeño de productos",
    subtitle: "Alta eficiencia nutricional e industrial",
    detailedStory:
      "Formulamos soluciones nutricionales de máxima conversión y rendimiento. Cada producto está testeado para superar los estándares de la industria agroalimentaria nacional.",
    color: "#95c11e",
    startAngle: 93,
    endAngle: 177,
    midAngle: 135,
    tag: "Rendimiento Probado",
  },
  {
    id: "conocimiento",
    num: "03",
    title: "Conocimiento y apoyo técnico",
    subtitle: "Acompañamiento experto en cada etapa",
    detailedStory:
      "Ponemos a disposición de nuestros clientes un equipo multidisciplinario de ingenieros y especialistas que asesoran en campo y planta para optimizar cada proceso productivo.",
    color: "#009539",
    startAngle: 183,
    endAngle: 267,
    midAngle: 225,
    tag: "Asesoría Experta",
  },
  {
    id: "transparencia",
    num: "04",
    title: "Transparencia",
    subtitle: "Relaciones éticas y trazabilidad clara",
    detailedStory:
      "Fomentamos una cultura de comunicación abierta, trazabilidad completa de materias primas y acuerdos justos que consolidan alianzas sólidas y duraderas.",
    color: "#38bdf8",
    startAngle: 273,
    endAngle: 357,
    midAngle: 315,
    tag: "Trazabilidad Total",
  },
];

export function EditorialBento() {
  const { proposito, valores, negocio, filosofia } = IDENTIDAD_DATA;
  const [activePilarIndex, setActivePilarIndex] = useState<number>(0);

  const activePilar = PILARES_RUEDA[activePilarIndex];

  return (
    <div className="w-full space-y-0">
      
      {/* ========================================================
          1. HERO DE PROPÓSITO: Sección Limpia sobre Fondo Blanco
         ======================================================== */}
      <div className="relative w-full min-h-[480px] sm:min-h-[540px] lg:min-h-[600px] flex items-center justify-center bg-white overflow-hidden py-24 sm:py-32 border-b border-slate-100">
        
        {/* Floating Brand Elements moving dynamically with scroll */}
        <div className="absolute top-4 sm:top-6 -right-8 sm:-right-10 pointer-events-none opacity-25 hidden sm:block z-0">
          <ParallaxElement speed={0.15} rotateSpeed={-0.12}>
            <MimesaSprout size={360} />
          </ParallaxElement>
        </div>

        <div className="absolute top-14 left-8 sm:left-16 pointer-events-none opacity-90 hidden sm:block z-10">
          <ParallaxElement speed={0.18} rotateSpeed={0.25}>
            <MimesaLeafLime size={110} />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-12 right-8 sm:right-16 pointer-events-none opacity-90 hidden sm:block z-10">
          <ParallaxElement speed={-0.15} rotateSpeed={-0.2}>
            <MimesaLeafGreen size={105} />
          </ParallaxElement>
        </div>

        <div className="absolute bottom-14 left-12 pointer-events-none opacity-30 hidden sm:block z-0">
          <ParallaxElement speed={0.20} rotateSpeed={0.15}>
            <MimesaLeafLime size={80} />
          </ParallaxElement>
        </div>

        {/* Centered Content */}
        <FadeIn direction="up" delay={0.08} className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center space-y-6">
          {/* Kicker Subtitle */}
          <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#009539] block">
            {proposito.kicker}
          </span>

          {/* Centered Title */}
          <h2 className="text-4xl sm:text-6xl xl:text-7xl font-black text-[#0e2440] tracking-tight leading-[1.05]">
            {proposito.titleLine1}{" "}
            <span className="block text-[#02aeaa]">
              {proposito.titleLine2}
            </span>
          </h2>

          {/* Centered Description */}
          <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-2xl mx-auto">
            {proposito.description}
          </p>
        </FadeIn>
      </div>

      {/* ========================================================
          2. SECCIÓN COMPLETA AZUL (ANCHO COMPLETO):
             - Nuestro Negocio
             - Lo Que Nos Hace Únicos
             - Círculo Grueso Picado en 4 Cuadrantes Interactivos
         ======================================================== */}
      <div className="relative w-full bg-[#0e2440] text-white py-24 sm:py-32 overflow-hidden border-y border-white/10">
        
        {/* Authentic Cyanotype Splatters Texture Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/textures/TEXTURA1.webp"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center w-full h-full opacity-90 mix-blend-normal"
          />
        </div>

        {/* Fine Paper Grain Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* Depth Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2440]/90 via-[#183c6b]/65 to-[#0e2440]/85 pointer-events-none z-0" />
        
        {/* Ambient Brand Glow Orbs */}
        <div className="absolute top-1/4 -right-24 w-[550px] h-[550px] bg-[#02aeaa]/15 rounded-full blur-3xl pointer-events-none" />
        <div className="absolute bottom-1/4 -left-24 w-[550px] h-[550px] bg-[#95c11e]/10 rounded-full blur-3xl pointer-events-none" />
        {/* Ambient Powdery White Sprout Background Accent */}
        <div className="absolute -right-16 top-1/3 opacity-20 pointer-events-none hidden lg:block">
          <MimesaSprout size={420} variant="white" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-20">
          
          {/* Top Level: Nuestro Negocio y Lo Que Nos Hace Únicos */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center pb-12 border-b border-white/15">
            
            {/* Left (7 cols): Nuestro Negocio */}
            <div className="lg:col-span-7 space-y-5 relative z-10">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#30deda] block">
                {negocio.badge}
              </span>

              <h3 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
                Creamos marcas fuertes para proveer{" "}
                <span className="text-[#95c11e]">
                  soluciones nutricionales y de salud
                </span>
              </h3>

              <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed max-w-xl">
                Proveemos soluciones integrales que brindan bienestar a las familias venezolanas y máxima rentabilidad a la agroindustria.
              </p>
            </div>

            {/* Right (5 cols): Lo Que Nos Hace Únicos */}
            <div className="lg:col-span-5 relative">
              {/* Floating Powdery White Leaf sobresaliendo over Top-Right of Card */}
              <div className="absolute -top-8 -right-6 z-20 pointer-events-none hidden sm:block">
                <ParallaxElement speed={0.32} rotateSpeed={0.25} fadeEffect="in-out">
                  <MimesaLeafLime size={80} variant="white" />
                </ParallaxElement>
              </div>

              <ParallaxElement speed={0.08} fadeEffect="in-out">
                <div className="relative rounded-3xl p-7 sm:p-9 bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-extrabold uppercase tracking-widest text-[#95c11e] block">
                      {negocio.uniqueBadge}
                    </span>
                  </div>

                  <h4 className="text-xl sm:text-2xl font-black text-white leading-snug">
                    {negocio.uniqueText}
                  </h4>
                </div>
              </ParallaxElement>
            </div>

          </div>

          {/* Middle Level: CÍRCULO GRUESO PICADO EN 4 (Nuestra Oferta de Valor) */}
          <div className="space-y-10">
            
            {/* Header */}
            <ParallaxElement speed={0.16} fadeEffect="in-out">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#30deda] block">
                  Nuestra Oferta de Valor
                </span>
                <h4 className="text-3xl sm:text-4xl font-black text-white">
                  Rueda de Valor Cuatripartita
                </h4>
              </div>
            </ParallaxElement>

            {/* Interactive Stage: Circle on Left + Active Spotlight on Right (items-start for zero vertical shift) */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start relative">
              
              {/* Left (5 cols): The Thick 4-Quadrant Circle Ring with Differential Parallax */}
              <div className="lg:col-span-5 relative flex flex-col items-center justify-center">
                {/* Floating Powdery White Leaf sobresaliendo */}
                <div className="absolute -bottom-8 -left-6 z-20 pointer-events-none hidden sm:block">
                  <ParallaxElement speed={0.34} rotateSpeed={-0.3} fadeEffect="in-out">
                    <MimesaLeafGreen size={85} variant="white" />
                  </ParallaxElement>
                </div>

                <ParallaxElement speed={0.16} fadeEffect="in-out" className="w-full flex items-center justify-center">
                  <div className="relative w-full max-w-[340px] sm:max-w-[380px] aspect-square flex items-center justify-center select-none">
                    
                    {/* SVG Wheel with 4 Thick Segments */}
                    <svg
                      viewBox="0 0 360 360"
                      className="w-full h-full drop-shadow-2xl"
                    >
                      <defs>
                        <filter id="active-glow" x="-20%" y="-20%" width="140%" height="140%">
                          <feGaussianBlur stdDeviation="8" result="blur" />
                          <feComposite in="SourceGraphic" in2="blur" operator="over" />
                        </filter>
                      </defs>

                      {PILARES_RUEDA.map((pilar, idx) => {
                        const isActive = activePilarIndex === idx;
                        // Path with cx=180, cy=180, rInner=105, rOuter=160 (55px thick ring!)
                        const pathData = getArcSvgPath(
                          180,
                          180,
                          105,
                          160,
                          pilar.startAngle,
                          pilar.endAngle
                        );

                        // Text coordinates at midpoint of arc (radius 132px)
                        const rad = ((pilar.midAngle - 90) * Math.PI) / 180;
                        const textX = 180 + 132 * Math.cos(rad);
                        const textY = 180 + 132 * Math.sin(rad);

                        return (
                          <g
                            key={pilar.id}
                            onClick={() => setActivePilarIndex(idx)}
                            className="cursor-pointer transition-all duration-300"
                          >
                            {/* Segment Arc */}
                            <path
                              d={pathData}
                              fill={pilar.color}
                              filter={isActive ? "url(#active-glow)" : undefined}
                              className={`transition-all duration-300 ${
                                isActive
                                  ? "opacity-100"
                                  : "opacity-30 hover:opacity-60"
                              }`}
                            />

                            {/* Number text on segment */}
                            <text
                              x={textX}
                              y={textY + 4}
                              textAnchor="middle"
                              fill={isActive ? "#0a182b" : "#ffffff"}
                              fontSize="13"
                              fontWeight="900"
                              className="pointer-events-none select-none"
                            >
                              {pilar.num}
                            </text>
                          </g>
                        );
                      })}

                      {/* Subtle Dividing Lines across circle center */}
                      <line
                        x1="180"
                        y1="10"
                        x2="180"
                        y2="350"
                        stroke="#102746"
                        strokeWidth="6"
                        className="pointer-events-none opacity-80"
                      />
                      <line
                        x1="10"
                        y1="180"
                        x2="350"
                        y2="180"
                        stroke="#102746"
                        strokeWidth="6"
                        className="pointer-events-none opacity-80"
                      />
                    </svg>

                    {/* Inner Lens Hole in the Donut Center */}
                    <div className="absolute w-44 h-44 sm:w-48 sm:h-48 rounded-full bg-gradient-to-br from-[#102746] to-[#0a182b] border-2 border-white/20 shadow-inner flex flex-col items-center justify-center p-5 text-center pointer-events-none space-y-1.5">
                      <span
                        className="text-xs sm:text-sm font-black uppercase tracking-widest block transition-colors duration-300"
                        style={{ color: activePilar.color }}
                      >
                        Pilar {activePilar.num}
                      </span>

                      <span className="text-sm sm:text-base font-black text-white leading-tight max-w-[150px] transition-colors duration-300">
                        {activePilar.title}
                      </span>

                      <span
                        className="text-[11px] font-semibold text-gray-300 block max-w-[140px] opacity-80"
                      >
                        {activePilar.tag}
                      </span>
                    </div>

                  </div>
                </ParallaxElement>

              </div>

              {/* Right (7 cols): Active Spotlight Display & Tab Selectors with Differential Speeds */}
              <div className="lg:col-span-7 space-y-6">
                
                {/* Active Card Card Display with its own Parallax */}
                <ParallaxElement speed={0.08} fadeEffect="in-out">
                  <div
                    className="min-h-[290px] sm:min-h-[270px] lg:min-h-[290px] p-8 sm:p-10 rounded-3xl bg-white/10 backdrop-blur-xl border shadow-2xl transition-all duration-300 relative overflow-hidden flex flex-col justify-between space-y-5"
                    style={{
                      borderColor: `${activePilar.color}50`,
                    }}
                  >
                    {/* Subtle Background Accent Glow */}
                    <div
                      className="absolute -top-12 -right-12 w-48 h-48 rounded-full blur-3xl opacity-25 pointer-events-none transition-colors duration-500"
                      style={{ backgroundColor: activePilar.color }}
                    />

                    {/* Top Badge & Number */}
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2.5">
                        <span
                          className="w-8 h-8 rounded-xl flex items-center justify-center text-xs font-black text-[#0a182b] transition-colors duration-300"
                          style={{ backgroundColor: activePilar.color }}
                        >
                          {activePilar.num}
                        </span>
                        <span
                          className="px-3 py-1 rounded-full text-xs font-bold uppercase tracking-wider bg-white/10 border border-white/15"
                          style={{ color: activePilar.color }}
                        >
                          {activePilar.tag}
                        </span>
                      </div>
                    </div>

                    {/* Title & Subtitle (Consistent Height) */}
                    <div className="space-y-1 min-h-[4rem] flex flex-col justify-center">
                      <h4 className="text-2xl sm:text-3xl font-black text-white leading-tight">
                        {activePilar.title}
                      </h4>
                      <p
                        className="text-sm font-semibold transition-colors duration-300"
                        style={{ color: activePilar.color }}
                      >
                        {activePilar.subtitle}
                      </p>
                    </div>

                    {/* Detailed Explanation (Consistent Height) */}
                    <p className="text-sm sm:text-base text-gray-200 font-light leading-relaxed min-h-[4.5rem]">
                      {activePilar.detailedStory}
                    </p>
                  </div>
                </ParallaxElement>

                {/* 4 Interactive Selector Buttons with its own subtle Parallax */}
                <ParallaxElement speed={0.03} fadeEffect="in-out">
                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
                    {PILARES_RUEDA.map((pilar, idx) => {
                      const isActive = activePilarIndex === idx;

                      return (
                        <button
                          key={pilar.id}
                          onClick={() => setActivePilarIndex(idx)}
                          className={`p-3 rounded-2xl text-left transition-all duration-200 border cursor-pointer ${
                            isActive
                              ? "bg-white/20 shadow-lg ring-1 ring-white/30"
                              : "bg-white/5 hover:bg-white/10 border-white/10"
                          }`}
                          style={{
                            borderColor: isActive ? pilar.color : undefined,
                          }}
                        >
                          <span
                            className="text-[10px] font-black uppercase tracking-wider block mb-1"
                            style={{ color: pilar.color }}
                          >
                            Pilar {pilar.num}
                          </span>
                          <p className="text-xs font-bold text-white truncate">
                            {pilar.title}
                          </p>
                        </button>
                      );
                    })}
                  </div>
                </ParallaxElement>

              </div>

            </div>

          </div>

        </div>

      </div>

      {/* ========================================================
          3. NUESTROS VALORES & FILOSOFÍA: Contenedor Estructurado
         ======================================================== */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-24 md:space-y-32 py-24 sm:py-32">
        
        {/* ========================================================
            3. NUESTROS VALORES: Posters Asimétricos (7/5 y 5/7)
           ======================================================== */}
        <div id="valores-mimesa" className="space-y-10">
          
          {/* Header */}
          <FadeIn direction="up" delay={0.08}>
            <ParallaxElement speed={0.16} fadeEffect="in-out">
              <div className="text-center max-w-2xl mx-auto space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
                  Principios Inmutables
                </span>
                <h3 className="text-3xl sm:text-5xl font-black text-[#183c6b] tracking-tight">
                  Nuestros Valores
                </h3>
                <p className="text-sm sm:text-base text-gray-500 font-light">
                  Cuatro pilares éticos que rigen nuestras relaciones humanas y nuestro compromiso con Venezuela.
                </p>
              </div>
            </ParallaxElement>
          </FadeIn>

          {/* Tier 1: Asymmetric Row (7 cols + 5 cols) */}
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* VALOR 1: INTEGRIDAD (7 cols) - Moves faster (0.16) */}
            <FadeIn direction="up" className="lg:col-span-7 h-full">
              <ParallaxElement speed={0.16} fadeEffect="in-out" className="h-full">
                <div className="h-full relative rounded-[2.5rem] p-8 sm:p-12 bg-[#0e2440] text-white shadow-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300 border border-white/10">
                  {/* Texture Background */}
                  <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
                    <Image
                      src="/images/textures/TEXTURA3.webp"
                      alt=""
                      aria-hidden="true"
                      fill
                      loading="eager"
                      priority
                      className="object-cover object-center w-full h-full opacity-60 mix-blend-normal"
                    />
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0a182b]/80 via-[#0a182b]/40 to-[#0a182b]/50 pointer-events-none z-0" />
                  <div className="absolute right-6 -bottom-6 text-[120px] font-black text-white/10 pointer-events-none select-none z-0">
                    01
                  </div>

                  <div className="relative z-10 flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-white/15 backdrop-blur-md text-xs font-bold uppercase tracking-wider text-[#30deda] border border-white/20">
                      01 • Coherencia y Ética
                    </span>
                  </div>

                  <div className="relative z-10 space-y-3 my-auto">
                    <h4 className="text-3xl sm:text-4xl font-black text-white drop-shadow-sm">
                      {valores[0].title}
                    </h4>
                    <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-xl">
                      {valores[0].description}
                    </p>
                  </div>
                </div>
              </ParallaxElement>
            </FadeIn>

            {/* VALOR 2: AGILIDAD (5 cols) - Moves calmer (0.06) */}
            <FadeIn direction="up" className="lg:col-span-5 h-full">
              <ParallaxElement speed={0.06} fadeEffect="in-out" className="h-full">
                <div className="h-full relative rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-white via-[#fafdf5] to-[#f2fbe7] border-2 border-[#95c11e]/40 shadow-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute right-4 -bottom-4 text-[110px] font-black text-[#95c11e]/10 pointer-events-none select-none">
                    02
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#95c11e]/15 text-xs font-bold uppercase tracking-wider text-[#009539] border border-[#95c11e]/30">
                      02 • Dinamismo y Adaptabilidad
                    </span>
                  </div>

                  <div className="space-y-3 my-auto">
                    <h4 className="text-3xl sm:text-4xl font-black text-[#183c6b]">
                      {valores[1].title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                      {valores[1].description}
                    </p>
                  </div>
                </div>
              </ParallaxElement>
            </FadeIn>

          </FadeInStagger>

          {/* Floating Sprout Accent sobresaliendo between Tier 1 and Tier 2 */}
          <div className="relative w-full flex justify-end pr-12 -my-6 pointer-events-none select-none z-20 hidden sm:flex">
            <ParallaxElement speed={0.32} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaLeafLime size={80} />
            </ParallaxElement>
          </div>

          {/* Tier 2: Inverted Asymmetric Row (5 cols + 7 cols) */}
          <FadeInStagger className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* VALOR 3: RESPETO (5 cols) - Moves at 0.14 */}
            <FadeIn direction="up" className="lg:col-span-5 h-full">
              <ParallaxElement speed={0.14} fadeEffect="in-out" className="h-full">
                <div className="h-full relative rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-white via-[#f4faf6] to-[#eaf5ee] border-2 border-[#009539]/30 shadow-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute right-4 -bottom-4 text-[110px] font-black text-[#009539]/10 pointer-events-none select-none">
                    03
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#009539]/10 text-xs font-bold uppercase tracking-wider text-[#009539] border border-[#009539]/20">
                      03 • Las Personas Primero
                    </span>
                  </div>

                  <div className="space-y-3 my-auto">
                    <h4 className="text-3xl sm:text-4xl font-black text-[#183c6b]">
                      {valores[2].title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                      {valores[2].description}
                    </p>
                  </div>
                </div>
              </ParallaxElement>
            </FadeIn>

            {/* VALOR 4: RESPONSABILIDAD (7 cols) - Moves at 0.05 */}
            <FadeIn direction="up" className="lg:col-span-7 h-full">
              <ParallaxElement speed={0.05} fadeEffect="in-out" className="h-full">
                <div className="h-full relative rounded-[2.5rem] p-8 sm:p-12 bg-gradient-to-br from-white via-[#f3f9f9] to-[#e8f6f6] border-2 border-[#02aeaa]/30 shadow-2xl overflow-hidden flex flex-col justify-between group hover:-translate-y-1 transition-all duration-300">
                  <div className="absolute right-6 -bottom-6 text-[120px] font-black text-[#02aeaa]/10 pointer-events-none select-none">
                    04
                  </div>

                  <div className="flex items-center justify-between mb-8">
                    <span className="px-3.5 py-1 rounded-full bg-[#02aeaa]/10 text-xs font-bold uppercase tracking-wider text-[#02aeaa] border border-[#02aeaa]/20">
                      04 • Resultados y Compromiso
                    </span>
                  </div>

                  <div className="space-y-3 my-auto">
                    <h4 className="text-3xl sm:text-4xl font-black text-[#183c6b]">
                      {valores[3].title}
                    </h4>
                    <p className="text-sm sm:text-base text-gray-700 font-normal leading-relaxed max-w-xl">
                      {valores[3].description}
                    </p>
                  </div>
                </div>
              </ParallaxElement>
            </FadeIn>

          </FadeInStagger>

        </div>

      </div>

      {/* ========================================================
          4. NUESTRA FILOSOFÍA: Sección a Ancho Completo (Sin Cuadro)
         ======================================================== */}
      <div className="w-full bg-white relative overflow-hidden border-t border-gray-100">
        
        {/* Subtle Ambient Sprout Background Accent */}
        <div className="absolute -top-24 -left-24 opacity-5 pointer-events-none hidden xl:block">
          <MimesaSprout size={480} />
        </div>

        <div className="w-full grid grid-cols-1 lg:grid-cols-12 min-h-[620px] lg:min-h-[760px] items-stretch">
          
          {/* Left Column (Text): Individual Parallax Elements */}
          <div className="lg:col-span-6 xl:col-span-7 flex items-center py-16 sm:py-20 lg:py-24 px-6 sm:px-12 lg:pl-16 xl:pl-28 lg:pr-12 relative z-10">
            <div className="max-w-2xl space-y-6">
              <ParallaxElement speed={0.24} fadeEffect="in-out">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
                  {filosofia.badge}
                </span>
              </ParallaxElement>

              <ParallaxElement speed={0.18} fadeEffect="in-out">
                <h3 className="text-3xl sm:text-5xl xl:text-6xl font-black text-[#183c6b] leading-[1.1] tracking-tight">
                  {filosofia.title}
                </h3>
              </ParallaxElement>

              <ParallaxElement speed={0.12} fadeEffect="in-out">
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  {filosofia.paragraph1}
                </p>
              </ParallaxElement>

              <ParallaxElement speed={0.07} fadeEffect="in-out">
                <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                  {filosofia.paragraph2}
                </p>
              </ParallaxElement>
            </div>
          </div>

          {/* Right Column (Images): Stacked with Floating Frosted Glass Badge sobresaliendo */}
          <div className="lg:col-span-6 xl:col-span-5 relative min-h-[500px] sm:min-h-[600px] lg:min-h-full overflow-hidden flex flex-col">
            
            {/* Floating Glass Badge sobresaliendo between the two photos */}
            <div className="absolute top-1/2 -translate-y-1/2 left-4 sm:left-8 z-30 pointer-events-none">
              <ParallaxElement speed={0.30} fadeEffect="in-out">
                <div className="glass-panel p-4 rounded-2xl shadow-2xl border border-white/80 flex items-center gap-3 bg-white/95 text-[#183c6b]">
                  <div className="p-2.5 rounded-xl bg-[#009539] text-white shadow-xs">
                    <Sparkles className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="text-xs font-black text-[#183c6b]">Ciencia & Vanguardia</p>
                    <p className="text-[11px] text-gray-500 font-medium">Control y desarrollo agroindustrial</p>
                  </div>
                </div>
              </ParallaxElement>
            </div>

            {/* Top Image: Presencia Comercial y Alianzas (50% height) */}
            <div className="relative h-1/2 w-full overflow-hidden">
              <Image
                src="/images/mimesa-stand-comercial.webp"
                alt="Equipo y presencia comercial de Grupo Mimesa en el sector agroalimentario"
                fill
                loading="eager"
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
            </div>

            {/* Bottom Image: Tecnología y Envasado Automatizado (50% height) */}
            <div className="relative h-1/2 w-full overflow-hidden border-t-2 border-white/20">
              <Image
                src="/images/linea-embotellado-krones.webp"
                alt="Tecnología de envasado automatizado y control industrial Grupo Mimesa"
                fill
                loading="eager"
                priority
                className="object-cover object-center"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/25 via-transparent to-transparent" />
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

          </div>

        </div>

      </div>

    </div>
  );
}
