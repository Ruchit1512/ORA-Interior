import type { Metadata } from "next";
import { ContactSection } from "@/components/contact-section";

export const metadata: Metadata = {
  title: "Contact Studio | ORA Interior & Construction Solutions Bhopal",
  description:
    "Get in touch with ORA Interior & Construction Solutions in Bhopal. Call/WhatsApp 8435983078 or email orainter24@gmail.com for an architectural consultation and estimate.",
};

export default function ContactPage() {
  return (
    <div className="pt-24 bg-[#F5F3EF]">
      <ContactSection />
    </div>
  );
}
