"use client";

import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

export function Gallery() {
  const [heroShot, counter, interior, street, frontage, detail] =
    siteConfig.gallery;

  return (
    <section id="gallery" className="bg-pearl px-4 py-16 sm:px-6 sm:py-24">
      <div className="mx-auto max-w-6xl">
        <FadeIn>
          <p className="text-[11px] uppercase tracking-[0.22em] text-gold">
            Gallery
          </p>
          <h2 className="mt-3 max-w-2xl font-display text-3xl tracking-tight text-charcoal sm:text-4xl">
            Inside &amp; around Abbey Road
          </h2>
          <p className="mt-4 max-w-xl text-base leading-relaxed text-charcoal/70">
            The shopfront at 55 Abbey Road — and the counter where St John&apos;s
            Wood drops off for the week.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          <FadeIn className="md:col-span-7" delay={0.04}>
            <Shot shot={heroShot} aspect="aspect-[4/3] sm:aspect-[16/11]" />
          </FadeIn>
          <FadeIn className="md:col-span-5" delay={0.1}>
            <Shot shot={counter} aspect="aspect-[4/3] md:h-full md:aspect-auto" fill />
          </FadeIn>

          <FadeIn className="md:col-span-5" delay={0.06}>
            <Shot shot={interior} aspect="aspect-[4/3]" />
          </FadeIn>
          <FadeIn className="md:col-span-7" delay={0.12}>
            <Shot shot={street} aspect="aspect-[16/10]" />
          </FadeIn>

          <FadeIn className="md:col-span-6" delay={0.08}>
            <Shot shot={frontage} aspect="aspect-[4/3]" />
          </FadeIn>
          <FadeIn className="md:col-span-6" delay={0.14}>
            <Shot shot={detail} aspect="aspect-[4/3]" />
          </FadeIn>
        </div>
      </div>
    </section>
  );
}

function Shot({
  shot,
  aspect,
  fill,
}: {
  shot: (typeof siteConfig.gallery)[number];
  aspect: string;
  fill?: boolean;
}) {
  return (
    <figure
      className={`group relative overflow-hidden rounded-2xl bg-blush/40 shadow-soft ${
        fill ? "h-full min-h-[220px]" : ""
      }`}
    >
      <img
        src={withBase(shot.src)}
        alt={shot.alt}
        className={`${aspect} w-full object-cover transition duration-700 group-hover:scale-[1.02] ${
          fill ? "md:absolute md:inset-0 md:h-full md:w-full md:aspect-auto" : ""
        }`}
        loading="lazy"
      />
      <figcaption className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-charcoal/75 to-transparent px-5 pb-4 pt-14">
        <p className="text-sm font-medium text-pearl">{shot.caption}</p>
      </figcaption>
    </figure>
  );
}
