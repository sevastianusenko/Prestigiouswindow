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

/* ---- window types ---- */

export function CasementIcon() {
  return (
    <IconWrap>
      <rect x="8" y="8" width="40" height="40" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path
        d="M8 8 L44 24 L8 40"
        stroke="var(--color-ink)"
        strokeWidth="2"
        fill="none"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function BayIcon() {
  return (
    <IconWrap>
      <path
        d="M8 44 L16 14 L40 14 L48 44"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
      <line x1="16" y1="14" x2="16" y2="44" stroke="var(--color-ink)" strokeWidth="2" />
      <line x1="40" y1="14" x2="40" y2="44" stroke="var(--color-ink)" strokeWidth="2" />
    </IconWrap>
  );
}

export function EgressIcon() {
  return (
    <IconWrap>
      <rect x="10" y="14" width="36" height="34" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="28" y1="40" x2="28" y2="18" stroke="var(--color-ink)" strokeWidth="2.5" />
      <path
        d="M20 26 L28 16 L36 26"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

/* ---- door types ---- */

export function PatioSliderIcon() {
  return (
    <IconWrap>
      <rect x="6" y="12" width="44" height="32" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="28" y1="12" x2="28" y2="44" stroke="var(--color-ink)" strokeWidth="2" />
      <path
        d="M32 28 h12 M40 24 l4 4 l-4 4"
        stroke="var(--color-ink)"
        strokeWidth="1.75"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function FrenchDoorIcon() {
  return (
    <IconWrap>
      <rect x="8" y="8" width="18" height="40" stroke="var(--color-gold)" strokeWidth="2.2" />
      <rect x="30" y="8" width="18" height="40" stroke="var(--color-ink)" strokeWidth="2.2" />
      <circle cx="24" cy="28" r="1.6" fill="var(--color-ink)" />
      <circle cx="32" cy="28" r="1.6" fill="var(--color-gold)" />
    </IconWrap>
  );
}

export function StormDoorIcon() {
  return (
    <IconWrap>
      <rect x="14" y="8" width="28" height="40" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="14" y1="19" x2="42" y2="19" stroke="var(--color-ink)" strokeWidth="1" />
      <line x1="14" y1="28" x2="42" y2="28" stroke="var(--color-ink)" strokeWidth="1" />
      <line x1="14" y1="37" x2="42" y2="37" stroke="var(--color-ink)" strokeWidth="1" />
    </IconWrap>
  );
}

/* ---- signs to replace ---- */

export function DraftIcon() {
  return (
    <IconWrap>
      <path d="M9 19 H38 Q46 19 46 13" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
      <path d="M9 29 H44" stroke="var(--color-ink)" strokeWidth="2.5" strokeLinecap="round" />
      <path d="M9 39 H34 Q42 39 42 45" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" strokeLinecap="round" />
    </IconWrap>
  );
}

export function FogIcon() {
  return (
    <IconWrap>
      <rect x="10" y="10" width="36" height="36" stroke="var(--color-gold)" strokeWidth="2.5" />
      <circle cx="20" cy="22" r="2" fill="var(--color-ink)" />
      <circle cx="31" cy="18" r="1.6" fill="var(--color-ink)" />
      <circle cx="38" cy="27" r="2" fill="var(--color-ink)" />
      <circle cx="24" cy="34" r="1.6" fill="var(--color-ink)" />
      <circle cx="34" cy="38" r="2" fill="var(--color-ink)" />
    </IconWrap>
  );
}

export function BillIcon() {
  return (
    <IconWrap>
      <path
        d="M8 42 L20 30 L30 36 L48 14"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <path
        d="M38 14 H48 V24"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function StuckIcon() {
  return (
    <IconWrap>
      <rect x="10" y="10" width="36" height="36" stroke="var(--color-gold)" strokeWidth="2.5" />
      <line x1="10" y1="28" x2="46" y2="28" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path
        d="M14 28 l4 -5 l4 5 l4 -5 l4 5 l4 -5 l4 5 l4 -5"
        stroke="var(--color-ink)"
        strokeWidth="1.75"
        fill="none"
      />
    </IconWrap>
  );
}

export function RotIcon() {
  return (
    <IconWrap>
      <rect x="10" y="10" width="36" height="36" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path
        d="M15 40 L21 30 L17 26 L25 18 L23 24 L29 20"
        stroke="var(--color-ink)"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function NoiseIcon() {
  return (
    <IconWrap>
      <rect x="8" y="16" width="16" height="24" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path d="M30 20 Q36 28 30 36" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
      <path d="M36 13 Q47 28 36 43" stroke="var(--color-ink)" strokeWidth="2" fill="none" strokeLinecap="round" />
    </IconWrap>
  );
}

/* ---- why choose us ---- */

export function CrewIcon() {
  return (
    <IconWrap>
      <circle cx="20" cy="20" r="7" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path d="M8 46 Q8 32 20 32 Q32 32 32 46" stroke="var(--color-gold)" strokeWidth="2.5" fill="none" />
      <circle cx="38" cy="24" r="6" stroke="var(--color-ink)" strokeWidth="2.2" />
      <path d="M28 47 Q28 35 38 35 Q48 35 48 47" stroke="var(--color-ink)" strokeWidth="2.2" fill="none" />
    </IconWrap>
  );
}

export function DetailIcon() {
  return (
    <IconWrap>
      <rect x="12" y="12" width="32" height="32" rx="4" stroke="var(--color-gold)" strokeWidth="2.5" />
      <path
        d="M20 28 L26 34 L38 20"
        stroke="var(--color-ink)"
        strokeWidth="3"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function RepeatIcon() {
  return (
    <IconWrap>
      <path
        d="M42 18 A18 18 0 1 0 46 30"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
      />
      <path
        d="M42 10 L42 18 L34 18"
        stroke="var(--color-ink)"
        strokeWidth="2.5"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}

export function StarIcon() {
  return (
    <IconWrap>
      <path
        d="M28 8 L33 22 L48 22 L36 31 L41 46 L28 37 L15 46 L20 31 L8 22 L23 22 Z"
        stroke="var(--color-gold)"
        strokeWidth="2.5"
        fill="none"
        strokeLinejoin="round"
      />
    </IconWrap>
  );
}
