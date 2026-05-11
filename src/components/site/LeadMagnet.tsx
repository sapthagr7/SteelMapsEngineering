import { motion } from "framer-motion";
import { useState } from "react";
import { Download, FileCheck2 } from "lucide-react";
import { toast } from "sonner";

export function LeadMagnet() {
  const [sent, setSent] = useState(false);

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSent(true);
    toast.success("Checklist on its way to your inbox.");
  };

  return (
    <section className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative glass-strong rounded-3xl p-8 sm:p-12 lg:p-16 overflow-hidden grid lg:grid-cols-2 gap-12 items-center"
        >
          <div className="absolute inset-0 grid-bg-fine opacity-40 -z-10" />
          <div className="absolute -top-20 -right-20 h-72 w-72 rounded-full bg-primary/20 blur-3xl -z-10" />

          <div>
            <div className="inline-flex items-center gap-2 text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-4">
              <FileCheck2 className="h-3.5 w-3.5" /> Free download
            </div>
            <h3 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight mb-4">
              The Steel Detailing <span className="text-gradient-electric">QA Checklist</span>
            </h3>
            <p className="text-muted-foreground mb-6">
              The same 84-point internal QA checklist our detailers run before any drawing
              package leaves our office. Catch errors before fabrication does.
            </p>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {["Pre-modeling project setup", "Connection & weld review", "Bolt schedule audit", "Pre-release issue log"].map((x) => (
                <li key={x} className="flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-primary" /> {x}
                </li>
              ))}
            </ul>
          </div>

          <form onSubmit={onSubmit} className="space-y-3">
            <div className="grid sm:grid-cols-2 gap-3">
              <input required placeholder="Full name" className="bg-secondary/60 rounded-xl px-4 py-3.5 text-sm border border-border focus:border-primary focus:outline-none transition-colors" />
              <input required placeholder="Company" className="bg-secondary/60 rounded-xl px-4 py-3.5 text-sm border border-border focus:border-primary focus:outline-none transition-colors" />
            </div>
            <input required type="email" placeholder="Work email" className="w-full bg-secondary/60 rounded-xl px-4 py-3.5 text-sm border border-border focus:border-primary focus:outline-none transition-colors" />
            <select required defaultValue="" className="w-full bg-secondary/60 rounded-xl px-4 py-3.5 text-sm border border-border focus:border-primary focus:outline-none transition-colors">
              <option value="" disabled>Project type</option>
              <option>Industrial</option>
              <option>Commercial</option>
              <option>Warehouse / PEB</option>
              <option>Infrastructure</option>
            </select>
            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 rounded-xl bg-primary text-primary-foreground py-3.5 text-sm font-semibold hover:scale-[1.01] transition-transform glow-electric"
            >
              <Download className="h-4 w-4" />
              {sent ? "Sent — check your inbox" : "Download Free Checklist"}
            </button>
            <p className="text-[11px] text-mono text-muted-foreground text-center">
              No spam. Unsubscribe anytime.
            </p>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
