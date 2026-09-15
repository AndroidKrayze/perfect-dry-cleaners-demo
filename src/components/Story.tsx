import { siteConfig } from "@/lib/site.config";

export function Story() {
  return (
    <section id="story" className="bg-blush/40 px-4 py-16 sm:px-6 sm:py-20">
      <div className="mx-auto grid max-w-6xl gap-10 lg:grid-cols-12 lg:items-center">
        <div className="lg:col-span-7">
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Neighbourhood
          </p>
          <h2 className="mt-3 font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            On Abbey Road, for St John&apos;s Wood.
          </h2>
          <p className="mt-5 max-w-xl text-base leading-relaxed text-charcoal/75">
            Perfect Dry Cleaners is a long-standing neighbourhood dry cleaners
            on Abbey Road — shirts, household, bridal and leather care for
            locals and professionals across NW8. Guests often mention friendly
            staff and owners who make nothing feel like too much trouble.
          </p>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/75">
            Owner {siteConfig.ownerDisplayName} welcomes you at the counter.
            Call to enquire — we&apos;ll look after the rest.
          </p>
          <p className="mt-6 text-sm text-charcoal/55">{siteConfig.collectionNote}</p>
        </div>
        <div className="lg:col-span-5">
          <div className="rounded-2xl border border-blush bg-pearl p-8 shadow-soft">
            <p className="font-display text-2xl leading-snug text-charcoal">
              Soft pearl counter light. Warm charcoal shopfront. Quiet Abbey
              Road care.
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
                <dt className="text-charcoal/55">Primary</dt>
                <dd className="text-right">
                  <a href={siteConfig.phoneHref} className="focus-ring text-charcoal underline-offset-2 hover:underline">
                    {siteConfig.phoneDisplay}
                  </a>
                </dd>
              </div>
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
