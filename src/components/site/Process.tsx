import { motion } from "framer-motion";
import { FileSearch, Box, CheckCircle2, Hammer, Truck } from "lucide-react";

const steps = [
  { icon: FileSearch, label: "Inquiry", desc: "Drawings & RFQ in. Scope locked in 24h.", code: "01" },
  { icon: Box, label: "BIM Model", desc: "Tekla / SDS2 model with clash-checked geometry.", code: "02" },
  { icon: CheckCircle2, label: "Approval", desc: "EOR markup, RFI loop, sign-off.", code: "03" },
  { icon: Hammer, label: "Fabrication", desc: "Shop drawings, NC files, BOMs to plant.", code: "04" },
  { icon: Truck, label: "Delivery", desc: "Erection drawings & site support.", code: "05" },
];

export function Process() {
  return (
    <section id="process" className="relative py-32 bg-[var(--gradient-steel)]">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
          / 02 — Workflow
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mb-16">
          A workflow built for <span className="text-gradient-electric">zero rework</span>.
        </h2>

        {/* Connecting line */}
        <div className="relative">
          <div className="absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/40 to-transparent hidden lg:block" />

          <div className="grid lg:grid-cols-5 gap-6">
            {steps.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative"
              >
                <div className="relative h-24 grid place-items-center mb-4">
                  <div className="relative h-24 w-24 rounded-full glass-strong grid place-items-center group hover:glow-electric transition-all">
                    <s.icon className="h-7 w-7 text-primary" />
                    <span className="absolute -top-1 -right-1 text-mono text-[10px] text-muted-foreground">{s.code}</span>
                  </div>
                </div>
                <h3 className="text-center text-lg font-semibold mb-1">{s.label}</h3>
                <p className="text-center text-sm text-muted-foreground">{s.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
