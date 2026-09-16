import Link from "next/link";
import type { ReactNode } from "react";

const base =
  "inline-flex items-center justify-center gap-2 rounded-full px-6 py-3 text-sm font-semibold transition-colors duration-200 border-2";

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
    primary: "bg-white text-ink border-gold hover:bg-gold hover:text-ink",
    "ghost-dark": "bg-transparent text-ink border-ink hover:bg-ink hover:text-white",
    "ghost-light": "bg-transparent text-white border-white hover:bg-white hover:text-ink",
  }[variant];

  return (
    <Link href={href} className={`${base} ${styles} ${className}`}>
      {children}
    </Link>
  );
}
