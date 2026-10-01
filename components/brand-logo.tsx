import React from "react";
import Image from "next/image";
import Link from "next/link";

interface BrandLogoProps {
  variant?: "navbar" | "footer" | "mobile-menu" | "standalone";
  isScrolled?: boolean;
  className?: string;
  priority?: boolean;
  withLink?: boolean;
}

export function BrandLogo({
  variant = "navbar",
  isScrolled = false,
  className = "",
  priority = true,
  withLink = true,
}: BrandLogoProps) {
  // Navbar with smooth crossfade between hero (logo.png) and scrolled (logo2.png)
  if (variant === "navbar") {
    const navbarContent = (
      <div className={`relative inline-flex items-center min-h-[40px] md:min-h-[44px] ${className}`}>
        {/* Unscrolled Light Logo (Over dark hero / video) */}
        <div
          className={`transition-opacity duration-300 flex items-center ${
            isScrolled
              ? "opacity-0 pointer-events-none absolute left-0"
              : "opacity-100 relative"
          }`}
        >
          <Image
            src="/images/logo.png"
            alt="ORA Interior & Construction Solutions"
            width={135}
            height={90}
            priority={priority}
            className="w-auto h-auto max-h-[42px] md:max-h-[46px] object-contain mix-blend-screen select-none"
          />
        </div>

        {/* Scrolled Dark Logo (logo2.png - Clean dark logo with transparency on light navbar) */}
        <div
          className={`transition-opacity duration-300 flex items-center ${
            isScrolled
              ? "opacity-100 relative"
              : "opacity-0 pointer-events-none absolute left-0"
          }`}
        >
          <Image
            src="/images/logo2.png"
            alt="ORA Interior & Construction Solutions"
            width={140}
            height={70}
            priority={priority}
            className="w-auto h-auto max-h-[38px] md:max-h-[42px] object-contain select-none"
          />
        </div>
      </div>
    );

    if (withLink) {
      return (
        <Link
          href="/"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A63] rounded-sm group"
          aria-label="ORA Interior & Construction Solutions - Home"
        >
          {navbarContent}
        </Link>
      );
    }

    return navbarContent;
  }

  // Footer Branding (on dark background #111111)
  if (variant === "footer") {
    const footerContent = (
      <div className={`inline-flex items-center justify-center overflow-hidden ${className}`}>
        <Image
          src="/images/logo.png"
          alt="ORA Interior & Construction Solutions"
          width={180}
          height={120}
          priority={false}
          className="w-auto h-auto max-h-[64px] sm:max-h-[76px] object-contain mix-blend-screen select-none"
        />
      </div>
    );

    if (withLink) {
      return (
        <Link
          href="/"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A63] rounded-sm group"
          aria-label="ORA Interior & Construction Solutions - Home"
        >
          {footerContent}
        </Link>
      );
    }

    return footerContent;
  }

  // Mobile Menu Branding (on dark background #111111)
  if (variant === "mobile-menu") {
    const mobileContent = (
      <div className={`inline-flex items-center justify-center overflow-hidden ${className}`}>
        <Image
          src="/images/logo.png"
          alt="ORA Interior & Construction Solutions"
          width={140}
          height={93}
          priority={priority}
          className="w-auto h-auto max-h-[46px] object-contain mix-blend-screen select-none"
        />
      </div>
    );

    if (withLink) {
      return (
        <Link
          href="/"
          className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A63] rounded-sm group"
          aria-label="ORA Interior & Construction Solutions - Home"
        >
          {mobileContent}
        </Link>
      );
    }

    return mobileContent;
  }

  // Default / Standalone variant
  const defaultContent = (
    <div className={`inline-flex items-center justify-center overflow-hidden ${className}`}>
      <Image
        src={isScrolled ? "/images/logo2.png" : "/images/logo.png"}
        alt="ORA Interior & Construction Solutions"
        width={160}
        height={107}
        priority={priority}
        className="w-auto h-auto max-h-[52px] object-contain select-none"
      />
    </div>
  );

  if (withLink) {
    return (
      <Link
        href="/"
        className="inline-flex items-center focus:outline-none focus-visible:ring-2 focus-visible:ring-[#A58A63] rounded-sm group"
        aria-label="ORA Interior & Construction Solutions - Home"
      >
        {defaultContent}
      </Link>
    );
  }

  return defaultContent;
}
