"use client";

import React, { useRef } from "react";
import { 
  motion, 
  useScroll, 
  useTransform, 
  useSpring,
  useReducedMotion,
  useMotionValue
} from "framer-motion";
import { cn } from "@/lib/utils";
import { 
  Cpu, 
  Zap, 
  RefreshCcw, 
  BarChart3, 
  Target, 
  Workflow, 
  Layers,
  ArrowUpRight
} from "lucide-react";

/**
 * NARRATIVE PHASES
 * Each phase represents a pillar of the Fluxgrid thesis.
 */
const PHASES = [
  {
    id: "01",
    tag: "Performance",
    title: "Engineering the Click.",
    copy: "Most agencies run on vibes. We run on the math of the click. Every frame is engineered using historical performance data to stop the scroll and force a conversion.",
    icon: <BarChart3 className="w-5 h-5" />,
    colorClass: "text-accent",
    bgClass: "bg-accent",
    visual: "performance",
    accentColor: "#00F2FF"
  },
  {
    id: "02",
    tag: "Synthesis",
    title: "AI Power. Human Soul.",
    copy: "AI gives us speed and volume, but our human designers give us the final 10% soul. We use machine intelligence for the heavy lifting and human taste for the surgical precision.",
    icon: <Cpu className="w-5 h-5" />,
    colorClass: "text-blue-400",
    bgClass: "bg-blue-400",
    visual: "synthesis",
    accentColor: "#60A5FA"
  },
  {
    id: "03",
    tag: "Optimization",
    title: "Recursive Feedback Loops.",
    copy: "We don't guess; we test. Every hook, angle, and format is cycled through a relentless feedback loop. Winners are scaled; losers are autopsy-ed to inform the next batch.",
    icon: <RefreshCcw className="w-5 h-5" />,
    colorClass: "text-purple-400",
    bgClass: "bg-purple-400",
    visual: "recursive",
    accentColor: "#A855F7"
  },
  {
    id: "04",
    tag: "Velocity",
    title: "Market-Speed Execution.",
    copy: "The market moves in hours. Our systems move in minutes. We launch high-performing creatives while the trend is peaking, not after it's dead.",
    icon: <Zap className="w-5 h-5" />,
    colorClass: "text-yellow-400",
    bgClass: "bg-yellow-400",
    visual: "velocity",
    accentColor: "#FACC15"
  }
];

