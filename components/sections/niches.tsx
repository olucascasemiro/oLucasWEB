"use client";

import React from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HeartPulse,
  ShoppingBag,
  Wrench,
  Check,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

const ICONS = {
  HeartPulse,
  Building2,
  ShoppingBag,
  Wrench,
};

export function NichesSection() {
  const saude = siteConfig.niches.find((n) => n.id === "saude")!;
  const others = siteConfig.niches.filter((n) => n.id !== "saude");

  return (
    <section id="nichos" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
              Segmentos
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
              {siteConfig.nichesSection.title}
            </h2>
            <p className="mt-2.5 text-base text-(color:--color-n3-grey) sm:text-lg">
              {siteConfig.nichesSection.subtitle}
            </p>
          </div>

          {/* Destaque principal: Saúde e estética (CONVERT IA) */}
          <div className="mt-8 rounded-3xl border border-(color:--color-n3-ink) bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col justify-between gap-8 lg:flex-row lg:items-center">
              <div className="max-w-2xl">
                <div className="flex flex-wrap items-center gap-3">
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-(color:--color-n3-accent) bg-(color:--color-n3-accent)/15 text-(color:--color-n3-ink)">
                    <HeartPulse className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="rounded-full bg-(color:--color-n3-accent)/20 px-3 py-1 text-xs font-semibold text-(color:--color-n3-ink)">
                    {saude.badge}
                  </span>
                  <span className="text-xs font-medium uppercase tracking-wider text-(color:--color-n3-grey)">
                    {saude.name}
                  </span>
                </div>

                <h3 className="mt-4 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-3xl">
                  {saude.painTitle}
                </h3>
                <p className="mt-2.5 text-base leading-relaxed text-(color:--color-n3-grey)">
                  {saude.supportText}
                </p>

                <ul className="mt-5 grid gap-2.5 sm:grid-cols-3">
                  {saude.automates.map((item) => (
                    <li
                      key={item}
                      className="flex items-start gap-2 text-sm text-(color:--color-n3-ink)"
                    >
                      <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(color:--color-n3-accent)/20 text-(color:--color-n3-ink)">
                        <Check className="h-3 w-3" aria-hidden="true" />
                      </span>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="shrink-0">
                <Link
                  href={saude.ctaHref}
                  className="inline-flex min-h-12 w-full items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-7 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5 sm:w-auto"
                >
                  <span>{saude.ctaLabel}</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </Link>
              </div>
            </div>
          </div>

          {/* Linha secundária: Também desenvolvo para */}
          <div className="mt-8">
            <p className="mb-4 text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
              Também desenvolvo para:
            </p>
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-3">
              {others.map((niche) => {
                const Icon = ICONS[niche.icon];
                const whatsappMsg =
                  niche.ctaType === "whatsapp"
                    ? niche.ctaHref
                    : "Oi Lucas, tenho um processo repetitivo e quero desenhar uma automação sob medida.";

                return (
                  <div
                    key={niche.id}
                    className="flex flex-col justify-between rounded-2xl border border-(color:--color-n3-line) bg-white/85 p-5 transition-colors hover:border-(color:--color-n3-grey)"
                  >
                    <div>
                      <div className="flex items-center justify-between gap-2">
                        <span className="inline-flex h-9 w-9 items-center justify-center rounded-xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) text-(color:--color-n3-ink)">
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>
                        <span className="rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-2.5 py-0.5 text-[11px] font-medium text-(color:--color-n3-grey)">
                          Sob consulta
                        </span>
                      </div>

                      <p className="mt-3 text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                        {niche.name}
                      </p>
                      <h3 className="mt-1 text-base font-semibold text-(color:--color-n3-ink)">
                        {niche.painTitle}
                      </h3>
                      <p className="mt-1.5 text-sm leading-relaxed text-(color:--color-n3-grey)">
                        {niche.supportText}
                      </p>
                    </div>

                    <div className="mt-4 pt-2">
                      <a
                        href={waLink(whatsappMsg)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={() =>
                          track("whatsapp_click", { origin: `card_${niche.id}` })
                        }
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
                      >
                        <span>Falar sobre {niche.name.toLowerCase()}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
