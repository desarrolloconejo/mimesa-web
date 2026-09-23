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
import { ContactoHero } from "@/components/sections/contacto/contacto-hero";

export const metadata = {
  title: "Contacto | Grupo Mimesa - Producción y Distribución de Alimentos",
  description:
    "Ponte en contacto directo con Grupo Mimesa. Canales de atención comercial, ventas mayoristas, sal industrial Produsal y alianzas en toda Venezuela.",
};

export default function ContactoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo */}
      <HeaderWrapper />

      <main className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative overflow-hidden">

        {/* ========================================================
            1. HERO CIANOTIPIA (Slide 11, 12, 15)
           ======================================================== */}
        <ContactoHero />

        {/* ========================================================
            2. CONTENIDO PRINCIPAL: Diseño Abierto y Fluido (Sin Cajitas Rígidas)
           ======================================================== */}
        <section className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto z-10">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
            
            {/* Left Column: Canales Oficiales en Formato Editorial Abierto (Sin cajas ni bordes) */}
            <FadeIn direction="right" className="lg:col-span-5 space-y-10 py-2">
              <div className="space-y-2">
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
                  Información Institucional
                </span>
                <h2 className="text-2xl sm:text-3xl font-black text-[#183c6b] tracking-tight">
                  Sede y Canales Oficiales
                </h2>
                <p className="text-sm text-gray-500 font-normal leading-relaxed pt-1">
                  Atención oportuna para clientes, proveedores e industrias en todo el territorio nacional.
                </p>
              </div>

              {/* Lista Abierta y Espaciada de Canales (Sin marcos negros) */}
              <div className="space-y-8">
                {/* Sede Principal */}
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
                    <h3 className="text-sm font-bold text-[#183c6b]">Atención Telefónica</h3>
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
                  <div className="w-12 h-12 rounded-2xl bg-[#95c11e]/15 text-[#009539] flex items-center justify-center shrink-0 group-hover:bg-[#009539] group-hover:text-white transition-all duration-300">
                    <Mail className="w-5 h-5" />
                  </div>
                  <div className="space-y-1.5">
                    <h3 className="text-sm font-bold text-[#183c6b]">Correos Institucionales</h3>
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
                      <a
                        href="mailto:reclutamiento_venezuela@grupomimesa.com"
                        className="block text-gray-500 hover:text-[#02aeaa] transition-colors text-xs pt-0.5"
                      >
                        reclutamiento_venezuela@grupomimesa.com
                      </a>
                    </div>
                  </div>
                </div>

                {/* Horario Operativo */}
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
