import { createFileRoute } from "@tanstack/react-router";
import { Toaster } from "@/components/ui/sonner";
import { Navbar } from "@/components/site/Navbar";
import { Hero } from "@/components/site/Hero";
import { LogoMarquee } from "@/components/site/LogoMarquee";
import { Services } from "@/components/site/Services";
import { Process } from "@/components/site/Process";
import { Projects } from "@/components/site/Projects";
import { Metrics } from "@/components/site/Metrics";
import { Why } from "@/components/site/Why";
import { Testimonials } from "@/components/site/Testimonials";
import { LeadMagnet } from "@/components/site/LeadMagnet";
import { FinalCta } from "@/components/site/FinalCta";
import { Footer } from "@/components/site/Footer";
import { Floating } from "@/components/site/Floating";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Steelmaps Engineering — Precision Steel Detailing & BIM Coordination" },
      {
        name: "description",
        content:
          "SDS2-driven shop drawings, BIM coordination, connection design and estimation services for fabricators and contractors worldwide.",
      },
      { property: "og:title", content: "Steelmaps Engineering — Precision Steel Detailing" },
      { property: "og:description", content: "Fabrication-ready detailing delivered with unmatched accuracy." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <main className="relative">
      <Navbar />
      <Hero />
      <LogoMarquee />
      <Services />
      <Process />
      <Projects />
      <Metrics />
      <Why />
      <Testimonials />
      <LeadMagnet />
      <FinalCta />
      <Footer />
      <Floating />
      <Toaster />
    </main>
  );
}
