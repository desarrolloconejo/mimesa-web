"use client";

import React from "react";
import { CheckCircle2 } from "lucide-react";
import { MILESTONES_DATA, MilestoneData } from "../trayectoria/trayectoria-data";
import { FadeIn } from "@/components/ui/fade-in";

export function TimelineFull() {
  return (
    <div className="w-full">
      {/* Recorrido Cronológico Continuo y Completo (Sin pestañas, alternando izquierda y derecha) */}
      <div className="relative max-w-5xl mx-auto">
        {/* Línea Central Conectora (Desktop) / Lateral (Mobile) */}
        <div className="absolute top-6 bottom-6 left-6 md:left-1/2 -translate-x-1/2 w-1 bg-gradient-to-b from-[#02aeaa] via-[#009539] to-[#95c11e] rounded-full opacity-35 pointer-events-none" />

        <div className="space-y-12 sm:space-y-16">
          {MILESTONES_DATA.map((milestone, idx) => {
            const isLeft = idx % 2 === 0;

            return (
              <div
                key={milestone.id}
                className={`relative flex flex-col md:flex-row items-center w-full group ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Marcador Central del Hito */}
                <FadeIn
                  direction="none"
                  scale={true}
                  className="absolute left-6 md:left-1/2 -translate-x-1/2 z-20 flex items-center justify-center pointer-events-none"
                >
                  <div className="w-9 h-9 rounded-full bg-white border-4 border-[#02aeaa] group-hover:border-[#009539] group-hover:scale-110 shadow-md flex items-center justify-center transition-all duration-300">
                    <div className="w-2.5 h-2.5 rounded-full bg-[#009539]" />
                  </div>
                </FadeIn>

                {/* Columna con Tarjeta del Hito (Izquierda si isLeft, Derecha si !isLeft) */}
                <FadeIn
                  direction={isLeft ? "left" : "right"}
                  distance={28}
                  className={`w-full md:w-1/2 pl-14 md:pl-0 ${
                    isLeft ? "md:pr-12 md:text-right" : "md:pl-12 md:text-left"
                  }`}
                >
                  <MilestoneCard milestone={milestone} isLeft={isLeft} />
                </FadeIn>

                {/* Mitad Vacía en el lado opuesto para mantener la alternancia perfecta */}
                <div className="hidden md:block md:w-1/2" />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

function MilestoneCard({
  milestone,
  isLeft,
}: {
  milestone: MilestoneData;
  isLeft: boolean;
}) {
  return (
    <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-100 shadow-[0_10px_30px_rgba(26,60,106,0.04)] hover:shadow-[0_15px_45px_rgba(26,60,106,0.08)] transition-all duration-300 space-y-4 text-left">
      {/* Header del Hito: Año y Badge */}
      <div
        className={`flex items-center gap-3 flex-wrap ${
          isLeft ? "md:justify-end" : "justify-start"
        }`}
      >
        <span className="text-3xl sm:text-4xl font-black text-[#183c6b] tracking-tight">
          {milestone.year}
        </span>
        <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
          {milestone.badge}
        </span>
      </div>

      {/* Título y Subtítulo */}
      <div className={`space-y-1 ${isLeft ? "md:text-right" : "text-left"}`}>
        <h3 className="text-lg sm:text-xl font-black text-[#183c6b] tracking-tight leading-snug">
          {milestone.title}
        </h3>
        <p className="text-xs font-semibold text-[#009539]">
          {milestone.subtitle}
        </p>
      </div>

      {/* Narrativa Principal */}
      <p
        className={`text-xs sm:text-sm text-gray-600 font-light leading-relaxed ${
          isLeft ? "md:text-right" : "text-left"
        }`}
      >
        {milestone.description}
      </p>

      {/* Detalle Histórico Complementario */}
      {milestone.detailedStory && (
        <p
          className={`text-xs text-slate-500 italic bg-slate-50 p-3 rounded-xl border-l-2 border-[#02aeaa] text-left`}
        >
          &ldquo;{milestone.detailedStory}&rdquo;
        </p>
      )}

      {/* Logro y Métrica */}
      <div
        className={`pt-2 border-t border-slate-100 flex items-center justify-between gap-4 flex-wrap ${
          isLeft ? "md:flex-row-reverse" : "flex-row"
        }`}
      >
        <div className="flex items-center gap-2 text-xs text-[#183c6b] font-medium">
          <CheckCircle2 className="w-4 h-4 text-[#009539] shrink-0" />
          <span className="line-clamp-2">{milestone.achievement}</span>
        </div>

        <div className={`shrink-0 ${isLeft ? "md:text-left text-right" : "text-right"}`}>
          <span className="text-sm font-black text-[#183c6b] block">
            {milestone.metric}
          </span>
          <span className="text-[10px] text-gray-400 font-light block">
            {milestone.metricLabel}
          </span>
        </div>
      </div>
    </div>
  );
}
