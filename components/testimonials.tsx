"use client";

import React, { useState } from "react";
import { Quote, ChevronLeft, ChevronRight, Star } from "lucide-react";
import { TESTIMONIALS_DATA } from "@/lib/data";
import { RevealWrapper } from "@/components/animations/reveal-wrapper";

export function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? TESTIMONIALS_DATA.length - 1 : prevIndex - 1
    );
  };

  const next = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === TESTIMONIALS_DATA.length - 1 ? 0 : prevIndex + 1
    );
  };

  const current = TESTIMONIALS_DATA[currentIndex];

  return (
    <section className="py-24 md:py-32 bg-charcoal-900 border-t border-charcoal-800 relative overflow-hidden">
      <div className="container mx-auto px-4 md:px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-12">
            <RevealWrapper direction="up">
              <span className="text-xs font-mono text-bronze-400 uppercase tracking-widest block mb-2">
                Homeowner Experiences
              </span>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-semibold text-ivory-50 tracking-tight">
                Client Reflections
              </h2>
            </RevealWrapper>
          </div>

          {/* Testimonial Card */}
          <RevealWrapper direction="up" delay={0.2}>
            <div className="relative p-8 sm:p-12 md:p-16 rounded-sm bg-charcoal-950 border border-charcoal-800 shadow-2xl text-center">
              {/* Large Bronze Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-14 h-14 rounded-full bg-bronze-500/10 border border-bronze-500/30 flex items-center justify-center text-bronze-400">
                  <Quote className="w-7 h-7 rotate-180" />
                </div>
              </div>

              {/* 5-Star indicator */}
              <div className="flex justify-center gap-1.5 mb-6 text-bronze-400">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-bronze-400 text-bronze-400" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-ivory-100 font-light leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author & Project Details */}
              <div className="space-y-1">
                <div className="font-sans font-semibold text-base text-bronze-300">
                  {current.name}
                </div>
                <div className="text-xs sm:text-sm font-mono text-ivory-300/70">
                  {current.projectType} • {current.location}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-charcoal-800/80">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 rounded-sm border border-charcoal-700 bg-charcoal-900 text-ivory-200 hover:border-bronze-500 hover:text-bronze-400 transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-1.5 rounded-full transition-all duration-300 ${
                        currentIndex === i
                          ? "w-8 bg-bronze-500"
                          : "w-2 bg-charcoal-700 hover:bg-charcoal-600"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 rounded-sm border border-charcoal-700 bg-charcoal-900 text-ivory-200 hover:border-bronze-500 hover:text-bronze-400 transition-colors flex items-center justify-center"
                >
                  <ChevronRight className="w-5 h-5" />
                </button>
              </div>
            </div>
          </RevealWrapper>
        </div>
      </div>
    </section>
  );
}
