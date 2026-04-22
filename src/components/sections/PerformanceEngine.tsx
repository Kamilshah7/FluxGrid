"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * ──────────────────────────────────────────────
 * VIDEO SHOWCASE — STACKED CARD CAROUSEL
 * ──────────────────────────────────────────────
 *
 * Drop .mp4 files into:  public/videos/showcase/
 * Then add them to SHOWCASE_VIDEOS below.
 */
const SHOWCASE_VIDEOS = [
  { src: "/videos/showcase/reel-1.mp4" },
  { src: "/videos/showcase/reel-2.mp4" },
  { src: "/videos/showcase/reel-3.mp4" },
  { src: "/videos/showcase/reel-4.mp4" },
  { src: "/videos/showcase/reel-5.mp4" },
];

const AUTO_SCROLL_MS = 7000;

export function PerformanceEngine() {
  const [current, setCurrent] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);
  const total = SHOWCASE_VIDEOS.length;

  const resetTimer = useCallback(() => {
    if (timerRef.current) clearInterval(timerRef.current);
    timerRef.current = setInterval(() => {
      setCurrent((prev) => (prev + 1) % total);
    }, AUTO_SCROLL_MS);
  }, [total]);

  useEffect(() => {
    resetTimer();
    return () => {
      if (timerRef.current) clearInterval(timerRef.current);
    };
  }, [resetTimer]);

  const goTo = (idx: number) => {
    setCurrent(idx);
    resetTimer();
  };

  const next = () => goTo((current + 1) % total);
  const prev = () => goTo((current - 1 + total) % total);

  return (
    <SectionWrapper id="performance-engine">
      <div className="flex flex-col gap-12 lg:gap-24 items-center lg:flex-row">
        {/* ── TEXT COLUMN ── */}
        <div className="flex-1 space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent/10 border border-accent/20"
          >
            <div className="w-1.5 h-1.5 rounded-full bg-accent animate-pulse" />
            <span className="text-[10px] font-bold tracking-[0.2em] uppercase text-accent">
              Performance Engine
            </span>
          </motion.div>

          <motion.h2
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-4xl md:text-5xl font-bold font-display italic leading-[1.1]"
          >
            Creatives that actually convert.
          </motion.h2>

          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-lg text-white/60 max-w-xl leading-relaxed"
          >
            Most creative agencies focus on &lsquo;vibe&rsquo;. We focus on the math of the click.
            Our assets are engineered using performance data to ensure they drive results, not just likes.
          </motion.p>

          <motion.ul
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="space-y-4 pt-4"
          >
            {[
              "Hook-first structure designed for 3-second attention spans.",
              "Dynamic pacing that keeps the user engaged until the CTA.",
              "Data-driven iteration: we constantly refine assets based on ad performance.",
              "Cinematic production value that builds long-term brand equity.",
              "Mobile-first orientation optimized for social platforms.",
            ].map((point, i) => (
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

        {/* ── STACKED CARD CAROUSEL ── */}
        <div className="flex-1 w-full max-w-[420px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card stack container — extra bottom padding for stacked depth cards */}
            <div className="relative aspect-[9/16] mb-8" style={{ perspective: "1200px" }}>
              {SHOWCASE_VIDEOS.map((video, i) => {
                // Calculate position relative to current
                const offset = i - current;
                const absOffset = Math.abs(offset);

                // Only render cards within ±2 of current for performance
                if (absOffset > 2) return null;

                // Stack behind: scale down, translate down, reduce opacity
                const isActive = offset === 0;
                const zIndex = total - absOffset;
                const scale = 1 - absOffset * 0.06;
                const translateY = absOffset * 18;
                const opacity = isActive ? 1 : Math.max(0, 1 - absOffset * 0.35);
                const blur = isActive ? 0 : absOffset * 1.5;

                return (
                  <motion.div
                    key={i}
                    animate={{
                      scale,
                      y: translateY,
                      opacity,
                      filter: `blur(${blur}px)`,
                      rotateX: isActive ? 0 : -2,
                    }}
                    transition={{
                      duration: 0.5,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      zIndex,
                      transformOrigin: "center top",
                    }}
                    className="absolute inset-0 rounded-3xl overflow-hidden border border-white/10 bg-panel shadow-2xl will-change-transform"
                  >
                    <video
                      src={video.src}
                      autoPlay={isActive}
                      loop
                      muted
                      playsInline
                      preload={absOffset <= 1 ? "metadata" : "none"}
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Subtle vignette */}
                    <div className="absolute inset-0 bg-gradient-to-t from-background/50 via-transparent to-transparent pointer-events-none" />

                    {/* Active glow ring */}
                    {isActive && (
                      <div className="absolute inset-0 rounded-3xl ring-1 ring-accent/20 pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* ── CONTROLS ── */}
            <div className="flex items-center justify-between px-1">
              {/* Arrows */}
              <div className="flex items-center gap-2">
                <button
                  onClick={prev}
                  aria-label="Previous video"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all"
                >
                  <ChevronLeft className="w-4 h-4 text-white/70" />
                </button>
                <button
                  onClick={next}
                  aria-label="Next video"
                  className="w-9 h-9 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 active:scale-95 flex items-center justify-center transition-all"
                >
                  <ChevronRight className="w-4 h-4 text-white/70" />
                </button>
              </div>

              {/* Dots */}
              <div className="flex items-center gap-2">
                {SHOWCASE_VIDEOS.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => goTo(i)}
                    aria-label={`Go to video ${i + 1}`}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      i === current
                        ? "w-6 bg-accent shadow-[0_0_10px_rgba(0,242,255,0.4)]"
                        : "w-1.5 bg-white/20 hover:bg-white/40"
                    }`}
                  />
                ))}
              </div>

              {/* Counter */}
              <span className="text-[11px] font-mono text-white/30 tabular-nums">
                {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-[2px] bg-white/5 rounded-full overflow-hidden">
              <motion.div
                key={current}
                initial={{ width: "0%" }}
                animate={{ width: "100%" }}
                transition={{ duration: AUTO_SCROLL_MS / 1000, ease: "linear" }}
                className="h-full bg-accent/40"
              />
            </div>
          </motion.div>
        </div>
      </div>
    </SectionWrapper>
  );
}
