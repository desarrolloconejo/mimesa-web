import React from "react";
import { ContactoContent } from "./contacto-content";

export function ContactoWrapper() {
  return (
    <section
      id="contacto"
      className="relative w-full overflow-hidden bg-[#0e2440]"
    >
      <ContactoContent showBackground={true} />
    </section>
  );
}
