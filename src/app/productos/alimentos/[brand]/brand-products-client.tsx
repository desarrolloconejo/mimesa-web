"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { Package, Sparkles, CheckCircle2, ChevronRight, Layers, ArrowRight } from "lucide-react";
import { FoodBrandDetail, ProductPackshot, BrandProductLine } from "@/components/sections/alimentos/alimentos-data";

export function BrandHeroButtons({ color }: { color: string }) {
  const scrollToCatalog = () => {
    const el = document.getElementById("productos-catalogo");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const scrollToContact = () => {
    const el = document.getElementById("contacto-marca");
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="pt-2 flex flex-wrap gap-4">
      <button
        type="button"
        onClick={scrollToCatalog}
        className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full text-white text-xs sm:text-sm font-bold shadow-md hover:shadow-xl hover:-translate-y-0.5 transition-all duration-300 cursor-pointer font-heading"
        style={{ backgroundColor: color }}
      >
        <span>Ver Variedades & Empaques</span>
        <ArrowRight className="w-4 h-4" />
      </button>

      <button
        type="button"
        onClick={scrollToContact}
        className="inline-flex items-center gap-2 px-7 py-3.5 rounded-full text-slate-700 bg-white border border-slate-200 hover:border-slate-300 text-xs sm:text-sm font-bold shadow-xs hover:bg-slate-50 transition-all cursor-pointer font-heading"
      >
        <span>Solicitar Distribución</span>
      </button>
    </div>
  );
}

interface BrandProductsClientProps {
  brand: FoodBrandDetail;
}

export function BrandProductsClient({ brand }: BrandProductsClientProps) {
  // If the brand has lines (like Ronco or Vatel), allow selecting lines
  const hasLines = brand.lines && brand.lines.length > 0;
  const [selectedLineId, setSelectedLineId] = useState<string>(
    hasLines ? brand.lines![0].id : ""
  );

  // For Ronco Especialidades, allow sub-filtering between "Todas", "Jet" and "Vitaminas"
  const [especialidadesFilter, setEspecialidadesFilter] = useState<"todas" | "jet" | "vitaminas">("todas");

  // Clean URL hash so the browser doesn't automatically snap/re-anchor to hash targets on re-render
  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      window.history.replaceState(null, "", window.location.pathname);
    }
  }, []);

  const handleLineChange = (lineId: string) => {
    const currentY = window.scrollY;
    setSelectedLineId(lineId);
    if (brand.id === "ronco" && lineId !== "especialidades") {
      setEspecialidadesFilter("todas");
    }
    // Maintain exact scroll position to completely eliminate jumping up
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentY, behavior: "instant" });
    });
  };

  const handleSubFilterChange = (filter: "todas" | "jet" | "vitaminas") => {
    const currentY = window.scrollY;
    setEspecialidadesFilter(filter);
    // Maintain exact scroll position to completely eliminate jumping up
    requestAnimationFrame(() => {
      window.scrollTo({ top: currentY, behavior: "instant" });
    });
  };

  const currentLine: BrandProductLine | undefined = hasLines
    ? brand.lines!.find((l) => l.id === selectedLineId) || brand.lines![0]
    : undefined;

  // Active products to display
  let displayedProducts: ProductPackshot[] = [];
  if (hasLines && currentLine) {
    if (brand.id === "ronco" && currentLine.id === "especialidades") {
      if (especialidadesFilter === "jet") {
        displayedProducts = currentLine.products.filter((p) => p.id.startsWith("jet"));
      } else if (especialidadesFilter === "vitaminas") {
        displayedProducts = currentLine.products.filter((p) => p.id.startsWith("vitaminas"));
      } else {
        displayedProducts = currentLine.products;
      }
    } else {
      displayedProducts = currentLine.products;
    }
  } else if (brand.products) {
    displayedProducts = brand.products;
  }

  return (
    <div className="space-y-10">
      {/* Encabezado de la Sección de Productos */}
      <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 pb-6 border-b border-slate-200/80 text-left">
        <div className="space-y-2 max-w-2xl">
          <span
            className="text-xs font-extrabold uppercase tracking-widest block font-heading"
            style={{ color: brand.color }}
          >
            Portafolio Oficial de Variedades
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight font-heading">
            Presentaciones y Empaques
          </h2>
          <p
            key={selectedLineId}
            className="text-sm sm:text-base text-slate-600 font-normal leading-relaxed animate-fade-in"
          >
            {hasLines && currentLine
              ? currentLine.description
              : `Conoce las opciones disponibles de ${brand.name} para abastecer los hogares y el sector comercial.`}
          </p>
        </div>

        {/* Contador de Productos */}
        <div className="flex items-center gap-2 px-4 py-2 rounded-2xl bg-white border border-slate-200/80 shadow-2xs shrink-0 self-start md:self-auto">
          <Package className="w-4 h-4 text-slate-400" />
          <span className="text-xs font-bold text-slate-700 font-heading">
            {displayedProducts.length} {displayedProducts.length === 1 ? "Presentación" : "Presentaciones"}
          </span>
        </div>
      </div>

      {/* Selector de Líneas de Producto (Píldoras Superiores para Marcas con Múltiples Líneas) */}
      {hasLines && (
        <div className="space-y-4">
          <div className="flex flex-wrap gap-2.5 p-1.5 rounded-2xl bg-slate-100/90 border border-slate-200/70 w-fit">
            {brand.lines!.map((line) => {
              const isSelected = selectedLineId === line.id;
              return (
                <button
                  key={line.id}
                  type="button"
                  onClick={() => handleLineChange(line.id)}
                  className={`flex items-center gap-2 px-5 py-3 rounded-xl text-xs sm:text-sm font-bold font-heading transition-all duration-200 cursor-pointer ${
                    isSelected
                      ? "text-white shadow-md scale-[1.02]"
                      : "text-slate-600 hover:text-[#183c6b] hover:bg-white/60"
                  }`}
                  style={{
                    backgroundColor: isSelected ? brand.color : "transparent",
                  }}
                >
                  <span>{line.name}</span>
                  {line.badge && (
                    <span
                      className={`text-[9px] font-extrabold uppercase px-1.5 py-0.5 rounded font-heading ${
                        isSelected ? "bg-white/20 text-white" : "bg-slate-200 text-slate-600"
                      }`}
                    >
                      {line.products.length}
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          {/* Sub-selector para Ronco Especialidades: Jet vs Vitaminas */}
          {brand.id === "ronco" && selectedLineId === "especialidades" && (
            <div className="flex items-center gap-2 pt-1 animate-fade-in flex-wrap">
              <span className="text-xs font-bold text-slate-400 pr-2 font-heading">Sublínea:</span>
              <button
                type="button"
                onClick={() => handleSubFilterChange("todas")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${
                  especialidadesFilter === "todas"
                    ? "bg-[#c8102e] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Todas ({currentLine?.products.length})
              </button>
              <button
                type="button"
                onClick={() => handleSubFilterChange("jet")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${
                  especialidadesFilter === "jet"
                    ? "bg-[#c8102e] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Ronco Jet (Cocción Rápida)
              </button>
              <button
                type="button"
                onClick={() => handleSubFilterChange("vitaminas")}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold font-heading transition-colors cursor-pointer ${
                  especialidadesFilter === "vitaminas"
                    ? "bg-[#c8102e] text-white"
                    : "bg-white border border-slate-200 text-slate-600 hover:bg-slate-50"
                }`}
              >
                Ronco Vitaminas (Nutrición Plus)
              </button>
            </div>
          )}
        </div>
      )}

      {/* Grid de Packshots de Producto con animación escalonada al alternar filtro */}
      <div
        key={`${selectedLineId}-${especialidadesFilter}`}
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 sm:gap-8 min-h-[500px]"
      >
        {displayedProducts.map((product, index) => (
          <div
            key={`${selectedLineId}-${especialidadesFilter}-${product.id}`}
            style={{ animationDelay: `${index * 40}ms` }}
            className="animate-brand-card group rounded-[2rem] bg-white border border-slate-200/90 p-6 sm:p-7 shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between space-y-5 relative overflow-hidden"
          >
            {/* Top Badge */}
            <div className="flex items-center justify-between gap-2">
              <span
                className="text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-1 rounded-full bg-slate-100 text-slate-700 font-heading"
              >
                {product.badge || brand.category}
              </span>
              <span className="text-xs font-semibold text-slate-500">
                {product.presentation}
              </span>
            </div>

            {/* Contenedor Packshot de Imagen con Fondito Blanco y Protección contra Pixelado */}
            <div className="h-52 sm:h-56 w-full relative flex items-center justify-center p-4 bg-white rounded-2xl border border-slate-100 shadow-2xs group-hover:shadow-md transition-all">
              <div className="relative flex items-center justify-center w-full h-full group-hover:scale-105 transition-transform duration-500">
                <Image
                  src={product.imageUrl}
                  alt={`${product.name} ${product.presentation}`}
                  width={
                    product.id.includes("purilev") ? 75 :
                    product.id.includes("cochinitos") ? 150 :
                    product.id.includes("truvia") ? 140 :
                    260
                  }
                  height={
                    product.id.includes("purilev") ? 220 :
                    product.id.includes("cochinitos") ? 130 :
                    product.id.includes("truvia") ? 110 :
                    260
                  }
                  className={`object-contain drop-shadow-md ${
                    product.id.includes("purilev") ? "max-h-48 max-w-[85px] w-auto h-auto" :
                    product.id.includes("cochinitos") ? "max-h-36 max-w-[150px] w-auto h-auto" :
                    product.id.includes("truvia") ? "max-h-36 max-w-[140px] w-auto h-auto" :
                    "max-h-48 max-w-[220px] w-auto h-auto"
                  }`}
                />
              </div>
            </div>

            {/* Información del Producto */}
            <div className="space-y-1.5 text-left">
              <h3
                className="text-base sm:text-lg font-black text-[#183c6b] tracking-tight font-heading transition-colors"
                style={{ "--brand-hover-color": brand.color } as React.CSSProperties}
              >
                {product.name}
              </h3>
              <p className="text-xs sm:text-[13px] text-slate-600 font-normal leading-relaxed">
                {product.description || `Presentación oficial de ${product.presentation} garantizando el rendimiento y frescura de la marca.`}
              </p>
            </div>

            {/* Micro Barra Inferior */}
            <div className="pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-600 font-medium">
              <span className="font-semibold text-slate-700">Formato {product.presentation}</span>
              <span className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: brand.color }} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
