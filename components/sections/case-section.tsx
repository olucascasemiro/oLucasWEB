import React from "react";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { CONVERT_IA_CASE } from "@/src/data/proof";

export function CaseSection() {
  return (
    <section id="case" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="flex flex-col justify-between gap-4 border-b border-(color:--color-n3-line) pb-6 sm:flex-row sm:items-end">
              <div>
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                  {CONVERT_IA_CASE.eyebrow}
                </p>
                <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-3xl">
                  {CONVERT_IA_CASE.title}
                </h2>
              </div>

              <Link
                href={CONVERT_IA_CASE.ctaHref}
                className="inline-flex min-h-11 shrink-0 items-center gap-2 rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-5 text-sm font-semibold text-(color:--color-n3-ink) transition-colors hover:border-(color:--color-n3-ink)"
              >
                <span>{CONVERT_IA_CASE.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            </div>

            <div className="mt-7 grid gap-5 md:grid-cols-3">
              <div className="rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  1. Problema
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-(color:--color-n3-ink)">
                  {CONVERT_IA_CASE.problem}
                </p>
              </div>

              <div className="rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  2. O que foi feito
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-(color:--color-n3-ink)">
                  {CONVERT_IA_CASE.solution}
                </p>
              </div>

              <div className="rounded-2xl border border-(color:--color-n3-accent)/40 bg-(color:--color-n3-accent)/5 p-5">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                  3. Resultado
                </p>
                <p className="mt-2.5 text-sm leading-relaxed text-(color:--color-n3-ink)">
                  {CONVERT_IA_CASE.hasRealResult
                    ? CONVERT_IA_CASE.resultReal
                    : CONVERT_IA_CASE.resultPlaceholder}
                </p>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
