import type { Metadata } from "next";
import { Fraunces, Figtree } from "next/font/google";
import "./globals.css";
import { JsonLd } from "@/components/JsonLd";
import { siteConfig } from "@/lib/site.config";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  display: "swap",
});

const figtree = Figtree({
  subsets: ["latin"],
  variable: "--font-figtree",
  display: "swap",
});

const siteUrl = "https://androidkrayze.github.io/perfect-dry-cleaners-demo";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: "Perfect Dry Cleaners | Dry Cleaners · Abbey Road, St John's Wood",
  description:
    "Dry cleaning, shirt service, laundry, alterations, wedding dress, leather, same-day and collection & delivery on Abbey Road, St John's Wood, NW8. Call 020 7624 3420.",
  keywords: [
    "dry cleaners",
    "dry cleaning",
    "shirt service",
    "laundry",
    "alterations",
    "wedding dress",
    "leather",
    "same day",
    "collection delivery",
    "St John's Wood",
    "Abbey Road",
    "NW8",
    "Perfect Dry Cleaners",
  ],
  openGraph: {
    title: "Perfect Dry Cleaners | Abbey Road, St John's Wood",
    description: siteConfig.description,
    url: siteUrl,
    siteName: siteConfig.name,
    locale: "en_GB",
    type: "website",
  },
  robots: { index: true, follow: true },
  alternates: { canonical: siteUrl },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en-GB" className={`${fraunces.variable} ${figtree.variable}`}>
      <body className="font-sans antialiased">
        <JsonLd />
        {children}
      </body>
    </html>
  );
}
