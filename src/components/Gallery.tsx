"use client";

import { FadeIn } from "./FadeIn";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

/** Mosaic spans for a 12-col grid — tuned for 9 shots (hero + shop + interiors + finish). */
const spans = [
  "md:col-span-7",
  "md:col-span-5",
  "md:col-span-5",
  "md:col-span-7",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-4",
  "md:col-span-6",
  "md:col-span-6",
] as const;

const aspects = [
  "aspect-[4/3] sm:aspect-[16/11]",
  "aspect-[4/3] md:h-full md:aspect-auto",
  "aspect-[4/3]",
  "aspect-[16/10]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[4/3]",
  "aspect-[3/4] sm:aspect-[4/3]",
] as const;

export function Gallery() {
  const shots = siteConfig.gallery;

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
            The shopfront at 55 Abbey Road — the counter, the rails, and pieces
            finished for collection.
          </p>
        </FadeIn>

        <div className="mt-10 grid gap-4 md:grid-cols-12 md:gap-5">
          {shots.map((shot, i) => {
            const fill = i === 1;
            return (
              <FadeIn
                key={shot.src}
                className={spans[i] ?? "md:col-span-6"}
                delay={Math.min(0.04 + i * 0.03, 0.28)}
              >
                <Shot
                  shot={shot}
                  aspect={aspects[i] ?? "aspect-[4/3]"}
                  fill={fill}
                />
              </FadeIn>
            );
          })}
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
