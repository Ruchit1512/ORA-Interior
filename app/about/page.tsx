import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";
import { ABOUT_DATA, COMPANY_INFO } from "@/lib/data";

export const metadata: Metadata = {
  title: "About Us | ORA Interior & Construction Solutions Bhopal",
  description:
    "Learn about ORA Interior & Construction Solutions, Bhopal's trusted complete interior design and renovation team providing labour, materials, and 2D/3D design under one roof.",
};

export default function AboutPage() {
  return (
    <div className="pt-32 pb-24 bg-[#F5F3EF] min-h-screen text-[#171717]">
      <div className="container mx-auto mb-16 md:mb-24">
        <div className="border-b border-[#171717]/10 pb-4 mb-12">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63]">
            Studio Overview
          </span>
        </div>

        <h1 className="font-serif text-4xl sm:text-6xl md:text-7xl font-normal tracking-tight text-[#111111] leading-tight max-w-4xl">
          Interiors Designed &amp; Built for Bhopal Homes
        </h1>

        <p className="mt-6 text-base sm:text-lg text-[#68645D] font-light leading-relaxed max-w-2xl">
          ORA Interior &amp; Construction Solutions was founded to solve the core frustration homeowners face during interior execution: disjointed carpenters, unreliable suppliers, and spiralling timelines.
        </p>
      </div>

      <div className="container mx-auto mb-24">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-7">
            <div className="relative aspect-[16/10] w-full overflow-hidden bg-[#ECE8E1] border border-[#171717]/10">
              <Image
                src={ABOUT_DATA.images.main}
                alt="ORA Interior craftsmanship in Bhopal"
                fill
                sizes="(max-width: 1024px) 100vw, 60vw"
                className="object-cover"
              />
            </div>
          </div>

          <div className="lg:col-span-5 space-y-6">
            <h2 className="font-serif text-3xl sm:text-4xl text-[#111111] font-normal leading-tight">
              One Stop Solutions for Your Dream Work
            </h2>
            <div className="space-y-4 text-sm text-[#68645D] font-light leading-relaxed">
              <p>
                From initial site measurement in Bhopal to complete 3D visualization, material procurement, and on-site execution, our team brings every critical trade under one coordinated umbrella.
              </p>
              <p>
                Whether you own a 1 BHK, 2 BHK, 3 BHK apartment or an expansive duplex bungalow, we adhere strictly to agreed milestones, transparent quotes, and certified durable materials.
              </p>
            </div>

            <div className="pt-4 border-t border-[#171717]/10">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-[#111111] text-[#F5F3EF] hover:bg-[#A58A63] hover:text-[#111111] transition-all text-xs uppercase tracking-[0.2em] font-medium"
              >
                <span>Request Consultation</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
