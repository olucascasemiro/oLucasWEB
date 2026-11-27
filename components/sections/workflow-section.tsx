"use client";

import React, { useState, type CSSProperties } from "react";
import WorkflowBlueprint from "@/components/ui/interactive-workflow-blueprint";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { NicheId, siteConfig } from "@/lib/site";
import { NICHE_PAIN_WORKFLOWS, WORKFLOW_APPS } from "@/lib/workflows";
import { track } from "@/lib/track";

const WORKFLOW_THEME_STYLE = {
  "--color-background": "#f8f7f3",
  "--color-foreground": "#171717",
  "--color-card": "#ffffff",
  "--color-muted-foreground": "#74716c",
  "--color-border": "#d9d6d0",
  "--color-primary": "#16a34a",
  "--color-primary-foreground": "#ffffff",
  "--color-chart-2": "#171717",
  "--color-chart-3": "#15803d",
} as CSSProperties;

export function WorkflowSection() {
  const [nicheId, setNicheId] = useState<NicheId>("saude");
  const nicheConfig = NICHE_PAIN_WORKFLOWS[nicheId];
  const activePain = nicheConfig.pains[0];

  const handleSelectNiche = (id: NicheId) => {
    setNicheId(id);
    track("workflow_niche_select", { niche: id });
  };

  return (
    <section id="fluxo" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-8 lg:p-10">
            <div className="flex flex-col gap-5 border-b border-(color:--color-n3-line) pb-6 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-xl">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                  Arquitetura do fluxo
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-3xl">
                  Como a automação funciona por trás
                </h2>
                <p className="mt-2 text-sm text-(color:--color-n3-grey) sm:text-base">
                  Veja o caminho de cada mensagem: do primeiro contato no WhatsApp até o registro organizado para a sua equipe.
                </p>
              </div>

              {/* Único seletor: segmento */}
              <div className="flex flex-wrap gap-2" role="group" aria-label="Escolher segmento">
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

            {/* Fluxo React Flow compacto */}
            <div className="mt-6" style={WORKFLOW_THEME_STYLE}>
              <WorkflowBlueprint
                key={`${nicheId}-${activePain.id}`}
                initialGraph={activePain.graph}
                apps={WORKFLOW_APPS}
                title={activePain.label}
                animated
                className="min-h-[340px] sm:min-h-[380px]"
              />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
