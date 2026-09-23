"use client";

import React from "react";

interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  as?: React.ElementType;
}

/**
 * FadeIn
 * Content is fully loaded, visible, and structurally stable from frame 0.
 * Eliminates delayed pop-in and layout shifts during fast scroll.
 */
export function FadeIn({
  children,
  className = "",
  as: Component = "div",
  style,
  ...props
}: FadeInProps) {
  return (
    <Component
      className={className}
      style={{
        opacity: 1,
        transform: "none",
        ...style,
      }}
      {...props}
    >
      {children}
    </Component>
  );
}
