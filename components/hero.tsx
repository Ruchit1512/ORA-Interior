"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowDown, ArrowUpRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function Hero() {
  const pinSectionRef = useRef<HTMLDivElement>(null);
  const videoWrapperRef = useRef<HTMLDivElement>(null);
  const headline1Ref = useRef<HTMLHeadingElement>(null);
  const headline2Ref = useRef<HTMLHeadingElement>(null);
  const headline3Ref = useRef<HTMLHeadingElement>(null);
  const initialContentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const ctx = gsap.context(() => {
      if (prefersReduced) return;

      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: pinSectionRef.current,
          start: "top top",
          end: "+=180%",
          pin: true,
          scrub: 0.8,
          anticipatePin: 1,
        },
      });

      // 1. Scale background video 1 -> 1.12
      tl.to(
        videoWrapperRef.current,
        {
          scale: 1.12,
          ease: "none",
        },
        0
      );

      // 2. Initial supporting content fades & translates up
      tl.to(
        initialContentRef.current,
        {
          opacity: 0,
          y: -40,
          ease: "power2.inOut",
        },
        0.1
      );

      // 3. Headline 1: "Spaces Designed Around You." -> fades out
      tl.to(
        headline1Ref.current,
        {
          opacity: 0,
          y: -50,
          ease: "power2.inOut",
        },
        0.2
      );

      // 4. Headline 2: "From Vision To Execution." -> fades in then out
      tl.fromTo(
        headline2Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.3 },
        0.4
      );
      tl.to(
        headline2Ref.current,
        { opacity: 0, y: -50, ease: "power2.in", duration: 0.3 },
        0.85
      );

      // 5. Headline 3: "Complete Interior Solutions." -> fades in
      tl.fromTo(
        headline3Ref.current,
        { opacity: 0, y: 50 },
        { opacity: 1, y: 0, ease: "power2.out", duration: 0.35 },
        1.1
      );
    }, pinSectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <div ref={pinSectionRef} className="relative h-screen w-full overflow-hidden bg-[#111111] text-[#F8F6F2]">
      {/* Background Full Viewport Video Container */}
      <div
        ref={videoWrapperRef}
        className="absolute inset-0 w-full h-full will-change-transform"
      >
        <video
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover object-center"
        >
          <source src="/videos/banner.mp4" type="video/mp4" />
        </video>

        {/* Controlled Subtle Overlay (rgba(0,0,0,0.38)) */}
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-[#111111]/30" />
      </div>

      {/* Hero Visual Content */}
      <div className="relative z-10 h-full w-full container mx-auto flex flex-col justify-between pt-28 md:pt-32 pb-10 md:pb-14">
        {/* Top small label */}
        <div className="pt-2">
          <p className="text-[10px] md:text-xs uppercase tracking-[0.28em] text-[#A58A63] font-medium font-sans">
            ORA INTERIOR &amp; CONSTRUCTION SOLUTIONS
          </p>
        </div>

        {/* Central Morphing Headline Stage */}
        <div className="relative my-auto max-w-4xl min-h-[160px] sm:min-h-[220px] md:min-h-[280px] flex items-center">
          {/* Headline 1 (Initial) */}
          <h1
            ref={headline1Ref}
            className="absolute left-0 top-0 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F8F6F2] leading-[1.08]"
          >
            Spaces Designed
            <br />
            <span className="italic font-normal text-[#C9C5BD]">Around You.</span>
          </h1>

          {/* Headline 2 (During Scroll 1) */}
          <h2
            ref={headline2Ref}
            className="absolute left-0 top-0 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F8F6F2] leading-[1.08] opacity-0 pointer-events-none"
          >
            From Vision
            <br />
            <span className="italic font-normal text-[#A58A63]">To Execution.</span>
          </h2>

          {/* Headline 3 (During Scroll 2) */}
          <h2
            ref={headline3Ref}
            className="absolute left-0 top-0 font-serif text-4xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F8F6F2] leading-[1.08] opacity-0 pointer-events-none"
          >
            Complete Interior
            <br />
            <span className="italic font-normal text-[#C9C5BD]">Solutions.</span>
          </h2>
        </div>

        {/* Supporting Line & CTAs */}
        <div ref={initialContentRef} className="space-y-6 max-w-2xl">
          <p className="text-sm sm:text-base md:text-lg text-[#F8F6F2]/90 font-light leading-relaxed">
            Complete interior design, renovation and execution solutions for modern homes in Bhopal.
          </p>

          <div className="flex flex-wrap items-center gap-3.5 pt-1">
            <Link
              href="#contact"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#A58A63] text-[#111111] hover:bg-[#b59a72] transition-all text-xs uppercase tracking-[0.18em] font-medium rounded-sm shadow-sm"
            >
              <span>Start Your Project</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </Link>

            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#171717]/80 hover:bg-[#171717] border border-[#F8F6F2]/25 text-[#F8F6F2] hover:text-[#A58A63] hover:border-[#A58A63] transition-all text-xs uppercase tracking-[0.18em] font-medium rounded-sm backdrop-blur-sm"
            >
              <MessageSquare className="w-3.5 h-3.5 text-[#A58A63]" />
              <span>Chat on WhatsApp</span>
            </a>

            <Link
              href="/#projects"
              className="inline-flex items-center gap-2 px-6 py-3.5 border border-[#F8F6F2]/30 text-[#F8F6F2] hover:bg-[#F8F6F2]/10 transition-colors text-xs uppercase tracking-[0.18em] font-medium rounded-sm"
            >
              <span>Explore Works</span>
            </Link>
          </div>
        </div>

        {/* Bottom Bar: Location & Scroll prompt */}
        <div className="flex items-end justify-between border-t border-[#F8F6F2]/15 pt-5 text-[10px] sm:text-xs uppercase tracking-[0.2em] text-[#C9C5BD] font-mono">
          <span>Bhopal, Madhya Pradesh</span>
          <div className="flex items-center gap-2 text-[#A58A63]">
            <span>SCROLL TO EXPLORE</span>
            <ArrowDown className="w-3.5 h-3.5 animate-bounce" />
          </div>
        </div>
      </div>
    </div>
  );
}
