"use client";

import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const HOME_TYPES = [
  {
    type: "1 BHK",
    title: "Compact & Space-Optimized Living",
    description: "Multifunctional modular furniture, sliding wardrobes, and concealed storage designed to maximize every square foot in modern apartments.",
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1600&q=85",
    features: "Modular Kitchen • Sliding Wardrobe • False Ceiling • Compact TV Unit",
  },
  {
    type: "2 BHK",
    title: "Modern Family Functional Residence",
    description: "Balanced design across living, dining, master bedroom, and guest space with clean joinery and warm ambient illumination.",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1600&q=85",
    features: "Full Modular Kitchen • 2 Bedroom Wardrobes • Living TV Panelling • Mandir Unit",
  },
  {
    type: "3 BHK",
    title: "Expansive & Premium Comfort",
    description: "Comprehensive luxury styling featuring custom Mandir, dedicated study or kids room, luxury master suite, and architectural wall panelling.",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1600&q=85",
    features: "Foyer Partition • Tall Pantry Kitchen • 3 Bespoke Wardrobes • Statement Living",
  },
  {
    type: "DUPLEX",
    title: "Grand Scale & Double-Height Living",
    description: "Architectural staircase joinery, double-height feature walls, upper-level family lounges, and cohesive material continuity across levels.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1600&q=85",
    features: "Double-Height Feature Wall • Custom Staircase Accents • Upper Lounge • Complete Millwork",
  },
];

export function HomeTypes() {
  const containerRef = useRef<HTMLDivElement>(null);
  const [currentIdx, setCurrentIdx] = useState(0);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".home-type-trigger");

      items.forEach((item, index) => {
        ScrollTrigger.create({
          trigger: item,
          start: "top center",
          end: "bottom center",
          onEnter: () => setCurrentIdx(index),
          onEnterBack: () => setCurrentIdx(index),
        });
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative bg-[#111111] text-[#F5F3EF] border-t border-[#FFFFFF]/10"
    >
      {/* Background Images Crossfade Stage (Sticky) */}
      <div className="sticky top-0 h-screen w-full overflow-hidden pointer-events-none z-0">
        {HOME_TYPES.map((ht, idx) => (
          <div
            key={ht.type}
            className={`absolute inset-0 w-full h-full transition-opacity duration-1000 ease-out ${
              currentIdx === idx ? "opacity-45 scale-100" : "opacity-0 scale-105"
            }`}
          >
            <Image
              src={ht.image}
              alt={ht.title}
              fill
              sizes="100vw"
              className="object-cover"
            />
            <div className="absolute inset-0 bg-[#111111]/75" />
            <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-[#111111]/80" />
          </div>
        ))}

        {/* Section Watermark Title in background */}
        <div className="absolute top-10 left-6 md:left-16 z-10 flex items-center justify-between right-6 md:right-16 border-b border-[#F8F6F2]/15 pb-4">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] font-medium">
            Configurations
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C9C5BD]">
            MADE FOR YOUR HOME
          </span>
        </div>
      </div>

      {/* Scrolling Content Overlays (Relative, creates scroll distance) */}
      <div className="relative z-10 -mt-[100vh] container mx-auto">
        <div className="space-y-[60vh] py-[30vh]">
          {HOME_TYPES.map((ht, idx) => (
            <div
              key={ht.type}
              className="home-type-trigger max-w-2xl py-12 border-l-2 border-[#A58A63] pl-8 md:pl-12"
            >
              <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A58A63] font-medium">
                0{idx + 1} • Property Type
              </span>

              <h3 className="font-serif text-6xl sm:text-7xl md:text-8xl lg:text-9xl font-normal text-[#F8F6F2] tracking-tight my-2">
                {ht.type}
              </h3>

              <h4 className="font-serif text-xl sm:text-2xl text-[#F8F6F2] font-light mb-3">
                {ht.title}
              </h4>

              <p className="text-base text-[#C9C5BD] font-light leading-relaxed mb-6">
                {ht.description}
              </p>

              <div className="text-xs font-mono text-[#A58A63] tracking-wide mb-6">
                {ht.features}
              </div>

              <Link
                href="#contact"
                className="inline-flex items-center gap-2 text-xs uppercase tracking-[0.2em] font-medium text-[#F8F6F2] hover:text-[#A58A63] transition-colors border-b border-[#F8F6F2]/30 pb-1"
              >
                <span>Request {ht.type} Layout Estimate</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
