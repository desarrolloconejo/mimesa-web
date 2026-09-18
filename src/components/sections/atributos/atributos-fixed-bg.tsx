import React from "react";
import { MimesaLeafLime } from "@/components/ui/organic-shapes";

export function AtributosFixedBg() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      {/* 
        Full-bleed solid corporate background canvas:
        Always covers 100% of the section area. Zero lag, zero gaps on fast scroll, always present.
      */}
      <div className="w-full h-full relative">
        {/* Solid Corporate Navy Base */}
        <div className="absolute inset-0 bg-[#16365f]" />
        <div className="absolute inset-0 bg-radial from-transparent via-transparent to-black/25 pointer-events-none" />

        {/* 1. Big Turquoise Circle - Fixed at Bottom-Left */}
        <div className="absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 md:-bottom-36 md:-left-36 pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-[#02afab] blur-3xl opacity-35 scale-110" />
            <div className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-tr from-[#018e8b] via-[#02afab] to-[#30deda] shadow-[0_20px_50px_rgba(2,175,171,0.35)]" />
          </div>
        </div>

        {/* 2. Big Green Organic Shape - Fixed at Top-Right */}
        <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 pointer-events-none">
          <div className="relative">
            <div className="absolute inset-0 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-[#009539] blur-3xl opacity-30 scale-110" />
            <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-[440px] lg:h-[440px] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-gradient-to-bl from-[#006e2a] via-[#009539] to-[#00ab42] shadow-[0_20px_50px_rgba(0,149,57,0.3)]" />
          </div>
        </div>

        {/* 3. Subtle Floating Lime Accent Leaf */}
        <div className="absolute top-1/3 left-14 md:left-24 pointer-events-none opacity-30 hidden lg:block">
          <MimesaLeafLime size={75} />
        </div>

        {/* 4. Elegant Orbital Arc Vectors (Across section) */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-85"
        >
          <defs>
            <linearGradient id="fixedArcGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#02afab" stopOpacity="0" />
              <stop offset="35%" stopColor="#30deda" stopOpacity="0.9" />
              <stop offset="70%" stopColor="#02afab" stopOpacity="0.8" />
              <stop offset="100%" stopColor="#02afab" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="fixedArcGradBottom" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#02afab" stopOpacity="0" />
              <stop offset="40%" stopColor="#30deda" stopOpacity="0.85" />
              <stop offset="75%" stopColor="#009539" stopOpacity="0.7" />
              <stop offset="100%" stopColor="#94c11e" stopOpacity="0" />
            </linearGradient>

            <filter id="fixedGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Top Orbital Arc cutting through upper center */}
          <path
            d="M 640,-40 C 660,180 605,330 535,440"
            stroke="url(#fixedArcGradTop)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#fixedGlowFilter)"
          />

          {/* Bottom Orbital Arc sweeping up towards center-right */}
          <path
            d="M 730,940 C 685,730 720,590 790,470"
            stroke="url(#fixedArcGradBottom)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#fixedGlowFilter)"
          />

          {/* Secondary Delicate Orbit Line for Depth */}
          <path
            d="M 515,480 C 585,380 705,350 805,430"
            stroke="#02afab"
            strokeOpacity="0.18"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />

          {/* Floating Glowing Particles on Arcs */}
          <circle cx="585" cy="350" r="3.5" fill="#30deda" filter="url(#fixedGlowFilter)" />
          <circle cx="745" cy="620" r="3" fill="#94c11e" filter="url(#fixedGlowFilter)" />
        </svg>
      </div>
    </div>
  );
}
