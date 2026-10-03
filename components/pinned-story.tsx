"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Image from "next/image";
import gsap from "gsap";
import { ArrowLeft, ArrowRight } from "lucide-react";

const PHILOSOPHY_SLIDES = [
  {
    step: "01",
    total: "04",
    title: "DESIGN",
    subtitle: "Thoughtful spaces created around your lifestyle.",
    detail: "Balancing light, volume and functional living patterns into a bespoke architectural canvas tailored for modern living.",
    image: "https://images.unsplash.com/photo-1558442074-3c19857bc1dc?q=80&w=1931&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Concept & Spatial Planning • Bhopal",
  },
  {
    step: "02",
    total: "04",
    title: "DETAIL",
    subtitle: "Every element has a purpose, proportion and character.",
    detail: "Precision joinery, seamless alignments, and custom millwork executed by dedicated craftsmen on-site in Bhopal.",
    image: "https://images.unsplash.com/photo-1616594039964-ae9021a400a0?q=80&w=2080&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    badge: "Precision Joinery & Material Selection",
  },
  {
    step: "03",
    total: "04",
    title: "MATERIAL",
    subtitle: "Warm materials and refined finishes create timeless spaces.",
    detail: "Certified marine ply, German soft-close hardware, tactile veneers, and calibrated stone finishes built to endure.",
    image: "/images/executation.png",
    badge: "Turnkey On-Site Management & Craft",
  },
  {
    step: "04",
    total: "04",
    title: "SPACE",
    subtitle: "Interiors designed to feel open, balanced and personal.",
    detail: "A seamless transition from blueprint to handover — delivering a sanctuary that truly reflects your everyday rhythm.",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1400&q=85",
    badge: "Handover Ready • A Sanctuary",
  },
];

