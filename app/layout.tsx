import type { Metadata, Viewport } from "next";
import Script from "next/script";
import { GA_ID } from "@/lib/track";
import "@fontsource-variable/onest";
import "./globals.css";

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#16a34a",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://olucasweb.com.br"),
  title: "oLucasWEB | Lucas Casemiro — Automações, IA e Soluções Digitais",
  description:
    "Hub de soluções digitais, desenvolvimento web, automação de processos e inteligência artificial para empresas em São Paulo e em todo o Brasil.",
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    title: "oLucasWEB | Lucas Casemiro — Automações, IA e Soluções Digitais",
    description:
      "Automações que tiram o trabalho repetitivo do seu negócio. Atendimento, follow-up, integrações e agentes de IA sob medida.",
    url: "https://olucasweb.com.br",
    siteName: "oLucasWEB",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "oLucasWEB | Lucas Casemiro — Automações e IA para negócios",
    description:
      "Automações de atendimento, follow-up, desenvolvimento web e IA para empresas.",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebSite",
      "@id": "https://olucasweb.com.br/#website",
      url: "https://olucasweb.com.br",
      name: "oLucasWEB",
      description:
        "Hub de soluções digitais, automação de processos, desenvolvimento web e inteligência artificial para negócios.",
      inLanguage: "pt-BR",
      publisher: { "@id": "https://olucasweb.com.br/#service" },
    },
    {
      "@type": "ProfessionalService",
      "@id": "https://olucasweb.com.br/#service",
      name: "oLucasWEB — Lucas Casemiro",
      url: "https://olucasweb.com.br",
      description:
        "Desenvolvimento web, automações de atendimento no WhatsApp, integrações digitais e agentes de inteligência artificial para empresas.",
      founder: {
        "@type": "Person",
        name: "Lucas Casemiro",
      },
      areaServed: {
        "@type": "City",
        name: "São Paulo",
        address: {
          "@type": "PostalAddress",
          addressLocality: "São Paulo",
          addressRegion: "SP",
          addressCountry: "BR",
        },
      },
      serviceType: [
        "Automação de Processos",
        "Inteligência Artificial para Empresas",
        "Desenvolvimento Web",
        "Integrações Digitais",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        {GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga4-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);}
                gtag('js', new Date());
                gtag('config', '${GA_ID}');
              `}
            </Script>
          </>
        ) : null}
      </body>
    </html>
  );
}
