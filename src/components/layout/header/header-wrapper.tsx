"use client";

import React, { useState, useEffect, useRef } from "react";
import { HeaderContent } from "./header-content";

export function HeaderWrapper() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const lastScrollY = useRef(0);
  const scrollUpDelta = useRef(0);

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

          const prevY = lastScrollY.current;
          const diff = currentScrollY - prevY;

          if (currentScrollY <= 30) {
            setIsVisible(true);
            scrollUpDelta.current = 0;
          } else if (diff > 0 && currentScrollY > 120) {
            // Scrolling down -> hide header and reset scrollUp accumulator
            setIsVisible(false);
            scrollUpDelta.current = 0;
          } else if (diff < 0) {
            // Scrolling up -> accumulate negative delta
            scrollUpDelta.current += Math.abs(diff);
            // Require a solid 40px intentional upward scroll before revealing header
            if (scrollUpDelta.current > 40) {
              setIsVisible(true);
            }
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
      className={`fixed top-0 left-0 right-0 transition-all duration-300 ease-in-out bg-white border-b border-gray-100 shadow-sm shadow-[#183c6b]/5 ${
        isVisible ? "translate-y-0" : "-translate-y-full"
      } ${
        isScrolled ? "py-0 shadow-md shadow-[#183c6b]/8" : "py-0.5"
      }`}
    >
      <HeaderContent isScrolled={isScrolled} />
    </header>
  );
}
