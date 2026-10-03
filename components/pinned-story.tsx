"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const STORY_STEPS = [
  {
    step: "01",
    title: "DESIGN",
    subtitle: "Thoughtful spaces created around your lifestyle.",
    image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3Dhttps://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Concept & Spatial Planning • Bhopal",
  },
  {
    step: "02",
    title: "DETAIL",
    subtitle: "Every material, finish and proportion matters.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    caption: "Precision Joinery & Material Selection",
  },
  {
    step: "03",
    title: "EXECUTION",
    subtitle: "From drawings to the final detail, everything comes together under one roof.",
    image: "/images/executation.png",
    caption: "Turnkey On-Site Management & Craft",
  },
  {
    step: "04",
    title: "YOUR SPACE",
    subtitle: "Designed to feel like yours.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    caption: "Handover Ready • A Sanctuary",
  },
];

export function PinnedStory() {
  const containerRef = useRef<HTMLDivElement>(null);
  const leftCardsRef = useRef<HTMLDivElement>(null);
  const imageCardsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const texts = gsap.utils.toArray<HTMLElement>(".story-text-item");
      const images = gsap.utils.toArray<HTMLElement>(".story-image-item");

      // Main pin timeline
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=300%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // Initially show first text and image
      gsap.set(texts.slice(1), { opacity: 0, y: 40 });
      gsap.set(images.slice(1), { opacity: 0, scale: 1.06, clipPath: "inset(100% 0 0 0)" });

      // Stagger through steps 1 to 4
      STORY_STEPS.forEach((_, i) => {
        if (i === 0) return;

        const prevText = texts[i - 1];
        const nextText = texts[i];
        const prevImage = images[i - 1];
        const nextImage = images[i];

        const time = i * 0.8;

        // Transition text
        tl.to(prevText, { opacity: 0, y: -40, duration: 0.35, ease: "power2.in" }, time - 0.2);
        tl.fromTo(
          nextText,
          { opacity: 0, y: 40 },
          { opacity: 1, y: 0, duration: 0.45, ease: "power2.out" },
          time + 0.1
        );

        // Transition image with clipPath & scale
        tl.to(prevImage, { scale: 0.98, opacity: 0.2, duration: 0.4 }, time - 0.1);
        tl.fromTo(
          nextImage,
          { opacity: 1, scale: 1.08, clipPath: "inset(100% 0 0 0)" },
          {
            scale: 1,
            clipPath: "inset(0% 0 0 0)",
            duration: 0.6,
            ease: "power3.inOut",
          },
          time
        );
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#F5F3EF] border-t border-[#171717]/10"
    >
      <div className="container mx-auto h-full flex flex-col justify-between py-12 md:py-20">
        {/* Section Tagline */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            The Design Philosophy
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            ORA Studio — Bhopal
          </span>
        </div>

        {/* Main Split Grid (Pinned stage) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center my-auto">
          {/* Left: Changing Typography */}
          <div ref={leftCardsRef} className="lg:col-span-5 relative min-h-[220px] sm:min-h-[280px]">
            {STORY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className={`story-text-item absolute inset-0 flex flex-col justify-center space-y-4 ${
                  idx === 0 ? "opacity-100" : "opacity-0 pointer-events-none"
                }`}
              >
                <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A58A63] font-medium">
                  {step.step} / 04
                </span>
                <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111]">
                  {step.title}
                </h2>
                <p className="text-base sm:text-lg md:text-xl text-[#68645D] font-light leading-relaxed max-w-md pt-2">
                  {step.subtitle}
                </p>
              </div>
            ))}
          </div>

          {/* Right: Changing Architectural Imagery */}
          <div
            ref={imageCardsRef}
            className="lg:col-span-7 relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/11] rounded-none overflow-hidden bg-[#ECE8E1] border border-[#171717]/12 shadow-sm"
          >
            {STORY_STEPS.map((step, idx) => (
              <div
                key={step.step}
                className={`story-image-item absolute inset-0 w-full h-full will-change-transform ${
                  idx === 0 ? "opacity-100" : "opacity-0"
                }`}
              >
                <Image
                  src={step.image}
                  alt={`${step.title} - ${step.caption}`}
                  fill
                  priority={idx === 0}
                  sizes="(max-width: 1024px) 100vw, 60vw"
                  className="object-cover"
                />
                <div className="absolute bottom-4 left-4 px-3 py-1.5 bg-[#111111]/85 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.16em] text-[#F8F6F2] border border-[#F8F6F2]/10">
                  {step.caption}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom indicator */}
        <div className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#68645D] pt-4 border-t border-[#171717]/10">
          Scroll to advance the narrative
        </div>
      </div>
    </section>
  );
}
