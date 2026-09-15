import { siteConfig } from "@/lib/site.config";

export function Services() {
  return (
    <section id="services" className="bg-pearl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Amenities
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Boutique care, neighbourhood pace.
          </h2>
          <p className="mt-4 text-charcoal/70">{siteConfig.priceLine}</p>
        </div>

        <ul className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {siteConfig.services.map((s) => (
            <li
              key={s.id}
              className="group flex flex-col rounded-2xl border border-blush/80 bg-pearl p-6 shadow-soft transition hover:border-gold/50"
            >
              <div className="mb-4 h-px w-10 bg-gold/80 transition group-hover:w-14" />
              <h3 className="font-display text-xl text-charcoal">{s.title}</h3>
              <p className="mt-2 flex-1 text-sm leading-relaxed text-charcoal/65">
                {s.blurb}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                <a
                  href={siteConfig.phoneHref}
                  className="focus-ring inline-flex rounded-full bg-charcoal px-3.5 py-2 text-xs font-medium text-pearl"
                >
                  Call
                </a>
                {s.collection && (
                  <a
                    href="#collection"
                    className="focus-ring inline-flex rounded-full border border-charcoal/15 px-3.5 py-2 text-xs font-medium text-charcoal/80 transition hover:border-gold"
                  >
                    Request collection
                  </a>
                )}
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
