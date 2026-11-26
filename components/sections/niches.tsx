"use client";

import React, { useState } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  HeartPulse,
  ImagePlus,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { NicheId, siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

const ICONS = {
  HeartPulse,
  Building2,
  ShoppingBag,
  Wrench,
};

export function NichesSection() {
  const [selectedId, setSelectedId] = useState<NicheId>("saude");

  const handleSelect = (id: NicheId) => {
    setSelectedId(id);
    track("niche_select", { niche: id });
  };

  return (
    <section id="nichos" className="py-10 sm:py-12 lg:py-14">
      <div className="n3-container">
        <Reveal>
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
              {siteConfig.nichesSection.title}
            </h2>
            <p className="mt-2.5 text-base text-(color:--color-n3-grey) sm:text-lg">
              {siteConfig.nichesSection.subtitle}
            </p>
          </div>

          {/* Grid de 4 cards com espaço para imagem em cima de cada nicho */}
          <div
            className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
            role="tablist"
            aria-label="Segmentos disponíveis"
          >
            {siteConfig.niches.map((niche) => {
              const Icon = ICONS[niche.icon];
              const isSelected = selectedId === niche.id;

              return (
                <div
                  key={niche.id}
                  role="tab"
                  tabIndex={0}
                  aria-selected={isSelected}
                  onClick={() => handleSelect(niche.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" || e.key === " ") {
                      e.preventDefault();
                      handleSelect(niche.id);
                    }
                  }}
                  className={cn(
                    "flex h-full cursor-pointer flex-col justify-between overflow-hidden rounded-2xl border transition-all",
                    isSelected
                      ? "border-(color:--color-n3-ink) bg-white shadow-md"
                      : "border-(color:--color-n3-line) bg-white/75 hover:border-(color:--color-n3-grey) hover:bg-white"
                  )}
                >
                  <div>
                    {/* Espaço reservado para imagem em cima do card */}
                    <div className="flex aspect-[16/9] w-full flex-col items-center justify-center border-b border-dashed border-(color:--color-n3-line) bg-(color:--color-n3-page) px-4 text-center">
                      <ImagePlus className="h-6 w-6 text-(color:--color-n3-accent)" aria-hidden="true" />
                      <span className="mt-1.5 text-[11px] font-medium text-(color:--color-n3-grey)">
                        Espaço para imagem · {niche.name}
                      </span>
                    </div>

                    <div className="p-5 pb-0">
                      <div className="flex items-center justify-between gap-2">
                        <span
                          className={cn(
                            "inline-flex h-9 w-9 items-center justify-center rounded-xl border",
                            isSelected
                              ? "border-(color:--color-n3-accent) bg-(color:--color-n3-accent)/15 text-(color:--color-n3-ink)"
                              : "border-(color:--color-n3-line) bg-(color:--color-n3-page) text-(color:--color-n3-ink)"
                          )}
                        >
                          <Icon className="h-4 w-4" aria-hidden="true" />
                        </span>

                        <span
                          className={cn(
                            "rounded-full px-2.5 py-1 text-[11px] font-medium",
                            niche.badgeTone === "active"
                              ? "bg-(color:--color-n3-accent)/25 text-(color:--color-n3-ink)"
                              : niche.badgeTone === "custom"
                                ? "bg-(color:--color-n3-ink) text-(color:--color-n3-page)"
                                : "border border-(color:--color-n3-line) bg-(color:--color-n3-page) text-(color:--color-n3-grey)"
                          )}
                        >
                          {niche.badge}
                        </span>
                      </div>

                      <p className="mt-3.5 text-xs font-medium uppercase tracking-wider text-(color:--color-n3-grey)">
                        {niche.name}
                      </p>
                      <h3 className="mt-1.5 text-lg font-semibold leading-snug text-(color:--color-n3-ink)">
                        {niche.painTitle}
                      </h3>
                      <p className="mt-2 text-sm leading-relaxed text-(color:--color-n3-grey)">
                        {niche.supportText}
                      </p>
                    </div>
                  </div>

                  <div className="p-5 pt-4">
                    {niche.ctaType === "route" ? (
                      <Link
                        href={niche.ctaHref}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
                      >
                        <span>{niche.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </Link>
                    ) : niche.ctaType === "whatsapp" ? (
                      <a
                        href={waLink(niche.ctaHref)}
                        target="_blank"
                        rel="noopener noreferrer"
                        onClick={(e) => {
                          e.stopPropagation();
                          track("whatsapp_click", { origin: `card_${niche.id}` });
                        }}
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-line) decoration-2 underline-offset-4 hover:decoration-(color:--color-n3-ink)"
                      >
                        <span>{niche.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <a
                        href="#fluxo"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(niche.id);
                        }}
                        className="inline-flex min-h-10 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
                      >
                        <span>{niche.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
