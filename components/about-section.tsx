"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_DATA, COMPANY_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const imageRevealRef = useRef<HTMLDivElement>(null);
  const textParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Image reveal with clip-path
      if (imageRevealRef.current) {
        gsap.fromTo(
          imageRevealRef.current,
          { clipPath: "inset(20% 0% 20% 0%)", scale: 1.08 },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            scale: 1,
            ease: "power2.out",
            scrollTrigger: {
              trigger: sectionRef.current,
              start: "top 80%",
              end: "center center",
              scrub: 1,
            },
          }
        );
      }

      // Text parallax movement at different speed
      if (textParallaxRef.current) {
        gsap.to(textParallaxRef.current, {
          yPercent: -15,
          ease: "none",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="py-28 md:py-44 bg-[#F5F3EF] border-t border-[#171717]/10 relative overflow-hidden"
    >
      <div className="container mx-auto">
        {/* Section Eyebrow */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-24">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            About ORA
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            Complete Interior Work • Bhopal
          </span>
        </div>

        {/* Large Statement */}
        <div className="max-w-5xl mb-20 md:mb-32">
          <h2 className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.12]">
            WE DON&apos;T JUST FILL A ROOM.
            <br />
            <span className="italic text-[#68645D]">WE SHAPE HOW IT FEELS.</span>
          </h2>
        </div>

        {/* Editorial Composition: Large Image with Overlapping Depth Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Large Clip-Path Revealing Image */}
          <div className="lg:col-span-8">
            <div
              ref={imageRevealRef}
              className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#ECE8E1] will-change-transform border border-[#171717]/12 shadow-sm"
            >
              <Image
                src="https://images.unsplash.com/photo-1758448755952-42b404bc6f39?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Architectural space styling Bhopal by ORA"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover"
              />
            </div>
            <div className="pt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#68645D]">
              Residential Architecture &amp; Execution • Bhopal, MP
            </div>
          </div>

          {/* Parallax Narrative Text Column */}
          <div ref={textParallaxRef} className="lg:col-span-4 space-y-6 lg:pl-4">
            <p className="font-serif text-xl sm:text-2xl text-[#111111] font-light leading-relaxed">
              &ldquo;ORA Interior &amp; Construction Solutions provides complete interior and renovation solutions in Bhopal — from concept and 2D/3D design to materials and execution.&rdquo;
            </p>

            <p className="text-sm md:text-base text-[#68645D] leading-relaxed font-sans font-light">
              Instead of coordinating separate trades, homeowners in Bhopal work directly with our unified studio. One contract, verified craftsmen, premium certified materials, and dedicated on-site project oversight.
            </p>

            <div className="pt-4 border-t border-[#171717]/10">
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#A58A63] transition-colors border-b border-[#111111] pb-1"
              >
                <span>Schedule a Space Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
