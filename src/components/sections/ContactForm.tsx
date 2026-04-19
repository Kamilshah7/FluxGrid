"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion } from "framer-motion";

export function ContactForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);

    const formData = new FormData(e.currentTarget);
    const data = {
      name: formData.get("name"),
      email: formData.get("email"),
      brand: formData.get("brand"),
      adSpend: formData.get("adSpend"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      });

      if (response.ok) {
        setIsSubmitted(true);
      } else {
        alert("Failed to send transmission. Please try again.");
      }
    } catch (error) {
      console.error("Submission error:", error);
      alert("Submission failed. Check your connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" className="max-w-4xl">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight font-display">
          Get in <span className="text-accent">Touch.</span>
        </h2>
        <p className="text-white/60 text-lg">
          Tell us about your brand and we'll send you a tailored creative plan.
        </p>
      </div>

      <div className="glass p-8 md:p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden">
        {/* Decorative elements */}
        <div className="absolute -top-24 -right-24 w-64 h-64 bg-accent/10 blur-[100px] rounded-full pointer-events-none" />
        <div className="absolute -bottom-24 -left-24 w-64 h-64 bg-accent/5 blur-[100px] rounded-full pointer-events-none" />

        {isSubmitted ? (
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="text-center py-12"
          >
            <div className="w-20 h-20 bg-accent/10 rounded-full flex items-center justify-center mx-auto mb-6">
                <span className="text-4xl">✨</span>
            </div>
            <h3 className="text-3xl font-bold mb-4">Transmission Received!</h3>
            <p className="text-white/50 text-lg">
              Our team is analyzing your brand. We'll be in touch within 24 hours.
            </p>
          </motion.div>
        ) : (
          <form onSubmit={handleSubmit} className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-1 uppercase tracking-widest">Name</label>
              <input 
                required
                name="name"
                type="text" 
                placeholder="Alex Rivera"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-1 uppercase tracking-widest">Work Email</label>
              <input 
                required
                name="email"
                type="email" 
                placeholder="alex@brand.com"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-1 uppercase tracking-widest">Brand / Company</label>
              <input 
                required
                name="brand"
                type="text" 
                placeholder="Luxe Ecom"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all"
              />
            </div>
            <div className="space-y-2">
              <label className="text-sm font-bold text-white/40 ml-1 uppercase tracking-widest">Monthly Ad Spend</label>
              <select 
                name="adSpend"
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all appearance-none cursor-pointer"
              >
                <option value="$5k - $20k" className="bg-panel">$5k - $20k</option>
                <option value="$20k - $100k" className="bg-panel">$20k - $100k</option>
                <option value="$100k - $500k" className="bg-panel">$100k - $500k</option>
                <option value="$500k+" className="bg-panel">$500k+</option>
              </select>
            </div>
            <div className="md:col-span-2 space-y-2">
              <label className="text-sm font-bold text-white/40 ml-1 uppercase tracking-widest">What you're looking for</label>
              <textarea 
                required
                name="message"
                rows={4}
                placeholder="Tell us about your goals..."
                className="w-full bg-white/[0.03] border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-accent/40 focus:bg-white/[0.05] transition-all resize-none"
              />
            </div>
            <div className="md:col-span-2 pt-4">
              <button 
                disabled={isSubmitting}
                className="w-full py-5 rounded-2xl bg-accent text-background font-black text-xl hover:scale-[1.01] transition-all shadow-[0_0_30px_rgba(0,242,255,0.2)] disabled:opacity-50"
              >
                {isSubmitting ? "Initiating..." : "Initiate Consultation"}
              </button>
            </div>
          </form>
        )}
      </div>
    </SectionWrapper>
  );
}
