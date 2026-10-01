import React from "react";
import { Hero } from "@/components/hero";
import { PinnedStory } from "@/components/pinned-story";
import { AboutSection } from "@/components/about-section";
import { ServicesSection } from "@/components/services-section";
import { ProjectsSection } from "@/components/projects-section";
import { WhyChooseUs } from "@/components/why-choose-us";
import { ProcessSection } from "@/components/process-section";
import { HomeTypes } from "@/components/home-types";
import { MaterialsSection } from "@/components/materials-section";
import { FAQSection } from "@/components/faq";
import { CTASection } from "@/components/cta-section";
import { ContactSection } from "@/components/contact-section";

export default function HomePage() {
  return (
    <>
      <Hero />
      <PinnedStory />
      <AboutSection />
      <ServicesSection />
      <ProjectsSection />
      <WhyChooseUs />
      <ProcessSection />
      <HomeTypes />
      <MaterialsSection />
      <FAQSection />
      <CTASection />
      <ContactSection />
    </>
  );
}
