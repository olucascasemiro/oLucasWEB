import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "CONVERT IA | Automação de Atendimento no WhatsApp para Clínicas",
  description:
    "Automação de atendimento para clínicas e consultórios. Responda todo contato em menos de 1 minuto no WhatsApp e Instagram, organize pacientes e acompanhe agendamentos com LGPD.",
  alternates: {
    canonical: "/saude",
  },
  openGraph: {
    title: "CONVERT IA | Automação de Atendimento no WhatsApp para Clínicas",
    description:
      "Responda todo contato em menos de 1 minuto, 24h por dia, e saiba quantos viraram consulta. Solução administrativa para clínicas com LGPD.",
    url: "https://olucasweb.com.br/saude",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "CONVERT IA | Automação para Clínicas",
    description:
      "Atendimento inicial 24h no WhatsApp e Instagram para clínicas e consultórios.",
  },
};

const saudeJsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "BreadcrumbList",
      itemListElement: [
        {
          "@type": "ListItem",
          position: 1,
          name: "Início",
          item: "https://olucasweb.com.br",
        },
        {
          "@type": "ListItem",
          position: 2,
          name: "CONVERT IA — Saúde",
          item: "https://olucasweb.com.br/saude",
        },
      ],
    },
    {
      "@type": "SoftwareApplication",
      name: "CONVERT IA",
      applicationCategory: "BusinessApplication",
      operatingSystem: "Web",
      description:
        "Automação de atendimento inicial no WhatsApp e Instagram para clínicas e consultórios, com triagem administrativa e conformidade LGPD.",
      provider: {
        "@type": "Person",
        name: "Lucas Casemiro",
        url: "https://olucasweb.com.br",
      },
    },
  ],
};

export default function SaudeLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(saudeJsonLd) }}
      />
      {children}
    </>
  );
}
