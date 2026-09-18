import React from "react";
import Link from "next/link";
import Image from "next/image";
import { notFound } from "next/navigation";
import {
  ChevronRight,
  ShieldCheck,
  CheckCircle2,
  Sparkles,
  MapPin,
  Phone,
  Mail,
  Clock,
  ArrowRight,
  Utensils,
  Award,
  Package,
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
import { FOOD_BRANDS, FoodBrandDetail } from "@/components/sections/alimentos/alimentos-data";
import { BrandProductsClient, BrandHeroButtons } from "./brand-products-client";
import { FadeIn } from "@/components/ui/fade-in";

interface PageProps {
  params: Promise<{ brand: string }>;
}

export async function generateStaticParams() {
  return Object.keys(FOOD_BRANDS).map((brandKey) => ({
    brand: brandKey,
  }));
}

export async function generateMetadata({ params }: PageProps) {
  const resolvedParams = await params;
  const brand = FOOD_BRANDS[resolvedParams.brand];

  if (!brand) {
    return {
      title: "Marca No Encontrada | Grupo Mimesa",
    };
  }

  return {
    title: `${brand.name} | Portafolio Alimentos | Grupo Mimesa`,
    description: `${brand.tagline}. ${brand.heroDescription.slice(0, 150)}...`,
  };
}

export default async function BrandDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const brand = FOOD_BRANDS[resolvedParams.brand];

  if (!brand) {
    notFound();
  }

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
          className="top-36 left-8 hidden lg:block opacity-45"
        >
          <MimesaDotGreen size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.18}
          floatAnimation="reverse"
          className="top-[25%] left-6 hidden lg:block opacity-40"
        >
          <MimesaDotCyan size={42} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.2}
          floatAnimation="sway"
          className="top-[35%] -right-4 hidden lg:block opacity-40"
        >
          <MimesaLeafGreen size={100} />
        </ParallaxShape>

        <ParallaxShape
          speed={-0.15}
          floatAnimation="gentle"
          className="top-[55%] left-8 hidden lg:block opacity-40"
        >
          <MimesaDotLime size={38} />
        </ParallaxShape>

        <ParallaxShape
          speed={0.18}
          floatAnimation="reverse"
          className="bottom-36 right-10 hidden lg:block opacity-40"
        >
          <MimesaDotGreen size={42} />
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
              className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8 sm:mb-12 select-none flex-wrap"
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
              <Link href="/productos/alimentos" className="hover:text-[#009539] transition-colors">
                División Alimentos
              </Link>
              <ChevronRight className="w-3.5 h-3.5 text-gray-300" />
              <span className="font-bold" style={{ color: brand.color }}>
                {brand.name}
              </span>
            </nav>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-14 items-center">
              {/* Bloque Textual Hero */}
              <FadeIn direction="up" className="lg:col-span-8 space-y-6 sm:space-y-8 text-left">
                {/* Kicker Editorial */}
                <div className="flex items-center gap-3">
                  <span
                    className="text-xs font-extrabold uppercase tracking-widest block"
                    style={{ color: brand.color }}
                  >
                    {brand.number} • {brand.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-bold text-slate-500">
                    {brand.badge}
                  </span>
                </div>

                {/* Título Principal de la Marca */}
                <div className="space-y-2">
                  <h1
                    className="text-4xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] font-black tracking-tight leading-[1.08]"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </h1>
                  <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight">
                    {brand.tagline}
                  </p>
                </div>

                {/* Texto Descriptivo */}
                <p className="text-base sm:text-lg text-gray-600 font-light leading-relaxed max-w-3xl pt-1">
                  {brand.heroDescription}
                </p>

                {/* Botón de Salto Suave a Productos y Ficha sin Hash en URL */}
                <BrandHeroButtons color={brand.color} />
              </FadeIn>

              {/* Bloque Visual Hero: Logo Oficial */}
              <FadeIn direction="up" delay={150} className="lg:col-span-4 flex justify-center lg:justify-end">
                <div className="w-64 sm:w-72 h-44 sm:h-48 rounded-[2rem] bg-white border border-slate-200/90 shadow-xl p-6 flex items-center justify-center relative overflow-hidden group">
                  {brand.logoUrl ? (
                    <div className="relative w-full h-full group-hover:scale-105 transition-transform duration-500">
                      <Image
                        src={brand.logoUrl}
                        alt={`Logo oficial ${brand.name}`}
                        fill
                        className="object-contain"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="text-center space-y-1">
                      <span
                        className="text-3xl sm:text-4xl font-black tracking-tight block"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </span>
                      <span className="text-xs uppercase tracking-widest text-slate-400 font-bold block">
                        {brand.category}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATÁLOGO INTERACTIVO DE LÍNEAS Y PACKSHOTS DE PRODUCTO
           ======================================================== */}
        <section
          id="productos-catalogo"
          className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 scroll-mt-24"
        >
          <FadeIn>
            <BrandProductsClient brand={brand} />
          </FadeIn>
        </section>

        {/* ========================================================
            3. ATRIBUTOS Y BENEFICIOS EXCLUSIVOS DE LA MARCA
           ======================================================== */}
        <section className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-stretch">
              {/* Tarjeta de Atributos */}
              <div className="lg:col-span-6 p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs" style={{ backgroundColor: brand.color }}>
                    <Award className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                    Atributos de {brand.name}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    Estándares de calidad y formulación que distinguen a la marca en el mercado venezolano.
                  </p>
                  <div className="space-y-3 pt-2">
                    {brand.attributes.map((attr) => (
                      <div key={attr} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 shrink-0 mt-0.5" style={{ color: brand.color }} />
                        <span>{attr}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {brand.culinaryUses && (
                  <div className="p-4 rounded-2xl bg-slate-50 border border-slate-100 text-xs text-slate-700 mt-4">
                    <span className="font-bold text-slate-900 block mb-0.5">
                      Usos Culinarios Recomendados:
                    </span>
                    {brand.culinaryUses}
                  </div>
                )}
              </div>

              {/* Tarjeta de Beneficios */}
              <div className="lg:col-span-6 p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm space-y-6 flex flex-col justify-between">
                <div className="space-y-4">
                  <div className="w-12 h-12 rounded-2xl bg-[#009539] text-white flex items-center justify-center shadow-xs">
                    <Sparkles className="w-6 h-6" />
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                    Beneficios para el Consumidor
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-500 font-normal leading-relaxed">
                    Valor nutricional, rendimiento superior y confianza en cada preparación.
                  </p>
                  <div className="space-y-3 pt-2">
                    {brand.benefits.map((ben) => (
                      <div key={ben} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700 font-medium">
                        <CheckCircle2 className="w-4 h-4 text-[#009539] shrink-0 mt-0.5" />
                        <span>{ben}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {brand.presentations && brand.presentations.length > 0 && (
                  <div className="pt-4 border-t border-slate-100 space-y-2">
                    <span className="text-[11px] font-extrabold uppercase tracking-wider text-slate-400 block">
                      Formatos Comerciales Disponibles
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {brand.presentations.map((p) => (
                        <span
                          key={p}
                          className="text-xs font-semibold px-3 py-1.5 rounded-xl bg-slate-100 text-slate-700"
                        >
                          {p}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </div>
          </FadeIn>
        </section>

        {/* ========================================================
            4. SOLUCIONES INDUSTRIALES RELACIONADAS (Si Aplica)
           ======================================================== */}
        {brand.industrialRelation && (
          <section className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
            <FadeIn>
              <div className="p-8 sm:p-12 rounded-[2.5rem] bg-gradient-to-r from-[#1a3c6a] to-[#0c223f] text-white flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6 shadow-xl">
                <div className="space-y-2 max-w-2xl">
                  <span className="text-xs font-black uppercase tracking-widest text-[#02afab]">
                    Soluciones para Profesionales
                  </span>
                  <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                    {brand.industrialRelation.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-white/80 font-light leading-relaxed">
                    {brand.industrialRelation.description}
                  </p>
                </div>

                <Link
                  href={brand.industrialRelation.href}
                  className="inline-flex items-center gap-2 px-6 py-3.5 rounded-xl bg-[#02afab] hover:bg-[#94c11e] hover:text-[#0a182b] text-white text-xs sm:text-sm font-bold transition-all shadow-md shrink-0"
                >
                  <span>{brand.industrialRelation.linkText}</span>
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </FadeIn>
          </section>
        )}

        {/* ========================================================
            5. CONTACTO COMERCIAL: Suministro y Distribución de la Marca
           ======================================================== */}
        <section
          id="contacto-marca"
          className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative z-10 scroll-mt-24"
        >
          <FadeIn className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3 text-left">
              <span className="text-xs font-extrabold uppercase tracking-widest block" style={{ color: brand.color }}>
                Distribución Comercial • {brand.name}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight">
                Lleva {brand.name} a tus clientes
              </h2>
              <p className="text-base text-gray-600 font-light leading-relaxed">
                Atendemos solicitudes para mayoristas, cadenas de supermercados, distribuidores regionales y canales institucionales en todo el territorio nacional.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              {/* Canales Oficiales (5 cols) */}
              <div className="lg:col-span-5 space-y-8 py-2 text-left">
                <div className="space-y-6">
                  <div className="flex items-start gap-4 group">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 transition-all duration-300 text-white"
                      style={{ backgroundColor: brand.color }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Distribución Nacional</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Despachos centralizados desde nuestras plantas y centros logísticos.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#1a3c6a]/10 text-[#1a3c6a] flex items-center justify-center shrink-0 group-hover:bg-[#1a3c6a] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Atención Comercial Directa</h3>
                      <p className="text-base font-bold text-gray-800">
                        +58 (212) 000-0000
                      </p>
                      <span className="text-xs text-gray-500 block">
                        Línea de ventas y cotizaciones por volumen
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#1a3c6a]">Correo de la Marca</h3>
                      <a
                        href="mailto:ventas@grupomimesa.com"
                        className="text-sm text-[#009539] hover:underline font-semibold block"
                      >
                        ventas@grupomimesa.com
                      </a>
                    </div>
                  </div>
                </div>
              </div>

              {/* Formulario (7 cols) */}
              <div className="lg:col-span-7">
                <ContactoForm
                  variant="light"
                  title={`Cotización Comercial de ${brand.name}`}
                  subtitle="Indica los volúmenes requeridos y la ubicación geográfica de tu negocio."
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
