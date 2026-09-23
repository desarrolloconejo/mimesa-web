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
 * Calculates scroll position strictly relative to the viewport center.
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

      const rect = outerRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Calculate progress relative to viewport center (-1 to +1)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const progress = (elementCenter - viewportCenter) / (windowHeight / 2);

      const offsetY = progress * speed * 50;
      const offsetX = horizontalSpeed ? progress * horizontalSpeed * 35 : 0;
      const rotate = rotateSpeed ? progress * rotateSpeed * 12 : 0;

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
      { rootMargin: "1200px 0px" }
    );

    observer.observe(element);

    window.addEventListener("scroll", handleScroll, { passive: true });
    window.addEventListener("resize", handleScroll, { passive: true });
    updateShape();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("resize", handleScroll);
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
      style={{ transform: "translate3d(0, 0, 0)", transition: "none" }}
      aria-hidden="true"
    >
      <div className={animClass}>{children}</div>
    </div>
  );
}
