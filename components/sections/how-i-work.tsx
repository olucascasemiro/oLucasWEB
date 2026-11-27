import React from "react";
import { CheckCircle2 } from "lucide-react";
import { Reveal } from "@/components/ui/reveal";

const STAGES = [
  {
    num: "01",
    title: "Diagnóstico",
    whatIDo: "Mapeio seus canais, gargalos de resposta e regras da operação.",
    whatYouSend: "Como os contatos chegam hoje e quais dúvidas mais se repetem.",
    whatYouGet: "Escopo fechado, arquitetura do fluxo e orçamento transparente.",
    timeline: "TODO: definir prazo (ex.: 1 a 2 dias)",
  },
  {
    num: "02",
    title: "Construção",
    whatIDo: "Configuro as integrações, fluxos no n8n e regras do agente de IA.",
    whatYouSend: "Acessos às ferramentas e aprovação das respostas-padrão.",
    whatYouGet: "Automação testada em ambiente controlado antes de ir ao ar.",
    timeline: "TODO: definir prazo (ex.: 5 a 10 dias)",
  },
  {
    num: "03",
    title: "Operação assistida",
    whatIDo: "Coloco o sistema no ar e acompanho os primeiros atendimentos reais.",
    whatYouSend: "Feedback rápido sobre casos específicos da sua equipe.",
    whatYouGet: "Ajustes finos de tom, triagem e encaminhamento sem ruído.",
    timeline: "Primeiras semanas em produção",
  },
  {
    num: "04",
    title: "Evolução",
    whatIDo: "Expando o fluxo para novas etapas (follow-up, agenda, reativação).",
    whatYouSend: "Novas demandas conforme o volume do negócio cresce.",
    whatYouGet: "Operação cada vez mais previsível e documentada.",
    timeline: "Sob demanda",
  },
];

const DELIVERABLES = [
  "Documentação completa do fluxo",
  "Treinamento prático da equipe",
  "Suporte pós-implantação",
  "Você é dono das contas e dos dados",
];

export function HowIWorkSection() {
  return (
    <section id="como-funciona" className="py-14 sm:py-16 lg:py-20">
      <div className="n3-container">
        <Reveal>
          <div className="rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-10 lg:p-12">
            <div className="max-w-2xl">
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-accent)">
                Como eu trabalho
              </p>
              <h2 className="mt-1.5 text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
                Do diagnóstico à operação assistida
              </h2>
              <p className="mt-2.5 text-base text-(color:--color-n3-grey)">
                Um processo transparente para sua equipe saber exatamente o que acontece em cada etapa.
              </p>
            </div>

            <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
              {STAGES.map((stage) => (
                <div
                  key={stage.num}
                  className="flex flex-col justify-between rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5"
                >
                  <div>
                    <div className="flex items-center justify-between">
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-(color:--color-n3-ink) text-xs font-semibold text-(color:--color-n3-page)">
                        {stage.num}
                      </span>
                      <span className="text-[11px] font-medium text-(color:--color-n3-grey)">
                        {stage.timeline}
                      </span>
                    </div>

                    <h3 className="mt-4 text-lg font-semibold text-(color:--color-n3-ink)">
                      {stage.title}
                    </h3>

                    <dl className="mt-3 space-y-2.5 text-xs leading-relaxed">
                      <div>
                        <dt className="font-semibold text-(color:--color-n3-ink)">O que eu faço</dt>
                        <dd className="text-(color:--color-n3-grey)">{stage.whatIDo}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-(color:--color-n3-ink)">O que você passa</dt>
                        <dd className="text-(color:--color-n3-grey)">{stage.whatYouSend}</dd>
                      </div>
                      <div>
                        <dt className="font-semibold text-(color:--color-n3-ink)">O que você recebe</dt>
                        <dd className="text-(color:--color-n3-grey)">{stage.whatYouGet}</dd>
                      </div>
                    </dl>
                  </div>
                </div>
              ))}
            </div>

            {/* Bloco "O que você recebe" */}
            <div className="mt-8 rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page) p-5 sm:p-6">
              <p className="text-xs font-semibold uppercase tracking-wider text-(color:--color-n3-grey)">
                O que você recebe em qualquer projeto
              </p>
              <ul className="mt-3 grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
                {DELIVERABLES.map((item) => (
                  <li
                    key={item}
                    className="flex items-center gap-2 text-sm font-medium text-(color:--color-n3-ink)"
                  >
                    <CheckCircle2
                      className="h-4 w-4 shrink-0 text-(color:--color-n3-accent)"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
