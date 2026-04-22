"use client";

import dynamic from "next/dynamic";
import React from "react";

const SmoothScroll = dynamic(
  () => import("@/components/ui/SmoothScroll").then((mod) => mod.SmoothScroll),
  { ssr: false }
);

const CursorGlow = dynamic(
  () => import("@/components/ui/CursorGlow").then((mod) => mod.CursorGlow),
  { ssr: false }
);

export function ClientWrappers({ children }: { children: React.ReactNode }) {
  return (
    <SmoothScroll>
      <CursorGlow />
      {children}
    </SmoothScroll>
  );
}
