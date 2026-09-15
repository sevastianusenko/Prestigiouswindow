"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 bg-quartz/95 backdrop-blur border-b border-mist">
      <div className="mx-auto max-w-7xl px-5 sm:px-8">
        <div className="flex h-20 items-center justify-between gap-6">
          <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
            <Logo className="h-14 w-auto" />
          </Link>

          <nav className="hidden lg:flex items-center gap-1 font-sans text-[13px] tracking-wide uppercase">
            {primaryNav.map((item) => (
              <div key={item.label} className="relative group">
                <Link
                  href={item.href}
                  className="flex items-center px-4 py-2 text-graphite hover:text-gold transition-colors"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block pt-1 min-w-[180px]">
                    <div className="bg-quartz border border-mist shadow-lg py-2">
                      {item.children.map((c) => (
                        <Link
                          key={c.href}
                          href={c.href}
                          className="block px-4 py-2 text-graphite hover:text-gold hover:bg-cream normal-case text-sm"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </nav>

          <div className="hidden lg:flex items-center gap-5">
            <a
              href={site.phoneHref}
              className="font-mono text-sm text-graphite hover:text-gold transition-colors"
            >
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              className="bg-graphite text-quartz px-5 py-2.5 text-xs font-medium tracking-[0.15em] uppercase hover:bg-gold hover:text-graphite transition-colors"
            >
              Get a Quote
            </Link>
          </div>

          <button
            type="button"
            className="lg:hidden flex flex-col gap-1.5 p-2"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            onClick={() => setOpen((v) => !v)}
          >
            <span
              className={`block h-px w-6 bg-graphite transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
            />
            <span
              className={`block h-px w-6 bg-graphite transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
            />
          </button>
        </div>
      </div>

      {open && (
        <div className="lg:hidden border-t border-mist bg-quartz">
          <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
            {primaryNav.map((item) => (
              <div key={item.label} className="py-2 border-b border-mist/70 last:border-0">
                <Link
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="block py-1 text-sm uppercase tracking-wide text-graphite"
                >
                  {item.label}
                </Link>
                {"children" in item && item.children && (
                  <div className="pl-4 flex flex-col">
                    {item.children.map((c) => (
                      <Link
                        key={c.href}
                        href={c.href}
                        onClick={() => setOpen(false)}
                        className="py-1.5 text-sm text-graphite/70"
                      >
                        {c.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
            ))}
            <a href={site.phoneHref} className="font-mono text-sm py-3 text-graphite">
              {site.phoneDisplay}
            </a>
            <Link
              href="/contact"
              onClick={() => setOpen(false)}
              className="bg-graphite text-quartz text-center px-5 py-3 text-xs font-medium tracking-[0.15em] uppercase"
            >
              Get a Quote
            </Link>
          </nav>
        </div>
      )}
    </header>
  );
}
