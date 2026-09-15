"use client";

import { useState } from "react";
import { siteConfig } from "@/lib/site.config";

const links = [
  { href: "#services", label: "Services" },
  { href: "#gallery", label: "Gallery" },
  { href: "#reviews", label: "Reviews" },
  { href: "#visit", label: "Visit" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 border-b border-blush/60 bg-pearl/95 backdrop-blur-md">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href="#top" className="focus-ring group rounded-sm">
          <span className="font-display text-xl tracking-tight text-charcoal sm:text-2xl">
            {siteConfig.shortName}
          </span>
          <span className="ml-2 hidden text-[11px] uppercase tracking-[0.18em] text-gold sm:inline">
            Dry Cleaners
          </span>
        </a>

        <nav className="hidden items-center gap-7 md:flex" aria-label="Primary">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="focus-ring rounded-sm text-sm text-charcoal/80 transition hover:text-charcoal"
            >
              {l.label}
            </a>
          ))}
          <a
            href={siteConfig.phoneHref}
            className="focus-ring inline-flex items-center gap-2 rounded-full bg-charcoal px-4 py-2 text-sm font-medium text-pearl transition hover:bg-charcoal-deep"
          >
            <PhoneIcon className="h-4 w-4 text-gold" />
            Call
          </a>
        </nav>

        <div className="flex items-center gap-2 md:hidden">
          <a
            href={siteConfig.phoneHref}
            className="focus-ring inline-flex items-center gap-1.5 rounded-full bg-charcoal px-3 py-2 text-xs font-medium text-pearl"
            aria-label={`Call ${siteConfig.phoneDisplay}`}
          >
            <PhoneIcon className="h-3.5 w-3.5 text-gold" />
            Call
          </a>
          <button
            type="button"
            className="focus-ring rounded-sm p-2 text-charcoal"
            aria-expanded={open}
            aria-controls="mobile-nav"
            onClick={() => setOpen((v) => !v)}
          >
            <span className="sr-only">Menu</span>
            <span className="block h-0.5 w-5 bg-charcoal" />
            <span className="mt-1.5 block h-0.5 w-5 bg-charcoal" />
          </button>
        </div>
      </div>

      {open && (
        <div
          id="mobile-nav"
          className="border-t border-blush/60 bg-pearl px-4 py-4 md:hidden"
        >
          <div className="flex flex-col gap-3">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className="focus-ring rounded-sm py-1 text-sm"
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      )}
    </header>
  );
}

function PhoneIcon({ className }: { className?: string }) {
  return (
    <svg
      className={className}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      aria-hidden
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293a1.125 1.125 0 01-1.21.38 12.035 12.035 0 01-7.143-7.143 1.125 1.125 0 01.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
      />
    </svg>
  );
}
