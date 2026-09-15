"use client";

import { siteConfig } from "@/lib/site.config";
import { FadeIn } from "./FadeIn";

export function CallBand() {
  return (
    <section className="bg-charcoal px-4 py-14 sm:px-6 sm:py-16">
      <FadeIn>
        <div className="mx-auto flex max-w-6xl flex-col items-start gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="font-display text-3xl tracking-tight text-pearl sm:text-4xl">
              Need shirts back for the week?
            </h2>
            <p className="mt-2 text-pearl/65">
              Call now — or request a collection across St John&apos;s Wood.
            </p>
          </div>
          <div className="flex flex-wrap gap-3">
            <a
              href={siteConfig.phoneHref}
              className="focus-ring inline-flex rounded-full bg-pearl px-6 py-3.5 text-sm font-medium text-charcoal transition hover:bg-blush"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="#collection"
              className="focus-ring inline-flex rounded-full border border-pearl/30 px-6 py-3.5 text-sm font-medium text-pearl transition hover:border-gold hover:text-gold"
            >
              Request collection
            </a>
          </div>
        </div>
      </FadeIn>
    </section>
  );
}
