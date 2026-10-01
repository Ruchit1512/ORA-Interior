"use client";

import React from "react";
import { motion } from "framer-motion";
import { MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-50">
      <motion.a
        href={COMPANY_INFO.whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with ORA Interior & Construction Solutions on WhatsApp"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
        whileHover={{ y: -2 }}
        whileTap={{ scale: 0.98 }}
        className="group flex items-center bg-[#111111] text-[#F8F6F2] hover:bg-[#A58A63] hover:text-[#111111] border border-[#A58A63]/40 shadow-xl rounded-full p-3 sm:px-4 sm:py-3 transition-colors duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A63] focus-visible:ring-offset-2 focus-visible:ring-offset-[#F5F3EF]"
      >
        <span className="flex items-center justify-center w-5 h-5 text-[#A58A63] group-hover:text-[#111111] transition-colors">
          <MessageSquare className="w-5 h-5 fill-current" />
        </span>

        {/* Text Label on Desktop / Expand on hover */}
        <div className="hidden sm:flex items-center overflow-hidden">
          <motion.span
            initial={false}
            animate={{ opacity: 1, width: "auto" }}
            className="text-xs uppercase tracking-[0.16em] font-medium whitespace-nowrap ml-2.5 font-sans"
          >
            Chat on WhatsApp
          </motion.span>
        </div>
      </motion.a>
    </div>
  );
}
