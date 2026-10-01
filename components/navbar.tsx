"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Us", href: "/#why-ora" },
  { label: "Contact", href: "/contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? "bg-[#F5F3EF]/95 backdrop-blur-md border-b border-[#171717]/10 py-3.5 shadow-sm"
            : "bg-transparent py-6 md:py-8"
        }`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            className="group flex items-baseline gap-2 focus:outline-none"
            aria-label="ORA Interior and Construction Solutions"
          >
            <span
              className={`font-serif text-2xl md:text-3xl font-normal tracking-tight transition-colors duration-300 ${
                isScrolled ? "text-[#171717]" : "text-[#F8F6F2]"
              }`}
            >
              ORA
            </span>
            <span
              className={`text-[9px] tracking-[0.28em] uppercase font-sans font-medium transition-colors duration-300 ${
                isScrolled ? "text-[#68645D]" : "text-[#F8F6F2]/80"
              }`}
            >
              INTERIORS
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_LINKS.map((link) => {
              const isActive = pathname === link.href;

              return (
                <Link
                  key={link.label}
                  href={link.href}
                  className={`text-xs uppercase tracking-[0.16em] font-medium transition-colors duration-200 relative py-1 ${
                    isScrolled
                      ? isActive
                        ? "text-[#171717] font-semibold"
                        : "text-[#68645D] hover:text-[#171717]"
                      : isActive
                      ? "text-[#F8F6F2] font-semibold"
                      : "text-[#F8F6F2]/80 hover:text-[#F8F6F2]"
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Get Consultation (WhatsApp) */}
          <div className="hidden sm:flex items-center gap-6">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium px-4 py-2.5 transition-all duration-300 border ${
                isScrolled
                  ? "border-[#171717] text-[#171717] hover:bg-[#111111] hover:text-[#F8F6F2]"
                  : "border-[#F8F6F2]/40 text-[#F8F6F2] hover:bg-[#F8F6F2] hover:text-[#111111]"
              }`}
            >
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors focus:outline-none ${
              isScrolled ? "text-[#171717]" : "text-[#F8F6F2]"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      {mobileMenuOpen && (
        <div className="fixed inset-0 z-40 bg-[#111111] text-[#F8F6F2] flex flex-col justify-between p-8 pt-28 lg:hidden">
          <div className="space-y-6">
            <p className="text-[10px] uppercase tracking-[0.3em] text-[#A58A63]">
              Navigation
            </p>
            <div className="flex flex-col space-y-4">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="font-serif text-3xl sm:text-4xl text-[#F8F6F2] hover:text-[#A58A63] transition-colors"
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>

          <div className="pt-8 border-t border-[#FFFFFF]/15 space-y-4">
            <a
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#A58A63] text-[#111111] font-semibold text-xs uppercase tracking-[0.2em]"
            >
              <MessageSquare className="w-4 h-4 fill-current" />
              <span>Chat on WhatsApp</span>
            </a>
            <div className="text-center text-xs text-[#C9C5BD] font-mono">
              Bhopal, Madhya Pradesh • {COMPANY_INFO.phoneFormatted}
            </div>
          </div>
        </div>
      )}
    </>
  );
}
