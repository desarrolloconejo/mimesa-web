import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { BleedingBrandLeaves } from "@/components/ui/organic-shapes";
import { FadeIn } from "@/components/ui/fade-in";
import { TRABAJA_DATA } from "@/components/sections/trabaja-con-nosotros/trabaja-data";

/**
 * Hero for /trabaja-con-nosotros
 *
 * Slide 15 Authentic Cyanotype Treatment:
 * - Treatment C: Brushed Painterly Emulsion Wash (Panel 4) on Prussian Blue
 * - Highly visible texture with authentic hand-painted ferric brush strokes
 * - Slide 12: Bleeding brand leaves strictly in powdery white at bottom-left
 * - Triad of Brand Colors: Lima (#95c11e), Verde (#009539), and Cian (#02aeaa)
 */
export function TrabajaHero() {
  return (
    <section className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#183c6b] text-white select-none">
      {/* 1. Base Prussian Blue Layer */}
      <div className="absolute inset-0 bg-[#183c6b] z-0" />

      {/* 2. Authentic Cyanotype Droplets Wash (Slide 15) - High Visibility */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src="/images/textures/cyanotype-droplets.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center w-full h-full opacity-90 mix-blend-normal"
        />
      </div>

      {/* 3. Slide 15 Grain / Noise Texture Overlay (+11, +20, +27) */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "160px 160px",
        }}
      />

      {/* 4. Gentle Vignette to ensure text clarity without obscuring the texture */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#143560]/85 via-[#183c6b]/40 to-transparent sm:w-2/3 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#143560]/60 via-transparent to-black/20 pointer-events-none z-0" />

      {/* 5. Slide 12: Bleeding Brand Leaves in powdery white at bottom-left */}
      <BleedingBrandLeaves
        position="bottom-left"
        variant="white"
        className="opacity-95 z-10"
      />

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <FadeIn direction="up" delay={0.1} className="space-y-4 sm:space-y-6 max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {/* Breadcrumbs Navigation with Brand Accents */}
          <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300/90 font-medium">
            <Link href="/" className="hover:text-white transition-colors duration-200">
              Inicio
            </Link>
            <ChevronRight className="w-3.5 h-3.5 text-slate-400/60 shrink-0" />
            <span className="text-[#95c11e] font-semibold">
              Trabaja con nosotros
            </span>
          </nav>

          {/* Subtitle in Brand Color (Clean, without left/right adornments) */}
          <div className="flex items-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#95c11e] block">
              Talento & Capital Humano
            </span>
          </div>

          {/* Headline in Gilroy Black (900) - Exactly Two Lines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-md">
            <span className="block sm:whitespace-nowrap">
              Construyamos el <span className="text-[#02aeaa]">futuro</span>
            </span>
            <span className="block sm:whitespace-nowrap">
              <span className="text-[#95c11e]">agroalimentario</span> de Venezuela
            </span>
          </h1>

          {/* Description in Montserrat */}
          <p className="text-sm sm:text-base text-slate-100 font-normal leading-relaxed max-w-2xl pt-1">
            En Grupo Mimesa creemos en el poder transformador de las personas. Fomentamos un entorno de trabajo colaborativo, de constante aprendizaje y orientado al mérito, donde cada talento suma al bienestar y la nutrición de nuestro país.
          </p>
        </FadeIn>
      </div>
    </section>
  );
}
