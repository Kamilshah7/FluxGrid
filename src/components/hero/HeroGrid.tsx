"use client";

import React from "react";
import { motion } from "framer-motion";
import { heroGridTile, staggerContainer } from "@/lib/animations";
import { useAdaptiveLoading } from "@/lib/adaptive";

import Image from "next/image";

function VideoTile({ index }: { index: number }) {
  const [isReady, setIsReady] = React.useState(false);
  const videoRef = React.useRef<HTMLVideoElement>(null);
  const { isWeakDevice } = useAdaptiveLoading();

  React.useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          video.play().catch(() => {});
        } else {
          video.pause();
        }
      },
      { threshold: 0 }
    );

    observer.observe(video);
    return () => observer.disconnect();
  }, []);

  return (
    <motion.div
      variants={heroGridTile}
      style={{ transform: "translateZ(0)" }}
      className="aspect-[9/16] rounded-2xl bg-white/[0.05] border border-white/10 relative overflow-hidden will-change-transform"
    >
      <video
        ref={videoRef}
        src={`/videos/hero/tile-${(index % 10) + 1}.mp4`}
        loop
        muted
        playsInline
        preload={isWeakDevice ? "none" : "metadata"}
        onLoadedData={() => setIsReady(true)}
        className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ${isReady ? 'opacity-80' : 'opacity-0'}`}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
    </motion.div>
  );
}

export default function HeroGrid() {
  const { lowMotion, isWeakDevice } = useAdaptiveLoading();
  const tiles = Array.from({ length: 8 });

  if (isWeakDevice) {
    return (
      <div className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-6 p-4 opacity-10 scale-105 -translate-y-12 rotate-[-4deg]">
        {tiles.map((_, i) => (
          <div 
            key={i} 
            className="aspect-[9/16] rounded-2xl bg-white/5 border border-white/10"
          />
        ))}
      </div>
    );
  }

  return (
    <motion.div 
      variants={staggerContainer}
      initial={lowMotion ? "animate" : "initial"}
      animate="animate"
      style={{ 
        contain: "layout paint", // Critical for performance
        willChange: "transform"
      }}
      className="absolute inset-0 grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8 p-4 md:p-12 opacity-80 scale-110 -translate-y-20 rotate-[-4deg] pointer-events-none"
    >
      {tiles.map((_, i) => (
        <VideoTile key={i} index={i} />
      ))}
    </motion.div>
  );
}


