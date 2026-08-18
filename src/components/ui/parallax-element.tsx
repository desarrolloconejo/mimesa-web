"use client";

import React, { useEffect, useRef, useState } from "react";

interface ParallaxElementProps {
  children: React.ReactNode;
  speed?: number; // Subtle parallax multiplier (-1.0 to 1.0)
  rotateSpeed?: number;
  scaleSpeed?: number;
  horizontalSpeed?: number;
  className?: string;
}

export function ParallaxElement({
  children,
  speed = 0.3,
  rotateSpeed = 0,
  scaleSpeed = 0,
  horizontalSpeed = 0,
  className = "",
}: ParallaxElementProps) {
  const elementRef = useRef<HTMLDivElement>(null);
  const [transformStyle, setTransformStyle] = useState("");

  useEffect(() => {
    let animationFrameId: number;

    const handleScroll = () => {
      if (!elementRef.current) return;
      const rect = elementRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      // Relative progress from center of screen (-1 to 1)
      const centerY = rect.top + rect.height / 2;
      const progress = (centerY - windowHeight / 2) / (windowHeight / 2);

      // Subtle, elegant parallax translation (smooth dampened multiplier)
      const translateY = progress * speed * 75;
      const translateX = horizontalSpeed !== 0 ? progress * horizontalSpeed * 45 : 0;
      const rotation = rotateSpeed !== 0 ? progress * rotateSpeed * 12 : 0;
      const scale = scaleSpeed !== 0 ? 1 + progress * scaleSpeed * 0.08 : 1;

      setTransformStyle(
        `translate3d(${translateX.toFixed(1)}px, ${translateY.toFixed(1)}px, 0) rotate(${rotation.toFixed(2)}deg) scale(${scale.toFixed(3)})`
      );
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
  }, [speed, rotateSpeed, scaleSpeed, horizontalSpeed]);

  return (
    <div
      ref={elementRef}
      className={`will-change-transform transition-transform duration-150 ease-out ${className}`}
      style={{ transform: transformStyle }}
    >
      {children}
    </div>
  );
}
