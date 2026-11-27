"use client";

import React, { useState } from "react";
import { LazyMotion, domAnimation, m, useReducedMotion } from "motion/react";
import { ArrowRight, MessageCircle, MousePointerClick } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

function IsometricLayers({ reducedMotion }: { reducedMotion: boolean | null }) {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className="relative mx-auto flex w-full max-w-[480px] flex-col items-center justify-center py-6 sm:py-10"
      onMouseEnter={() => setExpanded(true)}
      onMouseLeave={() => setExpanded(false)}
      onClick={() => setExpanded((prev) => !prev)}
      role="button"
      tabIndex={0}
      aria-label="Animação em camadas da automação: passe o mouse ou toque para separar as camadas"
      aria-pressed={expanded}
      onKeyDown={(e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault();
          setExpanded((prev) => !prev);
        }
      }}
    >
      {/* Brilho suave laranja atrás da pilha */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 h-64 w-64 -translate-x-1/2 -translate-y-1/2 rounded-full bg-(color:--color-n3-accent)/15 blur-3xl transition-opacity duration-500"
        style={{ opacity: expanded ? 0.95 : 0.6 }}
      />

      {/* Cena isométrica */}
      <div className="relative flex h-[300px] w-full items-center justify-center sm:h-[340px]">
        {/* Anéis orbitais isométricos */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 flex items-center justify-center"
        >
          <div
            className="h-[290px] w-[290px] rounded-full border border-(color:--color-n3-line)/70 sm:h-[330px] sm:w-[330px]"
            style={{ transform: "rotateX(64deg)" }}
          />
          <div
            className="absolute h-[360px] w-[360px] rounded-full border border-dashed border-(color:--color-n3-line)/55 sm:h-[410px] sm:w-[410px]"
            style={{ transform: "rotateX(64deg)" }}
          />
        </div>

        {/* Esferas flutuantes ao redor */}
        <m.span
          aria-hidden="true"
          animate={reducedMotion ? undefined : { y: [0, -8, 0] }}
          transition={{ duration: 4.2, repeat: Infinity, ease: "easeInOut" }}
          className="pointer-events-none absolute left-[12%] top-[24%] h-2.5 w-2.5 rounded-full bg-gradient-to-br from-(color:--color-n3-accent) to-amber-300 shadow-sm"
        />
        <m.span
          aria-hidden="true"
          animate={reducedMotion ? undefined : { y: [0, 7, 0] }}
          transition={{ duration: 3.6, repeat: Infinity, ease: "easeInOut", delay: 0.6 }}
          className="pointer-events-none absolute right-[14%] top-[18%] h-2 w-2 rounded-full bg-(color:--color-n3-accent)/80 shadow-sm"
        />
        <m.span
          aria-hidden="true"
          animate={reducedMotion ? undefined : { y: [0, -6, 0] }}
          transition={{ duration: 4.8, repeat: Infinity, ease: "easeInOut", delay: 1.1 }}
          className="pointer-events-none absolute bottom-[22%] right-[16%] h-3 w-3 rounded-full bg-gradient-to-br from-(color:--color-n3-accent) to-orange-300 shadow-sm"
        />

        {/* Pilha de 3 camadas isométricas */}
        <m.div
          animate={reducedMotion ? undefined : { y: expanded ? -4 : [0, -5, 0] }}
          transition={
            expanded
              ? { duration: 0.35, ease: "easeOut" }
              : { duration: 5, repeat: Infinity, ease: "easeInOut" }
          }
          className="relative h-48 w-48 sm:h-56 sm:w-56"
          style={{
            transformStyle: "preserve-3d",
            perspective: "1100px",
          }}
        >
          {/* Camada 3 (Base): Integrações & Dados */}
          <m.div
            animate={{
              y: expanded ? 48 : 22,
              scale: expanded ? 0.98 : 1,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="absolute inset-0 flex items-end justify-between rounded-[28px] border border-(color:--color-n3-line) bg-[#efede7] p-4 shadow-[0_22px_38px_-16px_rgba(23,23,23,0.22)]"
            style={{
              transform: "rotateX(56deg) rotateZ(-45deg)",
            }}
          >
            <div className="flex gap-1.5">
              <span className="h-1.5 w-4 rounded-full bg-(color:--color-n3-grey)/30" />
              <span className="h-1.5 w-1.5 rounded-full bg-(color:--color-n3-accent)" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
              CRM &amp; Planilhas
            </span>
          </m.div>

          {/* Camada 2 (Meio): Agente de IA & Regras */}
          <m.div
            animate={{
              y: expanded ? 4 : 6,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="absolute inset-0 flex items-end justify-between rounded-[28px] border border-(color:--color-n3-accent)/45 bg-white p-4 shadow-[0_18px_32px_-14px_rgba(255,122,47,0.28)]"
            style={{
              transform: "rotateX(56deg) rotateZ(-45deg)",
            }}
          >
            <div className="flex gap-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-(color:--color-n3-accent)" />
              <span className="h-1.5 w-1.5 rounded-full bg-(color:--color-n3-accent)/50" />
              <span className="h-1.5 w-5 rounded-full bg-(color:--color-n3-ink)/15" />
            </div>
            <span className="text-[10px] font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
              Agente IA · n8n
            </span>
          </m.div>

          {/* Camada 1 (Topo): Atendimento & Canais */}
          <m.div
            animate={{
              y: expanded ? -42 : -12,
            }}
            transition={{ type: "spring", stiffness: 220, damping: 22 }}
            className="absolute inset-0 flex items-center justify-center rounded-[28px] border border-(color:--color-n3-line) bg-white/95 p-5 shadow-[0_20px_36px_-18px_rgba(23,23,23,0.2)]"
            style={{
              transform: "rotateX(56deg) rotateZ(-45deg)",
            }}
          >
            {/* Moldura interna recuada */}
            <div className="flex h-full w-full items-center justify-center rounded-[20px] border border-(color:--color-n3-line)/70 bg-(color:--color-n3-page)/60">
              {/* Emblema central de 4 módulos (estilo camada ativa) */}
              <div className="grid grid-cols-2 gap-1.5">
                <span className="h-5 w-5 rounded-md rounded-br-xs bg-(color:--color-n3-accent) shadow-xs" />
                <span className="h-5 w-5 rounded-md rounded-bl-xs bg-(color:--color-n3-accent)/85 shadow-xs" />
                <span className="h-5 w-5 rounded-md rounded-tr-xs bg-(color:--color-n3-accent)/85 shadow-xs" />
                <span className="h-5 w-5 rounded-md rounded-tl-xs bg-(color:--color-n3-accent) shadow-xs" />
              </div>
            </div>
          </m.div>
        </m.div>

        {/* Rótulos laterais que aparecem ao expandir as camadas */}
        <div
          aria-hidden={!expanded}
          className={`pointer-events-none absolute right-0 top-1/2 hidden -translate-y-1/2 flex-col gap-5 transition-all duration-300 sm:flex ${
            expanded ? "translate-x-0 opacity-100" : "translate-x-2 opacity-0"
          }`}
        >
          <div className="rounded-xl border border-(color:--color-n3-line) bg-white/95 px-3 py-1.5 text-xs shadow-xs">
            <span className="font-semibold text-(color:--color-n3-ink)">1. Canais</span>
            <span className="ml-1.5 text-(color:--color-n3-grey)">WhatsApp</span>
          </div>
          <div className="rounded-xl border border-(color:--color-n3-accent)/40 bg-white/95 px-3 py-1.5 text-xs shadow-xs">
            <span className="font-semibold text-(color:--color-n3-accent)">2. Automação</span>
            <span className="ml-1.5 text-(color:--color-n3-grey)">Triagem IA</span>
          </div>
          <div className="rounded-xl border border-(color:--color-n3-line) bg-white/95 px-3 py-1.5 text-xs shadow-xs">
            <span className="font-semibold text-(color:--color-n3-ink)">3. Dados</span>
            <span className="ml-1.5 text-(color:--color-n3-grey)">CRM / Agenda</span>
          </div>
        </div>
      </div>

      {/* Legenda discreta abaixo — oculta no mobile */}
      <p className="mt-1 hidden items-center gap-1.5 text-xs text-(color:--color-n3-grey) sm:inline-flex">
        <MousePointerClick className="h-3.5 w-3.5 text-(color:--color-n3-accent)" aria-hidden="true" />
        <span>
          {expanded
            ? "Camadas: Canais → Agente IA → CRM e Planilhas"
            : "Passe o mouse para ver as camadas"}
        </span>
      </p>
    </div>
  );
}

export function Hero() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <LazyMotion features={domAnimation}>
      <section
        id="top"
        className="relative flex min-h-[88dvh] items-center overflow-hidden bg-white/55 pt-24 pb-10 sm:pt-28 sm:pb-12"
      >
        {/* Background quadriculado branco com linhas finas atrás */}
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0"
          style={{
            backgroundImage:
              "linear-gradient(to right, rgba(23, 23, 23, 0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(23, 23, 23, 0.05) 1px, transparent 1px)",
            backgroundSize: "42px 42px",
            maskImage:
              "radial-gradient(ellipse 88% 78% at 55% 45%, #000 45%, transparent 100%)",
            WebkitMaskImage:
              "radial-gradient(ellipse 88% 78% at 55% 45%, #000 45%, transparent 100%)",
          }}
        />

        <div className="n3-container relative z-10">
          <div className="grid items-center gap-8 lg:grid-cols-12 lg:gap-8">
            {/* Esquerda no desktop / Embaixo no mobile: Texto e CTAs */}
            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: "easeOut" }}
              className="order-2 lg:order-1 lg:col-span-6"
            >
              {/* Eyebrow */}
              <div className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-[0.14em] text-(color:--color-n3-grey)">
                <span
                  className="h-2 w-2 rounded-full bg-(color:--color-n3-accent)"
                  aria-hidden="true"
                />
                <span>{siteConfig.hero.eyebrow}</span>
              </div>

              {/* H1 */}
              <h1 className="mt-5 text-4xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-5xl lg:text-[3.5rem] lg:leading-[1.07]">
                Automações que tiram o trabalho repetitivo{" "}
                <span className="text-(color:--color-n3-accent)">do seu negócio.</span>
              </h1>

              {/* Subtexto */}
              <p className="mt-5 max-w-xl text-base leading-relaxed text-(color:--color-n3-grey) sm:text-lg">
                {siteConfig.hero.subtitle}
              </p>

              {/* Linha de prova curta e verdadeira */}
              <p className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-(color:--color-n3-ink)">
                <span className="h-1.5 w-1.5 rounded-full bg-(color:--color-n3-accent)" aria-hidden="true" />
                <span>Atendimento 24h no WhatsApp para clínicas e consultórios</span>
              </p>

              {/* CTAs */}
              <div className="mt-8 flex flex-wrap items-center gap-3.5">
                <a
                  href={waLink("Oi Lucas, quero agendar um diagnóstico gratuito para meu negócio.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => track("whatsapp_click", { origin: "hero" })}
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-6 text-sm font-semibold text-white shadow-sm transition-all hover:-translate-y-0.5 hover:brightness-105 sm:text-base"
                >
                  <MessageCircle className="h-4 w-4" aria-hidden="true" />
                  <span>Agendar diagnóstico gratuito</span>
                </a>

                <a
                  href="#como-funciona"
                  className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-(color:--color-n3-line) bg-white px-6 text-sm font-medium text-(color:--color-n3-ink) shadow-2xs transition-colors hover:border-(color:--color-n3-ink) sm:text-base"
                >
                  <span>Ver como funciona</span>
                  <ArrowRight className="h-4 w-4 text-(color:--color-n3-grey)" aria-hidden="true" />
                </a>
              </div>
            </m.div>

            {/* Direita no desktop / Em cima no mobile: Animação de camadas */}
            {/* TODO: substituir ou complementar com foto do Lucas ou GIF/vídeo curto de uma conversa real */}
            <m.div
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.55, ease: "easeOut", delay: 0.08 }}
              className="order-1 lg:order-2 lg:col-span-6"
            >
              <IsometricLayers reducedMotion={prefersReducedMotion} />
            </m.div>
          </div>
        </div>
      </section>
    </LazyMotion>
  );
}
