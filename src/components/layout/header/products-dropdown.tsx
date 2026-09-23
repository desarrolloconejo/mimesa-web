"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { ChevronDown, ChevronRight } from "lucide-react";
import { ALIMENTOS_BRANDS } from "@/components/sections/productos/productos-data";

interface ProductsDropdownProps {
  isActive?: boolean;
}

export function ProductsDropdown({ isActive: propIsActive }: ProductsDropdownProps = {}) {
  const pathname = usePathname();
  const isActive =
    propIsActive !== undefined
      ? propIsActive
      : Boolean(
          pathname === "/productos" ||
          pathname?.startsWith("/productos/") ||
          pathname === "/alimentos" ||
          pathname === "/produsal"
        );
  const isAlimentosActive = pathname === "/productos/alimentos" || pathname === "/alimentos";
  const isProdusalActive = pathname === "/productos/produsal" || pathname === "/produsal";

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
        className={`whitespace-nowrap inline-flex items-center gap-1.5 px-2.5 xl:px-3 py-1 text-xs xl:text-[13px] font-semibold font-montserrat transition-colors duration-150 cursor-pointer relative ${
          isOpen || isActive
            ? "text-[#02aeaa]"
            : "text-[#183c6b] hover:text-[#02aeaa]"
        }`}
        aria-expanded={isOpen}
        aria-current={isActive ? "page" : undefined}
      >
        <span className="font-montserrat">Productos</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-150 ${
            isOpen
              ? "rotate-180 text-[#02aeaa]"
              : isActive
              ? "text-[#02aeaa]"
              : "text-gray-400 group-hover:text-[#02aeaa]"
          }`}
        />
        {isActive && (
          <span className="absolute -bottom-1 left-2.5 right-2.5 h-[2px] bg-[#02aeaa] rounded-full" />
        )}
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
            <div className="h-[3px] bg-gradient-to-r from-[#009539] to-[#02aeaa] w-full" />

            <div className="py-1">
              {/* Opción 1: Alimentos con badges y micro-detalles */}
              <div
                onMouseEnter={handleAlimentosEnter}
                onMouseLeave={handleAlimentosLeave}
                className={`flex items-center justify-between px-3.5 py-3 cursor-pointer transition-all duration-150 border-l-[3px] ${
                  isAlimentosOpen || isAlimentosActive
                    ? "bg-slate-50/90 border-[#009539]"
                    : "border-transparent hover:bg-slate-50/70 hover:border-[#009539]"
                }`}
              >
                <Link
                  href="/productos/alimentos"
                  onClick={closeMenu}
                  className="flex-1 min-w-0"
                >
                  <div className="flex items-center gap-2">
                    <p
                      className={`text-[13px] font-bold font-heading leading-tight transition-colors ${
                        isAlimentosOpen || isAlimentosActive ? "text-[#009539]" : "text-[#183c6b]"
                      }`}
                    >
                      Alimentos
                    </p>
                    <span
                      className={`text-[10px] font-bold px-1.5 py-0.5 rounded leading-none transition-colors ${
                        isAlimentosActive
                          ? "bg-[#009539] text-white"
                          : "bg-[#009539]/10 text-[#009539]"
                      }`}
                    >
                      Marcas
                    </span>
                  </div>
                  <p className="text-[11px] text-gray-500 font-normal truncate mt-1">
                    Consumo masivo y nutrición
                  </p>
                </Link>
                <ChevronRight
                  className={`w-4 h-4 transition-transform duration-150 shrink-0 ml-1.5 ${
                    isAlimentosOpen || isAlimentosActive
                      ? "text-[#009539] translate-x-0.5"
                      : "text-slate-300"
                  }`}
                />
              </div>

              {/* Separador de borde sutil */}
              <div className="mx-3 border-b border-slate-100/90" />

              {/* Opción 2: Produsal con badges y micro-detalles */}
              <Link
                href="/productos/produsal"
                onClick={closeMenu}
                onMouseEnter={() => {
                  if (alimentosTimeoutRef.current) clearTimeout(alimentosTimeoutRef.current);
                  setIsAlimentosOpen(false);
                }}
                className={`block px-3.5 py-3 border-l-[3px] transition-all duration-150 cursor-pointer group ${
                  isProdusalActive
                    ? "border-[#02aeaa] bg-slate-50/90"
                    : "border-transparent hover:border-[#02aeaa] hover:bg-slate-50/70"
                }`}
              >
                <div className="flex items-center gap-2">
                  <p
                    className={`text-[13px] font-bold font-heading leading-tight transition-colors ${
                      isProdusalActive ? "text-[#02aeaa]" : "text-[#183c6b] group-hover:text-[#02aeaa]"
                    }`}
                  >
                    Produsal
                  </p>
                  <span
                    className={`text-[10px] font-bold px-1.5 py-0.5 rounded leading-none transition-colors ${
                      isProdusalActive
                        ? "bg-[#02aeaa] text-white"
                        : "bg-[#02aeaa]/10 text-[#02aeaa]"
                    }`}
                  >
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
            <div className="h-[3px] bg-gradient-to-r from-[#02aeaa] to-[#183c6b] w-full" />

            {/* Cabecera sutil del submenú */}
            <div className="px-4 py-2 border-b border-slate-100/90 flex items-center justify-between bg-slate-50/50">
              <span className="text-[10px] font-extrabold uppercase tracking-wider text-slate-500">
                Portafolio Alimentos
              </span>
              <span className="text-[10px] font-semibold text-[#009539] bg-[#009539]/10 px-1.5 py-0.5 rounded">
                Líderes
              </span>
            </div>

            {/* Lista detallada de las marcas con acentos de color, categoría y hover micro-chevron */}
            <div className="py-1 divide-y divide-slate-50">
              {ALIMENTOS_BRANDS.map((brand) => (
                <Link
                  key={brand.id}
                  href={`/productos/alimentos/${brand.id}`}
                  onClick={closeMenu}
                  className="group/brand flex items-center justify-between px-4 py-2 text-xs transition-all duration-150 hover:bg-[#f4faf6] cursor-pointer"
                >
                  <div className="flex items-center gap-2.5 min-w-0">
                    {brand.logoUrl ? (
                      <div className="w-6 h-4 relative shrink-0">
                        <Image
                          src={brand.logoUrl}
                          alt={brand.name}
                          fill
                          className="object-contain"
                        />
                      </div>
                    ) : (
                      <span
                        className="w-2 h-2 rounded-full shrink-0 transition-transform duration-150 group-hover/brand:scale-125"
                        style={{ backgroundColor: brand.logoColor || "#009539" }}
                      />
                    )}
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
              <span>Calidad garantizada <span className="font-heading font-semibold text-slate-500">Mimesa</span></span>
              <span className="w-1.5 h-1.5 rounded-full bg-[#009539]" />
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
