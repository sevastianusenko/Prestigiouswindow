export type ServiceParent =
  | "windows/replacement"
  | "windows/repair"
  | "doors/replacement"
  | "doors/repair";

export type ServiceCategory = {
  slug: string;
  parent: ServiceParent;
  /** Which card grid on the parent page this belongs to. */
  group: "type" | "material" | "repair";
  /** Short label used on the parent page's card. */
  name: string;
  /** The one-liner that already sits on the parent page's card. */
  cardDetail: string;
  /** H1 on the category page itself. */
  h1: string;
  /** Hero paragraph under the H1. */
  dek: string;
  description: string;
  heroImage: string;
  heroAlt: string;
};

const PHOTO = {
  doubleHung: {
    src: "/photos/window-double-hung.jpg",
    alt: "A newly installed double-hung window, trimmed and caulked",
  },
  porchPgt: {
    src: "/photos/window-porch-pgt.jpg",
    alt: "A newly installed window with the manufacturer's spec sticker still on the glass",
  },
  gables: {
    src: "/photos/house-multi-gable-blue.jpg",
    alt: "A house exterior with multiple gabled dormers and many double-hung windows",
  },
  roughOpening: {
    src: "/photos/process-rough-opening.jpg",
    alt: "A rough opening squared and leveled mid-construction, ready for a window or door",
  },
  treeReflection: {
    src: "/photos/window-tree-reflection.jpg",
    alt: "A white double-hung window on a stucco home, the glass reflecting the trees and sky outside",
  },
  blueShutters: {
    src: "/photos/window-blue-shutters-gables.jpg",
    alt: "A pale yellow colonial-style house with blue shutters and three dormer windows in the roofline",
  },
  modernHouse: {
    src: "/photos/window-modern-house-2.jpg",
    alt: "A house exterior with several windows of different sizes",
  },
  constructionSliders: {
    src: "/photos/window-arched-shutters.jpg",
    alt: "A rough-framed room with large black-framed sliding glass doors newly installed",
  },
  porchRockers: {
    src: "/photos/window-porch-rockers.webp",
    alt: "Double-hung windows along a covered porch with rocking chairs",
  },
  sidelights: {
    src: "/photos/door-glass-sidelights.webp",
    alt: "A traditional entry door with decorative glass and matching sidelights",
  },
  whiteSlider: {
    src: "/photos/door-slider-white-patio.jpg",
    alt: "A white multi-panel sliding patio door opening onto a brick patio",
  },
  decorativeGlass: {
    src: "/photos/door-glass-decorative.jpg",
    alt: "A white entry door with a decorative diamond-patterned glass insert and black hardware",
  },
  blackHardware: {
    src: "/photos/door-black-hardware.jpg",
    alt: "A door with black lever hardware, set in a stucco wall",
  },
  blackSlider: {
    src: "/photos/door-slider-black-frame.jpg",
    alt: "A three-panel black-framed sliding glass door being installed in a house under construction",
  },
  hinge: {
    src: "/photos/detail-door-hinge.jpg",
    alt: "A close-up of a door hinge and jamb during a hardware repair, with visible screws and exposed wood",
  },
  finishedExterior: {
    src: "/photos/hero-finished-exterior.jpg",
    alt: "Recent window and door installation work by Prestigious Windows & Doors",
  },
  knightWood: {
    src: "/photos/house-knight-wood.jpg",
    alt: "A craftsman-style bungalow with a covered front porch and a dormer window in the roof",
  },
} as const;

