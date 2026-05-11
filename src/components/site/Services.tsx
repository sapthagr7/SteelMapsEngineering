import { motion } from "framer-motion";
import {
  PencilRuler, Layers3, Wrench, Boxes, Calculator, Cpu, ArrowUpRight,
} from "lucide-react";

const services = [
  { icon: PencilRuler, title: "Steel Shop Drawings", desc: "Fabrication-ready GA, assembly, and single-part drawings with full BOM, weld symbols, and bolt schedules.", code: "01" },
  { icon: Layers3, title: "Erection Drawings", desc: "Clear, sequenced anchor bolt and erection plans that get steel up faster, with zero RFI churn.", code: "02" },
  { icon: Wrench, title: "Connection Design", desc: "AISC-compliant moment, shear, and bracing connection design support reviewed by licensed PEs.", code: "03" },
  { icon: Boxes, title: "BIM Modeling", desc: "Coordinated Tekla / Revit models with clash detection across structural, MEP, and architectural trades.", code: "04" },
  { icon: Calculator, title: "Estimation Services", desc: "Tonnage take-offs, mill orders, and fabrication estimates accurate to ±2% for confident bidding.", code: "05" },
  { icon: Cpu, title: "SDS2 / Tekla Support", desc: "Dedicated detailers fluent in SDS2, Tekla Structures, AutoCAD, and Navisworks.", code: "06" },
];

export function Services() {
  return (
    <section id="services" className="relative py-32">
      <div className="absolute inset-0 grid-bg opacity-30 mask-fade-y -z-10" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-14">
          <div>
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
              / 01 — Capabilities
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-2xl">
              Detailing services <span className="text-gradient-electric">engineered to ship</span>.
            </h2>
          </div>
          <p className="max-w-md text-muted-foreground">
            One team. Every deliverable a fabricator needs — from concept BIM to the
            last erection drawing — under one rigorous QA process.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {services.map((s, i) => (
            <motion.div
              key={s.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.06 }}
              className="group relative glass rounded-2xl p-7 hover-lift overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 -z-10"
                style={{ background: "radial-gradient(circle at top right, oklch(0.72 0.19 245 / 0.18), transparent 70%)" }} />

              <div className="flex items-start justify-between mb-6">
                <div className="h-12 w-12 rounded-xl bg-secondary/80 grid place-items-center group-hover:bg-primary/15 group-hover:text-primary transition-all">
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="text-mono text-[10px] text-muted-foreground tracking-widest">{s.code}</span>
              </div>

              <h3 className="text-lg font-semibold mb-2">{s.title}</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">{s.desc}</p>

              <div className="mt-6 inline-flex items-center gap-1 text-xs text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                Learn more <ArrowUpRight className="h-3 w-3" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
