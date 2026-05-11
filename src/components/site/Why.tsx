import { motion } from "framer-motion";
import { Clock, ShieldCheck, Users, Globe2, TrendingDown } from "lucide-react";
import fab from "@/assets/fab-plant.jpg";

const points = [
  { icon: Clock, t: "Fast delivery", d: "Models in days, not weeks. Predictable milestones, every project." },
  { icon: ShieldCheck, t: "Error-free detailing", d: "Dual-tier QA + automated clash detection before anything ships." },
  { icon: Users, t: "Dedicated PMs", d: "One project manager, one channel, one source of truth." },
  { icon: Globe2, t: "International standards", d: "AISC, CISC, EN 1090, AWS D1.1 — fluent in your code." },
  { icon: TrendingDown, t: "Cost-efficient workflows", d: "Optimised tonnage and connection logic that cuts fab cost." },
];

export function Why() {
  return (
    <section id="why" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="grid lg:grid-cols-12 gap-12 items-start">
          <div className="lg:col-span-5 lg:sticky lg:top-32">
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
              / 05 — Why Steelmaps
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight mb-6">
              The detailing partner that <span className="text-gradient-electric">earns the next PO</span>.
            </h2>
            <p className="text-muted-foreground mb-8">
              We don't just push CAD. We embed with your team, learn your shop, and
              ship deliverables that make fabrication and erection faster.
            </p>
            <div className="relative aspect-[4/3] rounded-2xl overflow-hidden glass">
              <img src={fab} alt="Steel fabrication plant" loading="lazy" className="h-full w-full object-cover" />
              <div className="absolute inset-0 bg-gradient-to-t from-background/70 to-transparent" />
            </div>
          </div>

          <div className="lg:col-span-7 space-y-3">
            {points.map((p, i) => (
              <motion.div
                key={p.t}
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group glass rounded-2xl p-6 flex gap-5 hover:bg-secondary/50 transition-colors"
              >
                <div className="h-12 w-12 shrink-0 rounded-xl bg-primary/10 text-primary grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors">
                  <p.icon className="h-5 w-5" />
                </div>
                <div>
                  <div className="text-mono text-[10px] text-muted-foreground tracking-widest mb-1">
                    0{i + 1}
                  </div>
                  <h3 className="text-lg font-semibold mb-1">{p.t}</h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">{p.d}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
