import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  ArrowRight,
  ChevronRight,
  Utensils,
  Waves,
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
import { FadeIn } from "@/components/ui/fade-in";
import { ProductosHero } from "@/components/sections/productos/productos-hero";

export const metadata = {
  title: "Productos | Grupo Mimesa",
  description:
    "Conoce nuestras dos grandes divisiones: Alimentos de consumo masivo y el complejo salinero solar Produsal en Venezuela.",
};

const ALIMENTOS_PREVIEW_BRANDS = [
  { name: "BlancaFlor", color: "#183c6b" },
  { name: "Ronco", color: "#c8102e" },
  { name: "Fiorentina", color: "#00387b" },
  { name: "Vatel", color: "#d97706" },
  { name: "Purilev", color: "#02aeaa" },
  { name: "Los 3 Cochinitos", color: "#e11d48" },
  { name: "truvía", color: "#65a30d" },
];

const PRODUSAL_PREVIEW_LINES = [
  { name: "Sal Fina de Mesa", dotColor: "#02aeaa" },
  { name: "Sal Marina Parrillera", dotColor: "#02aeaa" },
  { name: "Grado Industrial & Químico", dotColor: "#183c6b" },
  { name: "Nutrición Animal & Forraje", dotColor: "#95c11e" },
];

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full relative overflow-hidden">
        {/* ========================================================
            1. HERO CIANOTIPIA (Slide 11, 12, 15)
           ======================================================== */}
        <ProductosHero />

        {/* ========================================================
            2. PRESENTACIÓN EDITORIAL PANORÁMICA DE LAS CATEGORÍAS
           ======================================================== */}
        <section className="py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto space-y-24 sm:space-y-32">
          
          {/* ----------------------------------------------------
              CATEGORÍA 01: DIVISIÓN ALIMENTOS (Layout Horizontal)
             ---------------------------------------------------- */}
          <FadeIn>
            <div
              id="categoria-alimentos"
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
            >
            {/* Columna Texto & Marcas (7 cols) */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#009539]">
                  <Utensils className="w-3.5 h-3.5" />
                  <span>01 • Consumo Masivo</span>
                </span>
                
                <h2 className="text-3xl sm:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
                  División Alimentos
                </h2>

                <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                  Una selección líder de marcas arraigadas en la cultura culinaria venezolana. Producimos alimentos esenciales bajo rigurosos protocolos de calidad que garantizan sabor, nutrición y rendimiento en la mesa de cada hogar.
                </p>
              </div>

              {/* Showcase de Marcas con Pips Oficiales de Color */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                  Marcas que integran la división
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {ALIMENTOS_PREVIEW_BRANDS.map((brand) => (
                    <div
                      key={brand.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#009539]/40 hover:shadow-md transition-all duration-200"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: brand.color }}
                      />
                      <span className="text-xs font-bold text-slate-800">{brand.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Enlace a la División Alimentos */}
              <div className="pt-2">
                <Link
                  href="/productos/alimentos"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#009539] hover:bg-[#007a3d] text-white font-bold text-sm shadow-xl shadow-[#009539]/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explorar categoría Alimentos</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>

            {/* Columna Visual Panorámica (5 cols) */}
            <div className="lg:col-span-5 relative">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-2xl group">
                <Image
                  src="/images/alimentos-showcase.webp"
                  alt="Portafolio de alimentos Grupo Mimesa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/80 via-transparent to-transparent" />
                
                {/* Badge Flotante Superior */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md text-[#009539] text-xs font-extrabold uppercase tracking-wider shadow-lg border border-white/60">
                    Marcas Familiares
                  </span>
                </div>

                {/* Pie Flotante sobre la Imagen */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-sm font-bold drop-shadow-md">
                    Harinas • Pastas • Aceites • Grasas • Endulzantes
                  </p>
                  <p className="text-xs text-white/80 font-light drop-shadow-sm">
                    Tradición, sabor y nutrición para Venezuela
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>

        {/* ----------------------------------------------------
            CATEGORÍA 02: DIVISIÓN PRODUSAL (Layout Horizontal Invertido)
           ---------------------------------------------------- */}
        <FadeIn>
          <div
            id="categoria-produsal"
            className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-16 items-center"
          >
            {/* Columna Visual Panorámica (5 cols) - Aparece primero en escritorio */}
            <div className="lg:col-span-5 relative order-2 lg:order-1">
              <div className="relative h-[380px] sm:h-[460px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-2xl group">
                <Image
                  src="/images/produsal-salinas.webp"
                  alt="Parque salinero solar Produsal Los Olivitos"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/80 via-transparent to-transparent" />
                
                {/* Badge Flotante Superior */}
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md text-[#02aeaa] text-xs font-extrabold uppercase tracking-wider shadow-lg border border-white/60">
                    Parque Salinero Los Olivitos
                  </span>
                </div>

                {/* Pie Flotante sobre la Imagen */}
                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-sm font-bold drop-shadow-md">
                    +40.000 Hectáreas • Pureza Superior a 99.5%
                  </p>
                  <p className="text-xs text-white/80 font-light drop-shadow-sm">
                    Costa Oriental del Lago de Maracaibo, Zulia
                  </p>
                </div>
              </div>
            </div>

            {/* Columna Texto & Aplicaciones (7 cols) - Order 1 en móvil, Order 2 en escritorio */}
            <div className="lg:col-span-7 space-y-6 sm:space-y-8 order-1 lg:order-2">
              <div className="space-y-3">
                <span className="inline-flex items-center gap-2 text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
                  <Waves className="w-3.5 h-3.5" />
                  <span>02 • Sal Solar & Industria</span>
                </span>
                
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                  <h2 className="text-3xl sm:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
                    División Produsal
                  </h2>
                  <div className="h-10 w-36 bg-white rounded-xl p-1.5 border border-slate-200/80 shadow-xs relative overflow-hidden shrink-0">
                    <Image
                      src="/images/productos/PRODUSAL-LOGO.webp"
                      alt="Logo Oficial Produsal"
                      fill
                      className="object-contain"
                    />
                  </div>
                </div>

                <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed">
                  Operamos uno de los complejos de evaporación solar marina más modernos de Latinoamérica. Aprovechamos la radiación solar y los vientos alisios del Zulia para cosechar sal marina de máxima pureza, abasteciendo tanto a los hogares como a las principales industrias químicas y alimentarias del país.
                </p>
              </div>

              {/* Líneas de Aplicación con Chips Estilizados */}
              <div className="space-y-3 pt-2">
                <span className="text-xs font-bold text-gray-400 uppercase tracking-widest block">
                  Líneas de aplicación y suministro
                </span>
                <div className="flex flex-wrap gap-2.5">
                  {PRODUSAL_PREVIEW_LINES.map((line) => (
                    <div
                      key={line.name}
                      className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-white border border-slate-200/90 shadow-xs hover:border-[#02aeaa]/40 hover:shadow-md transition-all duration-200"
                    >
                      <span
                        className="w-2.5 h-2.5 rounded-full shrink-0"
                        style={{ backgroundColor: line.dotColor }}
                      />
                      <span className="text-xs font-bold text-slate-800">{line.name}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Botón de Enlace a la División Produsal */}
              <div className="pt-2">
                <Link
                  href="/productos/produsal"
                  className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-[#02aeaa] hover:bg-[#009539] text-white font-bold text-sm shadow-xl shadow-[#02aeaa]/25 hover:shadow-2xl hover:-translate-y-0.5 transition-all duration-300 group cursor-pointer"
                >
                  <span>Explorar categoría Produsal</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
              </div>
            </div>
          </div>
        </FadeIn>

        </section>

        {/* ========================================================
            3. SECCIÓN DE CONTACTO: Diseño Completo y Equilibrado
           ======================================================== */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] border-t border-slate-200/80">
          <FadeIn className="max-w-7xl mx-auto space-y-12">
            {/* Encabezado de la sección */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
                Atención Comercial & Ventas
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
                Ponte en contacto con nuestro equipo
              </h2>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Estamos a tu entera disposición para atender requerimientos de distribución comercial, compras mayoristas de alimentos o suministro industrial de sal marina en todo el país.
              </p>
            </div>

            {/* Grid de 2 Columnas: Canales Oficiales a la izquierda, Formulario a la derecha */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              
              {/* Columna Izquierda: Información y Canales Directos (5 cols) */}
              <div className="lg:col-span-5 space-y-8 py-2">
                <div className="space-y-6">
                  {/* Sede Corporativa */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#02aeaa]/10 text-[#02aeaa] flex items-center justify-center shrink-0 group-hover:bg-[#02aeaa] group-hover:text-white transition-all duration-300">
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b]">Sede Principal</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Zona Industrial, Caracas, Miranda, Venezuela.
                      </p>
                      <span className="text-xs text-[#02aeaa] font-medium block">
                        Logística y despacho a nivel nacional
                      </span>
                    </div>
                  </div>

                  {/* Atención Telefónica */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b]">Atención Telefónica</h3>
                      <p className="text-base font-bold text-gray-800">
                        +58 (212) 000-0000
                      </p>
                      <span className="text-xs text-gray-500 block">
                        Línea comercial directa y WhatsApp
                      </span>
                    </div>
                  </div>

                  {/* Correos Institucionales */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#95c11e]/15 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-[#183c6b]">Correos Oficiales</h3>
                      <div className="space-y-1 text-sm">
                        <a
                          href="mailto:contacto@grupomimesa.com"
                          className="block text-[#02aeaa] hover:underline font-semibold"
                        >
                          contacto@grupomimesa.com
                        </a>
                        <a
                          href="mailto:ventas@grupomimesa.com"
                          className="block text-gray-600 hover:text-[#02aeaa] transition-colors"
                        >
                          ventas@grupomimesa.com
                        </a>
                      </div>
                    </div>
                  </div>

                  {/* Horario de Atención */}
                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#183c6b]/8 text-[#183c6b] flex items-center justify-center shrink-0 group-hover:bg-[#183c6b] group-hover:text-white transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b]">Horario de Atención</h3>
                      <p className="text-sm text-gray-700">
                        Lunes a Viernes: 8:00 AM – 5:00 PM
                      </p>
                      <span className="text-xs text-gray-400 block">
                        Hora local de Venezuela (HLV)
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Columna Derecha: Formulario Completo (7 cols) */}
              <div className="lg:col-span-7">
                <ContactoForm
                  variant="light"
                  title="Formulario de Contacto"
                  subtitle="Selecciona tu área de interés y completa tus datos. Te contactaremos oportunamente."
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
