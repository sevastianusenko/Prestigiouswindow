import Link from "next/link";
import { Logo } from "./Logo";
import { coreTowns } from "@/lib/towns";
import { site } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-ink text-white mt-24">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-16 grid gap-12 sm:grid-cols-2 lg:grid-cols-4">
        <div>
          <Logo tone="light" className="h-14 w-auto" />
          <p className="mt-4 text-sm text-white/70 max-w-xs">
            Windows &amp; doors, replaced and repaired, in {site.serviceCounty}. Licensed,
            insured, and based in {site.baseTown}.
          </p>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Services
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><Link href="/windows/replacement" className="hover:text-gold">Window Replacement</Link></li>
            <li><Link href="/windows/repair" className="hover:text-gold">Window Repair</Link></li>
            <li><Link href="/doors/replacement" className="hover:text-gold">Door Replacement</Link></li>
            <li><Link href="/doors/repair" className="hover:text-gold">Door Repair</Link></li>
            <li><Link href="/old-homes" className="hover:text-gold">Windows for Older Homes</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Service Area
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            {coreTowns.map((t) => (
              <li key={t.slug}>
                <Link href={`/service-area/${t.slug}`} className="hover:text-gold">
                  {t.name}, PA
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="font-sans text-xs tracking-[0.2em] uppercase text-gold mb-4">
            Contact
          </h3>
          <ul className="space-y-2 text-sm text-white/80">
            <li><a href={site.phoneHref} className="hover:text-gold font-sans">{site.phoneDisplay}</a></li>
            <li><a href={`mailto:${site.email}`} className="hover:text-gold">{site.email}</a></li>
            <li className="text-white/60">{site.license}</li>
          </ul>
          <Link
            href="/contact"
            className="inline-block mt-4 rounded-full border-2 border-gold text-gold px-5 py-2.5 text-sm font-semibold hover:bg-gold hover:text-ink transition-colors"
          >
            Get a Quote
          </Link>
        </div>
      </div>

      <div className="border-t border-white/15">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 py-6 flex flex-col sm:flex-row justify-between gap-3 text-xs text-white/50">
          <p>© {new Date().getFullYear()} {site.name}. {site.license}.</p>
          <p>
            Site by{" "}
            <a
              href="https://seva-web-studio.com"
              target="_blank"
              rel="noopener"
              className="hover:text-gold"
            >
              Seva Web Studio
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
