"use client";

import React from "react";

export type FadeEffectType = "none" | "in-out" | "fade-out" | "fade-in";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number;
  rotateSpeed?: number;
  scaleSpeed?: number;
  horizontalSpeed?: number;
  fadeEffect?: FadeEffectType;
  fadeIntensity?: number;
  className?: string;
  style?: React.CSSProperties;
  disableOnMobile?: boolean;
}

/**
 * ParallaxElement
 * Clean static container: elements remain firmly fixed in place with zero scroll displacement.
 * Eliminates all scroll jumping, layout recalculations, and delayed rendering.
 */
export function ParallaxElement({
  children,
  className = "",
  style = {},
}: ParallaxElementProps) {
  return (
    <div className={className} style={style}>
      {children}
    </div>
  );
}

