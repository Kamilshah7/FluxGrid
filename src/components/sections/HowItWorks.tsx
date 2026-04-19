import React from "react";
import { SectionWrapper } from "../ui/SectionWrapper";

const steps = [
  {
    step: "01",
    title: "Discovery & Brief",
    description: "We dive into your brand guidelines, performance data, and target hooks."
  },
  {
    step: "02",
    title: "The Engine Builds",
    description: "Our AI systems generate baseline creatives which our editors then refine to perfection."
  },
  {
    step: "03",
    title: "Rapid Delivery",
    description: "Assets are delivered ready for launch. High-quality, high-tempo output."
  },
  {
    step: "04",
    title: "Scale & Iterate",
    description: "We analyze what works and feed that intelligence back into the next generation."
  }
];

export function HowItWorks() {
  return (
    <SectionWrapper id="how-it-works">
      <div className="flex flex-col lg:flex-row gap-16 items-start">
        <div className="lg:w-1/3 sticky top-32">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight font-display">
            Our <span className="text-accent">System.</span>
          </h2>
          <p className="text-white/60 text-lg leading-relaxed">
            We don't do random one-offs. We build a repeatable, deterministic 
            process for creative success.
          </p>
        </div>
        
        <div className="lg:w-2/3 grid gap-8">
          {steps.map((step, i) => (
            <div 
              key={i} 
              className="group flex gap-8 items-start p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:border-accent/30 transition-all duration-500"
            >
              <div className="text-6xl font-black text-white/5 group-hover:text-accent/20 transition-colors">
                {step.step}
              </div>
              <div>
                <h3 className="text-2xl font-bold mb-2 group-hover:text-accent transition-colors">
                    {step.title}
                </h3>
                <p className="text-white/50 text-lg">
                  {step.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
