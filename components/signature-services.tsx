"use client";

import React, { useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { ArrowUpRight } from "lucide-react";
import { EDITORIAL_SERVICES } from "@/lib/data";
import { Button } from "@/components/ui/button";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function SignatureServices() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (prefersReduced) return;

    const ctx = gsap.context(() => {
      const items = gsap.utils.toArray<HTMLElement>(".editorial-card");
      items.forEach((item) => {
        const image = item.querySelector(".editorial-image");
        if (image) {
          gsap.fromTo(
            image,
            { scale: 1.15, yPercent: 6 },
            {
              scale: 1,
              yPercent: -6,
              ease: "none",
              scrollTrigger: {
                trigger: item,
                start: "top bottom",
                end: "bottom top",
                scrub: 1.2,
              },
            }
          );
        }
      });
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      className="py-24 md:py-36 bg-charcoal-900 border-y border-charcoal-800/80 relative overflow-hidden"
    >
      <div className="container mx-auto px-4 md:px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 md:mb-24 pb-8 border-b border-charcoal-800">
          <div className="max-w-2xl">
            <span className="text-xs font-mono uppercase tracking-[0.25em] text-bronze-400 block mb-3">
              Editorial Showcase
            </span>
            <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
              Spaces Designed for Living Well
            </h2>
          </div>
          <div className="mt-6 md:mt-0 text-right">
            <p className="text-xs sm:text-sm font-mono text-ivory-300/70">
              ARCHITECTURAL INTEGRITY • BHOPAL, MP
            </p>
          </div>
        </div>

        {/* Editorial Showcase Items */}
        <div className="space-y-24 md:space-y-36">
          {EDITORIAL_SERVICES.map((item, idx) => {
            const isReversed = idx % 2 === 1;

            return (
              <div
                key={item.id}
                className="editorial-card relative grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-center"
              >
                {/* Image Showcase Container */}
                <div
                  className={`lg:col-span-7 relative ${
                    isReversed ? "lg:order-2" : "lg:order-1"
                  }`}
                >
                  <div className="relative aspect-[16/10] sm:aspect-[16/11] rounded-sm overflow-hidden border border-charcoal-700/80 shadow-2xl">
                    <div className="editorial-image absolute inset-0 w-full h-full">
                      <Image
                        src={item.image}
                        alt={`${item.title} interior design in Bhopal`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 bg-gradient-to-t from-charcoal-950/70 via-transparent to-transparent pointer-events-none" />
                  </div>

                  {/* Overlapping Index Tag */}
                  <div className="absolute -top-4 -left-4 w-12 h-12 rounded-sm bg-charcoal-950 border border-charcoal-700 flex items-center justify-center font-mono text-xs text-bronze-400 font-bold shadow-lg">
                    0{idx + 1}
                  </div>
                </div>

                {/* Editorial Narrative Content */}
                <div
                  className={`lg:col-span-5 space-y-6 ${
                    isReversed ? "lg:order-1" : "lg:order-2"
                  }`}
                >
                  <div className="space-y-2">
                    <span className="text-xs font-mono tracking-widest text-bronze-400 uppercase">
                      Category 0{idx + 1}
                    </span>
                    <h3 className="font-serif text-3xl sm:text-4xl font-semibold text-ivory-50">
                      {item.title}
                    </h3>
                    <p className="font-serif italic text-bronze-300/90 text-lg">
                      {item.subtitle}
                    </p>
                  </div>

                  <p className="text-sm sm:text-base text-ivory-300/80 leading-relaxed font-sans">
                    {item.description}
                  </p>

                  <div className="pt-2 flex items-center gap-4">
                    <Button
                      asChild
                      variant="outline"
                      className="border-bronze-500/40 text-bronze-300 hover:bg-bronze-500/10 group"
                    >
                      <Link href="/services">
                        <span>View Details</span>
                        <ArrowUpRight className="w-4 h-4 ml-1.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                      </Link>
                    </Button>
                    <Link
                      href="/contact"
                      className="text-xs font-mono uppercase tracking-wider text-ivory-300/70 hover:text-ivory-100 underline-offset-4 hover:underline"
                    >
                      Book Consultation
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
