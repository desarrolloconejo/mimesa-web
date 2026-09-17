"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ALIMENTOS_BRANDS } from "@/components/sections/productos/productos-data";

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const [isAlimentosOpen, setIsAlimentosOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const alimentosTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
      setIsAlimentosOpen(false);
    }, 200);
  };

  const handleAlimentosEnter = () => {
    if (alimentosTimeoutRef.current) clearTimeout(alimentosTimeoutRef.current);
    setIsAlimentosOpen(true);
  };

  const handleAlimentosLeave = () => {
    alimentosTimeoutRef.current = setTimeout(() => {
      setIsAlimentosOpen(false);
    }, 200);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    if (alimentosTimeoutRef.current) clearTimeout(alimentosTimeoutRef.current);
    setIsOpen(false);
    setIsAlimentosOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") closeMenu();
    };

    document.addEventListener("mousedown", handleClickOutside);
    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Enlace Principal Clickeable: Productos */}
      <Link
        href="/productos"
        onClick={closeMenu}
        className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] xl:text-sm font-medium rounded-lg transition-colors cursor-pointer ${
          isOpen
            ? "text-[#02afab] font-semibold bg-[#02afab]/8"
            : "text-[#1a3c6a] hover:text-[#02afab] hover:bg-[#02afab]/5"
        }`}
        aria-expanded={isOpen}
      >
        <span>Productos</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#02afab]" : "text-gray-400"
          }`}
        />
      </Link>

      {/* Menú Desplegable Principal con Bordes Pulidos y Mayor Detalle */}
      <div
        className={`absolute top-full left-0 pt-2.5 z-50 transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-1.5 pointer-events-none invisible"
        }`}
      >
        <div className="relative flex items-start drop-shadow-xl">
          
          {/* Caja 1: Divisiones Principales (Alimentos & Produsal) */}
          <div
            className={`w-60 bg-white/98 backdrop-blur-md border border-slate-200/90 overflow-hidden z-20 transition-all duration-200 shadow-lg ${
              isAlimentosOpen
                ? "rounded-l-2xl rounded-r-none border-r-0"
                : "rounded-2xl"
            }`}
          >
            {/* Acento superior de borde: Gradiente de marca */}
            <div className="h-[3px] bg-gradient-to-r from-[#009539] to-[#02afab] w-full" />

            <div className="py-1">
              {/* Opción 1: Alimentos con badges y micro-detalles */}
              <div
                onMouseEnter={handleAlimentosEnter}
                onMouseLeave={handleAlimentosLeave}
                className={`flex items-center justify-between px-3.5 py-3 cursor-pointer transition-all duration-150 border-l-[3px] ${
                  isAlimentosOpen
                    ? "bg-slate-50/90 border-[#009539]"
                    : "border-transparent hover:bg-slate-50/70 hover:border-[#009539]"
                }`}
              >
                <Link
                  href="/#productos"
                  onClick={closeMenu}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-[13px] font-bold leading-tight transition-colors ${
                        isAlimentosOpen ? "text-[#009539]" : "text-[#1a3c6a]"
                      }`}
                    >
                      Alimentos
                    </p>
                    <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#009539]/10 text-[#009539] leading-none">
                      7 marcas
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-normal truncate mt-1">
                    Consumo masivo y nutrición
                  </p>
                </Link>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-150 shrink-0 ml-1.5 ${
                    isAlimentosOpen ? "text-[#009539] translate-x-0.5" : "text-slate-300"
                  }`}
                />
              </div>

              {/* Separador de borde sutil */}
              <div className="mx-3 border-b border-slate-100/90" />

              {/* Opción 2: Produsal con badges y micro-detalles */}
              <Link
                href="/#productos"
                onClick={closeMenu}
                onMouseEnter={() => {
                  if (alimentosTimeoutRef.current) clearTimeout(alimentosTimeoutRef.current);
                  setIsAlimentosOpen(false);
                }}
                className="block px-3.5 py-3 border-l-[3px] border-transparent hover:border-[#02afab] hover:bg-slate-50/70 transition-all duration-150 cursor-pointer group"
              >
                <div className="flex items-center gap-2">
                  <p className="text-[13px] font-bold leading-tight text-[#1a3c6a] group-hover:text-[#02afab] transition-colors">
                    Produsal
                  </p>
                  <span className="text-[10px] font-bold px-1.5 py-0.5 rounded bg-[#02afab]/10 text-[#02afab] leading-none">
                    Sal Solar
                  </span>
                </div>
                <p className="text-[11px] text-gray-500 font-normal truncate mt-1">
                  Sal marina Los Olivitos
                </p>
              </Link>
            </div>
          </div>

          {/* Caja 2: Subdesplegable de Alimentos (Integrado con bordes curvos continuos y detalles de marca) */}
          <div
            onMouseEnter={handleAlimentosEnter}
            onMouseLeave={handleAlimentosLeave}
            className={`absolute top-0 left-full -ml-px w-64 bg-white/98 backdrop-blur-md border border-slate-200/90 overflow-hidden transition-all duration-200 ease-out z-10 rounded-r-2xl rounded-bl-2xl rounded-tl-none shadow-2xl ${
              isAlimentosOpen
                ? "opacity-100 translate-x-0 pointer-events-auto visible"
                : "opacity-0 -translate-x-1.5 pointer-events-none invisible"
            }`}
          >
            {/* Acento superior de borde: Continuación del gradiente de marca */}
            <div className="h-[3px] bg-gradient-to-r from-[#02afab] to-[#1a3c6a] w-full" />

            {/* Cabecera sutil del submenú */}
            <div className="px-4 py-2 border-b border-slate-100/90 flex items-center justify-between bg-slate-50/50">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                Portafolio Alimentos
              </span>
              <span className="text-[10px] font-semibold text-[#009539] bg-[#009539]/10 px-1.5 py-0.5 rounded">
                Líderes
              </span>
            </div>

            {/* Lista detallada de las 7 marcas con acentos de color, categoría y hover micro-chevron */}
            <div className="py-1 divide-y divide-slate-50">
              {ALIMENTOS_BRANDS.map((brand) => (
                <Link
                  key={brand.id}
                  href="/#productos"
                  onClick={closeMenu}
                  className="group/brand flex items-center justify-between px-4 py-2 text-xs transition-all duration-150 hover:bg-[#f4faf6] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    <span
                      className="w-2 h-2 rounded-full shrink-0 transition-transform duration-150 group-hover/brand:scale-125"
                      style={{ backgroundColor: brand.logoColor || "#009539" }}
                    />
                    <span className="font-bold text-slate-700 group-hover/brand:text-[#009539] transition-colors truncate text-[12px]">
                      {brand.name}
                    </span>
                  </div>
                  
                  <div className="flex items-center gap-1.5 shrink-0 ml-2">
                    <span className="text-[10px] font-medium px-2 py-0.5 rounded-full bg-slate-100 text-slate-500 group-hover/brand:bg-[#009539]/10 group-hover/brand:text-[#009539] transition-colors">
                      {brand.category}
                    </span>
                    <ChevronRight className="w-3 h-3 text-[#009539] opacity-0 -translate-x-1 group-hover/brand:opacity-100 group-hover/brand:translate-x-0 transition-all duration-150" />
                  </div>
                </Link>
              ))}
            </div>

            {/* Pie sutil del submenú con detalle de calidad */}
            <div className="px-4 py-2 border-t border-slate-100/90 bg-slate-50/40 flex items-center justify-between text-[10px] text-slate-400 font-medium">
              <span>Calidad garantizada Mimesa</span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#009539]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
