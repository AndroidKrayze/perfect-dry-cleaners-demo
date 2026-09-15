const panels = [
  { tone: "bg-charcoal text-pearl", label: "Warm charcoal", sub: "Shopfront quiet" },
  { tone: "bg-pearl text-charcoal border border-blush", label: "Soft pearl", sub: "Counter light" },
  { tone: "bg-blush text-charcoal", label: "Blush stone", sub: "Amenity calm" },
  { tone: "bg-charcoal-deep text-pearl", label: "Muted gold", sub: "Hairline detail", gold: true },
];

export function Gallery() {
  return (
    <section id="gallery" className="bg-pearl px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto max-w-6xl">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
              Atmosphere
            </p>
            <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
              Colour, not stock photos.
            </h2>
          </div>
          <p className="max-w-sm text-sm text-charcoal/60">
            Real shop photos will replace these brand panels. See{" "}
            <code className="text-xs text-gold">/assets/SOURCES.md</code> —
            Abbey Road listing only.
          </p>
        </div>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {panels.map((p) => (
            <div
              key={p.label}
              className={`relative flex min-h-[180px] flex-col justify-end rounded-2xl p-5 ${p.tone}`}
            >
              {p.gold && (
                <div className="absolute left-5 top-5 h-px w-12 bg-gold" aria-hidden />
              )}
              <p className="font-display text-lg">{p.label}</p>
              <p className="mt-1 text-xs uppercase tracking-[0.16em] opacity-70">
                {p.sub}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
