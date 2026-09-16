import Image from "next/image";

export function Logo({ className }: { className?: string }) {
  return (
    <Image
      src="/logo-real.png"
      alt="Prestigious Home Improvements logo"
      width={899}
      height={374}
      priority
      className={`${className ?? ""} w-auto object-contain`}
    />
  );
}
