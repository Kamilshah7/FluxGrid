"use client";

import React from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "./SectionWrapper";
import { ArrowRight } from "lucide-react";
import { cn } from "@/lib/utils";

interface SplitSectionProps {
  id: string;
  badge: string;
  title: string;
  description: string;
  points: string[];
  mediaPosition?: "left" | "right";
  mediaPlaceholder?: React.ReactNode;
  aspect?: "4/3" | "9/16" | "16/9" | "square";
}

export function SplitSection({
  id,
  badge,
  title,
  description,
  points,
  mediaPosition = "right",
  mediaPlaceholder,
  aspect = "4/3"
}: SplitSectionProps) {
  const aspectClasses = {
    "4/3": "aspect-[4/3]",
    "9/16": "aspect-[9/16] max-w-[400px] mx-auto",
    "16/9": "aspect-[16/9]",
    "square": "aspect-square"
  };

  return (
    <SectionWrapper id={id}>
      <div className={cn(
        "flex flex-col gap-12 lg:gap-24 items-center",
        mediaPosition === "right" ? "lg:flex-row" : "lg:flex-row-reverse"
      )}>
        {/* Text Content */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: mediaPosition === "right" ? -20 : 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              {badge}
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display italic leading-[1.1]"
          >
            {title}
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl leading-relaxed"
          >
            {description}
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            {points.map((point, i) => (
              <li key={i} className="flex items-start gap-3 group">
                <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-accent/40 group-hover:bg-accent transition-colors shrink-0" />
                <span className="text-white/80 group-hover:text-white transition-colors">
                  {point}
                </span>
              </li>
            ))}
          </motion.ul>

          <motion.button
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            onClick={() => {
              document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
            }}
            className="group mt-8 glass px-8 py-4 rounded-full flex items-center gap-3 hover:bg-white/5 transition-all outline-none"
          >
            <span className="font-bold text-sm tracking-widest uppercase">Start Building</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </motion.button>
        </div>

        {/* Media Block */}
        <div className={cn(
          "flex-1 w-full relative rounded-3xl overflow-hidden glass border border-white/5 group/media shadow-2xl",
          aspectClasses[aspect]
        )}>
          {mediaPlaceholder ? mediaPlaceholder : (
            <div className="absolute inset-0 bg-panel flex items-center justify-center p-12 text-center group-hover/media:scale-105 transition-transform duration-1000">
               <div className="space-y-4">
                  <div className="w-16 h-16 rounded-full bg-white/5 mx-auto flex items-center justify-center opacity-40 group-hover/media:opacity-100 transition-opacity">
                    <div className="w-3 h-3 bg-accent rounded-full animate-ping" />
                  </div>
                  <p className="text-[10px] font-bold tracking-[0.3em] uppercase text-white/20">Media Pending</p>
               </div>
            </div>
          )}
          <div className="absolute inset-0 bg-gradient-to-t from-background/40 to-transparent pointer-events-none" />
        </div>
      </div>
    </SectionWrapper>
  );
}
