"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const PILLARS = [
  {
    num: "01",
    title: "PREMIUM MATERIAL QUALITY",
    description: "Carefully selected materials and finishes designed for lasting beauty and performance — certified marine ply, German soft-close fittings, and durable laminates.",
  },
  {
    num: "02",
    title: "EXPERIENCED TEAM",
    description: "Skilled professionals focused on quality craftsmanship and clean execution under unified site supervision in Bhopal.",
  },
  {
    num: "03",
    title: "AFFORDABLE PRICING",
    description: "Thoughtfully planned solutions that balance architectural quality, design and budget without hidden surprises.",
  },
  {
    num: "04",
    title: "ON-TIME PROJECT DELIVERY",
    description: "Committed timeline schedules with milestone tracking from concept to pristine handover.",
  },
];

export function WhyChooseUs() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".why-pillar-item");

      items.forEach((item) => {
        gsap.fromTo(
          item,
          { opacity: 0.2, y: 30 },
          {
            opacity: 1,
            y: 0,
            duration: 0.8,
            ease: "power2.out",
            scrollTrigger: {
              trigger: item,
              start: "top 80%",
              end: "bottom 60%",
              scrub: 0.6,
            },
          }
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="why-us"
      ref={containerRef}
      className="scroll-mt-24 py-28 md:py-40 bg-[#F5F3EF] border-t border-[#171717]/10 relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            Commitments
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            The ORA Benchmark
          </span>
        </div>

        <div className="mb-20 md:mb-32">
          <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111]">
            WHY ORA
          </h2>
          <p className="text-base text-[#68645D] font-light max-w-lg mt-4 leading-relaxed">
            A disciplined, accountable approach to residential architecture and interior execution in Bhopal.
          </p>
        </div>

        {/* Large Typography-Driven Pillars (No repetitive cards!) */}
        <div className="space-y-16 md:space-y-24">
          {PILLARS.map((pillar) => (
            <div
              key={pillar.num}
              className="why-pillar-item border-b border-[#171717]/15 pb-12 md:pb-16 grid grid-cols-1 lg:grid-cols-12 gap-6 items-baseline transition-opacity duration-300"
            >
              <div className="lg:col-span-2 font-mono text-sm tracking-[0.2em] text-[#A58A63] font-medium">
                {pillar.num} / 04
              </div>

              <div className="lg:col-span-6">
                <h3 className="font-serif text-2xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] leading-tight">
                  {pillar.title}
                </h3>
              </div>

              <div className="lg:col-span-4 lg:pl-6">
                <p className="text-sm md:text-base text-[#68645D] font-light leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
