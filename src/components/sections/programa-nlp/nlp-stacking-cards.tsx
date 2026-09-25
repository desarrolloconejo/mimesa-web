"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Utensils,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  ShieldCheck,
  Calendar,
  Users,
  CheckCircle2,
} from "lucide-react";
import { NLP_DATA } from "./nlp-data";
import { FadeIn, FadeInStagger } from "@/components/ui/fade-in";

export function NLPStackingCards() {
  const { hero, alianza, ejes, impacto, galeria, manifiesto } = NLP_DATA;
  const [activeImageIndex, setActiveImageIndex] = useState<number | null>(null);

  return (
    <div className="w-full relative bg-[#07172b]">

      {/* =========================================================================
          SECCIÓN 1: HERO / PROGRAMA NLP
          Primera foto: NLPMIMESA-IMAGEN1.webp (Pancarta oficial e identidad NLP)
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-gradient-to-b from-[#0a1e38] via-[#0c223f] to-[#0e2748] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-24 lg:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-8 sm:space-y-10">
          
          {/* Breadcrumb */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300/90 font-medium">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400/60 shrink-0" />
            <span className="text-[#02aeaa] font-semibold">Programa Nutriendo la Prosperidad</span>
          </nav>

          {/* Main Hero Content */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Texto y Titular (7 cols) */}
            <FadeIn direction="up" className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#95c11e] block">
                Compromiso Social • Grupo Mimesa
              </span>

              <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-md">
                {hero.titlePrefix}
                <span className="text-[#95c11e] inline">
                  {hero.titleHighlight1} {hero.titleHighlight2}
                </span>
                <span>{hero.titleSuffix}</span>
              </h1>

              <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl pt-1">
                {hero.summary}
              </p>

              {/* Pilares rápidos */}
              <div className="pt-2 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs sm:text-sm font-semibold text-white border border-white/15">
                  <Utensils className="w-4 h-4 text-[#95c11e]" />
                  <span>Nutrición Primera Infancia</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs sm:text-sm font-semibold text-white border border-white/15">
                  <GraduationCap className="w-4 h-4 text-[#02aeaa]" />
                  <span>Educación Alimentaria</span>
                </span>
                <span className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 text-xs sm:text-sm font-semibold text-white border border-white/15">
                  <Users className="w-4 h-4 text-[#95c11e]" />
                  <span>Voluntariado Mimesa</span>
                </span>
              </div>
            </FadeIn>

            {/* PRIMERA FOTO: NLPMIMESA-IMAGEN1.webp (5 cols) */}
            <FadeIn direction="up" delay={0.15} className="lg:col-span-5 relative flex justify-center">
              <div className="relative aspect-[3/4] max-h-[480px] w-full max-w-md rounded-3xl overflow-hidden border border-white/20 shadow-2xl bg-[#0a1e38]">
                <Image
                  src={hero.imageSrc}
                  alt="Identidad oficial del Programa NLP de Grupo Mimesa - Nutriendo la Prosperidad"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </FadeIn>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECCIÓN 2: ALIANZA DVC
          Foto real: NLPMIMESA-IMAGEN.webp (Despacho y entrega de alimentos por personal Mimesa)
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-gradient-to-b from-[#f8fafc] via-white to-[#f1f5f9] text-[#183c6b] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-slate-300">
        <div className="max-w-7xl mx-auto w-full relative z-10">
          
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
            
            {/* Columna Izquierda: Alianza DVC (7 cols) */}
            <FadeIn direction="up" className="lg:col-span-7 space-y-4 sm:space-y-6">
              
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
                {alianza.badge}
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight font-heading">
                {alianza.title}
              </h2>

              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
                {alianza.paragraph1}
              </p>

              <div className="p-5 sm:p-6 rounded-2xl bg-[#009539]/8 border border-[#009539]/20 space-y-2">
                <div className="flex items-center gap-2 text-sm sm:text-base font-bold text-[#009539]">
                  <CheckCircle2 className="w-5 h-5 text-[#009539] shrink-0" />
                  <span>Dos Pilares Fundamentales: Adaptabilidad y Flexibilidad</span>
                </div>
                <p className="text-sm text-gray-600 leading-relaxed font-normal">
                  {alianza.paragraph2}
                </p>
              </div>

              {/* Puntos destacados */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <ShieldCheck className="w-5 h-5 text-[#02aeaa] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#183c6b]">Auditoría y Pesaje</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Control antropométrico continuo de talla y peso.</p>
                  </div>
                </div>
                <div className="flex items-start gap-3.5 p-4 sm:p-5 rounded-2xl bg-white border border-slate-200 shadow-xs">
                  <Calendar className="w-5 h-5 text-[#95c11e] shrink-0 mt-0.5" />
                  <div className="space-y-1">
                    <h4 className="text-sm sm:text-base font-bold text-[#183c6b]">Continuidad Garantizada</h4>
                    <p className="text-xs sm:text-sm text-gray-500 leading-relaxed">Entregas regulares ininterrumpidas desde el 2019.</p>
                  </div>
                </div>
              </div>
            </FadeIn>

            {/* Columna Derecha: Foto real entrega de canastas (5 cols) */}
            <FadeIn direction="up" delay={0.15} className="lg:col-span-5 relative flex justify-center">
              <div className="relative aspect-[3/4] max-h-[480px] w-full max-w-md rounded-3xl overflow-hidden border border-slate-200 shadow-xl bg-slate-100">
                <Image
                  src={alianza.imageSrc}
                  alt="Personal de Grupo Mimesa entregando canastas de víveres en operativo comunitario"
                  fill
                  sizes="(max-width: 1024px) 100vw, 42vw"
                  className="object-cover object-center"
                />
              </div>
            </FadeIn>

          </div>

        </div>
      </section>


      {/* =========================================================================
          SECCIÓN 3: LOS TRES EJES
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-[#8cb811] text-[#0c223f] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-[#7aa30e]">
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          
          {/* Encabezado */}
          <FadeIn direction="up" className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#0c223f] block">
              Estructura de Impacto
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading drop-shadow-sm max-w-4xl">
              Tres Ejes: Nutrición, Educación y Comunidad
            </h2>
            <p className="text-sm sm:text-base text-[#0c223f]/90 font-medium max-w-2xl pt-1">
              Un abordaje integral que no se limita a entregar alimentos, sino que genera capacidades para la salud comunitaria.
            </p>
          </FadeIn>

          {/* 3 Tarjetas de los Ejes */}
          <FadeInStagger className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {ejes.map((eje) => (
              <div
                key={eje.id}
                className="bg-white rounded-3xl p-6 sm:p-8 space-y-4 shadow-lg border border-white/60 flex flex-col justify-between hover:shadow-xl transition-shadow duration-300"
              >
                <div className="space-y-3">
                  <span className="text-2xl sm:text-3xl font-black text-[#8cb811] font-heading block">
                    {eje.number}
                  </span>

                  <h3 className="text-xl font-bold text-[#0c223f] tracking-tight font-heading">
                    {eje.title}
                  </h3>

                  <p className="text-xs font-bold uppercase tracking-wider text-[#009539] leading-snug">
                    {eje.tagline}
                  </p>

                  <p className="text-sm text-gray-600 leading-relaxed font-normal">
                    {eje.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-gray-100 space-y-2">
                  {eje.highlights.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5 text-xs sm:text-sm text-gray-700">
                      <CheckCircle2 className="w-4 h-4 text-[#8cb811] shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </FadeInStagger>

        </div>
      </section>


      {/* =========================================================================
          SECCIÓN 4: EL IMPACTO EN CIFRAS
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-gradient-to-b from-[#061426] via-[#091f38] to-[#0c223f] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-white/10">
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          
          {/* Encabezado */}
          <FadeIn direction="up" className="space-y-3 max-w-3xl">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#95c11e] block">
              {impacto.badge}
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
              {impacto.title}
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal pt-1">
              {impacto.subtitle}
            </p>
          </FadeIn>

          {/* Display de Métricas */}
          <FadeInStagger className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
            {impacto.metrics.map((metric, idx) => (
              <div
                key={idx}
                className="p-6 sm:p-8 rounded-3xl bg-white/[0.06] border border-white/10 space-y-3 hover:bg-white/[0.1] hover:border-[#95c11e]/40 transition-all duration-300"
              >
                <div className="text-4xl sm:text-5xl lg:text-6xl font-black text-[#95c11e] tracking-tight font-heading">
                  {metric.value}
                </div>

                <h3 className="text-xs sm:text-sm font-extrabold text-white tracking-wider uppercase font-heading">
                  {metric.label}
                </h3>

                <p className="text-sm text-slate-300 font-normal leading-relaxed">
                  {metric.description}
                </p>
              </div>
            ))}
          </FadeInStagger>

        </div>
      </section>


      {/* =========================================================================
          SECCIÓN 5: REGISTRO FOTOGRÁFICO EN EL TERRENO
          6 Momentos reales con proporciones cuidadas y vista expandible
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-[#07172b] text-white px-4 sm:px-6 lg:px-8 py-20 sm:py-28 border-b border-white/15">
        <div className="max-w-7xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          
          {/* Encabezado */}
          <FadeIn direction="up" className="space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
              Registro Visual en el Terreno
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight font-heading">
              Nuestras jornadas en imágenes
            </h2>
            <p className="text-sm sm:text-base text-slate-300 font-normal pt-1">
              Pasa el cursor sobre cada fotografía para expandir el momento.
            </p>
          </FadeIn>

          {/* Paneles Fotográficos Reales */}
          <FadeIn direction="up" delay={0.15} className="w-full">
            {/* Desktop: 6 Paneles Verticales que se expanden al hover */}
            <div className="hidden lg:flex gap-3.5 w-full h-[54vh] max-h-[520px] min-h-[380px]">
              {galeria.items.map((item, idx) => {
                const isHovered = activeImageIndex === idx;
                const isAnyHovered = activeImageIndex !== null;

                return (
                  <div
                    key={idx}
                    onMouseEnter={() => setActiveImageIndex(idx)}
                    onMouseLeave={() => setActiveImageIndex(null)}
                    className={`relative overflow-hidden rounded-2xl border border-white/20 shadow-2xl transition-all duration-700 ease-out cursor-pointer group ${
                      isHovered
                        ? "flex-[3.2] border-[#95c11e]"
                        : isAnyHovered
                        ? "flex-[0.8] opacity-75"
                        : "flex-1"
                    }`}
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      sizes="(max-width: 1440px) 33vw, 25vw"
                      className="object-cover object-center group-hover:scale-105 transition-transform duration-700"
                    />
                    
                    {/* Gradiente oscuro inferior */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />

                    {/* Número discreto */}
                    <div className="absolute top-4 left-4">
                      <span className="px-2.5 py-1 rounded-lg bg-black/60 text-white text-[11px] font-mono font-bold border border-white/20">
                        0{idx + 1}
                      </span>
                    </div>

                    {/* Título y descripción */}
                    <div className="absolute bottom-4 left-4 right-4 text-white space-y-1">
                      <h3 className="text-base sm:text-lg font-bold font-heading truncate drop-shadow-md">
                        {item.title}
                      </h3>
                      {isHovered && (
                        <p className="text-xs sm:text-sm text-slate-200 font-normal line-clamp-2 pt-1 animate-fade-in">
                          {item.caption}
                        </p>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Tablet y Móvil: Grid de 2 columnas o 3 columnas */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:hidden gap-4">
              {galeria.items.map((item, idx) => (
                <div
                  key={idx}
                  className="relative aspect-[4/3] rounded-2xl overflow-hidden border border-white/20 shadow-lg group"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 50vw"
                    className="object-cover object-center"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
                  <div className="absolute top-3 left-3">
                    <span className="px-2 py-0.5 rounded-md bg-black/60 text-white text-[10px] font-mono font-bold">
                      0{idx + 1}
                    </span>
                  </div>
                  <div className="absolute bottom-3 left-3 right-3 text-white space-y-0.5">
                    <p className="text-sm font-bold font-heading truncate">
                      {item.title}
                    </p>
                    <p className="text-xs text-slate-300 font-normal line-clamp-1">
                      {item.caption}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </FadeIn>

        </div>
      </section>


      {/* =========================================================================
          SECCIÓN 6: MANIFIESTO DE CIERRE
          ÚLTIMA FOTO: NLPMIMESA-IMAGEN2.webp
          (El equipo completo de voluntarios de Mimesa con la pancarta oficial
          "JUNTOS ALIMENTAMOS UN FUTURO MEJOR")
          ========================================================================= */}
      <section className="relative w-full flex flex-col justify-center bg-white text-[#183c6b] px-4 sm:px-6 lg:px-8 py-20 sm:py-28 lg:py-32 border-t border-slate-300">
        <div className="max-w-5xl mx-auto w-full relative z-10 space-y-10 sm:space-y-12">
          
          {/* Encabezado de Cierre */}
          <FadeIn direction="up" className="text-center space-y-4 max-w-3xl mx-auto">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
              {manifiesto.kicker}
            </span>

            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight font-heading">
              JUNTOS ALIMENTAMOS UN{" "}
              <span className="text-[#009539] block sm:inline">
                FUTURO MEJOR.
              </span>
            </h2>

            <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed">
              {manifiesto.paragraph}
            </p>
          </FadeIn>

          {/* ÚLTIMA FOTO: NLPMIMESA-IMAGEN2.webp (El equipo completo de voluntarios con la pancarta) */}
          <FadeIn direction="up" delay={0.15} className="relative w-full max-w-4xl mx-auto aspect-[4/3] sm:aspect-[16/10] max-h-[520px] rounded-3xl overflow-hidden border border-slate-200 shadow-2xl bg-slate-50">
            <Image
              src={manifiesto.imageSrc}
              alt="Equipo de voluntarios y coordinadores de Grupo Mimesa en el Programa NLP - Juntos alimentamos un futuro mejor"
              fill
              sizes="(max-width: 1200px) 100vw, 1000px"
              className="object-cover object-center"
            />
          </FadeIn>

          {/* Botones de Acción */}
          <FadeIn direction="up" delay={0.25} className="pt-2 flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href="/contacto"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-[#009539] hover:bg-[#007a3d] text-white font-bold text-sm sm:text-base transition-all duration-300 shadow-xl shadow-[#009539]/25 hover:shadow-2xl hover:-translate-y-0.5 active:translate-y-0 cursor-pointer font-heading"
            >
              <span>{manifiesto.ctaPrimario}</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/sobre-nosotros"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-8 py-3.5 rounded-full bg-slate-100 hover:bg-slate-200 text-[#183c6b] font-bold text-sm sm:text-base border border-slate-200 transition-all duration-300 cursor-pointer font-heading"
            >
              <span>{manifiesto.ctaSecundario}</span>
            </Link>
          </FadeIn>

        </div>
      </section>

    </div>
  );
}
