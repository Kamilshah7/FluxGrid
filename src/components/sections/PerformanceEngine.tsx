"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import { SectionWrapper } from "../ui/SectionWrapper";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";

/**
 * VIDEO SHOWCASE — HORIZONTAL CARD FAN
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
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const total = SHOWCASE_VIDEOS.length;

  // ---------- Auto-scroll ----------
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

  // ---------- Play/pause management ----------
  useEffect(() => {
    videoRefs.current.forEach((video, i) => {
      if (!video) return;
      if (i === current) {
        video.play().catch(() => {});
      } else {
        video.pause();
      }
    });
  }, [current]);

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

        {/* ── HORIZONTAL CARD FAN CAROUSEL ── */}
        <div className="flex-1 w-full max-w-[520px] mx-auto">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="relative"
          >
            {/* Card fan container */}
            <div className="relative aspect-[9/16] max-w-[340px] mx-auto mb-8">
              {SHOWCASE_VIDEOS.map((video, i) => {
                // Position relative to current (wrapping)
                let offset = i - current;
                // Wrap around for smooth cycling
                if (offset > Math.floor(total / 2)) offset -= total;
                if (offset < -Math.floor(total / 2)) offset += total;
                const absOffset = Math.abs(offset);

                // Only render cards within ±2
                if (absOffset > 2) return null;

                const isActive = offset === 0;
                const zIndex = 10 - absOffset;

                // Horizontal spread: active centered, others peeking from sides
                const translateX = offset * 55; // px offset per position
                const scale = isActive ? 1 : 0.88 - absOffset * 0.04;
                const opacity = isActive ? 1 : Math.max(0.3, 0.7 - (absOffset - 1) * 0.3);
                const rotateY = offset * -6; // subtle 3D rotation

                return (
                  <motion.div
                    key={i}
                    animate={{
                      x: translateX,
                      scale,
                      opacity,
                      rotateY,
                    }}
                    transition={{
                      duration: 0.55,
                      ease: [0.32, 0.72, 0, 1],
                    }}
                    style={{
                      zIndex,
                      transformOrigin: "center center",
                      perspective: "1000px",
                      filter: isActive ? "none" : `blur(${Math.min(absOffset * 2, 4)}px) brightness(0.6)`,
                    }}
                    onClick={() => { if (!isActive) goTo(i); }}
                    className={`absolute inset-0 rounded-3xl overflow-hidden border bg-panel shadow-2xl ${
                      isActive 
                        ? "border-accent/20 shadow-[0_0_40px_rgba(0,242,255,0.1)] cursor-default" 
                        : "border-white/5 cursor-pointer"
                    }`}
                  >
                    {/* ALL videos are always loaded — preloaded for instant switching */}
                    <video
                      ref={(el) => { videoRefs.current[i] = el; }}
                      src={video.src}
                      loop
                      muted
                      playsInline
                      preload="auto"
                      className="absolute inset-0 w-full h-full object-cover"
                    />

                    {/* Vignette on active */}
                    {isActive && (
                      <div className="absolute inset-0 bg-gradient-to-t from-background/40 via-transparent to-transparent pointer-events-none" />
                    )}
                  </motion.div>
                );
              })}
            </div>

            {/* Controls */}
            <div className="flex items-center justify-between px-1 max-w-[340px] mx-auto">
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

              <span className="text-[11px] font-mono text-white/30 tabular-nums">
                {String(current + 1).padStart(2, "0")}/{String(total).padStart(2, "0")}
              </span>
            </div>

            {/* Progress bar */}
            <div className="mt-3 h-[2px] bg-white/5 rounded-full overflow-hidden max-w-[340px] mx-auto">
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
