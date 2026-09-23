"use client";

import React, { useEffect, useRef } from "react";

interface ParallaxShapeProps {
  children: React.ReactNode;
  speed?: number; // scroll multiplier (e.g., -0.15 to 0.25)
  horizontalSpeed?: number;
  rotateSpeed?: number;
  className?: string;
  floatAnimation?: "gentle" | "reverse" | "sway" | "none";
}

/**
 * ParallaxShape
 * A high-performance, GPU-accelerated parallax container for brand elements.
 * The outer container tracks page scroll via requestAnimationFrame (0 React re-renders),
 * while the inner child maintains continuous micro-floating physics.
 */
export function ParallaxShape({
  children,
  speed = 0.12,
  horizontalSpeed = 0,
  rotateSpeed = 0,
  className = "",
  floatAnimation = "gentle",
}: ParallaxShapeProps) {
  const outerRef = useRef<HTMLDivElement>(null);
  const rafId = useRef<number | null>(null);

  useEffect(() => {
    // Respect user's motion preference
    if (typeof window === "undefined") return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;
    if (prefersReducedMotion) return;

    const element = outerRef.current;
    if (!element) return;

    let isVisible = false;

    const updateShape = () => {
      if (!outerRef.current || !isVisible) return;
      const scrollY = window.scrollY;
      const offsetY = scrollY * speed;
      const offsetX = horizontalSpeed ? scrollY * horizontalSpeed : 0;
      const rotate = rotateSpeed ? scrollY * rotateSpeed : 0;

      outerRef.current.style.transform = `translate3d(${offsetX.toFixed(
        1
      )}px, ${offsetY.toFixed(1)}px, 0px) ${
        rotate ? `rotate(${rotate.toFixed(1)}deg)` : ""
      }`;
    };

    const handleScroll = () => {
      if (rafId.current !== null) return;

      rafId.current = requestAnimationFrame(() => {
        updateShape();
        rafId.current = null;
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updateShape();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(element);

    window.addEventListener("scroll", handleScroll, { passive: true });
    updateShape();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      if (rafId.current !== null) {
        cancelAnimationFrame(rafId.current);
      }
    };
  }, [speed, horizontalSpeed, rotateSpeed]);

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
      ref={outerRef}
      className={`absolute pointer-events-none z-0 select-none ${className}`}
      style={{ transform: "translate3d(0, 0, 0)" }}
      aria-hidden="true"
    >
      <div className={animClass}>{children}</div>
    </div>
  );
}
