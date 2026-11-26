import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONVERT IA | Automação de Atendimento no WhatsApp para Clínicas",
  description:
    "Automação de atendimento para clínicas e consultórios. Responda todo contato em menos de 1 minuto no WhatsApp e Instagram, organize pacientes e acompanhe agendamentos com LGPD.",
};

export default function SaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
