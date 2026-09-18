"use client";

import React, { useState } from "react";
import Link from "next/link";
import { CheckCircle2, Loader2, ArrowRight, Upload, Mail } from "lucide-react";
import { CustomSelect } from "@/components/ui/custom-select";
import { TRABAJA_DATA } from "./trabaja-data";

export interface TrabajaFormProps {
  className?: string;
  title?: string;
  subtitle?: string;
}

export function TrabajaForm({
  className = "",
  title = "Postula tu Talento",
  subtitle = "Completa tus datos y cuéntanos sobre tu perfil. Nuestro equipo de Gestión Humana evaluará tu postulación para oportunidades afines.",
}: TrabajaFormProps) {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    ciudad: "",
    area: TRABAJA_DATA.formAreas[0],
    perfilLink: "",
    experiencia: "",
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
      ciudad: "",
      area: TRABAJA_DATA.formAreas[0],
      perfilLink: "",
      experiencia: "",
      aceptoPolitica: false,
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div
        className={`p-8 sm:p-12 rounded-[2.5rem] bg-white border border-slate-150/80 shadow-[0_20px_50px_rgba(26,60,106,0.08)] text-center space-y-6 animate-in fade-in duration-500 ${className}`}
      >
        <div className="w-16 h-16 rounded-3xl bg-[#009539]/15 border border-[#009539]/30 flex items-center justify-center mx-auto text-[#009539] shadow-sm">
          <CheckCircle2 className="w-8 h-8 text-[#009539]" />
        </div>
        <div className="space-y-2">
          <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">
            Postulación recibida con éxito
          </h3>
          <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed">
            Gracias por tu interés en formar parte de Grupo Mimesa. Tus datos han sido registrados en nuestro banco de talento para los procesos de selección activos y futuros.
          </p>
        </div>
        <button
          type="button"
          onClick={handleReset}
          className="inline-flex items-center gap-2 px-7 py-3 rounded-full bg-[#1a3c6a] hover:bg-[#02afab] text-white text-xs font-bold transition-all shadow-md hover:shadow-lg focus:outline-none cursor-pointer"
        >
          Enviar otra postulación
        </button>
      </div>
    );
  }

  const labelClasses = "block text-xs font-bold text-[#1a3c6a] uppercase tracking-wider";
  const inputClasses =
    "w-full px-4 py-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200/70 text-[#1a3c6a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#02afab] focus:ring-4 focus:ring-[#02afab]/10 transition-all duration-200";
  const textareaClasses =
    "w-full px-4 py-3.5 rounded-2xl bg-[#f8fafc] border border-slate-200/70 text-[#1a3c6a] placeholder-slate-400 text-sm focus:outline-none focus:bg-white focus:border-[#02afab] focus:ring-4 focus:ring-[#02afab]/10 transition-all duration-200 resize-none";

  return (
    <form
      onSubmit={handleSubmit}
      className={`h-full flex flex-col justify-between p-7 sm:p-10 lg:p-12 rounded-[2.5rem] bg-white shadow-[0_25px_70px_rgba(26,60,106,0.06)] border border-slate-100/90 space-y-7 ${className}`}
    >
      <div className="space-y-2">
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#009539] block">
          Formulario de Postulación
        </span>
        <h3 className="text-2xl sm:text-3xl font-black text-[#1a3c6a] tracking-tight">{title}</h3>
        <p className="text-xs sm:text-sm text-gray-500 leading-relaxed max-w-lg">{subtitle}</p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        {/* Nombre y Correo */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={labelClasses}>Nombre y Apellido *</label>
            <input
              type="text"
              required
              placeholder="Ej. Carlos Rodríguez"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div className="space-y-1.5">
            <label className={labelClasses}>Correo Electrónico *</label>
            <input
              type="email"
              required
              placeholder="carlos@correo.com"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Teléfono y Ciudad */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div className="space-y-1.5">
            <label className={labelClasses}>Teléfono / WhatsApp *</label>
            <input
              type="tel"
              required
              placeholder="+58 (412) 000-0000"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className={inputClasses}
            />
          </div>

          <div className="space-y-1.5">
            <label className={labelClasses}>Ciudad / Estado *</label>
            <input
              type="text"
              required
              placeholder="Ej. Caracas / Miranda"
              value={formData.ciudad}
              onChange={(e) => setFormData({ ...formData, ciudad: e.target.value })}
              className={inputClasses}
            />
          </div>
        </div>

        {/* Área de Postulación (CustomSelect) */}
        <div className="space-y-1.5">
          <label className={labelClasses}>Área de Interés / Especialidad *</label>
          <CustomSelect
            value={formData.area}
            onChange={(val) => setFormData({ ...formData, area: val })}
            options={TRABAJA_DATA.formAreas}
            variant="light"
            name="area"
          />
        </div>

        {/* LinkedIn / Portafolio enlace */}
        <div className="space-y-1.5">
          <label className={labelClasses}>Enlace a LinkedIn o CV Digital (Opcional)</label>
          <input
            type="url"
            placeholder="https://linkedin.com/in/tu-perfil"
            value={formData.perfilLink}
            onChange={(e) => setFormData({ ...formData, perfilLink: e.target.value })}
            className={inputClasses}
          />
        </div>

        {/* Resumen Profesional / Mensaje */}
        <div className="space-y-1.5">
          <label className={labelClasses}>Síntesis de Experiencia o Presentación *</label>
          <textarea
            required
            rows={4}
            placeholder="Describe brevemente tu formación académica, años de experiencia relevante y por qué te gustaría unirte a Grupo Mimesa..."
            value={formData.experiencia}
            onChange={(e) => setFormData({ ...formData, experiencia: e.target.value })}
            className={textareaClasses}
          />
        </div>

        {/* Consentimiento de Privacidad y Selección */}
        <div className="flex items-start gap-3 pt-1">
          <input
            type="checkbox"
            id="trabaja-consent"
            required
            checked={formData.aceptoPolitica}
            onChange={(e) => setFormData({ ...formData, aceptoPolitica: e.target.checked })}
            className="mt-1 h-4 w-4 shrink-0 rounded accent-[#02afab] border-slate-300 text-[#02afab] focus:ring-[#02afab] cursor-pointer"
          />
          <label
            htmlFor="trabaja-consent"
            className="text-xs text-gray-600 leading-relaxed cursor-pointer select-none"
          >
            He leído y acepto la{" "}
            <Link
              href="/politica-de-privacidad"
              className="font-semibold text-[#02afab] underline underline-offset-2 hover:opacity-80 transition-opacity"
            >
              Política de Privacidad
            </Link>{" "}
            y autorizo el tratamiento de mis datos personales y perfil profesional para los procesos de selección de talento humano de Grupo Mimesa.
          </label>
        </div>
      </div>

      {/* Acciones de Envío y Canal Alternativo */}
      <div className="space-y-4 pt-1">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-9 py-4 rounded-full bg-gradient-to-r from-[#02afab] to-[#009539] hover:from-[#009539] hover:to-[#02afab] text-white text-sm font-black shadow-xl shadow-[#02afab]/20 hover:shadow-2xl hover:shadow-[#02afab]/35 hover:-translate-y-0.5 active:translate-y-0 transition-all duration-300 disabled:opacity-50 focus:outline-none cursor-pointer"
        >
          {isSubmitting ? (
            <>
              <Loader2 className="w-4 h-4 animate-spin text-white" />
              <span>Procesando postulación...</span>
            </>
          ) : (
            <>
              <span>Enviar postulación</span>
              <ArrowRight className="w-4 h-4" />
            </>
          )}
        </button>

        <p className="text-xs text-gray-500 font-light flex items-center gap-1.5 pt-1">
          <Mail className="w-3.5 h-3.5 text-[#02afab] shrink-0" />
          <span>
            ¿Prefieres adjuntar tu CV en PDF? Escríbenos directamente a{" "}
            <a
              href={`mailto:${TRABAJA_DATA.email}?subject=Postulaci%C3%B3n%20Laboral%20-%20Grupo%20Mimesa`}
              className="text-[#02afab] font-bold hover:underline"
            >
              {TRABAJA_DATA.email}
            </a>
          </span>
        </p>
      </div>
    </form>
  );
}
