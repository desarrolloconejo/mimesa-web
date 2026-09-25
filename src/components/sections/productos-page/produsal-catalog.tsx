"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Waves,
  Sun,
  Factory,
  Sparkles,
  ShieldCheck,
  Leaf,
  FlaskConical,
  UtensilsCrossed,
  Beef,
  ArrowRight,
} from "lucide-react";

export function ProdusalCatalog() {
  const processSteps = [
    {
      number: "01",
      title: "Captación Oceánica",
      subtitle: "Ingreso de Agua Marina",
      description:
        "Ingreso controlado de aguas de alta salinidad a través de compuertas de marea hacia un circuito de lagunas naturales de concentración.",
      icon: Waves,
    },
    {
      number: "02",
      title: "Evaporación Solar",
      subtitle: "300+ Días de Sol al Año",
      description:
        "La radiación solar intensa del Zulia y los vientos alisios evaporan el agua de manera 100% natural, elevando la concentración de salmuera sin emisiones contaminantes.",
      icon: Sun,
    },
    {
      number: "03",
      title: "Cosecha y Refinación",
      subtitle: "Cristalización Pura >99.5%",
      description:
        "Cosecha mecánica en vasos cristalizadores, lavado con salmuera saturada, secado térmico, calibración de granulometría y envasado de grado alimenticio e industrial.",
      icon: Factory,
    },
  ];

  const applicationLines = [
    {
      id: "consumo",
      title: "Sal de Mesa & Hogar",
      badge: "Consumo Masivo",
      icon: UtensilsCrossed,
      color: "#02aeaa",
      description:
        "Sal marina fina refinada, yodada y fluorada, y sal parrillera de grano medio, diseñadas para potenciar el sabor de la cocina cotidiana y los asados familiares.",
      features: ["Pureza superior al 99.2%", "Grano fino corredizo", "Sal parrillera seleccionada"],
    },
    {
      id: "alimentos",
      title: "Industria de Alimentos",
      badge: "Grado Alimenticio",
      icon: ShieldCheck,
      color: "#009539",
      description:
        "Ingrediente esencial con granulometría estrictamente calibrada para la industria cárnica, panificadora, láctea, quesera, pesquera y de snacks.",
      features: ["Control microbiológico riguroso", "Materia prima grado BRC/FSSC", "Disponibilidad a granel y sacos"],
    },
    {
      id: "quimica",
      title: "Industria Química & Cloro-Álcali",
      badge: "Grado Industrial",
      icon: FlaskConical,
      color: "#183c6b",
      description:
        "Materia prima de máxima pureza para electrólisis, producción de cloro, soda cáustica, resinas, tratamiento de aguas potables e industriales y procesos petroleros.",
      features: ["Bajo contenido de calcio y magnesio", "Humedad controlada", "Logística de gran calado"],
    },
    {
      id: "animal",
      title: "Nutrición Animal & Ganadería",
      badge: "Agropecuario",
      icon: Beef,
      color: "#95c11e",
      description:
        "Sal forrajera y bloques minerales formulados para el óptimo balance electrolítico y desarrollo del ganado bovino, porcino y equino en las zonas productoras del país.",
      features: ["Enriquecida con minerales traza", "Alta resistencia a la intemperie", "Aporte vital de sodio"],
    },
  ];

  return (
    <section id="seccion-produsal" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 space-y-16 sm:space-y-20">
      
      {/* ========================================================
          1. HEADER & INTRODUCCIÓN AL COMPLEJO
         ======================================================== */}
      <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 pb-8 border-b border-slate-200/80">
        <div className="space-y-3 max-w-3xl">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
            Complejo Salinero Produsal
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-[#183c6b] tracking-tight">
            Parque Salinero Los Olivitos: Sal Solar de Alta Pureza
          </h2>
          <p className="text-sm sm:text-base text-gray-600 font-light leading-relaxed">
            Ubicado en el municipio Miranda del estado Zulia, Produsal opera uno de los parques salineros más modernos y extensos de América Latina, con más de 40.000 hectáreas donde la naturaleza y la ingeniería se unen para producir sal marina de calidad de exportación.
          </p>
        </div>

        {/* Technical Metric Pill */}
        <div className="p-4 rounded-2xl bg-teal-50/80 border border-teal-100 flex items-center gap-4 shrink-0">
          <div>
            <span className="text-2xl font-black text-[#02aeaa] block">&gt;99.5%</span>
            <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">
              Pureza NaCl en Cosecha
            </span>
          </div>
          <div className="h-8 w-px bg-teal-200/80" />
          <div>
            <span className="text-2xl font-black text-[#183c6b] block">+40.000</span>
            <span className="text-[11px] text-gray-500 font-bold uppercase tracking-wider block">
              Hectáreas Salinas
            </span>
          </div>
        </div>
      </div>

      {/* ========================================================
          2. EL CICLO SOLAR NATURAL (Infografía de 3 Fases)
         ======================================================== */}
      <div className="space-y-8">
        <div className="text-center max-w-2xl mx-auto space-y-2">
          <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
            Proceso de Producción Ecológica
          </span>
          <h3 className="text-2xl sm:text-3xl font-black text-[#183c6b]">
            El Ciclo de Cristalización Solar
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 font-light">
            Un proceso 100% natural donde la energía solar y el viento concentran el agua del mar sin combustibles fósiles.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {processSteps.map((step) => {
            const Icon = step.icon;
            return (
              <div
                key={step.number}
                className="relative rounded-3xl bg-white border border-slate-200/90 p-6 sm:p-8 space-y-4 shadow-sm hover:shadow-lg hover:border-[#02aeaa]/40 transition-all duration-300 group"
              >
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-teal-50 text-[#02aeaa] flex items-center justify-center group-hover:scale-110 transition-transform">
                    <Icon className="w-6 h-6" />
                  </div>
                  <span className="text-2xl font-black text-slate-200 group-hover:text-[#02aeaa]/30 transition-colors">
                    {step.number}
                  </span>
                </div>

                <div className="space-y-1.5">
                  <h4 className="text-lg font-bold text-[#183c6b] group-hover:text-[#02aeaa] transition-colors">
                    {step.title}
                  </h4>
                  <p className="text-xs font-semibold text-[#02aeaa]">
                    {step.subtitle}
                  </p>
                </div>

                <p className="text-xs text-gray-600 leading-relaxed font-light">
                  {step.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          3. LÍNEAS DE APLICACIÓN (Hogar, Industria, Química, Ganadería)
         ======================================================== */}
      <div className="space-y-8">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
          <div className="space-y-1.5">
            <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa] block">
              Mercados y Aplicaciones
            </span>
            <h3 className="text-2xl sm:text-3xl font-black text-[#183c6b]">
              Líneas de Sal Produsal
            </h3>
          </div>
          <span className="text-xs text-gray-500 font-medium">
            Disponibilidad en sacos de 1kg, 25kg, 50kg, Big Bags (1 TM) y granel marítimo.
          </span>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {applicationLines.map((line) => {
            const Icon = line.icon;
            return (
              <div
                key={line.id}
                className="relative rounded-3xl bg-white border border-slate-200/90 p-7 sm:p-8 space-y-5 shadow-sm hover:shadow-xl hover:border-[#02aeaa]/40 transition-all duration-300 flex flex-col justify-between group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <div
                      className="w-11 h-11 rounded-2xl flex items-center justify-center transition-transform group-hover:scale-110"
                      style={{ backgroundColor: `${line.color}15`, color: line.color }}
                    >
                      <Icon className="w-5 h-5" />
                    </div>
                    <span
                      className="text-[10px] font-extrabold px-3 py-1 rounded-full uppercase tracking-wider"
                      style={{ backgroundColor: `${line.color}15`, color: line.color }}
                    >
                      {line.badge}
                    </span>
                  </div>

                  <div className="space-y-1">
                    <h4 className="text-xl font-bold text-[#183c6b]">{line.title}</h4>
                    <p className="text-xs sm:text-sm text-gray-600 font-light leading-relaxed">
                      {line.description}
                    </p>
                  </div>

                  <ul className="space-y-1.5 pt-1 text-xs text-slate-700">
                    {line.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-center gap-2">
                        <div
                          className="w-1.5 h-1.5 rounded-full shrink-0"
                          style={{ backgroundColor: line.color }}
                        />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                  <span className="text-[11px] font-semibold text-gray-400">
                    Suministro continuo garantizado
                  </span>
                  <Link
                    href="/contacto"
                    className="inline-flex items-center gap-1.5 text-xs font-bold text-[#02aeaa] hover:text-[#009539] transition-colors"
                  >
                    <span>Solicitar cotización</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* ========================================================
          4. COMPROMISO ECOLÓGICO Y REFUGIO DE FAUNA
         ======================================================== */}
      <div className="relative rounded-3xl bg-gradient-to-r from-[#183c6b] via-[#16365f] to-[#0c223f] text-white p-8 sm:p-12 overflow-hidden shadow-xl">
        <div className="relative z-10 max-w-3xl space-y-4">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 text-[#30deda] text-xs font-bold uppercase tracking-wider">
            <Leaf className="w-3.5 h-3.5" />
            <span>Compromiso Ambiental Los Olivitos</span>
          </div>

          <h3 className="text-2xl sm:text-3xl font-black text-white leading-tight">
            Producción industrial en armonía con uno de los humedales más importantes del Caribe.
          </h3>

          <p className="text-sm sm:text-base text-white/80 font-light leading-relaxed">
            Las salinas de Produsal coexisten en el Refugio de Fauna Silvestre Los Olivitos, hábitat protegido que alberga la colonia reproductiva más grande de Flamencos Rosados (*Phoenicopterus ruber*) en Venezuela. Nuestra operación mantiene los niveles de salinidad que alimentan la rica biodiversidad del ecosistema estuarino.
          </p>
        </div>

        {/* Background Watermark Wave */}
        <div className="absolute right-4 bottom-4 pointer-events-none opacity-5">
          <Waves size={260} />
        </div>
      </div>

    </section>
  );
}
