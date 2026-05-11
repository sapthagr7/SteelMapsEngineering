import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import warehouse from "@/assets/proj-warehouse.jpg";
import bridge from "@/assets/proj-bridge.jpg";
import commercial from "@/assets/proj-commercial.jpg";
import industrial from "@/assets/proj-industrial.jpg";

const all = [
  { img: warehouse, title: "Midwest Logistics PEB", tag: "PEB", tons: "1,240 t", loc: "Ohio, USA" },
  { img: bridge, title: "Interstate Bridge Span", tag: "Infrastructure", tons: "3,800 t", loc: "Texas, USA" },
  { img: commercial, title: "Riverside Office Tower", tag: "Commercial", tons: "2,150 t", loc: "Toronto, CA" },
  { img: industrial, title: "Petrochem Process Unit", tag: "Industrial", tons: "5,600 t", loc: "Jubail, KSA" },
  { img: warehouse, title: "Cold Storage Complex", tag: "Warehouses", tons: "980 t", loc: "Dallas, USA" },
  { img: commercial, title: "Stadium Roof Truss", tag: "Commercial", tons: "1,720 t", loc: "Manchester, UK" },
];

const filters = ["All", "Industrial", "Commercial", "Warehouses", "PEB", "Infrastructure"];

export function Projects() {
  const [active, setActive] = useState("All");
  const list = active === "All" ? all : all.filter((p) => p.tag === active);

  return (
    <section id="projects" className="relative py-32">
      <div className="mx-auto max-w-7xl px-4 sm:px-6">
        <div className="flex items-end justify-between flex-wrap gap-6 mb-10">
          <div>
            <div className="text-mono text-[11px] uppercase tracking-[0.3em] text-primary mb-3">
              / 03 — Selected work
            </div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
              Detailed. Fabricated. <span className="text-gradient-electric">Standing.</span>
            </h2>
          </div>
        </div>

        <div className="flex flex-wrap gap-2 mb-10">
          {filters.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-4 py-2 rounded-full text-xs text-mono uppercase tracking-widest transition-all ${
                active === f
                  ? "bg-primary text-primary-foreground glow-electric"
                  : "glass text-muted-foreground hover:text-foreground"
              }`}
            >
              {f}
            </button>
          ))}
        </div>

        <motion.div layout className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {list.map((p) => (
              <motion.a
                href="#"
                key={p.title}
                layout
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.4 }}
                className="group relative aspect-[4/5] overflow-hidden rounded-2xl bg-secondary"
              >
                <img
                  src={p.img}
                  alt={p.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-background via-background/30 to-transparent" />

                <div className="absolute top-4 left-4">
                  <span className="glass rounded-full px-2.5 py-1 text-[10px] text-mono uppercase tracking-widest">
                    {p.tag}
                  </span>
                </div>

                <div className="absolute inset-x-0 bottom-0 p-5">
                  <div className="flex items-center justify-between text-mono text-[10px] uppercase text-primary mb-2">
                    <span>{p.tons}</span>
                    <span>{p.loc}</span>
                  </div>
                  <div className="flex items-end justify-between gap-3">
                    <h3 className="text-lg font-semibold leading-tight">{p.title}</h3>
                    <div className="h-8 w-8 rounded-full glass grid place-items-center group-hover:bg-primary group-hover:text-primary-foreground transition-colors shrink-0">
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </div>
              </motion.a>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
