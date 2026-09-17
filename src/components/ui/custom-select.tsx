"use client";

import React, { useState, useRef, useEffect } from "react";
import { ChevronDown, Check } from "lucide-react";

export interface CustomSelectOption {
  label: string;
  value: string;
}

export interface CustomSelectProps {
  value: string;
  onChange: (value: string) => void;
  options: (string | CustomSelectOption)[];
  variant?: "dark" | "light";
  placeholder?: string;
  className?: string;
  id?: string;
  name?: string;
  disabled?: boolean;
}

export function CustomSelect({
  value,
  onChange,
  options,
  variant = "dark",
  placeholder = "Selecciona una opción",
  className = "",
  id,
  name,
  disabled = false,
}: CustomSelectProps) {
  const [isOpen, setIsOpen] = useState(false);
  const containerRef = useRef<HTMLDivElement>(null);

  const isLight = variant === "light";

  // Normalize options to { label, value }
  const normalizedOptions: CustomSelectOption[] = options.map((opt) =>
    typeof opt === "string" ? { label: opt, value: opt } : opt
  );

  const selectedOption = normalizedOptions.find((opt) => opt.value === value);

  // Close dropdown on click outside
  useEffect(() => {
    function handleClickOutside(event: MouseEvent | TouchEvent) {
      if (
        containerRef.current &&
        !containerRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    }

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
      document.addEventListener("touchstart", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
      document.removeEventListener("touchstart", handleClickOutside);
    };
  }, [isOpen]);

  // Handle escape key
  useEffect(() => {
    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape" && isOpen) {
        setIsOpen(false);
      }
    }

    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
  }, [isOpen]);

  // Trigger button styling based on variant & state
  const triggerClasses = isLight
    ? `w-full px-4 py-3.5 rounded-2xl bg-[#f8fafc] border text-[#1a3c6a] text-sm flex items-center justify-between transition-all duration-200 cursor-pointer select-none text-left ${
        isOpen
          ? "bg-white border-[#02afab] ring-4 ring-[#02afab]/10 shadow-sm"
          : "border-slate-200/80 hover:bg-slate-100/70 hover:border-slate-300"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`
    : `w-full px-4 py-3 rounded-xl border text-white text-sm flex items-center justify-between transition-all duration-200 cursor-pointer select-none text-left ${
        isOpen
          ? "bg-[#0d2646] border-[#02afab] ring-1 ring-[#02afab]"
          : "bg-white/[0.06] border-white/10 hover:bg-white/[0.09] hover:border-white/20"
      } ${disabled ? "opacity-50 cursor-not-allowed" : ""}`;

  // Dropdown options container styling
  const dropdownClasses = isLight
    ? "absolute top-full left-0 right-0 mt-2 z-50 bg-white border border-slate-200/90 rounded-2xl shadow-[0_15px_40px_rgba(26,60,106,0.14)] p-1.5 max-h-60 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150"
    : "absolute top-full left-0 right-0 mt-2 z-50 bg-[#0d223c]/95 backdrop-blur-2xl border border-white/15 rounded-2xl shadow-[0_20px_50px_rgba(0,0,0,0.6)] p-1.5 max-h-60 overflow-y-auto space-y-1 animate-in fade-in zoom-in-95 duration-150";

  return (
    <div ref={containerRef} className={`relative w-full ${className}`}>
      {/* Hidden input for form integration */}
      {name && <input type="hidden" name={name} value={value} />}

      {/* Trigger element */}
      <button
        type="button"
        id={id}
        disabled={disabled}
        onClick={() => setIsOpen(!isOpen)}
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        className={triggerClasses}
      >
        <span className="truncate font-medium">
          {selectedOption ? selectedOption.label : placeholder}
        </span>
        <ChevronDown
          className={`w-4 h-4 shrink-0 transition-transform duration-200 ${
            isOpen
              ? "rotate-180 text-[#02afab]"
              : isLight
              ? "text-slate-400"
              : "text-gray-400"
          }`}
        />
      </button>

      {/* Dropdown with custom option divs */}
      {isOpen && (
        <div role="listbox" className={dropdownClasses}>
          {normalizedOptions.map((opt) => {
            const isSelected = opt.value === value;

            let optionItemClasses = "";
            if (isLight) {
              optionItemClasses = isSelected
                ? "px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#02afab] bg-[#02afab]/10 font-bold flex items-center justify-between transition-colors duration-150 cursor-pointer select-none"
                : "px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-slate-700 hover:text-[#02afab] hover:bg-slate-50 flex items-center justify-between transition-colors duration-150 cursor-pointer select-none";
            } else {
              optionItemClasses = isSelected
                ? "px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-[#30deda] bg-[#02afab]/20 font-bold flex items-center justify-between transition-colors duration-150 cursor-pointer select-none"
                : "px-3.5 py-2.5 rounded-xl text-xs sm:text-sm text-gray-200 hover:text-[#30deda] hover:bg-white/10 flex items-center justify-between transition-colors duration-150 cursor-pointer select-none";
            }

            return (
              <div
                key={opt.value}
                data-value={opt.value}
                role="option"
                aria-selected={isSelected}
                onClick={() => {
                  onChange(opt.value);
                  setIsOpen(false);
                }}
                className={optionItemClasses}
              >
                <span className="truncate">{opt.label}</span>
                {isSelected && (
                  <Check
                    className={`w-4 h-4 shrink-0 ${
                      isLight ? "text-[#02afab]" : "text-[#30deda]"
                    }`}
                  />
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
