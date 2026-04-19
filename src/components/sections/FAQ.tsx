"use client";

import React, { useState } from "react";
import { SectionWrapper } from "../ui/SectionWrapper";
import { motion, AnimatePresence } from "framer-motion";
import { Plus, Minus } from "lucide-react";

const faqs = [
  {
    question: "AI vs Normal Videos - what's the difference?",
    answer: "Normal video production is slow and linear. Our AI engine scales creative production 10x while maintaining human taste. We use AI for generative environments, character consistency, and high-frequency motion graphics, while humans oversee the strategy and final aesthetic polish."
  },
  {
    question: "Do you stick to my brand guidelines?",
    answer: "Absolutely. We feed your brand guidelines (font, colors, tone, assets) into our custom creative stack to ensure every output feels like an native extension of your brand."
  },
  {
    question: "Is media buying included?",
    answer: "We focus 100% on the creative engine. We can partner with your existing media buyer or recommend top-tier agencies we work with to ensure the creatives are distributed effectively."
  },
  {
    question: "What if the creative doesn't perform?",
    answer: "Iteration is part of the system. We use your ad data to analyze drop-off rates and hook performance, then generate new variants to beat the current winner. Performance is our survival metric."
  },
  {
    question: "What are the turnaround times?",
    answer: "Standard turnaround for a batch is 3-5 business days. Once the system is warm, we can often deliver assets within 48 hours for expedited requests."
  },
  {
    question: "Do you offer a trial option?",
    answer: "Yes, we often run a 'Kickstart Batch' (2 creatives) at a flat fee so you can see the speed and quality of the engine before committing to a monthly retainer."
  }
];

export function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  return (
    <SectionWrapper id="faq">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-6 italic tracking-tight font-display">
          FAQs <span className="text-accent">& Objections.</span>
        </h2>
        <p className="text-white/60 text-lg max-w-2xl mx-auto">
          Everything you need to know about partnering with a creative engine.
        </p>
      </div>

      <div className="max-w-3xl mx-auto space-y-4">
        {faqs.map((faq, i) => (
          <div 
            key={i} 
            className="rounded-2xl border border-white/5 bg-white/[0.02] overflow-hidden transition-all duration-300 hover:border-accent/20"
          >
            <button
              onClick={() => setOpenIndex(openIndex === i ? null : i)}
              className="w-full p-6 flex items-center justify-between text-left"
            >
              <span className="text-lg font-bold text-white/80">{faq.question}</span>
              {openIndex === i ? (
                <Minus className="w-5 h-5 text-accent" />
              ) : (
                <Plus className="w-5 h-5 text-white/30" />
              )}
            </button>
            <AnimatePresence>
              {openIndex === i && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.3, ease: "easeInOut" }}
                >
                  <div className="px-6 pb-6 text-white/50 leading-relaxed border-t border-white/5 pt-4">
                    {faq.answer}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
