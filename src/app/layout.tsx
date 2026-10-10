import type { Metadata } from "next";
import Script from "next/script";
import { Jost, Open_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { RevealObserver } from "@/components/RevealObserver";
import { site } from "@/lib/site";
import { counties } from "@/lib/counties";

const jost = Jost({
  variable: "--font-jost",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const openSans = Open_Sans({
  variable: "--font-open-sans",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `Window & Door Replacement in ${site.serviceCounty} | ${site.name}`,
    template: `%s | ${site.name}`,
  },
  description:
    "Precision window and door replacement and repair in Lancaster County, PA. Licensed and insured, based in East Earl.",
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_US",
    images: [{ url: "/og.jpg", width: 1200, height: 630, alt: site.name }],
  },
  twitter: { card: "summary_large_image" },
};

// Sitewide business entity — tells Google who runs the site, where, and what
// area it serves. Page-level schema (FAQ, Article) sits alongside this.
const businessSchema = {
  "@context": "https://schema.org",
  "@type": "HomeAndConstructionBusiness",
  "@id": `${site.url}/#business`,
  name: site.name,
  url: site.url,
  telephone: site.phoneHref.replace("tel:", ""),
  logo: `${site.url}/logo-real.png`,
  image: `${site.url}/og.jpg`,
  description:
    "Window and door replacement and repair for homes in Lancaster County, PA and neighboring counties.",
  address: {
    "@type": "PostalAddress",
    addressLocality: "East Earl",
    addressRegion: "PA",
    postalCode: "17519",
    addressCountry: "US",
  },
  areaServed: counties.map((c) => ({
    "@type": "AdministrativeArea",
    name: `${c.name}, PA`,
  })),
  hasCredential: {
    "@type": "EducationalOccupationalCredential",
    credentialCategory: "Pennsylvania Home Improvement Contractor Registration",
    identifier: site.license.replace("PA HIC #", ""),
  },
  knowsAbout: [
    "Window replacement",
    "Window repair",
    "Door replacement",
    "Door repair",
    "Patio door repair",
    "Egress windows",
  ],
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      className={`${jost.variable} ${openSans.variable} h-full antialiased`}
      suppressHydrationWarning
    >
      <body className="min-h-full flex flex-col bg-paper text-ink font-sans">
        <Script id="js-anim" strategy="beforeInteractive">
          {"document.documentElement.classList.add('js-anim')"}
        </Script>
        <script
          type="application/ld+json"
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }}
        />
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <RevealObserver />
      </body>
    </html>
  );
}
