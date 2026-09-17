"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";

export function ProductsDropdown() {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setIsOpen(true);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setIsOpen(false);
    }, 150);
  };

  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    const handleClickOutside = (e: MouseEvent) => {
      if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
        closeMenu();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      ref={containerRef}
      className="relative inline-block"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
    >
      {/* Trigger Button */}
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className={`whitespace-nowrap inline-flex items-center gap-1.5 px-3 py-1.5 text-[13px] xl:text-sm font-medium rounded-lg transition-all duration-200 cursor-pointer ${
          isOpen
            ? "text-[#02afab] bg-[#02afab]/10"
            : "text-[#1a3c6a] hover:text-[#02afab] hover:bg-[#02afab]/8"
        }`}
        aria-expanded={isOpen}
      >
        <span>Productos</span>
        <ChevronDown
          className={`w-3.5 h-3.5 transition-transform duration-200 ${
            isOpen ? "rotate-180 text-[#02afab]" : "text-gray-400"
          }`}
        />
      </button>

      {/* Clean, Simple & Precise Dropdown */}
      <div
        className={`absolute top-full left-0 pt-2 w-48 transition-all duration-150 z-50 ${
          isOpen
            ? "opacity-100 translate-y-0 pointer-events-auto"
            : "opacity-0 translate-y-1 pointer-events-none"
        }`}
      >
        <div className="rounded-2xl border border-gray-100 shadow-[0_12px_28px_rgba(26,60,106,0.12)] p-2 bg-white text-xs space-y-1">
          <Link
            href="/#productos"
            onClick={closeMenu}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#f0f9f8] text-[#1a3c6a] hover:text-[#02afab] font-semibold text-xs transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#009539]" />
            <span>Alimentos</span>
          </Link>

          <Link
            href="/#productos"
            onClick={closeMenu}
            className="flex items-center gap-2.5 px-3 py-2 rounded-xl hover:bg-[#f0f9f8] text-[#1a3c6a] hover:text-[#02afab] font-semibold text-xs transition-colors"
          >
            <span className="w-2 h-2 rounded-full bg-[#02afab]" />
            <span>Produsal</span>
          </Link>
        </div>
      </div>
    </div>
  );
}
