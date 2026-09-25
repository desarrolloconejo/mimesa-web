"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { X, Menu, ArrowRight, ChevronRight, Lock, Mail, ChevronDown, ShoppingBag, Building2 } from "lucide-react";

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
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProductsExpanded(!productsExpanded)}
                        className={`p-2 rounded-lg transition-colors cursor-pointer ${
                          isActive
                            ? "text-[#02aeaa] hover:bg-[#02aeaa]/10"
                            : "text-gray-400 hover:text-[#02aeaa]"
                        }`}
                        aria-label="Desplegar categorías de Productos"
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

                    {/* Expandable Accordion Panel: Solo las 2 Categorías Padre */}
                    {productsExpanded && (
                      <div className="p-2 space-y-1.5 bg-gray-50/90 rounded-2xl border border-gray-100 animate-fade-in text-xs">
                        {/* Item 1: Consumo Masivo */}
                        <Link
                          href="/productos/consumo-masivo"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-[#009539]/8 transition-all group/item border border-gray-100 shadow-2xs"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#009539]/10 text-[#009539] flex items-center justify-center shrink-0 group-hover/item:bg-[#009539] group-hover/item:text-white transition-colors">
                            <ShoppingBag className="w-4 h-4" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#183c6b] group-hover/item:text-[#009539] transition-colors">
                                Consumo Masivo
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#009539]" />
                            </div>
                            <p className="text-[11px] text-slate-400 font-normal truncate">
                              Marcas líderes en la mesa venezolana
                            </p>
                          </div>
                        </Link>

                        {/* Item 2: Ingredientes */}
                        <Link
                          href="/productos/ingredientes"
                          onClick={() => setIsOpen(false)}
                          className="flex items-center gap-3 p-2.5 rounded-xl bg-white hover:bg-[#183c6b]/8 transition-all group/item border border-gray-100 shadow-2xs"
                        >
                          <div className="w-8 h-8 rounded-lg bg-[#183c6b]/10 text-[#183c6b] flex items-center justify-center shrink-0 group-hover/item:bg-[#183c6b] group-hover/item:text-white transition-colors">
                            <Building2 className="w-4 h-4 text-[#02aeaa] group-hover/item:text-white" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="flex items-center justify-between">
                              <span className="text-xs font-bold text-[#183c6b] group-hover/item:text-[#02aeaa] transition-colors">
                                Ingredientes
                              </span>
                              <ChevronRight className="w-3.5 h-3.5 text-slate-300 group-hover/item:text-[#02aeaa]" />
                            </div>
                            <p className="text-[11px] text-slate-400 font-normal truncate">
                              Materias primas y soluciones industriales
                            </p>
                          </div>
                        </Link>
                      </div>
                    )}
                  </div>
                );
              }

              const isPending = item.href === "#";

              return (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={(e) => {
                    if (isPending) {
                      e.preventDefault();
                    } else {
                      setIsOpen(false);
                    }
                  }}
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
              href="https://grupomimesa.sharepoint.com/sites/IntranetGrupoMimesa/"
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-sm font-heading font-bold text-[#183c6b] bg-slate-100 border border-slate-200 hover:bg-[#02aeaa]/10 hover:text-[#02aeaa] transition-all duration-300"
            >
              <Lock className="w-4 h-4 text-[#02aeaa]" />
              <span>Intranet</span>
            </Link>
            <Link
              href="/contacto"
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-1.5 px-3 py-3 rounded-xl text-sm font-heading font-bold bg-[#02aeaa] hover:bg-[#95c11e] hover:text-[#0e2440] text-white transition-all duration-300 shadow-md shadow-[#02aeaa]/25"
            >
              <Mail className="w-4 h-4" />
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
