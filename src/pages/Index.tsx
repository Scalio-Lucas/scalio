import { Backdrop } from "@/components/landing/Backdrop";
import { Navbar } from "@/components/landing/Navbar";
import { Hero } from "@/components/landing/Hero";
import { Metrics } from "@/components/landing/Metrics";
import { Problem } from "@/components/landing/Problem";
import { Funnel } from "@/components/landing/Funnel";
import { Turn } from "@/components/landing/Turn";
import { Method } from "@/components/landing/Method";
import { CaseHighlight } from "@/components/landing/CaseHighlight";
import { Cases } from "@/components/landing/Cases";
import { Testimonials } from "@/components/landing/Testimonials";
import { Benefits } from "@/components/landing/Benefits";
import { BrazilMap } from "@/components/landing/BrazilMap";
import { Authority } from "@/components/landing/Authority";
import { Guarantee } from "@/components/landing/Guarantee";
import { Exclusivity } from "@/components/landing/Exclusivity";
import { HowToStart } from "@/components/landing/HowToStart";
import { FAQ } from "@/components/landing/FAQ";
import { FinalCTA } from "@/components/landing/FinalCTA";
import { Footer } from "@/components/landing/Footer";

export default function Index() {
  return (
    <div className="relative min-h-screen overflow-hidden noise">
      <Backdrop />
      <Navbar />
      <main>
        <Hero />
        <Metrics />
        <Problem />
        <Funnel />
        <Turn />
        <section id="como">
          <Method />
        </section>
        <CaseHighlight />
        <Cases />
        <Testimonials />
        <Benefits />
        <BrazilMap />
        <Authority />
        <Guarantee />
        <Exclusivity />
        <HowToStart />
        <FAQ />
        <FinalCTA />
      </main>
      <Footer />
    </div>
  );
}
