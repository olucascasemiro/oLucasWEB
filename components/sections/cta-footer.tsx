"use client";

import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

export function CtaFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contato" className="py-10 sm:py-12 lg:py-14">
        <div className="n3-container">
          <Reveal>
            <div className="rounded-3xl bg-(color:--color-n3-ink) px-7 py-10 text-center text-(color:--color-n3-page) shadow-sm sm:px-12 sm:py-14">
            <h2 className="mx-auto max-w-2xl text-2xl font-semibold tracking-tight sm:text-4xl">
              {siteConfig.cta.title}
            </h2>
            <p className="mx-auto mt-4 max-w-xl text-base text-(color:--color-n3-page)/75 sm:text-lg">
              {siteConfig.cta.subtitle}
            </p>
            <div className="mt-8 flex justify-center">
              <a
                href={waLink(siteConfig.cta.whatsappText)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { origin: "cta_final" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-7 text-sm font-semibold text-(color:--color-n3-ink) transition-transform hover:-translate-y-0.5 sm:text-base"
              >
                <span>{siteConfig.cta.buttonLabel}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>
            </div>
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-(color:--color-n3-line) py-10">
        <div className="n3-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-(color:--color-n3-ink)">
              {siteConfig.brand.name}
            </p>
            <p className="mt-1 text-xs text-(color:--color-n3-grey)">
              © {year} {siteConfig.brand.name}. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-(color:--color-n3-grey)">
            <Link
              href="/privacidade"
              className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
            >
              Política de privacidade
            </Link>
            <a
              href={siteConfig.brand.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
            >
              {siteConfig.brand.officialDomainLabel}
            </a>
            {siteConfig.contact.instagram ? (
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
              >
                Instagram
              </a>
            ) : null}
            {siteConfig.contact.linkedin ? (
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
