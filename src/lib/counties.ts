export type County = {
  slug: string;
  name: string;
  seat: string;
  heroImage: string;
  heroAlt: string;
  blurb: string;
  distanceNote: string;
};

export const counties: County[] = [
  {
    slug: "lancaster",
    name: "Lancaster County",
    seat: "City of Lancaster",
    heroImage: "/photos/hero-farmhouse-autumn.webp",
    heroAlt: "A farmhouse in autumn surrounded by Pennsylvania Dutch Country farmland",
    blurb:
      "Home base. The most productive non-irrigated farmland in the country, three centuries of German, Swiss, and Welsh settlement, and the housing stock to match — stone farmhouses next to new construction, sometimes on the same road.",
    distanceNote: "0 to 9 minutes from our shop — this is where we started.",
  },
  {
    slug: "berks",
    name: "Berks County",
    seat: "Reading",
    heroImage: "/photos/house-multi-gable-blue.jpg",
    heroAlt: "A house exterior with multiple gabled dormers and many double-hung windows",
    blurb:
      "Southern Berks County is old iron-forge and rail-town country along the Schuylkill corridor, Route 23, and the Turnpike — close enough to East Earl that we treat it as an extension of home base.",
    distanceNote: "15 to 37 minutes from our shop, depending on the town.",
  },
  {
    slug: "chester",
    name: "Chester County",
    seat: "West Chester",
    heroImage: "/photos/house-knight-wood.jpg",
    heroAlt: "A craftsman-style bungalow with a covered front porch and a dormer window in the roof",
    blurb:
      "Western Chester County, the part that borders us, looks nothing like the wealthy Philadelphia suburbs the rest of the county is known for. It's farmland, small rail-era boroughs, and one former steel city working through a real revitalization.",
    distanceNote: "10 to 27 minutes from our shop.",
  },
  {
    slug: "lebanon",
    name: "Lebanon County",
    seat: "City of Lebanon",
    heroImage: "/photos/window-blue-shutters-gables.jpg",
    heroAlt:
      "A pale yellow colonial-style house with blue shutters and three dormer windows in the roofline",
    blurb:
      "Lebanon County shares Lancaster's Pennsylvania Dutch roots, the same limestone soil, the same farming heritage, with its own mix of historic boroughs, a landmark 18th-century iron furnace, and a county seat still finding its way past the steel industry's exit.",
    distanceNote: "32 to 42 minutes from our shop.",
  },
  {
    slug: "dauphin",
    name: "Dauphin County",
    seat: "Harrisburg",
    heroImage: "/photos/door-glass-sidelights.webp",
    heroAlt: "A traditional entry door with decorative glass and matching sidelights",
    blurb:
      "Dauphin County is the farthest reach of our service area: the state capital, a chocolate company town, and a run of Susquehanna River boroughs built up around 19th-century steel and rail. We're upfront that it's a longer drive, and selective about which jobs out here make sense.",
    distanceNote: "57 to 73 minutes from our shop — our longest drives.",
  },
  {
    slug: "york",
    name: "York County",
    seat: "York",
    heroImage: "/photos/window-green-shutters.jpg",
    heroAlt: "A cottage-style home with a covered arched entry and painted wood shutters",
    blurb:
      "Eastern York County sits just across the Susquehanna from Lancaster County — a historic manufacturing city and a handful of smaller river-valley boroughs that grew up around cigar-making, rail, and industry in the 1800s and early 1900s.",
    distanceNote: "40 to 56 minutes from our shop, across the river.",
  },
];

export function getCounty(slug: string): County | undefined {
  return counties.find((c) => c.slug === slug);
}
