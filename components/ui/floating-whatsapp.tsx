"use client";

import React from "react";
import { FaWhatsapp } from "react-icons/fa6";
import { waLink } from "@/lib/site";
import { track } from "@/lib/track";

export function FloatingWhatsApp() {
  const href = waLink("Oi Lucas, vim pelo seu site e quero conversar sobre automação.");

  return (
    <>
      {/* Botão flutuante no canto direito (desktop/tablet) */}
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        onClick={() => track("whatsapp_click", { origin: "floating_desktop" })}
        aria-label="Falar no WhatsApp"
        className="fixed bottom-6 right-6 z-40 hidden items-center gap-2.5 rounded-full bg-(color:--color-n3-accent) px-5 py-3.5 text-sm font-semibold text-white shadow-lg transition-transform hover:-translate-y-0.5 hover:brightness-105 md:inline-flex"
      >
        <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
        <span>Falar no WhatsApp</span>
      </a>

      {/* Barra fixa inferior no mobile */}
      <div className="fixed inset-x-0 bottom-0 z-40 border-t border-(color:--color-n3-line) bg-white/95 p-3 backdrop-blur-md md:hidden">
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          onClick={() => track("whatsapp_click", { origin: "mobile_bottom_bar" })}
          className="flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-5 text-sm font-semibold text-white shadow-sm"
        >
          <FaWhatsapp className="h-5 w-5" aria-hidden="true" />
          <span>Falar no WhatsApp</span>
        </a>
      </div>
    </>
  );
}
