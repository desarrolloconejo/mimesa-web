"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import {
  ArrowUp,
  MapPin,
  Phone,
  Mail,
  Sparkles,
} from "lucide-react";

function LinkedinIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.45 1.45 0 0 0 1.45-1.45 1.45 1.45 0 0 0-1.45-1.45 1.45 1.45 0 0 0-1.45 1.45c0 .8.65 1.45 1.45 1.45m1.39 9.74v-8.37H5.07v8.37h2.78Z" />
    </svg>
  );
}

function FacebookIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
      <path d="M22 12c0-5.52-4.48-10-10-10S2 6.48 2 12c0 4.84 3.44 8.87 8 9.8V15H8v-3h2V9.5C10 7.57 11.57 6 13.5 6H16v3h-2c-.55 0-1 .45-1 1v2h3v3h-3v6.95c5.05-.5 9-4.76 9-9.95z" />
    </svg>
  );
}

function InstagramIcon({ className = "w-5 h-5" }: { className?: string }) {
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
    { name: "Inicio", href: "#inicio" },
    { name: "Quiénes somos", href: "#quienes-somos" },
    { name: "Productos", href: "#productos" },
    { name: "Responsabilidad social", href: "#responsabilidad-social" },
    { name: "Trabaja con nosotros", href: "#trabaja-con-nosotros" },
    { name: "Contáctanos", href: "#contacto" },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      href: "https://www.linkedin.com/company/grupo-mimesa/",
      icon: <LinkedinIcon className="w-5 h-5" />,
    },
    {
      name: "Facebook",
      href: "https://www.facebook.com/grupomimesa",
      icon: <FacebookIcon className="w-5 h-5" />,
    },
    {
      name: "Instagram",
      href: "https://www.instagram.com/grupomimesa/",
      icon: <InstagramIcon className="w-5 h-5" />,
    },
  ];

  return (
    <div className="w-full">
      {/* Main Footer Body */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-16 pb-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
          {/* Col 1: Brand & Bio (5 cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="flex items-center gap-3">
              <div className="p-2 rounded-2xl bg-white/10 backdrop-blur-md border border-white/15 inline-block">
                <Image
                  src="/LOGOMIMESA.webp"
                  alt="Logo Grupo Mimesa"
                  width={180}
                  height={55}
                  className="h-11 w-auto brightness-0 invert object-contain"
                />
              </div>
            </div>

            <p className="text-sm md:text-base text-gray-300 leading-relaxed max-w-md font-light">
              Grupo empresarial líder en producción y distribución agroalimentaria
              en Venezuela. Transformamos ingredientes nobles en bienestar y unión para
              todos los hogares venezolanos.
            </p>

            {/* Social Icons */}
            <div className="flex items-center gap-3 pt-2">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={`Visitar ${social.name} de Grupo Mimesa`}
                  className="w-10 h-10 rounded-full flex items-center justify-center bg-white/10 text-white hover:bg-[#02afab] hover:text-[#0f233e] hover:scale-110 transition-all duration-300 border border-white/10 shadow-sm"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Quick Links (3 cols) */}
          <div className="lg:col-span-3 space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[#02afab] flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-[#94c11e]" />
              Navegación Rápida
            </h4>
            <ul className="space-y-2.5">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-sm text-gray-300 hover:text-[#02afab] transition-colors duration-200 inline-flex items-center gap-2 group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-[#02afab]/50 group-hover:w-3 group-hover:bg-[#94c11e] transition-all" />
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3: Contact Info (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <h4 className="text-sm uppercase tracking-wider font-bold text-[#02afab]">
              Información de Contacto
            </h4>
            <div className="space-y-3.5 text-sm text-gray-300">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-[#94c11e] shrink-0 mt-0.5" />
                <span>
                  Sede Corporativa, Zona Industrial, Venezuela.
                </span>
              </div>
              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-[#02afab] shrink-0" />
                <span>+58 (212) 000-0000 / Atención Comercial</span>
              </div>
              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-[#009539] shrink-0" />
                <a
                  href="mailto:contacto@grupomimesa.com"
                  className="hover:text-[#02afab] transition-colors"
                >
                  contacto@grupomimesa.com
                </a>
              </div>
            </div>

            {/* Scroll to Top Button */}
            <div className="pt-4">
              <button
                type="button"
                id="btn-scroll-to-top"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full text-xs font-semibold bg-white/10 hover:bg-[#02afab] text-white hover:text-[#0f233e] border border-white/20 transition-all duration-300 group shadow-sm"
              >
                <span>Volver al inicio</span>
                <ArrowUp className="w-4 h-4 group-hover:-translate-y-1 transition-transform" />
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Copyright Bar */}
      <div className="border-t border-white/10 bg-[#0a182b] py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-400 text-center sm:text-left">
          <p>
            Copyright © MIMESA ALIMENTOS C.A. RIF J-07032176-8. Todos los derechos reservados.
          </p>
          <p className="flex items-center gap-1 justify-center">
            <span>Desarrollado by</span>
            <span className="font-semibold text-white hover:text-[#02afab] transition-colors">
              El Conejo Del Sombrero
            </span>
          </p>
        </div>
      </div>
    </div>
  );
}
