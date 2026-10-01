"use client";

import React from "react";
import { FAQS_DATA } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { RevealWrapper } from "@/components/animations/reveal-wrapper";

export function FAQSection() {
  return (
    <section id="faq" className="py-24 md:py-32 bg-[#F5F3EF] border-t border-[#171717]/10 relative">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-16">
            <RevealWrapper direction="up">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] block mb-3">
                Inquiries &amp; Information
              </span>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#111111] tracking-tight leading-tight">
                Frequently Asked Questions
              </h2>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.2}>
              <p className="mt-4 text-sm md:text-base text-[#68645D] font-light leading-relaxed max-w-2xl">
                Essential details regarding execution timelines, material procurement, 2D/3D visualizations, and turnkey contracts across Bhopal.
              </p>
            </RevealWrapper>
          </div>

          {/* Accordion List */}
          <RevealWrapper direction="up" delay={0.3}>
            <div className="bg-[#ECE8E1]/60 border border-[#171717]/10 p-6 sm:p-10">
              <Accordion type="single" collapsible defaultValue="item-0" className="w-full space-y-1">
                {FAQS_DATA.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border-b border-[#171717]/10 last:border-b-0">
                    <AccordionTrigger className="text-base sm:text-lg font-serif py-5 text-[#111111] hover:text-[#A58A63] transition-colors">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-sm md:text-[15px] text-[#68645D] font-light leading-relaxed">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
