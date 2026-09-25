import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ChevronRight,
  Sun,
  Waves,
  Mountain,
  Factory,
  ShieldCheck,
  Ship,
  Sparkles,
  Leaf,
  MapPin,
  Phone,
  Mail,
  Clock,
  CheckCircle2,
  Layers,
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
import { CyanotypeHero } from "@/components/ui/cyanotype-hero";

export const metadata = {
  title: "División Produsal | Parque Salinero Solar Los Olivitos | Grupo Mimesa",
  description:
    "Produsal es la principal productora de sal solar de Venezuela. Más de 650.000 toneladas anuales en más de 40.000 hectáreas en Los Olivitos, Zulia. Pureza superior al 99.5%.",
};

const PRODUSAL_METRICS = [
  {
    value: "+650.000",
    unit: "Toneladas / Año",
    label: "Capacidad instalada de producción líder en la región",
    icon: Mountain,
    color: "#02aeaa",
  },
  {
    value: "+40.000",
    unit: "Hectáreas",
    label: "Parque salinero solar en Los Olivitos, Edo. Zulia",
    icon: Factory,
    color: "#183c6b",
  },
  {
    value: "100%",
    unit: "Evaporación Solar",
    label: "Proceso totalmente ecológico, impulsado por sol y vientos",
    icon: Sun,
    color: "#02aeaa",
  },
  {
    value: ">99.5%",
    unit: "Pureza NaCl",
    label: "Estándares internacionales para grado alimenticio e industrial",
    icon: ShieldCheck,
    color: "#009539",
  },
];

const ETAPAS_PROCESO = [
  {
    step: "01",
    title: "Captación Marina Controlada",
    description:
      "Ingreso de aguas marinas ricas en minerales a través de canales de toma regulados, aprovechando las mareas y bombeos de bajo impacto energético.",
  },
  {
    step: "02",
    title: "Evaporación Solar Progresiva",
    description:
      "El agua circula por un circuito de lagunas de concentración donde la radiación solar y los vientos alisios del Zulia evaporan el agua dulce de manera 100% natural.",
  },
  {
    step: "03",
    title: "Cristalización y Cosecha Mecánica",
    description:
      "Al alcanzar la saturación salina, se precipitan cristales de cloruro de sodio de alta densidad sobre lechos endurecidos, cosechados con maquinaria especializada.",
  },
  {
    step: "04",
    title: "Lavado, Centrifugado y Refinación",
    description:
      "El mineral es lavado con salmuera saturada para remover impurezas, secado y clasificado granulométricamente para uso doméstico (yodado/fluorado) o industrial.",
  },
];

const LINEAS_SUMINISTRO = [
  {
    title: "Sal Fina de Mesa y Consumo Masivo",
    subtitle: "Consumo Humano & Cocina",
    description:
      "Sal marina refinada de grano uniforme, enriquecida con yodo y flúor según la normativa sanitaria venezolana. Presentaciones domésticas de 1 Kg y sacos institucionales.",
    badge: "Grado Alimenticio",
    color: "#02aeaa",
  },
  {
    title: "Sal Marina Parrillera & Gourmet",
    subtitle: "Cortes & Gastronomía Especial",
    description:
      "Cristales de sal gruesa seleccionados para preservar jugos y realzar el sabor en asados y cocina de alta gama. Textura crujiente y disolución controlada.",
    badge: "Gourmet",
    color: "#183c6b",
  },
  {
    title: "Sal Grado Industrial & Químico",
    subtitle: "Cloro-Álcali, Petroquímica y Tratamiento",
    description:
      "Materia prima de pureza superior a 99.5% NaCl para procesos de electrólisis, plantas de cloro-sosa, industria textil, curtidurías, ablandamiento y desalinización de aguas.",
    badge: "Alta Pureza Industrial",
    color: "#02aeaa",
  },
  {
    title: "Nutrición Animal & Suplemento Ganadero",
    subtitle: "Hatos, Forraje y Bloques Minerales",
    description:
      "Aporte esencial de sodio y microminerales para la ganadería bovina, porcina y avícola, disponible a granel o compactada para lamedores y raciones balanceadas.",
    badge: "Agropecuario",
    color: "#009539",
  },
];

