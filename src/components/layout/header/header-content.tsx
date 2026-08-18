"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Lock, Mail, ChevronRight } from "lucide-react";
import { MobileNav } from "./mobile-nav";

const NAV_ITEMS = [
  { name: "Inicio", href: "#inicio" },
  { name: "Quiénes somos", href: "#quienes-somos" },
  { name: "Productos", href: "#productos" },
  { name: "Responsabilidad social", href: "#responsabilidad-social" },
  { name: "Trabaja con nosotros", href: "#trabaja-con-nosotros" },
  { name: "Contacto", href: "#contacto" },
];

interface HeaderContentProps {
  isScrolled: boolean;
}

export function HeaderContent({ isScrolled }: HeaderContentProps) {
  return (
    <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="flex items-center justify-between h-20 md:h-24">
        {/* Brand Logo */}
        <Link
          href="#inicio"
          className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#02afab] rounded-xl p-1"
          aria-label="Grupo Mimesa - Ir al inicio"
        >
          <div className="relative overflow-hidden transition-transform duration-300 group-hover:scale-105">
            <Image
              src="/LOGOMIMESA.webp"
              alt="Logo Grupo Mimesa"
              width={170}
              height={52}
              priority
              className="h-10 md:h-12 w-auto object-contain"
            />
          </div>
        </Link>

        {/* Desktop Navigation Links */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2 px-3 py-1.5 rounded-full bg-white/70 backdrop-blur-md border border-gray-200/60 shadow-xs"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-[#1a3c6a] hover:text-[#02afab] hover:bg-[#02afab]/8 rounded-full transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#02afab] rounded-full transition-all duration-300 group-hover:w-1/2" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-3">
          <Link
            href="#intranet"
            id="btn-intranet"
            className="flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold text-[#1a3c6a] border border-[#1a3c6a]/20 hover:border-[#1a3c6a] hover:bg-[#1a3c6a]/5 transition-all duration-200 shadow-xs"
          >
            <Lock className="w-3.5 h-3.5 text-[#02afab]" />
            <span>Intranet corporativa</span>
          </Link>

          <Link
            href="#contacto"
            id="btn-contactanos"
            className="flex items-center gap-2 px-5 py-2.5 rounded-full text-xs font-bold text-white bg-gradient-to-r from-[#02afab] to-[#009539] hover:from-[#009539] hover:to-[#02afab] transition-all duration-300 shadow-md shadow-[#02afab]/20 hover:shadow-lg hover:shadow-[#009539]/30 hover:scale-[1.02] active:scale-95"
          >
            <Mail className="w-3.5 h-3.5" />
            <span>Contáctanos</span>
            <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <MobileNav navItems={NAV_ITEMS} />
      </div>
    </div>
  );
}
