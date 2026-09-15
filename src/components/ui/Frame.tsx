import Image from "next/image";
import type { StaticImageData } from "next/image";

export function FramedPhoto({
  src,
  alt,
  priority,
  sizes = "(min-width: 1024px) 50vw, 100vw",
  className = "",
}: {
  src: string | StaticImageData;
  alt: string;
  priority?: boolean;
  sizes?: string;
  className?: string;
}) {
  return (
    <div className={`relative p-2 ${className}`}>
      <div className="frame-line absolute inset-0" aria-hidden />
      <div className="relative aspect-[4/5] sm:aspect-[4/3] overflow-hidden">
        <Image
          src={src}
          alt={alt}
          fill
          priority={priority}
          sizes={sizes}
          className="object-cover"
        />
      </div>
    </div>
  );
}
