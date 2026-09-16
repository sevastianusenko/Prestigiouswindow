function IconWrap({ children }: { children: React.ReactNode }) {
  return (
    <svg width="56" height="56" viewBox="0 0 56 56" fill="none" aria-hidden>
      {children}
    </svg>
  );
}

export function WindowIcon() {
  return (
    <IconWrap>
      <rect x="8" y="8" width="40" height="40" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="28" y1="8" x2="28" y2="48" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="8" y1="28" x2="48" y2="28" stroke="var(--color-ink)" strokeWidth="2.5" />
    </IconWrap>
  );
}

export function DoorIcon() {
  return (
    <IconWrap>
      <rect x="16" y="6" width="24" height="44" rx="1" stroke="var(--color-gold)" strokeWidth="2.5" />
      <circle cx="34" cy="28" r="2" fill="var(--color-ink)" />
    </IconWrap>
  );
}

export function QuoteIcon() {
  return (
    <IconWrap>
      <path
        d="M10 14h36v22H30l-8 8v-8H10z"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        strokeLinejoin="round"
      />
      <line x1="17" y1="22" x2="39" y2="22" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="17" y1="29" x2="32" y2="29" stroke="var(--color-ink)" strokeWidth="2" />
    </IconWrap>
  );
}
