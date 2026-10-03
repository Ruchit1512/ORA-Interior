"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, ArrowUpRight, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";
import { BrandLogo } from "@/components/brand-logo";
import { motion, AnimatePresence } from "framer-motion";

const NAV_LINKS = [
  { label: "Home", href: "/" },
  { label: "About", href: "/#about" },
  { label: "Services", href: "/#services" },
  { label: "Projects", href: "/#projects" },
  { label: "Why Us", href: "/#why-us" },
  { label: "Contact", href: "/#contact" },
];

export function Navbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const pathname = usePathname();

  const getHref = (href: string) => {
    if (href === "/#contact") {
      return pathname === "/" ? "#contact" : "/#contact";
    }
    if (href === "/#why-us") {
      return pathname === "/" ? "#why-us" : "/#why-us";
    }
    return href;
  };

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string) => {
    if (href.startsWith("#") || (pathname === "/" && href.startsWith("/#"))) {
      const id = href.replace("/#", "").replace("#", "");
      const targetElement = document.getElementById(id);
      if (targetElement) {
        e.preventDefault();
        targetElement.scrollIntoView({ behavior: "smooth" });
        window.history.pushState(null, "", `#${id}`);
      }
    }
  };

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
          {/* Official ORA Brand Logo */}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
            onClick={() => setMobileMenuOpen(false)}
          >
            <BrandLogo variant="navbar" isScrolled={isScrolled} priority />
          </motion.div>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center space-x-8 xl:space-x-10">
            {NAV_LINKS.map((link, index) => {
              const targetHref = getHref(link.href);
              const isActive = pathname === link.href;

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: -15 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.08, ease: [0.22, 1, 0.36, 1] }}
                  whileHover={{ y: -1 }}
                >
                  <Link
                    href={targetHref}
                    onClick={(e) => handleNavClick(e, link.href)}
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
                </motion.div>
              );
            })}
          </nav>

          {/* Right Action: Get Consultation (WhatsApp) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: 0.2 }}
            className="hidden sm:flex items-center gap-6"
          >
            <motion.a
              whileHover={{ y: -2 }}
              whileTap={{ scale: 0.98 }}
              href={COMPANY_INFO.whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className={`inline-flex items-center gap-2 text-xs uppercase tracking-[0.18em] font-medium px-4 py-2.5 transition-colors duration-300 border ${
                isScrolled
                  ? "border-[#171717] text-[#171717] hover:bg-[#111111] hover:text-[#F8F6F2]"
                  : "border-[#F8F6F2]/40 text-[#F8F6F2] hover:bg-[#F8F6F2] hover:text-[#111111]"
              }`}
            >
              <span>Get Consultation</span>
              <ArrowUpRight className="w-3.5 h-3.5" />
            </motion.a>
          </motion.div>

          {/* Mobile Menu Button */}
          <motion.button
            initial={{ opacity: 0, y: -15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className={`lg:hidden p-2 transition-colors focus:outline-none ${
              isScrolled ? "text-[#171717]" : "text-[#F8F6F2]"
            }`}
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </motion.button>
        </div>
      </header>

      {/* Mobile Full Screen Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-40 bg-[#111111] text-[#F8F6F2] flex flex-col justify-between p-8 pt-20 lg:hidden overflow-y-auto"
          >
            <div className="space-y-6">
              <div onClick={() => setMobileMenuOpen(false)}>
                <BrandLogo variant="mobile-menu" priority />
              </div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#A58A63] pt-2">
                Navigation
              </p>
              <div className="flex flex-col space-y-4">
                {NAV_LINKS.map((link, idx) => (
                  <motion.div
                    key={link.label}
                    initial={{ opacity: 0, x: -30 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.4, delay: 0.1 + idx * 0.06, ease: [0.22, 1, 0.36, 1] }}
                  >
                    <Link
                      href={getHref(link.href)}
                      onClick={(e) => {
                        handleNavClick(e, link.href);
                        setMobileMenuOpen(false);
                      }}
                      className="font-serif text-3xl sm:text-4xl text-[#F8F6F2] hover:text-[#A58A63] transition-colors"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: 0.3 }}
              className="pt-8 border-t border-[#FFFFFF]/15 space-y-4"
            >
              <motion.a
                whileHover={{ y: -2 }}
                whileTap={{ scale: 0.98 }}
                href={COMPANY_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setMobileMenuOpen(false)}
                className="w-full inline-flex items-center justify-center gap-2 py-4 bg-[#A58A63] text-[#111111] font-semibold text-xs uppercase tracking-[0.2em]"
              >
                <MessageSquare className="w-4 h-4 fill-current" />
                <span>Chat on WhatsApp</span>
              </motion.a>
              <div className="text-center text-xs text-[#C9C5BD] font-mono">
                Bhopal, Madhya Pradesh • {COMPANY_INFO.phoneFormatted}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
