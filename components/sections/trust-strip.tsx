import React from "react";
import { CheckCircle2 } from "lucide-react";
import { TRUST_INDICATORS, TRUST_TOOLS } from "@/src/data/proof";

export function TrustStrip() {
  return (
    <section
      aria-label="Ferramentas e garantias operacionais"
      className="border-y border-(color:--color-n3-line) bg-white/80 py-6 sm:py-7"
    >
      <div className="n3-container flex flex-col items-start justify-between gap-6 lg:flex-row lg:items-center">
        {/* Ferramentas em escala neutra */}
        <div className="flex flex-wrap items-center gap-x-5 gap-y-2">
          <span className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
            Stack principal:
          </span>
          {TRUST_TOOLS.map((tool) => (
            <span
              key={tool.id}
              className="rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-3 py-1 text-xs font-medium text-(color:--color-n3-grey)"
            >
              {tool.name}
            </span>
          ))}
        </div>

        {/* 3 Indicadores verdadeiros */}
        <div className="grid w-full grid-cols-1 gap-3 sm:grid-cols-3 lg:w-auto lg:gap-6">
          {TRUST_INDICATORS.map((item) => (
            <div key={item.id} className="flex items-center gap-2.5">
              <CheckCircle2
                className="h-4 w-4 shrink-0 text-(color:--color-n3-accent)"
                aria-hidden="true"
              />
              <div>
                <p className="text-sm font-semibold leading-tight text-(color:--color-n3-ink)">
                  {item.label}
                </p>
                <p className="text-xs text-(color:--color-n3-grey)">
                  {item.detail}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
