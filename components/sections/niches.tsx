"use client";

import React, { useState, type CSSProperties } from "react";
import Link from "next/link";
import {
  ArrowRight,
  Building2,
  Check,
  HeartPulse,
  Info,
  ShoppingBag,
  Wrench,
} from "lucide-react";
import WorkflowBlueprint from "@/components/ui/interactive-workflow-blueprint";
import { cn } from "@/lib/utils";
import { NicheId, NicheItem, siteConfig, waLink } from "@/lib/site";
import { NICHE_WORKFLOWS, WORKFLOW_APPS } from "@/lib/workflows";
import { track } from "@/lib/track";

const WORKFLOW_THEME_STYLE = {
  "--color-background": "#f8f7f3",
  "--color-foreground": "#171717",
  "--color-card": "#ffffff",
  "--color-muted-foreground": "#74716c",
  "--color-border": "#d9d6d0",
  "--color-primary": "#ff7a2f",
  "--color-primary-foreground": "#171717",
  "--color-chart-2": "#171717",
  "--color-chart-3": "#d97706",
} as CSSProperties;

const ICONS = {
  HeartPulse,
  Building2,
  ShoppingBag,
  Wrench,
};

function DemoPanel({ niche }: { niche: NicheItem }) {
  const workflow = NICHE_WORKFLOWS[niche.id];
  const [name, setName] = useState("");
  const [company, setCompany] = useState("");
  const [processDesc, setProcessDesc] = useState("");
  const [error, setError] = useState("");

  const handleCustomSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (processDesc.trim().length < 20) {
      setError("Por favor, descreva o processo com pelo menos 20 caracteres.");
      return;
    }
    setError("");
    const msg = `Oi Lucas, vim pelo seu portfólio (Personalizado) e quero automatizar um processo.\n\nNome: ${name.trim()}\nEmpresa/Segmento: ${company.trim()}\nProcesso: ${processDesc.trim()}`;
    track("custom_form_submit", { company: company.trim() });
    window.open(waLink(msg), "_blank", "noopener,noreferrer");
  };

  return (
    <div
      id="painel-demonstracao"
      aria-live="polite"
      className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-8 lg:p-10"
    >
      {/* Rótulo fixo e visível */}
      <div className="mb-6 inline-flex items-center gap-2 rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-3.5 py-1.5 text-xs font-medium text-(color:--color-n3-grey)">
        <Info className="h-3.5 w-3.5 text-(color:--color-n3-accent)" aria-hidden="true" />
        <span>{siteConfig.nichesSection.illustrativeLabel}</span>
      </div>

      <div className="grid gap-8 lg:grid-cols-12 lg:items-start">
        {/* Esquerda: O que eu automatizo */}
        <div className="lg:col-span-5">
          <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
            {niche.name}
          </p>
          <h3 className="mt-2 text-xl font-semibold text-(color:--color-n3-ink) sm:text-2xl">
            {siteConfig.nichesSection.automatesTitle}
          </h3>

          <ul className="mt-5 space-y-3.5">
            {niche.automates.map((item) => (
              <li key={item} className="flex items-start gap-3 text-sm text-(color:--color-n3-ink) sm:text-base">
                <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-(color:--color-n3-accent)/20 text-(color:--color-n3-ink)">
                  <Check className="h-3.5 w-3.5" aria-hidden="true" />
                </span>
                <span>{item}</span>
              </li>
            ))}
          </ul>

          <div className="mt-7">
            {niche.ctaType === "route" ? (
              <Link
                href={niche.ctaHref}
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(color:--color-n3-ink) px-5 text-sm font-medium text-(color:--color-n3-page) transition-transform hover:-translate-y-0.5"
              >
                <span>{niche.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </Link>
            ) : niche.ctaType === "whatsapp" ? (
              <a
                href={waLink(niche.ctaHref)}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() =>
                  track("whatsapp_click", { origin: `panel_${niche.id}` })
                }
                className="inline-flex min-h-11 items-center gap-2 rounded-full bg-(color:--color-n3-ink) px-5 text-sm font-medium text-(color:--color-n3-page) transition-transform hover:-translate-y-0.5"
              >
                <span>{niche.ctaLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </a>
            ) : null}
          </div>
        </div>

        {/* Direita: Mock de WhatsApp OU Formulário Personalizado */}
        <div className="lg:col-span-7">
          {niche.id === "personalizado" ? (
            <form
              onSubmit={handleCustomSubmit}
              className="rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5 sm:p-6"
            >
              <h4 className="text-base font-semibold text-(color:--color-n3-ink)">
                {siteConfig.customForm.title}
              </h4>

              <div className="mt-4 grid gap-4 sm:grid-cols-2">
                <div>
                  <label
                    htmlFor="custom-name"
                    className="mb-1.5 block text-xs font-medium text-(color:--color-n3-ink)"
                  >
                    {siteConfig.customForm.nameLabel} *
                  </label>
                  <input
                    id="custom-name"
                    type="text"
                    required
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder={siteConfig.customForm.namePlaceholder}
                    className="min-h-11 w-full rounded-xl border border-(color:--color-n3-line) bg-white px-3.5 text-sm text-(color:--color-n3-ink) placeholder:text-(color:--color-n3-grey)/60"
                  />
                </div>

                <div>
                  <label
                    htmlFor="custom-company"
                    className="mb-1.5 block text-xs font-medium text-(color:--color-n3-ink)"
                  >
                    {siteConfig.customForm.companyLabel} *
                  </label>
                  <input
                    id="custom-company"
                    type="text"
                    required
                    value={company}
                    onChange={(e) => setCompany(e.target.value)}
                    placeholder={siteConfig.customForm.companyPlaceholder}
                    className="min-h-11 w-full rounded-xl border border-(color:--color-n3-line) bg-white px-3.5 text-sm text-(color:--color-n3-ink) placeholder:text-(color:--color-n3-grey)/60"
                  />
                </div>
              </div>

              <div className="mt-4">
                <label
                  htmlFor="custom-process"
                  className="mb-1.5 block text-xs font-medium text-(color:--color-n3-ink)"
                >
                  {siteConfig.customForm.processLabel} *
                </label>
                <textarea
                  id="custom-process"
                  required
                  minLength={20}
                  rows={3}
                  value={processDesc}
                  onChange={(e) => {
                    setProcessDesc(e.target.value);
                    if (error && e.target.value.trim().length >= 20) setError("");
                  }}
                  placeholder={siteConfig.customForm.processPlaceholder}
                  className="w-full rounded-xl border border-(color:--color-n3-line) bg-white p-3.5 text-sm text-(color:--color-n3-ink) placeholder:text-(color:--color-n3-grey)/60"
                />
                {error ? (
                  <p className="mt-1 text-xs font-medium text-red-700">{error}</p>
                ) : null}
              </div>

              <button
                type="submit"
                className="mt-4 inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-6 text-sm font-semibold text-(color:--color-n3-ink) transition-transform hover:-translate-y-0.5 sm:w-auto"
              >
                <span>{siteConfig.customForm.submitLabel}</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <p className="mt-3 text-xs text-(color:--color-n3-grey)">
                {siteConfig.customForm.disclaimer}
              </p>
            </form>
          ) : niche.conversation ? (
            <div className="overflow-hidden rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page)">
              <div className="flex items-center justify-between border-b border-(color:--color-n3-line) bg-white px-4 py-3">
                <div className="flex items-center gap-2">
                  <span className="h-2.5 w-2.5 rounded-full bg-emerald-600" aria-hidden="true" />
                  <span className="text-xs font-medium text-(color:--color-n3-ink)">
                    {niche.conversation.contactLabel}
                  </span>
                </div>
                <span className="rounded-full bg-(color:--color-n3-page) px-2.5 py-0.5 text-[11px] font-medium text-(color:--color-n3-grey)">
                  Ilustrativo
                </span>
              </div>

              <div className="flex flex-col gap-3 p-4 sm:p-5">
                {niche.conversation.messages.map((msg, idx) => (
                  <div
                    key={idx}
                    className={cn(
                      "flex max-w-[85%] flex-col gap-1",
                      msg.sender === "assistant" ? "self-end" : "self-start"
                    )}
                  >
                    <div
                      className={cn(
                        "rounded-2xl px-4 py-2.5 text-sm leading-relaxed",
                        msg.sender === "assistant"
                          ? "rounded-br-sm bg-(color:--color-n3-ink) text-(color:--color-n3-page)"
                          : "rounded-bl-sm border border-(color:--color-n3-line) bg-white text-(color:--color-n3-ink)"
                      )}
                    >
                      {msg.text}
                    </div>
                    <span
                      className={cn(
                        "text-[11px] text-(color:--color-n3-grey)",
                        msg.sender === "assistant" ? "text-right" : "text-left"
                      )}
                    >
                      {msg.time}
                    </span>
                  </div>
                ))}

                <div className="mt-2 flex justify-center">
                  <span className="rounded-full border border-(color:--color-n3-line) bg-white px-3.5 py-1 text-xs font-medium text-(color:--color-n3-ink)">
                    ✓ {niche.conversation.statusChip}
                  </span>
                </div>
              </div>
            </div>
          ) : null}
        </div>
      </div>

      {/* Fluxo visual interativo da automação do nicho */}
      <div className="mt-8 border-t border-(color:--color-n3-line) pt-8">
        <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
              Visão geral do fluxo
            </p>
            <h4 className="mt-1 text-lg font-semibold text-(color:--color-n3-ink) sm:text-xl">
              Como a automação funciona por trás
            </h4>
          </div>
          <p className="text-xs text-(color:--color-n3-grey) sm:text-sm">
            Arraste as etapas ou adicione integrações para simular o fluxo.
          </p>
        </div>

        <WorkflowBlueprint
          key={niche.id}
          title={workflow.title}
          initialGraph={workflow.graph}
          apps={WORKFLOW_APPS}
          agentTemplate={workflow.agentTemplate}
          style={WORKFLOW_THEME_STYLE}
        />
      </div>
    </div>
  );
}

