"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";

const navItems = [
  { name: "Overview", id: "hero" },
  { name: "Why Us", id: "why-fluxgrid" },
  { name: "Performance", id: "performance-engine" },
  { name: "Systems", id: "automation-systems" },
  { name: "Process", id: "how-it-works" },
  { name: "Offers", id: "offers" },
  { name: "FAQ", id: "faq" },
  { name: "Contact", id: "contact" },
];

export function GlassNav() {
  const [activeTab, setActiveTab] = useState("hero");
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
      
      // Update active tab based on scroll position
      const sections = navItems.map(item => document.getElementById(item.id));
      const currentSection = sections.find(section => {
        if (!section) return false;
        const rect = section.getBoundingClientRect();
        return rect.top <= 100 && rect.bottom >= 100;
      });
      
      if (currentSection) {
        setActiveTab(currentSection.id);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <nav 
      className={cn(
        "fixed top-6 left-1/2 -translate-x-1/2 z-[100] transition-all duration-500 will-change-transform",
        scrolled ? "top-4 scale-95" : "top-8 scale-100"
      )}
    >
      <div className="glass px-2 py-2 rounded-full flex items-center gap-1 shadow-2xl relative overflow-hidden backdrop-blur-2xl">
        {navItems.map((item) => (
          <button
            key={item.id}
            onClick={() => scrollToSection(item.id)}
            className={cn(
              "px-4 py-2 rounded-full text-sm font-medium transition-colors relative z-10 whitespace-nowrap outline-none",
              activeTab === item.id 
                ? "text-white" 
                : "text-white/50 hover:text-white/80"
            )}
          >
            {activeTab === item.id && (
              <motion.div
                layoutId="nav-pill"
                className="absolute inset-0 bg-white/10 border border-white/20 rounded-full shadow-[0_0_15px_rgba(255,255,255,0.05)] backdrop-brightness-125 z-[-1]"
                transition={{
                  type: "spring",
                  stiffness: 400,
                  damping: 30
                }}
              />
            )}
            {item.name}
          </button>
        ))}
      </div>
    </nav>
  );
}
