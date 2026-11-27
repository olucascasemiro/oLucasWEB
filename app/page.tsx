import React from "react";
import Navbar2 from "@/components/ui/navbar2";
import { FloatingWhatsApp } from "@/components/ui/floating-whatsapp";
import { Hero } from "@/components/sections/hero";
import { TrustStrip } from "@/components/sections/trust-strip";
import { NichesSection } from "@/components/sections/niches";
import { CaseSection } from "@/components/sections/case-section";
import { WorkflowSection } from "@/components/sections/workflow-section";
import { HowIWorkSection } from "@/components/sections/how-i-work";
import { Testimonials } from "@/components/sections/testimonials";
import { AboutSection } from "@/components/sections/about";
import { FaqSection } from "@/components/sections/faq-section";
import { CtaFooter } from "@/components/sections/cta-footer";

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col pb-20 md:pb-0">
      <Navbar2 />
      <main className="flex-1">
        <Hero />
        <TrustStrip />
        <NichesSection />
        <CaseSection />
        <WorkflowSection />
        <HowIWorkSection />
        <Testimonials />
        <AboutSection />
        <FaqSection />
      </main>
      <CtaFooter />
      <FloatingWhatsApp />
    </div>
  );
}
