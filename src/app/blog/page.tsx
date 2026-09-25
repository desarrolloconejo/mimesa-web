import React from "react";
import type { Metadata } from "next";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import { CyanotypeHero } from "@/components/ui/cyanotype-hero";
import { BlogGrid } from "./blog-grid";

export const metadata: Metadata = {
  title: "Blog & Actualidad | Grupo Mimesa - Noticias Agroalimentarias de Venezuela",
  description:
    "Explora las últimas noticias, avances de la industria, historias de impacto comunitario y desarrollos de Grupo Mimesa en el sector agroalimentario venezolano.",
  openGraph: {
    title: "Blog & Actualidad | Grupo Mimesa",
    description:
      "Explora las últimas noticias, avances de la industria e historias de impacto de Grupo Mimesa.",
    url: "https://grupomimesa.com/blog",
    siteName: "Grupo Mimesa",
    locale: "es_VE",
    type: "website",
  },
};

export default function BlogPage() {
  return (
    <div className="min-h-screen flex flex-col bg-white text-gray-900 selection:bg-[#02aeaa] selection:text-white">
      {/* Header Corporativo Fijo */}
      <HeaderWrapper />

      <main className="flex-1 w-full">
        {/* Hero Principal con Textura de Cianotipia Auténtica */}
        <CyanotypeHero
          textureSrc="/images/textures/TEXTURA2.webp"
          breadcrumbs={[
            { label: "Inicio", href: "/" },
            { label: "Blog" },
          ]}
          kicker="Actualidad & Noticias"
          titleLine1="Historias, noticias e innovación"
          titleLine2="en el sector agroalimentario"
          description="Conoce los avances, lanzamientos, iniciativas sociales y perspectivas de Grupo Mimesa en el desarrollo de la producción nacional."
        />

        {/* Grilla Editorial de Noticias */}
        <BlogGrid />
      </main>

      {/* Footer Unificado */}
      <FooterWrapper includeContact={true} />
    </div>
  );
}
