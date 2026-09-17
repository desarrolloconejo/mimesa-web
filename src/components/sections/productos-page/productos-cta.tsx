"use client";

import React from "react";
import Link from "next/link";
import { ArrowRight, Mail, PhoneCall, Building2 } from "lucide-react";

export function ProductosCta() {
  return (
    <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-20 sm:pb-28">
      <div className="relative rounded-3xl sm:rounded-[2.5rem] bg-gradient-to-br from-[#0c223f] via-[#1a3c6a] to-[#0a182b] text-white p-8 sm:p-14 overflow-hidden border border-white/10 shadow-2xl">
        {/* Background Gradient Orbs */}
        <div className="absolute -top-24 -right-24 w-96 h-96 rounded-full bg-[#02afab]/20 blur-3xl pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-96 h-96 rounded-full bg-[#009539]/20 blur-3xl pointer-events-none" />

        <div className="relative z-10 max-w-3xl space-y-6">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#30deda] block">
            Atención a Distribuidores e Industria
          </span>

          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white leading-tight tracking-tight">
            ¿Deseas distribuir nuestras marcas de alimentos o adquirir sal marina a gran escala?
          </h2>

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed max-w-2xl">
            Contamos con capacidad logística y acuerdos comerciales flexibles para cadenas de supermercados, mayoristas, industrias químicas, farmacéuticas y plantas procesadoras en todo el territorio nacional.
          </p>

          <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 pt-4">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-full bg-gradient-to-r from-[#02afab] to-[#009539] hover:from-[#30deda] hover:to-[#00b044] text-white font-bold text-sm shadow-xl shadow-[#02afab]/25 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0 cursor-pointer"
            >
              <span>Contactar a nuestro equipo comercial</span>
              <ArrowRight className="w-4 h-4" />
            </Link>

            <Link
              href="/sobre-nosotros"
              className="inline-flex items-center justify-center gap-2 px-6 py-4 rounded-full bg-white/10 hover:bg-white/15 text-white font-semibold text-sm border border-white/15 transition-all duration-300 cursor-pointer"
            >
              <Building2 className="w-4 h-4 text-[#30deda]" />
              <span>Conocer nuestra empresa</span>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
