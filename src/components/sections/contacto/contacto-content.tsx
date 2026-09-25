"use client";

import React from "react";
import Image from "next/image";
import { CONTACTO_DATA } from "./contacto-data";
import { ContactoForm } from "./contacto-form";
import { ParallaxElement } from "@/components/ui/parallax-element";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { MimesaLeafLime, MimesaLeafGreen, MimesaSprout } from "@/components/ui/organic-shapes";
import { FadeIn } from "@/components/ui/fade-in";

interface ContactoContentProps {
  showBackground?: boolean;
}

export function ContactoContent({ showBackground = false }: ContactoContentProps) {
  return (
    <div className={`w-full relative overflow-hidden text-white select-none py-16 sm:py-20 lg:py-24 ${showBackground ? "bg-[#0e2440]" : "bg-transparent"}`}>
      
      {/* Authentic Cyanotype Smooth Texture Background Layer (Only rendered if showBackground is true) */}
      {showBackground && (
        <>
          <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
            <Image
              src="/images/textures/TEXTURA6.webp"
              alt=""
              aria-hidden="true"
              fill
              priority
              className="object-cover object-center w-full h-full opacity-90 mix-blend-normal"
            />
          </div>
          <div
            className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
            style={{
              backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
              backgroundSize: "160px 160px",
            }}
          />
          <div className="absolute inset-0 bg-gradient-to-b from-[#0e2440]/80 via-[#183c6b]/50 to-[#0e2440]/90 pointer-events-none z-0" />
        </>
      )}

      {/* Powdery White Ambient Sprout Background Accent */}
      <div className="absolute -top-16 -right-16 opacity-15 pointer-events-none hidden lg:block z-0">
        <MimesaSprout size={450} variant="white" />
      </div>

      {/* Colossal Parallax Watermark Text in Background */}
      <div className="absolute top-8 left-1/2 -translate-x-1/2 pointer-events-none select-none z-0 overflow-hidden w-full text-center">
        <ParallaxElement speed={-0.3} horizontalSpeed={0.12} fadeEffect="in-out">
          <span className="text-[100px] sm:text-[160px] md:text-[220px] font-black text-white/[0.03] uppercase tracking-tighter leading-none block">
            CONECTA
          </span>
        </ParallaxElement>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-12">
        
        {/* Section Header with Stepped Velocities */}
        <FadeIn direction="up" delay={0.08} className="max-w-2xl space-y-3">
          <ParallaxElement speed={0.24} fadeEffect="in-out">
            <span className="text-xs font-black uppercase tracking-widest text-[#30deda]">
              {CONTACTO_DATA.badge}
            </span>
          </ParallaxElement>

          <ParallaxElement speed={0.18} fadeEffect="in-out">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-[1.14]">
              {CONTACTO_DATA.headline}
            </h2>
          </ParallaxElement>

          <ParallaxElement speed={0.12} fadeEffect="in-out">
            <p className="text-sm sm:text-base text-gray-200 font-normal leading-relaxed">
              {CONTACTO_DATA.description}
            </p>
          </ParallaxElement>
        </FadeIn>

        {/* Balanced Two-Column Layout: Information & Form with Equal Heights and Fade Effect */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 items-stretch relative">
          
          {/* Decorative Powdery White Lime Leaf at Top-Left */}
          <div className="absolute -top-10 -left-6 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={-0.28} rotateSpeed={0.25} fadeEffect="in-out">
              <MimesaLeafLime size={110} variant="white" />
            </ParallaxElement>
          </div>

          {/* Decorative Powdery White Green Leaf at Bottom-Right */}
          <div className="absolute -bottom-8 -right-6 z-20 pointer-events-none hidden sm:block">
            <ParallaxElement speed={0.32} rotateSpeed={-0.2} fadeEffect="in-out">
              <MimesaLeafGreen size={95} variant="white" />
            </ParallaxElement>
          </div>

          {/* ========================================================
              LEFT COLUMN: Corporate Contact Information Card
             ======================================================== */}
          <FadeIn direction="up" delay={0.12} className="lg:col-span-5 h-full relative">
            <ParallaxElement speed={0.06} className="h-full">
              <div className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30 space-y-8">
            
            <div className="space-y-6">
              <div className="space-y-1">
                <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
                  Canales Corporativos
                </h3>
                <p className="text-xs sm:text-sm text-gray-300">
                  Comunícate de manera directa con nuestros departamentos comercial y administrativo.
                </p>
              </div>

              <div className="space-y-5 pt-2">
                {/* Sede Corporativa */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#30deda] shrink-0 group-hover:bg-[#02aeaa]/20 transition-colors">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Sede Corporativa</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-0.5 leading-relaxed">
                      Caracas, Miranda, Venezuela. Cobertura agroindustrial a nivel nacional.
                    </p>
                  </div>
                </div>

                {/* Atención Telefónica */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#30deda] shrink-0 group-hover:bg-[#02aeaa]/20 transition-colors">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Atención Telefónica</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                      +58 (212) 000-0000
                    </p>
                    <span className="text-[11px] text-gray-400 block">Línea directa comercial</span>
                  </div>
                </div>

                {/* Correo Oficial */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#30deda] shrink-0 group-hover:bg-[#02aeaa]/20 transition-colors">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Correo Oficial</h4>
                    <a
                      href="mailto:contacto@grupomimesa.com"
                      className="text-xs sm:text-sm text-[#30deda] hover:underline mt-0.5 block"
                    >
                      contacto@grupomimesa.com
                    </a>
                    <span className="text-[11px] text-gray-400 block">Atención a clientes y aliados</span>
                  </div>
                </div>

                {/* Horario de Atención */}
                <div className="flex items-start gap-4 group">
                  <div className="w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-[#30deda] shrink-0 group-hover:bg-[#02aeaa]/20 transition-colors">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Horario Operativo</h4>
                    <p className="text-xs sm:text-sm text-gray-300 mt-0.5">
                      Lunes a Viernes: 8:00 AM – 5:00 PM
                    </p>
                    <span className="text-[11px] text-gray-400 block">Hora local de Venezuela (HLV)</span>
                  </div>
                </div>
              </div>
            </div>

            {/* SLA / Quality Assurance Badge at bottom */}
            <div className="p-4 rounded-2xl bg-white/[0.04] border border-white/10 flex items-center gap-3">
              <span className="relative flex h-3 w-3 shrink-0">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#95c11e] opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-[#95c11e]" />
              </span>
              <div className="text-xs">
                <span className="font-bold text-white block">Atención comercial activa</span>
                <span className="text-[11px] text-gray-400">Respuesta garantizada en menos de 24h hábiles</span>
              </div>
            </div>
            </div>
            </ParallaxElement>
          </FadeIn>

          {/* ========================================================
              RIGHT COLUMN: Dark Glass Contact Form (Balanced Height)
             ======================================================== */}
          <FadeIn direction="up" delay={0.16} className="lg:col-span-7 h-full">
            <ParallaxElement speed={0.06} className="h-full">
              <ContactoForm />
            </ParallaxElement>
          </FadeIn>

        </div>

      </div>
    </div>
  );
}
