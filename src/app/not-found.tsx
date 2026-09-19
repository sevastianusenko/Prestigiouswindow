import Link from "next/link";
import type { Metadata } from "next";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Page not found",
  robots: { index: false, follow: true },
};

const ROUTES = [
  { href: "/windows/replacement", label: "Window replacement", note: "Double-hung, casement, bay, egress" },
  { href: "/windows/repair", label: "Window repair", note: "Fogged glass, balances, tracks, screens" },
  { href: "/doors/replacement", label: "Door replacement", note: "Entry, patio, french, storm" },
  { href: "/doors/repair", label: "Door repair", note: "Sticking doors, rot, rollers, locks" },
  { href: "/repair-or-replace", label: "Repair or replace?", note: "How we tell the difference" },
  { href: "/service-area", label: "Service area", note: "Lancaster County and the counties next to it" },
];

export default function NotFound() {
  return (
    <div className="mx-auto max-w-4xl px-5 sm:px-8 pt-16 sm:pt-24 pb-24">
      <Eyebrow>404</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl">
        That page isn&apos;t here.
      </SectionHeading>
      <p className="mt-6 text-lg text-ink/75 max-w-xl">
        Either the address has a typo in it or we moved something and
        didn&apos;t leave a forwarding note. Both happen. Here is where most
        people are trying to get to.
      </p>

      <div className="mt-12 grid gap-px bg-line sm:grid-cols-2 rounded-lg overflow-hidden border border-line">
        {ROUTES.map((r) => (
          <Link
            key={r.href}
            href={r.href}
            className="group bg-paper p-6 hover:bg-fog transition-colors"
          >
            <span className="font-display text-lg font-bold text-ink group-hover:text-gold transition-colors">
              {r.label}
            </span>
            <span className="mt-1 block text-sm text-ink/60">{r.note}</span>
          </Link>
        ))}
      </div>

      <p className="mt-10 text-sm text-ink/70">
        Still nothing? The <Link href="/sitemap" className="text-gold underline underline-offset-4">full sitemap</Link>{" "}
        lists every page on this site. Or just call{" "}
        <a href={site.phoneHref} className="text-gold underline underline-offset-4">
          {site.phoneDisplay}
        </a>{" "}
        and describe what you were looking for. That is usually faster than
        hunting through a menu.
      </p>
    </div>
  );
}
