import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { cn } from "@/lib/utils";
import { getVisibleTestimonials } from "@/src/data/testimonials";

function getInitials(name: string): string {
  const parts = name.trim().split(/\s+/);
  if (parts.length === 1) return parts[0].slice(0, 2).toUpperCase();
  return `${parts[0][0] ?? ""}${parts[parts.length - 1][0] ?? ""}`.toUpperCase();
}

export function Testimonials() {
  const items = getVisibleTestimonials();
  if (items.length === 0) return null;

  return (
    <section id="depoimentos" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="max-w-2xl">
            <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
              Depoimentos
            </p>
            <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
              O que dizem quem já automatizou
            </h2>
            <p className="mt-2.5 text-base text-(color:--color-n3-grey)">
              Relatos reais de operações que ganharam agilidade no atendimento e organização.
            </p>
          </div>

          <div className="mt-8 grid grid-cols-1 gap-4 md:grid-cols-3">
            {items.map((item) => (
              <article
                key={item.id}
                className={cn(
                  "flex flex-col justify-between rounded-2xl border border-(color:--color-n3-line) bg-white p-6 shadow-xs",
                  item.isPlaceholder && "opacity-75"
                )}
              >
                <div>
                  {item.isPlaceholder ? (
                    <span className="mb-3 inline-block rounded-full border border-amber-300 bg-amber-50 px-2.5 py-0.5 text-[11px] font-semibold text-amber-900">
                      EXEMPLO — substituir por depoimento real
                    </span>
                  ) : null}

                  <p
                    aria-hidden="true"
                    className="font-serif text-4xl leading-none text-(color:--color-n3-accent)/40"
                  >
                    “
                  </p>
                  <p className="mt-2 text-sm leading-relaxed text-(color:--color-n3-ink)">
                    {item.quote}
                  </p>
                </div>

                <div className="mt-6 flex items-center justify-between gap-3 border-t border-(color:--color-n3-line) pt-4">
                  <div className="flex items-center gap-3">
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-(color:--color-n3-page) text-xs font-semibold text-(color:--color-n3-ink) border border-(color:--color-n3-line)">
                      {getInitials(item.name)}
                    </div>
                    <div>
                      <p className="text-sm font-semibold text-(color:--color-n3-ink)">
                        {item.name}
                      </p>
                      <p className="text-xs text-(color:--color-n3-grey)">
                        {item.role}
                      </p>
                    </div>
                  </div>
                  <span className="rounded-full bg-(color:--color-n3-page) px-2.5 py-1 text-[11px] font-medium text-(color:--color-n3-grey)">
                    {item.segment}
                  </span>
                </div>
              </article>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
