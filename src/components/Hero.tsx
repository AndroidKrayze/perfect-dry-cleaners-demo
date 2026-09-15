"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative overflow-hidden bg-pearl px-4 pb-16 pt-14 sm:px-6 sm:pb-24 sm:pt-20"
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-blush/80" />
      <div className="mx-auto max-w-6xl">
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
          transition={{ duration: 0.6, delay: 0.05 }}
          className="max-w-3xl font-display text-4xl leading-[1.12] tracking-tight text-charcoal sm:text-5xl md:text-6xl"
        >
          Quiet luxury care on Abbey Road.
        </motion.h1>

        <motion.div
          initial={reduce ? false : { scaleX: 0 }}
          animate={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          style={{ originX: 0 }}
          className="mt-6 h-px w-40 max-w-full bg-gold sm:w-56"
          aria-hidden
        />

        <motion.p
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.55, delay: 0.2 }}
          className="mt-6 max-w-xl text-base leading-relaxed text-charcoal/75 sm:text-lg"
        >
          Perfect Dry Cleaners — shirts, household, bridal, leather and same-day
          care. Collection on request for St John&apos;s Wood.
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
            className="focus-ring inline-flex items-center justify-center rounded-full border border-charcoal/20 bg-transparent px-6 py-3.5 text-sm font-medium text-charcoal transition hover:border-gold hover:text-charcoal"
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
    </section>
  );
}
