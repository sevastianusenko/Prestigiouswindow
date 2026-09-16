"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./Logo";
import { primaryNav, site } from "@/lib/site";

export function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* thin utility bar */}
      <div className="hidden lg:block bg-ink text-white text-xs">
        <div className="mx-auto max-w-7xl px-5 sm:px-8 flex items-center justify-end gap-6 h-9">
          <Link href="/service-area" className="hover:text-gold transition-colors">
            Service Area
          </Link>
          <Link href="/repair-or-replace" className="hover:text-gold transition-colors">
            Repair or Replace?
          </Link>
          <span className="text-white/50">{site.license}</span>
          <a href={site.phoneHref} className="font-semibold hover:text-gold transition-colors">
            {site.phoneDisplay}
          </a>
        </div>
      </div>

      <div className="bg-white border-b border-line">
        <div className="mx-auto max-w-7xl px-5 sm:px-8">
          <div className="flex h-20 items-center justify-between gap-6">
            <Link href="/" className="shrink-0" onClick={() => setOpen(false)}>
              <Logo className="h-14 w-auto" />
            </Link>

            <nav className="hidden lg:flex items-center gap-1 font-sans text-sm font-medium">
              {primaryNav.map((item) => (
                <div key={item.label} className="relative group">
                  <Link
                    href={item.href}
                    className="flex items-center px-4 py-2 text-ink hover:text-gold transition-colors"
                  >
                    {item.label}
                  </Link>
                  {"children" in item && item.children && (
                    <div className="absolute left-0 top-full hidden group-hover:block group-focus-within:block pt-1 min-w-[180px]">
                      <div className="bg-white border border-line rounded-lg shadow-lg py-2 overflow-hidden">
                        {item.children.map((c) => (
                          <Link
                            key={c.href}
                            href={c.href}
                            className="block px-4 py-2 text-ink hover:text-gold hover:bg-fog text-sm"
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

            <div className="hidden lg:flex items-center">
              <Link
                href="/contact"
                className="rounded-full border-2 border-gold px-6 py-2.5 text-sm font-semibold text-ink hover:bg-gold transition-colors"
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
                className={`block h-px w-6 bg-ink transition-transform ${open ? "translate-y-[3px] rotate-45" : ""}`}
              />
              <span
                className={`block h-px w-6 bg-ink transition-transform ${open ? "-translate-y-[3px] -rotate-45" : ""}`}
              />
            </button>
          </div>
        </div>

        {open && (
          <div className="lg:hidden border-t border-line bg-white">
            <nav className="mx-auto max-w-7xl px-5 py-4 flex flex-col">
              {primaryNav.map((item) => (
                <div key={item.label} className="py-2 border-b border-line/70 last:border-0">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block py-1 text-sm font-medium text-ink"
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
                          className="py-1.5 text-sm text-ink/70"
                        >
                          {c.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ))}
              <a href={site.phoneHref} className="font-sans text-sm py-3 text-ink font-semibold">
                {site.phoneDisplay}
              </a>
              <Link
                href="/contact"
                onClick={() => setOpen(false)}
                className="rounded-full border-2 border-gold text-center px-5 py-3 text-sm font-semibold text-ink"
              >
                Get a Quote
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
}
