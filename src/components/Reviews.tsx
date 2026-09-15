"use client";

import { siteConfig } from "@/lib/site.config";
import { FadeIn } from "./FadeIn";

export function Reviews() {
  return (
    <section id="reviews" className="bg-blush/30 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Guests
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Words from Abbey Road.
          </h2>
          <p className="mt-3 max-w-xl text-sm text-charcoal/60">
            Google {siteConfig.google.ratingLabel} from{" "}
            {siteConfig.google.reviewCount} reviews — a sample of what neighbours
            say.
          </p>
        </FadeIn>

        <ul className="mt-10 grid gap-4 md:grid-cols-2">
          {siteConfig.reviews.map((r, i) => (
            <FadeIn key={r.attribution + r.quote.slice(0, 12)} delay={Math.min(i * 0.06, 0.3)}>
              <li className="flex h-full flex-col rounded-2xl border border-blush/90 bg-pearl p-6 shadow-soft">
                <div className="flex gap-1 text-gold" aria-label={`${r.stars} stars`}>
                  {Array.from({ length: r.stars }).map((_, j) => (
                    <Star key={j} />
                  ))}
                </div>
                <blockquote className="mt-4 flex-1 font-display text-lg leading-snug text-charcoal">
                  “{r.quote}”
                </blockquote>
                <p className="mt-5 text-sm text-charcoal/70">
                  {r.attribution}
                  <span className="mx-2 text-blush">·</span>
                  <span className="text-charcoal/45">{r.source}</span>
                </p>
              </li>
            </FadeIn>
          ))}
        </ul>
      </div>
    </section>
  );
}

function Star() {
  return (
    <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2.5l2.83 6.36 6.92.74-5.2 4.7 1.45 6.8L12 17.77 5.99 21.1l1.45-6.8-5.2-4.7 6.92-.74L12 2.5z" />
    </svg>
  );
}
