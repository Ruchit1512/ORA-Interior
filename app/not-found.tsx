import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="min-h-[70vh] flex flex-col items-center justify-center text-center px-4 bg-charcoal-950">
      <span className="text-xs font-mono uppercase tracking-[0.25em] text-bronze-400 block mb-3">
        404 — Page Not Found
      </span>
      <h1 className="font-serif text-4xl sm:text-5xl font-semibold text-ivory-100 mb-4">
        Space Under Design
      </h1>
      <p className="text-sm text-ivory-300/80 max-w-md mb-8">
        The page you are looking for has moved or does not exist. Explore our projects or return to the home sanctuary.
      </p>
      <Button asChild className="bg-bronze-500 text-charcoal-950 hover:bg-bronze-400 font-semibold px-6 py-5">
        <Link href="/">
          <ArrowLeft className="w-4 h-4 mr-2" />
          <span>Return Home</span>
        </Link>
      </Button>
    </div>
  );
}
