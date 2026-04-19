import dynamic from 'next/dynamic';
import { Header } from "@/components/layout/Header";
import { Hero } from "@/components/hero/Hero";
import { SectionSeparator } from "@/components/ui/SectionSeparator";

const WhyFluxgridMain = dynamic(() => import("@/components/sections/WhyFluxgrid"), {
  ssr: true, // Scroll animations can benefit from SSR index
});

const PerformanceEngine = dynamic(() => import("@/components/sections/PerformanceEngine").then(m => m.PerformanceEngine), {
  loading: () => <div className="h-96 bg-black/20 animate-pulse rounded-3xl mx-4 lg:mx-8" />
});


const HowItWorks = dynamic(() => import("@/components/sections/HowItWorks").then(m => m.HowItWorks));
const Offers = dynamic(() => import("@/components/sections/Offers").then(m => m.Offers));
const FAQ = dynamic(() => import("@/components/sections/FAQ").then(m => m.FAQ));
const ContactForm = dynamic(() => import("@/components/sections/ContactForm").then(m => m.ContactForm));

export default function Home() {
  return (
    <main className="min-h-screen bg-background selection:bg-accent/30">
      <Header />
      
      <Hero />
      <WhyFluxgridMain />
      
      <SectionSeparator />
      <PerformanceEngine />
      <SectionSeparator />

      <HowItWorks />
      <Offers />
      <FAQ />
      <ContactForm />

      {/* Footer */}
      <footer className="py-12 border-t border-white/5 text-center">
        <p className="text-white/20 text-sm uppercase tracking-widest font-bold">
          &copy; {new Date().getFullYear()} Fluxgrid Studio. All transmissions secured.
        </p>
      </footer>
    </main>
  );
}
