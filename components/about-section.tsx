"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_DATA, COMPANY_INFO } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeLeft, fadeRight, zoomIn } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function AboutSection() {
  const sectionRef = useRef<HTMLDivElement>(null);
  const textParallaxRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
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
        <motion.div
          {...fadeLeft(0)}
          className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-24"
        >
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            About ORA
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            Complete Interior Work • Bhopal
          </span>
        </motion.div>

        {/* Large Statement */}
        <div className="max-w-5xl mb-20 md:mb-32">
          <motion.h2
            {...fadeLeft(0.08)}
            className="font-serif text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-normal tracking-tight text-[#111111] leading-[1.12]"
          >
            WE DON&apos;T JUST FILL A ROOM.
            <br />
            <span className="italic text-[#68645D]">WE SHAPE HOW IT FEELS.</span>
          </motion.h2>
        </div>

        {/* Editorial Composition: Large Image with Overlapping Depth Content */}
        <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-12 items-end">
          {/* Zoom In Revealing Image */}
          <motion.div
            {...zoomIn(0.08, 0.88)}
            className="lg:col-span-8"
          >
            <div className="relative aspect-[16/10] sm:aspect-[16/9] w-full overflow-hidden bg-[#ECE8E1] border border-[#171717]/12 shadow-sm group">
              <Image
                src="https://images.unsplash.com/photo-1758448755952-42b404bc6f39?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Architectural space styling Bhopal by ORA"
                fill
                sizes="(max-width: 1024px) 100vw, 70vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]"
              />
            </div>
            <motion.div
              {...zoomIn(0.16, 0.94)}
              className="pt-3 text-[10px] font-mono uppercase tracking-[0.2em] text-[#68645D]"
            >
              Residential Architecture &amp; Execution • Bhopal, MP
            </motion.div>
          </motion.div>

          {/* Parallax Narrative Text Column Entering from Right */}
          <div ref={textParallaxRef} className="lg:col-span-4 space-y-6 lg:pl-4">
            <motion.p
              {...fadeRight(0.12)}
              className="font-serif text-xl sm:text-2xl text-[#111111] font-light leading-relaxed"
            >
              &ldquo;ORA Interior &amp; Construction Solutions provides complete interior and renovation solutions in Bhopal — from concept and 2D/3D design to materials and execution.&rdquo;
            </motion.p>

            <motion.p
              {...fadeRight(0.22)}
              className="text-sm md:text-base text-[#68645D] leading-relaxed font-sans font-light"
            >
              Instead of coordinating separate trades, homeowners in Bhopal work directly with our unified studio. One contract, verified craftsmen, premium certified materials, and dedicated on-site project oversight.
            </motion.p>

            <motion.div
              {...fadeRight(0.3)}
              className="pt-4 border-t border-[#171717]/10"
            >
              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#111111] hover:text-[#A58A63] transition-colors border-b border-[#111111] pb-1 group"
              >
                <span>Schedule a Space Visit</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
