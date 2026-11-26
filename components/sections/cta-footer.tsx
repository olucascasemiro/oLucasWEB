"use client";

import React from "react";
import Link from "next/link";
import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, waLink } from "@/lib/site";

export function CtaFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contato" className="py-10 sm:py-12 lg:py-14">
        <div className="n3-container">
          <Reveal>
            <FinalCtaBanner
              eyebrow="Próximo passo"
              heading={siteConfig.cta.title}
              body={siteConfig.cta.subtitle}
              primaryLabel={siteConfig.cta.buttonLabel}
              primaryHref={waLink(siteConfig.cta.whatsappText)}
              secondaryLabel="Ver segmentos"
              secondaryHref="#nichos"
            />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-(color:--color-n3-line) py-10">
        <div className="n3-container flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="text-base font-semibold text-(color:--color-n3-ink)">
              {siteConfig.brand.name}
            </p>
            <p className="mt-1 text-xs text-(color:--color-n3-grey)">
              © {year} {siteConfig.brand.name}. Todos os direitos reservados.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-5 text-sm text-(color:--color-n3-grey)">
            <Link
              href="/privacidade"
              className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
            >
              Política de privacidade
            </Link>
            <a
              href={siteConfig.brand.officialSite}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
            >
              {siteConfig.brand.officialDomainLabel}
            </a>
            {siteConfig.contact.instagram ? (
              <a
                href={siteConfig.contact.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
              >
                Instagram
              </a>
            ) : null}
            {siteConfig.contact.linkedin ? (
              <a
                href={siteConfig.contact.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-11 items-center transition-colors hover:text-(color:--color-n3-ink)"
              >
                LinkedIn
              </a>
            ) : null}
          </div>
        </div>
      </footer>
    </>
  );
}
