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

        {/* Desktop Navigation Links (Direct on clean white header) */}
        <nav
          className="hidden lg:flex items-center gap-1 xl:gap-2"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className="px-3.5 py-2 text-sm font-medium text-[#1a3c6a] hover:text-[#02afab] hover:bg-[#02afab]/8 rounded-lg transition-all duration-200 relative group"
            >
              {item.name}
              <span className="absolute bottom-1 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-[#02afab] rounded-full transition-all duration-300 group-hover:w-3/4" />
            </Link>
          ))}
        </nav>

        {/* Desktop CTA Action Buttons */}
        <div className="hidden lg:flex items-center gap-2.5 xl:gap-3">
          <Link
            href="#intranet"
            id="btn-intranet"
            className="group flex items-center gap-2 px-4 py-2 rounded-full text-sm font-semibold text-[#1a3c6a] bg-gray-100/80 hover:bg-[#1a3c6a] hover:text-white transition-all duration-300 shadow-xs hover:-translate-y-0.5"
          >
            <Lock className="w-4 h-4 text-[#02afab] group-hover:text-[#30deda] transition-colors" />
            <span>Intranet</span>
          </Link>

          <Link
            href="#contacto"
            id="btn-contactanos"
            className="group flex items-center gap-2 px-5 py-2.5 rounded-full text-sm font-semibold text-white bg-[#02afab] hover:bg-[#94c11e] hover:text-[#0a182b] transition-all duration-300 shadow-sm shadow-[#02afab]/25 hover:shadow-md hover:shadow-[#94c11e]/30 hover:-translate-y-0.5 active:translate-y-0"
          >
            <span>Contáctanos</span>
            <ChevronRight className="w-4 h-4 opacity-80 group-hover:translate-x-0.5 transition-transform" />
          </Link>
        </div>

        {/* Mobile Nav Button */}
        <MobileNav navItems={NAV_ITEMS} />
      </div>
    </div>
  );
}
