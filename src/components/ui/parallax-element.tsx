"use client";

import React, { useEffect, useRef } from "react";

export type FadeEffectType = "none" | "in-out" | "fade-out" | "fade-in";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Parallax multiplier (-1.0 to 1.0)
  rotateSpeed?: number;
  scaleSpeed?: number;
  horizontalSpeed?: number;
  fadeEffect?: FadeEffectType; // Appear and disappear dynamically with scroll
  fadeIntensity?: number; // 0.5 to 2.0 (default 1.0)
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
  fadeEffect = "none",
  fadeIntensity = 1.0,
  className = "",
  style = {},
  disableOnMobile = true,
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    // Check user preference
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
        if (fadeEffect !== "none") el.style.opacity = "";
        return;
      }

      if (!isVisible) return;

      const rect = el.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Relative progress from center of screen (-1.0 = top exit, 0 = viewport center, 1.0 = bottom entry)
      const centerY = rect.top + rect.height / 2;
      const progress = (centerY - windowHeight / 2) / (windowHeight / 2);

      // Deep, fluid, responsive parallax translation
      const translateY = progress * speed * 130;
      const translateX = horizontalSpeed !== 0 ? progress * horizontalSpeed * 75 : 0;
      const rotation = rotateSpeed !== 0 ? progress * rotateSpeed * 18 : 0;
      const scale = scaleSpeed !== 0 ? 1 + progress * scaleSpeed * 0.08 : 1;

      el.style.transform = `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`;

      // Dynamic appear & disappear scroll opacity
      if (fadeEffect !== "none") {
        let opacity = 1;

        if (fadeEffect === "in-out") {
          const distFromCenter = Math.abs(progress);
          if (distFromCenter <= 0.55) {
            opacity = 1;
          } else {
            const ratio = Math.min(1, Math.max(0, (distFromCenter - 0.55) / 0.70));
            const smoothFade = (1 + Math.cos(ratio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        } else if (fadeEffect === "fade-out") {
          if (progress >= -0.30) {
            opacity = 1;
          } else {
            const exitRatio = Math.min(1, Math.max(0, (Math.abs(progress) - 0.30) / 0.75));
            const smoothFade = (1 + Math.cos(exitRatio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        } else if (fadeEffect === "fade-in") {
          if (progress <= 0.30) {
            opacity = 1;
          } else {
            const enterRatio = Math.min(1, Math.max(0, (progress - 0.30) / 0.75));
            const smoothFade = (1 + Math.cos(enterRatio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        }

        el.style.opacity = String(Number(opacity.toFixed(2)));
      }
    };

    const onScroll = () => {
      if (rafId !== null) return;
      rafId = requestAnimationFrame(() => {
        updatePosition();
        rafId = null;
      });
    };

    // IntersectionObserver: Only compute and update when visible in viewport
    const observer = new IntersectionObserver(
      ([entry]) => {
        isVisible = entry.isIntersecting;
        if (isVisible) {
          updatePosition();
        }
      },
      { rootMargin: "150px" }
    );

    observer.observe(el);

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });

    // Initial position
    updatePosition();

    return () => {
      observer.disconnect();
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      if (rafId !== null) cancelAnimationFrame(rafId);
    };
  }, [speed, rotateSpeed, scaleSpeed, horizontalSpeed, fadeEffect, fadeIntensity, disableOnMobile]);

  return (
    <div
      ref={elementRef}
      className={`will-change-transform ${className}`}
      style={{
        ...style,
      }}
    >
      {children}
    </div>
  );
}

