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
    <section className="py-24 md:py-32 bg-[#111111] border-t border-[#171717] relative overflow-hidden text-[#F8F6F2]">
      <div className="container mx-auto px-6 md:px-12">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="mb-14">
            <RevealWrapper direction="up">
              <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] block mb-3">
                Client Testimonials
              </span>
            </RevealWrapper>
            <RevealWrapper direction="up" delay={0.1}>
              <h2 className="font-serif text-3xl sm:text-4xl md:text-5xl font-normal text-[#F8F6F2] tracking-tight">
                Client Reflections
              </h2>
            </RevealWrapper>
          </div>

          {/* Testimonial Card */}
          <RevealWrapper direction="up" delay={0.2}>
            <div className="relative p-8 sm:p-12 md:p-16 bg-[#171717] border border-[#F8F6F2]/10 text-center">
              {/* Architectural Quote Icon */}
              <div className="flex justify-center mb-6">
                <div className="w-12 h-12 bg-[#A58A63]/10 border border-[#A58A63]/25 flex items-center justify-center text-[#A58A63]">
                  <Quote className="w-5 h-5 rotate-180" />
                </div>
              </div>

              {/* 5-Star indicator */}
              <div className="flex justify-center gap-1.5 mb-6 text-[#A58A63]">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-[#A58A63] text-[#A58A63]" />
                ))}
              </div>

              {/* Quote Content */}
              <blockquote className="font-serif text-xl sm:text-2xl md:text-3xl text-[#F8F6F2] font-light leading-relaxed mb-8">
                &ldquo;{current.quote}&rdquo;
              </blockquote>

              {/* Author & Project Details */}
              <div className="space-y-1">
                <div className="font-sans font-medium text-base text-[#F8F6F2]">
                  {current.name}
                </div>
                <div className="text-xs sm:text-sm font-mono text-[#C9C5BD]">
                  {current.projectType} • {current.location}
                </div>
              </div>

              {/* Slider Controls */}
              <div className="flex items-center justify-center gap-4 mt-8 pt-6 border-t border-[#F8F6F2]/10">
                <button
                  onClick={prev}
                  aria-label="Previous testimonial"
                  className="w-10 h-10 border border-[#F8F6F2]/15 bg-[#111111] text-[#F8F6F2] hover:border-[#A58A63] hover:text-[#A58A63] transition-colors flex items-center justify-center"
                >
                  <ChevronLeft className="w-5 h-5" />
                </button>

                <div className="flex items-center gap-1.5">
                  {TESTIMONIALS_DATA.map((_, i) => (
                    <button
                      key={i}
                      onClick={() => setCurrentIndex(i)}
                      aria-label={`Go to slide ${i + 1}`}
                      className={`h-1 transition-all duration-300 ${
                        currentIndex === i
                          ? "w-8 bg-[#A58A63]"
                          : "w-2 bg-[#F8F6F2]/20 hover:bg-[#F8F6F2]/40"
                      }`}
                    />
                  ))}
                </div>

                <button
                  onClick={next}
                  aria-label="Next testimonial"
                  className="w-10 h-10 border border-[#F8F6F2]/15 bg-[#111111] text-[#F8F6F2] hover:border-[#A58A63] hover:text-[#A58A63] transition-colors flex items-center justify-center"
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
