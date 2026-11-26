import React from "react";
import fs from "node:fs";
import path from "node:path";
import Image from "next/image";
import { Reveal } from "@/components/ui/reveal";
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
    <section id="sobre" className="py-10 sm:py-12 lg:py-14">
      <div className="n3-container">
        <Reveal>
          <div className="grid gap-8 rounded-3xl border border-(color:--color-n3-line) bg-white p-6 shadow-sm sm:p-10 lg:grid-cols-12 lg:gap-12 lg:p-12">
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

              <p className="mt-4 text-base leading-relaxed text-(color:--color-n3-grey) sm:text-lg">
                {siteConfig.about.bio}
              </p>

              {/* Links de contato condicionais */}
              {hasContactLinks ? (
                <div className="mt-7 flex flex-wrap gap-3 border-t border-(color:--color-n3-line) pt-6 text-sm font-medium">
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
        </Reveal>
      </div>
    </section>
  );
}
