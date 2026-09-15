export type Town = {
  slug: string;
  name: string;
  county: string;
  blurb: string;
  character: string;
  focus: "windows" | "doors" | "both";
  minutesFromBase: number;
};

// Core service area — launched first. Near/Edge towns (Ephrata, Denver, Lititz,
// Morgantown, Honey Brook, etc.) follow once review volume and GBP presence
// justify expanding past the immediate radius.
export const coreTowns: Town[] = [
  {
    slug: "east-earl",
    name: "East Earl",
    county: "Lancaster County",
    character:
      "our home base — a crossroads community surrounded by working farmland, where older farmhouses sit alongside newer construction.",
    blurb:
      "East Earl is where we're based, so it's also where we're fastest — no drive-time markup, no waiting for a crew to come from across the county.",
    focus: "both",
    minutesFromBase: 0,
  },
  {
    slug: "blue-ball",
    name: "Blue Ball",
    county: "Lancaster County",
    character:
      "a small, close-knit village along Route 322 — mostly older homes that have had a few owners and a few different sets of windows.",
    blurb:
      "Blue Ball's housing stock is older than the county average, which means a lot of the calls we get here are about mismatched replacement windows from a previous round of work — sashes that don't match, trim that was never finished right.",
    focus: "windows",
    minutesFromBase: 6,
  },
  {
    slug: "new-holland",
    name: "New Holland",
    county: "Lancaster County",
    character:
      "a proper small-town Main Street, with a mix of early-1900s rowhomes near the center and newer subdivisions on the edges.",
    blurb:
      "New Holland has more entry doors that see real daily traffic than anywhere else on our list — Main Street rowhomes with doors 60-80 years old, plus newer builds where the builder-grade door was never meant to last.",
    focus: "doors",
    minutesFromBase: 9,
  },
  {
    slug: "terre-hill",
    name: "Terre Hill",
    county: "Lancaster County",
    character:
      "a small historic borough with a well-preserved 19th-century streetscape — a lot of the original window openings are still original size.",
    blurb:
      "Terre Hill's older homes usually still have their original window openings, which matters: it means a proper replacement can go in without carpentry to resize the frame, if it's measured right the first time.",
    focus: "windows",
    minutesFromBase: 8,
  },
  {
    slug: "goodville",
    name: "Goodville",
    county: "Lancaster County",
    character:
      "a quiet rural crossroads — mostly farmhouses and single-family homes on larger lots.",
    blurb:
      "Goodville is spread out and rural, which is exactly the kind of area where a bad quote from a company that never actually walks the property shows up the most.",
    focus: "both",
    minutesFromBase: 5,
  },
  {
    slug: "bowmansville",
    name: "Bowmansville",
    county: "Lancaster / Berks County line",
    character:
      "a small village that straddles the Lancaster–Berks county line — rural, and a little overlooked by companies that only work one side of the county.",
    blurb:
      "Bowmansville sits right on the county line, which means a lot of contractors treat it as out of the way. We don't — it's a nine-minute drive from East Earl.",
    focus: "both",
    minutesFromBase: 9,
  },
];

export function getTown(slug: string): Town | undefined {
  return coreTowns.find((t) => t.slug === slug);
}
