import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";
import { Counter } from "./Counter";
import bim from "@/assets/bim-model.jpg";

const stats = [
  { val: 480000, suffix: "+", label: "Tons Detailed" },
  { val: 520, suffix: "+", label: "Projects Delivered" },
  { val: 27, suffix: "", label: "Countries Served" },
  { val: 92, suffix: "%", label: "Fab Errors Reduced" },
];

export function Metrics() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], [-80, 80]);

  return (
    <section ref={ref} className="relative py-32 overflow-hidden">
      <motion.div style={{ y }} className="absolute inset-0 -z-10 opacity-30">
        <img src={bim} alt="" className="h-full w-full object-cover" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-background via-background/80 to-background" />
      </motion.div>

      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
          / 04 — By the numbers
        </div>
        <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight max-w-3xl mb-16">
          Receipts, not <span className="text-gradient-electric">promises</span>.
        </h2>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-border/40 rounded-2xl overflow-hidden glass-strong">
          {stats.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.1 }}
              className="p-8 sm:p-10 bg-card"
            >
              <div className="text-4xl sm:text-6xl font-semibold tracking-tight text-gradient-electric">
                <Counter to={s.val} suffix={s.suffix} />
              </div>
              <div className="mt-3 text-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
