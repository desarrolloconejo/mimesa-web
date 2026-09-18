import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  ChevronRight,
} from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { ContactoForm } from "@/components/sections/contacto/contacto-form";
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
  title: "Contacto | Grupo Mimesa - Producción y Distribución de Alimentos",
  description:
    "Ponte en contacto directo con Grupo Mimesa. Canales de atención comercial, ventas mayoristas, sal industrial Produsal y alianzas en toda Venezuela.",
};

export default function ContactoPage() {
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
          speed={-0.12}
          floatAnimation="gentle"
          className="top-24 right-8 lg:right-16 hidden lg:block opacity-45"
        >
          <MimesaLeafLime size={115} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.16}
          floatAnimation="reverse"
          className="top-40 left-8 hidden lg:block opacity-40"
        >
          <MimesaDotGreen size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.18}
          floatAnimation="reverse"
          className="top-[45%] left-6 hidden lg:block opacity-50"
        >
          <MimesaDotCyan size={46} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.22}
          floatAnimation="sway"
          className="top-[52%] -right-4 hidden lg:block opacity-40"
        >
          <MimesaLeafGreen size={105} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.1}
          floatAnimation="gentle"
          className="bottom-48 left-12 hidden lg:block opacity-35"
        >
          <MimesaLeafLime size={90} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.14}
          floatAnimation="reverse"
          className="bottom-32 right-14 hidden lg:block opacity-45"
        >
          <MimesaDotLime size={36} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.05}
          floatAnimation="none"
          className="top-[35%] right-1/4 hidden xl:block opacity-[0.04]"
        >
          <MimesaSprout size={480} />
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
            <span className="text-[#1a3c6a] font-bold">Contacto</span>
          </nav>

            <FadeIn className="max-w-4xl space-y-6 sm:space-y-8">
              {/* Kicker Editorial: Solo Color y Texto */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab] block">
                Canales de Atención Directa
              </span>

              {/* Título Principal con Espacio Respirable */}
              <h1 className="text-4xl sm:text-6xl lg:text-7xl font-black text-[#1a3c6a] tracking-tight leading-[1.06]">
                Ponte en contacto <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
                  con Grupo Mimesa
                </span>
              </h1>

              {/* Texto Descriptivo con Mayor Separación */}
              <p className="text-lg sm:text-xl text-gray-600 font-light leading-relaxed max-w-2xl pt-2">
                Nuestro equipo comercial, agroindustrial y administrativo está a tu entera disposición para atender requerimientos comerciales, distribución nacional o alianzas estratégicas en toda Venezuela.
              </p>
            </FadeIn>
        </section>

        {/* ========================================================
            2. CONTENIDO PRINCIPAL: Diseño Abierto y Fluido (Sin Cajitas Rígidas)
           ======================================================== */}
        <section className="relative pb-28 sm:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Canales Oficiales en Formato Editorial Abierto (Sin cajas ni bordes) */}
            <FadeIn direction="right" className="lg:col-span-5 space-y-10 py-2">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab]">
                  Información Institucional
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                  Sede y Canales Oficiales
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed pt-1">
                  Atención oportuna para clientes, proveedores e industrias en todo el territorio nacional.
                </p>
              </div>

              {/* Lista Abierta y Espaciada de Canales (Sin marcos negros) */}
              <div className="space-y-8">
                {/* Sede Principal */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center shrink-0 group-hover:bg-[#02afab] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Sede Principal</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Zona Industrial, Caracas, Miranda, Venezuela.
                    </p>
                    <span className="text-xs text-[#02afab] font-medium block">
                      Despacho y logística a nivel nacional
                    </span>
                  </div>
                </div>

                {/* Atención Telefónica */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Atención Telefónica</h3>
                    <p className="text-base font-bold text-gray-800">
                      +58 (212) 000-0000
                    </p>
                    <span className="text-xs text-gray-500 block">
                      Línea comercial directa y WhatsApp corporativo
                    </span>
                  </div>
                </div>

                {/* Correos Oficiales */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#94c11e]/15 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Correos Institucionales</h3>
                    <div className="space-y-1 text-sm">
                      <a
                        href="mailto:contacto@grupomimesa.com"
                        className="block text-[#02afab] hover:underline font-semibold"
                      >
                        contacto@grupomimesa.com
                      </a>
                      <a
                        href="mailto:ventas@grupomimesa.com"
                        className="block text-gray-600 hover:text-[#02afab] transition-colors"
                      >
                        ventas@grupomimesa.com
                      </a>
                      <a
                        href="mailto:reclutamiento_venezuela@grupomimesa.com"
                        className="block text-gray-500 hover:text-[#02afab] transition-colors text-xs pt-0.5"
                      >
                        reclutamiento_venezuela@grupomimesa.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horario Operativo */}
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#1a3c6a]/8 text-[#1a3c6a] flex items-center justify-center shrink-0 group-hover:bg-[#1a3c6a] group-hover:text-white transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#1a3c6a]">Horario de Atención</h3>
                    <p className="text-sm text-gray-700">
                      Lunes a Viernes: 8:00 AM – 5:00 PM
                    </p>
                    <span className="text-xs text-gray-400 block">
                      Hora local de Venezuela (HLV)
                    </span>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Right Column: Formulario con Diseño Suave y Elevado (Sin bordes duros) */}
            <FadeIn direction="left" delay={100} className="lg:col-span-7">
              <ContactoForm
                variant="light"
                title="Formulario de Contacto"
                subtitle="Selecciona tu área de interés y completa tus datos. Te contactaremos oportunamente."
              />
            </FadeIn>

          </div>
        </section>

      </main>

      {/* Footer Corporativo */}
      <FooterWrapper />
    </div>
  );
}
