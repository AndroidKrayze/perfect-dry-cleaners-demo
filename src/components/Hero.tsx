"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section id="top" className="relative overflow-hidden bg-charcoal">
      <div className="grid min-h-[78vh] lg:grid-cols-2 lg:min-h-[88vh]">
        {/* Image panel */}
        <div className="relative order-1 min-h-[42vh] lg:order-2 lg:min-h-full">
          <motion.img
            src={withBase("/assets/hero.jpg")}
            alt="Perfect Dry Cleaners storefront on Abbey Road"
            className="absolute inset-0 h-full w-full object-cover object-center"
            initial={reduce ? false : { scale: 1.06, opacity: 0.85 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
          />
          <div
            className="absolute inset-0 bg-gradient-to-t from-charcoal/55 via-charcoal/10 to-transparent lg:bg-gradient-to-l lg:from-transparent lg:via-charcoal/20 lg:to-charcoal/50"
            aria-hidden
          />
          <div className="absolute bottom-5 left-5 right-5 hidden sm:flex lg:bottom-8 lg:left-8 items-center gap-3">
            <span className="rounded-full bg-pearl/95 px-3 py-1.5 text-[11px] font-medium uppercase tracking-[0.18em] text-charcoal">
              Google {siteConfig.google.ratingLabel} · {siteConfig.google.reviewCount} reviews
            </span>
          </div>
        </div>

        {/* Copy panel */}
        <div className="relative order-2 flex flex-col justify-center bg-pearl px-5 py-14 sm:px-8 sm:py-20 lg:order-1 lg:px-12 xl:px-16">
          <div className="pointer-events-none absolute inset-y-10 right-0 hidden w-px bg-gradient-to-b from-transparent via-gold/70 to-transparent lg:block" aria-hidden />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="mb-5 text-[11px] uppercase tracking-[0.22em] text-gold"
          >
            Abbey Road · St John&apos;s Wood · NW8
          </motion.p>

          <motion.h1
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.65, delay: 0.05 }}
            className="max-w-xl font-display text-[2.35rem] leading-[1.1] tracking-tight text-charcoal sm:text-5xl lg:text-[3.25rem]"
          >
            Quiet luxury care on Abbey Road.
          </motion.h1>

          <motion.div
            initial={reduce ? false : { scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.85, delay: 0.22, ease: [0.22, 1, 0.36, 1] }}
            style={{ originX: 0 }}
            className="mt-6 h-px w-36 bg-gold sm:w-48"
            aria-hidden
          />

          <motion.p
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.2 }}
            className="mt-6 max-w-md text-base leading-relaxed text-charcoal/75 sm:text-lg"
          >
            Shirts, household, bridal, leather and same-day care — a
            neighbourhood dry cleaners trusted on Abbey Road for years. Collection
            on request across St John&apos;s Wood.
          </motion.p>

          <motion.div
            initial={reduce ? false : { opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.55, delay: 0.3 }}
            className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          >
            <a
              href={siteConfig.phoneHref}
              className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-charcoal px-6 py-3.5 text-sm font-medium text-pearl transition hover:bg-charcoal-deep"
            >
              Call {siteConfig.phoneDisplay}
            </a>
            <a
              href="#collection"
              className="focus-ring inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-transparent px-6 py-3.5 text-sm font-medium text-charcoal transition hover:border-gold"
            >
              Request collection
            </a>
            <a
              href={siteConfig.mapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="focus-ring inline-flex items-center justify-center rounded-full px-4 py-3.5 text-sm text-charcoal/70 underline-offset-4 transition hover:text-charcoal hover:underline"
            >
              Directions
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
