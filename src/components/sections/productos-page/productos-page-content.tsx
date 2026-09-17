"use client";

import React, { useState } from "react";
import { ProductosHero, CategoryFilter } from "./productos-hero";
import { DualShowcase } from "./dual-showcase";
import { AlimentosCatalog } from "./alimentos-catalog";
import { ProdusalCatalog } from "./produsal-catalog";
import { ProductosCta } from "./productos-cta";

export function ProductosPageContent() {
  const [activeCategory, setActiveCategory] = useState<CategoryFilter>("all");

  const handleSelectCategory = (category: CategoryFilter) => {
    setActiveCategory(category);
    // Smooth scroll down to the respective section if switching to a specific category
    if (category === "alimentos") {
      const el = document.getElementById("seccion-alimentos");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    } else if (category === "produsal") {
      const el = document.getElementById("seccion-produsal");
      if (el) el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="flex-1 w-full bg-gradient-to-b from-[#f4f8fb] via-white to-[#f7faf8] relative">
      {/* 1. Hero Section */}
      <ProductosHero
        activeCategory={activeCategory}
        onSelectCategory={handleSelectCategory}
      />

      {/* 2. Dual Gateway Overview (Shown when 'all' is selected) */}
      {activeCategory === "all" && (
        <DualShowcase onSelectCategory={handleSelectCategory} />
      )}

      {/* 3. Detailed Alimentos Section (Shown when 'all' or 'alimentos' is selected) */}
      {(activeCategory === "all" || activeCategory === "alimentos") && (
        <AlimentosCatalog />
      )}

      {/* 4. Detailed Produsal Section (Shown when 'all' or 'produsal' is selected) */}
      {(activeCategory === "all" || activeCategory === "produsal") && (
        <ProdusalCatalog />
      )}

      {/* 5. Business Distribution CTA Banner */}
      <ProductosCta />
    </div>
  );
}
