"use client";

import React, { useEffect, useCallback } from "react";
import { motion, useSpring, useMotionValue } from "framer-motion";

export function CursorGlow() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 150 };
  const springX = useSpring(mouseX, springConfig);
  const springY = useSpring(mouseY, springConfig);

  // Throttled mousemove handler — fire at most once per rAF (~60fps) 
  // instead of every pixel of movement
  const handleMouseMove = useCallback((e: MouseEvent) => {
    mouseX.set(e.clientX);
    mouseY.set(e.clientY);
  }, [mouseX, mouseY]);

  useEffect(() => {
    let rafId = 0;
    let lastX = 0;
    let lastY = 0;

    const onMove = (e: MouseEvent) => {
      lastX = e.clientX;
      lastY = e.clientY;
      if (!rafId) {
        rafId = requestAnimationFrame(() => {
          mouseX.set(lastX);
          mouseY.set(lastY);
          rafId = 0;
        });
      }
    };

    window.addEventListener("mousemove", onMove, { passive: true });
    return () => {
      window.removeEventListener("mousemove", onMove);
      if (rafId) cancelAnimationFrame(rafId);
    };
  }, [mouseX, mouseY]);

  return (
    <motion.div
      className="fixed inset-0 pointer-events-none z-[100] hidden lg:block overflow-hidden"
    >
      <motion.div 
        className="absolute w-[1000px] h-[1000px] rounded-full opacity-40"
        style={{
          x: springX,
          y: springY,
          translateX: "-50%",
          translateY: "-50%",
          background: "radial-gradient(circle, rgba(0, 242, 255, 0.05) 0%, transparent 70%)",
          willChange: "transform",
        }}
      />
    </motion.div>
  );
}
