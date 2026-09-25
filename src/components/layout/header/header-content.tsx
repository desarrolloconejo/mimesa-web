"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Lock, ChevronRight } from "lucide-react";
import { MobileNav } from "./mobile-nav";
import { ProductsDropdown } from "./products-dropdown";

const NAV_ITEMS = [
  { name: "Inicio", href: "/" },
  { name: "Nosotros", href: "/sobre-nosotros" },
  { name: "Productos", href: "/productos" },
  { name: "Produsal", href: "#" },
  { name: "Programa NLP", href: "/programa-nlp" },
  { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
  { name: "Blog", href: "/blog" },
];

interface HeaderContentProps {
  isScrolled: boolean;
}

export function HeaderContent({ isScrolled }: HeaderContentProps) {
  const pathname = usePathname();

  const isItemActive = (href: string) => {
    if (!pathname || href === "#") return false;
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/productos") {
      return (
        pathname === "/productos" ||
        pathname.startsWith("/productos/") ||
        pathname === "/alimentos"
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  return (
    <div className="w-full max-w-[1440px] mx-auto px-4 sm:px-6 lg:px-8">
      {/* 3-Column Symmetrical Grid on Desktop: 1fr (Logo) | auto (Centered Nav) | 1fr (CTAs) */}
      <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto_1fr] items-center h-16 md:h-20 gap-3 xl:gap-4 transition-all duration-300">
        
        {/* Col 1: Brand Logo (Left aligned) */}
        <div className="flex items-center justify-start">
          <Link
            href="/"
            className="flex items-center gap-3 group focus:outline-none focus:ring-2 focus:ring-[#02aeaa] rounded-xl p-1 flex-shrink-0"
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
        </div>

        {/* Col 2: Desktop Navigation Links (Mathematically Centered in Viewport) */}
        <nav
          className="hidden lg:flex items-center justify-center gap-1 xl:gap-1.5 whitespace-nowrap font-montserrat"
          aria-label="Navegación principal"
        >
          {NAV_ITEMS.map((item) => {
            const isActive = isItemActive(item.href);

            if (item.name === "Productos") {
              return <ProductsDropdown key={item.name} isActive={isActive} />;
            }

            const isPending = item.href === "#";

            return (
              <Link
                key={item.name}
                href={item.href}
                onClick={isPending ? (e) => e.preventDefault() : undefined}
                className={`whitespace-nowrap px-2 xl:px-2.5 py-1 text-xs xl:text-[13px] font-semibold font-montserrat transition-colors duration-150 relative ${
                  isActive
                    ? "text-[#02aeaa]"
                    : "text-[#183c6b] hover:text-[#02aeaa]"
                }`}
                aria-current={isActive ? "page" : undefined}
              >
                {item.name}
                {isActive && (
                  <span className="absolute -bottom-1 left-2 xl:left-2.5 right-2 xl:right-2.5 h-[2px] bg-[#02aeaa] rounded-full" />
                )}
              </Link>
            );
          })}
        </nav>

        {/* Col 3: Action Buttons (Right aligned) */}
        <div className="flex items-center justify-end gap-2.5 whitespace-nowrap">
          <div className="hidden lg:flex items-center gap-2 xl:gap-2.5">
            <Link
              href="https://grupomimesa.sharepoint.com/sites/IntranetGrupoMimesa/"
              target="_blank"
              rel="noopener noreferrer"
              id="btn-intranet"
              className="group whitespace-nowrap flex items-center gap-1.5 px-3.5 xl:px-4 py-2 rounded-full text-xs xl:text-sm font-heading font-bold text-[#183c6b] bg-slate-50 hover:bg-[#02aeaa]/10 hover:text-[#02aeaa] border border-slate-200 hover:border-[#02aeaa]/40 transition-all duration-300"
            >
              <Lock className="w-3.5 h-3.5 text-[#02aeaa] group-hover:scale-110 transition-transform" />
              <span>Intranet</span>
            </Link>

            <Link
              href="/contacto"
              id="btn-contactanos"
              className="group whitespace-nowrap flex items-center gap-1.5 px-4 xl:px-5 py-2 rounded-full text-xs xl:text-sm font-heading font-bold text-white bg-[#02aeaa] hover:bg-[#95c11e] hover:text-[#0e2440] transition-all duration-300 shadow-sm shadow-[#02aeaa]/25 hover:shadow-md hover:-translate-y-0.5 active:translate-y-0"
            >
              <span>Contáctanos</span>
              <ChevronRight className="w-3.5 h-3.5 opacity-80 group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>

          {/* Mobile Nav Button */}
          <MobileNav navItems={NAV_ITEMS} />
        </div>

      </div>
    </div>
  );
}
