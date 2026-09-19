import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Founded", value: "1741" },
          { label: "Population", value: "~44,800 (2020)" },
          { label: "Land area", value: "5.2 sq mi" },
          { label: "Known as", value: "The White Rose City" },
        ]}
      />

      <Landmark>
        <p>
          York isn&apos;t just old, it briefly ran the country. From
          September 1777 to June 1778, with the British occupying
          Philadelphia, the Continental Congress met here instead, and it
          was in York that Congress adopted the Articles of Confederation,
          the country&apos;s first governing document, before moving back
          once Philadelphia was retaken.
        </p>
        <p>
          The manufacturing side of the city&apos;s history is just as
          concrete, and it never really stopped. Harley-Davidson has built
          motorcycles here since 1973 at its Vehicle Operations plant, a
          230-plus-acre site that&apos;s the largest Harley-Davidson
          facility in the world, built originally in 1941 for Navy ordnance
          production before the motorcycle company took it over. The York
          Peppermint Pattie was invented on Pine Street and is now a Hershey
          brand. And York Barbell, founded in 1932 by Bob Hoffman, still
          operates in the city and still houses the Weightlifting Hall of
          Fame, a leftover of the era York was known nationally as
          &quot;Muscletown USA.&quot;
        </p>
      </Landmark>

      <p>
        That manufacturing history shows up in the housing stock as much as
        the Revolutionary War history does. Downtown York&apos;s blocks mix
        Italianate rowhomes with bracketed cornices, full-on Victorians, and
        Second Empire houses with their distinctive mansard roofs, most of
        it built up in the decades when the city&apos;s factories, Barbell
        among them, were hiring steadily. It&apos;s the densest, oldest
        housing stock we work on anywhere in our service area, which means
        original window openings that were sized by hand long before anyone
        standardized a double-hung unit, and entry doors set into frames
        that have settled a little more with every decade since.
      </p>

      <p>
        A lot of these rowhomes share walls with the house on either side,
        which changes the job in small but real ways: less room to work
        from the exterior, an entry door that has to match or at least
        respect the house next to it, and a frame that was often built to a
        size no manufacturer still stocks off the shelf. On a block like
        that, we measure every opening on site rather than assume the house
        three doors down tells us anything useful about the one
        we&apos;re quoting, because in downtown York it usually
        doesn&apos;t. Doors here tend to show the wear worse than windows
        do, since an entry door on a rowhome takes the brunt of foot
        traffic, weather, and a century of freeze-thaw cycles on a frame
        that was never built to modern tolerances.
      </p>

      <p>
        Each of those downtown styles has its own giveaways once
        you&apos;re standing in front of one. Italianate rowhomes tend
        toward tall, narrow window openings with elaborate bracketed
        cornices along the roofline, sometimes paired double doors at the
        entry. Second Empire houses are easiest to spot from the roof
        down, a steep mansard with dormer windows punched through it,
        often trimmed in patterned slate. The catch-all Victorians mixed
        in between lean on decorative millwork, bay windows, and
        multi-pane sash that a plain, single-pane unit would look wrong
        in. None of that is decoration we&apos;re guessing at from the
        curb. It&apos;s the kind of detail that decides whether a
        replacement window needs a custom grille pattern to match the
        house next to it, or whether an entry door needs a matching
        transom to keep a rowhome&apos;s original proportions intact.
      </p>

      <p>
        Working downtown also changes the logistics more than it changes
        anything back at the shop. Street parking is tighter, some blocks
        butt right up against small businesses that need their sidewalk
        clear during the day, and a rowhome job sometimes means
        coordinating timing with the neighbor on the other side of a
        shared wall, especially if scaffolding or a lift is involved.
        None of that changes the price of the window or the door itself,
        but it does change how we schedule the crew and how much lead
        time we ask for. We&apos;d rather tell a downtown York homeowner
        that upfront than show up on install day and find out the truck
        can&apos;t get close enough to the curb.
      </p>

      <p>
        On a masonry rowhome like a lot of what we see downtown, the
        measurement decision usually comes down to insert versus
        full-frame replacement. An insert fits a new window into the
        existing frame, faster, less disruption to the surrounding brick
        or trim, and it&apos;s the right call when that original frame is
        still square and solid. Full-frame replacement means removing the
        old frame down to the rough opening, the better option when the
        wood&apos;s gone soft or the opening has shifted enough that a new
        unit won&apos;t seal right inside it. On a house with this much
        masonry, that decision affects the trim work more than it would on
        a wood-frame house, since disturbing the masonry opening means
        matching brick mold or stone sills that weren&apos;t made to a
        modern standard either.
      </p>

      <Opinion>
        York is the most demanding town on our list, and we say that as a
        compliment to the housing, not a complaint about the work. A city
        this old, with this much manufacturing history baked into its
        streets, doesn&apos;t give you many stock-size shortcuts. We&apos;d
        rather spend the extra time on site getting a York rowhome right
        than rush it the way a company used to newer subdivisions might,
        and that&apos;s true whether the job is a full window replacement
        or a single door that just needs its hardware and weatherstripping
        brought back to where they should be. A city with this much
        history built into its blocks deserves a crew that treats the
        measuring tape as seriously as the sales pitch, and that&apos;s
        the standard we hold ourselves to on every York rowhome we touch.
      </Opinion>

      <p>
        If you&apos;re weighing options on one of these older homes, our{" "}
        <Link href="/old-homes">page on older homes</Link> goes into the
        tradeoffs in more detail than we can here, and our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        covers how we make that call on a house this age.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is downtown York under a historic-district design review for window and door replacements?",
            a: "We're not aware of York having the kind of formal design-review overlay a smaller borough like Cornwall has. Every property's different, though, so if yours falls inside a locally designated historic district, tell us before we order anything so we can work within whatever rules actually apply.",
          },
          {
            q: "Can a modern energy-efficient window fit an Italianate or Second Empire opening?",
            a: "Usually, yes, but it has to be built to the opening rather than the other way around. These houses predate standardized window sizes, so we measure on site and order to the exact opening instead of forcing a stock size into a hand-built frame.",
          },
          {
            q: "Do you handle entry doors as well as windows on York rowhomes?",
            a: "Yes, and in a lot of downtown York houses the door sees more daily wear than the windows do. We treat it as its own decision, repair the frame and hardware if the bones are sound, replace the whole unit if they're not.",
          },
        ]}
      />
    </>
  );
}
