import React from "react";
import Image from "next/image";
import { MimesaLeafLime, MimesaSprout } from "@/components/ui/organic-shapes";

export function AtributosFixedBg() {
  return (
    <div
      className="absolute inset-0 w-full h-full overflow-hidden pointer-events-none z-0"
      aria-hidden="true"
    >
      <div className="w-full h-full relative bg-[#0e2440]">
        {/* 1. Authentic Cyanotype Clouds Texture Background Layer */}
        <div className="absolute inset-0 pointer-events-none z-0 overflow-hidden">
          <Image
            src="/images/textures/cyanotype-clouds.jpg"
            alt=""
            aria-hidden="true"
            fill
            priority
            className="object-cover object-center w-full h-full opacity-90 mix-blend-normal"
          />
        </div>

        {/* 2. Fine Paper Grain & Dust Texture Overlay */}
        <div
          className="absolute inset-0 opacity-[0.14] mix-blend-overlay pointer-events-none z-0 bg-repeat"
          style={{
            backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
            backgroundSize: "160px 160px",
          }}
        />

        {/* 3. Ambient Depth Vignette */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#0e2440]/90 via-[#183c6b]/60 to-[#0e2440]/85 pointer-events-none z-0" />

        {/* 4. Powdery White Organic Shape - Fixed at Bottom-Left */}
        <div className="absolute -bottom-20 -left-20 sm:-bottom-28 sm:-left-28 md:-bottom-36 md:-left-36 pointer-events-none z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-full bg-white/20 blur-3xl opacity-40 scale-110" />
            <div className="w-56 h-56 sm:w-80 sm:h-80 md:w-96 md:h-96 lg:w-[480px] lg:h-[480px] rounded-full bg-gradient-to-tr from-white/10 via-white/20 to-white/5 border border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.15)]" />
          </div>
        </div>

        {/* 5. Powdery White Organic Shape - Fixed at Top-Right */}
        <div className="absolute -top-16 -right-16 sm:-top-24 sm:-right-24 md:-top-32 md:-right-32 pointer-events-none z-10">
          <div className="relative">
            <div className="absolute inset-0 rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-white/20 blur-3xl opacity-30 scale-110" />
            <div className="w-52 h-52 sm:w-72 sm:h-72 md:w-88 md:h-88 lg:w-[440px] lg:h-[440px] rounded-[45%_55%_65%_35%/50%_45%_55%_50%] bg-gradient-to-bl from-white/15 via-white/20 to-white/5 border border-white/20 shadow-[0_20px_50px_rgba(255,255,255,0.15)]" />
          </div>
        </div>

        {/* 6. Floating Powdery White Leaf Accent */}
        <div className="absolute top-1/3 left-14 md:left-24 pointer-events-none opacity-80 hidden lg:block z-10">
          <MimesaLeafLime size={80} variant="white" />
        </div>

        {/* 7. Floating White Sprout Watermark */}
        <div className="absolute -bottom-16 -right-16 opacity-15 pointer-events-none z-0 hidden lg:block">
          <MimesaSprout size={420} variant="white" />
        </div>

        {/* 8. White Orbital Arc Vectors (Across section) */}
        <svg
          viewBox="0 0 1440 900"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          preserveAspectRatio="xMidYMid slice"
          className="absolute inset-0 w-full h-full pointer-events-none opacity-70 z-10"
        >
          <defs>
            <linearGradient id="whiteArcGradTop" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="35%" stopColor="#ffffff" stopOpacity="0.8" />
              <stop offset="70%" stopColor="#ffffff" stopOpacity="0.6" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <linearGradient id="whiteArcGradBottom" x1="0%" y1="100%" x2="0%" y2="0%">
              <stop offset="0%" stopColor="#ffffff" stopOpacity="0" />
              <stop offset="40%" stopColor="#ffffff" stopOpacity="0.75" />
              <stop offset="75%" stopColor="#ffffff" stopOpacity="0.5" />
              <stop offset="100%" stopColor="#ffffff" stopOpacity="0" />
            </linearGradient>

            <filter id="whiteGlowFilter" x="-20%" y="-20%" width="140%" height="140%">
              <feGaussianBlur stdDeviation="3.5" result="blur" />
              <feComposite in="SourceGraphic" in2="blur" operator="over" />
            </filter>
          </defs>

          {/* Top Orbital Arc */}
          <path
            d="M 640,-40 C 660,180 605,330 535,440"
            stroke="url(#whiteArcGradTop)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#whiteGlowFilter)"
          />

          {/* Bottom Orbital Arc */}
          <path
            d="M 730,940 C 685,730 720,590 790,470"
            stroke="url(#whiteArcGradBottom)"
            strokeWidth="3.5"
            strokeLinecap="round"
            filter="url(#whiteGlowFilter)"
          />

          {/* Secondary Orbit Line */}
          <path
            d="M 515,480 C 585,380 705,350 805,430"
            stroke="#ffffff"
            strokeOpacity="0.25"
            strokeWidth="1.5"
            strokeDasharray="6 8"
          />

          {/* Floating White Particles */}
          <circle cx="585" cy="350" r="3.5" fill="#ffffff" filter="url(#whiteGlowFilter)" />
          <circle cx="745" cy="620" r="3" fill="#ffffff" filter="url(#whiteGlowFilter)" />
        </svg>
      </div>
    </div>
  );
}
