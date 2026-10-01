"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function MaterialsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const imageRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      if (imageRef.current) {
        gsap.fromTo(
          imageRef.current,
          { scale: 1.15, clipPath: "inset(15% 0 15% 0)" },
          {
            scale: 1,
            clipPath: "inset(0% 0 0% 0)",
            ease: "power2.out",
            scrollTrigger: {
              trigger: containerRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1.2,
            },
          }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="py-28 md:py-44 bg-[#F5F3EF] border-t border-[#171717]/10 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            Single-Point Accountability
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            Integrated Turnkey Model
          </span>
        </div>

        {/* Cinematic Split Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-center">
          {/* Left Column: Architectural Material Image with Slow Reveal */}
          <div className="lg:col-span-7">
            <div
              ref={imageRef}
              className="relative aspect-[16/11] w-full overflow-hidden bg-[#ECE8E1] will-change-transform border border-[#171717]/10"
            >
              <Image
                src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&fit=crop&w=1600&q=85"
                alt="Materials and on-site execution in Bhopal"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
            <div className="pt-3 flex items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#68645D]">
              <span>Verified Craftsmen &amp; Materials</span>
              <span>Bhopal, Madhya Pradesh</span>
            </div>
          </div>

          {/* Right Column: Statement & Execution Model */}
          <div className="lg:col-span-5 space-y-8">
            <div>
              <span className="text-[10px] font-mono uppercase tracking-[0.3em] text-[#A58A63] block mb-3">
                Unified Workflow
              </span>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111] leading-[1.08]">
                DESIGN.
                <br />
                MATERIALS.
                <br />
                <span className="italic text-[#68645D]">EXECUTION.</span>
              </h2>
            </div>

            <p className="font-serif text-xl sm:text-2xl text-[#111111] font-light leading-relaxed">
              &ldquo;One team. One process. One complete interior solution.&rdquo;
            </p>

            <p className="text-base text-[#68645D] font-light leading-relaxed">
              With ORA, you don&apos;t have to coordinate multiple teams, negotiate with separate carpenter gangs, or source hardware independently. We bring design, materials, and execution together for a seamless interior journey.
            </p>

            {/* Turnkey Highlight */}
            <div className="p-5 border-l-2 border-[#111111] bg-[#ECE8E1] space-y-1">
              <span className="text-[11px] font-mono uppercase tracking-[0.25em] text-[#A58A63] font-semibold block">
                The ORA Standard
              </span>
              <p className="font-serif text-lg text-[#111111]">
                LABOUR + MATERIALS INCLUDED
              </p>
              <p className="text-xs sm:text-sm text-[#68645D] font-light">
                Single unified contract with itemized material specifications and fixed delivery timeline.
              </p>
            </div>

            <div className="pt-2">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-[#F8F6F2] hover:bg-[#A58A63] hover:text-[#111111] transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-sm"
              >
                <span>Discuss Your Home</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
