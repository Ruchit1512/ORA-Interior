"use client";

import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { PROCESS_DATA } from "@/lib/data";
import { motion } from "framer-motion";
import { fadeLeft } from "@/lib/motion";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function ProcessSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const progressBarRef = useRef<HTMLDivElement>(null);
  const [activeStep, setActiveStep] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      // Progress line animation across pinned section
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=220%",
          pin: true,
          scrub: 0.8,
          onUpdate: (self) => {
            const step = Math.min(
              PROCESS_DATA.length - 1,
              Math.floor(self.progress * PROCESS_DATA.length)
            );
            setActiveStep(step);
          },
        },
      });

      if (progressBarRef.current) {
        tl.fromTo(
          progressBarRef.current,
          { scaleX: 0 },
          { scaleX: 1, ease: "none" }
        );
      }
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#ECE8E1] text-[#171717] border-t border-[#171717]/10"
    >
      <div className="container mx-auto h-full flex flex-col justify-between py-12 md:py-20">
        {/* Top Header */}
        <div>
          <motion.div
            {...fadeLeft(0)}
            className="flex items-center justify-between border-b border-[#171717]/15 pb-4 mb-6"
          >
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
              Roadmap
            </span>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
              5 Sequential Phases
            </span>
          </motion.div>

          <motion.h2
            {...fadeLeft(0.08)}
            className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111] leading-tight"
          >
            FROM IDEA
            <br />
            <span className="italic text-[#68645D]">TO HOME.</span>
          </motion.h2>
        </div>

        {/* Central Architectural Timeline Stage */}
        <div className="my-auto space-y-10">
          {/* Thin Architectural Progress Line */}
          <div className="relative w-full h-[1px] bg-[#171717]/20">
            <div
              ref={progressBarRef}
              className="absolute left-0 top-0 h-[2px] bg-[#111111] origin-left w-full will-change-transform"
            />
          </div>

          {/* Horizontal Step Columns */}
          <div className="grid grid-cols-1 md:grid-cols-5 gap-6 md:gap-8 pt-4">
            {PROCESS_DATA.map((item, idx) => {
              const isCurrent = activeStep === idx;
              const isPast = activeStep > idx;

              return (
                <div
                  key={item.step}
                  className={`transition-all duration-500 space-y-3 ${
                    isCurrent
                      ? "opacity-100 transform -translate-y-2"
                      : isPast
                      ? "opacity-75"
                      : "opacity-50"
                  }`}
                >
                  <div className="flex items-center gap-2">
                    <span className="font-mono text-xs tracking-[0.2em] text-[#A58A63] font-semibold">
                      {item.step}
                    </span>
                    <span className="h-[1px] flex-1 bg-[#171717]/15" />
                  </div>

                  <h3 className="font-serif text-xl sm:text-2xl font-normal text-[#111111]">
                    {item.title}
                  </h3>

                  <p className="text-sm text-[#68645D] font-light leading-relaxed">
                    {item.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="flex items-center justify-between border-t border-[#171717]/15 pt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#68645D]">
          <span>Phased Turnkey Execution</span>
          <span>Bhopal Site Supervised</span>
        </div>
      </div>
    </section>
  );
}
