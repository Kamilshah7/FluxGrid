"use client";

import React from "react";
import { GlassNav } from "../ui/GlassNav";
import { motion } from "framer-motion";

export function Header() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <header className="fixed top-0 left-0 w-full z-[110] px-6 py-8 pointer-events-none">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          {/* Logo */}
          <motion.button
            onClick={scrollToTop}
            className="pointer-events-auto group relative flex items-center gap-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="w-10 h-10 rounded-xl bg-accent flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                <span className="text-background font-black text-xl italic relative z-10">F</span>
            </div>
            <span className="font-black text-2xl tracking-tighter italic group-hover:text-accent transition-colors duration-300">
                FLUXGRID <span className="text-white">STUDIO</span>
            </span>
            
            {/* Logo Ripple Effect on Hover */}
            <motion.div 
               className="absolute -inset-4 bg-accent/20 rounded-full blur-2xl opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none will-change-composite"
               animate={{
                 scale: [1, 1.2, 1],
               }}
               transition={{
                 duration: 2,
                 repeat: Infinity,
                 ease: "easeInOut"
               }}
            />
          </motion.button>
        </div>
      </header>

      {/* Navigation Pill */}
      <GlassNav />
    </>
  );
}
