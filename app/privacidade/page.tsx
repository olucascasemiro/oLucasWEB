import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";

export const metadata: Metadata = {
  title: "Política de Privacidade | Lucas Casemiro",
  description: "Política de privacidade e tratamento de dados pessoais (LGPD).",
};

export default function PrivacidadePage() {
  return (
    <div className="min-h-screen bg-(color:--color-n3-page) py-12 text-(color:--color-n3-ink) sm:py-16">
      <div className="n3-container max-w-3xl">
        <Link
          href="/"
          className="inline-flex min-h-11 items-center gap-2 text-sm font-medium text-(color:--color-n3-grey) hover:text-(color:--color-n3-ink)"
        >
          <ArrowLeft className="h-4 w-4" aria-hidden="true" />
          <span>Voltar para o início</span>
        </Link>

        <div className="mt-6 rounded-2xl border border-amber-300 bg-amber-50 px-5 py-3.5 text-sm font-medium text-amber-950">
          Modelo de referência. Revise com um profissional jurídico antes de publicar.
        </div>

        <article className="mt-8 space-y-6 rounded-3xl border border-(color:--color-n3-line) bg-white p-7 shadow-sm sm:p-10">
          <h1 className="text-2xl font-semibold tracking-tight sm:text-3xl">
            Política de Privacidade
          </h1>

          <p className="text-sm leading-relaxed text-(color:--color-n3-grey)">
            Esta Política de Privacidade descreve como os dados pessoais são tratados neste site, em conformidade com a Lei Geral de Proteção de Dados Pessoais (Lei nº 13.709/2018 — LGPD).
          </p>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">1. Controlador dos Dados</h2>
            <p className="text-sm leading-relaxed text-(color:--color-n3-grey)">
              Responsável: <strong>[PREENCHER: Nome completo ou Razão Social e CNPJ/CPF]</strong>.<br />
              E-mail para contato sobre privacidade: <strong>[PREENCHER: seu e-mail de contato]</strong>.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">2. Quais dados são tratados</h2>
            <p className="text-sm leading-relaxed text-(color:--color-n3-grey)">
              Este site institucional não armazena dados de formulários em banco de dados próprio. Quando você preenche o formulário de processo personalizado, as informações inseridas (nome, empresa/segmento e descrição do processo) são usadas apenas para montar a mensagem que você escolhe enviar diretamente pelo WhatsApp.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">3. Finalidade do tratamento</h2>
            <p className="text-sm leading-relaxed text-(color:--color-n3-grey)">
              Os dados compartilhados voluntariamente via WhatsApp ou e-mail têm como única finalidade responder à sua solicitação, realizar diagnóstico operacional e elaborar propostas comerciais.
            </p>
          </section>

          <section className="space-y-2">
            <h2 className="text-lg font-semibold">4. Direitos do titular</h2>
            <p className="text-sm leading-relaxed text-(color:--color-n3-grey)">
              Nos termos do art. 18 da LGPD, você pode solicitar a confirmação da existência de tratamento, acesso, correção ou eliminação dos seus dados pessoais a qualquer momento através do contato informado no item 1.
            </p>
          </section>
        </article>
      </div>
    </div>
  );
}
