"use client";

import React, { useEffect, useRef } from "react";

export type FadeEffectType = "none" | "in-out" | "fade-out" | "fade-in";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Parallax multiplier (-1.0 to 1.0)
  rotateSpeed?: number;
  scaleSpeed?: number;
  horizontalSpeed?: number;
  fadeEffect?: FadeEffectType;
  fadeIntensity?: number;
  className?: string;
  style?: React.CSSProperties;
  disableOnMobile?: boolean;
}

export function ParallaxElement({
  children,
  speed = 0.25,
  rotateSpeed = 0,
  scaleSpeed = 0,
  horizontalSpeed = 0,
  className = "",
  style = {},
  disableOnMobile = true,
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const el = elementRef.current;
    if (!el) return;

    let isVisible = false;
    let rafId: number | null = null;

    const isMobile = () => window.innerWidth < 1024;

    const updatePosition = () => {
      if (!el) return;

      if (disableOnMobile && isMobile()) {
        el.style.transform = "";
        return;
      }

      if (!isVisible) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight || 800;

      // Calculate progress relative to viewport center (-1 to +1)
      const elementCenter = rect.top + rect.height / 2;
      const viewportCenter = windowHeight / 2;
      const progress = (elementCenter - viewportCenter) / (windowHeight / 2);

      // Smooth, viewport-bound parallax translation (no teleports, no jumps)
      const translateY = progress * speed * 50;
      const translateX = horizontalSpeed !== 0 ? progress * horizontalSpeed * 35 : 0;
      const rotation = rotateSpeed !== 0 ? progress * rotateSpeed * 12 : 0;
      const scale = scaleSpeed !== 0 ? 1 + progress * scaleSpeed * 0.05 : 1;

      el.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updatePosition();
        rafId = null;
      });
    };

    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updatePosition();
        }
      },
      { rootMargin: "1200px 0px" }
    );

    observer.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    updatePosition();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [speed, rotateSpeed, scaleSpeed, horizontalSpeed, disableOnMobile]);

  return (
    <div
      ref={elementRef}
      className={className}
      style={{
        overflowAnchor: "none",
        transition: "none",
        ...style,
      }}
    >
      {children}
    </div>
  );
}

