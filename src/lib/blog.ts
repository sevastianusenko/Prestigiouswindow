export type BlogPost = {
  slug: string;
  title: string;
  dek: string;
  description: string;
  date: string; // YYYY-MM-DD
  readMinutes: number;
  heroImage: string;
  heroAlt: string;
  keywords: string[];
};

export const posts: BlogPost[] = [
  {
    slug: "house-window-repair-guide",
    title: "House Window Repair: How to Diagnose the Problem Before You Call Anyone",
    dek: "Five ways a window actually fails, and how to tell which one you've got before you pick up the phone.",
    description:
      "A homeowner's guide to diagnosing window problems yourself: failed seals, bad balances, cracked glass, rot, and stuck screens, explained plainly.",
    date: "2026-10-01",
    readMinutes: 8,
    heroImage: "/photos/window-double-hung.jpg",
    heroAlt: "A newly installed double-hung window, trimmed and caulked",
    keywords: ["house window repair"],
  },
  {
    slug: "foggy-window-seal-repair",
    title: "Foggy or Cloudy Windows: What a Failed Seal Actually Means",
    dek: "The haze between the panes isn't dirt, and it won't wipe off. Here's what's actually happening, and what it costs to fix.",
    description:
      "Why window glass fogs up between the panes, what a failed seal actually is, and whether it needs a new sash or a whole new window.",
    date: "2026-11-01",
    readMinutes: 8,
    heroImage: "/photos/window-tree-reflection.jpg",
    heroAlt:
      "A white double-hung window on a stucco home, the glass clearly reflecting the trees and sky outside",
    keywords: [
      "window seal repair",
      "residential window glass replacement",
      "double glazed window installers",
    ],
  },
  {
    slug: "window-wont-stay-up-balance-repair",
    title: "Why Your Double-Hung Window Won't Stay Up",
    dek: "It isn't broken. It's unbalanced, and the fix is smaller than you'd think.",
    description:
      "The real reason a double-hung window falls shut or won't stay up on its own, and why it's usually a balance fix, not a new window.",
    date: "2026-12-01",
    readMinutes: 8,
    heroImage: "/photos/window-porch-rockers.webp",
    heroAlt: "Double-hung windows along a covered porch with rocking chairs",
    keywords: [
      "window balance repair",
      "vinyl double hung window repair",
      "double hung vinyl window repair",
    ],
  },
  {
    slug: "cracked-window-glass-repair-cost",
    title: "Cracked Window Glass: What It Actually Costs to Fix, and How Fast",
    dek: "A straight answer on price and timeline, plus how to tell a pane swap from a full replacement.",
    description:
      "What it actually costs to fix a cracked window, how long it takes, and how to tell whether you need a new pane or a whole new unit.",
    date: "2027-01-01",
    readMinutes: 9,
    heroImage: "/photos/door-glass-decorative.jpg",
    heroAlt:
      "A white door with a decorative diamond-patterned glass insert and black hardware",
    keywords: [
      "window glass repair",
      "house window crack repair",
      "front door glass repair",
    ],
  },
  {
    slug: "window-cost-guide",
    title: "What Windows Actually Cost: A Straight Answer for Budget-Conscious Homeowners",
    dek: "Real ranges, the variables that move them, and why nobody serious quotes a number over the phone.",
    description:
      "Real window replacement price ranges and the specific things that move them, from a company that measures before it quotes anything.",
    date: "2027-02-01",
    readMinutes: 9,
    heroImage: "/photos/house-multi-gable-blue.jpg",
    heroAlt:
      "A house exterior with multiple gabled dormers and many double-hung windows",
    keywords: ["budget windows", "affordable window installation", "cost to replace storm window glass"],
  },
  {
    slug: "single-pane-windows-repair-or-replace",
    title: "Single-Pane Windows: Repair, Replace, or Add a Storm Window?",
    dek: "Three real options for an original sash, laid out without a sales pitch attached.",
    description:
      "Three honest options for an old single-pane window: repair it, replace it, or add a storm window. What actually decides which one is right.",
    date: "2027-03-01",
    readMinutes: 9,
    heroImage: "/photos/window-blue-shutters-gables.jpg",
    heroAlt:
      "A pale yellow colonial-style house with blue shutters and three dormer windows in the roofline",
    keywords: ["single pane window repair", "single pane window replacement"],
  },
  {
    slug: "replacing-windows-in-an-old-house",
    title: "Replacing (or Restoring) Windows in an Older Home",
    dek: "Before you assume the originals have to go, here's how to actually think about it.",
    description:
      "How to think through replacing versus restoring the original windows in an older home, before assuming replacement is the only option.",
    date: "2027-04-01",
    readMinutes: 9,
    heroImage: "/photos/house-knight-wood.jpg",
    heroAlt:
      "A craftsman-style bungalow with a covered front porch and a dormer window in the roof",
    keywords: [
      "replace windows old house",
      "install new window in old house",
      "restoring wood frame windows",
    ],
  },
  {
    slug: "basement-window-installation-repair",
    title: "Basement Windows: Installation, Repair, and Window Well Replacement",
    dek: "Egress code, window wells, and the difference a bedroom makes.",
    description:
      "Basement window installation and repair explained, including when egress code applies and what a window well replacement actually involves.",
    date: "2027-05-01",
    readMinutes: 9,
    heroImage: "/photos/window-modern-house-2.jpg",
    heroAlt: "A house exterior with several windows of different sizes",
    keywords: [
      "basement window installation",
      "basement window repair",
      "basement window well replacement",
      "replacement basement window glass",
    ],
  },
  {
    slug: "window-screens-casings-small-jobs",
    title: "Window Screens, Casings, and the Small Jobs Bigger Companies Skip",
    dek: "Not every window problem needs a whole new window. Some of them just need someone willing to show up.",
    description:
      "Window screen repair, casing installation, and other small window jobs that many replacement-only companies won't take on.",
    date: "2027-06-01",
    readMinutes: 8,
    heroImage: "/photos/window-porch-pgt.jpg",
    heroAlt:
      "A newly installed window with the manufacturer's spec sticker still on the glass",
    keywords: [
      "who installs window screens",
      "window casing installation",
      "aluminum window installation",
    ],
  },
  {
    slug: "patio-sliding-door-repair",
    title: "Sliding Patio Door Won't Slide? Common Fixes Before You Replace It",
    dek: "Rollers, tracks, and alignment: the usual suspects before you assume the whole door is done.",
    description:
      "The most common reasons a sliding patio door sticks or comes off track, and which ones are a repair instead of a full replacement.",
    date: "2027-07-01",
    readMinutes: 8,
    heroImage: "/photos/door-slider-white-patio.jpg",
    heroAlt: "A white multi-panel sliding patio door opening onto a brick patio",
    keywords: ["patio sliding door repair"],
  },
  {
    slug: "gas-filled-window-panes-explained",
    title: "Gas-Filled Window Panes: What \"Gas Window Repair\" Actually Means",
    dek: "Argon, krypton, and the quiet reason a modern window outperforms an old one.",
    description:
      "What the gas fill between window panes actually does, what happens when it leaks, and whether \"gas window repair\" is even a real repair.",
    date: "2027-08-01",
    readMinutes: 7,
    heroImage: "/photos/window-tree-reflection.jpg",
    heroAlt:
      "A white double-hung window on a stucco home, the glass clearly reflecting the trees and sky outside",
    keywords: ["gas window repair"],
  },
  {
    slug: "attic-window-replacement",
    title: "Attic Windows: When Replacement Actually Makes Sense",
    dek: "Ventilation, heat, and the header question that doesn't come up in any other room.",
    description:
      "When it's worth replacing an attic window, what changes structurally versus other rooms, and how attic windows affect heat and ventilation.",
    date: "2027-09-01",
    readMinutes: 7,
    heroImage: "/photos/window-blue-shutters-gables.jpg",
    heroAlt:
      "A pale yellow colonial-style house with blue shutters and three dormer windows in the roofline",
    keywords: ["attic window replacement"],
  },
];

export function getPost(slug: string): BlogPost | undefined {
  return posts.find((p) => p.slug === slug);
}

export function getAdjacentPosts(slug: string): {
  prev?: BlogPost;
  next?: BlogPost;
} {
  const idx = posts.findIndex((p) => p.slug === slug);
  if (idx === -1) return {};
  return {
    prev: idx > 0 ? posts[idx - 1] : undefined,
    next: idx < posts.length - 1 ? posts[idx + 1] : undefined,
  };
}

export function formatPostDate(date: string): string {
  return new Date(`${date}T00:00:00`).toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
    year: "numeric",
  });
}
