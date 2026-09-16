const uid = "pw";

export function Logo({
  className,
  tone = "gold",
}: {
  className?: string;
  tone?: "gold" | "light";
}) {
  const wordColor = tone === "gold" ? `url(#${uid}-gold)` : "var(--color-paper)";
  const roofColor = tone === "gold" ? `url(#${uid}-silver)` : "var(--color-paper)";
  const subColor = tone === "gold" ? "var(--color-ink)" : "var(--color-paper)";

  return (
    <svg
      viewBox="0 0 340 92"
      className={className}
      role="img"
      aria-label={`${"Prestigious Home Improvements"} logo`}
    >
      <defs>
        <linearGradient id={`${uid}-gold`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8f6b32" />
          <stop offset="45%" stopColor="#d8b672" />
          <stop offset="100%" stopColor="#8f6b32" />
        </linearGradient>
        <linearGradient id={`${uid}-silver`} x1="0" y1="0" x2="1" y2="1">
          <stop offset="0%" stopColor="#8b9096" />
          <stop offset="50%" stopColor="#e7eaec" />
          <stop offset="100%" stopColor="#787d82" />
        </linearGradient>
      </defs>

      {/* roofline pictogram with four-pane window */}
      <g transform="translate(122, 4)">
        <path
          d="M2 34 L48 2 L94 34"
          fill="none"
          stroke={roofColor}
          strokeWidth="4"
          strokeLinecap="square"
          strokeLinejoin="miter"
        />
        <line x1="0" y1="34" x2="96" y2="34" stroke={roofColor} strokeWidth="2.5" />
        <rect x="36" y="14" width="24" height="20" fill="none" stroke={wordColor} strokeWidth="2" />
        <line x1="48" y1="14" x2="48" y2="34" stroke={wordColor} strokeWidth="1.5" />
        <line x1="36" y1="24" x2="60" y2="24" stroke={wordColor} strokeWidth="1.5" />
      </g>

      <text
        x="170"
        y="66"
        textAnchor="middle"
        fontFamily="var(--font-display, sans-serif)"
        fontSize="30"
        fontWeight="700"
        letterSpacing="4"
        fill={wordColor}
      >
        PRESTIGIOUS
      </text>

      <g>
        <line x1="60" y1="82" x2="128" y2="82" stroke={subColor} strokeWidth="1" opacity="0.6" />
        <text
          x="170"
          y="87"
          textAnchor="middle"
          fontFamily="var(--font-sans, sans-serif)"
          fontSize="11"
          fontWeight="500"
          letterSpacing="3.5"
          fill={subColor}
        >
          HOME IMPROVEMENTS
        </text>
        <line x1="212" y1="82" x2="280" y2="82" stroke={subColor} strokeWidth="1" opacity="0.6" />
      </g>
    </svg>
  );
}
