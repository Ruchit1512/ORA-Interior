import type { Metadata } from "next";
import { ProjectsSection } from "@/components/projects-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Selected Works & Portfolio | ORA Interior Bhopal",
  description:
    "View completed residential interior design and turnkey renovation projects in Bhopal by ORA Interior & Construction Solutions.",
};

export default function ProjectsPage() {
  return (
    <div className="pt-24 bg-[#111111]">
      <ProjectsSection />
      <CTASection />
    </div>
  );
}
