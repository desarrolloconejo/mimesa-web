import React from "react";
import Link from "next/link";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
} from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { ContactoForm } from "@/components/sections/contacto/contacto-form";
import { DualShowcase } from "@/components/sections/productos-page/dual-showcase";
import { FadeIn } from "@/components/ui/fade-in";
import { CyanotypeHero } from "@/components/ui/cyanotype-hero";

export const metadata = {
  title: "Productos | Consumo Masivo e Ingredientes Industriales | Grupo Mimesa",
  description:
    "Conoce nuestras dos divisiones productivas: marcas líderes de consumo masivo (Vatel, Ronco, BlancaFlor, Fiorentina, Los 3 Cochinitos, truvía) y soluciones de ingredientes industriales para panificación y la agroindustria venezolana.",
};

export default function ProductosPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#009539] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-white relative overflow-hidden">

        {/* ========================================================
            1. HERO CIANOTIPIA: PRODUCTOS / DOS DIVISIONES
           ======================================================== */}
        <CyanotypeHero
          kicker="Portafolio de Productos • Grupo Mimesa"
          titleLine1="Consumo Masivo e Ingredientes"
          titleLine2={<>en la <span className="text-[#95c11e]">mesa</span> y la <span className="text-[#02aeaa]">industria</span></>}
          textureSrc="/images/textures/TEXTURA3.webp"
          description="A través de nuestras dos divisiones productivas estratégicas, abastecemos con calidad, nutrición y confiabilidad tanto a las familias venezolanas en su día a día como a panaderías, obradores y plantas agroindustriales en todo el país."
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Productos" },
          ]}
        />

        {/* ========================================================
            2. PASARELA DUAL: DOS GRANDES DIVISIONES CARA A CARA
           ======================================================== */}
        <div className="relative pt-16 sm:pt-24 z-10">
          <FadeIn direction="up">
            <DualShowcase />
          </FadeIn>
        </div>

        {/* ========================================================
            3. CONTACTO COMERCIAL: Distribución y Ventas de Alimentos
           ======================================================== */}
        <section className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-white border-t border-slate-200/80 relative z-10">
          <FadeIn className="max-w-7xl mx-auto space-y-12">
            {/* Encabezado */}
            <div className="max-w-2xl space-y-3">
              <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
                Atención Comercial • Alimentos
              </span>
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
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
                      <h3 className="text-sm font-bold text-[#183c6b]">Centro de Despacho Central</h3>
                      <p className="text-sm text-gray-600 leading-relaxed">
                        Zona Industrial, Caracas, Miranda, Venezuela.
                      </p>
                      <span className="text-xs text-[#009539] font-medium block">
                        Despacho a nivel nacional en los 24 estados
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#02aeaa]/10 text-[#02aeaa] flex items-center justify-center shrink-0 group-hover:bg-[#02aeaa] group-hover:text-white transition-all duration-300">
                      <Phone className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b]">Ventas Comerciales Directas</h3>
                      <p className="text-base font-bold text-gray-800">
                        +58 (212) 000-0000
                      </p>
                      <span className="text-xs text-gray-500 block">
                        Línea corporativa mayorista y WhatsApp
                      </span>
                    </div>
                  </div>

                  <div className="flex items-start gap-4 group">
                    <div className="w-12 h-12 rounded-2xl bg-[#95c11e]/15 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                      <Mail className="w-5 h-5" />
                    </div>
                    <div className="space-y-1.5">
                      <h3 className="text-sm font-bold text-[#183c6b]">Correos Comerciales</h3>
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
                    <div className="w-12 h-12 rounded-2xl bg-[#183c6b]/8 text-[#183c6b] flex items-center justify-center shrink-0 group-hover:bg-[#183c6b] group-hover:text-white transition-all duration-300">
                      <Clock className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-[#183c6b]">Horario de Atención</h3>
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
