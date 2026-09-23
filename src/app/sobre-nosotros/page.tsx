import React from "react";
import Image from "next/image";
import {
  Shield,
  Zap,
  Heart,
  Target,
  MapPin,
  Phone,
  Mail,
} from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { ContactoForm } from "@/components/sections/contacto/contacto-form";
import { TimelineFull } from "@/components/sections/sobre-nosotros/timeline-full";
import { IDENTIDAD_DATA } from "@/components/sections/identidad/identidad-data";
import { SobreNosotrosHero } from "@/components/sections/sobre-nosotros/sobre-nosotros-hero";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata = {
  title: "Sobre nosotros | Grupo Mimesa - Tradición, Propósito y Futuro",
  description:
    "Conoce la historia, propósito y valores de Grupo Mimesa. Más de 45 años impulsando la producción agroalimentaria, la nutrición y el bienestar de las familias venezolanas.",
};

export default function SobreNosotrosPage() {
  const valorIcons = [Shield, Zap, Heart, Target];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-white relative overflow-hidden">
        {/* ========================================================
            1. HERO INSTITUCIONAL CIANOTIPIA (Slide 11, 12, 15)
           ======================================================== */}
        <SobreNosotrosHero />

        {/* ========================================================
            2. PROPÓSITO Y VALORES CORPORATIVOS (Diseño Editorial Claro)
           ======================================================== */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#f8fafc] text-gray-900 overflow-hidden z-10 border-b border-gray-100">
          <div className="relative z-10 max-w-7xl mx-auto space-y-14 sm:space-y-18">
            {/* Cabecera de Propósito con Contraste Tipográfico Gilroy */}
            <FadeIn className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
                Nuestra Esencia y Propósito
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-gray-900 tracking-tight leading-tight font-heading">
                <span>{IDENTIDAD_DATA.proposito.titleLine1} </span>
                <span className="text-[#02aeaa]">
                  {IDENTIDAD_DATA.proposito.titleLine2}
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-normal leading-relaxed pt-1">
                {IDENTIDAD_DATA.proposito.description}
              </p>
            </FadeIn>

            {/* 4 Valores en Tarjetas Limpias */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {IDENTIDAD_DATA.valores.map((valor, idx) => {
                const IconComponent = valorIcons[idx] ?? Shield;
                return (
                  <FadeIn
                    key={valor.id}
                    delay={idx * 90}
                    className="p-6 sm:p-8 rounded-3xl bg-white border border-gray-200/70 hover:border-[#02aeaa]/40 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 space-y-4 group flex flex-col justify-between"
                  >
                    <div className="space-y-4">
                      <div className="flex items-center justify-between">
                        <div className="w-12 h-12 rounded-2xl bg-slate-50 group-hover:bg-[#02aeaa] text-[#02aeaa] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm border border-gray-100">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <span className="text-2xl font-black text-gray-200 group-hover:text-[#02aeaa] transition-colors font-heading">
                          {valor.number}
                        </span>
                      </div>

                      <div className="space-y-1">
                        <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#009539] block">
                          {valor.shortTag}
                        </span>
                        <h3 className="text-xl font-bold text-gray-900 group-hover:text-[#02aeaa] transition-colors font-heading">
                          {valor.title}
                        </h3>
                      </div>

                      <p className="text-sm text-gray-600 font-normal leading-relaxed">
                        {valor.description}
                      </p>
                    </div>
                  </FadeIn>
                );
              })}
            </div>
          </div>
        </section>

        {/* ========================================================
            3. LÍNEA DE TIEMPO EDITORIAL COMPLETA: Recorrido Continuo
           ======================================================== */}
        <section className="relative py-16 sm:py-24 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-slate-100">
          <div className="space-y-12 sm:space-y-16">
            {/* Cabecera de Trayectoria */}
            <FadeIn className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539]">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl text-[#183c6b] tracking-tight font-heading">
                <span className="font-light">Hitos que forjaron la </span>
                <span className="font-extrabold text-[#183c6b]">
                  excelencia alimentaria
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Descubre cada etapa de nuestro crecimiento: desde las primeras moliendas en 1978 hasta consolidarnos como un grupo agroalimentario integral al servicio de toda Venezuela.
              </p>
            </FadeIn>

            {/* Componente de Línea de Tiempo Completa */}
            <FadeIn delay={120}>
              <TimelineFull />
            </FadeIn>
          </div>
        </section>

        {/* ========================================================
            4. CONTACTO Y ALIANZAS: Columnas Simétricas 50/50
           ======================================================== */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            {/* Columna Izquierda: Presencia y Canales Oficiales */}
            <FadeIn direction="right" className="w-full flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-3 pr-4 sm:pr-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
                  Conexión Institucional
                </span>
                <h2 className="text-2xl sm:text-3xl text-[#183c6b] tracking-tight font-heading">
                  <span className="font-light">Construyamos juntos </span>
                  <span className="font-extrabold">alianzas de valor</span>
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Ya sea para distribución comercial mayorista, provisión de materias primas o alianzas estratégicas, nuestro equipo corporativo está a tu entera disposición.
                </p>
              </div>

              {/* Canales Directos */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#02aeaa]/10 text-[#02aeaa] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Sede Principal
                    </h4>
                    <p className="text-sm font-semibold text-[#183c6b]">
                      Zona Industrial, Caracas, Miranda, Venezuela
                    </p>
                    <span className="text-xs text-[#02aeaa]">
                      Despacho y logística en los 24 estados
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Correo Corporativo
                    </h4>
                    <a
                      href="mailto:contacto@grupomimesa.com"
                      className="text-sm font-bold text-[#183c6b] hover:text-[#02aeaa] transition-colors"
                    >
                      contacto@grupomimesa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#95c11e]/15 text-[#009539] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Atención Telefónica
                    </h4>
                    <a
                      href="tel:+582120000000"
                      className="text-sm font-bold text-[#183c6b] hover:text-[#02aeaa] transition-colors"
                    >
                      +58 (212) 000-0000 / 0001
                    </a>
                  </div>
                </div>
              </div>

              {/* Fotografía Documental de Apoyo */}
              <div className="relative rounded-3xl overflow-hidden shadow-lg border-2 border-white aspect-[16/9] w-full hidden sm:block">
                <Image
                  src="/images/agro-campo.jpg"
                  alt="Campos de cultivo agrícola en Venezuela - Grupo Mimesa"
                  fill
                  className="object-cover object-center"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#183c6b]/85 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 text-white space-y-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#02aeaa]">
                    Origen Nacional
                  </span>
                  <p className="text-xs font-semibold">
                    Crecemos hombro a hombro junto a los productores del campo venezolano.
                  </p>
                </div>
              </div>
            </FadeIn>

            {/* Columna Derecha: Formulario Reutilizable de Contacto */}
            <FadeIn direction="left" delay={100} className="w-full h-full">
              <ContactoForm
                variant="light"
                title="Ponte en contacto"
                subtitle="Envíanos tus requerimientos o solicitudes y nuestro equipo responderá a la brevedad."
                className="h-full"
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
