import React from "react";
import Link from "next/link";
import { ArrowUpRight, MapPin, MessageSquare, Phone, Mail } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { BrandLogo } from "@/components/brand-logo";

// ========================================================
// GOOGLE MAPS CONFIGURATION
// To customize with your exact studio map:
// 1. Open Google Maps, find your studio location -> Share -> Embed a map
// 2. Paste the `src="..."` URL into GOOGLE_MAP_EMBED_URL below.
// 3. Paste your direct Google Maps place URL into GOOGLE_MAPS_DIRECTIONS_URL.
// ========================================================
const GOOGLE_MAP_EMBED_URL =
  "https://maps.google.com/maps?q=Bhopal%2C%20Madhya%20Pradesh&t=&z=12&ie=UTF8&iwloc=&output=embed";

const GOOGLE_MAPS_DIRECTIONS_URL =
  "https://maps.google.com/?q=Bhopal,+Madhya+Pradesh";

const FOOTER_NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Services", href: "/services" },
  { label: "Projects", href: "/projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export function Footer() {
  return (
    <footer className="bg-[#111111] text-[#F8F6F2] pt-20 md:pt-24 pb-14 border-t border-[#F8F6F2]/10 overflow-hidden">
      <div className="container mx-auto">
        {/* Official Brand Header */}
        <div className="border-b border-[#F8F6F2]/10 pb-10 mb-14 md:mb-16 flex flex-col sm:flex-row items-start sm:items-end justify-between gap-6">
          <div>
            <BrandLogo variant="footer" priority={false} />
            <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.28em] text-[#A58A63] block mt-4">
              Interior &amp; Construction Solutions • Bhopal
            </span>
          </div>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#C9C5BD]/60">
            Madhya Pradesh • India
          </span>
        </div>

        {/* Main Grid: Desktop 2-column, Mobile stacked */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 pb-14 border-b border-[#F8F6F2]/10">
          {/* LEFT: Business Information & Contact Links */}
          <div className="lg:col-span-7 space-y-8">
            <div className="space-y-2">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
                Interior Architecture Studio
              </span>
              <h3 className="font-serif text-2xl sm:text-3xl font-normal text-[#F8F6F2] tracking-tight">
                Complete Interior &amp; Renovation Work
              </h3>
              <p className="text-sm font-sans text-[#C9C5BD] font-light leading-relaxed">
                Single-point design, materials, labour, and turnkey execution for modern homes in Bhopal.
              </p>
              <p className="text-xs font-mono text-[#A58A63] uppercase tracking-[0.16em] pt-1">
                Bhopal, Madhya Pradesh
              </p>
            </div>

            {/* Direct Contact Links */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-4 border-t border-[#F8F6F2]/10 text-xs font-mono">
              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A63] flex items-center gap-1.5">
                  <Phone className="w-3 h-3" />
                  <span>Phone</span>
                </span>
                <a
                  href="tel:+918435983078"
                  className="text-[#F8F6F2] hover:text-[#A58A63] transition-colors block text-sm font-sans font-medium"
                >
                  8435983078
                </a>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A63] flex items-center gap-1.5">
                  <Mail className="w-3 h-3" />
                  <span>Email</span>
                </span>
                <a
                  href="mailto:orainter24@gmail.com"
                  className="text-[#F8F6F2] hover:text-[#A58A63] transition-colors block text-sm font-sans"
                >
                  orainter24@gmail.com
                </a>
              </div>

              <div className="space-y-1.5">
                <span className="text-[10px] uppercase tracking-[0.2em] text-[#A58A63] flex items-center gap-1.5">
                  <MessageSquare className="w-3 h-3" />
                  <span>WhatsApp</span>
                </span>
                <a
                  href="https://wa.me/918435983078"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-[#F8F6F2] hover:text-[#A58A63] transition-colors text-sm font-sans group"
                >
                  <span>Chat on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-[#A58A63] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </a>
              </div>
            </div>

            {/* Desktop Navigation (Rendered here on lg screens) */}
            <div className="hidden lg:block pt-6 border-t border-[#F8F6F2]/10 space-y-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
                Navigation
              </span>
              <nav aria-label="Footer navigation">
                <ul className="flex flex-wrap items-center gap-x-8 gap-y-2 text-xs font-mono uppercase tracking-[0.16em]">
                  {FOOTER_NAV_LINKS.map((link) => (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="text-[#C9C5BD] hover:text-[#F8F6F2] transition-colors"
                      >
                        {link.label}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            </div>
          </div>

          {/* RIGHT: Compact Google Maps Section */}
          <div className="lg:col-span-5 space-y-4">
            <div className="flex items-center justify-between border-b border-[#F8F6F2]/10 pb-3">
              <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] flex items-center gap-1.5">
                <MapPin className="w-3.5 h-3.5" />
                <span>Find Us</span>
              </span>
              <span className="text-[10px] font-mono uppercase tracking-[0.18em] text-[#C9C5BD]">
                Bhopal Studio
              </span>
            </div>

            {/* Map Embed Container */}
            <div className="w-full overflow-hidden border border-[#F8F6F2]/15 rounded-sm bg-[#171717]">
              <iframe
                src={GOOGLE_MAP_EMBED_URL}
                width="100%"
                height="240"
                className="w-full h-[220px] md:h-[240px] border-0"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="ORA Interior & Construction Solutions location"
              />
            </div>

            {/* Get Directions CTA */}
            <div className="flex items-center justify-between pt-1">
              <a
                href={GOOGLE_MAPS_DIRECTIONS_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 text-xs font-mono uppercase tracking-[0.18em] text-[#A58A63] hover:text-[#F8F6F2] transition-colors group"
              >
                <span>Get Directions</span>
                <ArrowUpRight className="w-3.5 h-3.5 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>
              <span className="text-[10px] font-mono text-[#C9C5BD]">
                Mon–Sat • 9:30 AM – 7:30 PM
              </span>
            </div>
          </div>
        </div>

        {/* Mobile Navigation (Appears after map on mobile, ensuring clean vertical stack) */}
        <div className="lg:hidden py-8 border-b border-[#F8F6F2]/10 space-y-3">
          <span className="text-[10px] font-mono uppercase tracking-[0.25em] text-[#A58A63] block">
            Navigation
          </span>
          <nav aria-label="Footer navigation mobile">
            <ul className="grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs font-mono uppercase tracking-[0.16em]">
              {FOOTER_NAV_LINKS.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-[#C9C5BD] hover:text-[#F8F6F2] transition-colors block py-1"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        {/* Bottom Metadata & Copyright */}
        <div className="pt-10 flex flex-col sm:flex-row items-center justify-between text-[10px] font-mono uppercase tracking-[0.2em] text-[#C9C5BD]/60 gap-4">
          <span>&copy; 2026 ORA Interior &amp; Construction Solutions</span>
          <span>Bhopal • Architectural Interior Studio</span>
        </div>
      </div>
    </footer>
  );
}
