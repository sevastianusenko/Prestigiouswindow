import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block font-sans text-xs tracking-[0.25em] uppercase text-gold mb-3">
      {children}
    </span>
  );
}

export function SectionHeading({
  children,
  className = "",
  as: Tag = "h2",
}: {
  children: ReactNode;
  className?: string;
  as?: "h1" | "h2" | "h3";
}) {
  return (
    <Tag
      className={`font-display font-bold text-balance leading-[1.08] text-ink ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SpecStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 font-sans text-[13px] tracking-wide text-white/90">
      {items.map((item, i) => (
        <span key={i} className="flex items-center gap-2">
          {i !== 0 && <span className="text-gold/70">/</span>}
          {item}
        </span>
      ))}
    </div>
  );
}

export function Divider({ className = "" }: { className?: string }) {
  return <div className={`h-px w-full bg-line ${className}`} aria-hidden />;
}
