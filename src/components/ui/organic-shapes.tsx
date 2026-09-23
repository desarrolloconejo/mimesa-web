import React, { useId } from "react";

interface BrandShapeProps {
  className?: string;
  size?: number;
  opacity?: number;
  variant?: "brand" | "white" | "custom";
  color?: string;
}

/**
 * Shared SVG Powdery Filter & Gradient Definition
 * Emulates authentic sun-exposed cyanotype paper where exposed white shapes
 * feature soft chalky/powdery paper grain falloff rather than harsh digital vector edges.
 * (Reference: Brand Manual Slide 12 & Cyanotype exposure plates)
 */
export function PowderyFilterDefs({
  filterId,
  gradId,
}: {
  filterId: string;
  gradId: string;
}) {
  return (
    <defs>
      <filter id={filterId} x="-25%" y="-25%" width="150%" height="150%">
        {/* 1. Fine grain edge turbulence mimicking paper fiber & chalk dust */}
        <feTurbulence
          type="fractalNoise"
          baseFrequency="0.07"
          numOctaves="3"
          result="dustNoise"
        />
        <feDisplacementMap
          in="SourceGraphic"
          in2="dustNoise"
          scale="1.4"
          xChannelSelector="R"
          yChannelSelector="G"
          result="chalkEdge"
        />
        {/* 2. Soft blur feathering the chalk edge into paper */}
        <feGaussianBlur in="chalkEdge" stdDeviation="0.6" result="softChalk" />
        {/* 3. Powdery halo / ambient bloom */}
        <feGaussianBlur in="softChalk" stdDeviation="3.2" result="bloom" />
        <feColorMatrix
          in="bloom"
          type="matrix"
          values="1 0 0 0 1   0 1 0 0 1   0 0 1 0 1   0 0 0 0.32 0"
          result="softBloom"
        />
        {/* 4. Merge layers: soft bloom + velvety chalk + base body */}
        <feMerge>
          <feMergeNode in="softBloom" />
          <feMergeNode in="softChalk" />
          <feMergeNode in="chalkEdge" opacity="0.9" />
        </feMerge>
      </filter>

      {/* Velvet chalky white gradient */}
      <linearGradient id={gradId} x1="0%" y1="0%" x2="100%" y2="100%">
        <stop offset="0%" stopColor="#ffffff" stopOpacity="0.95" />
        <stop offset="65%" stopColor="#f7faff" stopOpacity="0.88" />
        <stop offset="100%" stopColor="#ecf2f9" stopOpacity="0.80" />
      </linearGradient>
    </defs>
  );
}

/**
 * The Official MIMESA Brand Sprout Isotipo (Slide 12 & 17)
 * Mathematical cubic Bézier curves extracted directly from Adobe Illustrator vectors.
 *
 * Consisting of:
 * - Leaf 1 (Right/Bottom): Largest - Lime (#95c11e, Pantone 375 C)
 * - Leaf 2 (Left): Medium - Corporate Green (#009539, Pantone 355 C)
 * - Leaf 3 (Top): Smallest - Cyan Seed/Drop (#02aeaa, Pantone 326 C)
 *
 * When variant="white":
 * Implements Slide 12: "También puede utilizarse las formas de hojas solo en blanco,
 * cuando el fondo es una textura, para poder tener mas legibilidad" with a soft powdery chalk finish.
 */
