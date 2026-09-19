import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Incorporated", value: "1912" },
          { label: "Population", value: "~3,103 (2020)" },
          { label: "Homestead built", value: "c. 1750" },
          { label: "Borough size", value: "Under 1 sq mi" },
        ]}
      />

      <Landmark>
        <p>
          The Isaac Meier Homestead, built around 1750, is one of the oldest
          buildings still standing in Myerstown, a two-and-a-half-story
          limestone farmhouse listed on the National Register of Historic
          Places. It predates the borough itself by more than 150 years.
          Myerstown wasn&apos;t incorporated until 1912, which means for most
          of its history the area existed as an informal settlement
          clustered around the creek and, later, the canal and rail lines
          that eventually gave it a reason to grow into a proper town.
          It&apos;s still recognizable as a farmhouse rather than a converted
          commercial building, which is part of why it&apos;s a useful
          reference point for how old some of the construction in this part
          of the county really is.
        </p>
      </Landmark>

      <h2>Built by German settlers, grown by a canal and a railroad</h2>
      <p>
        Myerstown traces back to German immigrants who settled along
        Tulpehocken Creek in the early 1700s, part of the same wave of
        Pennsylvania Dutch migration that shaped most of this part of the
        state. The settlement grew slowly at first, then picked up once the
        Union Canal reached the area and gave local farmers and millers a
        real way to move goods to market, and again once the railroad
        followed a few decades later. That history is still visible in how
        compact the borough is today, under a square mile end to end, with
        US Route 422 running through as a divided highway, crossing Route
        501 and Route 645 near the center of town. It&apos;s the kind of
        small, old core where a call about a window sometimes turns out to
        be about a window that&apos;s been there since before the borough
        even had an official name on a map. That combination, a small
        footprint and a genuinely old core, is part of why we treat older
        Myerstown homes with the same care described in our guide to{" "}
        <Link href="/old-homes">windows and doors on older homes</Link>.
      </p>

      <h2>What a limestone farmhouse means for a window job</h2>
      <p>
        The Isaac Meier Homestead&apos;s two-and-a-half-story form is a
        common one for farmhouses of its era: two full floors of living
        space topped by a half story tucked under the roofline, usually lit
        by smaller windows set into the gable ends rather than full-size
        openings. Limestone construction like this has thick, load-bearing
        walls, which means window and door openings sit deep into the wall
        rather than flush with the exterior the way a balloon-framed house
        from a century later would be. That depth changes how a
        replacement gets installed. It&apos;s rarely a straightforward
        pocket replacement into an existing frame; it often means working
        around masonry that has to stay plumb and square, and a sill detail
        that was never designed around a modern window unit. We see a
        version of this on farmhouses throughout the Myerstown area, not
        just at the homestead itself, since limestone was the common,
        available building material for anyone farming this part of the
        county in the 1700s and 1800s.
      </p>

      <h2>A small borough, with a larger township around it</h2>
      <p>
        Myerstown&apos;s population runs a bit over 3,000 people,
        incorporated as its own borough in 1912 but sitting inside a much
        larger surrounding township, the way a lot of Pennsylvania&apos;s
        small boroughs work: a dense, walkable core with its own borough
        government, ringed by farmland and lower-density development that
        falls under separate township government instead. That structure
        matters to us mostly in a practical sense. The borough core has the
        same kind of old, tightly spaced housing we see in other Lebanon
        County boroughs, while the farmland around it looks more like the
        countryside we&apos;re used to closer to East Earl. A single
        afternoon of calls in the Myerstown area can mean a compact,
        in-borough job followed by a farmhouse job just a few minutes
        outside the borough line. Route 422&apos;s status as a divided
        highway through the middle of town is itself a legacy of that
        growth pattern, a small borough that kept widening its main
        corridor to keep pace with regional traffic rather than staying a
        quiet backroad crossroads. For us, that means fast, easy access
        into Myerstown even though the borough itself is small, a useful
        combination when a call needs a same-day look rather than a
        scheduled visit further out.
      </p>

      <LocalFaq
        items={[
          {
            q: "How old is Myerstown as a settlement, versus as a borough?",
            a: "The area was settled by German immigrants in the early 1700s, but Myerstown wasn't incorporated as its own borough until 1912. Like a lot of small Pennsylvania towns, the informal settlement is much older than the formal municipal government that eventually grew up around it.",
          },
          {
            q: "Does the Isaac Meier Homestead's landmark status affect nearby homes?",
            a: "No. A National Register listing applies to the specific property, not the surrounding area. Other older homes nearby don't inherit any special review requirement just from being close to it, though any given property's own history is worth checking before assuming either way.",
          },
          {
            q: "What's the oldest type of construction we typically see around Myerstown?",
            a: "Limestone farmhouses from the 1700s and 1800s, built the same way as the Isaac Meier Homestead. Thick masonry walls and deep-set window openings are common, and they usually call for more careful measuring than a standard vinyl replacement job would.",
          },
        ]}
      />
    </>
  );
}
