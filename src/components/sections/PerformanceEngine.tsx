"use client";

import React from "react";
import { SplitSection } from "../ui/SplitSection";

export function PerformanceEngine() {
  return (
    <SplitSection
      id="performance-engine"
      badge="Performance Engine"
      title="Creative that actually converts."
      description="Most creative agencies focus on 'vibe'. We focus on the math of the click. Our assets are engineered using performance data to ensure they drive results, not just likes."
      points={[
        "Hook-first structure designed for 3-second attention spans.",
        "Dynamic pacing that keeps the user engaged until the CTA.",
        "Data-driven iteration: we constantly refine assets based on ad performance.",
        "Cinematic production value that builds long-term brand equity.",
        "Mobile-first orientation optimized for social platforms."
      ]}
      mediaPosition="right"
      aspect="9/16"
      mediaPlaceholder={
        <video 
          src="/videos/features/performance.mp4" 
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
