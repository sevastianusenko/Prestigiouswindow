export type Town = {
  slug: string;
  name: string;
  county: string;
  countySlug: string;
  blurb: string;
  character: string;
  focus: "windows" | "doors" | "both";
  minutesFromBase: number;
};

// The original six — closest to the shop, launched first. Still called out
// separately (Footer, homepage) since they're the fastest response, even
// though every town below now has its own page too.
const coreTownSlugs = [
  "east-earl",
  "blue-ball",
  "new-holland",
  "terre-hill",
  "goodville",
  "bowmansville",
];

export const towns: Town[] = [
  // ---- Lancaster County ----
  {
    slug: "east-earl",
    name: "East Earl",
    county: "Lancaster County",
    countySlug: "lancaster",
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
    countySlug: "lancaster",
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
    countySlug: "lancaster",
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
    countySlug: "lancaster",
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
    countySlug: "lancaster",
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
    countySlug: "lancaster",
    character:
      "a small village that straddles the Lancaster–Berks county line — rural, and a little overlooked by companies that only work one side of the county.",
    blurb:
      "Bowmansville sits right on the county line, which means a lot of contractors treat it as out of the way. We don't — it's a nine-minute drive from East Earl.",
    focus: "both",
    minutesFromBase: 9,
  },

  // ---- Berks County ----
  {
    slug: "morgantown",
    name: "Morgantown",
    county: "Berks County",
    countySlug: "berks",
    character:
      "a crossroads village where PA Route 23 meets the Turnpike, old enough to have an 1805 inn still standing and new enough to sit right next to a Turnpike interchange.",
    blurb:
      "Morgantown splits between a historic village core along old Conestoga Road and newer construction that grew up around the Route 23/Turnpike interchange, so we see everything from century-old double-hung windows to ten-year-old builder-grade units in the same afternoon.",
    focus: "both",
    minutesFromBase: 15,
  },
  {
    slug: "new-morgan",
    name: "New Morgan",
    county: "Berks County",
    countySlug: "berks",
    character:
      "one of the smallest boroughs in Pennsylvania, a few dozen residents just south of Morgantown.",
    blurb:
      "New Morgan is small enough that most companies don't bother listing it separately. We do — it's a 17-minute drive from East Earl, borough or not.",
    focus: "both",
    minutesFromBase: 17,
  },
  {
    slug: "geigertown",
    name: "Geigertown",
    county: "Berks County",
    countySlug: "berks",
    character:
      "an unincorporated hamlet in the Hay Creek Valley, rural and quiet, closer to farmland than to any downtown.",
    blurb:
      "Geigertown doesn't have much of a commercial center of its own, which means when a window needs replacing out here, the homeowner is usually looking for someone who'll actually make the drive, not just service the closer towns on the list.",
    focus: "windows",
    minutesFromBase: 22,
  },
  {
    slug: "birdsboro",
    name: "Birdsboro",
    county: "Berks County",
    countySlug: "berks",
    character:
      "a former iron-forge town with a Main Street lined in early-1800s twin and single homes, founded by the Bird family generations before Hopewell Furnace became a national historic site five miles south.",
    blurb:
      "Birdsboro's Main Street is genuinely old — stone and brick twins from the early 1800s standing shoulder to shoulder — which means window and door work here has to account for openings that were never built to a modern standard size.",
    focus: "both",
    minutesFromBase: 27,
  },
  {
    slug: "douglassville",
    name: "Douglassville",
    county: "Berks County",
    countySlug: "berks",
    character:
      "home to the oldest documented house in Berks County, a stone dwelling from 1716, surrounded today by newer subdivisions with little architecturally in common with it.",
    blurb:
      "Douglassville is a genuine split — a handful of structures from the 1700s within sight of subdivisions built in the last twenty years — so the same town can call for a historically careful restoration one week and a standard builder-grade swap the next.",
    focus: "windows",
    minutesFromBase: 37,
  },

  // ---- Chester County ----
  {
    slug: "honey-brook",
    name: "Honey Brook",
    county: "Chester County",
    countySlug: "chester",
    character:
      "a crossroads borough at Route 322 and Route 10, surrounded by a township that's still nearly two-thirds farmland.",
    blurb:
      "Honey Brook is close, ten minutes out, and rural enough that most of our calls here are farmhouses rather than subdivisions.",
    focus: "both",
    minutesFromBase: 10,
  },
  {
    slug: "elverson",
    name: "Elverson",
    county: "Chester County",
    countySlug: "chester",
    character:
      "a small historic borough built around Main and Chestnut Streets, with a well-preserved 18th- and 19th-century streetscape and Hopewell Furnace just over the Berks County line.",
    blurb:
      "Elverson's historic district means a lot of the windows we see here are original openings on homes built before the county line even mattered, which calls for a more careful measurement than a standard subdivision job.",
    focus: "windows",
    minutesFromBase: 18,
  },
  {
    slug: "parkesburg",
    name: "Parkesburg",
    county: "Chester County",
    countySlug: "chester",
    character:
      "a former rail and iron-industry town, its Main Street built up during the Parkesburg Iron Company's early-1900s boom.",
    blurb:
      "Parkesburg's housing stock mostly dates to its railroad and iron-industry boom a century ago, which means entry doors here are more often original openings on aging frames than fresh construction.",
    focus: "doors",
    minutesFromBase: 27,
  },
  {
    slug: "atglen",
    name: "Atglen",
    county: "Chester County",
    countySlug: "chester",
    character:
      "a small railroad village on the Octoraro Creek, built up along the old Pennsylvania Railroad line and barely a square mile end to end.",
    blurb:
      "Atglen is compact enough that we can usually see the whole job — the house and the two neighbors on either side — in one visit.",
    focus: "windows",
    minutesFromBase: 26,
  },
  {
    slug: "coatesville",
    name: "Coatesville",
    county: "Chester County",
    countySlug: "chester",
    character:
      "the only city in Chester County, built around the Lukens Steel works that once rolled armor plate for the country, now mid-way through a real, well-funded revitalization.",
    blurb:
      "Coatesville has the kind of housing stock a farm town doesn't — turn-of-the-century rowhomes and Victorians in the historic core, alongside newer construction on the edges — so the job changes block to block.",
    focus: "both",
    minutesFromBase: 26,
  },

  // ---- Lebanon County ----
  {
    slug: "lebanon",
    name: "Lebanon",
    county: "Lebanon County",
    countySlug: "lebanon",
    character:
      "the county seat, a small former steel city with a Northside of homes dating to the 1880s and a historic Market House still trading downtown.",
    blurb:
      "Lebanon is dense enough — well over 2,000 housing units per square mile — that a lot of the work here is older rowhomes and Victorians rather than the farmhouses we see closer to East Earl.",
    focus: "both",
    minutesFromBase: 42,
  },
  {
    slug: "annville",
    name: "Annville",
    county: "Lebanon County",
    countySlug: "lebanon",
    character:
      "home to Lebanon Valley College, with a Main Street historic district that includes surviving 18th-century log houses alongside Victorian mansions built by 19th-century industrialists.",
    blurb:
      "Annville's Main Street historic district has real variety in it — log construction from the 1700s next to Victorian-era stone and brick — so no two window jobs here look quite the same.",
    focus: "windows",
    minutesFromBase: 38,
  },
  {
    slug: "myerstown",
    name: "Myerstown",
    county: "Lebanon County",
    countySlug: "lebanon",
    character:
      "a compact, German-settled borough under a square mile, home to a limestone farmhouse from around 1750 that's one of the oldest buildings in town.",
    blurb:
      "Myerstown is small and old at its core, which means the calls we get here often start with \"the window is original to the house\" — sometimes it actually is.",
    focus: "both",
    minutesFromBase: 32,
  },
  {
    slug: "cornwall",
    name: "Cornwall",
    county: "Lebanon County",
    countySlug: "lebanon",
    character:
      "home to the Cornwall Iron Furnace, a National Historic Landmark, with a designated historic overlay district that puts real rules on exterior work in parts of the borough.",
    blurb:
      "Cornwall's historic overlay district means some window and door replacements here need to go through a review most of our other towns never think about — worth knowing before you pick a product, not after.",
    focus: "windows",
    minutesFromBase: 42,
  },
  {
    slug: "jonestown",
    name: "Jonestown",
    county: "Lebanon County",
    countySlug: "lebanon",
    character:
      "a small borough near the I-81 interchange at Swatara Creek, quieter and less documented than its historic neighbors, but no less real.",
    blurb:
      "Jonestown doesn't have a marquee landmark the way Cornwall or Annville does. It's just a small borough near the interstate where people want their windows fixed without a sales pitch attached.",
    focus: "both",
    minutesFromBase: 42,
  },

  // ---- Dauphin County ----
  {
    slug: "harrisburg",
    name: "Harrisburg",
    county: "Dauphin County",
    countySlug: "dauphin",
    character:
      "the Pennsylvania state capital, with dense rowhome neighborhoods like Midtown built well before WWII, some of them inside named historic districts.",
    blurb:
      "Harrisburg is the farthest we go, over an hour from East Earl, and we're honest that we're selective about which jobs we take out here. The rowhome stock in Midtown is exactly the kind of older entry-door work we're actually good at.",
    focus: "doors",
    minutesFromBase: 73,
  },
  {
    slug: "hershey",
    name: "Hershey",
    county: "Dauphin County",
    countySlug: "dauphin",
    character:
      "a company town built by Milton Hershey starting in 1903, with original worker housing from the early 1900s still standing next to newer development.",
    blurb:
      "Hershey's original company-built housing is now well over a century old, which puts it in the same window-repair category as some of our closer towns — just with a longer drive attached.",
    focus: "windows",
    minutesFromBase: 57,
  },
  {
    slug: "hummelstown",
    name: "Hummelstown",
    county: "Dauphin County",
    countySlug: "dauphin",
    character:
      "a small historic borough between Harrisburg and Hershey, founded in 1762 as Fredrickstown, with an old downtown that still sees a lot of drive-through tourist traffic.",
    blurb:
      "Hummelstown sits right between two much bigger names, Harrisburg and Hershey, but it has its own old downtown core that needs the same careful measuring either of them would.",
    focus: "both",
    minutesFromBase: 65,
  },
  {
    slug: "middletown",
    name: "Middletown",
    county: "Dauphin County",
    countySlug: "dauphin",
    character:
      "a Susquehanna River borough founded in 1755, with architecture that genuinely ranges from log houses to Victorian mansions, and home to Penn State Harrisburg.",
    blurb:
      "Middletown's age shows — the borough's own records describe housing running from log construction to Victorian mansions, about as wide a range as we see anywhere on this list.",
    focus: "windows",
    minutesFromBase: 68,
  },
  {
    slug: "steelton",
    name: "Steelton",
    county: "Dauphin County",
    countySlug: "dauphin",
    character:
      "a company town built around the Pennsylvania Steel Company starting in 1866, with dense worker rowhomes that once housed more than double the borough's current population.",
    blurb:
      "Steelton was built fast around a steel mill in the 1800s, which means the rowhomes here share walls and share an era — mostly narrow entry doors on frames that have had well over a century to settle.",
    focus: "doors",
    minutesFromBase: 70,
  },

  // ---- York County ----
  {
    slug: "york",
    name: "York",
    county: "York County",
    countySlug: "york",
    character:
      "the only city on this list with its own Revolutionary War claim to fame, briefly the U.S. capital in 1777, with a downtown core of Italianate and Victorian rowhomes on cobblestone streets.",
    blurb:
      "York's downtown rowhomes, Italianate and Victorian, sit on some of the oldest streets we work on anywhere in our service area, well across the Susquehanna from home base.",
    focus: "both",
    minutesFromBase: 54,
  },
  {
    slug: "wrightsville",
    name: "Wrightsville",
    county: "York County",
    countySlug: "york",
    character:
      "a river borough with a real Civil War story — Union militia burned its Susquehanna bridge in 1863 to stop a Confederate advance — and a historic district of small frame homes from the 1790s onward.",
    blurb:
      "Wrightsville's historic district is genuinely old, frame vernacular homes going back to the 1790s, so a lot of what we do here is matching new glass to an opening nobody's touched in decades.",
    focus: "windows",
    minutesFromBase: 40,
  },
  {
    slug: "hallam",
    name: "Hallam",
    county: "York County",
    countySlug: "york",
    character:
      "a quiet borough on the Route 30 corridor that mostly grew after 1940, so its housing stock is newer than its river-town neighbors.",
    blurb:
      "Hallam doesn't have the historic core some of the other York County towns do — most of it grew after 1940, which usually makes for a more straightforward replacement job.",
    focus: "both",
    minutesFromBase: 46,
  },
  {
    slug: "red-lion",
    name: "Red Lion",
    county: "York County",
    countySlug: "york",
    character:
      "a former cigar-manufacturing borough that once had 150 factories and made roughly a tenth of the country's cigars, with worker housing from that boom still standing.",
    blurb:
      "Red Lion's rowhomes and small frame houses mostly date to its cigar-factory era a century ago — entry doors here have usually seen more decades of weather than the house's current owner has been alive.",
    focus: "doors",
    minutesFromBase: 56,
  },
  {
    slug: "windsor",
    name: "Windsor",
    county: "York County",
    countySlug: "york",
    character:
      "a large, mostly rural township with a protected agricultural district — more open land and farmhouses than the denser boroughs closer to the river.",
    blurb:
      "Windsor Township is spread out and still genuinely agricultural in parts, which puts it closer in character to our home base around East Earl than to York's rowhome streets — just a lot farther from our shop.",
    focus: "both",
    minutesFromBase: 50,
  },
];

export const coreTowns: Town[] = coreTownSlugs
  .map((slug) => towns.find((t) => t.slug === slug))
  .filter((t): t is Town => Boolean(t));

export function getTown(slug: string): Town | undefined {
  return towns.find((t) => t.slug === slug);
}

export function getTownsByCounty(countySlug: string): Town[] {
  return towns.filter((t) => t.countySlug === countySlug);
}
