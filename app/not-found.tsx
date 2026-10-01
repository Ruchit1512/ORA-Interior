import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[80vh] flex flex-col items-center justify-center text-center px-6 bg-[#111111] text-[#F8F6F2]">
      <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] block mb-4">
        404 — Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal text-[#F8F6F2] mb-4 tracking-tight">
        Space Under Design
      </h1>
      <p className="text-sm md:text-base text-[#C9C5BD] max-w-md mb-8 font-light leading-relaxed">
        The requested architectural page has moved or is not yet built. Explore our projects or return to the main studio overview.
      </p>
      <Link
        href="/"
        className="inline-flex items-center gap-2 px-8 py-4 bg-[#F8F6F2] text-[#111111] hover:bg-[#A58A63] hover:text-[#111111] transition-all text-xs uppercase tracking-[0.2em] font-medium"
      >
        <ArrowLeft className="w-3.5 h-3.5" />
        <span>Return to Overview</span>
      </Link>
    </div>
  );
}
