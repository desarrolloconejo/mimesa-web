"use client";

import React, { useEffect, useRef, useState } from "react";

export type FadeEffectType = "none" | "in-out" | "fade-out" | "fade-in";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Subtle parallax multiplier (-1.0 to 1.0)
  rotateSpeed?: number;
  scaleSpeed?: number;
  horizontalSpeed?: number;
  fadeEffect?: FadeEffectType; // Appear and disappear dynamically with scroll
  fadeIntensity?: number; // 0.5 to 2.0 (default 1.0)
  className?: string;
  style?: React.CSSProperties;
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
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");
  const [opacityStyle, setOpacityStyle] = useState<number | undefined>(undefined);

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Relative progress from center of screen (-1.0 = top exit, 0 = viewport center, 1.0 = bottom entry)
      const centerY = rect.top + rect.height / 2;
      const progress = (centerY - windowHeight / 2) / (windowHeight / 2);

      // Subtle, elegant parallax translation (smooth dampened multiplier)
      const translateY = progress * speed * 55;
      const translateX = horizontalSpeed !== 0 ? progress * horizontalSpeed * 35 : 0;
      const rotation = rotateSpeed !== 0 ? progress * rotateSpeed * 10 : 0;
      const scale = scaleSpeed !== 0 ? 1 + progress * scaleSpeed * 0.06 : 1;

      setTransformStyle(
        `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      );

      // Gentle, delayed appear & disappear scroll opacity (Text stays solid and readable)
      if (fadeEffect !== "none") {
        let opacity = 1;

        if (fadeEffect === "in-out") {
          // Stay 100% solid through 70% of the viewport; gentle dissolve only at extreme edges
          const distFromCenter = Math.abs(progress);
          if (distFromCenter <= 0.65) {
            opacity = 1;
          } else {
            const edgeRatio = (distFromCenter - 0.65) / 0.35;
            opacity = Math.max(0, Math.min(1, 1 - edgeRatio * 0.85 * fadeIntensity));
          }
        } else if (fadeEffect === "fade-out") {
          // For Hero: Stay 100% solid until scrolled significantly down, then gently dissolve
          if (progress >= -0.35) {
            opacity = 1;
          } else {
            const exitRatio = (Math.abs(progress) - 0.35) / 0.65;
            opacity = Math.max(0, Math.min(1, 1 - exitRatio * 0.80 * fadeIntensity));
          }
        } else if (fadeEffect === "fade-in") {
          // Smooth fade in from bottom
          if (progress <= 0.35) {
            opacity = 1;
          } else {
            const enterRatio = (progress - 0.35) / 0.65;
            opacity = Math.max(0, Math.min(1, 1 - enterRatio * 0.80 * fadeIntensity));
          }
        }

        setOpacityStyle(Number(opacity.toFixed(2)));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onScroll, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onScroll);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, rotateSpeed, scaleSpeed, horizontalSpeed, fadeEffect, fadeIntensity]);

  return (
    <div
      ref={elementRef}
      className={`will-change-transform transition-all duration-200 ease-out ${className}`}
      style={{
        ...style,
        transform: transformStyle || undefined,
        opacity: opacityStyle !== undefined ? opacityStyle : style.opacity,
      }}
    >
      {children}
    </div>
  );
}
