"use client";

import { motion, useReducedMotion } from "framer-motion";
import { siteConfig } from "@/lib/site.config";
import { withBase } from "@/lib/paths";

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="top"
      className="relative flex min-h-[100svh] min-h-screen flex-col justify-end overflow-hidden bg-charcoal-deep"
    >
      {/* Full-bleed storefront */}
      <motion.img
        src={withBase("/assets/hero.jpg")}
        alt="Perfect Dry Cleaners storefront on Abbey Road"
        className="absolute inset-0 h-full w-full object-cover object-[center_40%]"
        initial={reduce ? false : { scale: 1.1, opacity: 0.7 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
        fetchPriority="high"
      />

      {/* Dark / pearl quiet-luxury overlay */}
      <div
        className="absolute inset-0 bg-gradient-to-t from-charcoal-deep via-charcoal/80 to-charcoal/40"
        aria-hidden
      />
      <div
        className="absolute inset-0 bg-gradient-to-r from-charcoal-deep/85 via-charcoal/45 to-transparent"
        aria-hidden
      />
      <div
        className="pointer-events-none absolute inset-0 shadow-[inset_0_0_140px_50px_rgba(18,18,18,0.55)]"
        aria-hidden
      />
      {/* Soft pearl wash at top for nav readability */}
      <div
        className="absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-charcoal/50 to-transparent"
        aria-hidden
      />

      {/* Content — image owns the frame */}
      <div className="relative z-10 mx-auto flex w-full max-w-6xl flex-1 flex-col justify-end px-4 pb-20 pt-28 sm:px-6 sm:pb-24 lg:pb-28">
        <motion.p
          className="mb-4 text-[11px] font-medium uppercase tracking-[0.28em] text-gold"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Abbey Road · St John&apos;s Wood · NW8
        </motion.p>

        <motion.h1
          className="max-w-3xl font-display text-5xl leading-[1.05] tracking-tight text-pearl sm:text-6xl md:text-7xl lg:text-[5rem]"
          initial={reduce ? false : { opacity: 0, y: 20 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.65, delay: 0.08 }}
        >
          Quiet luxury on Abbey Road.
        </motion.h1>

        {/* Muted gold hairline */}
        <motion.div
          className="my-6 h-px w-28 origin-left bg-gradient-to-r from-gold via-gold to-transparent sm:w-40"
          initial={reduce ? false : { scaleX: 0 }}
          animate={reduce ? undefined : { scaleX: 1 }}
          transition={{ duration: 0.85, delay: 0.25 }}
          aria-hidden
        />

        <motion.p
          className="max-w-lg text-base leading-relaxed text-pearl/80 sm:text-lg"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          Shirts, household, bridal, leather and same-day care — a neighbourhood
          dry cleaners trusted on Abbey Road for years.
        </motion.p>

        <motion.div
          className="mt-9 flex flex-col gap-3 sm:flex-row sm:flex-wrap sm:items-center"
          initial={reduce ? false : { opacity: 0, y: 12 }}
          animate={reduce ? undefined : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <a
            href={siteConfig.phoneHref}
            className="focus-ring inline-flex items-center justify-center gap-2 rounded-full bg-gold px-8 py-4 text-base font-semibold tracking-wide text-charcoal-deep shadow-[0_8px_32px_rgba(168,146,90,0.35)] transition hover:bg-pearl sm:text-lg"
          >
            Call {siteConfig.phoneDisplay}
          </a>
          <a
            href="#collection"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-pearl/40 bg-transparent px-7 py-3.5 text-sm font-medium text-pearl transition hover:border-gold hover:text-gold sm:text-base"
          >
            Request collection
          </a>
          <a
            href={siteConfig.mapsUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="focus-ring inline-flex items-center justify-center rounded-full border border-pearl/25 bg-transparent px-7 py-3.5 text-sm font-medium text-pearl/90 transition hover:border-gold hover:text-gold sm:text-base"
          >
            Directions
          </a>
        </motion.div>

        <motion.div
          className="mt-7 flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-pearl/65"
          initial={reduce ? false : { opacity: 0 }}
          animate={reduce ? undefined : { opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.4 }}
        >
          <span className="inline-flex items-center gap-1.5 rounded-full border border-gold/40 bg-charcoal/50 px-3 py-1 text-[11px] font-medium uppercase tracking-[0.16em] text-gold">
            Google {siteConfig.google.ratingLabel} · {siteConfig.google.reviewCount}
          </span>
          <span>Collection on request · St John&apos;s Wood</span>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <a
        href="#services"
        className="focus-ring absolute bottom-5 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-1.5 text-pearl/45 transition hover:text-gold md:bottom-6"
        aria-label="Scroll to services"
      >
        <span className="text-[10px] uppercase tracking-[0.22em]">Scroll</span>
        <motion.span
          aria-hidden
          animate={reduce ? undefined : { y: [0, 6, 0] }}
          transition={
            reduce
              ? undefined
              : { duration: 1.6, repeat: Infinity, ease: "easeInOut" }
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="1.75"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M6 9l6 6 6-6" />
          </svg>
        </motion.span>
      </a>
    </section>
  );
}
