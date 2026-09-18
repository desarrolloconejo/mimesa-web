import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight, Mail } from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { TrabajaForm } from "@/components/sections/trabaja-con-nosotros/trabaja-form";
import { TRABAJA_DATA } from "@/components/sections/trabaja-con-nosotros/trabaja-data";
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaLeafGreen,
  MimesaDotCyan,
  MimesaDotGreen,
  MimesaDotLime,
  MimesaSprout,
} from "@/components/ui/organic-shapes";
import { ParallaxShape } from "@/components/ui/parallax-shape";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Trabaja con nosotros | Grupo Mimesa - Talento y Oportunidades",
  description:
    "Únete al equipo humano de Grupo Mimesa. Conoce nuestras áreas de oportunidad, cultura laboral e impulsa tu desarrollo en la industria agroalimentaria de Venezuela.",
};

export default function TrabajaConNosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02afab] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="cyan" className="top-12 -left-48 w-[650px] h-[650px] opacity-20" />
        <GlowOrb color="green" className="top-1/3 -right-48 w-[600px] h-[600px] opacity-15" />
        <GlowOrb color="lime" className="bottom-20 left-1/4 w-[550px] h-[550px] opacity-15" />

        {/* Parallax Floating Organic Brand Elements */}
        <ParallaxShape
          speed={-0.14}
          floatAnimation="gentle"
          className="top-24 right-8 lg:right-16 hidden lg:block opacity-45"
        >
          <MimesaLeafLime size={115} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.18}
          floatAnimation="reverse"
          className="top-36 left-10 hidden lg:block opacity-40"
        >
          <MimesaDotGreen size={36} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.16}
          floatAnimation="reverse"
          className="top-[46%] left-6 hidden lg:block opacity-50"
        >
          <MimesaDotCyan size={44} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.2}
          floatAnimation="sway"
          className="top-[54%] -right-4 hidden lg:block opacity-40"
        >
          <MimesaLeafGreen size={100} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.1}
          floatAnimation="gentle"
          className="bottom-40 left-10 hidden lg:block opacity-35"
        >
          <MimesaLeafLime size={85} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.15}
          floatAnimation="reverse"
          className="bottom-28 right-12 hidden lg:block opacity-45"
        >
          <MimesaDotLime size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.06}
          floatAnimation="none"
          className="top-[40%] right-1/4 hidden xl:block opacity-[0.04]"
        >
          <MimesaSprout size={460} />
        </ParallaxShape>

        {/* ========================================================
            1. HERO HEADER: Misma Altura y Espacio Generoso que Sobre Nosotros y Productos
           ======================================================== */}
        <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          {/* Breadcrumb */}
          <nav className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8 sm:mb-12 select-none">
            <Link href="/" className="hover:text-[#02afab] transition-colors">
              Inicio
            </Link>
            <ChevronRight className="w-3 h-3 text-gray-300" />
            <span className="text-[#1a3c6a] font-bold">Trabaja con nosotros</span>
          </nav>

          <FadeIn className="max-w-4xl space-y-6 sm:space-y-8">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
              {TRABAJA_DATA.badge}
            </span>

            {/* Título Principal en Exactamente Dos Líneas */}
            <h1 className="text-2xl sm:text-4xl lg:text-5xl xl:text-[3.35rem] font-black text-[#1a3c6a] tracking-tight leading-[1.15]">
              <span className="block">Construyamos juntos el futuro</span>
              <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
                agroalimentario de Venezuela
              </span>
            </h1>

            {/* Texto Descriptivo con Espacio a la Derecha */}
            <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-xl pt-1">
              En Grupo Mimesa creemos en el poder transformador de las personas. Fomentamos un entorno de trabajo colaborativo, de constante aprendizaje y orientado al mérito, donde cada talento suma al bienestar y la nutrición de nuestro país.
            </p>
          </FadeIn>
        </section>

        {/* ========================================================
            2. ÁREAS DE DESARROLLO Y FORMULARIO DE POSTULACIÓN (Columnas de Igual Tamaño 50/50)
           ======================================================== */}
        <section className="relative pb-24 sm:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* Columna Izquierda: Información de Oportunidades y Canales (Mismo tamaño que el formulario) */}
            <FadeIn direction="right" className="w-full flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-3 pr-4 sm:pr-8 lg:pr-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539]">
                  Oportunidades de Empleo
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                  Áreas de Desarrollo Profesional
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Operamos de manera integral en toda la cadena productiva. Conoce los principales sectores donde puedes sumar tu talento:
                </p>
              </div>

              {/* Lista Abierta de Áreas */}
              <div className="space-y-4">
                {TRABAJA_DATA.jobAreas.map((area, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 group">
                    <div className="w-2 h-2 rounded-full bg-[#02afab] mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-[#1a3c6a] group-hover:text-[#02afab] transition-colors">
                        {area.name}
                      </h4>
                      <p className="text-xs text-gray-500 font-light leading-relaxed">
                        {area.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Canal Directo de Correo para Envío de CV en PDF */}
              <div className="pt-4 space-y-3 border-t border-slate-100">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                      Envío Directo de CV (PDF)
                    </h4>
                    <a
                      href={`mailto:${TRABAJA_DATA.email}?subject=Postulaci%C3%B3n%20Laboral%20-%20Grupo%20Mimesa`}
                      className="text-sm sm:text-base font-bold text-[#1a3c6a] hover:text-[#02afab] transition-colors break-all"
                    >
                      {TRABAJA_DATA.email}
                    </a>
                  </div>
                </div>
                <p className="text-xs text-gray-400 font-light">
                  Incluye en el asunto del correo tu profesión y el área o ciudad de tu preferencia.
                </p>
              </div>

              {/* Tarjeta Fotográfica Documental de Laboratorio */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[16/10] w-full hidden sm:block">
                <Image
                  src="/images/talento-laboratorio.jpg"
                  alt="Equipo de científicos y analistas de calidad en Grupo Mimesa"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 text-white space-y-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#30deda]">
                    Rigor y Ciencia
                  </span>
                  <p className="text-xs font-semibold">
                    Comprometidos con los más estrictos estándares de calidad agroalimentaria.
                  </p>
                </div>
              </div>

            </FadeIn>

            {/* Columna Derecha: Formulario de Postulación de Talento (Mismo tamaño que la izquierda) */}
            <FadeIn direction="left" delay={100} className="w-full h-full">
              <TrabajaForm className="h-full" />
            </FadeIn>

          </div>
        </section>
      </main>

      {/* Footer Corporativo */}
      <FooterWrapper />
    </div>
  );
}
