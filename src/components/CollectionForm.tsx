"use client";

import { FormEvent, useState } from "react";
import { siteConfig } from "@/lib/site.config";

export function CollectionForm() {
  const [sent, setSent] = useState(false);

  function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const data = new FormData(e.currentTarget);
    const name = String(data.get("name") || "").trim();
    const phone = String(data.get("phone") || "").trim();
    const notes = String(data.get("notes") || "").trim();
    const subject = encodeURIComponent(
      `Collection request — Perfect Dry Cleaners (${name || "guest"})`
    );
    const body = encodeURIComponent(
      `Name: ${name}\nPhone: ${phone}\nNotes: ${notes}\n\nPlease call back to arrange collection for 55 Abbey Road / NW8.`
    );
    // Email unknown — open mail client with subject/body as intent placeholder
    window.location.href = `mailto:?subject=${subject}&body=${body}`;
    setSent(true);
  }

  return (
    <div
      id="collection"
      className="scroll-mt-24 rounded-2xl border border-blush bg-blush/25 p-6 sm:p-8"
    >
      <h3 className="font-display text-2xl text-charcoal">Request collection</h3>
      <p className="mt-2 text-sm text-charcoal/65">
        Placeholder only — no live booking API. Prefer{" "}
        <a href={siteConfig.phoneHref} className="text-charcoal underline-offset-2 hover:underline">
          calling {siteConfig.phoneDisplay}
        </a>
        . {siteConfig.collectionNote}
      </p>

      {sent ? (
        <p className="mt-6 rounded-xl bg-pearl px-4 py-3 text-sm text-charcoal">
          Thanks — if your mail client opened, send the note. Or call us now on{" "}
          <a href={siteConfig.phoneHref} className="font-medium underline-offset-2 hover:underline">
            {siteConfig.phoneDisplay}
          </a>
          .
        </p>
      ) : (
        <form onSubmit={onSubmit} className="mt-6 space-y-4">
          <label className="block text-sm">
            <span className="text-charcoal/70">Name</span>
            <input
              name="name"
              required
              autoComplete="name"
              className="focus-ring mt-1.5 w-full rounded-xl border border-blush bg-pearl px-3 py-2.5 text-charcoal"
            />
          </label>
          <label className="block text-sm">
            <span className="text-charcoal/70">Phone</span>
            <input
              name="phone"
              type="tel"
              required
              autoComplete="tel"
              className="focus-ring mt-1.5 w-full rounded-xl border border-blush bg-pearl px-3 py-2.5 text-charcoal"
            />
          </label>
          <label className="block text-sm">
            <span className="text-charcoal/70">Notes (address / garments)</span>
            <textarea
              name="notes"
              rows={3}
              className="focus-ring mt-1.5 w-full rounded-xl border border-blush bg-pearl px-3 py-2.5 text-charcoal"
            />
          </label>
          <button
            type="submit"
            className="focus-ring w-full rounded-full border border-charcoal/20 bg-pearl px-5 py-3 text-sm font-medium text-charcoal transition hover:border-gold sm:w-auto"
          >
            Request collection
          </button>
        </form>
      )}
    </div>
  );
}
