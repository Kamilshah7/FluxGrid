"use client";

import React from "react";
import dynamic from "next/dynamic";
import { motion } from "framer-motion";
import { fadeIn, PREDISP_EASE } from "@/lib/animations";
import { useAdaptiveLoading } from "@/lib/adaptive";

const HeroGrid = dynamic(() => import("./HeroGrid"), { 
  ssr: false,
  loading: () => <div className="absolute inset-0 bg-background" />
});

export function Hero() {
  const { lowMotion } = useAdaptiveLoading();

  return (
    <section id="hero" className="relative h-[115vh] min-h-[800px] flex items-center justify-center overflow-hidden">
      {/* Background Grid */}
      <HeroGrid />

      {/* Foreground Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mt-24">
        {/* Subtle Scrim for maximum readability */}
        <div className="absolute inset-x-[-20%] inset-y-[-10%] bg-background/40 blur-[100px] rounded-full -z-10 pointer-events-none" />
        <motion.div
          initial={lowMotion ? { opacity: 1, y: 0 } : "initial"}
          animate="animate"
          variants={{
            initial: { opacity: 0, scale: 0.9 },
            animate: { 
              opacity: 1, 
              scale: 1,
              transition: { duration: 0.8, ease: PREDISP_EASE as any }
            }
          }}
          className="inline-block mb-6 px-4 py-1.5 rounded-full border border-accent/20 bg-accent/5 backdrop-blur-md"
        >
          <span className="text-accent text-sm font-semibold tracking-wider uppercase">
            AI-Powered Creative Systems
          </span>
        </motion.div>

        <motion.h1 
          variants={fadeIn}
          initial={lowMotion ? { opacity: 1, y: 0 } : "initial"}
          animate="animate"
          className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight mb-8 font-display drop-shadow-[0_20px_50px_rgba(0,0,0,1)] text-white"
        >
          We turn your ad account into a <br className="hidden md:block" />
          <span className="text-accent italic bg-clip-text text-transparent bg-gradient-to-r from-accent to-accent/60 drop-shadow-[0_10px_20px_rgba(0,242,255,0.4)]">creative superpower.</span>
        </motion.h1>

        <motion.p 
          variants={fadeIn}
          initial={lowMotion ? { opacity: 1, y: 0 } : "initial"}
          animate="animate"
          transition={{ delay: 0.1 }}
          className="text-lg md:text-xl text-white/90 mb-12 max-w-2xl mx-auto leading-relaxed drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
        >
          Stop running random one-offs. We build high-performing, AI-crafted 
          creative engines for Reels, ads, and social content that scale with your brand.
        </motion.p>

        <motion.div 
          variants={fadeIn}
          initial={lowMotion ? { opacity: 1, y: 0 } : "initial"}
          animate="animate"
          transition={{ delay: 0.2 }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <button 
            onClick={() => document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-accent text-background font-bold text-lg hover:scale-105 transition-transform shadow-[0_0_30px_rgba(0,242,255,0.3)]"
          >
            Get in touch
          </button>
          <button 
            onClick={() => document.getElementById('how-it-works')?.scrollIntoView({ behavior: 'smooth' })}
            className="px-8 py-4 rounded-full bg-white/5 border border-white/10 text-white font-bold text-lg hover:bg-white/10 transition-colors backdrop-blur-md"
          >
            See how it works
          </button>
        </motion.div>
      </div>

      {/* Scrims for readability */}
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-background/50 pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-96 bg-gradient-to-t from-background via-background/20 to-transparent pointer-events-none z-[5]" />
    </section>
  );
}
