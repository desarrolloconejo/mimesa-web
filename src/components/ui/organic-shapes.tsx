import React from "react";

interface BrandShapeProps {
  className?: string;
  size?: number;
  opacity?: number;
}

/**
 * The Complete MIMESA Brand Symbol (The iconic sprout above the 'i')
 * Consisting of:
 * 1. Top: Turquoise Circle (#02afab)
 * 2. Left: Dark Green Leaf (#009539)
 * 3. Right: Lime Green Leaf (#94c11e)
 */
export function MimesaSprout({ className = "", size = 120, opacity = 1 }: BrandShapeProps) {
  return (
    <svg
      width={size}
      height={size * 0.9}
      viewBox="0 0 160 145"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      {/* 1. Top Turquoise Circle (Dot of the 'i') */}
      <circle cx="80" cy="28" r="17" fill="#02afab" />

      {/* 2. Left Dark Green Leaf */}
      <path
        d="M20 70 C 20 52, 45 42, 68 58 C 74 72, 60 92, 38 92 C 22 92, 18 82, 20 70 Z"
        fill="#009539"
      />

      {/* 3. Right Lime Green Leaf */}
      <path
        d="M62 108 C 62 82, 98 70, 138 72 C 145 92, 120 120, 88 122 C 72 122, 62 118, 62 108 Z"
        fill="#94c11e"
      />
    </svg>
  );
}

/**
 * Individual Lime Leaf from the official Mimesa symbol (#94c11e)
 */
export function MimesaLeafLime({ className = "", size = 100, opacity = 1 }: BrandShapeProps) {
  return (
    <svg
      width={size}
      height={size * 0.6}
      viewBox="0 0 100 60"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M5 45 C 5 15, 45 2, 95 5 C 100 28, 72 58, 35 58 C 15 58, 5 54, 5 45 Z"
        fill="#94c11e"
      />
    </svg>
  );
}

/**
 * Individual Dark Green Leaf from the official Mimesa symbol (#009539)
 */
export function MimesaLeafGreen({ className = "", size = 90, opacity = 1 }: BrandShapeProps) {
  return (
    <svg
      width={size}
      height={size * 0.65}
      viewBox="0 0 80 52"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <path
        d="M6 30 C 6 10, 36 2, 74 18 C 78 35, 62 52, 32 50 C 14 50, 6 42, 6 30 Z"
        fill="#009539"
      />
    </svg>
  );
}

/**
 * Individual Turquoise Dot/Pebble from the official Mimesa symbol (#02afab)
 */
export function MimesaDotCyan({ className = "", size = 50, opacity = 1 }: BrandShapeProps) {
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 40 40"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none drop-shadow-sm ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <circle cx="20" cy="20" r="18" fill="#02afab" />
    </svg>
  );
}

/**
 * Ambient Glow Orb
 */
export function GlowOrb({
  className = "",
  color = "cyan",
}: {
  className?: string;
  color?: "cyan" | "lime" | "blue" | "green";
}) {
  const glowColors = {
    cyan: "from-[#02afab]/30 via-[#02afab]/10 to-transparent",
    lime: "from-[#94c11e]/25 via-[#94c11e]/08 to-transparent",
    blue: "from-[#1a3c6a]/35 via-[#1a3c6a]/15 to-transparent",
    green: "from-[#009539]/25 via-[#009539]/08 to-transparent",
  };

  return (
    <div
      className={`absolute rounded-full pointer-events-none blur-3xl bg-gradient-to-tr ${glowColors[color]} ${className}`}
      aria-hidden="true"
    />
  );
}