export default function ProdusalPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">

        {/* ========================================================
            1. HERO CIANOTIPIA (Slide 11, 12, 15)
           ======================================================== */}
        <CyanotypeHero
          kicker="Complejo Salinero Solar • Los Olivitos, Edo. Zulia"
          titleLine1="Produsal: La principal"
          titleLine2={<><span className="text-[#02aeaa]">productora de sal</span> de <span className="text-[#95c11e]">Venezuela</span></>}
          textureSrc="/images/textures/TEXTURA4.webp"
          description="Aprovechamos la fuerza natural del sol y los vientos alisios en más de 40.000 hectáreas del estado Zulia para cosechar más de 650.000 toneladas anuales de sal marina solar de máxima pureza, abasteciendo a los hogares, la agroindustria y los sectores químicos del país."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Productos", href: "/productos" },
            { label: "División Produsal" },
          ]}
        >
          {/* Logo Oficial Produsal */}
          <div className="h-12 w-44 bg-white/95 backdrop-blur-md rounded-2xl p-2 border border-white/20 shadow-sm relative overflow-hidden">
            <Image
              src="/images/productos/PRODUSAL-LOGO.webp"
              alt="Logo Oficial Produsal"
              fill
              className="object-contain p-1"
              priority
            />
          </div>
        </CyanotypeHero>

        {/* ========================================================
            2. MÉTRICAS E INFRAESTRUCTURA DE GRAN ESCALA
           ======================================================== */}
        <section className="relative pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <FadeIn className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {PRODUSAL_METRICS.map((m) => {
              const IconComp = m.icon;
              return (
                <div
                  key={m.label}
                  className="p-7 sm:p-8 rounded-[2rem] bg-white border border-slate-200/90 shadow-sm hover:shadow-lg transition-all duration-300 space-y-4"
                >
                  <div
                    className="w-12 h-12 rounded-2xl flex items-center justify-center text-white shadow-xs"
                    style={{ backgroundColor: m.color }}
                  >
                    <IconComp className="w-6 h-6" />
                  </div>

                  <div className="space-y-1">
                    <div className="text-3xl sm:text-4xl font-black text-[#183c6b] tracking-tight">
                      {m.value}
                    </div>
                    <div className="text-xs font-bold uppercase tracking-wider text-slate-500">
                      {m.unit}
                    </div>
                  </div>

                  <p className="text-xs text-slate-600 font-light leading-relaxed">
                    {m.label}
                  </p>
                </div>
              );
            })}
          </FadeIn>
        </section>

        {/* ========================================================
            3. SHOWCASE PANORÁMICO: EL COMPLEJO EN LOS OLIVITOS
           ======================================================== */}
        <section className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <FadeIn>
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Fotografía de Gran Formato (6 cols) */}
            <div className="lg:col-span-6 relative">
              <div className="relative h-[380px] sm:h-[480px] w-full rounded-[2.5rem] overflow-hidden border border-slate-200/90 shadow-2xl group">
                <Image
                  src="/images/mimesa-operaciones-7697.webp"
                  alt="Instalaciones agroindustriales y capacidad productiva Grupo Mimesa"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0c223f]/80 via-transparent to-transparent" />
                
                <div className="absolute top-5 left-5">
                  <span className="px-4 py-2 rounded-2xl bg-white/95 backdrop-blur-md text-[#02aeaa] text-xs font-extrabold uppercase tracking-wider shadow-lg border border-white/60">
                    Costa Oriental del Lago de Maracaibo
                  </span>
                </div>

                <div className="absolute bottom-6 left-6 right-6 text-white space-y-1">
                  <p className="text-sm font-bold drop-shadow-md">
                    Municipio Miranda, Estado Zulia
                  </p>
                  <p className="text-xs text-white/80 font-light drop-shadow-sm">
                    Condiciones microclimáticas de evaporación únicas en el hemisferio
                  </p>
                </div>
              </div>
            </div>

            {/* Narrativa Industrial (6 cols) */}
            <div className="lg:col-span-6 space-y-6">
              <div className="space-y-3">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
                  Infraestructura de Vanguardia
                </span>
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight leading-tight">
                  Una de las plantas de sal solar más modernas del mundo
                </h2>
                <p className="text-base text-gray-600 font-light leading-relaxed">
                  El complejo de producción de sal solar de Produsal aprovecha las aguas marinas del Golfo de Venezuela y del Lago de Maracaibo. El régimen ininterrumpido de radiación solar y los vientos alisios durante todo el año permiten evaporar millones de metros cúbicos de agua sin requerir combustibles fósiles para la concentración inicial.
                </p>
              </div>

              <div className="space-y-3 pt-2">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#02aeaa] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">
                    Capacidad de cosecha superior a 650.000 toneladas métricas anuales.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#02aeaa] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">
                    Proceso 100% natural, renovable y de mínimo impacto ambiental.
                  </p>
                </div>
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-[#02aeaa] shrink-0 mt-0.5" />
                  <p className="text-sm text-gray-700 font-medium">
                    Instalaciones de refinación y molienda certificadas para inocuidad alimentaria.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ========================================================
          4. EL PROCESO DE EVAPORACIÓN SOLAR NATURAL (4 Etapas)
         ======================================================== */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white via-slate-50 to-white border-y border-slate-200/80 z-10">
        <FadeIn className="max-w-7xl mx-auto space-y-16">
          <div className="text-center max-w-3xl mx-auto space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
              Ciclo Productivo Sustentable
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
              Cómo cosechamos la sal marina más pura
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Un ciclo productivo natural donde la energía solar y las mareas trabajan en perfecta sincronía.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {ETAPAS_PROCESO.map((etapa) => (
              <div
                key={etapa.step}
                className="p-7 rounded-[2rem] bg-white border border-slate-200/90 shadow-sm hover:shadow-md transition-all duration-300 space-y-4 relative group"
              >
                <span className="text-4xl font-black text-[#02aeaa]/20 group-hover:text-[#02aeaa] transition-colors block">
                  {etapa.step}
                </span>
                <h3 className="text-lg font-bold text-[#183c6b] leading-snug">
                  {etapa.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 font-light leading-relaxed">
                  {etapa.description}
                </p>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ========================================================
          5. LÍNEAS DE SUMINISTRO Y APLICACIONES DE CONSUMO E INDUSTRIALES
         ======================================================== */}
      <section className="relative py-24 sm:py-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <FadeIn className="space-y-16">
          <div className="max-w-3xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
              Portafolio de Soluciones
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
              Líneas de suministro para cada industria y el hogar
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Desde la mesa de cada familia venezolana hasta los procesos químicos más exigentes de la industria pesada.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {LINEAS_SUMINISTRO.map((linea) => (
              <div
                key={linea.title}
                className="p-8 sm:p-10 rounded-[2.5rem] bg-white border border-slate-200/90 shadow-sm hover:shadow-xl transition-all duration-300 space-y-6 flex flex-col justify-between"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between gap-4">
                    <span
                      className="text-[10px] font-extrabold uppercase tracking-wider px-3 py-1 rounded-full text-white shadow-xs"
                      style={{ backgroundColor: linea.color }}
                    >
                      {linea.badge}
                    </span>
                    <span className="text-xs text-slate-400 font-medium">
                      {linea.subtitle}
                    </span>
                  </div>

                  <h3 className="text-2xl font-black text-[#183c6b] leading-snug">
                    {linea.title}
                  </h3>

                  <p className="text-sm text-slate-600 font-light leading-relaxed">
                    {linea.description}
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between text-xs font-bold text-[#02aeaa]">
                  <span>Suministro a granel o ensacado</span>
                  <Layers className="w-4 h-4" />
                </div>
              </div>
            ))}
          </div>
        </FadeIn>
      </section>

      {/* ========================================================
          6. ARMONÍA ECOLÓGICA: REFUGIO DE LOS OLIVITOS & FLAMENCOS
         ======================================================== */}
      <section className="relative pb-24 sm:pb-32 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
        <FadeIn>
          <div className="p-8 sm:p-14 rounded-[2.5rem] bg-gradient-to-br from-[#0c223f] via-[#0f2e54] to-[#0c223f] text-white shadow-2xl relative overflow-hidden">
            <div className="relative z-10 max-w-3xl space-y-6">
              <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-extrabold uppercase tracking-widest bg-emerald-500/20 text-emerald-300 border border-emerald-500/30">
                <Leaf className="w-3.5 h-3.5" />
                <span>Compromiso Ambiental & Biodiversidad</span>
              </span>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight leading-tight">
                Coexistencia con el santuario del Flamenco del Caribe
              </h2>

              <p className="text-base text-slate-200 font-light leading-relaxed">
                El Parque Salinero Los Olivitos colinda directamente con el Refugio de Fauna Silvestre y Reserva de Pesca Ciénaga de Los Olivitos, un humedal de importancia internacional (Sitio Ramsar). Las lagunas salinas albergan microorganismos (como la microalga <em>Dunaliella salina</em> y pequeños crustáceos) que constituyen la base de la alimentación del Flamenco del Caribe (<em>Phoenicopterus ruber</em>), permitiendo la colonia de anidación más importante del país.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <ShieldCheck className="w-5 h-5 text-emerald-400 shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    Monitoreo constante de calidad de aguas y avifauna
                  </span>
                </div>
                <div className="flex items-center gap-3 bg-white/10 p-4 rounded-2xl border border-white/10">
                  <Ship className="w-5 h-5 text-[#30deda] shrink-0" />
                  <span className="text-xs font-semibold text-white">
                    Terminal marítimo con protocolos de cero derrames
                  </span>
                </div>
              </div>
            </div>
          </div>
        </FadeIn>
      </section>

      {/* ========================================================
          7. CONTACTO COMERCIAL & SUMINISTRO INDUSTRIAL DE SAL
         ======================================================== */}
      <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative z-10">
        <FadeIn className="max-w-7xl mx-auto space-y-12">
          <div className="max-w-2xl space-y-3">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
              Ventas Industriales & Contratos de Suministro
            </span>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
              Solicita cotización de sal marina solar
            </h2>
            <p className="text-base text-gray-600 font-light leading-relaxed">
              Atendemos requerimientos de sal a granel, ensacada en Big Bags o pallets para industrias químicas, plantas de alimentos, agroindustria o distribución comercial nacional e internacional.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
            {/* Canales Oficiales (5 cols) */}
            <div className="lg:col-span-5 space-y-8 py-2">
              <div className="space-y-6">
                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#02aeaa]/10 text-[#02aeaa] flex items-center justify-center shrink-0 group-hover:bg-[#02aeaa] group-hover:text-white transition-all duration-300">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#183c6b]">Complejo Salinero Los Olivitos</h3>
                    <p className="text-sm text-gray-600 leading-relaxed">
                      Municipio Miranda, Estado Zulia, Venezuela.
                    </p>
                    <span className="text-xs text-[#02aeaa] font-medium block">
                      Despacho por vía marítima y terrestre
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#183c6b]/10 text-[#183c6b] flex items-center justify-center shrink-0 group-hover:bg-[#183c6b] group-hover:text-white transition-all duration-300">
                    <Phone className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#183c6b]">Atención Suministro Industrial</h3>
                    <p className="text-base font-bold text-gray-800">
                      +58 (212) 000-0000
                    </p>
                    <span className="text-xs text-gray-500 block">
                      Línea comercial industrial y logística
                    </span>
                  </div>
                </div>

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#183c6b]">Correos de la División</h3>
                    <div className="space-y-1 text-sm">
                      <a
                        href="mailto:produsal@grupomimesa.com"
                        className="block text-[#02aeaa] hover:underline font-semibold"
                      >
                        produsal@grupomimesa.com
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

                <div className="flex items-start gap-4 group">
                  <div className="w-12 h-12 rounded-2xl bg-slate-100 text-slate-700 flex items-center justify-center shrink-0 group-hover:bg-[#183c6b] group-hover:text-white transition-all duration-300">
                    <Clock className="w-5 h-5" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-[#183c6b]">Horario Operativo y Despachos</h3>
                    <p className="text-sm text-gray-700">
                      Lunes a Viernes: 8:00 AM – 5:00 PM (HLV)
                    </p>
                    <span className="text-xs text-gray-400 block">
                      Despachos marítimos coordinados 24 horas
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Formulario (7 cols) */}
            <div className="lg:col-span-7">
              <ContactoForm
                variant="light"
                title="Cotización de Sal Industrial o Consumo"
                subtitle="Indica la aplicación, especificación de pureza (NaCl) y volumen estimado en toneladas."
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
