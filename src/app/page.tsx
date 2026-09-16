import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { HeroWrapper } from "@/components/sections/hero/hero-wrapper";
import { QuienesSomosWrapper } from "@/components/sections/quienes-somos/quienes-somos-wrapper";
import { TrayectoriaWrapper } from "@/components/sections/trayectoria/trayectoria-wrapper";
import { IdentidadWrapper } from "@/components/sections/identidad/identidad-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-white selection:bg-[#02afab] selection:text-white">
      {/* Dynamic Header with Smart Pinning / Scroll Reveal */}
      <HeaderWrapper />

      <main className="flex-1 w-full">
        {/* Section 1: Hero with entrance animations and organic elements */}
        <HeroWrapper />

        {/* Section 2: Quiénes Somos & Por qué Mimesa with Parallax and Scroll Reactions */}
        <QuienesSomosWrapper />

        {/* Section 3: Organic Living Branch Timeline with Interactive Milestones */}
        <TrayectoriaWrapper />

        {/* Section 4: Identidad, Propósito y Valores (3 Variantes CSS Design Awards) */}
        <IdentidadWrapper />
      </main>

      {/* Corporate Footer with Full Links, Socials & Legal Copyright */}
      <FooterWrapper />
    </div>
  );
}
