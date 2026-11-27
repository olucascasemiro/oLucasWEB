import React from "react";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";
import { waLink } from "@/lib/site";

const TOOLS = [
  "n8n",
  "WhatsApp Business API",
  "Google Sheets",
  "Integrações & Webhooks",
  "Agentes de IA",
];

export function AboutSection() {
  const photoExists = fs.existsSync(
    path.join(process.cwd(), "public", "lucas.jpg")
  );

  return (
    <section id="sobre" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
            {/* Foto */}
            <div className="lg:col-span-5">
              {photoExists ? (
                <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page)">
                  <Image
                    src="/lucas.jpg"
                    alt="Lucas Casemiro, especialista em automações e inteligência artificial"
                    fill
                    sizes="(max-width: 1024px) 100vw, 420px"
                    className="object-cover object-top"
                  />
                </div>
              ) : (
                <div
                  aria-label="Iniciais Lucas Casemiro"
                  className="flex aspect-[4/5] w-full max-w-md items-center justify-center rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) text-5xl font-semibold tracking-tight text-(color:--color-n3-ink)"
                >
                  LC
                </div>
              )}
            </div>

            {/* Texto */}
            <div className="flex flex-col justify-center lg:col-span-7">
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                Sobre
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
                Quem está por trás das automações
              </h2>

              <div className="mt-4 space-y-3.5 text-base leading-relaxed text-(color:--color-n3-grey)">
                <p>
                  Sou Lucas Casemiro, especialista em automações de atendimento e inteligência artificial aplicadas a negócios em São Paulo.
                </p>
                <p>
                  Comecei criando fluxos para eliminar tarefas manuais e repetitivas no atendimento e na organização de dados, conectando canais como WhatsApp, planilhas e sistemas internos.
                </p>
                <p>
                  Hoje ajudo clínicas, consultórios e empresas de serviços a responder mais rápido, organizar contatos e operar com previsibilidade — sem substituir a equipe humana.
                </p>
              </div>

              <div className="mt-6">
                <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                  Ferramentas que domino
                </p>
                <div className="mt-2.5 flex flex-wrap gap-2">
                  {TOOLS.map((tool) => (
                    <span
                      key={tool}
                      className="rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-3 py-1 text-xs font-medium text-(color:--color-n3-ink)"
                    >
                      {tool}
                    </span>
                  ))}
                </div>
              </div>

              {/* TODO: adicionar credenciais ou certificados reais quando disponíveis */}

              <div className="mt-7 border-t border-(color:--color-n3-line) pt-5">
                <a
                  href={waLink("Oi Lucas, li sobre o seu trabalho e quero conversar sobre uma automação.")}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex min-h-11 items-center gap-2 text-sm font-semibold text-(color:--color-n3-ink) underline decoration-(color:--color-n3-accent) decoration-2 underline-offset-4 hover:opacity-80"
                >
                  <span>Conversar diretamente com o Lucas</span>
                  <ArrowRight className="h-4 w-4" aria-hidden="true" />
                </a>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
