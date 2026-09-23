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
import { TrabajaHero } from "@/components/sections/trabaja-con-nosotros/trabaja-hero";

export const metadata = {
  title: "Trabaja con nosotros | Grupo Mimesa - Talento y Oportunidades",
  description:
    "Únete al equipo humano de Grupo Mimesa. Conoce nuestras áreas de oportunidad, cultura laboral e impulsa tu desarrollo en la industria agroalimentaria de Venezuela.",
};

export default function TrabajaConNosotrosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">

        {/* ========================================================
            1. HERO CIANOTIPIA (Slide 11, 12, 15)
           ======================================================== */}
        <TrabajaHero />

        {/* ========================================================
            2. ÁREAS DE DESARROLLO Y FORMULARIO DE POSTULACIÓN (Columnas de Igual Tamaño 50/50)
           ======================================================== */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* Columna Izquierda: Información de Oportunidades y Canales (Mismo tamaño que el formulario) */}
            <FadeIn direction="right" className="w-full flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-3 pr-4 sm:pr-8 lg:pr-10">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539]">
                  Oportunidades de Empleo
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#183c6b] tracking-tight">
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
                    <div className="w-2 h-2 rounded-full bg-[#02aeaa] mt-2 shrink-0 group-hover:scale-150 transition-transform" />
                    <div className="space-y-0.5">
                      <h4 className="text-sm font-bold text-[#183c6b] group-hover:text-[#02aeaa] transition-colors">
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
                  <div className="w-10 h-10 rounded-xl bg-[#02aeaa]/10 text-[#02aeaa] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-xs font-extrabold uppercase tracking-wider text-gray-400">
                      Envío Directo de CV (PDF)
                    </h4>
                    <a
                      href={`mailto:${TRABAJA_DATA.email}?subject=Postulaci%C3%B3n%20Laboral%20-%20Grupo%20Mimesa`}
                      className="text-sm sm:text-base font-bold text-[#183c6b] hover:text-[#02aeaa] transition-colors break-all"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#183c6b]/80 via-transparent to-transparent pointer-events-none" />
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
