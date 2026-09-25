import Link from "next/link";
import { ArrowRight, Building2 } from "lucide-react";
import { Metadata } from "next";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { CyanotypeHero } from "@/components/ui/cyanotype-hero";
import { AlimentosCatalogView } from "@/components/sections/alimentos/alimentos-catalog-view";

export const metadata: Metadata = {
  title: "Consumo Masivo | Marcas Líderes | Grupo Mimesa",
  description:
    "Descubre nuestras marcas líderes de consumo masivo en Venezuela: Vatel, Ronco, BlancaFlor, Fiorentina, Los 3 Cochinitos y truvía. Nutrición, sabor y tradición en cada hogar.",
};

export default function ConsumoMasivoPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#009539] selection:text-white">
      <HeaderWrapper />
      <main className="flex-1 min-h-screen bg-white">
        {/* Hero Auténtico Cianotipia */}
        <CyanotypeHero
          kicker="PRODUCTOS • CONSUMO MASIVO & NUTRICIÓN"
          titleBold="Nuestras marcas líderes"
          titleAfter="en la mesa venezolana"
          titleLine1="Nuestras marcas líderes"
          titleLine2="en la mesa venezolana"
          textureSrc="/images/textures/TEXTURA3.webp"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Productos", href: "/productos" },
            { label: "Consumo Masivo" },
          ]}
          description="Desde harinas de trigo de máxima pureza y pastas tradicionales de sémola durum hasta aceites 100% puros, mantecas criollas y endulzantes de origen natural. Aportamos nutrición y sabor a millones de hogares venezolanos."
        />

        {/* Contenedor del Catálogo de Consumo Masivo */}
        <section id="consumo-masivo" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <AlimentosCatalogView />
        </section>

        {/* Banner de Enlace Cruzado a Ingredientes Industriales */}
        <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#183c6b] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#02aeaa]/20 text-[#02aeaa] text-xs font-black uppercase tracking-widest border border-[#02aeaa]/30">
                <Building2 className="w-3.5 h-3.5" />
                <span>División Agroindustrial</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                ¿Buscas insumos y materias primas para tu panadería o industria?
              </h3>
              <p className="text-sm sm:text-base text-slate-300 font-light leading-relaxed">
                Conoce nuestras soluciones de mantecas especializadas, aceites para fritura continua, harinas de trigo de alta fuerza y endulzantes a granel.
              </p>
            </div>
            <Link
              href="/productos/ingredientes"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-[#009539] hover:bg-[#007a3d] text-white text-sm font-bold shadow-xl transition-all duration-300 shrink-0 hover:-translate-y-0.5 cursor-pointer font-heading"
            >
              <span>Explorar Ingredientes Industriales</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>
      </main>
      <FooterWrapper />
    </div>
  );
}
