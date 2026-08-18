"use client";

import React, { useState, useEffect } from "react";
import { HeaderContent } from "./header-content";

export function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (!ticking) {
        window.requestAnimationFrame(() => {
          if (currentScrollY > 30) {
            setIsScrolled(true);
          } else {
            setIsScrolled(false);
          }

          // Smart auto-hide on scroll down, show on scroll up
          if (currentScrollY <= 30) {
            setIsVisible(true);
          } else if (currentScrollY > lastScrollY && currentScrollY > 100) {
            // Scrolling down -> desacoplar (hide smoothly)
            setIsVisible(false);
          } else if (currentScrollY < lastScrollY) {
            // Scrolling up -> acoplar (show)
            setIsVisible(true);
          }

          setLastScrollY(currentScrollY);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  return (
    <header
      id="main-header"
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ease-in-out bg-white border-b border-gray-100 shadow-sm shadow-[#1a3c6a]/5 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "py-1 shadow-md shadow-[#1a3c6a]/8" : "py-2"
      }`}
    >
      <HeaderContent isScrolled={isScrolled} />
    </header>
  );
}
