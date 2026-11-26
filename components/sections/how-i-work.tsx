import React from "react";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig } from "@/lib/site";

export function HowIWorkSection() {
  return (
    <section id="como-funciona" className="py-10 sm:py-12 lg:py-14">
      <div className="n3-container">
        <Reveal>
          <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <h2 className="text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
                {siteConfig.about.howIWorkTitle}
              </h2>
              <p className="mt-2.5 text-base text-(color:--color-n3-grey)">
                Um processo direto, do entendimento da rotina até a operação assistida.
              </p>
            </div>

            <div className="mt-7 grid gap-4 sm:grid-cols-3 sm:gap-5">
              {siteConfig.about.steps.map((step) => (
                <div
                  key={step.num}
                  className="rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5"
                >
                  <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(color:--color-n3-ink) text-sm font-semibold text-(color:--color-n3-page)">
                    {step.num}
                  </span>
                  <h3 className="mt-3.5 text-lg font-semibold text-(color:--color-n3-ink)">
                    {step.title}
                  </h3>
                  <p className="mt-1.5 text-sm leading-relaxed text-(color:--color-n3-grey)">
                    {step.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
