"use client";

import React from "react";

interface ParallaxShapeProps {
  children: React.ReactNode;
  speed?: number;
  horizontalSpeed?: number;
  rotateSpeed?: number;
  className?: string;
  floatAnimation?: "gentle" | "reverse" | "sway" | "none";
}

/**
 * ParallaxShape
 * Clean static container for brand shapes: elements remain fixed in their layout
 * with subtle organic CSS floating and zero scroll displacement.
 */
export function ParallaxShape({
  children,
  className = "",
  floatAnimation = "gentle",
}: ParallaxShapeProps) {
  const animClass =
    floatAnimation === "gentle"
      ? "animate-float-gentle"
      : floatAnimation === "reverse"
      ? "animate-float-reverse"
      : floatAnimation === "sway"
      ? "animate-leaf-sway"
      : "";

  return (
    <div
      className={`absolute pointer-events-none z-0 select-none ${className}`}
      aria-hidden="true"
    >
      <div className={animClass}>{children}</div>
    </div>
  );
}
