import React from "react";

export function SectionSeparator() {
  return (
    <div className="relative w-full h-32 -my-16 z-0 pointer-events-none">
      <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-accent/10 to-transparent" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-full bg-accent/2 blur-[80px] rounded-full opacity-30" />
    </div>
  );
}
