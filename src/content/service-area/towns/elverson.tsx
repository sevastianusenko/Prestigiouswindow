import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <Landmark>
        <p>
          Elverson&apos;s historic district centers on two streets, Main
          Street (Route 23) and Chestnut Street (Route 82), and it sits
          close enough to Hopewell Furnace National Historic Site, just
          across the Berks County line, that the two are easy to think of as
          one story. Hopewell operated as a charcoal iron &quot;plantation,&quot;
          the term for a self-contained ironworking community built up
          around a furnace, from 1771 until it finally shut down in 1883.
          That&apos;s well over a century of continuous operation before the
          furnace ever cooled for good.
        </p>
        <p>
          That history predates the modern county line altogether, which is
          part of why the ironworking economy this whole area grew up
          around never much cared which side of the Berks/Chester border a
          given house happened to sit on. Elverson&apos;s own Main and
          Chestnut Street grid grew up in that same period, close enough to
          the furnace that some of its earliest residents likely worked
          there directly.
        </p>
      </Landmark>
      <h2>A small grid of old openings</h2>
      <p>
        Elverson itself is small, 1,332 residents as of the 2020 census, and
        the borough&apos;s housing sits almost entirely within that Main and
        Chestnut Street grid rather than spread out the way it is in the
        surrounding township land. Most of what we measure here are
        original openings on homes built well before anyone standardized a
        window size, which means a stock replacement unit rarely drops
        straight in without some custom sizing or careful trim work. We
        treat that as the default assumption in Elverson rather than the
        exception, and the same goes for entry doors on the older Main
        Street homes, where the frame has usually settled enough over a
        century-plus that square isn&apos;t a given anymore. If a house is
        old enough that nobody&apos;s sure whether the opening is even
        original, our <Link href="/windows/repair">window repair</Link>{" "}
        page walks through how we sort that out before quoting anything, and
        the same logic carries over to a{" "}
        <Link href="/doors/repair">door repair</Link> call on the same
        street. It also means an Elverson job usually takes longer to
        measure correctly than the same job would in a newer subdivision a
        few towns over, and we build that extra time into how we schedule
        visits here rather than rushing it.
      </p>
      <h2>Measuring for a home this old</h2>
      <p>
        Homes in Elverson&apos;s Main and Chestnut Street grid were framed
        by hand, long before lumber and window openings were cut to a
        standard size, so two houses that look like a matched pair from the
        sidewalk can have openings off from each other by half an inch or
        more. That&apos;s routine on a street this old, but it means a
        single tape measurement isn&apos;t enough to order a window with
        any confidence. We measure every opening on an Elverson job
        individually rather than assuming the house repeats itself, because
        on a street built up over a century before standardized sizing
        existed, it usually doesn&apos;t.
      </p>
      <p>
        Being this close to a National Historic Site also means the
        borough gets a certain amount of attention paid to how its older
        buildings look from the street, even without a separate review
        board sitting over every window job. We&apos;d rather flag that up
        front, matching grille pattern and sash proportion to the
        house&apos;s actual era, than hand a homeowner a modern unit that
        technically fits the hole but looks wrong on a street this
        consistent. It&apos;s the kind of detail that matters more here
        than it would on a newer street a few towns over, where one
        mismatched window wouldn&apos;t stand out the same way.
      </p>
      <h2>Small town, longer appointment</h2>
      <p>
        Elverson&apos;s population, 1,332 as of the 2020 census, might
        suggest a quick, simple service call, and the borough&apos;s size
        does mean less driving between estimates than a spread-out
        township. But the age of the housing cuts the other way: where a
        compact newer borough lets us move through several appointments
        quickly, Elverson&apos;s original openings mean each individual
        visit runs longer, because measuring, photographing, and matching
        an opening on a century-old home simply takes more care than
        confirming a stock size fits a stock frame. We&apos;d rather build
        that time into the schedule up front than rush a measurement and
        have to come back.
      </p>
      <p>
        That trade-off, a small town that still takes real time to do
        right, is common across our older Chester County towns, but it
        shows up most clearly in Elverson because the borough is both
        genuinely small and genuinely old at the same time. A newer
        subdivision the same size would move through our schedule twice as
        fast.
      </p>
      <FactStrip
        items={[
          { label: "Population", value: "1,332 (2020 census)" },
          { label: "From East Earl", value: "~12 miles, about 18 minutes via PA-23" },
          {
            label: "Historic district streets",
            value: "Main St (Rt-23) & Chestnut St (Rt-82)",
          },
          { label: "Hopewell Furnace operated", value: "1771 to 1883" },
        ]}
      />
      <LocalFaq
        items={[
          {
            q: "Does Elverson's historic district restrict window or door replacement?",
            a: "There's no separate review board we've had to go through here, but the borough's age and the tight Main and Chestnut Street streetscape mean matching a new window's proportions and grille pattern to the house's era matters more than in a newer subdivision. We treat that as standard practice on every Elverson job.",
          },
          {
            q: "Is Hopewell Furnace part of Elverson itself?",
            a: "No, Hopewell Furnace National Historic Site sits just across the Berks County line, not inside the borough. But the ironworking economy it represents, operating from 1771 to 1883, shaped this whole area, including the homes built along Elverson's own Main and Chestnut Street grid.",
          },
          {
            q: "How far is Elverson from your shop?",
            a: "About twelve miles, roughly eighteen minutes via Route 23 from East Earl. It's a bit farther than Honey Brook, but still well within the range we treat as a normal service call rather than a special out-of-area trip that needs extra scheduling.",
          },
        ]}
      />
    </>
  );
}
