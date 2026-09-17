import React from "react";
import { CompromisoContent } from "./compromiso-content";

export function CompromisoWrapper() {
  return (
    <section
      id="compromiso"
      className="relative w-full overflow-hidden bg-white"
    >
      <CompromisoContent />
    </section>
  );
}
