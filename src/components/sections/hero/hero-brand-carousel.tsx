"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";

export interface HeroBrandItem {
  id: string;
  name: string;
  division: "consumo-masivo" | "ingredientes";
  divisionLabel: string;
  category: string;
  logoUrl: string;
  href: string;
  color: string;
}

export const HERO_BRANDS: HeroBrandItem[] = [
  // 6 Marcas de Consumo Masivo
  {
    id: "vatel",
    name: "Vatel",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Aceites Comestibles",
    logoUrl: "/images/productos/VATEL-LOGO.webp",
    href: "/productos/consumo-masivo/vatel",
    color: "#dc2626",
  },
  {
    id: "ronco",
    name: "Ronco",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Pastas de Trigo Durum",
    logoUrl: "/images/productos/ronco/LOGORONCO.webp",
    href: "/productos/consumo-masivo/ronco",
    color: "#c8102e",
  },
  {
    id: "blancaflor",
    name: "BlancaFlor",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Harinas de Trigo",
    logoUrl: "/images/productos/BLANCAFLOR-LOGO.webp",
    href: "/productos/consumo-masivo/blancaflor",
    color: "#183c6b",
  },
  {
    id: "fiorentina",
    name: "Fiorentina",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Pastas Premium",
    logoUrl: "/images/productos/FIORENTINA-LOG.webp",
    href: "/productos/consumo-masivo/fiorentina",
    color: "#00387b",
  },
  {
    id: "los-3-cochinitos",
    name: "Los 3 Cochinitos",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Mantecas Tradicionales",
    logoUrl: "/images/productos/LOS3COCHINITOS-LOGO-HD-TRANS.webp",
    href: "/productos/consumo-masivo/los-3-cochinitos",
    color: "#b91c1c",
  },
  {
    id: "truvia",
    name: "truvía",
    division: "consumo-masivo",
    divisionLabel: "Consumo Masivo",
    category: "Endulzante Natural",
    logoUrl: "/images/productos/TRUVIA-LOGO-HD-TRANS.webp",
    href: "/productos/consumo-masivo/truvia",
    color: "#16a34a",
  },
  // 9 Soluciones de Ingredientes Industriales
  {
    id: "tresco",
    name: "Tresco",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Mantecas Panaderas",
    logoUrl: "/images/productos/TRESCO-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#tresco",
    color: "#183c6b",
  },
  {
    id: "vatel-pro",
    name: "Vatel Pro",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Fritura Especializada",
    logoUrl: "/images/productos/VATELPRO-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#vatel-pro",
    color: "#dc2626",
  },
  {
    id: "rey-del-norte",
    name: "Rey del Norte",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Harinas Panificables",
    logoUrl: "/images/productos/REYDELNORTE-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#rey-del-norte",
    color: "#009539",
  },
  {
    id: "gramoven",
    name: "Gramoven",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Sémolas & Molienda Industrial",
    logoUrl: "/images/productos/GRAMOVEN-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#gramoven",
    color: "#d97706",
  },
  {
    id: "el-rey",
    name: "El Rey",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Harinas de Fuerza",
    logoUrl: "/images/productos/ELREY-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#el-rey",
    color: "#c8102e",
  },
  {
    id: "grano-de-oro",
    name: "Grano de Oro",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Harinas de Alta Pureza",
    logoUrl: "/images/productos/GRANODEORO-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#grano-de-oro",
    color: "#ca8a04",
  },
  {
    id: "branca",
    name: "Branca",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Mantecas Emulsionadas",
    logoUrl: "/images/productos/BRANCA-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#branca",
    color: "#0284c7",
  },
  {
    id: "consul",
    name: "Consul",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Grasas Vegetales Multiuso",
    logoUrl: "/images/productos/CONSUL-INGREDIENTE-LOGO.webp",
    href: "/productos/ingredientes#consul",
    color: "#4f46e5",
  },
  {
    id: "truvia-industrial",
    name: "truvía Industrial",
    division: "ingredientes",
    divisionLabel: "Ingredientes Industriales",
    category: "Stevia Industrial",
    logoUrl: "/images/productos/TRUVIA-INGREDIENTE-LOGO.png",
    href: "/productos/ingredientes#truvia-industrial",
    color: "#16a34a",
  },
];

export function HeroBrandCarousel() {
  // Duplicamos el listado para lograr un loop infinito continuo y fluido
  const loopedBrands = [...HERO_BRANDS, ...HERO_BRANDS];

  return (
    <div className="w-full relative z-20">
      {/* Riel Infinito con Máscara de Desvanecimiento Lateral */}
      <div className="relative w-full overflow-hidden [mask-image:linear-gradient(to_right,transparent,black_6%,black_94%,transparent)] py-2">
        <div className="flex gap-4 sm:gap-6 animate-marquee-slow hover:[animation-play-state:paused] w-max select-none">
          {loopedBrands.map((brand, idx) => (
            <Link
              key={`${brand.id}-${idx}`}
              href={brand.href}
              className="group/card w-48 sm:w-60 lg:w-64 h-24 sm:h-28 lg:h-32 shrink-0 rounded-2xl bg-white border border-slate-200/90 shadow-sm hover:shadow-2xl hover:border-[#02aeaa]/50 transition-all duration-300 p-3 sm:p-4 flex flex-col justify-between cursor-pointer hover:-translate-y-1"
            >
              {/* Contenedor del Logo de la Marca con fondo blanco puro y máxima amplitud visual */}
              <div className="relative w-full flex-1 flex items-center justify-center overflow-hidden">
                <Image
                  src={brand.logoUrl}
                  alt={`Logotipo ${brand.name}`}
                  fill
                  sizes="260px"
                  unoptimized
                  className="object-contain p-1 group-hover/card:scale-105 transition-transform duration-300"
                />
              </div>

              {/* Sub-etiqueta con categoría y división */}
              <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] font-bold font-heading">
                <span className="text-slate-500 truncate max-w-[130px] sm:max-w-[165px]">
                  {brand.category}
                </span>
                <span
                  className="w-2.5 h-2.5 rounded-full shrink-0"
                  style={{
                    backgroundColor:
                      brand.division === "consumo-masivo" ? "#009539" : "#183c6b",
                  }}
                  title={brand.divisionLabel}
                />
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
