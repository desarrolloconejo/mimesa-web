import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { HeroWrapper } from "@/components/sections/hero/hero-wrapper";
import { QuienesSomosWrapper } from "@/components/sections/quienes-somos/quienes-somos-wrapper";
import { TrayectoriaWrapper } from "@/components/sections/trayectoria/trayectoria-wrapper";
import { IdentidadWrapper } from "@/components/sections/identidad/identidad-wrapper";
import { AtributosCtaWrapper } from "@/components/sections/atributos/atributos-cta-wrapper";
import { AtributosWrapper } from "@/components/sections/atributos/atributos-wrapper";
import { CompromisoWrapper } from "@/components/sections/compromiso/compromiso-wrapper";
import { CompromisoSocialWrapper } from "@/components/sections/compromiso-social/compromiso-social-wrapper";
import { TrabajaWrapper } from "@/components/sections/trabaja-con-nosotros/trabaja-wrapper";
import { ContactoWrapper } from "@/components/sections/contacto/contacto-wrapper";
import { ProductosWrapper } from "@/components/sections/productos/productos-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02afab] selection:text-white">
      {/* Dynamic Header with Smart Pinning / Scroll Reveal */}
      <HeaderWrapper />

      <main className="flex-1 w-full relative z-0">
        {/* Section 1: Hero with entrance animations and organic elements */}
        <HeroWrapper />

        {/* Section 2: Quiénes Somos & Por qué Mimesa with Parallax and Scroll Reactions */}
        <QuienesSomosWrapper />

        {/* Section 3: Organic Living Branch Timeline with Interactive Milestones */}
        <TrayectoriaWrapper />

        {/* Section 4: Identidad, Propósito y Valores (3 Variantes CSS Design Awards) */}
        <IdentidadWrapper />

        {/* Section 5: CTA Creativo - Atributos que nos acompañan en todo momento */}
        <AtributosCtaWrapper />

        {/* Section 6: Atributos en Detalle con Imagen Continua (Flexibilidad, Ética, Experiencia) */}
        <AtributosWrapper />

        {/* Section 7: Nuestros Negocios y Marcas (Alimentos y Produsal a ancho completo) */}
        <ProductosWrapper />

        {/* Section 8: Compromiso que heredamos (Transición Editorial Limpia) */}
        <CompromisoWrapper />

        {/* Section 9: Nuestro compromiso con Venezuela (Programa Social Nutriendo la Prosperidad) */}
        <CompromisoSocialWrapper />

        {/* Section 10: Trabaja con nosotros (Reclutamiento y Oportunidades Laborales) */}
        <TrabajaWrapper />

        {/* Section 11: Contacto (Formulario y Canales Oficiales en Fondo Azul) */}
        <ContactoWrapper />
      </main>

      {/* Corporate Footer with Full Links, Socials & Legal Copyright */}
      <FooterWrapper />
    </div>
  );
}
