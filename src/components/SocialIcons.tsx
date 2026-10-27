import { site } from "@/lib/site";

// Brand glyphs from simple-icons (CC0); Nextdoor and ProvenExpert have no
// compact mark there, so they get a plain "n" and a review star.
const profiles = [
  {
    label: "Google Business Profile",
    href: site.social.google,
    path: "M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133-1.147 1.147-2.933 2.4-6.053 2.4-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0 5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36 2.16-2.16 2.84-5.213 2.84-7.667 0-.76-.053-1.467-.173-2.053H12.48z",
  },
  {
    label: "Facebook",
    href: site.social.facebook,
    path: "M9.101 23.691v-7.98H6.627v-3.667h2.474v-1.58c0-4.085 1.848-5.978 5.858-5.978.401 0 .955.042 1.468.103a8.68 8.68 0 0 1 1.141.195v3.325a8.623 8.623 0 0 0-.653-.036 26.805 26.805 0 0 0-.733-.009c-.707 0-1.259.096-1.675.309a1.686 1.686 0 0 0-.679.622c-.258.42-.374.995-.374 1.752v1.297h3.919l-.386 2.103-.287 1.564h-3.246v8.245C19.396 23.238 24 18.179 24 12.044c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.628 3.874 10.35 9.101 11.647Z",
  },
  {
    label: "Houzz",
    href: site.social.houzz,
    path: "M1.27 0V24H9.32V16.44H14.68V24H22.73V10.37L6.61 5.75V0H1.27Z",
  },
  {
    label: "Nextdoor",
    href: site.social.nextdoor,
    path: "M4 21V4h4.5v2.6A6.5 6.5 0 0 1 20 11.5V21h-4.5v-9a3.25 3.25 0 0 0-6.5 0v9Z",
  },
  {
    label: "ProvenExpert reviews",
    href: site.social.provenexpert,
    path: "m12 1.5 3.09 6.26 6.91 1-5 4.87 1.18 6.88L12 17.27l-6.18 3.24L7 13.63 2 8.76l6.91-1Z",
  },
];

export function SocialIcons() {
  return (
    <ul className="flex gap-2.5" aria-label="Find us online">
      {profiles.map((p) => (
        <li key={p.label}>
          <a
            href={p.href}
            target="_blank"
            rel="noopener"
            aria-label={p.label}
            title={p.label}
            className="grid size-9 place-items-center rounded-full border border-white/25 text-white/80 transition-colors hover:border-gold hover:bg-gold hover:text-ink"
          >
            <svg viewBox="0 0 24 24" className="size-4" fill="currentColor" aria-hidden="true">
              <path d={p.path} />
            </svg>
          </a>
        </li>
      ))}
    </ul>
  );
}
