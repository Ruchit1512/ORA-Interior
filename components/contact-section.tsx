"use client";

import React, { useState } from "react";
import { ArrowUpRight, CheckCircle2, Phone, Mail, MapPin, MessageSquare } from "lucide-react";
import { COMPANY_INFO } from "@/lib/data";

export function ContactSection() {
  const [submitted, setSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    propertyType: "3 BHK Apartment",
    service: "Complete Interior (Labour + Materials)",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <section id="contact" className="py-24 md:py-36 bg-[#F5F3EF] border-t border-[#171717]/10 relative">
      <div className="container mx-auto">
        {/* Section Header */}
        <div className="flex items-center justify-between border-b border-[#171717]/10 pb-4 mb-16 md:mb-20">
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.25em] text-[#A58A63] font-medium">
            Direct Inquiry
          </span>
          <span className="text-[10px] md:text-xs font-mono uppercase tracking-[0.2em] text-[#68645D]">
            Bhopal Studio
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 items-start">
          {/* Left Column: Studio Information */}
          <div className="lg:col-span-5 space-y-10">
            <div>
              <h2 className="font-serif text-4xl sm:text-5xl md:text-6xl font-normal tracking-tight text-[#111111] leading-tight">
                START YOUR
                <br />
                <span className="italic text-[#68645D]">PROJECT.</span>
              </h2>
              <p className="text-base text-[#68645D] font-light max-w-sm mt-4 leading-relaxed">
                Connect directly with our Bhopal design &amp; build team to schedule a site measurement, review 2D/3D plans, or request a detailed estimate.
              </p>
            </div>

            <div className="space-y-6 border-t border-[#171717]/15 pt-8 text-xs font-mono">
              <div className="space-y-1">
                <span className="text-[#A58A63] uppercase tracking-[0.2em] font-semibold block">
                  Studio Location
                </span>
                <p className="text-sm font-sans text-[#111111] font-medium">
                  ORA Interior &amp; Construction Solutions
                </p>
                <p className="text-xs font-sans text-[#68645D]">
                  Bhopal, Madhya Pradesh, India
                </p>
              </div>

              <div className="space-y-1">
                <span className="text-[#A58A63] uppercase tracking-[0.2em] font-semibold block">
                  Direct Contact
                </span>
                <a
                  href={`tel:${COMPANY_INFO.phoneTel || '+918435983078'}`}
                  className="text-sm font-sans text-[#111111] hover:text-[#A58A63] block transition-colors font-medium"
                >
                  +91 {COMPANY_INFO.phone}
                </a>
                <a
                  href={`mailto:${COMPANY_INFO.email}`}
                  className="text-xs font-sans text-[#68645D] hover:text-[#111111] block transition-colors"
                >
                  {COMPANY_INFO.email}
                </a>
              </div>

              <div className="space-y-1.5 pt-2">
                <span className="text-[#A58A63] uppercase tracking-[0.2em] font-semibold block">
                  Instant Channel
                </span>
                <a
                  href={COMPANY_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 px-4 py-2.5 bg-[#111111] text-[#F8F6F2] hover:bg-[#A58A63] hover:text-[#111111] transition-all text-xs uppercase tracking-[0.16em] font-sans font-medium rounded-sm"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-[#A58A63]" />
                  <span>Contact on WhatsApp</span>
                  <ArrowUpRight className="w-3.5 h-3.5 ml-1" />
                </a>
              </div>
            </div>
          </div>

          {/* Right Column: Architectural Form with clear readable inputs */}
          <div className="lg:col-span-7 bg-[#ECE8E1] p-8 sm:p-12 border border-[#171717]/12 shadow-sm rounded-sm">
            {submitted ? (
              <div className="py-12 space-y-4 text-center">
                <div className="w-12 h-12 rounded-full border-2 border-[#111111] flex items-center justify-center mx-auto text-[#111111]">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-serif text-2xl md:text-3xl text-[#111111]">
                  Inquiry Received
                </h3>
                <p className="text-base text-[#68645D] font-light max-w-md mx-auto leading-relaxed">
                  An interior architect from ORA Bhopal will contact you within 24 hours to review your requirements.
                </p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="text-xs font-mono uppercase tracking-[0.2em] text-[#111111] hover:text-[#A58A63] underline underline-offset-4 pt-4 block mx-auto transition-colors"
                >
                  Submit Another Inquiry
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="e.g. Anand Sharma"
                      className="w-full bg-[#FAF8F5] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] placeholder-[#68645D]/60 focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      required
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="e.g. 8435983078"
                      className="w-full bg-[#FAF8F5] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] placeholder-[#68645D]/60 focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                      Email Address
                    </label>
                    <input
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="e.g. anand@example.com"
                      className="w-full bg-[#FAF8F5] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] placeholder-[#68645D]/60 focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm"
                    />
                  </div>

                  <div className="space-y-2">
                    <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                      Property Type
                    </label>
                    <select
                      value={formData.propertyType}
                      onChange={(e) => setFormData({ ...formData, propertyType: e.target.value })}
                      className="w-full bg-[#FAF8F5] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm cursor-pointer"
                    >
                      <option value="1 BHK Apartment">1 BHK Apartment</option>
                      <option value="2 BHK Apartment">2 BHK Apartment</option>
                      <option value="3 BHK Apartment">3 BHK Apartment</option>
                      <option value="Duplex Bungalow">Duplex Bungalow</option>
                      <option value="Complete Renovation">Complete Home Renovation</option>
                      <option value="Commercial / Other">Commercial / Other</option>
                    </select>
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                    Service Discipline Required
                  </label>
                  <select
                    value={formData.service}
                    onChange={(e) => setFormData({ ...formData, service: e.target.value })}
                    className="w-full bg-[#FAF8F5] border border-[#171717]/20 px-4 py-3 text-sm text-[#171717] focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm cursor-pointer"
                  >
                    <option value="Complete Interior (Labour + Materials)">Complete Interior (Labour + Materials Turnkey)</option>
                    <option value="Modular Kitchen">Modular Kitchen</option>
                    <option value="Bedroom & Wardrobe">Bedroom &amp; Wardrobe Joinery</option>
                    <option value="TV Unit & Temple">TV Unit &amp; Temple Design</option>
                    <option value="2D & 3D Design Only">2D &amp; 3D Design Planning</option>
                    <option value="Home Renovation">Home Renovation &amp; Civil</option>
                  </select>
                </div>

                <div className="space-y-2">
                  <label className="text-xs font-mono uppercase tracking-[0.16em] text-[#171717] font-medium block">
                    Space Details / Notes
                  </label>
                  <textarea
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell us about the site location in Bhopal, carpet area, or timeline..."
                    className="w-full bg-[#FAF8F5] border border-[#171717]/20 p-4 text-sm text-[#171717] placeholder-[#68645D]/60 focus:outline-none focus:border-[#A58A63] focus:ring-1 focus:ring-[#A58A63] transition-colors rounded-sm resize-none"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-3 px-10 py-4 bg-[#111111] text-[#F8F6F2] hover:bg-[#A58A63] hover:text-[#111111] transition-all text-xs uppercase tracking-[0.2em] font-medium rounded-sm shadow-sm"
                >
                  <span>Request Consultation</span>
                  <ArrowUpRight className="w-4 h-4" />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
