"use client";

import React from "react";
import Link from "next/link";
import FinalCtaBanner from "@/components/ui/final-cta-banner";
import { Reveal } from "@/components/ui/reveal";
import { siteConfig, waLink } from "@/lib/site";
import { track } from "@/lib/track";

export function CtaFooter() {
  const year = new Date().getFullYear();

  return (
    <>
      <section id="contato" className="py-14 sm:py-16 lg:py-20">
        <div className="n3-container">
          <Reveal>
            <FinalCtaBanner
              eyebrow="Diagnóstico gratuito · 20 a 30 minutos"
              heading="Vamos conversar sobre o seu processo?"
              body="Sem compromisso. Você sai com um próximo passo claro para automatizar o seu atendimento."
              primaryLabel="Agendar diagnóstico no WhatsApp"
              primaryHref={waLink("Oi Lucas, quero agendar meu diagnóstico gratuito de 20 a 30 minutos.")}
              secondaryLabel="Ver solução para clínicas"
              secondaryHref="/saude"
            />
          </Reveal>
        </div>
      </section>

      <footer className="border-t border-(color:--color-n3-line) bg-white py-12">
        <div className="n3-container">
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {/* Marca */}
            <div className="lg:col-span-2">
              <p className="text-base font-semibold text-(color:--color-n3-ink)">
                oLucasWEB · {siteConfig.brand.name}
              </p>
              <p className="mt-2 max-w-sm text-sm leading-relaxed text-(color:--color-n3-grey)">
                Automações de atendimento, integrações e agentes de inteligência artificial para empresas.
              </p>
              <p className="mt-3 text-xs font-medium text-(color:--color-n3-grey)">
                São Paulo — Brasil
              </p>
            </div>

            {/* Navegação */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-ink)">
                Navegação
              </p>
              <ul className="mt-3 space-y-2 text-sm text-(color:--color-n3-grey)">
                <li>
                  <a href="#nichos" className="hover:text-(color:--color-n3-ink)">
                    Segmentos
                  </a>
                </li>
                <li>
                  <a href="#como-funciona" className="hover:text-(color:--color-n3-ink)">
                    Como funciona
                  </a>
                </li>
                <li>
                  <a href="#sobre" className="hover:text-(color:--color-n3-ink)">
                    Sobre
                  </a>
                </li>
                <li>
                  <a href="#faq" className="hover:text-(color:--color-n3-ink)">
                    FAQ
                  </a>
                </li>
              </ul>
            </div>

            {/* Contato & Legal */}
            <div>
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-ink)">
                Contato &amp; Legal
              </p>
              <ul className="mt-3 space-y-2 text-sm text-(color:--color-n3-grey)">
                <li>
                  <a
                    href={waLink("Oi Lucas, vim pelo rodapé do oLucasWEB.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => track("whatsapp_click", { origin: "footer" })}
                    className="hover:text-(color:--color-n3-ink)"
                  >
                    WhatsApp
                  </a>
                </li>
                {siteConfig.contact.email ? (
                  <li>
                    <a
                      href={`mailto:${siteConfig.contact.email}`}
                      className="hover:text-(color:--color-n3-ink)"
                    >
                      {siteConfig.contact.email}
                    </a>
                  </li>
                ) : null}
                <li>
                  <Link href="/privacidade" className="hover:text-(color:--color-n3-ink)">
                    Política de privacidade
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          <div className="mt-10 flex flex-col items-start justify-between gap-2 border-t border-(color:--color-n3-line) pt-6 text-xs text-(color:--color-n3-grey) sm:flex-row sm:items-center">
            <p>© {year} oLucasWEB — {siteConfig.brand.name}. Todos os direitos reservados.</p>
            {/* TODO: adicionar CNPJ caso aplicável */}
          </div>
        </div>
      </footer>
    </>
  );
}
