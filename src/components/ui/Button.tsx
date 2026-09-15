import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium tracking-wide uppercase transition-colors duration-200";

export function ButtonLink({
  href,
  children,
  variant = "primary",
  className = "",
}: {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost-dark" | "ghost-light";
  className?: string;
}) {
  const styles = {
    primary: "bg-graphite text-quartz hover:bg-gold hover:text-graphite",
    "ghost-dark": "border border-graphite text-graphite hover:bg-graphite hover:text-quartz",
    "ghost-light": "border border-quartz/60 text-quartz hover:bg-quartz hover:text-graphite",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
