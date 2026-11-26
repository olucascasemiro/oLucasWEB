"use client";

import React from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { ArrowDown, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="top"
        className="flex min-h-[calc(100dvh-var(--n3-nav-space,72px))] items-center py-12 sm:py-16 lg:py-20"
      >
        <div className="n3-container">
          <m.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: "easeOut" }}
            className="mx-auto max-w-4xl rounded-3xl border border-(color:--color-n3-line) bg-white/75 p-7 shadow-sm backdrop-blur-sm sm:p-12 lg:p-14"
          >
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-3.5 py-1.5 text-xs font-medium text-(color:--color-n3-grey)">
              <span
                className="h-2 w-2 rounded-full bg-(color:--color-n3-accent)"
                aria-hidden="true"
              />
              <span>{siteConfig.hero.eyebrow}</span>
            </div>

            {/* H1 */}
            <h1 className="mt-6 text-3xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-5xl lg:text-[3.25rem] lg:leading-[1.1]">
              {siteConfig.hero.title}
            </h1>

            {/* Subtexto */}
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-(color:--color-n3-grey) sm:text-lg">
              {siteConfig.hero.subtitle}
            </p>

            {/* CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href={siteConfig.hero.primaryHref}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-6 text-sm font-semibold text-(color:--color-n3-ink) transition-transform hover:-translate-y-0.5 sm:text-base"
              >
                <span>{siteConfig.hero.primaryCta}</span>
                <ArrowDown className="h-4 w-4" aria-hidden="true" />
              </a>

              <a
                href={waLink("Oi Lucas, vim pelo seu portfólio e quero conversar sobre automação.")}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => track("whatsapp_click", { origin: "hero" })}
                className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-6 text-sm font-medium text-(color:--color-n3-ink) transition-colors hover:border-(color:--color-n3-ink) sm:text-base"
              >
                <span>{siteConfig.hero.secondaryCta}</span>
                <ArrowUpRight className="h-4 w-4" aria-hidden="true" />
              </a>
            </div>

            {/* 3 Princípios (sem métricas falsas) */}
            <div className="mt-10 grid gap-3 border-t border-(color:--color-n3-line) pt-7 sm:grid-cols-3 sm:gap-5">
              {siteConfig.hero.principles.map((principle) => (
                <div
                  key={principle}
                  className="flex items-start gap-2.5 text-sm text-(color:--color-n3-grey)"
                >
                  <CheckCircle2
                    className="mt-0.5 h-4 w-4 shrink-0 text-(color:--color-n3-accent)"
                    aria-hidden="true"
                  />
                  <span>{principle}</span>
                </div>
              ))}
            </div>
          </m.div>
        </div>
      </section>
    </LazyMotion>
  );
}
