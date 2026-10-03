"use client";

import React from "react";
import { motion } from "framer-motion";
import { COMPANY_INFO } from "@/lib/data";

export function WhatsAppIcon({ className = "w-5 h-5" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="currentColor"
      className={className}
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden="true"
    >
      <path d="M17.472 14.382c-.301-.15-1.776-.876-2.051-.976-.275-.1-.475-.15-.675.15-.2.3-.775.976-.95 1.176-.176.2-.351.225-.651.075-.301-.15-1.27-.468-2.42-1.493-.895-.798-1.5-1.784-1.675-2.084-.176-.3-.019-.462.13-.612.136-.135.301-.35.451-.525.151-.175.201-.3.301-.5.1-.2.05-.375-.025-.525-.075-.15-.675-1.625-.925-2.226-.244-.585-.492-.505-.676-.514l-.575-.01c-.2 0-.525.075-.8.375-.275.3-1.05 1.026-1.05 2.502 0 1.477 1.075 2.903 1.226 3.103.15.2 2.115 3.23 5.124 4.53 3.01 1.3 3.01.867 3.56.817.55-.05 1.776-.726 2.026-1.427.25-.701.25-1.302.176-1.427-.075-.125-.276-.2-.576-.35zM12.004 21.996c-1.796 0-3.559-.481-5.105-1.391l-.366-.217-3.791.994 1.012-3.693-.238-.379c-1-1.591-1.528-3.435-1.528-5.321 0-5.508 4.481-9.989 9.99-9.989 2.668 0 5.176 1.039 7.06 2.923 1.884 1.884 2.921 4.392 2.921 7.063 0 5.509-4.482 9.99-9.989 9.99zM20.52 3.479C18.246 1.203 15.225 0 12.004 0 5.437 0 .09 5.347.09 11.916c0 2.098.548 4.145 1.589 5.952L0 24l6.301-1.653c1.737.947 3.697 1.447 5.703 1.447h.005c6.565 0 11.913-5.348 11.913-11.918 0-3.181-1.239-6.202-3.513-8.477z" />
    </svg>
  );
}

export function FloatingWhatsApp() {
  return (
    <div className="fixed bottom-5 right-5 sm:bottom-7 sm:right-7 z-50 flex flex-col items-center">
      {/* Smooth Up & Down Floating / Bobbing Wrapper */}
      <motion.div
        animate={{
          y: [0, -9, 0],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="relative"
      >
        <motion.a
          href={COMPANY_INFO.whatsappUrl}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Chat with ORA Interior & Construction Solutions on WhatsApp"
          whileHover={{ scale: 1.05, y: -2 }}
          whileTap={{ scale: 0.96 }}
          className="group relative flex items-center gap-3 bg-[#141414]/90 backdrop-blur-xl border border-white/15 hover:border-[#25D366]/60 p-2 sm:pl-2.5 sm:pr-4 sm:py-2.5 rounded-full shadow-[0_10px_30px_rgba(0,0,0,0.5)] hover:shadow-[0_12px_35px_rgba(37,211,102,0.3)] transition-all duration-300 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#25D366]"
        >
          {/* WhatsApp Icon Circle with Gradient & Glow */}
          <div className="relative flex items-center justify-center w-10 h-10 sm:w-11 sm:h-11 rounded-full bg-gradient-to-tr from-[#1EBE5D] to-[#25D366] text-white shadow-md shadow-[#25D366]/30 group-hover:scale-105 transition-transform duration-300">
            <WhatsAppIcon className="w-5 h-5 sm:w-6 sm:h-6 fill-current" />

            {/* Pulsing Live Online Beacon */}
            <span className="absolute -top-0.5 -right-0.5 flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#25D366] opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-[#25D366] border-2 border-[#141414]" />
            </span>
          </div>

          {/* Desktop Text Details */}
          <div className="hidden sm:flex flex-col text-left pr-1">
            <div className="flex items-center gap-1.5">
      
            </div>
            <span className="text-xs font-sans font-medium text-[#F8F6F2] tracking-[0.03em] whitespace-nowrap group-hover:text-white transition-colors">
              Chat on WhatsApp
            </span>
          </div>
        </motion.a>
      </motion.div>

      {/* Floor Shadow that responds to the vertical bobbing movement */}
      <motion.div
        animate={{
          scale: [1, 0.72, 1],
          opacity: [0.45, 0.2, 0.45],
        }}
        transition={{
          duration: 3,
          repeat: Infinity,
          repeatType: "reverse",
          ease: "easeInOut",
        }}
        className="w-12 h-1.5 bg-black/50 blur-[3px] rounded-full mt-1.5 pointer-events-none"
      />
    </div>
  );
}
