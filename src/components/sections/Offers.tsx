"use client";
import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Starter Engine",
    description: "For brands testing paid traffic or relaunching offers.",
    price: "From $2,000/mo",
    features: [
      "8-12 short-form creatives",
      "2 core angles, 4-6 hook variants",
      "1 revision cycle per batch",
      "Creative testing roadmap",
      "Shared creative tracker"
    ],
    highlight: false
  },
  {
    name: "Growth Engine",
    description: "Always-on creative pipeline that feeds your media buyers.",
    price: "From $6,000/mo",
    features: [
      "16-24 creatives per month",
      "3-4 angles, 8-12 hook variants",
      "2-3 revision cycles",
      "Monthly strategy call",
      "Reusable script + hook library"
    ],
    highlight: true
  },
  {
    name: "Scale Engine",
    description: "Embedded creative ops team for scaling brands and agencies.",
    price: "From $7,500+/mo",
    features: [
      "28-40+ creatives per month",
      "4-6 active angles with heavy experimentation",
      "Continuous iteration on winners",
      "Integrated testing roadmap",
      "Custom creative operating system"
    ],
    highlight: false
  }
];

export function Offers() {
  return (
    <SectionWrapper id="offers">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight font-display">
          Select Your <span className="text-accent">Engine.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Market-beating value tailored to your current stage of growth.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={cn(
              "flex flex-col p-8 rounded-[2rem] transition-all duration-500 relative overflow-hidden",
              plan.highlight 
                ? "bg-white/5 border-2 border-accent shadow-[0_0_50px_rgba(0,242,255,0.1)] scale-105 z-10" 
                : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]"
            )}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-accent text-background px-4 py-1 text-xs font-bold uppercase tracking-widest rounded-bl-xl">
                Most Popular
              </div>
            )}
            
            <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
            <p className="text-white/40 text-sm mb-6 leading-relaxed h-12">
              {plan.description}
            </p>
            
            <div className="text-3xl font-black mb-8 text-white">
              {plan.price}
            </div>
            
            <div className="space-y-4 mb-12 flex-grow">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/60 text-sm">{feature}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "w-full py-4 rounded-xl font-bold transition-all duration-300",
                plan.highlight
                    ? "bg-accent text-background shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white/20 text-white"
            )}>
              Get Started
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
