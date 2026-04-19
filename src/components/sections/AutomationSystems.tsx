"use client";

import React from "react";
import { SplitSection } from "../ui/SplitSection";

export function AutomationSystems() {
  return (
    <SplitSection
      id="automation-systems"
      badge="Tech Stack"
      title="Automation as a creative force."
      description="Scale is a technological problem. We build custom scrapers, multi-channel outreach engines, and creative automation pipelines to ensure your brand is everywhere, always."
      points={[
        "Custom lead generation and scraping systems.",
        "Automated multi-channel creative distribution.",
        "Systematic outreach to keep your pipeline full.",
        "Creative engines that generate thousands of variants.",
        "Seamless integration with your existing growth stack."
      ]}
      mediaPosition="left"
      mediaPlaceholder={
        <video 
          src="/videos/features/automation.mp4" 
          autoPlay 
          loop 
          muted 
          playsInline 
          preload="metadata"
          className="absolute inset-0 w-full h-full object-cover"
        />
      }
    />
  );
}
