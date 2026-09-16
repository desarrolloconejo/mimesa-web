import React from "react";
import { TrayectoriaContent } from "./trayectoria-content";
import { GlowOrb } from "@/components/ui/organic-shapes";

export function TrayectoriaWrapper() {
  return (
    <section
      id="trayectoria"
      className="relative w-full bg-gradient-to-b from-white via-[#fbfdfe] to-white border-t border-gray-100/60 overflow-clip"
    >
      {/* Ambient Lighting Orbs */}
      <GlowOrb
        color="cyan"
        className="w-[500px] h-[500px] -top-32 -left-48 opacity-20"
      />
      <GlowOrb
        color="green"
        className="w-[550px] h-[550px] top-1/2 -right-64 opacity-20"
      />
      <GlowOrb
        color="lime"
        className="w-[450px] h-[450px] -bottom-32 left-1/4 opacity-20"
      />

      <TrayectoriaContent />
    </section>
  );
}
