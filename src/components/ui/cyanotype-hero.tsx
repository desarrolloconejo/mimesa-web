import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ChevronRight } from "lucide-react";
import { BleedingBrandLeaves, MimesaSprout } from "@/components/ui/organic-shapes";
import { FadeIn } from "@/components/ui/fade-in";

export interface BreadcrumbItem {
  label: string;
  href?: string;
}

export interface CyanotypeHeroProps {
  kicker: string;
  titleLight?: string;
  titleBold?: string;
  titleAfter?: string;
  titleLine1?: React.ReactNode;
  titleLine2?: React.ReactNode;
  textureSrc?: string;
  description: string;
  breadcrumbs: BreadcrumbItem[];
  badge?: string;
  showSproutWatermark?: boolean;
  children?: React.ReactNode;
}

/**
 * Brand Cyanotype Page Hero
 *
 * Implements:
 * - Slide 11: Gilroy Black (900) uniform headline typography + Montserrat body
 * - Slide 12: Bleeding brand leaves strictly in WHITE on cyanotype texture ("para poder tener más legibilidad")
 *   with soft powdery chalk sun-print effect ("como polvo", like cyanotype photographic exposure plates)
 * - Slide 15: Authentic Prussian Blue (#183c6b / #0e2440) Cyanotype sun-print texture & industrial blueprint
 */
export function CyanotypeHero({
  kicker,
  titleLight,
  titleBold,
  titleAfter = "",
  titleLine1,
  titleLine2,
  textureSrc = "/images/textures/TEXTURA1.webp",
  description,
  breadcrumbs,
  showSproutWatermark = true,
  children,
}: CyanotypeHeroProps) {
  return (
    <section className="relative min-h-[460px] sm:min-h-[480px] lg:min-h-[500px] flex flex-col justify-center pt-28 sm:pt-32 lg:pt-36 pb-16 sm:pb-20 lg:pb-20 px-4 sm:px-6 lg:px-8 overflow-hidden bg-[#0e2440] text-white select-none">
      {/* 1. Base Dark Prussian Blue background layer */}
      <div className="absolute inset-0 bg-[#0e2440] z-0" />

      {/* 2. Authentic Cyanotype Sun-print Watercolor Wash Texture */}
      <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
        <Image
          src={textureSrc}
          alt=""
          aria-hidden="true"
          fill
          priority
          className="object-cover object-center scale-105 opacity-90 mix-blend-normal"
        />
      </div>

      {/* 3. Fine Paper Grain & Dust Texture Overlay (Cyanotype Process Emulsion) */}
      <div
        className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
          backgroundSize: "180px 180px",
        }}
      />

      {/* 4. Depth Vignette & Prussian Blue Grading */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#0e2440]/90 via-[#183c6b]/65 to-[#0e2440]/85 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-gradient-to-t from-[#0e2440] via-transparent to-black/30 pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_65%_35%,rgba(34,81,142,0.35)_0%,transparent_65%)] pointer-events-none z-0" />

      {/* 5. Slide 12: Bleeding Brand Leaves strictly in WHITE with soft powdery chalk effect */}
      <BleedingBrandLeaves
        position="top-right"
        variant="white"
        className="opacity-95 z-10"
      />

      {/* 6. Subtle floating powdery white dust dot accents (Slide 12: elements in white) */}
      <div className="absolute top-1/3 right-1/4 w-5 h-5 sm:w-7 sm:h-7 rounded-full bg-white/80 shadow-[0_0_14px_rgba(255,255,255,0.7)] blur-[0.4px] pointer-events-none z-10" />
      <div className="absolute top-[42%] right-[22%] w-2 h-2 rounded-full bg-white/60 shadow-[0_0_6px_rgba(255,255,255,0.5)] blur-[0.3px] pointer-events-none z-10" />

      {/* 7. Optional Sprout Watermark in powdery white chalk */}
      {showSproutWatermark && (
        <div className="absolute -bottom-16 -right-12 sm:-bottom-20 sm:-right-8 opacity-12 pointer-events-none z-0">
          <MimesaSprout size={380} variant="white" />
        </div>
      )}

      {/* Hero Content Container */}
      <div className="relative z-20 max-w-7xl mx-auto w-full">
        <FadeIn direction="up" delay={0.1} className="space-y-4 sm:space-y-6 max-w-3xl lg:max-w-4xl xl:max-w-5xl">
          {/* Breadcrumbs Navigation */}
          {breadcrumbs && breadcrumbs.length > 0 && (
            <nav aria-label="Breadcrumb" className="flex items-center space-x-2 text-xs sm:text-sm text-slate-300/80 font-medium">
              {breadcrumbs.map((crumb, index) => {
                const isLast = index === breadcrumbs.length - 1;
                return (
                  <React.Fragment key={crumb.label}>
                    {index > 0 && <ChevronRight className="w-3.5 h-3.5 text-slate-400/60 shrink-0" />}
                    {crumb.href && !isLast ? (
                      <Link
                        href={crumb.href}
                        className="hover:text-white transition-colors duration-200"
                      >
                        {crumb.label}
                      </Link>
                    ) : (
                      <span className={isLast ? "text-[#02aeaa] font-semibold drop-shadow-sm" : ""}>
                        {crumb.label}
                      </span>
                    )}
                  </React.Fragment>
                );
              })}
            </nav>
          )}

          {/* Subtitle in Brand Color (Clean, without left/right adornments) */}
          <div className="flex items-center">
            <span className="text-xs sm:text-sm font-extrabold uppercase tracking-widest text-[#95c11e] block drop-shadow-sm">
              {kicker}
            </span>
          </div>

          {/* Headline in Gilroy Black (900) - Exactly Two Lines */}
          <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[3.25rem] xl:text-6xl font-black text-white tracking-tight leading-[1.12] font-heading drop-shadow-md">
            {titleLine1 && titleLine2 ? (
              <>
                <span className="block sm:whitespace-nowrap">{titleLine1}</span>
                <span className="block sm:whitespace-nowrap">{titleLine2}</span>
              </>
            ) : (
              <>
                <span className="block sm:whitespace-nowrap">{titleLight}</span>
                <span className="block sm:whitespace-nowrap">
                  <span className="text-[#95c11e]">{titleBold}</span>
                  {titleAfter && <span> {titleAfter}</span>}
                </span>
              </>
            )}
          </h1>

          {/* Description in Montserrat (Standardized, balanced size) */}
          <p className="text-sm sm:text-base text-slate-200 font-normal leading-relaxed max-w-2xl pt-1">
            {description}
          </p>

          {children && <div className="pt-2">{children}</div>}
        </FadeIn>
      </div>
    </section>
  );
}