export function MimesaSprout({
  className = "",
  size = 120,
  opacity = 1,
  variant = "brand",
}: BrandShapeProps) {
  const isWhite = variant === "white";
  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `powder-filter-sprout-${cleanId}`;
  const gradId = `powder-grad-sprout-${cleanId}`;

  const limeFill = isWhite ? `url(#${gradId})` : "#95c11e";
  const greenFill = isWhite ? `url(#${gradId})` : "#009539";
  const cyanFill = isWhite ? `url(#${gradId})` : "#02aeaa";
  const filterAttr = isWhite ? `url(#${filterId})` : undefined;

  return (
    <svg
      width={size}
      height={size * (133.05 / 175.02)}
      viewBox="0 0 175.02 133.05"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${
        isWhite ? "powdery-white-shape" : "drop-shadow-sm"
      } ${className}`}
      style={{
        opacity: isWhite ? opacity * 0.92 : opacity,
        filter: isWhite
          ? "drop-shadow(0 0 1.5px rgba(255,255,255,0.75)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 0 20px rgba(255,255,255,0.15))"
          : undefined,
      }}
      aria-hidden="true"
    >
      {isWhite && <PowderyFilterDefs filterId={filterId} gradId={gradId} />}

      {/* 1. Leaf 1 - Largest: Lime (Pantone 375 C) */}
      <path
        d="M 175.02 69.75 C 175.02 69.75, 155.90 133.05, 64.25 111.18 C 64.25 111.18, 90.33 45.27, 175.02 69.75 Z"
        fill={limeFill}
        filter={filterAttr}
      />

      {/* 2. Leaf 2 - Medium: Corporate Green (Pantone 355 C) */}
      <path
        d="M 7.44 41.95 C 19.75 37.18, 41.28 33.45, 66.54 49.00 C 84.66 60.14, 74.73 88.13, 53.68 85.06 C 39.88 83.06, 23.17 75.40, 4.50 56.52 C 0.00 51.97, 1.48 44.26, 7.44 41.95 Z"
        fill={greenFill}
        filter={filterAttr}
      />

      {/* 3. Leaf 3 - Smallest: Cyan Drop/Seed (Pantone 326 C) */}
      <path
        d="M 93.06 13.86 C 92.08 14.61, 91.10 15.41, 90.11 16.25 C 73.32 30.75, 94.21 56.97, 112.07 43.83 C 113.03 43.13, 113.99 42.37, 114.95 41.57 C 132.47 26.97, 111.17 0.00, 93.06 13.86 Z"
        fill={cyanFill}
        filter={filterAttr}
      />
    </svg>
  );
}

/**
 * Individual Leaf 1: Largest (#95c11e, Pantone 375 C)
 * Slide 12 rule: "la 1 y 2 siempre deben sobresalir del área de trabajo"
 */
export function MimesaLeafLime({
  className = "",
  size = 110,
  opacity = 1,
  variant = "brand",
  color,
}: BrandShapeProps) {
  const isWhite = variant === "white";
  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `powder-filter-l1-${cleanId}`;
  const gradId = `powder-grad-l1-${cleanId}`;

  const fillColor = color || (isWhite ? `url(#${gradId})` : "#95c11e");
  const filterAttr = isWhite ? `url(#${filterId})` : undefined;

  return (
    <svg
      width={size}
      height={size * (87.78 / 110.77)}
      viewBox="0 0 110.77 87.78"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${
        isWhite ? "powdery-white-shape" : "drop-shadow-sm"
      } ${className}`}
      style={{
        opacity: isWhite ? opacity * 0.92 : opacity,
        filter: isWhite
          ? "drop-shadow(0 0 1.5px rgba(255,255,255,0.75)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 0 20px rgba(255,255,255,0.15))"
          : undefined,
      }}
      aria-hidden="true"
    >
      {isWhite && <PowderyFilterDefs filterId={filterId} gradId={gradId} />}
      <path
        d="M 110.77 24.48 C 110.77 24.48, 91.65 87.78, 0.00 65.91 C 0.00 65.91, 26.08 0.00, 110.77 24.48 Z"
        fill={fillColor}
        filter={filterAttr}
      />
    </svg>
  );
}

/**
 * Individual Leaf 2: Medium (#009539, Pantone 355 C)
 * Slide 12 rule: "la 1 y 2 siempre deben sobresalir del área de trabajo"
 */
export function MimesaLeafGreen({
  className = "",
  size = 90,
  opacity = 1,
  variant = "brand",
  color,
}: BrandShapeProps) {
  const isWhite = variant === "white";
  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `powder-filter-l2-${cleanId}`;
  const gradId = `powder-grad-l2-${cleanId}`;

  const fillColor = color || (isWhite ? `url(#${gradId})` : "#009539");
  const filterAttr = isWhite ? `url(#${filterId})` : undefined;

  return (
    <svg
      width={size}
      height={size * (54.68 / 84.66)}
      viewBox="0 0 84.66 54.68"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${
        isWhite ? "powdery-white-shape" : "drop-shadow-sm"
      } ${className}`}
      style={{
        opacity: isWhite ? opacity * 0.92 : opacity,
        filter: isWhite
          ? "drop-shadow(0 0 1.5px rgba(255,255,255,0.75)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 0 20px rgba(255,255,255,0.15))"
          : undefined,
      }}
      aria-hidden="true"
    >
      {isWhite && <PowderyFilterDefs filterId={filterId} gradId={gradId} />}
      <path
        d="M 7.44 8.51 C 19.75 3.74, 41.28 0.00, 66.54 15.55 C 84.66 26.69, 74.73 54.68, 53.68 51.62 C 39.88 49.61, 23.17 41.95, 4.50 23.07 C 0.00 18.52, 1.48 10.82, 7.44 8.51 Z"
        fill={fillColor}
        filter={filterAttr}
      />
    </svg>
  );
}

/**
 * Individual Leaf 3: Smallest organic drop/seed (#02aeaa, Pantone 326 C)
 * Slide 12 rule: "la 3 puede o no sobresalir del área de trabajo"
 */
export function MimesaDotCyan({
  className = "",
  size = 50,
  opacity = 1,
  variant = "brand",
  color,
}: BrandShapeProps) {
  const isWhite = variant === "white";
  const rawId = useId();
  const cleanId = rawId.replace(/[^a-zA-Z0-9]/g, "");
  const filterId = `powder-filter-l3-${cleanId}`;
  const gradId = `powder-grad-l3-${cleanId}`;

  const fillColor = color || (isWhite ? `url(#${gradId})` : "#02aeaa");
  const filterAttr = isWhite ? `url(#${filterId})` : undefined;

  return (
    <svg
      width={size}
      height={size * (56.97 / 59.14)}
      viewBox="0 0 59.14 56.97"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={`inline-block select-none pointer-events-none ${
        isWhite ? "powdery-white-shape" : "drop-shadow-sm"
      } ${className}`}
      style={{
        opacity: isWhite ? opacity * 0.92 : opacity,
        filter: isWhite
          ? "drop-shadow(0 0 1.5px rgba(255,255,255,0.75)) drop-shadow(0 0 8px rgba(255,255,255,0.35)) drop-shadow(0 0 20px rgba(255,255,255,0.15))"
          : undefined,
      }}
      aria-hidden="true"
    >
      {isWhite && <PowderyFilterDefs filterId={filterId} gradId={gradId} />}
      <path
        d="M 19.74 13.86 C 18.76 14.61, 17.77 15.41, 16.79 16.25 C 0.00 30.75, 20.89 56.97, 38.75 43.83 C 39.71 43.13, 40.67 42.37, 41.63 41.57 C 59.14 26.97, 37.84 0.00, 19.74 13.86 Z"
        fill={fillColor}
        filter={filterAttr}
      />
    </svg>
  );
}

/**
 * Leaf 3 in Green (Slide 12 hierarchy support)
 */
export function MimesaDotGreen({
  className = "",
  size = 44,
  opacity = 1,
  variant = "brand",
}: BrandShapeProps) {
  return (
    <MimesaDotCyan
      className={className}
      size={size}
      opacity={opacity}
      variant={variant}
      color={variant === "white" ? undefined : "#009539"}
    />
  );
}

/**
 * Leaf 3 in Lime (Slide 12 hierarchy support)
 */
export function MimesaDotLime({
  className = "",
  size = 40,
  opacity = 1,
  variant = "brand",
}: BrandShapeProps) {
  return (
    <MimesaDotCyan
      className={className}
      size={size}
      opacity={opacity}
      variant={variant}
      color={variant === "white" ? undefined : "#95c11e"}
    />
  );
}

/**
 * Slide 12 Strict Edge Bleed Composition:
 * "Las hojas se pueden ubicar en cualquier zona de la composición,
 * pero la 1 y 2 siempre deben sobresalir del área de trabajo, la 3 puede o no hacerlo.
 * Jerarquía: 1 la más grande, 2 mediana, 3 la más pequeña."
 *
 * Slide 12 Rule: "También puede utilizarse las formas de hojas solo en blanco,
 * cuando el fondo es una textura, para poder tener mas legibilidad."
 */
export function BleedingBrandLeaves({
  position = "top-right",
  variant = "brand",
  opacity = 1,
  className = "",
}: {
  position?: "top-right" | "bottom-left" | "top-left" | "bottom-right";
  variant?: "brand" | "white";
  opacity?: number;
  className?: string;
}) {
  const isWhite = variant === "white";

  if (position === "top-right") {
    return (
      <div
        className={`absolute top-0 right-0 pointer-events-none select-none overflow-visible z-10 ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        {/* Leaf 1 (Largest) - Bleeding off top-right edge */}
        <div className="absolute -top-10 -right-12 sm:-top-16 sm:-right-16 rotate-[25deg] transform">
          <MimesaLeafLime size={180} variant={variant} />
        </div>
        {/* Leaf 2 (Medium) - Bleeding off right edge */}
        <div className="absolute top-20 -right-10 sm:top-24 sm:-right-12 rotate-[-20deg] transform">
          <MimesaLeafGreen size={135} variant={variant} />
        </div>
        {/* Leaf 3 (Smallest) - Inside composition or near edge */}
        <div className="absolute top-44 right-16 sm:top-52 sm:right-24 rotate-[15deg] transform">
          <MimesaDotCyan size={55} variant={variant} />
        </div>

        {/* Soft chalk dust / sun-print motes when variant="white" */}
        {isWhite && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="absolute top-10 right-28 w-2 h-2 rounded-full bg-white/70 blur-[0.4px] shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-36 right-10 w-1.5 h-1.5 rounded-full bg-white/55 blur-[0.3px] shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
            <div className="absolute top-28 right-44 w-1 h-1 rounded-full bg-white/60 blur-[0.3px]" />
            <div className="absolute top-64 right-20 w-2 h-2 rounded-full bg-white/40 blur-[0.5px] shadow-[0_0_8px_rgba(255,255,255,0.3)]" />
          </div>
        )}
      </div>
    );
  }

  if (position === "bottom-left") {
    return (
      <div
        className={`absolute bottom-0 left-0 pointer-events-none select-none overflow-visible z-10 ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        {/* Leaf 1 (Largest) - Bleeding off bottom-left edge */}
        <div className="absolute -bottom-12 -left-14 sm:-bottom-16 sm:-left-16 rotate-[-45deg] transform">
          <MimesaLeafLime size={190} variant={variant} />
        </div>
        {/* Leaf 2 (Medium) - Bleeding off left edge */}
        <div className="absolute bottom-24 -left-8 sm:bottom-28 sm:-left-12 rotate-[15deg] transform">
          <MimesaLeafGreen size={140} variant={variant} />
        </div>
        {/* Leaf 3 (Smallest) - Inside area */}
        <div className="absolute bottom-44 left-16 sm:bottom-48 sm:left-20 rotate-[-10deg] transform">
          <MimesaDotCyan size={60} variant={variant} />
        </div>

        {/* Soft chalk dust / sun-print motes when variant="white" */}
        {isWhite && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="absolute bottom-16 left-32 w-2 h-2 rounded-full bg-white/70 blur-[0.4px] shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <div className="absolute bottom-36 left-12 w-1.5 h-1.5 rounded-full bg-white/55 blur-[0.3px] shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
            <div className="absolute bottom-28 left-44 w-1 h-1 rounded-full bg-white/60 blur-[0.3px]" />
          </div>
        )}
      </div>
    );
  }

  if (position === "top-left") {
    return (
      <div
        className={`absolute top-0 left-0 pointer-events-none select-none overflow-visible z-10 ${className}`}
        style={{ opacity }}
        aria-hidden="true"
      >
        <div className="absolute -top-12 -left-14 sm:-top-16 sm:-left-16 rotate-[-30deg] transform">
          <MimesaLeafLime size={180} variant={variant} />
        </div>
        <div className="absolute top-20 -left-10 sm:top-24 sm:-left-12 rotate-[35deg] transform">
          <MimesaLeafGreen size={130} variant={variant} />
        </div>
        <div className="absolute top-40 left-16 sm:top-48 sm:left-24 rotate-[-20deg] transform">
          <MimesaDotCyan size={55} variant={variant} />
        </div>

        {isWhite && (
          <div className="absolute inset-0 pointer-events-none overflow-visible">
            <div className="absolute top-12 left-28 w-2 h-2 rounded-full bg-white/70 blur-[0.4px] shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
            <div className="absolute top-36 left-10 w-1.5 h-1.5 rounded-full bg-white/55 blur-[0.3px] shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
          </div>
        )}
      </div>
    );
  }

  // bottom-right
  return (
    <div
      className={`absolute bottom-0 right-0 pointer-events-none select-none overflow-visible z-10 ${className}`}
      style={{ opacity }}
      aria-hidden="true"
    >
      <div className="absolute -bottom-12 -right-14 sm:-bottom-16 sm:-right-16 rotate-[40deg] transform">
        <MimesaLeafLime size={180} variant={variant} />
      </div>
      <div className="absolute bottom-24 -right-10 sm:bottom-28 sm:-right-12 rotate-[-25deg] transform">
        <MimesaLeafGreen size={130} variant={variant} />
      </div>
      <div className="absolute bottom-44 right-16 sm:bottom-48 sm:right-20 rotate-[15deg] transform">
        <MimesaDotCyan size={55} variant={variant} />
      </div>

      {isWhite && (
        <div className="absolute inset-0 pointer-events-none overflow-visible">
          <div className="absolute bottom-16 right-32 w-2 h-2 rounded-full bg-white/70 blur-[0.4px] shadow-[0_0_8px_rgba(255,255,255,0.6)]" />
          <div className="absolute bottom-36 right-12 w-1.5 h-1.5 rounded-full bg-white/55 blur-[0.3px] shadow-[0_0_6px_rgba(255,255,255,0.4)]" />
        </div>
      )}
    </div>
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
  color?: "cyan" | "lime" | "blue" | "green" | "white";
}) {
  const glowColors = {
    cyan: "from-[#02aeaa]/30 via-[#02aeaa]/10 to-transparent",
    lime: "from-[#95c11e]/25 via-[#95c11e]/08 to-transparent",
    blue: "from-[#183c6b]/35 via-[#183c6b]/15 to-transparent",
    green: "from-[#009539]/25 via-[#009539]/08 to-transparent",
    white: "from-white/20 via-white/06 to-transparent",
  };

  return (
    <div
      className={`absolute rounded-full pointer-events-none blur-3xl bg-gradient-to-tr ${glowColors[color]} ${className}`}
      style={{ transform: "translate3d(0, 0, 0)", willChange: "transform" }}
      aria-hidden="true"
    />
  );
}
