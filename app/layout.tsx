import type { Metadata } from "next";
import { Onest } from "next/font/google";
import Script from "next/script";
import { GA_ID } from "@/lib/track";
import "./globals.css";

const onest = Onest({
  subsets: ["latin"],
  weight: ["400", "500", "600"],
  variable: "--font-n3-sans",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Lucas Casemiro | Automações e IA para negócios",
  description:
    "Eu desenho e implanto automações de atendimento, follow-up e processos para negócios.",
  openGraph: {
    title: "Lucas Casemiro | Automações e IA para negócios",
    description:
      "Automações que tiram o trabalho repetitivo do seu negócio. Escolha seu segmento para ver como funciona.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Casemiro | Automações e IA para negócios",
    description:
      "Automações de atendimento, follow-up e processos para negócios.",
  },
  icons: {
    icon: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32'%3E%3Crect width='32' height='32' rx='8' fill='%23171717'/%3E%3Ctext x='50%25' y='54%25' dominant-baseline='middle' text-anchor='middle' font-family='sans-serif' font-weight='700' font-size='15' fill='%23f8f7f3'%3ELC%3C/text%3E%3C/svg%3E",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR" className={onest.variable}>
      <body className="min-h-screen antialiased">
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