export const serviceCategories: ServiceCategory[] = [
  // ---------- WINDOWS / REPLACEMENT — types ----------
  {
    slug: "double-hung",
    parent: "windows/replacement",
    group: "type",
    name: "Double-hung",
    cardDetail:
      "The default for most homes — both sashes move, tilts in for cleaning from inside.",
    h1: "Double-hung window replacement",
    dek: "The most common replacement window in this part of Pennsylvania, and the one most houses here were built with in the first place.",
    description:
      "Double-hung window replacement in Lancaster County, PA. Both sashes operate, tilt-in cleaning, and a profile that matches most homes in the area.",
    heroImage: PHOTO.doubleHung.src,
    heroAlt: PHOTO.doubleHung.alt,
  },
  {
    slug: "casement",
    parent: "windows/replacement",
    group: "type",
    name: "Casement",
    cardDetail:
      "Crank-out, seals tighter than double-hung when closed. Good over sinks and counters.",
    h1: "Casement window replacement",
    dek: "Crank-out windows that seal against the frame under compression, which is why they outperform a double-hung on a windy wall.",
    description:
      "Casement window replacement in Lancaster County, PA. Crank-out operation, tighter sealing than double-hung, and a good fit over sinks and counters.",
    heroImage: PHOTO.porchPgt.src,
    heroAlt: PHOTO.porchPgt.alt,
  },
  {
    slug: "bay-and-bow",
    parent: "windows/replacement",
    group: "type",
    name: "Bay & bow",
    cardDetail:
      "Multi-panel projection — adds floor space and light. More structural planning up front.",
    h1: "Bay & bow window replacement",
    dek: "The one window type where the structure above the opening matters as much as the window going into it.",
    description:
      "Bay and bow window replacement in Lancaster County, PA. Multi-panel projections, header and support planning, and finished seat and roof detailing.",
    heroImage: PHOTO.gables.src,
    heroAlt: PHOTO.gables.alt,
  },
  {
    slug: "egress",
    parent: "windows/replacement",
    group: "type",
    name: "Egress",
    cardDetail:
      "Code-sized for basement bedrooms. We check the opening against code before quoting, not after.",
    h1: "Egress window installation",
    dek: "The window a finished basement bedroom legally needs, sized to a specific clear opening rather than to whatever fits the existing hole.",
    description:
      "Egress window installation in Lancaster County, PA. Code-sized clear openings, window wells, and cutting a larger opening where the existing one won't pass.",
    heroImage: PHOTO.roughOpening.src,
    heroAlt: PHOTO.roughOpening.alt,
  },

  // ---------- WINDOWS / REPLACEMENT — materials ----------
  {
    slug: "vinyl",
    parent: "windows/replacement",
    group: "material",
    name: "Vinyl",
    cardDetail:
      "The most common choice in this area, and usually the best value — low maintenance, good insulation, no painting.",
    h1: "Vinyl replacement windows",
    dek: "What most people are actually picturing when they price replacement windows, and what most houses around here end up with for good reason.",
    description:
      "Vinyl replacement windows in Lancaster County, PA. Low maintenance, good insulation value, and the frame material most replacement hardware is built around.",
    heroImage: PHOTO.treeReflection.src,
    heroAlt: PHOTO.treeReflection.alt,
  },
  {
    slug: "wood-clad",
    parent: "windows/replacement",
    group: "material",
    name: "Wood-clad",
    cardDetail:
      "Wood on the inside for a traditional look, a low-maintenance exterior cladding facing the weather.",
    h1: "Wood-clad replacement windows",
    dek: "Real wood facing the room, an aluminum or fiberglass skin facing the weather. The compromise older houses usually want.",
    description:
      "Wood-clad replacement windows in Lancaster County, PA. Interior wood to match original trim, a low-maintenance exterior cladding facing the weather.",
    heroImage: PHOTO.blueShutters.src,
    heroAlt: PHOTO.blueShutters.alt,
  },
  {
    slug: "fiberglass",
    parent: "windows/replacement",
    group: "material",
    name: "Fiberglass",
    cardDetail:
      "Holds paint well, resists warping better than vinyl in temperature swings, narrower frame profile.",
    h1: "Fiberglass replacement windows",
    dek: "Dimensionally the most stable of the four materials, which matters more on a big opening than a small one.",
    description:
      "Fiberglass replacement windows in Lancaster County, PA. Narrow frame profiles, excellent dimensional stability, and a paintable exterior.",
    heroImage: PHOTO.modernHouse.src,
    heroAlt: PHOTO.modernHouse.alt,
  },
  {
    slug: "aluminum",
    parent: "windows/replacement",
    group: "material",
    name: "Aluminum",
    cardDetail:
      "Slim sightlines and real strength for larger openings, but conducts more cold unless thermally broken.",
    h1: "Aluminum window installation",
    dek: "The narrowest frame for the most glass, with one real caveat about cold that an honest quote has to mention.",
    description:
      "Aluminum window installation in Lancaster County, PA. Slim sightlines for large openings, thermally broken frames, and honest advice on where aluminum fits.",
    heroImage: PHOTO.constructionSliders.src,
    heroAlt: PHOTO.constructionSliders.alt,
  },

  // ---------- DOORS / REPLACEMENT — types ----------
  {
    slug: "entry-doors",
    parent: "doors/replacement",
    group: "type",
    name: "Entry doors",
    cardDetail: "Fiberglass, steel, or wood — the door that gets used, and judged, the most.",
    h1: "Entry door replacement",
    dek: "The door everyone who visits your house touches, and the one that has to seal against weather on the worst day of the year.",
    description:
      "Entry door replacement in Lancaster County, PA. Fiberglass, steel, and wood entry doors, hung plumb and sealed so they still latch cleanly in five years.",
    heroImage: PHOTO.sidelights.src,
    heroAlt: PHOTO.sidelights.alt,
  },
  {
    slug: "patio-doors",
    parent: "doors/replacement",
    group: "type",
    name: "Patio & sliding doors",
    cardDetail: "Full-panel replacement, track and frame included — not just the glass.",
    h1: "Patio & sliding door replacement",
    dek: "The largest moving thing in most houses, riding on two small wheels and a track that has to stay dead straight.",
    description:
      "Patio and sliding door replacement in Lancaster County, PA. Full panel, track, and frame replacement with flashed sills that shed water properly.",
    heroImage: PHOTO.whiteSlider.src,
    heroAlt: PHOTO.whiteSlider.alt,
  },
  {
    slug: "french-doors",
    parent: "doors/replacement",
    group: "type",
    name: "French doors",
    cardDetail:
      "Paired doors, hung to close flush against each other without a gap or a fight.",
    h1: "French door replacement",
    dek: "Two doors that have to meet perfectly in the middle, which is why they are less forgiving to hang than anything else we install.",
    description:
      "French door replacement in Lancaster County, PA. Paired doors hung to close flush, with astragal, weatherstripping, and hardware set correctly.",
    heroImage: PHOTO.decorativeGlass.src,
    heroAlt: PHOTO.decorativeGlass.alt,
  },
  {
    slug: "storm-doors",
    parent: "doors/replacement",
    group: "type",
    name: "Storm doors",
    cardDetail:
      "Added protection and ventilation ahead of an entry door — sized to match, not generic.",
    h1: "Storm door installation",
    dek: "A second layer in front of the entry door, sized to that specific opening rather than pulled off a shelf in three standard widths.",
    description:
      "Storm door installation in Lancaster County, PA. Full-view and ventilating storm doors sized to your existing entry opening, with closers set properly.",
    heroImage: PHOTO.blackHardware.src,
    heroAlt: PHOTO.blackHardware.alt,
  },

  // ---------- DOORS / REPLACEMENT — materials ----------
  {
    slug: "fiberglass-doors",
    parent: "doors/replacement",
    group: "material",
    name: "Fiberglass",
    cardDetail:
      "Holds up to weather and temperature swings better than wood, takes paint or a wood-grain finish well.",
    h1: "Fiberglass entry doors",
    dek: "The default entry door material now, and the one that handles a south-facing opening without complaining about it.",
    description:
      "Fiberglass entry doors in Lancaster County, PA. Weather-stable, dent-resistant, and available in paintable or wood-grain finishes.",
    heroImage: PHOTO.decorativeGlass.src,
    heroAlt: PHOTO.decorativeGlass.alt,
  },
  {
    slug: "steel-doors",
    parent: "doors/replacement",
    group: "material",
    name: "Steel",
    cardDetail:
      "The most affordable option with real security, dents more easily than fiberglass but is straightforward to repaint.",
    h1: "Steel entry doors",
    dek: "The most security and the least money, with one honest weakness worth knowing about before you pick it.",
    description:
      "Steel entry door replacement in Lancaster County, PA. Strong, affordable, easy to repaint, with honest guidance on where steel is and isn't the right call.",
    heroImage: PHOTO.blackHardware.src,
    heroAlt: PHOTO.blackHardware.alt,
  },
  {
    slug: "wood-doors",
    parent: "doors/replacement",
    group: "material",
    name: "Wood",
    cardDetail:
      "Still the right call on older or historic homes where the original look matters.",
    h1: "Wood entry doors",
    dek: "The only material that genuinely looks like wood, in exchange for the only material that genuinely needs maintenance.",
    description:
      "Wood entry door replacement in Lancaster County, PA. Solid and stile-and-rail wood doors for older homes where the original look matters.",
    heroImage: PHOTO.sidelights.src,
    heroAlt: PHOTO.sidelights.alt,
  },
  {
    slug: "vinyl-sliding-doors",
    parent: "doors/replacement",
    group: "material",
    name: "Vinyl-frame sliders",
    cardDetail:
      "Standard for patio and sliding doors — low maintenance, good insulation, built around common hardware.",
    h1: "Vinyl sliding patio doors",
    dek: "The frame material most sliding patio door hardware is designed around, which makes parts easy to get years later.",
    description:
      "Vinyl sliding patio doors in Lancaster County, PA. Low-maintenance frames, good insulation, and hardware that stays serviceable long-term.",
    heroImage: PHOTO.blackSlider.src,
    heroAlt: PHOTO.blackSlider.alt,
  },

  // ---------- WINDOWS / REPAIR ----------
  {
    slug: "fogged-glass",
    parent: "windows/repair",
    group: "repair",
    name: "Fogged or cloudy glass",
    cardDetail:
      "The seal between the panes has failed and moisture got in — usually a glass unit swap, not a new window.",
    h1: "Window seal & fogged glass repair",
    dek: "The haze between the panes that never wipes off, because it is on the two surfaces nobody can reach.",
    description:
      "Fogged window and failed seal repair in Lancaster County, PA. Insulated glass unit replacement inside your existing sash and frame.",
    heroImage: PHOTO.treeReflection.src,
    heroAlt: PHOTO.treeReflection.alt,
  },
  {
    slug: "cracked-glass",
    parent: "windows/repair",
    group: "repair",
    name: "Cracked or broken glass",
    cardDetail:
      "A single cracked pane is a glass replacement, custom-cut to your opening, not a reason to replace the frame.",
    h1: "Window glass repair & replacement",
    dek: "One cracked pane does not mean one new window. It means one piece of glass, cut to your opening and matched to what is next to it.",
    description:
      "Window glass repair and pane replacement in Lancaster County, PA. Custom-cut glass matched for thickness, coating, and tempering where code requires it.",
    heroImage: PHOTO.porchRockers.src,
    heroAlt: PHOTO.porchRockers.alt,
  },
  {
    slug: "sash-balance",
    parent: "windows/repair",
    group: "repair",
    name: "Sash won't stay up",
    cardDetail:
      "Usually a balance or spring issue, sometimes decades of repainting. Fixable without touching the frame.",
    h1: "Window balance & stuck sash repair",
    dek: "A window that falls shut or refuses to move is a hardware problem, and hardware is the cheapest thing on a window to fix.",
    description:
      "Window balance repair and stuck sash service in Lancaster County, PA. Spiral and constant-force balances, sash cords, and painted-shut windows freed properly.",
    heroImage: PHOTO.doubleHung.src,
    heroAlt: PHOTO.doubleHung.alt,
  },
  {
    slug: "weatherstripping",
    parent: "windows/repair",
    group: "repair",
    name: "Drafts & weatherstripping",
    cardDetail:
      "Weatherstripping and glazing compound wear out long before the window does.",
    h1: "Window draft & weatherstripping repair",
    dek: "A draft you can feel with your hand is almost never the glass. It is one of three seals, and only one of them is usually the leak.",
    description:
      "Window draft and weatherstripping repair in Lancaster County, PA. Sash seals, meeting rails, glazing compound, and perimeter caulk diagnosed separately.",
    heroImage: PHOTO.porchPgt.src,
    heroAlt: PHOTO.porchPgt.alt,
  },
  {
    slug: "rollers-and-tracks",
    parent: "windows/repair",
    group: "repair",
    name: "Rollers & tracks",
    cardDetail: "Hardware replacement — a fraction of the cost of a new unit.",
    h1: "Window roller & track repair",
    dek: "Sliding windows ride on small wheels in a track, and both wear out long before the window around them does.",
    description:
      "Window roller and track repair in Lancaster County, PA. Flat-spotted rollers, packed or bent tracks, and sliders that have stopped gliding.",
    heroImage: PHOTO.modernHouse.src,
    heroAlt: PHOTO.modernHouse.alt,
  },
  {
    slug: "screens",
    parent: "windows/repair",
    group: "repair",
    name: "Window screens",
    cardDetail: "Rescreened on site or shop-repaired, usually same visit.",
    h1: "Window screen repair & replacement",
    dek: "One of the smallest jobs we take, and one most replacement-only companies quietly decline.",
    description:
      "Window screen repair and replacement in Lancaster County, PA. Re-screening existing frames, new frames built to custom sizes, pet-resistant mesh options.",
    heroImage: PHOTO.porchRockers.src,
    heroAlt: PHOTO.porchRockers.alt,
  },
  {
    slug: "storm-windows",
    parent: "windows/repair",
    group: "repair",
    name: "Storm windows",
    cardDetail:
      "Storm windows get painted shut and lose their seals the same way the primary window does.",
    h1: "Storm window repair & replacement",
    dek: "On an older house, a working storm window often does more for comfort than replacing the sash behind it.",
    description:
      "Storm window repair and glass replacement in Lancaster County, PA. Painted-shut storms freed, glass replaced, and aluminum storm frames serviced.",
    heroImage: PHOTO.knightWood.src,
    heroAlt: PHOTO.knightWood.alt,
  },
  {
    slug: "gas-fill",
    parent: "windows/repair",
    group: "repair",
    name: "Lost gas fill",
    cardDetail:
      "Argon or krypton that has leaked out is the same seal failure as fogged glass, it just hasn't fogged yet.",
    h1: "Gas-filled window repair",
    dek: "Nobody can top the argon back up through a sealed unit. Here is what is actually happening, and what actually fixes it.",
    description:
      "Gas-filled window repair in Lancaster County, PA. What argon and krypton loss actually means, why recharging isn't real, and what genuinely fixes it.",
    heroImage: PHOTO.treeReflection.src,
    heroAlt: PHOTO.treeReflection.alt,
  },

  // ---------- DOORS / REPAIR ----------
  {
    slug: "sticking-doors",
    parent: "doors/repair",
    group: "repair",
    name: "Sticking & misaligned doors",
    cardDetail:
      "Usually a settled frame or worn hinge, not a reason to replace the whole unit.",
    h1: "Sticking & misaligned door repair",
    dek: "Where the door rubs tells you what is wrong with it, and almost none of the answers involve a new door.",
    description:
      "Sticking and misaligned door repair in Lancaster County, PA. Settled frames, worn hinges, and doors that drag or won't latch, diagnosed by where they bind.",
    heroImage: PHOTO.hinge.src,
    heroAlt: PHOTO.hinge.alt,
  },
  {
    slug: "jamb-rot",
    parent: "doors/repair",
    group: "repair",
    name: "Jamb & threshold rot",
    cardDetail:
      "Common where a door faces weather directly — often repairable if caught before it spreads.",
    h1: "Door jamb & threshold rot repair",
    dek: "Rot in the bottom few inches of a jamb is a repair. Rot that has traveled up the leg is a different conversation, and we will tell you which one you have.",
    description:
      "Door jamb and threshold rot repair in Lancaster County, PA. Cutting out and piecing in rotted sections, and an honest read on when it's gone too far.",
    heroImage: PHOTO.blackHardware.src,
    heroAlt: PHOTO.blackHardware.alt,
  },
  {
    slug: "sliding-door-rollers",
    parent: "doors/repair",
    group: "repair",
    name: "Sliding door rollers & tracks",
    cardDetail:
      "Rollers and tracks wear out well before the door panel does — usually a hardware fix.",
    h1: "Sliding door roller & track repair",
    dek: "The full weight of a patio door rides on two small wheels. When it stops gliding, that is almost always what you are feeling.",
    description:
      "Sliding patio door roller and track repair in Lancaster County, PA. Flat-spotted rollers, packed and bent tracks, and doors off their track.",
    heroImage: PHOTO.whiteSlider.src,
    heroAlt: PHOTO.whiteSlider.alt,
  },
  {
    slug: "door-glass",
    parent: "doors/repair",
    group: "repair",
    name: "Door glass & sidelights",
    cardDetail:
      "Decorative and plain glass inserts are custom-ordered to that door's pattern and size — a glass job, not a new door.",
    h1: "Door glass & sidelight repair",
    dek: "Cracked glass in a door or the panel beside it is a glass order, with one honest caveat about matching older decorative patterns.",
    description:
      "Door glass and sidelight repair in Lancaster County, PA. Decorative and plain insert replacement, tempered glass where code requires it.",
    heroImage: PHOTO.decorativeGlass.src,
    heroAlt: PHOTO.decorativeGlass.alt,
  },
  {
    slug: "lock-alignment",
    parent: "doors/repair",
    group: "repair",
    name: "Locks & latch alignment",
    cardDetail:
      "Almost always a settled hinge side, not a bad lock — realigning the jamb usually fixes it in one visit.",
    h1: "Door lock & latch alignment repair",
    dek: "If you are lifting or leaning on the door to throw the deadbolt, the lock is fine. The frame moved.",
    description:
      "Door lock and latch alignment repair in Lancaster County, PA. Strike plates, deadbolts that won't throw, and hinge-side settling corrected properly.",
    heroImage: PHOTO.hinge.src,
    heroAlt: PHOTO.hinge.alt,
  },
  {
    slug: "french-door-alignment",
    parent: "doors/repair",
    group: "repair",
    name: "French door alignment",
    cardDetail:
      "A hinge or astragal adjustment, not a reason to replace a matched pair.",
    h1: "French door alignment repair",
    dek: "Any error in a French door shows up doubled, right down the middle where both edges are supposed to meet.",
    description:
      "French door alignment repair in Lancaster County, PA. Doors that won't close flush, astragal and hinge adjustment, and latching restored.",
    heroImage: PHOTO.decorativeGlass.src,
    heroAlt: PHOTO.decorativeGlass.alt,
  },
  {
    slug: "storm-door-hardware",
    parent: "doors/repair",
    group: "repair",
    name: "Storm door hardware",
    cardDetail: "Closers, hinges, and screens — small parts that fail long before the door itself.",
    h1: "Storm door repair",
    dek: "Storm door closers are the single most common small repair we get called for, and among the cheapest to put right.",
    description:
      "Storm door repair in Lancaster County, PA. Closers that slam or won't hold, sagging hinges, torn screens, and latch hardware replaced.",
    heroImage: PHOTO.blackHardware.src,
    heroAlt: PHOTO.blackHardware.alt,
  },
  {
    slug: "door-weatherstripping",
    parent: "doors/repair",
    group: "repair",
    name: "Drafts & weatherstripping",
    cardDetail:
      "Weatherstripping and threshold adjustment — cheap, and often the whole fix.",
    h1: "Door draft & weatherstripping repair",
    dek: "Most adjustable thresholds have screws that raise the sill back against the sweep, and most homeowners never know they are there.",
    description:
      "Door draft and weatherstripping repair in Lancaster County, PA. Sweeps, adjustable thresholds, and perimeter seals reset so the door seals again.",
    heroImage: PHOTO.finishedExterior.src,
    heroAlt: PHOTO.finishedExterior.alt,
  },
];

export function getCategoriesFor(
  parent: ServiceParent,
  group?: ServiceCategory["group"]
): ServiceCategory[] {
  return serviceCategories.filter(
    (c) => c.parent === parent && (group ? c.group === group : true)
  );
}

export function getCategory(
  parent: ServiceParent,
  slug: string
): ServiceCategory | undefined {
  return serviceCategories.find((c) => c.parent === parent && c.slug === slug);
}

export const PARENT_LABEL: Record<ServiceParent, string> = {
  "windows/replacement": "Window Replacement",
  "windows/repair": "Window Repair",
  "doors/replacement": "Door Replacement",
  "doors/repair": "Door Repair",
};
