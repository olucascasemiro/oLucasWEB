import React from "react";
import { siteConfig } from "@/lib/site";

export function HowIWorkSection() {
  return (
    <section id="como-funciona" className="py-12 sm:py-16 lg:py-20">
      <div className="n3-container">
        <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-7 shadow-sm sm:p-10 lg:p-14">
          <div className="max-w-2xl">
            <h2 className="text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
              {siteConfig.about.howIWorkTitle}
            </h2>
            <p className="mt-3 text-base text-(color:--color-n3-grey)">
              Um processo direto, do entendimento da rotina até a operação assistida.
            </p>
          </div>

          <div className="mt-8 grid gap-4 sm:grid-cols-3 sm:gap-6">
            {siteConfig.about.steps.map((step) => (
              <div
                key={step.num}
                className="rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-6"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(color:--color-n3-ink) text-sm font-semibold text-(color:--color-n3-page)">
                  {step.num}
                </span>
                <h3 className="mt-4 text-lg font-semibold text-(color:--color-n3-ink)">
                  {step.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-(color:--color-n3-grey)">
                  {step.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
