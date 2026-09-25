"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { ChevronDown, ShoppingBag, Building2, ChevronRight } from "lucide-react";

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
  const [isOpen, setIsOpen] = useState(false);

  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 200);
  };

  const closeMenu = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(false);
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

      {/* Menú Desplegable: Solo las 2 Categorías Padre */}
      <div
        className={`absolute top-full left-0 pt-2.5 z-50 transition-all duration-200 ease-out ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto visible"
            : "opacity-0 -translate-y-1.5 pointer-events-none invisible"
        }`}
      >
        <div className="w-80 bg-white/98 backdrop-blur-md border border-slate-200/90 rounded-2xl overflow-hidden shadow-2xl p-2 space-y-1">
          {/* Acento superior de borde: Gradiente de marca */}
          <div className="-mx-2 -mt-2 mb-2 h-[3px] bg-gradient-to-r from-[#009539] via-[#02aeaa] to-[#183c6b] w-[calc(100%+1rem)]" />

          {/* Item 1: Consumo Masivo */}
          <Link
            href="/productos/consumo-masivo"
            onClick={closeMenu}
            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#009539]/8 transition-all duration-200 group/item cursor-pointer border border-transparent hover:border-[#009539]/20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover/item:bg-[#009539] group-hover/item:text-white transition-all duration-200 shadow-xs">
              <ShoppingBag className="w-5 h-5" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#183c6b] group-hover/item:text-[#009539] transition-colors">
                  Consumo Masivo
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:text-[#009539] group-hover/item:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-slate-500 font-normal truncate">
                Marcas líderes en la mesa venezolana
              </p>
            </div>
          </Link>

          {/* Item 2: Ingredientes */}
          <Link
            href="/productos/ingredientes"
            onClick={closeMenu}
            className="flex items-center gap-3.5 p-3 rounded-xl hover:bg-[#183c6b]/8 transition-all duration-200 group/item cursor-pointer border border-transparent hover:border-[#183c6b]/20"
          >
            <div className="w-10 h-10 rounded-xl bg-[#183c6b]/10 text-[#183c6b] flex items-center justify-center shrink-0 group-hover/item:bg-[#183c6b] group-hover/item:text-white transition-all duration-200 shadow-xs">
              <Building2 className="w-5 h-5 text-[#02aeaa] group-hover/item:text-white transition-colors" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center justify-between">
                <span className="text-sm font-black text-[#183c6b] group-hover/item:text-[#02aeaa] transition-colors">
                  Ingredientes
                </span>
                <ChevronRight className="w-4 h-4 text-slate-300 group-hover/item:text-[#02aeaa] group-hover/item:translate-x-0.5 transition-all" />
              </div>
              <p className="text-xs text-slate-500 font-normal truncate">
                Materias primas y soluciones industriales
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
}
