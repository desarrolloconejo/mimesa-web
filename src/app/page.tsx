import dynamic from "next/dynamic";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { HeroWrapper } from "@/components/sections/hero/hero-wrapper";
import { QuienesSomosWrapper } from "@/components/sections/quienes-somos/quienes-somos-wrapper";
import { LazySection } from "@/components/ui/lazy-section";

// Lazy-loaded Below-the-fold Sections (Code-splitting para máximo rendimiento en producción)
const TrayectoriaWrapper = dynamic(
  () =>
    import("@/components/sections/trayectoria/trayectoria-wrapper").then(
      (mod) => mod.TrayectoriaWrapper
    )
);

const IdentidadWrapper = dynamic(
  () =>
    import("@/components/sections/identidad/identidad-wrapper").then(
      (mod) => mod.IdentidadWrapper
    )
);

const AtributosCtaWrapper = dynamic(
  () =>
    import("@/components/sections/atributos/atributos-cta-wrapper").then(
      (mod) => mod.AtributosCtaWrapper
    )
);

const AtributosWrapper = dynamic(
  () =>
    import("@/components/sections/atributos/atributos-wrapper").then(
      (mod) => mod.AtributosWrapper
    )
);

const ProductosWrapper = dynamic(
  () =>
    import("@/components/sections/productos/productos-wrapper").then(
      (mod) => mod.ProductosWrapper
    )
);

const CompromisoWrapper = dynamic(
  () =>
    import("@/components/sections/compromiso/compromiso-wrapper").then(
      (mod) => mod.CompromisoWrapper
    )
);

const CompromisoSocialWrapper = dynamic(
  () =>
    import(
      "@/components/sections/compromiso-social/compromiso-social-wrapper"
    ).then((mod) => mod.CompromisoSocialWrapper)
);

const TrabajaWrapper = dynamic(
  () =>
    import("@/components/sections/trabaja-con-nosotros/trabaja-wrapper").then(
      (mod) => mod.TrabajaWrapper
    )
);

const FooterWrapper = dynamic(
  () =>
    import("@/components/layout/footer/footer-wrapper").then(
      (mod) => mod.FooterWrapper
    )
);

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02aeaa] selection:text-white">
      {/* Dynamic Header with Smart Pinning / Scroll Reveal */}
      <HeaderWrapper />

      <main className="flex-1 w-full relative z-0">
        {/* Section 1: Hero with entrance animations and organic elements (Above-the-fold inmediato) */}
        <HeroWrapper />

        {/* Section 2: Quiénes Somos & Por qué Mimesa (Inmediato) */}
        <QuienesSomosWrapper />

        {/* Section 3: Organic Living Branch Timeline with Interactive Milestones (Lazy) */}
        <LazySection minHeight="450px" rootMargin="350px 0px">
          <TrayectoriaWrapper />
        </LazySection>

        {/* Section 4: Identidad, Propósito y Valores (Lazy) */}
        <LazySection minHeight="500px" rootMargin="350px 0px">
          <IdentidadWrapper />
        </LazySection>

        {/* Section 5: CTA Creativo - Atributos que nos acompañan en todo momento (Lazy) */}
        <LazySection minHeight="250px" rootMargin="350px 0px">
          <AtributosCtaWrapper />
        </LazySection>

        {/* Section 6: Atributos en Detalle con Imagen Continua (Lazy) */}
        <LazySection minHeight="450px" rootMargin="350px 0px">
          <AtributosWrapper />
        </LazySection>

        {/* Section 7: Nuestros Negocios y Marcas (Lazy) */}
        <LazySection minHeight="500px" rootMargin="350px 0px">
          <ProductosWrapper />
        </LazySection>

        {/* Section 8: Compromiso que heredamos (Lazy) */}
        <LazySection minHeight="300px" rootMargin="350px 0px">
          <CompromisoWrapper />
        </LazySection>

        {/* Section 9: Nuestro compromiso con Venezuela - Programa Social NLP (Lazy) */}
        <LazySection minHeight="500px" rootMargin="350px 0px">
          <CompromisoSocialWrapper />
        </LazySection>

        {/* Section 10: Trabaja con nosotros (Lazy) */}
        <LazySection minHeight="350px" rootMargin="350px 0px">
          <TrabajaWrapper />
        </LazySection>
      </main>

      {/* Corporate Footer & Contact Seamlessly Unified on Single Cyanotype Canvas (Soporte directo a ancla #contacto) */}
      <LazySection id="contacto" minHeight="500px" rootMargin="400px 0px">
        <FooterWrapper includeContact={true} />
      </LazySection>
    </div>
  );
}
