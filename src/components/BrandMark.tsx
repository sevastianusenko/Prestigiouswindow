// Miniature version of the roofline + window glyph from the real logo
// (public/logo-real.png) — same low, wide gable with eave beams and a
// small gold cross-pane window tucked under the peak.
export function BrandMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 44" className={className} aria-hidden>
      <line x1="4" y1="38" x2="42" y2="38" stroke="#84827c" strokeWidth="5" strokeLinecap="square" />
      <line x1="118" y1="38" x2="156" y2="38" stroke="#84827c" strokeWidth="5" strokeLinecap="square" />
      <path
        d="M40 38 L80 7 L120 38"
        fill="none"
        stroke="#84827c"
        strokeWidth="4.5"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <path
        d="M47 36.5 L80 13 L113 36.5"
        fill="none"
        stroke="#84827c"
        strokeWidth="1.5"
        strokeLinejoin="miter"
        opacity="0.8"
      />
      <rect x="71" y="18" width="18" height="18" fill="none" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="80" y1="18" x2="80" y2="36" stroke="var(--color-gold)" strokeWidth="2" />
      <line x1="71" y1="27" x2="89" y2="27" stroke="var(--color-gold)" strokeWidth="2" />
    </svg>
  );
}
