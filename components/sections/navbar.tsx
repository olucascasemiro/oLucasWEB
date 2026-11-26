"use client";

import React, { useEffect, useRef, useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";
import {
  isWhatsappMissingOrPlaceholder,
  siteConfig,
  waLink,
} from "@/lib/site";
import { track } from "@/lib/track";

export function Navbar() {
  const headerRef = useRef<HTMLElement>(null);
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const updateHeight = () => {
      if (headerRef.current) {
        const h = headerRef.current.offsetHeight;
        document.documentElement.style.setProperty("--n3-nav-space", `${h}px`);
      }
    };

    const onScroll = () => {
      setScrolled(window.scrollY > 12);
    };

    updateHeight();
    onScroll();

    window.addEventListener("resize", updateHeight);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("resize", updateHeight);
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  const showDevWarning =
    process.env.NODE_ENV === "development" && isWhatsappMissingOrPlaceholder;

  return (
    <header
      ref={headerRef}
      className={cn(
        "sticky top-0 z-50 w-full transition-all duration-200",
        scrolled
          ? "border-b border-(color:--color-n3-line) bg-[#f8f7f3]/85 backdrop-blur-md"
          : "border-b border-transparent bg-transparent"
      )}
    >
      {showDevWarning ? (
        <div className="bg-amber-100 px-4 py-1.5 text-center text-xs font-medium text-amber-900">
          Aviso (dev): NEXT_PUBLIC_WHATSAPP_NUMBER está vazio ou é placeholder.
        </div>
      ) : null}

      <div className="n3-container flex h-18 items-center justify-between gap-4">
        {/* Esquerda: Wordmark + link discreto */}
        <div className="flex flex-wrap items-baseline gap-x-3 gap-y-0.5">
          <Link
            href="#top"
            className="text-base font-semibold tracking-tight text-(color:--color-n3-ink)"
          >
            {siteConfig.brand.name}
          </Link>
          <a
            href={siteConfig.brand.officialSite}
            target="_blank"
            rel="noopener noreferrer"
            className="hidden text-xs text-(color:--color-n3-grey) transition-colors hover:text-(color:--color-n3-ink) sm:inline-block"
          >
            ← {siteConfig.brand.officialDomainLabel}
          </a>
        </div>

        {/* Centro: Navegação desktop */}
        <nav
          className="hidden items-center gap-8 lg:flex"
          aria-label="Navegação principal"
        >
          {siteConfig.navLinks.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm font-medium text-(color:--color-n3-grey) transition-colors hover:text-(color:--color-n3-ink)"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* Direita: CTA pílula escura + hambúrguer mobile */}
        <div className="flex items-center gap-3">
          <a
            href={waLink("Oi Lucas, vim pelo seu portfólio e quero conversar.")}
            target="_blank"
            rel="noopener noreferrer"
            onClick={() => track("whatsapp_click", { origin: "navbar" })}
            className="hidden min-h-11 items-center justify-center rounded-full bg-(color:--color-n3-ink) px-5 text-sm font-medium text-(color:--color-n3-page) transition-transform hover:-translate-y-0.5 sm:inline-flex"
          >
            Falar no WhatsApp
          </a>

          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-(color:--color-n3-line) bg-white/60 text-(color:--color-n3-ink) lg:hidden"
            aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            aria-expanded={mobileOpen}
            onClick={() => setMobileOpen((prev) => !prev)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Menu Mobile */}
      {mobileOpen ? (
        <div className="border-t border-(color:--color-n3-line) bg-(color:--color-n3-page) px-5 py-4 lg:hidden">
          <nav className="flex flex-col gap-2" aria-label="Navegação mobile">
            {siteConfig.navLinks.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setMobileOpen(false)}
                className="flex min-h-11 items-center rounded-xl px-3 text-base font-medium text-(color:--color-n3-ink) hover:bg-black/5"
              >
                {item.label}
              </a>
            ))}
            <a
              href={siteConfig.brand.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-h-11 items-center rounded-xl px-3 text-sm text-(color:--color-n3-grey) hover:bg-black/5"
            >
              ← {siteConfig.brand.officialDomainLabel}
            </a>
            <a
              href={waLink("Oi Lucas, vim pelo seu portfólio e quero conversar.")}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => {
                track("whatsapp_click", { origin: "navbar_mobile" });
                setMobileOpen(false);
              }}
              className="mt-2 flex min-h-11 items-center justify-center rounded-full bg-(color:--color-n3-ink) px-5 text-sm font-medium text-(color:--color-n3-page)"
            >
              Falar no WhatsApp
            </a>
          </nav>
        </div>
      ) : null}
    </header>
  );
}
