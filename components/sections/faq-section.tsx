"use client";

import React, { useState } from "react";
import { ChevronDown } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { FAQ_ITEMS } from "@/src/data/faq";

export function FaqSection() {
  const [openId, setOpenId] = useState<string | null>(FAQ_ITEMS[0]?.id ?? null);

  return (
    <section id="faq" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="mx-auto max-w-3xl">
            <div className="text-center">
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                Dúvidas frequentes
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="mt-2.5 text-base text-(color:--color-n3-grey)">
                Respostas diretas sobre prazos, segurança, LGPD e funcionamento no dia a dia.
              </p>
            </div>

            <div className="mt-8 space-y-3">
              {FAQ_ITEMS.map((item) => {
                const isOpen = openId === item.id;
                const panelId = `faq-panel-${item.id}`;
                const buttonId = `faq-btn-${item.id}`;

                return (
                  <div
                    key={item.id}
                    className="overflow-hidden rounded-2xl border border-(color:--color-n3-line) bg-white transition-colors"
                  >
                    <h3>
                      <button
                        id={buttonId}
                        type="button"
                        aria-expanded={isOpen}
                        aria-controls={panelId}
                        onClick={() => setOpenId(isOpen ? null : item.id)}
                        className="flex min-h-14 w-full items-center justify-between gap-4 px-5 py-4 text-left text-sm font-semibold text-(color:--color-n3-ink) hover:bg-(color:--color-n3-page)/50 sm:px-6 sm:text-base"
                      >
                        <span>{item.question}</span>
                        <ChevronDown
                          className={cn(
                            "h-4 w-4 shrink-0 text-(color:--color-n3-grey) transition-transform duration-200",
                            isOpen && "rotate-180 text-(color:--color-n3-accent)"
                          )}
                          aria-hidden="true"
                        />
                      </button>
                    </h3>
                    <div
                      id={panelId}
                      role="region"
                      aria-labelledby={buttonId}
                      hidden={!isOpen}
                      className="border-t border-(color:--color-n3-line)/60 px-5 py-4 text-sm leading-relaxed text-(color:--color-n3-grey) sm:px-6"
                    >
                      {item.answer}
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
