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
import { FOOD_BRANDS } from "@/components/sections/alimentos/alimentos-data";
import { BrandProductsClient, BrandHeroButtons } from "@/app/productos/alimentos/[brand]/brand-products-client";
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
    title: `${brand.name} | Consumo Masivo | Grupo Mimesa`,
    description: `${brand.tagline}. ${brand.heroDescription.slice(0, 150)}...`,
  };
}

export default async function ConsumoMasivoBrandDetailPage({ params }: PageProps) {
  const resolvedParams = await params;
  const brand = FOOD_BRANDS[resolvedParams.brand];

  if (!brand) {
    notFound();
  }

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#009539] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-white relative overflow-hidden">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="green" className="top-12 -left-48 w-[650px] h-[650px] opacity-15" />
        <GlowOrb color="cyan" className="top-1/3 -right-48 w-[600px] h-[600px] opacity-15" />
        <GlowOrb color="lime" className="bottom-20 left-1/4 w-[550px] h-[550px] opacity-15" />

        {/* Brand Shapes */}
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

        {/* ========================================================
            1. HERO: Altura estándar, alineado a la izquierda
           ======================================================== */}
        <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-36 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb con Consumo Masivo */}
            <nav
              className="flex items-center gap-2 text-xs font-semibold text-gray-400 mb-8 sm:mb-12 select-none flex-wrap font-heading"
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
              <Link href="/productos/consumo-masivo" className="hover:text-[#009539] transition-colors">
                Consumo Masivo
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
                    className="text-xs font-extrabold uppercase tracking-widest block font-heading"
                    style={{ color: brand.color }}
                  >
                    {brand.category}
                  </span>
                  <span className="w-1.5 h-1.5 rounded-full bg-slate-300" />
                  <span className="text-xs font-bold text-slate-500 font-heading">
                    {brand.badge}
                  </span>
                </div>

                {/* Título Principal de la Marca */}
                <div className="space-y-2">
                  <h1
                    className="text-4xl sm:text-6xl lg:text-7xl xl:text-[4.5rem] font-black tracking-tight leading-[1.08] font-heading"
                    style={{ color: brand.color }}
                  >
                    {brand.name}
                  </h1>
                  <p className="text-xl sm:text-2xl font-bold text-slate-800 tracking-tight font-heading">
                    {brand.tagline}
                  </p>
                </div>

                {/* Texto Descriptivo */}
                <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed max-w-3xl pt-1">
                  {brand.heroDescription}
                </p>

                {/* Botón de Salto Suave a Productos */}
                <BrandHeroButtons color={brand.color} />
              </FadeIn>

              {/* Bloque Visual Hero: Logo Oficial */}
              <FadeIn direction="down" className="lg:col-span-4 flex justify-center items-center">
                <div className="relative w-72 h-52 sm:w-80 sm:h-60 rounded-3xl p-8 flex items-center justify-center border border-slate-200/90 bg-white transition-all duration-300 shadow-xl">
                  {brand.logoUrl ? (
                    <div className="relative w-full h-full flex items-center justify-center">
                      <Image
                        src={brand.logoUrl}
                        alt={`Logotipo oficial de ${brand.name}`}
                        fill
                        unoptimized
                        className="object-contain p-2 drop-shadow-xs"
                        priority
                      />
                    </div>
                  ) : (
                    <div className="relative z-10 text-center">
                      <span
                        className="text-4xl sm:text-5xl font-black tracking-tight block font-heading"
                        style={{ color: brand.color }}
                      >
                        {brand.name}
                      </span>
                    </div>
                  )}
                </div>
              </FadeIn>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. CATÁLOGO INTERACTIVO DE LÍNEAS Y PRODUCTOS
           ======================================================== */}
        <section id="productos-catalogo" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full z-10">
          <FadeIn>
            <BrandProductsClient brand={brand} />
          </FadeIn>
        </section>

        {/* ========================================================
            3. CONTACTO COMERCIAL ESPECÍFICO PARA DISTRIBUCIÓN
           ======================================================== */}
        <section id="contacto-marca" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative z-10">
          <FadeIn className="max-w-7xl mx-auto space-y-12">
            <div className="max-w-2xl space-y-3">
              <span
                className="text-xs font-extrabold uppercase tracking-widest block font-heading"
                style={{ color: brand.color }}
              >
                Distribución Comercial • {brand.name}
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight font-heading">
                ¿Deseas distribuir los productos {brand.name}?
              </h2>
              <p className="text-base sm:text-lg text-slate-600 font-normal leading-relaxed">
                Ponte en contacto con nuestro equipo comercial de Grupo Mimesa para acceder a listas de precios, volúmenes de despacho y condiciones de distribución en todo el país.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
              <div className="lg:col-span-5 space-y-8 py-2">
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${brand.color}15`,
                        color: brand.color,
                      }}
                    >
                      <MapPin className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b] font-heading">Despacho y Logística Nacional</h3>
                      <p className="text-sm text-slate-600 leading-relaxed font-normal">
                        Cobertura en los 24 estados del país con entregas programadas.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${brand.color}15`,
                        color: brand.color,
                      }}
                    >
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b] font-heading">Línea de Ventas Directa</h3>
                      <p className="text-sm text-slate-600 font-normal">
                        Atención a mayoristas, distribuidores y cadenas de supermercados.
                      </p>
                    </div>
                  </div>

                  <div className="flex items-start gap-4">
                    <div
                      className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0"
                      style={{
                        backgroundColor: `${brand.color}15`,
                        color: brand.color,
                      }}
                    >
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b] font-heading">Correo Corporativo</h3>
                      <p className="text-sm text-slate-600 font-normal">
                        ventas@grupomimesa.com
                      </p>
                    </div>
                  </div>
                </div>

                <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200/80 space-y-3">
                  <span className="text-xs font-extrabold uppercase tracking-wider text-slate-500 block font-heading">
                    Garantía de Calidad Certificada
                  </span>
                  <p className="text-xs text-slate-600 leading-relaxed font-normal">
                    Todos los lotes de {brand.name} cuentan con certificación de laboratorio, registro sanitario vigente y trazabilidad total desde origen hasta el punto de entrega.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-7">
                <div className="bg-slate-50/50 p-6 sm:p-10 rounded-3xl border border-slate-200/80 shadow-sm">
                  <h3 className="text-2xl sm:text-3xl font-black text-[#183c6b] mb-2 font-heading tracking-tight">
                    Formulario de solicitud comercial
                  </h3>
                  <p className="text-sm text-slate-600 mb-8 font-normal">
                    Indícanos los datos de tu empresa y el requerimiento de {brand.name}. Te responderemos a la brevedad.
                  </p>
                  <ContactoForm />
                </div>
              </div>
            </div>
          </FadeIn>
        </section>
      </main>

      <FooterWrapper />
    </div>
  );
}
