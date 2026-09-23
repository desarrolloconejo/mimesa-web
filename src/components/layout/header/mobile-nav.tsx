"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowRight, Lock, Mail, ChevronDown, MessageCircle } from "lucide-react";
import { ALIMENTOS_BRANDS } from "@/components/sections/productos/productos-data";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [alimentosExpanded, setAlimentosExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  const isItemActive = (href: string) => {
    if (!pathname) return false;
    if (href === "/") {
      return pathname === "/";
    }
    if (href === "/productos") {
      return (
        pathname === "/productos" ||
        pathname.startsWith("/productos/") ||
        pathname === "/alimentos" ||
        pathname === "/produsal"
      );
    }
    return pathname === href || pathname.startsWith(`${href}/`);
  };

  const isAlimentosActive = pathname === "/productos/alimentos" || pathname === "/alimentos";
  const isProdusalActive = pathname === "/productos/produsal" || pathname === "/produsal";

  useEffect(() => {
    setMounted(true);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  // Prevent background scroll when mobile menu is open without layout shift
  useEffect(() => {
    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      document.body.style.overflow = "hidden";
      if (scrollbarWidth > 0) {
        document.body.style.paddingRight = `${scrollbarWidth}px`;
      }
    } else {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
      document.body.style.paddingRight = "unset";
    };
  }, [isOpen]);

  const menuDrawer = (
    <div
      className={`fixed inset-0 z-[9999] overflow-hidden transition-all duration-300 ${
        isOpen ? "pointer-events-auto visible" : "pointer-events-none invisible"
      }`}
    >
      {/* Backdrop */}
      <div
        className={`absolute inset-0 bg-[#0a182b]/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100" : "opacity-0"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Fullscreen Animated Drawer */}
      <div
        className={`absolute inset-y-0 right-0 w-full max-w-[320px] sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out transform overflow-hidden ${
          isOpen ? "translate-x-0" : "translate-x-full"
        }`}
        role="dialog"
        aria-modal="true"
        aria-label="Menú móvil de navegación"
      >
        {/* Top Header Inside Drawer */}
        <div>
          <div className="flex items-center justify-between pb-6 border-b border-gray-100">
            <Link href="#inicio" onClick={() => setIsOpen(false)} className="flex items-center gap-2">
              <Image
                src="/LOGOMIMESA.webp"
                alt="Logo Grupo Mimesa"
                width={160}
                height={48}
                className="h-10 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-[#183c6b] transition-colors cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links sin barras de scroll antiestéticas */}
          <nav className="mt-8 space-y-1.5 overflow-y-auto max-h-[62vh] pr-1 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden">
            {navItems.map((item, idx) => {
              const isActive = isItemActive(item.href);

              if (item.name === "Productos") {
                return (
                  <div key={item.name} className="space-y-1">
                    <div
                      className={`w-full flex items-center justify-between px-4 py-2.5 rounded-xl transition-all duration-200 group ${
                        isActive
                          ? "bg-[#02aeaa]/12 border border-[#02aeaa]/25 shadow-xs"
                          : "hover:bg-[#02aeaa]/10 border border-transparent"
                      }`}
                    >
                      <Link
                        href="/productos"
                        onClick={() => setIsOpen(false)}
                        className={`flex items-center gap-2 flex-1 text-base font-bold transition-colors ${
                          isActive
                            ? "text-[#02aeaa]"
                            : "text-[#183c6b] group-hover:text-[#02aeaa]"
                        }`}
                        aria-current={isActive ? "page" : undefined}
                      >
                        <span className="flex items-center gap-2">
                          {item.name}
                          {isActive && (
                            <span className="w-2 h-2 rounded-full bg-[#02aeaa] inline-block animate-pulse" />
                          )}
                        </span>
                        <span
                          className={`text-[10px] uppercase font-extrabold tracking-widest px-2 py-0.5 rounded-md transition-colors ${
                            isActive
                              ? "text-white bg-[#02aeaa] shadow-xs"
                              : "text-[#02aeaa] bg-[#02aeaa]/10"
                          }`}
                        >
                          Ver Todo
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProductsExpanded(!productsExpanded)}
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#02aeaa] hover:bg-[#02aeaa]/10"
                            : "text-gray-400 hover:text-[#02aeaa]"
                        }`}
                        aria-label="Desplegar marcas de Productos"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productsExpanded
                              ? "rotate-180 text-[#02aeaa]"
                              : isActive
                              ? "text-[#02aeaa]"
                              : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Accordion Panel */}
                    {productsExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 bg-gray-50/90 rounded-2xl border border-gray-100 animate-fade-in text-xs">
                        {/* Sub-Accordion: Alimentos with Brands */}
                        <div className="space-y-1">
                          <div
                            className={`flex items-center justify-between px-3 py-2 rounded-xl font-semibold text-xs transition-colors ${
                              isAlimentosActive
                                ? "bg-[#009539]/12 text-[#009539] font-bold border border-[#009539]/20"
                                : "text-gray-800 hover:text-[#009539] hover:bg-gray-100/60"
                            }`}
                          >
                            <Link
                              href="/productos/alimentos"
                              onClick={() => setIsOpen(false)}
                              className="flex-1"
                              aria-current={isAlimentosActive ? "page" : undefined}
                            >
                              Alimentos
                            </Link>
                            <button
                              type="button"
                              onClick={() => setAlimentosExpanded(!alimentosExpanded)}
                              className="p-1 text-gray-400 hover:text-[#009539] cursor-pointer"
                              aria-label="Desplegar marcas de Alimentos"
                            >
                              <ChevronDown
                                className={`w-4 h-4 transition-transform duration-200 ${
                                  alimentosExpanded ? "rotate-180 text-[#009539]" : ""
                                }`}
                              />
                            </button>
                          </div>

                          {/* Nested Brands List */}
                          {alimentosExpanded && (
                            <div className="pl-3 pr-1 py-1 space-y-0.5 bg-white rounded-xl border border-gray-100/80 animate-fade-in">
                              {ALIMENTOS_BRANDS.map((brand) => (
                                <Link
                                  key={brand.id}
                                  href={`/productos/alimentos/${brand.id}`}
                                  onClick={() => setIsOpen(false)}
                                  className="flex items-center justify-between px-3 py-1.5 rounded-lg text-gray-700 hover:text-[#009539] hover:bg-gray-50 text-xs font-medium transition-colors"
                                >
                                  <div className="flex items-center gap-2 min-w-0">
                                    {brand.logoUrl ? (
                                      <div className="w-5 h-3.5 relative shrink-0">
                                        <Image
                                          src={brand.logoUrl}
                                          alt={brand.name}
                                          fill
                                          className="object-contain"
                                        />
                                      </div>
                                    ) : (
                                      <span
                                        className="w-1.5 h-1.5 rounded-full shrink-0"
                                        style={{ backgroundColor: brand.logoColor || "#009539" }}
                                      />
                                    )}
                                    <span className="truncate">{brand.name}</span>
                                  </div>
                                  <span className="text-[10px] text-gray-400 font-normal shrink-0 ml-2">
                                    {brand.category}
                                  </span>
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Produsal: Direct link, NO dropdown */}
                        <Link
                          href="/productos/produsal"
                          onClick={() => setIsOpen(false)}
                          className={`block px-3 py-2 rounded-xl font-semibold text-xs transition-colors ${
                            isProdusalActive
                              ? "bg-[#02aeaa]/12 text-[#02aeaa] font-bold border border-[#02aeaa]/20"
                              : "text-gray-800 hover:text-[#02aeaa] hover:bg-gray-100/60"
                          }`}
                          aria-current={isProdusalActive ? "page" : undefined}
                        >
                          Produsal
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setIsOpen(false)}
                  style={{
                    transitionDelay: `${idx * 30}ms`,
                  }}
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-bold transition-all duration-200 group ${
                    isActive
                      ? "bg-[#02aeaa]/12 text-[#02aeaa] border border-[#02aeaa]/25 shadow-xs"
                      : "text-[#183c6b] hover:bg-[#02aeaa]/10 hover:text-[#02aeaa] border border-transparent font-semibold"
                  } ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                  aria-current={isActive ? "page" : undefined}
                >
                  <span className="flex items-center gap-2">
                    {item.name}
                    {isActive && (
                      <span className="w-2 h-2 rounded-full bg-[#02aeaa] inline-block animate-pulse" />
                    )}
                  </span>
                  <ArrowRight
                    className={`w-4 h-4 transition-all ${
                      isActive
                        ? "text-[#02aeaa] translate-x-0.5"
                        : "text-gray-400 group-hover:text-[#02aeaa] group-hover:translate-x-1"
                    }`}
                  />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button at Bottom (WhatsApp) */}
        <div className="pt-6 border-t border-gray-100 space-y-3">
          <div className="grid grid-cols-2 gap-2.5">
            <Link
              href="#"
              onClick={(e) => {
                e.preventDefault();
                setIsOpen(false);
              }}
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-sm font-heading font-bold text-[#183c6b] bg-slate-100 border border-slate-200 hover:bg-[#02aeaa]/10 hover:text-[#02aeaa] transition-all duration-300"
            >
              <Lock className="w-4 h-4 text-[#02aeaa]" />
              <span>Intranet</span>
            </Link>
            <Link
              href="https://wa.me/584120000000"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-sm font-heading font-bold bg-[#02aeaa] hover:bg-[#95c11e] hover:text-[#0e2440] text-white transition-all duration-300 shadow-md shadow-[#02aeaa]/25"
            >
              <MessageCircle className="w-4 h-4" />
              <span>Contáctanos</span>
            </Link>
          </div>

        </div>
      </div>
    </div>
  );

  return (
    <div className="lg:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        id="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-30 p-2.5 rounded-xl bg-white/90 border border-[#183c6b]/15 text-[#183c6b] hover:bg-[#183c6b] hover:text-white transition-colors duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#02aeaa] cursor-pointer"
        aria-label={isOpen ? "Cerrar menú" : "Abrir menú"}
        aria-expanded={isOpen}
      >
        <div className="w-6 h-6 flex items-center justify-center">
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </div>
      </button>

      {/* Render via Portal outside header hierarchy */}
      {mounted && createPortal(menuDrawer, document.body)}
    </div>
  );
}
