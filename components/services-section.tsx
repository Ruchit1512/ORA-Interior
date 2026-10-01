"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { SERVICES_DATA } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ServicesSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".service-scroll-item");

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setActiveIndex(index),
          onEnterBack: () => setActiveIndex(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  const activeService = SERVICES_DATA[activeIndex] || SERVICES_DATA[0];

  return (
    <section
      id="services"
      ref={containerRef}
      className="py-24 md:py-40 bg-[#F5F3EF] border-t border-[#171717]/10 relative"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            Capabilities
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            01 — 09 Turnkey Disciplines
          </span>
        </div>

        <div className="mb-16 md:mb-24">
          <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal text-[#111111] tracking-tight">
            WHAT WE CREATE
          </h2>
          <p className="text-sm md:text-base text-[#68645D] font-light max-w-xl mt-4">
            From precision modular joinery to complete structural restructuring — every facet of your home interior is handled in-house in Bhopal.
          </p>
        </div>

        {/* Pinned Split Layout: Sticky Image Showcase on Left, Scrolling Service Narrative on Right */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-start">
          {/* Sticky Visual Showcase on Desktop */}
          <div className="lg:col-span-6 lg:sticky lg:top-32 relative">
            <div className="relative aspect-[4/3] sm:aspect-[16/11] w-full overflow-hidden bg-[#ECE8E1] border border-[#171717]/12 shadow-sm">
              <Image
                src={activeService.image}
                alt={activeService.title}
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover transition-all duration-700 ease-out"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-[#111111]/20 to-transparent" />

              {/* Number overlay */}
              <div className="absolute bottom-6 left-6 right-6 flex items-end justify-between text-[#F8F6F2]">
                <div>
                  <span className="font-mono text-xs text-[#A58A63] tracking-[0.25em] uppercase block font-medium">
                    Service {activeService.number} / 09
                  </span>
                  <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F8F6F2]">
                    {activeService.title}
                  </h3>
                </div>
                <span className="text-[11px] font-mono text-[#F8F6F2]/80 uppercase tracking-widest hidden sm:block">
                  Bhopal Execution
                </span>
              </div>
            </div>

            {/* Micro specifications under image */}
            <div className="mt-4 flex flex-wrap gap-2">
              {activeService.features.map((feat) => (
                <span
                  key={feat}
                  className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 bg-[#ECE8E1] text-[#171717] border border-[#171717]/12 font-medium"
                >
                  {feat}
                </span>
              ))}
            </div>
          </div>

          {/* Scrolling Service Items on Right */}
          <div className="lg:col-span-6 space-y-24 md:space-y-36 py-8">
            {SERVICES_DATA.map((service, index) => {
              const isActive = activeIndex === index;

              return (
                <div
                  key={service.id}
                  className={`service-scroll-item transition-all duration-500 border-b border-[#171717]/12 pb-16 ${
                    isActive ? "opacity-100" : "opacity-45"
                  }`}
                >
                  <div className="flex items-baseline gap-4 mb-4">
                    <span className="font-mono text-sm tracking-[0.2em] text-[#A58A63] font-semibold">
                      {service.number}
                    </span>
                    <span className="text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
                      {service.tagline}
                    </span>
                  </div>

                  <h3 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#111111] mb-6">
                    {service.title}
                  </h3>

                  <p className="text-base text-[#68645D] font-light leading-relaxed mb-6">
                    {service.description}
                  </p>

                  <Link
                    href="/#contact"
                    className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#A58A63] transition-colors border-b border-[#111111] pb-0.5"
                  >
                    <span>Inquire Discipline</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
