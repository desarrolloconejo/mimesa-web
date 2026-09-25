"use client";

import React, { useState, useEffect, useRef, ReactNode } from "react";

interface LazySectionProps {
  children: ReactNode;
  fallback?: ReactNode;
  rootMargin?: string;
  minHeight?: string | number;
  className?: string;
  id?: string;
}

export function LazySection({
  children,
  fallback,
  rootMargin = "350px 0px",
  minHeight = "200px",
  className = "",
  id,
}: LazySectionProps) {
  const [isVisible, setIsVisible] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // Si la URL contiene un ancla que apunta a este elemento, revelar inmediatamente
    if (id && typeof window !== "undefined") {
      const currentHash = window.location.hash.replace("#", "");
      if (currentHash === id) {
        setIsVisible(true);
        return;
      }

      // Escuchar cambios de hash para anclas internas como #contacto
      const handleHashChange = () => {
        if (window.location.hash.replace("#", "") === id) {
          setIsVisible(true);
        }
      };
      window.addEventListener("hashchange", handleHashChange);
      return () => window.removeEventListener("hashchange", handleHashChange);
    }
  }, [id]);

  useEffect(() => {
    if (isVisible) return;
    const el = containerRef.current;
    if (!el) return;

    if (!("IntersectionObserver" in window)) {
      setIsVisible(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { rootMargin }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [isVisible, rootMargin]);

  return (
    <div
      ref={containerRef}
      id={id}
      className={className}
      style={{ minHeight: isVisible ? undefined : minHeight }}
    >
      {isVisible ? children : fallback || <div className="w-full min-h-[inherit]" />}
    </div>
  );
}
