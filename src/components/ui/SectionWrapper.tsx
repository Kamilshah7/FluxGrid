"use client";

import React from "react";
import { motion } from "framer-motion";
import { sectionReveal } from "@/lib/animations";
import { cn } from "@/lib/utils";

interface SectionWrapperProps {
  children: React.ReactNode;
  id: string;
  className?: string;
  containerClassName?: string;
}

export function SectionWrapper({ 
  children, 
  id, 
  className, 
  containerClassName 
}: SectionWrapperProps) {
  return (
    <section 
      id={id} 
      className={cn("relative py-8 md:py-12 px-6 md:px-12 lg:px-24", containerClassName)}
    >
      <motion.div
        variants={sectionReveal}
        initial="initial"
        whileInView="whileInView"
        viewport={{ once: true, margin: "-100px" }}
        className={cn("max-w-7xl mx-auto", className)}
      >
        {children}
      </motion.div>
    </section>
  );
}
