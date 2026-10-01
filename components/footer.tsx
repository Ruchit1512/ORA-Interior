import React from "react";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F5F3EF] pt-24 pb-16 border-t border-[#FFFFFF]/10">
      <div className="container mx-auto">
        {/* Large Architectural Watermark Title */}
        <div className="border-b border-[#FFFFFF]/15 pb-16 mb-16">
          <span className="font-serif text-6xl sm:text-8xl md:text-9xl lg:text-[140px] font-normal tracking-tight text-[#FFFFFF]/90 block leading-none select-none">
            ORA
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.3em] text-[#A58A63] block mt-4">
            Interior &amp; Construction Solutions • Bhopal
          </span>
        </div>

        {/* 4-Column Minimal Grid */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 pb-16 border-b border-[#FFFFFF]/15">
          {/* Col 1: Studio */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
              Studio
            </span>
            <p className="text-xs text-[#F5F3EF]/70 font-light leading-relaxed">
              Complete interior design, renovation, and turnkey execution solutions for modern residences in Bhopal, Madhya Pradesh.
            </p>
            <p className="text-[11px] font-mono text-[#F5F3EF]/40 pt-2">
              Hours: {COMPANY_INFO.openingHours}
            </p>
          </div>

          {/* Col 2: Navigation */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
              Navigation
            </span>
            <ul className="space-y-2.5 text-xs font-mono uppercase tracking-[0.16em]">
              <li>
                <Link href="/" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link href="/#about" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link href="/#services" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  Disciplines
                </Link>
              </li>
              <li>
                <Link href="/#projects" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  Selected Works
                </Link>
              </li>
              <li>
                <Link href="/#why-ora" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  Why Us
                </Link>
              </li>
              <li>
                <Link href="/contact" className="text-[#F5F3EF]/70 hover:text-[#FFFFFF] transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Col 3: Disciplines */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
              Execution
            </span>
            <ul className="space-y-2.5 text-xs text-[#F5F3EF]/70 font-light">
              <li>Modular Kitchen</li>
              <li>Bedroom &amp; Wardrobe</li>
              <li>TV Unit &amp; Temple</li>
              <li>Complete Renovation</li>
              <li>2D &amp; 3D Design</li>
              <li>Labour + Materials Turnkey</li>
            </ul>
          </div>

          {/* Col 4: Contact Direct */}
          <div className="space-y-4">
            <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
              Direct Access
            </span>
            <div className="space-y-2 text-xs font-mono text-[#F5F3EF]/70">
              <a
                href={`tel:${COMPANY_INFO.phone}`}
                className="hover:text-[#FFFFFF] block transition-colors"
              >
                +91 {COMPANY_INFO.phone}
              </a>
              <a
                href={`mailto:${COMPANY_INFO.email}`}
                className="hover:text-[#FFFFFF] block transition-colors"
              >
                {COMPANY_INFO.email}
              </a>
              <p className="text-[#F5F3EF]/40 pt-1">
                Bhopal, Madhya Pradesh
              </p>
            </div>
            <div className="pt-2">
              <a
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono text-[#A58A63] hover:text-[#FFFFFF] transition-colors"
              >
                <span>WhatsApp Studio</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Metadata */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#F5F3EF]/40 gap-4">
          <span>&copy; 2026 ORA Interior &amp; Construction Solutions</span>
          <span>Bhopal • Architectural Interior Studio</span>
        </div>
      </div>
    </footer>
  );
}
