"use client";

import React, { useState, useEffect, useRef } from "react";
import { HeaderContent } from "./header-content";

export function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > 30) {
            setIsScrolled((prev) => (!prev ? true : prev));
          } else {
            setIsScrolled((prev) => (prev ? false : prev));
          }

          // Smart auto-hide on scroll down, show on scroll up
          const prevY = lastScrollY.current;
          if (currentScrollY <= 30) {
            setIsVisible(true);
          } else if (currentScrollY > prevY && currentScrollY > 100) {
            // Scrolling down -> desacoplar (hide smoothly)
            setIsVisible(false);
          } else if (currentScrollY < prevY - 10) {
            // Scrolling up (with minimum threshold to prevent jitter) -> acoplar (show)
            setIsVisible(true);
          }

          lastScrollY.current = currentScrollY;
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      id="main-header"
      style={{ zIndex: 9999, isolation: "isolate" }}
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out bg-white border-b border-gray-100 shadow-sm shadow-[#1a3c6a]/5 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "py-0 shadow-md shadow-[#1a3c6a]/8" : "py-0.5"
      }`}
    >
      <HeaderContent isScrolled={isScrolled} />
    </header>
  );
}
