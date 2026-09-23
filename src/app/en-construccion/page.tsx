import React from "react";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { HeaderWrapper } from "@/components/layout/header/header-wrapper";
import { FooterWrapper } from "@/components/layout/footer/footer-wrapper";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
  GlowOrb,
} from "@/components/ui/organic-shapes";

export const metadata = {
  title: "Estamos construyendo un nuevo espacio | Grupo Mimesa",
  description:
    "Estamos preparando un nuevo espacio interactivo para que conozcas todas nuestras marcas y productos. Muy pronto disponible.",
};

export default function EnConstruccionPage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#16365f] text-white selection:bg-[#02aeaa] selection:text-white">
      <HeaderWrapper />

      <main className="flex-1 relative flex items-center justify-center overflow-hidden py-32 sm:py-40 px-4 sm:px-6">
        {/* Ambient Lighting Orbs */}
        <GlowOrb color="cyan" className="top-1/4 -left-36 w-[550px] h-[550px] opacity-25" />
        <GlowOrb color="lime" className="bottom-1/4 -right-36 w-[500px] h-[500px] opacity-20" />
        <GlowOrb color="green" className="top-2/3 left-1/3 w-[450px] h-[450px] opacity-15" />

        {/* Floating Organic Brand Elements */}
        <div className="absolute top-28 left-12 pointer-events-none hidden lg:block opacity-35 animate-float-gentle">
          <MimesaLeafLime size={80} />
        </div>
        <div className="absolute bottom-24 right-16 pointer-events-none hidden lg:block opacity-35 animate-float-reverse">
          <MimesaLeafGreen size={85} />
        </div>

        {/* Background Watermark Sprout */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none opacity-5 select-none">
          <MimesaSprout size={580} />
        </div>

        {/* Center Card */}
        <div className="relative z-10 max-w-2xl mx-auto text-center space-y-8 p-8 sm:p-12 rounded-[2.5rem] bg-white/5 backdrop-blur-xl border border-white/15 shadow-2xl">
          {/* Animated Sprout Icon Header */}
          <div className="inline-flex items-center justify-center p-5 rounded-3xl bg-white/10 border border-white/20 shadow-inner">
            <MimesaSprout size={72} />
          </div>

          <div className="space-y-4">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#30deda] block">
              Espacio en Desarrollo
            </span>

            <h1 className="text-3xl sm:text-5xl font-black text-white leading-tight tracking-tight">
              Estamos construyendo un nuevo espacio.
            </h1>

            <p className="text-base sm:text-lg text-white/80 font-light leading-relaxed max-w-lg mx-auto">
              Muy pronto podrás explorar a detalle todas nuestras marcas y productos alimenticios, así como el complejo salino de Produsal.
            </p>
          </div>

          {/* Action Button: Volver al inicio */}
          <div className="pt-4">
            <Link
              href="/"
              className="inline-flex items-center gap-3 px-8 py-4 rounded-full bg-gradient-to-r from-[#02aeaa] to-[#009539] hover:from-[#30deda] hover:to-[#00b044] text-white font-bold text-sm sm:text-base shadow-xl shadow-[#02aeaa]/25 hover:shadow-2xl hover:shadow-[#02aeaa]/40 transition-all duration-300 hover:-translate-y-0.5 active:translate-y-0"
            >
              <ArrowLeft className="w-4 h-4" />
              <span>Volver al inicio</span>
            </Link>
          </div>
        </div>
      </main>

      <FooterWrapper />
    </div>
  );
}
