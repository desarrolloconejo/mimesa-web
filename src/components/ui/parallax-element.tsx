"use client";

import React, { useEffect, useRef, useState } from "react";

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
  const [transformStyle, setTransformStyle] = useState("");
  const [opacityStyle, setOpacityStyle] = useState<number | undefined>(undefined);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      const mobile = window.innerWidth < 1024;
      setIsMobile(mobile);
      if (mobile && disableOnMobile) {
        setTransformStyle("");
        setOpacityStyle(undefined);
      }
      return mobile;
    };

    checkMobile();

    let animationFrameId: number;

    const handleScroll = () => {
      if (!elementRef.current) return;
      if (disableOnMobile && window.innerWidth < 1024) {
        setTransformStyle("");
        setOpacityStyle(undefined);
        return;
      }

      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Relative progress from center of screen (-1.0 = top exit, 0 = viewport center, 1.0 = bottom entry)
      const centerY = rect.top + rect.height / 2;
      const progress = (centerY - windowHeight / 2) / (windowHeight / 2);

      // Deep, fluid, responsive parallax translation
      const translateY = progress * speed * 130;
      const translateX = horizontalSpeed !== 0 ? progress * horizontalSpeed * 75 : 0;
      const rotation = rotateSpeed !== 0 ? progress * rotateSpeed * 18 : 0;
      const scale = scaleSpeed !== 0 ? 1 + progress * scaleSpeed * 0.08 : 1;

      setTransformStyle(
        `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      );

      // Dynamic appear & disappear scroll opacity for multi-layer construction
      if (fadeEffect !== "none") {
        let opacity = 1;

        if (fadeEffect === "in-out") {
          // Stay solid through core of viewport; gentle, calm, gradual dissolve over a wide scroll range
          const distFromCenter = Math.abs(progress);
          if (distFromCenter <= 0.55) {
            opacity = 1;
          } else {
            // Calm cosine curve over wide 0.55 - 1.25 range for velvety entrance and exit
            const ratio = Math.min(1, Math.max(0, (distFromCenter - 0.55) / 0.70));
            const smoothFade = (1 + Math.cos(ratio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        } else if (fadeEffect === "fade-out") {
          // For Hero: Stay solid until scrolled down, then gently dissolve calmly
          if (progress >= -0.30) {
            opacity = 1;
          } else {
            const exitRatio = Math.min(1, Math.max(0, (Math.abs(progress) - 0.30) / 0.75));
            const smoothFade = (1 + Math.cos(exitRatio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        } else if (fadeEffect === "fade-in") {
          // Smooth fade in from bottom
          if (progress <= 0.30) {
            opacity = 1;
          } else {
            const enterRatio = Math.min(1, Math.max(0, (progress - 0.30) / 0.75));
            const smoothFade = (1 + Math.cos(enterRatio * Math.PI)) / 2;
            opacity = Math.max(0, Math.min(1, smoothFade ** (fadeIntensity || 1)));
          }
        }

        setOpacityStyle(Number(opacity.toFixed(2)));
      }
    };

    const onScroll = () => {
      cancelAnimationFrame(animationFrameId);
      animationFrameId = requestAnimationFrame(handleScroll);
    };

    const onResize = () => {
      checkMobile();
      onScroll();
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    window.addEventListener("resize", onResize, { passive: true });
    handleScroll();

    return () => {
      window.removeEventListener("scroll", onScroll);
      window.removeEventListener("resize", onResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [speed, rotateSpeed, scaleSpeed, horizontalSpeed, fadeEffect, fadeIntensity, disableOnMobile]);

  const activeTransform = !isMobile || !disableOnMobile ? transformStyle : undefined;
  const activeOpacity =
    !isMobile || !disableOnMobile
      ? opacityStyle !== undefined
        ? opacityStyle
        : style.opacity
      : style.opacity;

  return (
    <div
      ref={elementRef}
      className={`${
        !isMobile || !disableOnMobile
          ? "will-change-transform transition-[transform,opacity] duration-150 ease-out"
          : ""
      } ${className}`}
      style={{
        ...style,
        transform: activeTransform || undefined,
        opacity: activeOpacity,
      }}
    >
      {children}
    </div>
  );
}
