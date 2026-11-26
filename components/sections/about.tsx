import React from "react";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { CheckCircle2 } from "lucide-react";
import { siteConfig, waLink } from "@/lib/site";

export function AboutSection() {
  const photoExists = fs.existsSync(
    path.join(process.cwd(), "public", "lucas.jpg")
  );

  const hasContactLinks =
    Boolean(siteConfig.contact.whatsapp) ||
    Boolean(siteConfig.contact.instagram) ||
    Boolean(siteConfig.contact.linkedin) ||
    Boolean(siteConfig.contact.email);

  return (
    <section id="sobre" className="py-16 sm:py-20 lg:py-24">
      <div className="n3-container">
        <div className="grid gap-10 rounded-3xl border border-(color:--color-n3-line) bg-white p-7 shadow-sm sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-14">
          {/* Foto */}
          <div className="lg:col-span-5">
            {photoExists ? (
              <div className="relative aspect-[4/5] w-full max-w-md overflow-hidden rounded-2xl border border-(color:--color-n3-line) bg-(color:--color-n3-page)">
                <Image
                  src="/lucas.jpg"
                  alt="Lucas Casemiro"
                  fill
                  sizes="(max-width: 1024px) 100vw, 420px"
                  className="object-cover"
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
            <h2 className="text-2xl font-semibold tracking-tight text-(color:--color-n3-ink) sm:text-4xl">
              {siteConfig.about.title}
            </h2>

            <p className="mt-5 text-base leading-relaxed text-(color:--color-n3-grey) sm:text-lg">
              {siteConfig.about.bio}
            </p>

            {/* Princípios */}
            <div className="mt-8">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-(color:--color-n3-ink)">
                {siteConfig.about.principlesTitle}
              </h3>
              <ul className="mt-3 space-y-2.5">
                {siteConfig.about.principles.map((item) => (
                  <li
                    key={item}
                    className="flex items-start gap-2.5 text-sm text-(color:--color-n3-ink)"
                  >
                    <CheckCircle2
                      className="mt-0.5 h-4 w-4 shrink-0 text-(color:--color-n3-accent)"
                      aria-hidden="true"
                    />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Links de contato condicionais */}
            {hasContactLinks ? (
              <div className="mt-8 flex flex-wrap gap-3 border-t border-(color:--color-n3-line) pt-6 text-sm font-medium">
                {siteConfig.contact.whatsapp ? (
                  <a
                    href={waLink("Oi Lucas, vim pelo seu portfólio.")}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-(color:--color-n3-line) px-4 text-(color:--color-n3-ink) hover:border-(color:--color-n3-ink)"
                  >
                    WhatsApp
                  </a>
                ) : null}
                {siteConfig.contact.instagram ? (
                  <a
                    href={siteConfig.contact.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-(color:--color-n3-line) px-4 text-(color:--color-n3-ink) hover:border-(color:--color-n3-ink)"
                  >
                    Instagram
                  </a>
                ) : null}
                {siteConfig.contact.linkedin ? (
                  <a
                    href={siteConfig.contact.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex min-h-11 items-center rounded-full border border-(color:--color-n3-line) px-4 text-(color:--color-n3-ink) hover:border-(color:--color-n3-ink)"
                  >
                    LinkedIn
                  </a>
                ) : null}
                {siteConfig.contact.email ? (
                  <a
                    href={`mailto:${siteConfig.contact.email}`}
                    className="inline-flex min-h-11 items-center rounded-full border border-(color:--color-n3-line) px-4 text-(color:--color-n3-ink) hover:border-(color:--color-n3-ink)"
                  >
                    E-mail
                  </a>
                ) : null}
              </div>
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
