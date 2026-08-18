"use client";

import React, { useState, useEffect } from "react";
import { createPortal } from "react-dom";
import Link from "next/link";
import Image from "next/image";
import { X, Menu, ArrowRight, Lock, Mail } from "lucide-react";

interface NavItem {
  name: string;
  href: string;
}

interface MobileNavProps {
  navItems: NavItem[];
}

export function MobileNav({ navItems }: MobileNavProps) {
  const [isOpen, setIsOpen] = useState(false);
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
                width={140}
                height={42}
                className="h-9 w-auto object-contain"
              />
            </Link>
            <button
              type="button"
              onClick={() => setIsOpen(false)}
              className="p-2 rounded-xl text-gray-500 hover:bg-gray-100 hover:text-[#1a3c6a] transition-colors"
              aria-label="Cerrar menú"
            >
              <X className="w-6 h-6" />
            </button>
          </div>

          {/* Nav Links */}
          <nav className="mt-8 space-y-2">
            {navItems.map((item, idx) => (
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
            ))}
          </nav>
        </div>

        {/* Action Buttons at Bottom */}
        <div className="pt-6 border-t border-gray-100 space-y-3">
          <Link
            href="#intranet"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-semibold border border-[#1a3c6a]/20 text-[#1a3c6a] hover:bg-[#1a3c6a]/5 transition-colors shadow-xs"
          >
            <Lock className="w-4 h-4 text-[#02afab]" />
            <span>Intranet corporativa</span>
          </Link>

          <Link
            href="#contacto"
            onClick={() => setIsOpen(false)}
            className="w-full flex items-center justify-center gap-2 px-4 py-3 rounded-xl text-sm font-bold bg-gradient-to-r from-[#02afab] to-[#009539] text-white hover:opacity-90 transition-all duration-300 shadow-md shadow-[#02afab]/25"
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
        className="relative z-30 p-2.5 rounded-xl bg-white/90 border border-[#1a3c6a]/15 text-[#1a3c6a] hover:bg-[#1a3c6a] hover:text-white transition-colors duration-300 shadow-xs focus:outline-none focus:ring-2 focus:ring-[#02afab]"
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
