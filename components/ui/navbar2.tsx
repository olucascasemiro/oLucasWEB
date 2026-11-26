"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { AnimatePresence, motion } from "motion/react";
import { ChevronDown, Menu, X } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

type MegaColumn = {
  eyebrow: string;
  links: { label: string; href: string; active?: boolean; badge?: string }[];
};

type MegaMenu = {
  columns: MegaColumn[];
  footerLinks?: { label: string; href: string }[];
  image: { src: string; alt: string };
  imageCaption?: string;
};

const SEGMENTS_MENU: MegaMenu = {
  columns: [
    {
      eyebrow: "Por segmento",
      links: [
        { label: "Saúde e estética", href: "/saude", active: true, badge: "CONVERT IA" },
        { label: "Imobiliário", href: "#nichos" },
        { label: "E-commerce", href: "#nichos" },
      ],
    },
    {
      eyebrow: "Sob medida",
      links: [
        { label: "Automação personalizada", href: "#fluxo" },
        { label: "Ver fluxo por trás", href: "#fluxo" },
      ],
    },
  ],
  footerLinks: [
    { label: "Política de privacidade", href: "/privacidade" },
  ],
  image: {
    src: "/images/niche-saude.jpg",
    alt: "Automação para negócios",
  },
  imageCaption: "Fluxos desenhados para cada operação",
};

const MEGA_MENUS: Record<string, MegaMenu> = {
  Segmentos: SEGMENTS_MENU,
};

const NAV_ITEMS = [
  { label: "Segmentos", hasMenu: true },
  { label: "Fluxo", hasMenu: false, href: "#fluxo" },
  { label: "Sobre", hasMenu: false, href: "#sobre" },
  { label: "Como trabalho", hasMenu: false, href: "#como-funciona" },
] as const;

