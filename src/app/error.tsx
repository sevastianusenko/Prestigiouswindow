"use client";

import { useEffect } from "react";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { site } from "@/lib/site";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    // Surfaces in the Vercel runtime logs, which is the only place anyone is
    // going to look. The digest is what ties this render to a log entry.
    console.error(error);
  }, [error]);

  return (
    <div className="mx-auto max-w-2xl px-5 sm:px-8 pt-16 sm:pt-24 pb-24">
      <Eyebrow>Something broke</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl">
        That didn&apos;t load properly.
      </SectionHeading>
      <p className="mt-6 text-lg text-ink/75">
        This one is on us, not on you. Try loading it again, and if it still
        won&apos;t behave, call {site.phoneDisplay} and we will sort out whatever
        you needed the old fashioned way.
      </p>

      <div className="mt-10 flex flex-wrap gap-4">
        <button
          onClick={reset}
          className="rounded-full bg-ink text-white px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:bg-gold hover:text-ink transition-colors"
        >
          Try again
        </button>
        <Link
          href="/"
          className="rounded-full border-2 border-ink px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
        >
          Back to the homepage
        </Link>
        <a
          href={site.phoneHref}
          className="rounded-full border-2 border-ink px-6 py-3 text-xs font-semibold tracking-[0.15em] uppercase hover:border-gold hover:text-gold transition-colors"
        >
          Call {site.phoneDisplay}
        </a>
      </div>

      {error.digest && (
        <p className="mt-10 font-sans text-xs text-ink/40">
          Reference: {error.digest}
        </p>
      )}
    </div>
  );
}