export function NichesSection() {
  const [selectedId, setSelectedId] = useState<NicheId>("saude");
  const selectedNiche =
    siteConfig.niches.find((n) => n.id === selectedId) || siteConfig.niches[0];

  const handleSelect = (id: NicheId) => {
    setSelectedId(id);
    track("niche_select", { niche: id });
  };

  return (
    <section id="nichos" className="py-16 sm:py-20 lg:py-24">
      <div className="n3-container">
        <div className="max-w-2xl">
          <h2 className="text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
            {siteConfig.nichesSection.title}
          </h2>
          <p className="mt-3 text-base text-(color:--color-n3-grey) sm:text-lg">
            {siteConfig.nichesSection.subtitle}
          </p>
        </div>

        {/* Grid de 4 cards selecionáveis */}
        <div
          className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4"
          role="tablist"
          aria-label="Segmentos disponíveis"
        >
          {siteConfig.niches.map((niche) => {
            const Icon = ICONS[niche.icon];
            const isSelected = selectedId === niche.id;

            return (
              <div key={niche.id} className="flex flex-col gap-4">
                <div
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
                    "flex h-full cursor-pointer flex-col justify-between rounded-2xl border p-5 transition-all",
                    isSelected
                      ? "border-(color:--color-n3-ink) bg-white shadow-md"
                      : "border-(color:--color-n3-line) bg-white/60 hover:border-(color:--color-n3-grey) hover:bg-white"
                  )}
                >
                  <div>
                    <div className="flex items-center justify-between gap-2">
                      <span
                        className={cn(
                          "inline-flex h-10 w-10 items-center justify-center rounded-xl border",
                          isSelected
                            ? "border-(color:--color-n3-accent) bg-(color:--color-n3-accent)/15 text-(color:--color-n3-ink)"
                            : "border-(color:--color-n3-line) bg-(color:--color-n3-page) text-(color:--color-n3-ink)"
                        )}
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
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

                    <p className="mt-4 text-xs font-medium uppercase tracking-wider text-(color:--color-n3-grey)">
                      {niche.name}
                    </p>
                    <h3 className="mt-1.5 text-lg font-semibold leading-snug text-(color:--color-n3-ink)">
                      {niche.painTitle}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-(color:--color-n3-grey)">
                      {niche.supportText}
                    </p>
                  </div>

                  <div className="mt-5 pt-3">
                    {niche.ctaType === "route" ? (
                      <Link
                        href={niche.ctaHref}
                        onClick={(e) => e.stopPropagation()}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
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
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-line) decoration-2 underline-offset-4 hover:decoration-(color:--color-n3-ink)"
                      >
                        <span>{niche.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={(e) => {
                          e.stopPropagation();
                          handleSelect(niche.id);
                          const panel = document.getElementById("painel-demonstracao");
                          panel?.scrollIntoView({ behavior: "smooth" });
                        }}
                        className="inline-flex min-h-11 items-center gap-1.5 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
                      >
                        <span>{niche.ctaLabel}</span>
                        <ArrowRight className="h-4 w-4" aria-hidden="true" />
                      </button>
                    )}
                  </div>
                </div>

                {/* Mobile: painel aparece logo abaixo do card selecionado (acordeão) */}
                {isSelected ? (
                  <div className="lg:hidden">
                    <DemoPanel niche={niche} />
                  </div>
                ) : null}
              </div>
            );
          })}
        </div>

        {/* Desktop: painel único abaixo do grid */}
        <div className="mt-6 hidden lg:block">
          <DemoPanel niche={selectedNiche} />
        </div>
      </div>
    </section>
  );
}
