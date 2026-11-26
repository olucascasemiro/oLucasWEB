"use client";

import React, { useState, type CSSProperties } from "react";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import WorkflowBlueprint from "@/components/ui/interactive-workflow-blueprint";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { NicheId, siteConfig, waLink } from "@/lib/site";
import { NICHE_PAIN_WORKFLOWS, WORKFLOW_APPS } from "@/lib/workflows";
import { track } from "@/lib/track";

const WORKFLOW_THEME_STYLE = {
  "--color-background": "#f8f7f3",
  "--color-foreground": "#171717",
  "--color-card": "#ffffff",
  "--color-muted-foreground": "#74716c",
  "--color-border": "#d9d6d0",
  "--color-primary": "#ff7a2f",
  "--color-primary-foreground": "#ffffff",
  "--color-chart-2": "#171717",
  "--color-chart-3": "#d97706",
} as CSSProperties;

export function WorkflowSection() {
  const [nicheId, setNicheId] = useState<NicheId>("saude");
  const nicheConfig = NICHE_PAIN_WORKFLOWS[nicheId];
  const [painId, setPainId] = useState<string>(nicheConfig.pains[0].id);

  const activePain =
    nicheConfig.pains.find((p) => p.id === painId) ?? nicheConfig.pains[0];
  const activeNicheItem =
    siteConfig.niches.find((n) => n.id === nicheId) ?? siteConfig.niches[0];

  const handleSelectNiche = (id: NicheId) => {
    setNicheId(id);
    setPainId(NICHE_PAIN_WORKFLOWS[id].pains[0].id);
    track("workflow_niche_select", { niche: id });
  };

  return (
    <section id="fluxo" className="py-10 sm:py-12 lg:py-14">
      <div className="n3-container">
        <Reveal>
          <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            {/* Cabeçalho */}
            <div className="flex flex-col gap-6 border-b border-(color:--color-n3-line) pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                  Visão geral do fluxo
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-3xl">
                  Como a automação funciona por trás
                </h2>
                <p className="mt-2 text-sm text-(color:--color-n3-grey) sm:text-base">
                  Selecione o nicho e a dor para visualizar as etapas da automação.
                </p>
              </div>
            </div>

            {/* Seletores limpos em 2 blocos */}
            <div className="mt-6 grid gap-5 lg:grid-cols-2">
              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  1. Segmento
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Escolher nicho">
                  {siteConfig.niches.map((niche) => {
                    const selected = niche.id === nicheId;
                    return (
                      <button
                        key={niche.id}
                        type="button"
                        onClick={() => handleSelectNiche(niche.id)}
                        aria-pressed={selected}
                        className={cn(
                          "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                          selected
                            ? "border-(color:--color-n3-ink) bg-(color:--color-n3-ink) text-(color:--color-n3-page)"
                            : "border-(color:--color-n3-line) bg-(color:--color-n3-page) text-(color:--color-n3-ink) hover:border-(color:--color-n3-ink)"
                        )}
                      >
                        {niche.name}
                      </button>
                    );
                  })}
                </div>
              </div>

              <div>
                <p className="mb-2 text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  2. Dor que você quer resolver
                </p>
                <div className="flex flex-wrap gap-2" role="group" aria-label="Escolher dor">
                  {nicheConfig.pains.map((pain) => {
                    const selected = pain.id === activePain.id;
                    return (
                      <button
                        key={pain.id}
                        type="button"
                        onClick={() => {
                          setPainId(pain.id);
                          track("workflow_pain_select", { niche: nicheId, pain: pain.id });
                        }}
                        aria-pressed={selected}
                        className={cn(
                          "min-h-10 rounded-full border px-4 text-sm font-medium transition-colors",
                          selected
                            ? "border-(color:--color-n3-accent) bg-(color:--color-n3-accent)/20 text-(color:--color-n3-ink)"
                            : "border-(color:--color-n3-line) bg-white text-(color:--color-n3-grey) hover:border-(color:--color-n3-grey) hover:text-(color:--color-n3-ink)"
                        )}
                      >
                        {pain.label}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Resumo "O que eu automatizo" */}
            <div className="mt-6 flex flex-col justify-between gap-5 rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5 lg:flex-row lg:items-center">
              <div className="flex-1">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  {siteConfig.nichesSection.automatesTitle}
                </p>
                <ul className="mt-3 grid gap-2.5 sm:grid-cols-3">
                  {activePain.automates.map((item) => (
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
                {activeNicheItem.ctaType === "route" ? (
                  <Link
                    href={activeNicheItem.ctaHref}
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(color:--color-n3-accent) px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <span>{activeNicheItem.ctaLabel}</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </Link>
                ) : (
                  <a
                    href={waLink(
                      `Oi Lucas, vim pelo seu portfólio e quero resolver "${activePain.label}" no segmento ${activeNicheItem.name}.`
                    )}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() =>
                      track("whatsapp_click", { origin: `workflow_${nicheId}_${activePain.id}` })
                    }
                    className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(color:--color-n3-accent) px-5 text-sm font-semibold text-white transition-transform hover:-translate-y-0.5"
                  >
                    <span>Quero esse fluxo</span>
                    <ArrowRight className="h-4 w-4" aria-hidden="true" />
                  </a>
                )}
              </div>
            </div>

            {/* Diagrama limpo em modo showcase */}
            <div className="mt-6">
              <WorkflowBlueprint
                key={`${nicheId}-${activePain.id}`}
                mode="showcase"
                title={activePain.title}
                initialGraph={activePain.graph}
                apps={WORKFLOW_APPS}
                agentTemplate={activePain.agentTemplate}
                style={WORKFLOW_THEME_STYLE}
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
