export function BrandMark({ className = "h-8 w-auto" }: { className?: string }) {
  return (
    <svg viewBox="0 0 96 36" className={className} aria-hidden>
      <path
        d="M2 34 L48 2 L94 34"
        fill="none"
        stroke="var(--color-gold)"
        strokeWidth="4"
        strokeLinecap="square"
        strokeLinejoin="miter"
      />
      <line x1="0" y1="34" x2="96" y2="34" stroke="var(--color-gold)" strokeWidth="2.5" />
      <rect x="36" y="14" width="24" height="20" fill="none" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="48" y1="14" x2="48" y2="34" stroke="var(--color-ink)" strokeWidth="1.5" />
      <line x1="36" y1="24" x2="60" y2="24" stroke="var(--color-ink)" strokeWidth="1.5" />
    </svg>
  );
}
