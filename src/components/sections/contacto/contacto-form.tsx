"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CONTACTO_DATA } from "./contacto-data";
import { CheckCircle2, Loader2, ArrowRight } from "lucide-react";
import { CustomSelect } from "@/components/ui/custom-select";

export interface ContactoFormProps {
  variant?: "dark" | "light";
  className?: string;
  title?: string;
  subtitle?: string;
  showTitle?: boolean;
}

export function ContactoForm({
  variant = "dark",
  className = "",
  title = "Envíanos un mensaje",
  subtitle = "Completa el formulario y te responderemos en menos de 24 horas hábiles.",
  showTitle = true,
}: ContactoFormProps) {
  const isLight = variant === "light";

  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: CONTACTO_DATA.formSubjects[0],
    mensaje: "",
    aceptoPolitica: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.aceptoPolitica) return;
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1200);
  };

  const handleReset = () => {
    setFormData({
      nombre: "",
      correo: "",
      telefono: "",
      asunto: CONTACTO_DATA.formSubjects[0],
      mensaje: "",
      aceptoPolitica: false,
    });
    setIsSubmitted(false);
  };

  // Success Feedback Screen
  if (isSubmitted) {
    if (isLight) {
      return (
        <div className={`p-8 sm:p-12 rounded-[2.5rem] bg-white border border-gray-150 shadow-[0_20px_50px_rgba(26,60,106,0.08)] text-center space-y-6 animate-in fade-in duration-500 ${className}`}>
          <div className="w-16 h-16 rounded-3xl bg-[#02afab]/15 border border-[#02afab]/30 flex items-center justify-center mx-auto text-[#02afab] shadow-sm">
            <CheckCircle2 className="w-8 h-8 text-[#02afab]" />
          </div>
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
              Mensaje enviado con éxito
            </h3>
            <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
              Hemos recibido tu solicitud. Un representante de nuestro equipo comercial y corporativo te contactará a la brevedad.
            </p>
          </div>
          <button
            type="button"
            onClick={handleReset}
            className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a3c6a] hover:bg-[#02afab] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
          >
            Enviar otra consulta
          </button>
        </div>
      );
    }

    return (
      <div className={`p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl text-center space-y-6 animate-in fade-in duration-500 ${className}`}>
        <div className="w-16 h-16 rounded-full bg-[#02afab]/20 border border-[#02afab]/40 flex items-center justify-center mx-auto text-[#02afab]">
          <CheckCircle2 className="w-8 h-8 text-[#02afab]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl font-bold text-white tracking-tight">
            Mensaje enviado con éxito
          </h3>
          <p className="text-sm text-gray-300 max-w-md mx-auto leading-relaxed">
            Hemos recibido tu solicitud. Un representante de nuestro equipo comercial y corporativo te contactará a la brevedad.
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all focus:outline-none cursor-pointer"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  // Styles per variant
  const containerClasses = isLight
    ? `h-full flex flex-col justify-between p-8 sm:p-12 rounded-[2.5rem] bg-white shadow-[0_25px_70px_rgba(26,60,106,0.06)] border border-slate-100/80 space-y-8 ${className}`
    : `h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30 space-y-6 ${className}`;

  const titleClasses = isLight
    ? "text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight"
    : "text-xl sm:text-2xl font-bold text-white tracking-tight";

  const subtitleClasses = isLight
    ? "text-xs sm:text-sm text-gray-500 leading-relaxed"
    : "text-xs sm:text-sm text-gray-300";

  const labelClasses = isLight
    ? "block text-xs font-bold text-[#1a3c6a] uppercase tracking-wider"
    : "block text-xs font-semibold text-gray-200 uppercase tracking-wider";

  const inputClasses = isLight
    ? "w-full px-4 py-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200/60 text-[#1a3c6a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#02afab] focus:ring-4 focus:ring-[#02afab]/10 transition-all duration-200"
    : "w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200";

  const textareaClasses = isLight
    ? "w-full px-4 py-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200/60 text-[#1a3c6a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#02afab] focus:ring-4 focus:ring-[#02afab]/10 transition-all duration-200 resize-none"
    : "w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200 resize-none";

  const buttonClasses = isLight
    ? "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#02afab] to-[#009539] hover:from-[#009539] hover:to-[#02afab] text-white text-sm font-black shadow-xl shadow-[#02afab]/20 hover:shadow-2xl hover:shadow-[#02afab]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 focus:outline-none cursor-pointer"
    : "w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#02afab] hover:bg-[#009539] text-white text-sm font-bold shadow-lg shadow-[#02afab]/25 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 focus:outline-none cursor-pointer";

  return (
    <form onSubmit={handleSubmit} className={containerClasses}>
      {showTitle && (
        <div className="space-y-1.5">
          <h3 className={titleClasses}>{title}</h3>
          <p className={subtitleClasses}>{subtitle}</p>
        </div>
      )}

      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nombre */}
          <div className="space-y-1.5">
            <label className={labelClasses}>Nombre y Apellido</label>
            <input
              type="text"
              required
              placeholder="Ej. Valentina Morales"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Correo */}
          <div className="space-y-1.5">
            <label className={labelClasses}>Correo Electrónico</label>
            <input
              type="email"
              required
              placeholder="correo@empresa.com"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Teléfono */}
          <div className="space-y-1.5">
            <label className={labelClasses}>Teléfono / WhatsApp</label>
            <input
              type="tel"
              placeholder="+58 (412) 000-0000"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className={inputClasses}
            />
          </div>

          {/* Asunto (Custom Select con estrategia de divs y valor) */}
          <div className="space-y-1.5">
            <label className={labelClasses}>Área de Interés</label>
            <CustomSelect
              value={formData.asunto}
              onChange={(val) => setFormData({ ...formData, asunto: val })}
              options={CONTACTO_DATA.formSubjects}
              variant={variant}
              name="asunto"
            />
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-1.5">
          <label className={labelClasses}>Mensaje o Requerimiento</label>
          <textarea
            required
            rows={4}
            placeholder="Describe tu consulta, requerimiento comercial o propuesta..."
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className={textareaClasses}
          />
        </div>

        {/* Consentimiento de Privacidad */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id={`contacto-consent-${variant}`}
            required
            checked={formData.aceptoPolitica}
            onChange={(e) => setFormData({ ...formData, aceptoPolitica: e.target.checked })}
            className={`mt-1 h-4 w-4 shrink-0 rounded cursor-pointer transition-colors ${
              isLight
                ? "accent-[#02afab] border-slate-300 text-[#02afab] focus:ring-[#02afab]"
                : "accent-[#02afab] bg-white/10 border-white/20 text-[#02afab] focus:ring-[#02afab]"
            }`}
          />
          <label
            htmlFor={`contacto-consent-${variant}`}
            className={`text-xs leading-relaxed cursor-pointer select-none ${
              isLight ? "text-gray-600" : "text-gray-300"
            }`}
          >
            He leído y acepto la{" "}
            <Link
              href="/politica-de-privacidad"
              className={`font-semibold underline underline-offset-2 hover:opacity-80 transition-opacity ${
                isLight ? "text-[#02afab]" : "text-[#30deda]"
              }`}
            >
              Política de Privacidad
            </Link>{" "}
            y autorizo el tratamiento de mis datos de contacto para atender mi consulta.
          </label>
        </div>
      </div>

      {/* Botón Enviar */}
      <div className="pt-2">
        <button type="submit" disabled={isSubmitting} className={buttonClasses}>
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Enviando información...</span>
            </>
          ) : (
            <>
              <span>Enviar mensaje</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>
      </div>
    </form>
  );
}
