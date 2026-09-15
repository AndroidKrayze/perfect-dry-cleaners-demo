import { siteConfig } from "@/lib/site.config";
import { CollectionForm } from "./CollectionForm";

export function Visit() {
  return (
    <section id="visit" className="bg-pearl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <p className="text-[11px] uppercase tracking-[0.22em] text-gold">Visit</p>
        <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
          55 Abbey Road, NW8 0AD
        </h2>

        <div className="mt-10 grid gap-8 lg:grid-cols-2">
          <div>
            <a
              href={siteConfig.phoneHref}
              className="focus-ring block rounded-2xl bg-charcoal p-8 text-pearl transition hover:bg-charcoal-deep"
            >
              <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
                Call the shop
              </p>
              <p className="mt-3 font-display text-3xl sm:text-4xl md:text-5xl">
                {siteConfig.phoneDisplay}
              </p>
              <p className="mt-3 text-sm text-pearl/70">Primary CTA — tap to dial</p>
            </a>

            <div className="mt-6 rounded-2xl border border-blush bg-pearl p-6">
              <h3 className="font-display text-xl text-charcoal">Hours</h3>
              <ul className="mt-4 space-y-2 text-sm">
                {siteConfig.hours.map((h) => (
                  <li
                    key={h.days}
                    className="flex justify-between gap-4 border-b border-blush/60 py-2 last:border-0"
                  >
                    <span className="text-charcoal/70">{h.days}</span>
                    <span className="text-charcoal">
                      {h.closed ? "Closed" : `${h.open} – ${h.close}`}
                    </span>
                  </li>
                ))}
              </ul>
              <p className="mt-3 text-xs text-charcoal/50">{siteConfig.hoursNote}</p>
            </div>

            <div className="mt-6">
              <h3 className="text-sm font-medium text-charcoal">Amenities</h3>
              <ul className="mt-3 flex flex-wrap gap-2">
                {siteConfig.amenities.map((a) => (
                  <li
                    key={a.label}
                    className="rounded-full bg-blush/60 px-3 py-1.5 text-xs text-charcoal/80"
                  >
                    {a.label}
                  </li>
                ))}
              </ul>
            </div>

            <p className="mt-8 rounded-xl border border-gold/30 bg-blush/25 px-4 py-3 text-sm leading-relaxed text-charcoal/70">
              {siteConfig.domainStatusNote}
            </p>
          </div>

          <div className="flex flex-col gap-6">
            <div className="overflow-hidden rounded-2xl border border-blush shadow-soft">
              <iframe
                title="Map — Perfect Dry Cleaners, 55 Abbey Road"
                src={siteConfig.mapsEmbed}
                className="h-64 w-full border-0 sm:h-72"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
              <div className="bg-pearl px-4 py-3 text-sm text-charcoal/70">
                {siteConfig.address.full}
                <a
                  href={siteConfig.mapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="focus-ring ml-2 text-gold underline-offset-2 hover:underline"
                >
                  Open map
                </a>
              </div>
            </div>

            <CollectionForm />
          </div>
        </div>
      </div>
    </section>
  );
}
