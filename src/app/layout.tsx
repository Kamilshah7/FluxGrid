import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"], 
  variable: "--font-inter",
  display: "swap"
});

const outfit = Outfit({ 
  subsets: ["latin"], 
  variable: "--font-outfit",
  display: "swap"
});

export const metadata: Metadata = {
  title: "Fluxgrid Studio | AI-Powered Creative Systems",
  description: "Accelerate your brand with cinematic, performance-driven AI creative engines. Reels, ads, and short-form video content at scale.",
  openGraph: {
    title: "Fluxgrid Studio | AI-Powered Creative Systems",
    description: "Accelerate your brand with cinematic, performance-driven AI creative engines.",
    type: "website",
    url: "https://fluxgrid.studio",
  }
};

import { ClientWrappers } from "@/components/layout/ClientWrappers";
import { CursorGlow } from "@/components/ui/CursorGlow";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${outfit.variable} font-sans antialiased bg-background text-foreground`}>
        <ClientWrappers>
          <div className="fixed inset-0 noise-overlay pointer-events-none z-[90]" />
          <CursorGlow />
          {children}
        </ClientWrappers>
      </body>
    </html>
  );
}
