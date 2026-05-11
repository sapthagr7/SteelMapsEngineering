import { motion } from "framer-motion";
import { Quote } from "lucide-react";

const items = [
  { q: "Cut our RFI cycle by 60%. The cleanest shop drawings we've seen in 20 years.", n: "Daniel R.", r: "VP Operations · Midwest Steel Fab" },
  { q: "Their BIM coordination caught $400k worth of clashes before steel hit the shop floor.", n: "Aisha K.", r: "Project Director · Apex Construction" },
  { q: "True extension of our team. Same time zone, same standards, faster output.", n: "Marco L.", r: "Owner · Lombardi Erectors" },
  { q: "Connection design support is genuinely PE-grade. We trust the math.", n: "Priya S.", r: "Structural EOR · Helix Engineering" },
  { q: "Estimation accuracy let us bid more aggressively and win 3 contracts in a quarter.", n: "James W.", r: "Estimator · Northbridge Steel" },
];

export function Testimonials() {
  return (
    <section className="relative py-32 overflow-hidden">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-12">
        <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
          / 06 — Field reports
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl">
          Built by detailers. <span className="text-gradient-electric">Trusted by fabricators.</span>
        </h2>
      </div>

      <div className="relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 8%, black 92%, transparent)" }}>
        <motion.div
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 60, repeat: Infinity, ease: "linear" }}
          className="flex gap-5 w-max"
        >
          {[...items, ...items].map((t, i) => (
            <div key={i} className="w-[360px] sm:w-[440px] shrink-0 glass rounded-2xl p-7 hover-lift">
              <Quote className="h-6 w-6 text-primary mb-4" />
              <p className="text-base leading-relaxed mb-6">"{t.q}"</p>
              <div className="border-t border-border/60 pt-4">
                <div className="text-sm font-semibold">{t.n}</div>
                <div className="text-mono text-[11px] text-muted-foreground tracking-wide">{t.r}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
