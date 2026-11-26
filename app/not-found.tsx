import Link from "next/link";
import { ArrowLeft, MessageCircle } from "lucide-react";
import { waLink } from "@/lib/site";

export default function NotFound() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center bg-(color:--color-n3-page) px-5 py-16 text-(color:--color-n3-ink)">
      <div className="w-full max-w-lg rounded-3xl border border-(color:--color-n3-line) bg-white p-8 text-center shadow-sm sm:p-12">
        <span className="inline-flex items-center gap-2 rounded-full border border-(color:--color-n3-line) bg-(color:--color-n3-page) px-3.5 py-1 text-xs font-medium text-(color:--color-n3-grey)">
          <span className="h-2 w-2 rounded-full bg-(color:--color-n3-accent)" />
          Página não encontrada
        </span>

        <p className="mt-6 text-6xl font-bold tracking-tight text-(color:--color-n3-ink) sm:text-7xl">
          404
        </p>

        <h1 className="mt-4 text-xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-2xl">
          Ops! Parece que você chegou a uma página que não existe.
        </h1>

        <p className="mt-3 text-sm leading-relaxed text-(color:--color-n3-grey) sm:text-base">
          Mas não se preocupe. Vamos ajudar você a encontrar o caminho de volta.
        </p>

        <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full bg-(color:--color-n3-accent) px-6 py-2.5 text-sm font-semibold text-white transition-opacity hover:opacity-90 sm:w-auto"
          >
            <ArrowLeft className="h-4 w-4" aria-hidden="true" />
            <span>Voltar para o início</span>
          </Link>

          <a
            href={waLink("Oi Lucas, cheguei a uma página 404 no oLucasWEB e gostaria de falar com você.")}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-11 w-full items-center justify-center gap-2 rounded-full border border-(color:--color-n3-line) bg-white px-6 py-2.5 text-sm font-semibold text-(color:--color-n3-ink) transition-colors hover:border-(color:--color-n3-ink) sm:w-auto"
          >
            <MessageCircle className="h-4 w-4 text-(color:--color-n3-accent)" aria-hidden="true" />
            <span>Falar conosco</span>
          </a>
        </div>
      </div>
    </main>
  );
}
