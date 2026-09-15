import { siteConfig } from "@/lib/site.config";

export function Footer() {
  return (
    <footer className="bg-charcoal-deep px-4 py-12 text-pearl sm:px-6">
      <div className="mx-auto flex max-w-6xl flex-col gap-8 sm:flex-row sm:justify-between">
        <div>
          <p className="font-display text-2xl">{siteConfig.name}</p>
          <p className="mt-2 text-sm text-pearl/60">{siteConfig.address.full}</p>
          <a
            href={siteConfig.phoneHref}
            className="focus-ring mt-3 inline-block text-sm text-gold"
          >
            {siteConfig.phoneDisplay}
          </a>
        </div>
        <div className="text-sm text-pearl/45">
          <p>{siteConfig.demoBy}</p>
          <p className="mt-2 max-w-xs">
            Abbey Road · St John&apos;s Wood — not the Notting Hill namesake.
          </p>
        </div>
      </div>
    </footer>
  );
}