export function WhyFluxgrid() {
  const containerRef = useRef<HTMLDivElement>(null);
  const isReducedMotion = useReducedMotion();
  
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end end"]
  });
 
  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 100,
    damping: 30,
    restDelta: 0.001
  });
 
  // Dynamic titles on the left
  const headline = useTransform(
    smoothProgress,
    [0.1, 0.35, 0.6, 0.85],
    ["Scale.", "Speed.", "Logic.", "Victory."]
  );
 
  return (
    <div id="why-fluxgrid" ref={containerRef} className="relative h-[500vh] lg:block hidden bg-background select-none z-10">
      {/* GLOBAL NOISE OVERLAY */}
      <div className="fixed inset-0 pointer-events-none z-[100] opacity-[0.03] mix-blend-overlay" 
        style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} 
      />

      <div className="sticky top-0 h-screen w-full overflow-hidden flex items-stretch">
        {/* BLEND SCRIMS - Lowered Z-index and height to avoid covering content */}
        <div className="absolute top-0 inset-x-0 h-32 bg-gradient-to-b from-background to-transparent z-[5] pointer-events-none" />
        <div className="absolute bottom-0 inset-x-0 h-32 bg-gradient-to-t from-background to-transparent z-[5] pointer-events-none" />
        
        {/* BACKGROUND DEPTH LAYERS */}
        <div className="absolute inset-0 pointer-events-none">
          <motion.div 
            style={{ 
              opacity: useTransform(smoothProgress, [0, 0.2, 0.8, 1], [0.3, 0.6, 0.6, 0.3]),
              scale: useTransform(smoothProgress, [0, 1], [1, 1.2])
            }}
            className="absolute top-1/2 left-3/4 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[1000px] bg-accent/5 rounded-full blur-[180px] will-change-composite" 
          />
          {/* Subtle grid pattern overlay */}
          <div className="absolute inset-0 opacity-[0.03] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_50%,#000_70%,transparent_100%)]" 
               style={{ backgroundImage: "radial-gradient(circle, white 1px, transparent 1px)", backgroundSize: "40px 40px" }} />
        </div>
        
        {/* LEFT COLUMN: THE PINNED THESIS (ASYMMETRIC - 32%) */}
        <div className="relative w-[32%] h-full flex flex-col justify-between pt-32 pb-16 pl-24 pr-12 border-r border-white/5 bg-background/40 backdrop-blur-xl z-[60]">
          <div className="space-y-12">
            <div className="space-y-6">
               <motion.div
                 initial={{ opacity: 0, x: -20 }}
                 whileInView={{ opacity: 1, x: 0 }}
                 className="flex items-center gap-4"
               >
                 <div className="w-12 h-[2px] bg-accent shadow-[0_0_15px_rgba(0,242,255,0.5)]" />
                 <span className="text-[11px] font-black tracking-[0.5em] uppercase text-accent/90">
                   The Fluxgrid Method
                 </span>
               </motion.div>
               <h2 className="text-5xl lg:text-6xl font-bold font-display italic leading-[0.9] tracking-tighter">
                 Built <br />
                 for <motion.span className="text-accent drop-shadow-[0_0_20px_rgba(0,242,255,0.3)]">{headline}</motion.span>
               </h2>
            </div>
            
            <p className="text-white/40 text-lg leading-relaxed max-w-[280px] font-medium">
              Creative isn't an art form. It's a high-performance <span className="text-white/70">engineering problem</span>.
            </p>
          </div>

          {/* PROGRESS INDICATOR */}
          <div className="space-y-8 pr-12 pb-8">
            {PHASES.map((phase, i) => (
              <ProgressItem 
                key={phase.id} 
                index={i} 
                progress={smoothProgress} 
                phase={phase} 
              />
            ))}
          </div>
        </div>

        {/* RIGHT COLUMN: THE SCENES (68%) */}
        <div className="w-[68%] h-full relative perspective-[2000px]">
          {PHASES.map((phase, i) => (
            <PhaseScene 
              key={phase.id} 
              index={i} 
              progress={smoothProgress} 
              phase={phase} 
              isReducedMotion={!!isReducedMotion}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------

function ProgressItem({ index, progress, phase }: { index: number, progress: any, phase: any }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;
  
  const isActive = useTransform(progress, [start - 0.05, start, end - 0.05, end], [0, 1, 1, 0]);
  const barWidth = useTransform(progress, [start, end], ["0%", "100%"]);
  
  return (
    <div className="group space-y-3">
      <div className="flex items-center justify-between">
        <motion.div 
          style={{ opacity: useTransform(progress, [start - 0.1, start, end, end + 0.1], [0.3, 1, 1, 0.3]) }}
          className="flex items-center gap-6 transition-all"
        >
          <span className="text-[10px] font-mono text-white/20">{phase.id}</span>
          <span className={cn(
            "text-base font-bold tracking-[0.2em] uppercase transition-colors",
            `group-hover:${phase.colorClass}`
          )}>
            {phase.tag}
          </span>
        </motion.div>
        
        <motion.div
           style={{ scale: isActive, opacity: isActive }}
           className={cn("p-1.5 rounded-lg bg-white/5 border border-white/10", phase.colorClass)}
        >
           {phase.icon}
        </motion.div>
      </div>

      <div className="h-[2px] w-full bg-white/5 relative overflow-hidden ring-1 ring-white/5 ring-inset">
         <motion.div 
           style={{ width: barWidth }}
           className={cn("absolute inset-y-0 left-0", phase.bgClass)} 
         />
      </div>
    </div>
  );
}

// -------------------------------------------------------------------------

function PhaseScene({ index, progress, phase, isReducedMotion }: { index: number, progress: any, phase: any, isReducedMotion?: boolean }) {
  const start = index * 0.25;
  const end = (index + 1) * 0.25;

  const windowSize = 0.05; // Tighter window for faster cross-fades
  const opacity = useTransform(
    progress, 
    [start - windowSize, start, end - windowSize, end], 
    index === 0 ? [1, 1, 1, 0] : (index === 3 ? [0, 1, 1, 1] : [0, 1, 1, 0])
  );
  
  const y = useTransform(
    progress, 
    [start - windowSize, start, end - windowSize, end], 
    [50, 0, 0, -50]
  );
  
  const scale = useTransform(progress, [start, end], [0.95, 1.05]);
  const contentStagger = useTransform(progress, [start, end], [50, -50]);

  return (
    <motion.div 
      style={{ 
        opacity: isReducedMotion ? undefined : opacity, 
        y: isReducedMotion ? 0 : y,
        display: useTransform(progress, (p: number) => (p >= start - 0.2 && p <= end + 0.2 ? "flex" : "none")),
        pointerEvents: useTransform(progress, (p: number) => (p >= start && p <= end ? "auto" : "none"))
      }}
      className="absolute top-[24vh] bottom-[8vh] left-0 right-0 flex flex-col justify-center pl-20 pr-24 z-20 will-change-composite"
    >
      <div className="max-w-2xl flex flex-col gap-8 h-full justify-center">
        {/* TEXT CONTENT LAYER */}
        <motion.div style={{ y: contentStagger }} className="space-y-6 shrink-0">
          <div className="space-y-4">
             <div className="inline-flex items-center gap-3 px-4 py-2 rounded-xl text-[10px] font-black tracking-widest uppercase bg-white/5 border border-white/10 shadow-2xl backdrop-blur-md">
                <motion.div style={{ color: phase.accentColor }} animate={{ rotate: 360 }} transition={{ duration: 8, repeat: Infinity, ease: "linear" }}>
                  {phase.icon}
                </motion.div>
                <span className="text-white/80">Phase / 0{index + 1}</span>
             </div>
             <h3 className="text-5xl lg:text-6xl font-bold italic tracking-tighter leading-[0.9] font-display">
               {phase.title}
             </h3>
          </div>
          
          <p className="text-xl text-white/50 leading-relaxed font-medium max-w-xl">
            {phase.copy}
          </p>
        </motion.div>

        {/* VISUAL COMPONENT LAYER - Free-floating elements without the big card wrapper */}
        <motion.div 
          style={{ scale }}
          className="h-[25vh] min-h-[200px] w-full relative group shrink-0"
        >
          <VisualFactory type={phase.visual} progress={progress} start={start} end={end} color={phase.accentColor} />
          
          {/* Ambient Glow */}
          <div 
            style={{ backgroundColor: phase.accentColor }} 
            className="absolute inset-0 opacity-[0.05] blur-[120px] pointer-events-none transition-colors duration-1000 origin-center" 
          />
        </motion.div>
      </div>
    </motion.div>
  );
}

// -------------------------------------------------------------------------

function PerformanceBar({ val, progress, start, end, color }: { val: number, progress: any, start: number, end: number, color: string }) {
  // Map early in the scroll so the very first scene isn't flat for long
  const scaleY = useTransform(progress, [start + 0.01, start + 0.15], [0, val / 100]);
  return (
    <div className="flex-1 h-full flex flex-col justify-end gap-3 group/bar">
       <motion.div 
         style={{ 
           scaleY,
           originY: 1, // scale from bottom
           background: `linear-gradient(to top, ${color}22, ${color})`,
           boxShadow: `0 0 30px ${color}11`
         }}
         className="w-full h-full rounded-xl relative overflow-hidden shrink-0 will-change-transform" 
       >
         <div className="absolute inset-0 bg-white/10 opacity-0 group-hover/bar:opacity-100 transition-opacity" />
       </motion.div>
    </div>
  );
}

function RecursiveRing({ index, progress, start, end, color }: { index: number, progress: any, start: number, end: number, color: string }) {
  const rot = useTransform(progress, [start, end], [0, 720 * (1 + index * 0.2)]);
  const scale = useTransform(progress, [start, end], [1, 0.6 / (index + 1)]);

  return (
    <motion.div 
      style={{ 
        rotate: rot,
        scale,
        opacity: 1 - index * 0.2,
        borderColor: `${color}44`
      }}
      className="absolute inset-0 border rounded-[4rem] will-change-transform"
    />
  );
}

function VisualFactory({ type, progress, start, end, color }: { type: string, progress: any, start: number, end: number, color: string }) {
  if (type === "performance") {
     const data = [85, 68, 92, 74, 88];
     return (
       <div className="absolute inset-0 flex flex-col justify-center">
          <div className="flex items-end gap-6 h-full w-full border-b border-white/5 max-h-[220px]">
             {data.map((val, i) => (
               <PerformanceBar key={i} val={val} progress={progress} start={start} end={end} color={color} />
             ))}
          </div>
       </div>
     );
  }
  
  if (type === "synthesis") {
    const rotate = useTransform(progress, [start, end], [0, 180]);
    const drift = useTransform(progress, [start, end], [0, 100]);
    
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80">
          {/* Neural Webs */}
          <svg className="absolute inset-0 w-full h-full opacity-30" viewBox="0 0 100 100">
             {[...Array(6)].map((_, i) => (
                <motion.circle 
                  key={i}
                  cx={50 + Math.cos(i * 60 * Math.PI/180) * 35}
                  cy={50 + Math.sin(i * 60 * Math.PI/180) * 35}
                  r="1"
                  fill={color}
                  animate={{ scale: [1, 2, 1], opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 3, repeat: Infinity, delay: i * 0.5 }}
                />
             ))}
             <motion.path 
               d="M50,50 L85,50 M50,50 L15,50 M50,50 L50,85 M50,50 L50,15" 
               stroke={color} 
               strokeWidth="0.2" 
               strokeDasharray="2,2"
               animate={{ strokeDashoffset: [0, 10] }}
               transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
             />
          </svg>

          <motion.div 
            style={{ rotate, scale: useTransform(progress, [start, end], [0.8, 1.05]) }}
            className="absolute inset-0 flex items-center justify-center"
          >
             <div className="w-40 h-40 rounded-[3rem] border border-white/10 bg-white/5 backdrop-blur-3xl flex items-center justify-center relative overflow-hidden group-hover:border-white/30 transition-colors">
                <div style={{ background: `linear-gradient(to top right, ${color}33, transparent)` }} className="absolute inset-0 opacity-50" />
                <Cpu style={{ color }} className="w-16 h-16 relative z-10" />
                
                {/* Scanning Light */}
                <motion.div 
                  animate={{ y: ["-100%", "200%"] }}
                  transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                  style={{ background: `linear-gradient(to bottom, transparent, ${color}33, transparent)` }}
                  className="absolute inset-x-0 h-1/2"
                />
             </div>
          </motion.div>
          
          <motion.div style={{ x: drift }} className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-blue-500/10 blur-[50px]" />
          <motion.div style={{ x: useTransform(drift, v => -v) }} className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full bg-accent/10 blur-[60px]" />
        </div>
      </div>
    );
  }

  if (type === "recursive") {
    return (
      <div className="absolute inset-0 flex items-center justify-center">
        <div className="relative w-80 h-80 flex items-center justify-center">
           {[...Array(3)].map((_, i) => (
             <RecursiveRing key={i} index={i} progress={progress} start={start} end={end} color={color} />
           ))}
           
           <div 
             style={{ backgroundColor: `${color}11`, borderColor: `${color}44`, boxShadow: `0 0 50px ${color}33` }} 
             className="relative z-10 w-32 h-32 rounded-full border backdrop-blur-2xl flex items-center justify-center"
           >
              <RefreshCcw style={{ color }} className="w-12 h-12" />
              
              {/* Spinning Ring */}
              <svg className="absolute inset-0 w-full h-full -rotate-90">
                <motion.circle 
                  cx="50%" cy="50%" r="48%" 
                  fill="none" stroke={color} 
                  strokeWidth="2" strokeDasharray="10,100" 
                  animate={{ strokeDashoffset: [0, 400] }}
                  transition={{ duration: 5, repeat: Infinity, ease: "linear" }}
                />
              </svg>
           </div>

           {/* Feedback Pings */}
           {[...Array(4)].map((_, i) => (
             <motion.div 
               key={i}
               animate={{ 
                 scale: [1, 2], 
                 opacity: [0.5, 0],
                 rotate: i * 90 
               }}
               transition={{ duration: 2, repeat: Infinity, delay: i * 0.5 }}
               style={{ borderColor: `${color}66` }}
               className="absolute w-20 h-20 border rounded-full"
             />
           ))}
        </div>
      </div>
    );
  }

  // VELOCITY
  return (
    <div className="absolute inset-0 flex items-center justify-center">
       {/* Warp tunnel lines */}
       {[...Array(12)].map((_, i) => (
         <motion.div 
           key={i}
           animate={{ 
             x: [-600, 1000], 
             opacity: [0, 0.8, 0.8, 0], 
             scaleX: [0.2, 3, 0.2],
             y: [0, (i - 6) * 10]
           }}
           transition={{ 
             duration: 0.8, 
             repeat: Infinity, 
             delay: i * 0.08, 
             ease: "circIn" 
           }}
           style={{ background: `linear-gradient(to right, transparent, ${color}, transparent)`, top: '50%', left: -100 }}
           className="shrink-0 w-80 h-[2px] absolute blur-[1px] opacity-40 max-w-full overflow-hidden"
         />
       ))}
       
       {/* Replaced Card Box with just floating Icon and glow */}
       <motion.div 
         style={{ 
           scale: useTransform(progress, [start, end], [0.8, 1.1])
         }}
         className="relative z-20 flex items-center justify-center group-hover:scale-[1.15] transition-transform duration-1000"
       >
          <Zap style={{ color }} className="w-24 h-24 drop-shadow-[0_0_30px_rgba(250,204,21,0.6)]" />
          
          {/* Spark Particles */}
          {[...Array(5)].map((_, i) => (
            <motion.div 
              key={i}
              animate={{ 
                x: [0, (i - 2) * 50], 
                y: [0, (i - 2) * 30],
                opacity: [0, 1, 0]
              }}
              transition={{ duration: 1, repeat: Infinity, delay: i * 0.2 }}
              style={{ backgroundColor: color }}
              className="absolute w-1 h-1 rounded-full pointer-events-none"
            />
          ))}
       </motion.div>
    </div>
  );
}

// -------------------------------------------------------------------------

export function WhyFluxgridMobile() {
  const staticProgress = useMotionValue(1);

  return (
    <div className="lg:hidden block px-6 py-20 space-y-24 bg-background overflow-hidden relative">
       {/* Background Noise for mobile */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.65\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')" }} />

       <div className="space-y-8 relative">
          <div className="w-16 h-px bg-accent" />
          <h2 className="text-4xl font-bold font-display italic tracking-tighter leading-tight">Built for <span className="text-accent underline decoration-accent/20">Scale.</span></h2>
          <p className="text-xl text-white/40 max-w-sm">We don't do vibes. We build machinery that solves for creative performance.</p>
       </div>
       
        <div className="space-y-24">
          {PHASES.map((phase) => (
            <motion.div 
              key={phase.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              className="space-y-12 relative"
            >
              <div className="space-y-6">
                 <div className={cn("w-16 h-16 rounded-3xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 shadow-2xl backdrop-blur-md", phase.colorClass)}>
                    {phase.icon}
                 </div>
                 <h3 className="text-4xl font-bold italic tracking-tight font-display text-white">{phase.title}</h3>
                 <p className="text-xl text-white/50 leading-relaxed">{phase.copy}</p>
              </div>

              <div className="h-[300px] relative mt-12 w-full max-w-sm mx-auto">
                 <VisualFactory type={phase.visual} progress={staticProgress} start={0} end={1} color={phase.accentColor} />
                 
                 {/* Visual representative glow for mobile */}
                 <div style={{ backgroundColor: phase.accentColor }} className="absolute inset-0 blur-[80px] opacity-[0.05] pointer-events-none" />
              </div>
            </motion.div>
          ))}
       </div>
    </div>
  );
}

// -------------------------------------------------------------------------

export default function WhyFluxgridMain() {
  return (
    <>
      <WhyFluxgrid />
      <WhyFluxgridMobile />
    </>
  );
}
