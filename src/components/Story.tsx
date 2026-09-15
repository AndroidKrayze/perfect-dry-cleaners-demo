"use client";

import { siteConfig } from "@/lib/site.config";
import { FadeIn } from "./FadeIn";

export function Story() {
  return (
    <section id="story" className="bg-blush/40 px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center">
        <FadeIn className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Neighbourhood
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            On Abbey Road, for St John&apos;s Wood.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/75">
            Perfect Dry Cleaners has been part of Abbey Road for years —
            the place locals trust with shirts for Monday, curtains for the
            season, and the wedding dress that needs to arrive impeccable.
            Guests talk about friendly owners, stain work that actually
            lands, and a counter where nothing feels like too much trouble.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
            Owner {siteConfig.ownerDisplayName} welcomes you in. Call ahead for
            same-day, bridal, leather or a collection — we&apos;ll look after
            the rest.
          </p>
          <p className="mt-6 text-sm text-charcoal/55">{siteConfig.collectionNote}</p>
        </FadeIn>

        <FadeIn className="lg:col-span-5" delay={0.1}>
          <div className="rounded-2xl border border-blush bg-pearl p-8 shadow-soft">
            <p className="font-display text-2xl leading-snug text-charcoal">
              Soft pearl light at the counter. Warm wood on the shopfront.
              Quiet Abbey Road care.
            </p>
            <div className="mt-6 hairline-gold" />
            <dl className="mt-6 space-y-3 text-sm">
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/55">Address</dt>
                <dd className="text-right text-charcoal">{siteConfig.address.line1}</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/55">Area</dt>
                <dd className="text-right text-charcoal">St John&apos;s Wood · NW8</dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/55">Google</dt>
                <dd className="text-right text-charcoal">
                  {siteConfig.google.ratingLabel} · {siteConfig.google.reviewCount} reviews
                </dd>
              </div>
              <div className="flex justify-between gap-4">
                <dt className="text-charcoal/55">Call</dt>
                <dd className="text-right">
                  <a
                    href={siteConfig.phoneHref}
                    className="focus-ring text-charcoal underline-offset-2 hover:underline"
                  >
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
