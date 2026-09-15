import { siteConfig } from "@/lib/site.config";

export function Footer() {
  return (
    <footer className="bg-charcoal-deep px-4 py-12 text-pearl sm:px-6">
      <div className="mx-auto grid max-w-6xl gap-10 sm:grid-cols-2 lg:grid-cols-3">
        <div>
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-pearl/60">{siteConfig.address.full}</p>
          <a
            href={siteConfig.phoneHref}
            className="focus-ring mt-3 inline-block text-sm text-gold"
          >
            {siteConfig.phoneDisplay}
          </a>
          <p className="mt-4 text-xs text-pearl/40">
            Abbey Road · St John&apos;s Wood — not the Notting Hill namesake.
          </p>
        </div>

        <div>
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
            Suggested domains
          </p>
          <ul className="mt-4 space-y-2.5 text-sm">
            {siteConfig.suggestedDomains.map((d) => (
              <li key={d.domain} className="flex flex-wrap items-baseline gap-x-2 gap-y-0.5">
                <span className="text-pearl/90">{d.domain}</span>
                <span className="text-xs text-pearl/40">{d.note}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="sm:col-span-2 lg:col-span-1">
          <p className="text-[11px] uppercase tracking-[0.2em] text-gold">
            On Google
          </p>
          <p className="mt-4 font-display text-3xl text-pearl">
            {siteConfig.google.ratingLabel}
            <span className="ml-2 text-base font-sans text-pearl/50">
              · {siteConfig.google.reviewCount} reviews
            </span>
          </p>
          <a
            href={siteConfig.googleMapsPlaceUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring mt-3 inline-block text-sm text-pearl/55 underline-offset-2 hover:text-gold hover:underline"
          >
            View on Google Maps
          </a>
        </div>
      </div>
    </footer>
  );
}
