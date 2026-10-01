import type { Metadata } from "next";
import { ServicesSection } from "@/components/services-section";
import { MaterialsSection } from "@/components/materials-section";
import { CTASection } from "@/components/cta-section";

export const metadata: Metadata = {
  title: "Interior Disciplines & Services | ORA Interior Bhopal",
  description:
    "Explore ORA Interior services in Bhopal: Modular Kitchen, Modern Bedroom & Wardrobe, TV Unit & Temple, 2D & 3D Design, and Complete Turnkey Renovation.",
};

export default function ServicesPage() {
  return (
    <div className="pt-24 bg-[#F5F3EF]">
      <ServicesSection />
      <MaterialsSection />
      <CTASection />
    </div>
  );
}
