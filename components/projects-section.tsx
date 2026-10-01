"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight, MapPin } from "lucide-react";
import { PROJECTS_DATA } from "@/lib/data";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const EDITORIAL_PROJECTS = [
  {
    num: "01",
    label: "LIVING ROOM",
    title: "Contemporary Residence Living Lounge",
    location: "Arera Colony, Bhopal",
    image: "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=1400&q=85",
    aspect: "w-[440px] sm:w-[540px] aspect-[4/3]",
    scope: "Complete Panelling, False Ceiling & Millwork",
  },
  {
    num: "02",
    label: "MODULAR KITCHEN",
    title: "Minimal Quartz & Acrylic Culinary Space",
    location: "Kolar Road, Bhopal",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f?auto=format&fit=crop&w=1400&q=85",
    aspect: "w-[380px] sm:w-[480px] aspect-[1/1]",
    scope: "BWP Ply Carcass & Soft-Close German Fittings",
  },
  {
    num: "03",
    label: "BEDROOM",
    title: "Master Suite & Concealed Wardrobe Joinery",
    location: "Hoshangabad Road, Bhopal",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?auto=format&fit=crop&w=1400&q=85",
    aspect: "w-[460px] sm:w-[560px] aspect-[16/10]",
    scope: "Floor-to-Ceiling Wardrobes & Ambient Lighting",
  },
  {
    num: "04",
    label: "DUPLEX",
    title: "Double-Height Architectural Bungalow",
    location: "MP Nagar, Bhopal",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    aspect: "w-[420px] sm:w-[520px] aspect-[4/3]",
    scope: "Staircase Accents & Two-Level Spatial Flow",
  },
  {
    num: "05",
    label: "RENOVATION",
    title: "Complete Structural & Interior Overhaul",
    location: "Bawadiya Kalan, Bhopal",
    image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=1400&q=85",
    aspect: "w-[480px] sm:w-[580px] aspect-[16/9]",
    scope: "Civil Masonry, Plumbing, Electrical & Turnkey Finish",
  },
];

export function ProjectsSection() {
  const containerRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const track = trackRef.current;
      if (!track) return;

      const totalScroll = track.scrollWidth - window.innerWidth + 120;

      gsap.to(track, {
        x: -totalScroll,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: () => `+=${track.scrollWidth}`,
          pin: true,
          scrub: 0.8,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      id="projects"
      ref={containerRef}
      className="relative h-screen w-full overflow-hidden bg-[#111111] text-[#F5F3EF]"
    >
      <div className="h-full flex flex-col justify-between py-12 md:py-16">
        {/* Top Header */}
        <div className="container mx-auto flex items-center justify-between border-b border-[#FFFFFF]/15 pb-4">
          <div>
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
              Portfolio
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal tracking-tight text-[#FFFFFF]">
              SELECTED WORKS
            </h2>
          </div>
          <div className="text-right">
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C9C5BD]">
              Horizontal Gallery [01 — 05]
            </span>
          </div>
        </div>

        {/* Pinned Horizontal Gallery Track */}
        <div className="relative my-auto overflow-visible">
          <div
            ref={trackRef}
            className="flex items-center gap-10 md:gap-16 px-6 md:px-16 w-max will-change-transform"
          >
            {EDITORIAL_PROJECTS.map((item) => (
              <div
                key={item.num}
                className={`group flex-shrink-0 ${item.aspect} relative flex flex-col justify-between`}
              >
                {/* Image Container with subtle hover scale */}
                <div className="relative w-full h-[78%] overflow-hidden bg-[#171717] border border-[#F8F6F2]/15">
                  <Image
                    src={item.image}
                    alt={`${item.num} ${item.title}`}
                    fill
                    sizes="(max-width: 768px) 80vw, 600px"
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-104"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#111111]/80 via-transparent to-transparent" />

                  <div className="absolute top-4 left-4 px-3 py-1 bg-[#111111]/90 backdrop-blur-md text-[10px] font-mono uppercase tracking-[0.2em] text-[#A58A63] border border-[#F8F6F2]/15 font-medium">
                    {item.num} — {item.label}
                  </div>
                </div>

                {/* Editorial Caption under Image */}
                <div className="pt-4 flex flex-col justify-between space-y-1.5">
                  <div className="flex items-center justify-between">
                    <h3 className="font-serif text-lg sm:text-xl font-normal text-[#F8F6F2] group-hover:text-[#A58A63] transition-colors">
                      {item.title}
                    </h3>
                    <ArrowUpRight className="w-4 h-4 text-[#A58A63] opacity-75 group-hover:opacity-100 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
                  </div>
                  <div className="flex items-center justify-between text-xs text-[#C9C5BD] font-mono">
                    <span className="flex items-center gap-1.5">
                      <MapPin className="w-3.5 h-3.5 text-[#A58A63]" />
                      {item.location}
                    </span>
                    <span className="hidden sm:inline-block text-[11px] text-[#C9C5BD]/90">
                      {item.scope}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar: Instructions */}
        <div className="container mx-auto flex items-center justify-between border-t border-[#F8F6F2]/15 pt-4 text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9C5BD]">
          <span>Scroll to traverse portfolio</span>
          <Link
            href="/#contact"
            className="text-[#A58A63] hover:text-[#F8F6F2] transition-colors border-b border-[#A58A63]/50 pb-0.5"
          >
            Inquire specific project scope &rarr;
          </Link>
        </div>
      </div>
    </section>
  );
}