export default function Navbar2() {
  const [openMenu, setOpenMenu] = useState<string | null>(null);
  const [mobileOpen, setMobileOpen] = useState(false);

  const toggleMenu = (label: string, hasMenu: boolean) => {
    if (!hasMenu) {
      setOpenMenu(null);
      return;
    }
    setOpenMenu((current) => (current === label ? null : label));
  };

  const activeMenu = openMenu ? MEGA_MENUS[openMenu] : null;

  return (
    <header className="fixed inset-x-0 top-0 z-50 flex justify-center px-4 py-3">
      <div className="w-full max-w-7xl">
        <motion.div
          layout
          transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
          className="overflow-hidden rounded-3xl border border-zinc-200/70 bg-white/95 backdrop-blur-md shadow-[0_1px_2px_rgba(0,0,0,0.04),0_12px_32px_-8px_rgba(0,0,0,0.10)]"
        >
          {/* Top row */}
          <div className="flex items-center justify-between gap-4 px-5 py-3 sm:px-7">
            {/* Logo */}
            <Link href="/" className="flex shrink-0 items-center gap-2.5">
              <Image
                src="/logo.png"
                alt={siteConfig.brand.name}
                width={34}
                height={34}
                className="h-8 w-auto object-contain"
              />
              <span className="text-lg font-semibold tracking-tight text-zinc-900">
                {siteConfig.brand.name}
              </span>
            </Link>

            {/* Desktop nav */}
            <nav className="hidden items-center gap-1 lg:flex" aria-label="Navegação principal">
              {NAV_ITEMS.map((item) => {
                const isOpen = openMenu === item.label;
                if (!item.hasMenu) {
                  return (
                    <a
                      key={item.label}
                      href={item.href ?? "#"}
                      onClick={() => toggleMenu(item.label, false)}
                      className="rounded-full px-4 py-2 text-[15px] font-medium text-zinc-600 transition-colors hover:bg-zinc-50 hover:text-zinc-900"
                    >
                      {item.label}
                    </a>
                  );
                }
                return (
                  <button
                    key={item.label}
                    type="button"
                    onClick={() => toggleMenu(item.label, item.hasMenu)}
                    aria-expanded={isOpen}
                    className={`flex items-center gap-1 rounded-full px-4 py-2 text-[15px] font-medium transition-colors ${
                      isOpen
                        ? "bg-zinc-100 text-zinc-900"
                        : "text-zinc-600 hover:bg-zinc-50 hover:text-zinc-900"
                    }`}
                  >
                    {item.label}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform duration-300 ${
                        isOpen ? "rotate-180" : ""
                      }`}
                    />
                  </button>
                );
              })}
            </nav>

            {/* Right actions */}
            <div className="hidden shrink-0 items-center gap-3 lg:flex">
              <a
                href={waLink("Oi Lucas, vim pelo seu portfólio e quero conversar.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { origin: "navbar" })}
                className="inline-flex items-center gap-2 rounded-full bg-(color:--color-n3-accent) px-5 py-2.5 text-sm font-semibold text-white transition-all hover:brightness-105"
              >
                <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                <span>Falar no WhatsApp</span>
              </a>
            </div>

            {/* Mobile trigger */}
            <button
              type="button"
              onClick={() => setMobileOpen((v) => !v)}
              className="flex items-center justify-center rounded-full p-2 text-zinc-700 lg:hidden"
              aria-label={mobileOpen ? "Fechar menu" : "Abrir menu"}
            >
              {mobileOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Desktop mega dropdown */}
          <AnimatePresence initial={false}>
            {activeMenu && (
              <motion.div
                key={openMenu}
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="hidden overflow-hidden lg:block"
              >
                <div className="grid grid-cols-[1fr_1fr_auto] gap-10 px-8 pb-8 pt-2">
                  {activeMenu.columns.map((col, colIdx) => (
                    <div key={col.eyebrow} className="flex flex-col gap-5">
                      <span className="w-fit rounded-full border border-zinc-200 px-4 py-1.5 text-xs font-medium text-zinc-500">
                        {col.eyebrow}
                      </span>
                      <ul className="flex flex-col gap-3.5">
                        {col.links.map((link) => (
                          <li key={link.label}>
                            <Link
                              href={link.href}
                              onClick={() => setOpenMenu(null)}
                              className={`group flex items-center gap-2 text-lg font-semibold text-zinc-900 hover:text-(color:--color-n3-accent) ${
                                link.active
                                  ? "underline decoration-(color:--color-n3-accent) underline-offset-4"
                                  : ""
                              }`}
                            >
                              {link.label}
                              {link.badge && (
                                <span className="rounded-full bg-(color:--color-n3-accent) px-2.5 py-0.5 text-[11px] font-semibold uppercase tracking-wide text-white">
                                  {link.badge}
                                </span>
                              )}
                            </Link>
                          </li>
                        ))}
                      </ul>

                      {colIdx === activeMenu.columns.length - 1 &&
                        activeMenu.footerLinks && (
                          <div className="mt-auto flex flex-col gap-2 pt-8">
                            {activeMenu.footerLinks.map((item) => (
                              <Link
                                key={item.label}
                                href={item.href}
                                onClick={() => setOpenMenu(null)}
                                className="text-sm text-zinc-400 hover:text-zinc-600"
                              >
                                {item.label}
                              </Link>
                            ))}
                          </div>
                        )}
                    </div>
                  ))}

                  {/* Preview image */}
                  <div className="relative hidden h-56 w-72 flex-col justify-end overflow-hidden rounded-2xl border border-zinc-200/70 md:flex">
                    <Image
                      src={activeMenu.image.src}
                      alt={activeMenu.image.alt}
                      fill
                      className="object-cover"
                    />
                    {activeMenu.imageCaption && (
                      <div className="relative z-10 bg-gradient-to-t from-black/70 to-transparent p-4 pt-10">
                        <p className="text-sm font-medium text-white">
                          {activeMenu.imageCaption}
                        </p>
                      </div>
                    )}
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>

          {/* Mobile panel */}
          <AnimatePresence initial={false}>
            {mobileOpen && (
              <motion.div
                key="mobile-panel"
                initial={{ height: 0, opacity: 0 }}
                animate={{ height: "auto", opacity: 1 }}
                exit={{ height: 0, opacity: 0 }}
                transition={{ duration: 0.3 }}
                className="overflow-hidden lg:hidden"
              >
                <div className="flex flex-col gap-1 px-5 pb-5">
                  {NAV_ITEMS.map((item) =>
                    item.hasMenu ? (
                      <button
                        key={item.label}
                        type="button"
                        onClick={() => toggleMenu(item.label, true)}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        {item.label}
                        <ChevronDown
                          className={`h-4 w-4 transition-transform ${
                            openMenu === item.label ? "rotate-180" : ""
                          }`}
                        />
                      </button>
                    ) : (
                      <a
                        key={item.label}
                        href={item.href ?? "#"}
                        onClick={() => setMobileOpen(false)}
                        className="flex items-center justify-between rounded-xl px-3 py-3 text-left text-base font-medium text-zinc-700 hover:bg-zinc-50"
                      >
                        {item.label}
                      </a>
                    ),
                  )}

                  {activeMenu && (
                    <div className="ml-3 flex flex-col gap-3 border-l border-zinc-100 pl-4 pt-2">
                      {activeMenu.columns.flatMap((c) =>
                        c.links.map((link) => (
                          <Link
                            key={link.label}
                            href={link.href}
                            onClick={() => setMobileOpen(false)}
                            className="flex items-center gap-2 text-sm text-zinc-600"
                          >
                            {link.label}
                            {link.badge && (
                              <span className="rounded-full bg-(color:--color-n3-accent) px-2 py-0.5 text-[10px] font-semibold uppercase text-white">
                                {link.badge}
                              </span>
                            )}
                          </Link>
                        )),
                      )}
                    </div>
                  )}

                  <div className="mt-4 flex flex-col gap-3 border-t border-zinc-100 pt-4">
                    <a
                      href={waLink("Oi Lucas, vim pelo seu portfólio e quero conversar.")}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => {
                        setMobileOpen(false);
                        track("whatsapp_click", { origin: "navbar_mobile" });
                      }}
                      className="inline-flex items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-5 py-3 text-center text-sm font-semibold text-white"
                    >
                      <FaWhatsapp className="h-4 w-4" aria-hidden="true" />
                      <span>Falar no WhatsApp</span>
                    </a>
                  </div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>
      </div>
    </header>
  );
}
