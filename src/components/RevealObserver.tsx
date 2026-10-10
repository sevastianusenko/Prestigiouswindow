"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

// Past this point a slow page has already been showing hidden sections for
// too long — skip the animation and just show everything.
const LATE_MS = 2500;

// Watches every .reveal-item on the page and adds .in-view the moment
// it scrolls into the viewport. Pairs with the beforeInteractive script
// in layout.tsx that stamps .js-anim on <html>, which hides the items
// from first paint (see globals.css for the no-JS / slow-JS fallback).
//
// Lives in the root layout, which does not remount on client-side
// navigation — so it re-runs per pathname and also watches the DOM for
// items that arrive later (streamed or lazily rendered sections).
export function RevealObserver() {
  const pathname = usePathname();

  useEffect(() => {
    const root = document.documentElement;

    if (performance.now() > LATE_MS && !root.classList.contains("reveal-ready")) {
      document.querySelectorAll(".reveal-item").forEach((el) => el.classList.add("in-view"));
    }
    root.classList.add("reveal-ready");

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.12, rootMargin: "0px 0px -80px 0px" }
    );

    const observeAll = () =>
      document
        .querySelectorAll(".reveal-item:not(.in-view)")
        .forEach((el) => observer.observe(el));
    observeAll();

    const mutations = new MutationObserver(observeAll);
    mutations.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mutations.disconnect();
    };
  }, [pathname]);

  return null;
}
