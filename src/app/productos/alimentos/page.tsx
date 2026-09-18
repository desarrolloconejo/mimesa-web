import React from "react";
import Link from "next/link";
import {
  ChevronRight,
  MapPin,
  Phone,
  Mail,
  Clock,
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
import { AlimentosCatalogView } from "@/components/sections/alimentos/alimentos-catalog-view";
import { IngredientesSection } from "@/components/sections/alimentos/ingredientes-section";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "División Alimentos | Portafolio de Marcas | Grupo Mimesa",
  description:
    "Conoce nuestras marcas líderes de consumo masivo: BlancaFlor, Ronco, Fiorentina, Vatel, Purilev, Los 3 Cochinitos y truvía. Nutrición y sabor para Venezuela.",
};

export default function AlimentosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#009539] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="green" className="top-12 -left-48 w-[650px] h-[650px] opacity-15" />
        <GlowOrb color="cyan" className="top-1/3 -right-48 w-[600px] h-[600px] opacity-15" />
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
          className="top-36 left-8 hidden lg:block opacity-40"
        >
          <MimesaDotGreen size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.18}
          floatAnimation="reverse"
          className="top-[25%] left-6 hidden lg:block opacity-45"
        >
          <MimesaDotCyan size={44} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.22}
          floatAnimation="sway"
          className="top-[32%] -right-4 hidden lg:block opacity-40"
        >
          <MimesaLeafGreen size={105} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.14}
          floatAnimation="gentle"
          className="top-[50%] left-8 hidden lg:block opacity-40"
        >
          <MimesaDotLime size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.18}
          floatAnimation="reverse"
          className="top-[58%] right-10 hidden lg:block opacity-40"
        >
          <MimesaLeafLime size={90} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.1}
          floatAnimation="sway"
          className="top-[75%] left-10 hidden lg:block opacity-40"
        >
          <MimesaDotGreen size={40} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.14}
          floatAnimation="reverse"
          className="bottom-32 right-12 hidden lg:block opacity-45"
        >
          <MimesaDotCyan size={42} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.05}
          floatAnimation="none"
          className="top-[45%] right-1/4 hidden xl:block opacity-[0.03]"
        >
          <MimesaSprout size={500} />
        </ParallaxShape>

        {/* ========================================================
            1. HERO: Altura estándar, alineado a la izquierda
           ======================================================== */}
        <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb: Solo texto y color */}
            <nav
              className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8 sm:mb-12 select-none"
              aria-label="Ruta de navegación"
            >
              <Link href="/" className="hover:text-[#009539] transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <Link href="/productos" className="hover:text-[#009539] transition-colors">
                Productos
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="text-[#1a3c6a] font-bold">División Alimentos</span>
            </nav>

            <FadeIn className="max-w-5xl space-y-6 sm:space-y-8 text-left">
              {/* Kicker Editorial: Solo Color y Texto */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
                División Alimentos • Consumo Masivo & Nutrición
              </span>

              {/* Título Principal en Exactamente Dos Líneas */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl xl:text-[3.85rem] font-black text-[#1a3c6a] tracking-tight leading-[1.12]">
                <span className="block">Nuestras marcas y alimentos</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#009539] via-[#02afab] to-[#94c11e]">
                  en la mesa de Venezuela
                </span>
              </h1>

              {/* Texto Descriptivo con Espacio Respirable */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-600 font-light leading-relaxed max-w-2xl pt-1">
                Desde harinas de trigo y pastas tradicionales hasta aceites 100% puros, mantecas para panadería y endulzantes de origen natural. Conoce cada una de las marcas con las que aportamos valor, nutrición y sabor a millones de hogares e industrias del país.
              </p>
            </FadeIn>
          </div>
        </section>

        {/* ========================================================
            2. CATÁLOGO INTERACTIVO DE MARCAS Y REDIRECCIÓN INDIVIDUAL
           ======================================================== */}
        <section className="relative pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <FadeIn>
            <AlimentosCatalogView />
          </FadeIn>
        </section>

        {/* ========================================================
            3. CATÁLOGO DE INGREDIENTES INDUSTRIALES & PANADERÍA
           ======================================================== */}
        <FadeIn>
          <IngredientesSection />
        </FadeIn>

        {/* ========================================================
            4. CONTACTO COMERCIAL: Distribución y Ventas de Alimentos
           ======================================================== */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative z-10">
          <FadeIn className="max-w-7xl mx-auto space-y-12">
            {/* Encabezado */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
                Atención Comercial • Alimentos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight">
                Distribución comercial y compras mayoristas
              </h2>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Si representas a una cadena de supermercados, distribuidora mayorista o establecimiento de hostelería, contáctanos para acceder a nuestro catálogo y listas de precios oficiales.
              </p>
            </div>

            {/* Grid 2 Columnas */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Canales Oficiales (5 cols) */}
              <div className="lg:col-span-5 space-y-8 py-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Centro de Despacho Central</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Zona Industrial, Caracas, Miranda, Venezuela.
                      </p>
                      <span className="text-xs text-[#009539] font-medium block">
                        Despacho a nivel nacional en los 24 estados
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center shrink-0 group-hover:bg-[#02afab] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Ventas Comerciales Directas</h3>
                      <p className="text-base font-bold text-gray-800">
                        +58 (212) 000-0000
                      </p>
                      <span className="text-xs text-gray-500 block">
                        Línea corporativa mayorista y WhatsApp
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#94c11e]/15 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Correos Comerciales</h3>
                      <div className="space-y-1 text-sm">
                        <a
                          href="mailto:ventas@grupomimesa.com"
                          className="block text-[#009539] hover:underline font-semibold"
                        >
                          ventas@grupomimesa.com
                        </a>
                        <a
                          href="mailto:alimentos@grupomimesa.com"
                          className="block text-gray-600 hover:text-[#009539] transition-colors"
                        >
                          alimentos@grupomimesa.com
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a3c6a]/8 text-[#1a3c6a] flex items-center justify-center shrink-0 group-hover:bg-[#1a3c6a] group-hover:text-white transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Horario de Atención</h3>
                      <p className="text-sm text-gray-700">
                        Lunes a Viernes: 8:00 AM – 5:00 PM (HLV)
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario (7 cols) */}
              <div className="lg:col-span-7">
                <ContactoForm
                  variant="light"
                  title="Cotización Comercial de Alimentos"
                  subtitle="Indica las marcas y volúmenes requeridos para tu negocio o distribución."
                />
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      {/* Footer Corporativo */}
      <FooterWrapper />
    </div>
  );
}
