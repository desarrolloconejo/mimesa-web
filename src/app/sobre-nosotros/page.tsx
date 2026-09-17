import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
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
import {
  GlowOrb,
  MimesaLeafLime,
  MimesaDotCyan,
} from "@/components/ui/organic-shapes";

export const metadata = {
  title: "Sobre nosotros | Grupo Mimesa - Tradición, Propósito y Futuro",
  description:
    "Conoce la historia, propósito y valores de Grupo Mimesa. Más de 45 años impulsando la producción agroalimentaria, la nutrición y el bienestar de las familias venezolanas.",
};

export default function SobreNosotrosPage() {
  const valorIcons = [Shield, Zap, Heart, Target];

  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02afab] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="cyan" className="top-12 -left-48 w-[650px] h-[650px] opacity-20" />
        <GlowOrb color="green" className="top-1/3 -right-48 w-[600px] h-[600px] opacity-15" />
        <GlowOrb color="lime" className="bottom-20 left-1/4 w-[550px] h-[550px] opacity-15" />

        {/* Floating Organic Brand Elements */}
        <div className="absolute top-28 right-8 pointer-events-none hidden xl:block opacity-45">
          <MimesaLeafLime size={110} />
        </div>
        <div className="absolute top-1/2 left-6 pointer-events-none hidden xl:block opacity-50">
          <MimesaDotCyan size={42} />
        </div>

        {/* ========================================================
            1. HERO INSTITUCIONAL: Mayor Altura, Fondo Fotográfico Nítido y Título en 2 Líneas
           ======================================================== */}
        <section className="relative min-h-[580px] sm:min-h-[660px] lg:min-h-[740px] flex flex-col justify-center pt-32 sm:pt-36 lg:pt-44 pb-24 sm:pb-32 lg:pb-36 px-4 sm:px-6 lg:px-8 overflow-hidden z-10">
          {/* Fotografía de Fondo con Overlay Transparente Más Liviano */}
          <div className="absolute inset-0 z-0">
            <Image
              src="/images/agro-campo.jpg"
              alt="Campos agrícolas de Grupo Mimesa en Venezuela"
              fill
              priority
              className="object-cover object-center"
              sizes="100vw"
            />
            {/* Gradiente multi-capa con menor opacidad blanca para mayor visibilidad del paisaje */}
            <div className="absolute inset-0 bg-gradient-to-r from-white/80 via-white/50 to-transparent sm:to-black/5" />
            <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white/25" />
          </div>

          <div className="relative z-10 max-w-7xl mx-auto w-full">
            {/* Breadcrumb */}
            <nav className="flex items-center gap-2 text-xs font-semibold text-gray-600 mb-8 sm:mb-12 select-none">
              <Link href="/" className="hover:text-[#02afab] transition-colors">
                Inicio
              </Link>
              <ChevronRight className="w-3 h-3 text-gray-400" />
              <span className="text-[#1a3c6a] font-bold">Sobre nosotros</span>
            </nav>

            <div className="max-w-4xl space-y-6 sm:space-y-8">
              {/* Kicker Editorial: Solo Color y Texto */}
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab] block">
                Tradición & Excelencia Agroalimentaria
              </span>

              {/* Título Principal en Exactamente Dos Líneas */}
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-[#1a3c6a] tracking-tight leading-[1.12]">
                <span className="block">Más de 45 años alimentando</span>
                <span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
                  el porvenir de Venezuela
                </span>
              </h1>

              {/* Texto Descriptivo con Espacio Respirable a la Derecha */}
              <p className="text-base sm:text-lg lg:text-xl text-gray-800 font-medium leading-relaxed max-w-2xl pr-4 sm:pr-8 pt-1">
                Somos un grupo empresarial venezolano especializado en la producción, transformación y comercialización de alimentos esenciales. Unimos la fuerza productiva de nuestros campos con infraestructura industrial de vanguardia para llevar nutrición y confianza a cada hogar del país.
              </p>
            </div>
          </div>
        </section>

        {/* ========================================================
            2. PROPÓSITO Y VALORES CORPORATIVOS (Fondos en Tonos Oscuros Azules)
           ======================================================== */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-[#0c203b] via-[#163359] to-[#0d223d] text-white overflow-hidden z-10">
          {/* Acentos de Luz Ambiental en el fondo oscuro */}
          <div className="absolute -top-32 -left-32 w-96 h-96 bg-[#02afab]/15 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-32 -right-32 w-96 h-96 bg-[#009539]/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto space-y-14 sm:space-y-18">
            
            {/* Cabecera de Propósito */}
            <div className="max-w-3xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#30deda]">
                Nuestra Esencia y Propósito
              </span>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight leading-tight">
                {IDENTIDAD_DATA.proposito.titleLine1}{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#30deda] via-[#4ade80] to-[#a3e635]">
                  {IDENTIDAD_DATA.proposito.titleLine2}
                </span>
              </h2>
              <p className="text-base sm:text-lg text-slate-300 font-light leading-relaxed pt-1">
                {IDENTIDAD_DATA.proposito.description}
              </p>
            </div>

            {/* 4 Valores en Tarjetas Flotantes en Tonos Oscuros */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
              {IDENTIDAD_DATA.valores.map((valor, idx) => {
                const IconComponent = valorIcons[idx] ?? Shield;
                return (
                  <div
                    key={valor.id}
                    className="p-6 sm:p-8 rounded-3xl bg-white/[0.04] border border-white/[0.08] hover:bg-white/[0.08] hover:border-[#02afab]/40 transition-all duration-300 space-y-4 group shadow-sm"
                  >
                    <div className="flex items-center justify-between">
                      <div className="w-12 h-12 rounded-2xl bg-white/10 group-hover:bg-[#02afab] text-[#30deda] group-hover:text-white flex items-center justify-center transition-all duration-300 shadow-sm">
                        <IconComponent className="w-5 h-5" />
                      </div>
                      <span className="text-2xl font-black text-white/20 group-hover:text-[#30deda] transition-colors">
                        {valor.number}
                      </span>
                    </div>

                    <div className="space-y-1">
                      <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#4ade80] block">
                        {valor.shortTag}
                      </span>
                      <h3 className="text-xl font-bold text-white group-hover:text-[#30deda] transition-colors">
                        {valor.title}
                      </h3>
                    </div>

                    <p className="text-sm text-slate-300 font-light leading-relaxed">
                      {valor.description}
                    </p>
                  </div>
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
            <div className="text-center max-w-2xl mx-auto space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539]">
                Nuestra Historia
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#1a3c6a] tracking-tight">
                Hitos que forjaron la{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#02afab] via-[#009539] to-[#94c11e]">
                  excelencia alimentaria
                </span>
              </h2>
              <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
                Descubre cada etapa de nuestro crecimiento: desde las primeras moliendas en 1978 hasta consolidarnos como un grupo agroalimentario integral al servicio de toda Venezuela.
              </p>
            </div>

            {/* Componente de Línea de Tiempo Completa */}
            <TimelineFull />

          </div>
        </section>

        {/* ========================================================
            4. CONTACTO Y ALIANZAS: Columnas Simétricas 50/50
           ======================================================== */}
        <section className="relative py-20 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10 border-t border-slate-100">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-14 items-stretch">
            
            {/* Columna Izquierda: Presencia y Canales Oficiales */}
            <div className="w-full flex flex-col justify-between space-y-8 py-2">
              <div className="space-y-3 pr-4 sm:pr-8">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02afab]">
                  Conexión Institucional
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
                  Construyamos juntos alianzas de valor
                </h2>
                <p className="text-sm text-gray-500 font-light leading-relaxed">
                  Ya sea para distribución comercial mayorista, provisión de materias primas o alianzas estratégicas, nuestro equipo corporativo está a tu entera disposición.
                </p>
              </div>

              {/* Canales Directos */}
              <div className="space-y-6">
                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#02afab]/10 text-[#02afab] flex items-center justify-center shrink-0">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Sede Principal
                    </h4>
                    <p className="text-sm font-semibold text-[#1a3c6a]">
                      Zona Industrial, Caracas, Miranda, Venezuela
                    </p>
                    <span className="text-xs text-[#02afab]">
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
                      className="text-sm font-bold text-[#1a3c6a] hover:text-[#02afab] transition-colors"
                    >
                      contacto@grupomimesa.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-11 h-11 rounded-2xl bg-[#94c11e]/15 text-[#009539] flex items-center justify-center shrink-0">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-0.5">
                    <h4 className="text-xs font-bold text-gray-400 uppercase tracking-wider">
                      Atención Telefónica
                    </h4>
                    <a
                      href="tel:+582120000000"
                      className="text-sm font-bold text-[#1a3c6a] hover:text-[#02afab] transition-colors"
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
                <div className="absolute inset-0 bg-gradient-to-t from-[#1a3c6a]/80 via-transparent to-transparent pointer-events-none" />
                <div className="absolute bottom-4 inset-x-4 text-white space-y-0.5">
                  <span className="text-[10px] font-extrabold uppercase tracking-wider text-[#30deda]">
                    Origen Nacional
                  </span>
                  <p className="text-xs font-semibold">
                    Crecemos hombro a hombro junto a los productores del campo venezolano.
                  </p>
                </div>
              </div>

            </div>

            {/* Columna Derecha: Formulario Reutilizable de Contacto (Mismo tamaño) */}
            <div className="w-full h-full">
              <ContactoForm
                variant="light"
                title="Ponte en contacto"
                subtitle="Envíanos tus requerimientos o solicitudes y nuestro equipo responderá a la brevedad."
                className="h-full"
              />
            </div>

          </div>
        </section>
      </main>

      {/* Footer Corporativo */}
      <FooterWrapper />
    </div>
  );
}
