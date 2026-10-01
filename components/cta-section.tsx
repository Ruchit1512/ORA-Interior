"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, MessageSquare, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function CTASection() {
  return (
    <section className="relative py-32 md:py-48 bg-[#111111] text-[#F5F3EF] overflow-hidden border-t border-[#FFFFFF]/10">
      {/* Background Architectural Image */}
      <div className="absolute inset-0 w-full h-full select-none pointer-events-none opacity-25">
        <Image
          src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=2000&q=85"
          alt="Architectural space background"
          fill
          sizes="100vw"
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#111111]/85" />
      </div>

      <div className="container mx-auto relative z-10 text-center max-w-4xl">
        <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#A58A63] block mb-6">
          Next Step
        </span>

        <h2 className="font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#F8F6F2] leading-[1.08] mb-6">
          LET&apos;S BUILD
          <br />
          <span className="italic text-[#C9C5BD]">YOUR SPACE.</span>
        </h2>

        <p className="text-base sm:text-lg md:text-xl text-[#C9C5BD] font-light max-w-xl mx-auto mb-12 leading-relaxed">
          Tell us what you&apos;re imagining. We&apos;ll create the 2D layout, 3D visualization, and execute every detail with precision in Bhopal.
        </p>

        {/* Action Buttons */}
        <div className="flex flex-wrap items-center justify-center gap-4 mb-16">
          <Link
            href="/#contact"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#A58A63] text-[#111111] hover:bg-[#b59a72] transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-sm"
          >
            <span>Start Your Project</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>

          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-8 py-4 bg-[#171717] border border-[#F8F6F2]/30 text-[#F8F6F2] hover:bg-[#111111] hover:border-[#A58A63] hover:text-[#A58A63] transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-sm"
          >
            <MessageSquare className="w-4 h-4 text-[#A58A63]" />
            <span>Chat on WhatsApp</span>
          </a>
        </div>

        {/* Direct Contact Links */}
        <div className="flex flex-wrap items-center justify-center gap-8 text-xs font-mono text-[#C9C5BD] pt-8 border-t border-[#F8F6F2]/15">
          <a
            href={`tel:${COMPANY_INFO.phone}`}
            className="hover:text-[#F8F6F2] transition-colors flex items-center gap-2"
          >
            <Phone className="w-3.5 h-3.5 text-[#A58A63]" />
            <span>+91 {COMPANY_INFO.phone}</span>
          </a>
          <a
            href={`mailto:${COMPANY_INFO.email}`}
            className="hover:text-[#F8F6F2] transition-colors flex items-center gap-2"
          >
            <Mail className="w-3.5 h-3.5 text-[#A58A63]" />
            <span>{COMPANY_INFO.email}</span>
          </a>
          <span className="text-[#C9C5BD]/60 hidden sm:inline-block">
            Bhopal, Madhya Pradesh
          </span>
        </div>
      </div>
    </section>
  );
}
