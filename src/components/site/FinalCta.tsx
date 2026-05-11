import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Calendar } from "lucide-react";
import hero from "@/assets/hero-steel.jpg";

export function FinalCta() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-100, 100]);

  return (
    <section ref={ref} id="quote" className="relative py-40 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-20">
        <img src={hero} alt="" loading="lazy" className="h-full w-full object-cover opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/70 to-background" />
      </motion.div>
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y -z-10" />

      <div className="mx-auto max-w-5xl px-4 sm:px-6 text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="text-5xl sm:text-7xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95]"
        >
          Need accurate steel detailing
          <br />
          <span className="text-gradient-electric">delivered fast?</span>
        </motion.h2>
        <p className="mt-6 text-lg text-muted-foreground max-w-2xl mx-auto">
          Book a 30-minute call. Bring drawings or just an idea — leave with a fixed scope, price, and timeline.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-4">
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-8 py-4 text-sm font-semibold hover:scale-[1.03] transition-all glow-electric-lg animate-pulse-glow"
          >
            <Calendar className="h-4 w-4" />
            Schedule Free Consultation
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#contact"
            className="inline-flex items-center gap-2 rounded-full glass px-8 py-4 text-sm font-medium hover:bg-secondary/60 transition-colors"
          >
            Send us a project brief
          </a>
        </div>
      </div>
    </section>
  );
}
