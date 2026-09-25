import Link from "next/link";
import { ArrowRight, ShoppingBag } from "lucide-react";
import { Metadata } from "next";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { CyanotypeHero } from "@/components/ui/cyanotype-hero";
import { IngredientesCatalogView } from "@/components/sections/ingredientes/ingredientes-catalog-view";

export const metadata: Metadata = {
  title: "Ingredientes Industriales | Grupo Mimesa",
  description:
    "Descubre nuestro portafolio de ingredientes industriales y materias primas: Tresco, Vatel Pro, Rey del Norte, Gramoven, El Rey, Grano de Oro, Branca, Consul y truvía Industrial.",
};

export default function IngredientesPage() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#183c6b] selection:text-white">
      <HeaderWrapper />
      <main className="flex-1 min-h-screen bg-white">
        {/* Hero Auténtico Cianotipia */}
        <CyanotypeHero
          kicker="DIVISIÓN AGROINDUSTRIAL • MATERIAS PRIMAS"
          titleBold="Ingredientes y soluciones"
          titleAfter="para la agroindustria"
          titleLine1="Ingredientes y materias primas"
          titleLine2="para la agroindustria"
          textureSrc="/images/textures/TEXTURA3.webp"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Productos", href: "/productos" },
            { label: "Ingredientes" },
          ]}
          description="Suministramos harinas panaderas de alta fuerza, mantecas vegetales especializadas, aceites para fritura continua y endulzantes a panaderías, obradores y plantas procesadoras en toda Venezuela."
        />

        {/* Contenedor del Catálogo */}
        <section id="ingredientes" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto scroll-mt-24">
          <IngredientesCatalogView />
        </section>

        {/* Banner de Enlace Cruzado a Consumo Masivo */}
        <section className="pb-20 sm:pb-28 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto">
          <div className="rounded-3xl p-8 sm:p-12 bg-[#009539] text-white flex flex-col lg:flex-row items-center justify-between gap-6 shadow-xl border border-white/10 relative overflow-hidden">
            <div className="space-y-3 text-center lg:text-left relative z-10 max-w-2xl">
              <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 text-white text-xs font-black uppercase tracking-widest border border-white/30">
                <ShoppingBag className="w-3.5 h-3.5" />
                <span>División Hogar & Nutrición</span>
              </span>
              <h3 className="text-2xl sm:text-3xl font-black tracking-tight">
                ¿Buscas nuestras marcas para el hogar y la familia venezolana?
              </h3>
              <p className="text-sm sm:text-base text-slate-100 font-light leading-relaxed">
                Descubre Vatel, Ronco, BlancaFlor, Fiorentina, Los 3 Cochinitos y truvía: tradición, sabor y calidad en cada plato.
              </p>
            </div>
            <Link
              href="/productos/consumo-masivo"
              className="inline-flex items-center gap-2.5 px-8 py-4 rounded-full bg-white text-[#183c6b] hover:bg-slate-100 text-sm font-bold shadow-xl transition-all duration-300 shrink-0 hover:-translate-y-0.5 cursor-pointer font-heading"
            >
              <span>Explorar Consumo Masivo</span>
              <ArrowRight className="w-4 h-4 text-[#009539]" />
            </Link>
          </div>
        </section>
      </main>
      <FooterWrapper />
    </div>
  );
}
