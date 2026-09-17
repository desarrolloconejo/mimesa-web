"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, MapPin } from "lucide-react";

function LinkedinIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-4 h-4" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
    </svg>
  );
}

export function FooterContent() {
  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const navLinks = [
    { name: "Inicio", href: "/" },
    { name: "Sobre nosotros", href: "/sobre-nosotros" },
    { name: "Productos", href: "/productos" },
    { name: "Compromiso Social", href: "/#compromiso" },
    { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
    { name: "Contacto", href: "/contacto" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/grupo-mimesa/",
      icon: <LinkedinIcon className="w-4 h-4" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/grupomimesa/",
      icon: <InstagramIcon className="w-4 h-4" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/grupomimesa",
      icon: <FacebookIcon className="w-4 h-4" />,
    },
  ];

  return (
    <div className="w-full bg-[#0c223f] text-white relative select-none">
      
      {/* Top Divider connecting with Contacto */}
      <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="border-t border-white/10" />
      </div>

      {/* Main Footer Container */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-14 pb-8 space-y-12">
        
        {/* Simple & Precise Grid */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 items-start">
          
          {/* Col 1: Brand Logo & Short Info (5 cols) */}
          <div className="md:col-span-5 space-y-4">
            <div className="p-2.5 sm:p-3 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 inline-block transition-transform duration-300 hover:scale-105">
              <Image
                src="/LOGOMIMESA.webp"
                alt="Logo Grupo Mimesa"
                width={220}
                height={68}
                className="h-11 sm:h-12 md:h-14 w-auto brightness-0 invert object-contain"
              />
            </div>
            <p className="text-sm text-gray-300 font-light max-w-sm leading-relaxed">
              Empresa líder en producción y distribución agroalimentaria en Venezuela.
            </p>
            <div className="flex items-center gap-2 pt-1">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.name} de Grupo Mimesa`}
                  className="w-8 h-8 rounded-xl flex items-center justify-center bg-white/10 hover:bg-[#02afab] hover:text-[#0c223f] text-white transition-all duration-300 border border-white/10"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Precise Navigation Links (4 cols) */}
          <div className="md:col-span-4 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#30deda]">
              Navegación
            </h4>
            <ul className="grid grid-cols-2 gap-x-4 gap-y-2 text-xs sm:text-sm text-gray-300">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="hover:text-[#30deda] transition-colors inline-block"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="md:col-span-3 space-y-3">
            <h4 className="text-xs uppercase tracking-widest font-bold text-[#30deda]">
              Contacto
            </h4>
            <div className="space-y-2 text-xs sm:text-sm text-gray-300">
              <p className="flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5 text-[#30deda] shrink-0" />
                <span>Caracas, Venezuela</span>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#30deda] shrink-0" />
                <a
                  href="mailto:contacto@grupomimesa.com"
                  className="hover:text-[#30deda] transition-colors"
                >
                  contacto@grupomimesa.com
                </a>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="btn-scroll-to-top"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#02afab] text-white hover:text-[#0c223f] border border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <span>Volver al inicio</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

        {/* ========================================================
            "GRUPO MIMESA" Typography - Clearly Visible, Centered & Responsive
           ======================================================== */}
        <div className="pt-6 pb-2 text-center overflow-hidden">
          <h3 className="font-black text-white/20 tracking-tight uppercase text-2xl sm:text-4xl md:text-5xl lg:text-6xl select-none pointer-events-none">
            GRUPO MIMESA
          </h3>
        </div>

      </div>

      {/* Bottom Copyright Bar */}
      <div className="w-full bg-[#0c223f] border-t border-white/10 py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-400 text-center sm:text-left">
          <p>
            Copyright © {new Date().getFullYear()} MIMESA ALIMENTOS C.A. RIF J-07032176-8. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 justify-center">
            <span>Desarrollado by</span>
            <span className="font-medium text-white hover:text-[#30deda] transition-colors">
              El Conejo Del Sombrero
            </span>
          </p>
        </div>
      </div>

    </div>
  );
}
