import React from "react";
import { Navbar } from "@/components/sections/navbar";
import { Hero } from "@/components/sections/hero";
import { NichesSection } from "@/components/sections/niches";
import { AboutSection } from "@/components/sections/about";
import { CtaFooter } from "@/components/sections/cta-footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col">
      <Navbar />
      <main className="flex-1">
        <Hero />
        <NichesSection />
        <AboutSection />
      </main>
      <CtaFooter />
    </div>
  );
}
