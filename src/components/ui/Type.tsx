import type { ReactNode } from "react";

export function Eyebrow({ children }: { children: ReactNode }) {
  return (
    <span className="block font-mono text-xs tracking-[0.25em] uppercase text-gold mb-3">
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
      className={`font-display font-semibold text-balance leading-[1.08] text-graphite ${className}`}
    >
      {children}
    </Tag>
  );
}

export function SpecStrip({ items }: { items: string[] }) {
  return (
    <div className="flex flex-wrap gap-x-8 gap-y-2 font-mono text-[13px] tracking-wide text-quartz/90">
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
  return <div className={`h-px w-full bg-mist ${className}`} aria-hidden />;
}
