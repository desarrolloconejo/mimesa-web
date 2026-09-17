"use client";

import React, { useState } from "react";
import { CONTACTO_DATA } from "./contacto-data";
import { Send, CheckCircle2, Loader2, ArrowRight } from "lucide-react";

export function ContactoForm() {
  const [formData, setFormData] = useState({
    nombre: "",
    correo: "",
    telefono: "",
    asunto: CONTACTO_DATA.formSubjects[0],
    mensaje: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
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
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="p-8 sm:p-12 rounded-3xl bg-white/[0.04] border border-white/15 backdrop-blur-2xl text-center space-y-6 animate-in fade-in duration-500">
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
          className="inline-flex items-center gap-2 px-6 py-2.5 rounded-full bg-white/10 hover:bg-white/20 text-white text-xs font-bold transition-all focus:outline-none"
        >
          Enviar otra consulta
        </button>
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="h-full flex flex-col justify-between p-8 sm:p-10 rounded-3xl bg-white/[0.04] border border-white/10 backdrop-blur-2xl shadow-2xl shadow-black/30 space-y-6"
    >
      <div className="space-y-1">
        <h3 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
          Envíanos un mensaje
        </h3>
        <p className="text-xs sm:text-sm text-gray-300">
          Completa el formulario y te responderemos en menos de 24 horas hábiles.
        </p>
      </div>

      <div className="space-y-4 sm:space-y-5">
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Nombre */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Nombre y Apellido
            </label>
            <input
              type="text"
              required
              placeholder="Ej. Valentina Morales"
              value={formData.nombre}
              onChange={(e) => setFormData({ ...formData, nombre: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200"
            />
          </div>

          {/* Correo */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Correo Electrónico
            </label>
            <input
              type="email"
              required
              placeholder="correo@empresa.com"
              value={formData.correo}
              onChange={(e) => setFormData({ ...formData, correo: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
          {/* Teléfono */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Teléfono / WhatsApp
            </label>
            <input
              type="tel"
              placeholder="+58 (412) 000-0000"
              value={formData.telefono}
              onChange={(e) => setFormData({ ...formData, telefono: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200"
            />
          </div>

          {/* Asunto */}
          <div className="space-y-1.5">
            <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider">
              Área de Interés
            </label>
            <select
              value={formData.asunto}
              onChange={(e) => setFormData({ ...formData, asunto: e.target.value })}
              className="w-full px-4 py-3 rounded-xl bg-[#102b4c] border border-white/10 text-white text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200"
            >
              {CONTACTO_DATA.formSubjects.map((sub, i) => (
                <option key={i} value={sub} className="bg-[#0c223f] text-white py-1">
                  {sub}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Mensaje */}
        <div className="space-y-1.5">
          <label className="block text-xs font-semibold text-gray-200 uppercase tracking-wider">
            Mensaje o Requerimiento
          </label>
          <textarea
            required
            rows={4}
            placeholder="Describe tu consulta, volumen comercial o propuesta de alianza..."
            value={formData.mensaje}
            onChange={(e) => setFormData({ ...formData, mensaje: e.target.value })}
            className="w-full px-4 py-3 rounded-xl bg-white/[0.06] border border-white/10 text-white placeholder-gray-400 text-sm focus:outline-none focus:border-[#02afab] focus:ring-1 focus:ring-[#02afab] transition-all duration-200 resize-none"
          />
        </div>
      </div>

      {/* Botón Enviar */}
      <div className="pt-2">
        <button
          type="submit"
          disabled={isSubmitting}
          className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-8 py-3.5 rounded-full bg-[#02afab] hover:bg-[#009539] text-white text-sm font-bold shadow-lg shadow-[#02afab]/25 hover:scale-105 active:scale-95 transition-all duration-300 disabled:opacity-50 focus:outline-none"
        >
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
