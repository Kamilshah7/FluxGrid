"use client";

import dynamic from "next/dynamic";
import React from "react";

const SmoothScroll = dynamic(
  () => import("@/components/ui/SmoothScroll").then((mod) => mod.SmoothScroll),
  { ssr: false }
);

export function ClientWrappers({ children }: { children: React.ReactNode }) {
  return <SmoothScroll>{children}</SmoothScroll>;
}
