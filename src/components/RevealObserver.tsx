"use client";

import { useEffect } from "react";

// Watches every .reveal-item on the page and adds .in-view the moment
// it scrolls into the viewport. Pairs with the beforeInteractive script
// in layout.tsx that stamps .js-anim on <html> — see globals.css for
// why that ordering matters (no flash-of-invisible-content, no
// permanently-hidden content if JS never runs).
export function RevealObserver() {
  useEffect(() => {
    const items = document.querySelectorAll(".reveal-item:not(.in-view)");
    if (!items.length) return;

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

    items.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, []);

  return null;
}
