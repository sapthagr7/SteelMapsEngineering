const logos = [
  "AISC", "AWS D1.1", "CISC", "EN 1090", "ASTM", "CWB", "ISO 9001", "OSHA", "BIM 360", "TEKLA",
];

export function LogoMarquee() {
  return (
    <section className="relative py-12 border-y border-border/50 bg-secondary/30">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 mb-6">
        <p className="text-center text-mono text-[10px] uppercase tracking-[0.3em] text-muted-foreground">
          Built to international standards · Trusted by 200+ fabricators
        </p>
      </div>
      <div className="overflow-hidden mask-fade-x relative" style={{ maskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)", WebkitMaskImage: "linear-gradient(90deg, transparent, black 10%, black 90%, transparent)" }}>
        <div className="flex w-max animate-marquee gap-16 px-8">
          {[...logos, ...logos].map((l, i) => (
            <div key={i} className="text-mono text-2xl font-semibold text-muted-foreground/60 hover:text-primary transition-colors whitespace-nowrap">
              {l}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
