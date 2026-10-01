"use client";

import React, { useState, useEffect } from "react";
import { MessageSquare, Phone, ArrowUp, X } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function FloatingContact() {
  const [showScrollTop, setShowScrollTop] = useState(false);
  const [tooltipDismissed, setTooltipDismissed] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {/* Desktop Floating WhatsApp Button with Tooltip */}
      <aside aria-label="Quick contact actions" className="fixed bottom-6 right-6 z-40 hidden sm:flex flex-col items-end gap-3 pointer-events-none">
        {/* Tooltip speech bubble */}
        {!tooltipDismissed && (
          <div className="pointer-events-auto relative p-3 rounded-lg bg-charcoal-900/95 backdrop-blur-md border border-bronze-500/40 text-ivory-100 shadow-2xl max-w-xs animate-fade-in-up">
            <button
              onClick={() => setTooltipDismissed(true)}
              className="absolute -top-2 -right-2 w-5 h-5 rounded-full bg-charcoal-800 text-ivory-300 hover:text-ivory-100 flex items-center justify-center text-xs border border-charcoal-700"
              aria-label="Close tooltip"
            >
              <X className="w-3 h-3" />
            </button>
            <div className="flex items-center gap-2 mb-1">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              <p className="text-[11px] font-mono uppercase tracking-wider text-bronze-300 font-semibold">
                Online for Bhopal Enquiries
              </p>
            </div>
            <p className="text-xs text-ivory-200/90 leading-snug">
              Have floor plans or room photos? Send them on WhatsApp for a quick estimate!
            </p>
          </div>
        )}

        <div className="flex items-center gap-2 pointer-events-auto">
          {/* Scroll to Top */}
          {showScrollTop && (
            <button
              onClick={scrollToTop}
              aria-label="Scroll to top"
              className="w-11 h-11 rounded-full bg-charcoal-900/90 border border-charcoal-700 text-ivory-200 hover:border-bronze-400 hover:text-bronze-300 transition-all flex items-center justify-center shadow-lg hover:scale-105 active:scale-95"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          )}

          {/* WhatsApp Trigger */}
          <a
            href={COMPANY_INFO.whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="group relative flex items-center gap-2.5 px-4 py-3 rounded-full bg-emerald-600 hover:bg-emerald-500 text-white font-medium shadow-2xl shadow-emerald-600/30 transition-all hover:scale-105 active:scale-95 border border-emerald-400/30"
            aria-label="Chat with ORA Interior on WhatsApp"
          >
            <MessageSquare className="w-5 h-5 fill-white" />
            <span className="text-sm font-sans tracking-wide">WhatsApp</span>
            <span className="absolute -top-1 -right-1 flex h-3.5 w-3.5">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-300 opacity-75" />
              <span className="relative inline-flex rounded-full h-3.5 w-3.5 bg-emerald-400 border-2 border-charcoal-950" />
            </span>
          </a>
        </div>
      </aside>

      {/* Mobile Fixed Bottom Sticky Bar (< 640px) */}
      <nav aria-label="Mobile quick actions" className="fixed bottom-0 left-0 right-0 z-40 sm:hidden bg-charcoal-950/95 backdrop-blur-xl border-t border-charcoal-800 p-2.5 flex items-center gap-2 shadow-[0_-8px_25px_rgba(0,0,0,0.6)]">
        <a
          href={`tel:${COMPANY_INFO.phone}`}
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-charcoal-900 border border-charcoal-700 text-ivory-100 font-medium text-xs active:bg-charcoal-800 transition-colors"
        >
          <Phone className="w-3.5 h-3.5 text-bronze-400" />
          <span>Call Now</span>
        </a>

        <a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="flex-1 flex items-center justify-center gap-2 py-3 px-3 rounded-sm bg-emerald-600 text-white font-semibold text-xs active:bg-emerald-500 transition-colors shadow-lg shadow-emerald-600/20"
        >
          <MessageSquare className="w-3.5 h-3.5 fill-white" />
          <span>WhatsApp Us</span>
        </a>
      </nav>
    </>
  );
}
