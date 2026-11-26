import React from "react";
import Navbar2 from "@/components/ui/navbar2";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { NichesSection } from "@/components/sections/niches";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { AboutSection } from "@/components/sections/about";
import { HowIWorkSection } from "@/components/sections/how-i-work";
import { CtaFooter } from "@/components/sections/cta-footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col pb-16 md:pb-0">
      <Navbar2 />
      <main className="flex-1">
        <Hero />
        <NichesSection />
        <WorkflowSection />
        <AboutSection />
        <HowIWorkSection />
      </main>
      <CtaFooter />
      <FloatingWhatsApp />
    </div>
  );
}
