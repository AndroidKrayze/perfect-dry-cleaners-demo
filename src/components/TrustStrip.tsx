import { siteConfig } from "@/lib/site.config";

export function TrustStrip() {
  return (
    <section
      aria-label="Highlights"
      className="border-y border-blush/70 bg-blush/35"
    >
      <div className="mx-auto flex max-w-6xl flex-wrap items-center justify-center gap-x-8 gap-y-3 px-4 py-4 sm:justify-between sm:px-6">
        {siteConfig.trustStrip.map((item) => (
          <p
            key={item}
            className="text-[11px] uppercase tracking-[0.2em] text-charcoal/70"
          >
            {item}
          </p>
        ))}
      </div>
    </section>
  );
}
