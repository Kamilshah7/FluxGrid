"use client";
import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { Check } from "lucide-react";
import { cn } from "@/lib/utils";

const plans = [
  {
    name: "Testing Pack",
    description: "Perfect for brands looking to find their winning hooks without the overhead.",
    price: "$399/mo",
    features: [
      "8 high-performance ad creatives",
      "1–2 core concepts",
      "Hook & Angle variations",
      "1 revision round per creative",
      "Rapid turnaround"
    ],
    highlight: false
  },
  {
    name: "Scale Pack",
    description: "The essential creative volume needed to sustain and scale aggressive ad spend.",
    price: "$599/mo",
    features: [
      "16 high-performance ad creatives",
      "Multiple unique concepts",
      "Multi-format (Square, 4:5, 9:16)",
      "1–2 revision rounds",
      "Strategic angle testing"
    ],
    highlight: true
  },
  {
    name: "Creative Partner",
    description: "A dedicated creative department for brands that treat content as their #1 lever.",
    price: "$799/mo",
    features: [
      "24 high-performance ad creatives",
      "Priority turnaround",
      "Strategic Testing Map",
      "2 revision rounds on priority assets",
      "Continuous optimization"
    ],
    highlight: false
  },
  {
    name: "Custom Engine",
    description: "High-volume creative operations for agencies and global brands.",
    price: "Let's Talk",
    features: [
      "Unlimited creative scale",
      "Dedicated creative director",
      "Whitelabel options for agencies",
      "Full production pipeline",
      "Weekly strategy & audit calls"
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

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {plans.map((plan, i) => (
          <div 
            key={i} 
            className={cn(
              "flex flex-col p-6 rounded-[2rem] transition-all duration-500 relative overflow-hidden",
              plan.highlight 
                ? "bg-white/5 border-2 border-accent shadow-[0_0_50px_rgba(0,242,255,0.1)] lg:scale-105 z-10" 
                : "bg-white/[0.02] border border-white/5 hover:bg-white/[0.04]"
            )}
          >
            {plan.highlight && (
              <div className="absolute top-0 right-0 bg-accent text-background px-4 py-1 text-[10px] font-bold uppercase tracking-widest rounded-bl-xl">
                Most Popular
              </div>
            )}
            
            <h3 className="text-xl font-bold mb-2">{plan.name}</h3>
            <p className="text-white/40 text-[12px] mb-6 leading-relaxed h-10">
              {plan.description}
            </p>
            
            <div className="text-2xl font-black mb-8 text-white">
              {plan.price}
            </div>
            
            <div className="space-y-3 mb-10 flex-grow">
              {plan.features.map((feature, j) => (
                <div key={j} className="flex items-start gap-2">
                  <Check className="w-4 h-4 text-accent shrink-0 mt-0.5" />
                  <span className="text-white/60 text-[13px]">{feature}</span>
                </div>
              ))}
            </div>
            
            <button 
              onClick={() => {
                const contact = document.getElementById("contact");
                if (contact) contact.scrollIntoView({ behavior: "smooth" });
              }}
              className={cn(
                "w-full py-3.5 rounded-xl font-bold text-sm transition-all duration-300",
                plan.highlight
                    ? "bg-accent text-background shadow-[0_0_20px_rgba(0,242,255,0.2)] hover:scale-[1.02]"
                    : "bg-white/10 hover:bg-white/20 text-white"
            )}>
              {plan.price === "Let's Talk" ? "Contact Us" : "Get Started"}
            </button>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
