"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ArrowRight, Lock, Mail, ChevronDown } from "lucide-react";
import { ALIMENTOS_BRANDS } from "@/components/sections/productos/productos-data";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [productsExpanded, setProductsExpanded] = useState(false);
  const [alimentosExpanded, setAlimentosExpanded] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  // Prevent background scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isOpen]);

  const menuDrawer = (
    <>
      {/* Backdrop */}
      <div
        className={`fixed inset-0 z-[9998] bg-[#0a182b]/80 backdrop-blur-md transition-opacity duration-300 ${
          isOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        }`}
        onClick={() => setIsOpen(false)}
        aria-hidden="true"
      />

      {/* Fullscreen Animated Drawer */}
      <div
        className={`fixed inset-y-0 right-0 z-[9999] w-full max-w-[320px] sm:max-w-sm bg-white shadow-2xl flex flex-col justify-between p-6 transition-transform duration-300 ease-out transform ${
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
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-[#1a3c6a] transition-colors cursor-pointer"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-8 space-y-1.5 overflow-y-auto max-h-[60vh] pr-1">
            {navItems.map((item, idx) => {
              if (item.name === "Productos") {
                return (
                  <div key={item.name} className="space-y-1">
                    <div className="w-full flex items-center justify-between px-4 py-2.5 rounded-xl hover:bg-[#02afab]/10 transition-colors group">
                      <Link
                        href="/productos"
                        onClick={() => setIsOpen(false)}
                        className="flex items-center gap-2 flex-1 text-base font-semibold text-[#1a3c6a] group-hover:text-[#02afab] transition-colors"
                      >
                        <span>{item.name}</span>
                        <span className="text-[10px] uppercase font-extrabold tracking-widest text-[#02afab] bg-[#02afab]/10 px-2 py-0.5 rounded-md">
                          Ver Todo
                        </span>
                      </Link>
                      <button
                        type="button"
                        onClick={() => setProductsExpanded(!productsExpanded)}
                        className="p-2 text-gray-400 hover:text-[#02afab] rounded-lg transition-colors cursor-pointer"
                        aria-label="Desplegar marcas de Productos"
                      >
                        <ChevronDown
                          className={`w-4 h-4 transition-transform duration-200 ${
                            productsExpanded ? "rotate-180 text-[#02afab]" : ""
                          }`}
                        />
                      </button>
                    </div>

                    {/* Expandable Accordion Panel */}
                    {productsExpanded && (
                      <div className="pl-3 pr-2 py-2 space-y-1.5 bg-gray-50/90 rounded-2xl border border-gray-100 animate-fade-in text-xs">
                        {/* Sub-Accordion: Alimentos with Brands */}
                        <div className="space-y-1">
                          <div className="flex items-center justify-between px-3 py-2 rounded-xl text-gray-800 hover:text-[#009539] font-semibold text-xs">
                            <Link
                              href="/#productos"
                              onClick={() => setIsOpen(false)}
                              className="flex-1"
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
                                  href="/#productos"
                                  onClick={() => setIsOpen(false)}
                                  className="block px-3 py-1.5 rounded-lg text-gray-700 hover:text-[#009539] hover:bg-gray-50 text-xs font-medium"
                                >
                                  {brand.name}
                                </Link>
                              ))}
                            </div>
                          )}
                        </div>

                        {/* Produsal: Direct link, NO dropdown */}
                        <Link
                          href="/#productos"
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-xl text-gray-800 hover:text-[#02afab] font-semibold text-xs"
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
                  className={`flex items-center justify-between px-4 py-3 rounded-xl text-base font-semibold text-[#1a3c6a] hover:bg-[#02afab]/10 hover:text-[#02afab] transition-all duration-200 group ${
                    isOpen ? "opacity-100 translate-x-0" : "opacity-0 translate-x-4"
                  }`}
                >
                  <span>{item.name}</span>
                  <ArrowRight className="w-4 h-4 text-gray-400 group-hover:text-[#02afab] group-hover:translate-x-1 transition-all" />
                </Link>
              );
            })}
          </nav>
        </div>

        {/* Action Button at Bottom */}
        <div className="pt-6 border-t border-gray-100 space-y-3">
          <Link
            href="/contacto"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-[#02afab] hover:bg-[#94c11e] hover:text-[#0a182b] text-white transition-all duration-300 shadow-md shadow-[#02afab]/25"
          >
            <Mail className="w-4 h-4" />
            <span>Contáctanos</span>
          </Link>

          <p className="text-center text-xs text-gray-400 pt-2 font-light">
            MIMESA Alimentos C.A.
          </p>
        </div>
      </div>
    </>
  );

  return (
    <div className="lg:hidden">
      {/* Hamburger Toggle Button */}
      <button
        type="button"
        id="mobile-menu-toggle"
        onClick={() => setIsOpen(!isOpen)}
        className="relative z-30 p-2.5 rounded-xl bg-white/90 border border-[#1a3c6a]/15 text-[#1a3c6a] hover:bg-[#1a3c6a] hover:text-white transition-colors duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#02afab] cursor-pointer"
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
