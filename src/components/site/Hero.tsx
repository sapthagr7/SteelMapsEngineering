import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { ArrowRight, Play, ShieldCheck, Zap, Target, Award } from "lucide-react";
import heroImg from "@/assets/hero-steel.jpg";

const trust = [
  { icon: Target, k: "500+", v: "Projects" },
  { icon: ShieldCheck, k: "99.2%", v: "Accuracy" },
  { icon: Zap, k: "Fast", v: "Turnaround" },
  { icon: Award, k: "AISC", v: "Standards" },
];

export function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y1 = useTransform(scrollYProgress, [0, 1], [0, 200]);
  const y2 = useTransform(scrollYProgress, [0, 1], [0, 100]);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.15]);

  return (
    <section ref={ref} id="top" className="relative min-h-screen overflow-hidden pt-32 pb-24">
      {/* Layered parallax background */}
      <motion.div
        style={{ y: y1, scale }}
        className="absolute inset-0 -z-20"
      >
        <img
          src={heroImg}
          alt="3D structural steel building skeleton with BIM overlay"
          width={1920}
          height={1280}
          className="h-full w-full object-cover opacity-50"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/60 via-background/40 to-background" />
      </motion.div>

      <motion.div style={{ y: y2 }} className="absolute inset-0 -z-10 grid-bg mask-fade-y opacity-60" />

      {/* Scanning blueprint line */}
      <div className="absolute inset-0 -z-10 pointer-events-none overflow-hidden">
        <div className="absolute left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/60 to-transparent animate-scan" />
      </div>

      {/* Floating annotations */}
      <motion.div
        style={{ opacity }}
        className="absolute top-1/3 right-[8%] hidden lg:block"
      >
        <div className="glass rounded-md px-3 py-1.5 text-mono text-[10px] uppercase tracking-widest text-primary animate-float">
          W14×90 · A992 Gr.50
        </div>
      </motion.div>
      <motion.div
        style={{ opacity }}
        className="absolute top-2/3 left-[6%] hidden lg:block"
      >
        <div className="glass rounded-md px-3 py-1.5 text-mono text-[10px] uppercase tracking-widest text-primary animate-float" style={{ animationDelay: "1.5s" }}>
          GRID A · EL +24'-6"
        </div>
      </motion.div>

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="inline-flex items-center gap-2 glass rounded-full px-3 py-1.5 text-mono text-[10px] uppercase tracking-widest text-muted-foreground"
        >
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          SDS2 · Tekla · BIM 360 Certified Detailers
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
          className="mt-6 text-5xl sm:text-6xl lg:text-8xl font-semibold tracking-[-0.04em] leading-[0.95] max-w-5xl"
        >
          Precision Steel Detailing
          <br />
          for <span className="text-gradient-electric">Faster Construction</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="mt-6 max-w-2xl text-lg text-muted-foreground leading-relaxed"
        >
          SDS2-driven shop drawings, BIM coordination, and fabrication-ready
          detailing delivered with unmatched accuracy — for fabricators,
          contractors, and construction firms worldwide.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href="#quote"
            className="group inline-flex items-center gap-2 rounded-full bg-primary text-primary-foreground px-6 py-3.5 text-sm font-semibold hover:scale-[1.03] transition-all glow-electric-lg animate-pulse-glow"
          >
            Get Free Quote
            <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
          </a>
          <a
            href="#projects"
            className="inline-flex items-center gap-2 rounded-full glass px-6 py-3.5 text-sm font-medium hover:bg-secondary/60 transition-colors"
          >
            <Play className="h-4 w-4 text-primary" />
            View Projects
          </a>
        </motion.div>

        {/* Trust strip */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.9 }}
          className="mt-16 grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-3xl"
        >
          {trust.map((t) => (
            <div key={t.v} className="glass rounded-xl px-4 py-4 hover-lift">
              <t.icon className="h-4 w-4 text-primary mb-2" />
              <div className="text-xl font-semibold tracking-tight">{t.k}</div>
              <div className="text-[11px] text-mono uppercase text-muted-foreground tracking-widest">{t.v}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
