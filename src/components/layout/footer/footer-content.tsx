"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowUp, Mail, MapPin } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";

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

  const navCol1 = [
    { name: "Inicio", href: "/" },
    { name: "Nosotros", href: "/sobre-nosotros" },
    { name: "Consumo Masivo", href: "/productos/consumo-masivo" },
    { name: "Ingredientes", href: "/productos/ingredientes" },
    { name: "Produsal", href: "#" },
  ];

  const navCol2 = [
    { name: "Programa NLP", href: "/programa-nlp" },
    { name: "Trabaja con nosotros", href: "/trabaja-con-nosotros" },
    { name: "Blog", href: "/blog" },
    { name: "Contacto", href: "/contacto" },
    { name: "Política de Privacidad", href: "/politica-de-privacidad" },
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
    <div className="w-full bg-transparent text-white relative select-none">
      {/* Main Footer Container */}
      <FadeIn direction="up" delay={0.08} className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-12 sm:pt-16 pb-16 sm:pb-20">
        
        {/* Grid Layout */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-12 gap-8 lg:gap-10 items-start">
          
          {/* Col 1: Brand Logo & Short Info (4 cols) */}
          <div className="sm:col-span-2 md:col-span-4 space-y-4">
            <Link href="/" className="inline-block transition-transform duration-300 hover:scale-105">
              <Image
                src="/LOGOMIMESA.webp"
                alt="Logo Grupo Mimesa"
                width={200}
                height={60}
                loading="eager"
                className="h-10 sm:h-12 w-auto brightness-0 invert object-contain"
              />
            </Link>
            <p className="text-sm text-slate-200 font-normal max-w-sm leading-relaxed">
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
                  className="w-9 h-9 rounded-xl flex items-center justify-center bg-white/10 hover:bg-white/20 text-white transition-all duration-300 border border-white/15"
                >
                  {social.icon}
                </a>
              ))}
            </div>
          </div>

          {/* Col 2: Navegación dividida en 2 columnas (5 cols) */}
          <div className="sm:col-span-2 md:col-span-5 space-y-3.5">
            <div className="flex items-center gap-3">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">
                Navegación
              </h4>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <div className="grid grid-cols-2 gap-x-6 sm:gap-x-8 text-sm text-slate-300 font-medium">
              <ul className="flex flex-col space-y-2.5">
                {navCol1.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                      className={`transition-colors inline-block ${
                        link.href === "#"
                          ? "text-slate-400 hover:text-slate-300 cursor-default"
                          : "hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <ul className="flex flex-col space-y-2.5">
                {navCol2.map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      onClick={link.href === "#" ? (e) => e.preventDefault() : undefined}
                      className={`transition-colors inline-block ${
                        link.href === "#"
                          ? "text-slate-400 hover:text-slate-300 cursor-default"
                          : "hover:text-white"
                      }`}
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Col 3: Direct Contact (3 cols) */}
          <div className="sm:col-span-2 md:col-span-3 space-y-3.5">
            <div className="flex items-center gap-3">
              <h4 className="text-xs uppercase tracking-widest font-extrabold text-white">
                Contacto
              </h4>
              <div className="h-[1px] flex-1 bg-white/10" />
            </div>
            <div className="space-y-2.5 text-sm text-slate-300 font-medium">
              <p className="flex items-center gap-2.5">
                <MapPin className="w-4 h-4 text-slate-400 shrink-0" />
                <span>Caracas, Venezuela</span>
              </p>
              <p className="flex items-center gap-2.5">
                <Mail className="w-4 h-4 text-slate-400 shrink-0" />
                <a
                  href="mailto:contacto@grupomimesa.com"
                  className="hover:text-white transition-colors"
                >
                  contacto@grupomimesa.com
                </a>
              </p>
              <p className="pt-0.5">
                <Link
                  href="/contacto"
                  className="text-xs font-semibold text-slate-300 hover:text-white transition-colors inline-block underline-offset-4 hover:underline"
                >
                  Escríbenos directamente →
                </Link>
              </p>
            </div>

            <div className="pt-2">
              <button
                type="button"
                id="btn-scroll-to-top"
                onClick={scrollToTop}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full text-xs font-semibold bg-white/10 hover:bg-white/20 text-white border border-white/20 transition-all duration-300 group cursor-pointer"
              >
                <span>Volver al inicio</span>
                <ArrowUp className="w-3.5 h-3.5 group-hover:-translate-y-0.5 transition-transform" />
              </button>
            </div>
          </div>

        </div>

      </FadeIn>

      {/* Bottom Copyright Bar - Equilibrada y distribuida en 3 columnas */}
      <div className="relative w-full bg-[#050e19] border-t border-white/10 py-4 sm:py-5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-3 sm:gap-4 text-xs text-slate-400 text-center md:text-left">
          
          {/* Left: Empresa y RIF */}
          <div className="flex flex-wrap items-center justify-center md:justify-start gap-x-2 gap-y-1">
            <span>© {new Date().getFullYear()}</span>
            <strong className="font-heading font-extrabold text-white tracking-wide">
              MIMESA ALIMENTOS C.A.
            </strong>
            <span className="text-slate-600 hidden sm:inline">•</span>
            <span className="text-slate-300 font-medium tracking-wider">
              RIF J-07032176-8
            </span>
          </div>

          {/* Center: Todos los derechos reservados */}
          <div className="text-slate-400 font-normal">
            <span>Todos los derechos reservados.</span>
          </div>

          {/* Right: Créditos Desarrollador */}
          <div className="flex items-center justify-center md:justify-end gap-1.5 pt-0.5 md:pt-0">
            <span>Desarrollado por</span>
            <span className="font-bold text-white hover:text-slate-300 transition-colors cursor-pointer">
              El Conejo Del Sombrero
            </span>
          </div>

        </div>
      </div>

    </div>
  );
}
