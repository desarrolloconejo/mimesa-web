"use client";

import React, { useEffect, useRef, useState, createContext, useContext } from "react";

interface StaggerContextValue {
  isInStaggerGroup: boolean;
  registerChild: () => number;
}

const StaggerContext = createContext<StaggerContextValue>({
  isInStaggerGroup: false,
  registerChild: () => 0,
});

export interface FadeInStaggerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delayStep?: number; // delay in ms between consecutive children (default 80ms)
  faster?: boolean;   // if true, 50ms step
  className?: string;
  as?: React.ElementType;
}

/**
 * FadeInStagger Component
 * Wraps multiple `<FadeIn>` children and automatically cascades their entrance animations.
 */
export function FadeInStagger({
  children,
  delayStep = 80,
  faster = false,
  className = "",
  as: Component = "div",
  ...props
}: FadeInStaggerProps) {
  const counterRef = useRef(0);
  const step = faster ? 50 : delayStep;

  // Reset counter when children change
  counterRef.current = 0;

  const registerChild = () => {
    const current = counterRef.current;
    counterRef.current += 1;
    return current * step;
  };

  return (
    <StaggerContext.Provider value={{ isInStaggerGroup: true, registerChild }}>
      <Component className={className} {...props}>
        {children}
      </Component>
    </StaggerContext.Provider>
  );
}

export interface FadeInProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  delay?: number;
  duration?: number;
  direction?: "up" | "down" | "left" | "right" | "none";
  distance?: number;
  className?: string;
  threshold?: number;
  once?: boolean;
  scale?: boolean;
  as?: React.ElementType;
}

/**
 * FadeIn Component
 * Provides smooth, hardware-accelerated entrance animations on scroll and initial mount.
 * Features:
 * - Intelligent delay normalization (supports both seconds e.g. 0.1s and ms e.g. 100ms)
 * - Noticeable initial entrance reveal for above-the-fold content
 * - IntersectionObserver with rootMargin for anticipatory scroll reveal
 * - Automatic cascading when inside `<FadeInStagger>`
 * - Respects prefers-reduced-motion
 */
export function FadeIn({
  children,
  delay: explicitDelay,
  duration = 750,
  direction = "up",
  distance = 36,
  className = "",
  threshold = 0,
  once = true,
  scale = false,
  as: Component = "div",
  style,
  ...props
}: FadeInProps) {
  const ref = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const staggerCtx = useContext(StaggerContext);

  // Calculate stagger delay if inside a Stagger container
  const staggerDelayRef = useRef<number | null>(null);
  if (staggerDelayRef.current === null && staggerCtx.isInStaggerGroup) {
    staggerDelayRef.current = staggerCtx.registerChild();
  }

  // Normalize explicit delay: if < 10 (except 0), treat as seconds -> convert to ms
  const normalizedExplicitDelay =
    explicitDelay !== undefined
      ? explicitDelay > 0 && explicitDelay < 10
        ? Math.round(explicitDelay * 1000)
        : Math.round(explicitDelay)
      : undefined;

  const finalDelay =
    normalizedExplicitDelay !== undefined
      ? normalizedExplicitDelay
      : staggerDelayRef.current || 0;

  useEffect(() => {
    // Respect user's accessibility reduced-motion preference
    if (
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches
    ) {
      setIsVisible(true);
      return;
    }

    const node = ref.current;
    if (!node) return;

    const rect = node.getBoundingClientRect();

    // If element has already been scrolled past (above viewport), reveal immediately
    if (rect.bottom < 0) {
      setIsVisible(true);
      return;
    }

    // Check if element is already within the viewport on mount
    const inInitialViewport =
      rect.top < window.innerHeight + 20 && rect.bottom > 0;

    if (inInitialViewport) {
      // Micro-timeout ensures the browser first renders the initial state,
      // creating a gorgeous, visible entrance animation right after page load
      const mountTimer = setTimeout(() => {
        setIsVisible(true);
      }, Math.max(60, finalDelay));

      return () => clearTimeout(mountTimer);
    }

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    let revealTimer: NodeJS.Timeout | null = null;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (finalDelay > 0) {
              revealTimer = setTimeout(() => {
                setIsVisible(true);
              }, finalDelay);
            } else {
              setIsVisible(true);
            }

            if (once) {
              observer.unobserve(entry.target);
            }
          } else if (!once) {
            if (revealTimer) clearTimeout(revealTimer);
            setIsVisible(false);
          }
        });
      },
      {
        threshold,
        rootMargin: "0px 0px -20px 0px",
      }
    );

    observer.observe(node);

    return () => {
      if (revealTimer) clearTimeout(revealTimer);
      observer.disconnect();
    };
  }, [threshold, once, finalDelay]);

  // Compute translation & scale transform based on visibility and direction
  const getTransform = () => {
    if (isVisible) {
      return "translate3d(0, 0, 0) scale(1)";
    }

    const scalePart = scale ? "scale(0.96) " : "";

    switch (direction) {
      case "up":
        return `${scalePart}translate3d(0, ${distance}px, 0)`;
      case "down":
        return `${scalePart}translate3d(0, -${distance}px, 0)`;
      case "left":
        return `${scalePart}translate3d(${distance}px, 0, 0)`;
      case "right":
        return `${scalePart}translate3d(-${distance}px, 0, 0)`;
      case "none":
      default:
        return scale ? "scale(0.96)" : "none";
    }
  };

  const transitionStyle: React.CSSProperties = {
    opacity: isVisible ? 1 : 0,
    transform: getTransform(),
    transition: `opacity ${duration}ms cubic-bezier(0.16, 1, 0.3, 1), transform ${duration}ms cubic-bezier(0.16, 1, 0.3, 1)`,
    willChange: isVisible ? "auto" : "opacity, transform",
    ...style,
  };

  return (
    <Component
      ref={ref}
      className={className}
      style={transitionStyle}
      {...props}
    >
      {children}
    </Component>
  );
}
