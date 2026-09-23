"use client";

import React, { useState } from "react";
import {
  Sparkles,
  CheckCircle2,
  ChevronRight,
  BookOpen,
} from "lucide-react";
import { MILESTONES_DATA } from "./trayectoria-data";
import {
  MimesaSprout,
  MimesaLeafLime,
  MimesaLeafGreen,
} from "@/components/ui/organic-shapes";

export function TwoColumnTimeline() {
  // Desktop active milestone (controlled strictly by user click, defaults to first)
  const [desktopActiveIndex, setDesktopActiveIndex] = useState<number>(0);
  // Mobile accordion active index: null means all collapsed initially
  const [mobileActiveIndex, setMobileActiveIndex] = useState<number | null>(null);

  const activeMilestone = MILESTONES_DATA[desktopActiveIndex];

  const handleItemClick = (idx: number) => {
    // Desktop: switch the sticky showcase card
    setDesktopActiveIndex(idx);
    // Mobile: toggle accordion open/closed
    setMobileActiveIndex((prev) => (prev === idx ? null : idx));
  };

  return (
    <div className="relative w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 select-none">
      
      {/* Floating Ambient Brand Accents */}
      <div className="absolute top-10 -left-10 z-0 pointer-events-none hidden xl:block animate-float-gentle">
        <MimesaLeafGreen size={100} opacity={0.35} />
      </div>
      <div className="absolute bottom-10 -right-8 z-0 pointer-events-none hidden xl:block animate-float-reverse">
        <MimesaLeafLime size={110} opacity={0.35} />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start relative">
        
        {/* ========================================================
            LEFT COLUMN (7 cols): Full Explanatory Showcase Card
            Sticky in its vertical container space!
            Visible ONLY on desktop (hidden on mobile)
           ======================================================== */}
        <div className="hidden lg:block lg:col-span-7 self-start lg:sticky lg:top-36 z-20">
          
          {/* Steady, grounded card container (compact height, completely visible in viewport) */}
          <div className="relative rounded-3xl bg-white border border-gray-100 shadow-xl p-5 sm:p-7 overflow-hidden">
            
            {/* Giant Background Year Watermark */}
            <div className="absolute right-3 -bottom-4 pointer-events-none select-none text-[90px] sm:text-[130px] font-black text-[#183c6b]/[0.03] tracking-tighter leading-none">
              {activeMilestone.year}
            </div>

            {/* Top Brand Decorative Badge, Year & Sprout */}
            <div className="relative z-10 flex items-center justify-between gap-3 mb-3.5 pb-3 border-b border-gray-100">
              <div className="flex items-center gap-2.5">
                <span className="text-3xl sm:text-4xl font-black text-[#183c6b] tracking-tight">
                  {activeMilestone.year}
                </span>
                <span className="text-xs font-extrabold uppercase tracking-widest text-[#02aeaa]">
                  {activeMilestone.badge}
                </span>
              </div>

              {/* Mimesa Sprout Mini Emblem */}
              <div className="p-1.5 rounded-xl bg-gray-50 border border-gray-100">
                <MimesaSprout size={26} />
              </div>
            </div>

            {/* Titles and Subtitle */}
            <div className="relative z-10 space-y-1 mb-3.5">
              <h3 className="text-xl sm:text-2xl font-black text-[#183c6b] leading-tight">
                {activeMilestone.title}
              </h3>
              <p className="text-xs sm:text-sm font-semibold text-[#009539]">
                {activeMilestone.subtitle}
              </p>
            </div>

            {/* Story Narrative */}
            <div className="relative z-10 space-y-2 text-xs sm:text-sm text-gray-600 font-normal leading-relaxed mb-3.5">
              <p>{activeMilestone.description}</p>
              {activeMilestone.detailedStory && (
                <p className="text-gray-700 bg-gray-50/70 p-3 rounded-xl border border-gray-100/80 italic text-xs">
                  {activeMilestone.detailedStory}
                </p>
              )}
            </div>

            {/* Consolidated Achievement Block */}
            <div className="relative z-10 p-3 rounded-xl bg-[#009539]/5 border border-[#009539]/20 mb-3.5 flex items-start gap-2.5">
              <CheckCircle2 className="w-4 h-4 text-[#009539] shrink-0 mt-0.5" />
              <div className="text-xs">
                <span className="font-bold text-[#183c6b]">Logro Consolidado: </span>
                <span className="text-gray-700">{activeMilestone.achievement}</span>
              </div>
            </div>

            {/* Metric Highlight Box */}
            <div className="relative z-10 p-3.5 sm:p-4 rounded-2xl bg-gradient-to-br from-[#183c6b] via-[#122c4f] to-[#0a182b] text-white shadow-md flex items-center justify-between gap-3">
              <div className="space-y-0.5">
                <div className="flex items-center gap-1 text-[10px] text-[#30deda] font-bold uppercase tracking-wider">
                  <Sparkles className="w-3 h-3 text-[#95c11e]" />
                  <span>Indicador de Impacto</span>
                </div>
                <p className="text-[11px] sm:text-xs text-gray-300 font-normal">
                  {activeMilestone.metricLabel}
                </p>
              </div>
              <span className="text-xl sm:text-2xl font-extrabold font-heading text-[#02aeaa] shrink-0">
                {activeMilestone.metric}
              </span>
            </div>

            {/* Bottom Position Indicator */}
            <div className="relative z-10 pt-2.5 flex items-center gap-1.5 text-[11px] text-gray-400 font-normal">
              <BookOpen className="w-3 h-3 text-[#02aeaa]" />
              <span>Hito {desktopActiveIndex + 1} de {MILESTONES_DATA.length} • Selecciona cualquier año de la derecha</span>
            </div>

          </div>

        </div>

        {/* ========================================================
            RIGHT COLUMN (5 cols on lg, full width on mobile):
            Timeline with 13 Interactive Points.
            - On Mobile: Clicking an item deploys an in-line card;
                         clicking it again collapses it.
            - On Desktop: Clicking an item updates the left sticky card.
           ======================================================== */}
        <div className="col-span-1 lg:col-span-5 relative py-2 max-w-2xl mx-auto lg:max-w-none w-full">
          
          {/* Continuous Vertical Gradient Line perfectly centered behind markers */}
          <div className="absolute left-[34px] sm:left-[38px] top-6 bottom-6 w-1 bg-gradient-to-b from-[#02aeaa] via-[#009539] to-[#95c11e] rounded-full opacity-60" />

          {/* Interactive Points List for all 13 Milestones */}
          <div className="space-y-3 sm:space-y-3.5 relative z-10">
            {MILESTONES_DATA.map((milestone, idx) => {
              const isDesktopActive = idx === desktopActiveIndex;
              const isMobileActive = mobileActiveIndex === idx;

              return (
                <div
                  key={milestone.id}
                  className={`relative rounded-2xl transition-all duration-300 border p-3.5 sm:p-4 ${
                    isMobileActive
                      ? "bg-white shadow-xl border-[#02aeaa]/40 ring-2 ring-[#02aeaa]/20"
                      : "bg-white/70 border-gray-100/80 shadow-sm"
                  } ${
                    isDesktopActive
                      ? "lg:bg-white lg:shadow-xl lg:border-[#02aeaa]/40 lg:-translate-x-1 lg:ring-2 lg:ring-[#02aeaa]/20"
                      : "lg:bg-white/60 lg:shadow-none lg:border-gray-100/70 lg:translate-x-0 lg:ring-0 hover:lg:bg-white hover:lg:shadow-md"
                  }`}
                >
                  {/* Clickable Header Row: Tapping toggles mobile accordion / sets desktop active */}
                  <div
                    onClick={() => handleItemClick(idx)}
                    className="flex items-center gap-3.5 sm:gap-4.5 cursor-pointer group"
                  >
                    {/* Timeline Point / Marker Node */}
                    <div className="relative shrink-0">
                      <div
                        className={`w-11 h-11 sm:w-12 sm:h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                          isMobileActive
                            ? "bg-white shadow-lg ring-4 ring-[#02aeaa] scale-105 shadow-[#02aeaa]/25"
                            : "bg-white shadow-sm ring-2 ring-gray-200"
                        } ${
                          isDesktopActive
                            ? "lg:bg-white lg:shadow-lg lg:ring-4 lg:ring-[#02aeaa] lg:scale-110 lg:shadow-[#02aeaa]/25"
                            : "lg:bg-white lg:shadow-sm lg:ring-2 lg:ring-gray-200 group-hover:lg:ring-[#009539] group-hover:lg:scale-105"
                        }`}
                      >
                        {/* Sprout Icon when active */}
                        <div
                          className={`${isMobileActive ? "block" : "hidden"} ${
                            isDesktopActive ? "lg:block" : "lg:hidden"
                          }`}
                        >
                          <MimesaSprout size={22} />
                        </div>
                        {/* 2-Digit Year Number when inactive */}
                        <div
                          className={`${!isMobileActive ? "block" : "hidden"} ${
                            !isDesktopActive ? "lg:block" : "lg:hidden"
                          }`}
                        >
                          <span className="text-xs font-black text-gray-400 group-hover:text-[#009539]">
                            {milestone.year.slice(2)}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Milestone Header Info */}
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center gap-2 mb-0.5">
                        <span
                          className={`text-base font-black tracking-tight transition-colors ${
                            isMobileActive ? "text-[#183c6b]" : "text-gray-700"
                          } ${
                            isDesktopActive
                              ? "lg:text-[#183c6b]"
                              : "group-hover:lg:text-[#183c6b]"
                          }`}
                        >
                          {milestone.year}
                        </span>
                        <span
                          className={`text-[10px] font-bold uppercase tracking-wider px-2 py-0.5 rounded-full transition-colors ${
                            isMobileActive
                              ? "bg-[#02aeaa]/15 text-[#02aeaa] font-extrabold"
                              : "bg-gray-100 text-gray-400"
                          } ${
                            isDesktopActive
                              ? "lg:bg-[#02aeaa]/15 lg:text-[#02aeaa] lg:font-extrabold"
                              : "lg:bg-gray-100 lg:text-gray-400 group-hover:lg:text-gray-600"
                          }`}
                        >
                          {milestone.badge}
                        </span>
                      </div>

                      <p
                        className={`text-xs font-semibold truncate transition-colors ${
                          isMobileActive ? "text-[#009539]" : "text-gray-500"
                        } ${
                          isDesktopActive
                            ? "lg:text-[#009539]"
                            : "group-hover:lg:text-gray-700"
                        }`}
                      >
                        {milestone.title}
                      </p>
                    </div>

                    {/* Chevron Indicator: Rotates 90 deg down on mobile when expanded */}
                    <div
                      className={`p-1 rounded-full transition-all duration-300 ${
                        isMobileActive
                          ? "rotate-90 text-[#02aeaa]"
                          : "rotate-0 text-gray-400"
                      } ${
                        isDesktopActive
                          ? "lg:rotate-0 lg:text-[#02aeaa] lg:translate-x-1 lg:opacity-100"
                          : "lg:rotate-0 lg:text-gray-300 lg:translate-x-0 lg:opacity-0 group-hover:lg:opacity-100"
                      }`}
                    >
                      <ChevronRight className="w-4 h-4" />
                    </div>
                  </div>

                  {/* ========================================================
                      MOBILE ACCORDION DRAWER (Hidden on Desktop >= lg)
                      Smooth CSS Grid Expansion / Collapse
                     ======================================================== */}
                  <div
                    className={`grid transition-all duration-300 ease-in-out lg:hidden ${
                      isMobileActive
                        ? "grid-rows-[1fr] opacity-100 mt-3 pt-3 border-t border-gray-100"
                        : "grid-rows-[0fr] opacity-0 mt-0 pt-0 pointer-events-none"
                    }`}
                  >
                    <div className="overflow-hidden">
                      {/* Subtitle */}
                      <p className="text-xs font-bold text-[#009539] mb-2">
                        {milestone.subtitle}
                      </p>

                      {/* Story Narrative */}
                      <div className="space-y-2 text-xs text-gray-600 font-normal leading-relaxed mb-3">
                        <p>{milestone.description}</p>
                        {milestone.detailedStory && (
                          <p className="text-gray-700 bg-gray-50/90 p-2.5 rounded-xl border border-gray-100 text-xs italic">
                            {milestone.detailedStory}
                          </p>
                        )}
                      </div>

                      {/* Consolidated Achievement Block */}
                      <div className="p-2.5 rounded-xl bg-[#009539]/5 border border-[#009539]/20 mb-3 flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-[#009539] shrink-0 mt-0.5" />
                        <div className="text-xs">
                          <span className="font-bold text-[#183c6b]">Logro Consolidado: </span>
                          <span className="text-gray-700">{milestone.achievement}</span>
                        </div>
                      </div>

                      {/* Metric Highlight Box */}
                      <div className="p-3 rounded-xl bg-gradient-to-br from-[#183c6b] via-[#122c4f] to-[#0a182b] text-white shadow-sm flex items-center justify-between gap-3 mb-2">
                        <div className="space-y-0.5">
                          <div className="flex items-center gap-1 text-[9px] text-[#30deda] font-bold uppercase tracking-wider">
                            <Sparkles className="w-3 h-3 text-[#95c11e]" />
                            <span>Indicador de Impacto</span>
                          </div>
                          <p className="text-[11px] text-gray-300 font-normal">
                            {milestone.metricLabel}
                          </p>
                        </div>
                        <span className="text-lg font-extrabold font-heading text-[#02aeaa] shrink-0">
                          {milestone.metric}
                        </span>
                      </div>

                      {/* Tap to collapse button */}
                      <div
                        onClick={(e) => {
                          e.stopPropagation();
                          setMobileActiveIndex(null);
                        }}
                        className="pt-1 pb-0.5 flex items-center justify-center gap-1 text-[11px] text-[#02aeaa] font-medium hover:underline cursor-pointer select-none"
                      >
                        <span>Toca para contraer ▲</span>
                      </div>
                    </div>
                  </div>

                </div>
              );
            })}
          </div>

        </div>

      </div>

    </div>
  );
}