export function PinnedStory() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const isAnimatingRef = useRef(false);
  const isPausedRef = useRef(false);
  const autoplayTimerRef = useRef<NodeJS.Timeout | null>(null);

  // Drag / swipe gesture tracking
  const dragStartXRef = useRef<number | null>(null);
  const isDraggingRef = useRef(false);

  // DOM Refs
  const sectionRef = useRef<HTMLDivElement>(null);
  const slidesWrapperRef = useRef<HTMLDivElement>(null);
  const slideElementsRef = useRef<(HTMLDivElement | null)[]>([]);
  const progressBarRef = useRef<HTMLDivElement>(null);

  // Go to specific slide with directional GSAP animation
  const goToSlide = useCallback(
    (targetIndex: number, direction?: "next" | "prev") => {
      if (isAnimatingRef.current) return;
      if (targetIndex === currentSlide) return;

      const totalSlides = PHILOSOPHY_SLIDES.length;
      let dir = 1;

      if (direction) {
        dir = direction === "next" ? 1 : -1;
      } else {
        if (currentSlide === totalSlides - 1 && targetIndex === 0) {
          dir = 1;
        } else if (currentSlide === 0 && targetIndex === totalSlides - 1) {
          dir = -1;
        } else {
          dir = targetIndex > currentSlide ? 1 : -1;
        }
      }

      isAnimatingRef.current = true;

      const outSlide = slideElementsRef.current[currentSlide];
      const inSlide = slideElementsRef.current[targetIndex];

      if (!outSlide || !inSlide) {
        setCurrentSlide(targetIndex);
        isAnimatingRef.current = false;
        return;
      }

      // Query elements inside outgoing slide
      const outImg = outSlide.querySelector(".slider-image-inner") as HTMLElement;
      const outHeading = outSlide.querySelector(".slider-heading") as HTMLElement;
      const outDesc = outSlide.querySelector(".slider-desc") as HTMLElement;
      const outDetail = outSlide.querySelector(".slider-detail") as HTMLElement;
      const outBadge = outSlide.querySelector(".slider-badge") as HTMLElement;

      // Query elements inside incoming slide
      const inImg = inSlide.querySelector(".slider-image-inner") as HTMLElement;
      const inImageContainer = inSlide.querySelector(".slider-image-container") as HTMLElement;
      const inNum = inSlide.querySelector(".slider-number") as HTMLElement;
      const inHeading = inSlide.querySelector(".slider-heading") as HTMLElement;
      const inDesc = inSlide.querySelector(".slider-desc") as HTMLElement;
      const inDetail = inSlide.querySelector(".slider-detail") as HTMLElement;
      const inBadge = inSlide.querySelector(".slider-badge") as HTMLElement;

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          gsap.set(outSlide, { display: "none", zIndex: 1 });
          setCurrentSlide(targetIndex);
          isAnimatingRef.current = false;
        },
      });

      // Prepare incoming slide
      gsap.set(inSlide, { display: "block", zIndex: 5, opacity: 1 });

      // 1. OUTGOING ANIMATION
      if (outImg) {
        tl.to(
          outImg,
          {
            scale: 0.96,
            opacity: 0,
            xPercent: dir * -15,
            duration: 0.9,
          },
          0
        );
      }

      if (outHeading) {
        tl.to(
          outHeading,
          {
            x: dir * -40,
            opacity: 0,
            duration: 0.55,
            ease: "power2.in",
          },
          0
        );
      }

      if (outDesc) {
        tl.to(
          outDesc,
          {
            y: -20,
            opacity: 0,
            duration: 0.5,
            ease: "power2.in",
          },
          0.05
        );
      }

      if (outDetail) {
        tl.to(outDetail, { opacity: 0, duration: 0.4 }, 0);
      }

      if (outBadge) {
        tl.to(outBadge, { opacity: 0, duration: 0.4 }, 0);
      }

      // 2. INCOMING ANIMATION
      if (inImg) {
        tl.fromTo(
          inImg,
          {
            scale: 1.06,
            opacity: 0,
            xPercent: dir * 18,
          },
          {
            scale: 1,
            opacity: 1,
            xPercent: 0,
            duration: 0.95,
          },
          0.1
        );
      }

      if (inImageContainer) {
        tl.fromTo(
          inImageContainer,
          {
            clipPath:
              dir === 1
                ? "inset(0% 0% 0% 100%)"
                : "inset(0% 100% 0% 0%)",
          },
          {
            clipPath: "inset(0% 0% 0% 0%)",
            duration: 0.9,
          },
          0.05
        );
      }

      if (inNum) {
        tl.fromTo(
          inNum,
          { y: 10, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.65, ease: "power2.out" },
          0.2
        );
      }

      if (inHeading) {
        tl.fromTo(
          inHeading,
          { x: dir * 40, opacity: 0 },
          { x: 0, opacity: 1, duration: 0.85, ease: "power3.out" },
          0.25
        );
      }

      if (inDesc) {
        tl.fromTo(
          inDesc,
          { y: 20, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
          0.35
        );
      }

      if (inDetail) {
        tl.fromTo(
          inDetail,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.75, ease: "power2.out" },
          0.45
        );
      }

      if (inBadge) {
        tl.fromTo(
          inBadge,
          { y: 15, opacity: 0 },
          { y: 0, opacity: 1, duration: 0.7, ease: "power2.out" },
          0.5
        );
      }

      // Animate progress line
      if (progressBarRef.current) {
        const progressPercent = ((targetIndex + 1) / totalSlides) * 100;
        gsap.to(progressBarRef.current, {
          width: `${progressPercent}%`,
          duration: 0.85,
          ease: "power3.inOut",
        });
      }
    },
    [currentSlide]
  );

  const handleNext = useCallback(() => {
    const nextIdx = (currentSlide + 1) % PHILOSOPHY_SLIDES.length;
    goToSlide(nextIdx, "next");
  }, [currentSlide, goToSlide]);

  const handlePrev = useCallback(() => {
    const prevIdx =
      (currentSlide - 1 + PHILOSOPHY_SLIDES.length) % PHILOSOPHY_SLIDES.length;
    goToSlide(prevIdx, "prev");
  }, [currentSlide, goToSlide]);

  // Reset autoplay interval on interaction
  const resetAutoplay = useCallback(() => {
    if (autoplayTimerRef.current) {
      clearInterval(autoplayTimerRef.current);
    }
    autoplayTimerRef.current = setInterval(() => {
      if (!isPausedRef.current && !isAnimatingRef.current) {
        handleNext();
      }
    }, 2000);
  }, [handleNext]);

  // Set up autoplay
  useEffect(() => {
    resetAutoplay();
    return () => {
      if (autoplayTimerRef.current) {
        clearInterval(autoplayTimerRef.current);
      }
    };
  }, [resetAutoplay]);

  // Initialize first slide on mount
  useEffect(() => {
    slideElementsRef.current.forEach((el, idx) => {
      if (!el) return;
      if (idx === 0) {
        gsap.set(el, { display: "block", zIndex: 5, opacity: 1 });
      } else {
        gsap.set(el, { display: "none", zIndex: 1, opacity: 0 });
      }
    });

    if (progressBarRef.current) {
      gsap.set(progressBarRef.current, {
        width: `${(1 / PHILOSOPHY_SLIDES.length) * 100}%`,
      });
    }
  }, []);

  // Gesture Handlers (Mouse Drag & Touch Swipe)
  const handleTouchStart = (e: React.TouchEvent) => {
    dragStartXRef.current = e.touches[0].clientX;
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (dragStartXRef.current === null) return;
    const diff = e.changedTouches[0].clientX - dragStartXRef.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
      resetAutoplay();
    }
    dragStartXRef.current = null;
  };

  const handleMouseDown = (e: React.MouseEvent) => {
    dragStartXRef.current = e.clientX;
    isDraggingRef.current = true;
  };

  const handleMouseUp = (e: React.MouseEvent) => {
    if (!isDraggingRef.current || dragStartXRef.current === null) return;
    const diff = e.clientX - dragStartXRef.current;
    if (Math.abs(diff) > 45) {
      if (diff < 0) {
        handleNext();
      } else {
        handlePrev();
      }
      resetAutoplay();
    }
    dragStartXRef.current = null;
    isDraggingRef.current = false;
  };

  return (
    <section
      ref={sectionRef}
      onMouseEnter={() => {
        isPausedRef.current = false;
      }}
      onMouseLeave={() => {
        isPausedRef.current = false;
        isDraggingRef.current = false;
      }}
      className="relative py-20 md:py-32 bg-[#F5F3EF] border-t border-[#171717]/10 overflow-hidden select-none"
    >
      <div className="container mx-auto px-6 md:px-12 flex flex-col justify-between">
        {/* Top Header Section Tagline */}
        <div className="mb-12 md:mb-16 border-b border-[#171717]/10 pb-4 flex items-center justify-between text-[10px] md:text-xs font-mono uppercase tracking-[0.25em]">
          <span className="text-[#A58A63] font-medium">The Design Philosophy</span>
          <span className="text-[#68645D]">01 — 04 Studio Disciplines</span>
        </div>

        {/* Horizontal Editorial Slider Stage */}
        <div
          ref={slidesWrapperRef}
          onTouchStart={handleTouchStart}
          onTouchEnd={handleTouchEnd}
          onMouseDown={handleMouseDown}
          onMouseUp={handleMouseUp}
          className="relative min-h-[580px] sm:min-h-[520px] md:min-h-[480px] lg:min-h-[540px] cursor-grab active:cursor-grabbing"
        >
          {PHILOSOPHY_SLIDES.map((slide, idx) => (
            <div
              key={slide.step}
              ref={(el) => {
                slideElementsRef.current[idx] = el;
              }}
              className="absolute inset-0 w-full h-full"
            >
              <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16 items-center h-full">
                {/* Left: Editorial Typography & Philosophy Narrative */}
                <div className="lg:col-span-5 flex flex-col justify-center space-y-5 md:space-y-6">
                  {/* Slide Step & Progress Tag */}
                  <div className="slider-number flex items-center gap-4">
                    <span className="font-mono text-xs uppercase tracking-[0.25em] text-[#A58A63] font-semibold">
                      {slide.step} / {slide.total}
                    </span>
                    <span className="h-[1px] w-12 bg-[#A58A63]/60 origin-left" />
                  </div>

                  {/* Main Editorial Heading */}
                  <div className="overflow-hidden py-1">
                    <h2 className="slider-heading font-serif text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-normal tracking-tight text-[#111111] leading-none">
                      {slide.title}
                    </h2>
                  </div>

                  {/* Description Subtitle */}
                  <p className="slider-desc text-base sm:text-lg md:text-xl text-[#68645D] font-light leading-relaxed max-w-md">
                    {slide.subtitle}
                  </p>

                  {/* Architectural Detail Note */}
                  <div className="slider-detail pt-5 border-t border-[#171717]/10 max-w-sm">
                    <span className="text-[10px] font-mono uppercase tracking-[0.2em] text-[#A58A63] block font-medium">
                      Studio Standard
                    </span>
                    <p className="text-xs text-[#68645D] font-sans font-light mt-1.5 leading-relaxed">
                      {slide.detail}
                    </p>
                  </div>
                </div>

                {/* Right: Architectural Interior Imagery */}
                <div className="lg:col-span-7">
                  <div className="slider-image-container relative aspect-[4/3] sm:aspect-[16/10] md:aspect-[16/11] overflow-hidden bg-[#ECE8E1] border border-[#171717]/12 shadow-sm">
                    <div className="slider-image-inner relative w-full h-full will-change-transform">
                      <Image
                        src={slide.image}
                        alt={`${slide.title} - ${slide.badge}`}
                        fill
                        sizes="(max-width: 1024px) 100vw, 60vw"
                        priority={idx === 0}
                        className="object-cover"
                      />
                    </div>

                    {/* Small Black Image Label */}
                    <div className="slider-badge absolute bottom-4 left-4 sm:bottom-5 sm:left-5 px-3 py-1.5 sm:px-3.5 sm:py-2 bg-[#111111]/85 backdrop-blur-md text-[10px] sm:text-xs font-mono uppercase tracking-[0.18em] text-[#F8F6F2] border border-[#F8F6F2]/15 shadow-sm">
                      {slide.badge}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Architectural Editorial Controls Bar */}
        <div className="mt-12 md:mt-16 pt-6 border-t border-[#171717]/10 flex flex-col sm:flex-row items-center justify-between gap-6">
          {/* Active Step Indicator & Thin Progress Line */}
          <div className="flex items-center gap-6 w-full sm:w-auto">
            <span className="font-mono text-xs uppercase tracking-[0.22em] text-[#111111] font-medium min-w-[70px]">
              0{currentSlide + 1} &mdash; 04
            </span>

            {/* Architectural Progress Line */}
            <div className="relative w-40 sm:w-56 h-[2px] bg-[#171717]/15 overflow-hidden">
              <div
                ref={progressBarRef}
                className="absolute left-0 top-0 h-full bg-[#A58A63] transition-none"
              />
            </div>
          </div>

          {/* Editorial Navigation Buttons: ← PREV / NEXT → */}
          <div className="flex items-center gap-8 text-xs font-mono uppercase tracking-[0.2em]">
            <button
              onClick={() => {
                handlePrev();
                resetAutoplay();
              }}
              aria-label="Previous Philosophy Slide"
              className="flex items-center gap-2 text-[#68645D] hover:text-[#111111] transition-colors py-2 px-1 group cursor-pointer"
            >
              <ArrowLeft className="w-3.5 h-3.5 transition-transform group-hover:-translate-x-1" />
              <span>PREV</span>
            </button>

            <span className="text-[#171717]/20 select-none">/</span>

            <button
              onClick={() => {
                handleNext();
                resetAutoplay();
              }}
              aria-label="Next Philosophy Slide"
              className="flex items-center gap-2 text-[#68645D] hover:text-[#111111] transition-colors py-2 px-1 group cursor-pointer"
            >
              <span>NEXT</span>
              <ArrowRight className="w-3.5 h-3.5 transition-transform group-hover:translate-x-1" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
