import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Lititz started as a church town, and it still reads like one if you
        stand on Main Street long enough. Members of the Moravian Church
        founded it in 1756 and named it after a castle in Bohemia, and for
        about a century the community was run on rules most towns never
        had: only Moravians could live there, and everyone else leased.
        That lease system wasn&apos;t abolished until 1855, which goes a
        long way toward explaining why the oldest part of town grew so
        slowly, so deliberately, and so close together.
      </p>

      <FactStrip
        items={[
          { label: "Founded", value: "1756, by the Moravian Church" },
          { label: "Population", value: "9,381 (2020)" },
          { label: "Land area", value: "2.32 sq mi" },
          { label: "Historic district", value: "Lititz Moravian (NRHP, 1986)" },
        ]}
      />

      <h2>A Moravian core that&apos;s still standing</h2>

      <p>
        The Lititz Moravian Historic District was added to the National
        Register of Historic Places in 1986, and it covers more than a
        hundred contributing buildings dating from roughly 1755 to 1930.
        The anchors are the old congregation buildings: the Sisters&apos;
        House from 1758, the Brothers&apos; House from 1759, and the
        Moravian Church itself from 1787. Around them, the district mixes
        Federal-era houses with later Victorian and early commercial
        buildings, which is exactly the spread of eras you&apos;d expect
        from a town that only opened up to outsiders in the 1850s.
      </p>

      <Landmark>
        <p>
          The Brothers&apos; House did more than house single men of the
          congregation. During the Revolutionary War it served as a
          hospital for wounded and sick Continental Army soldiers. Down
          the street, the Julius Sturgis Pretzel Bakery, founded in 1861,
          is widely described as the oldest commercial pretzel bakery in
          America, and Linden Hall, founded by the Moravians in 1746, is
          one of the oldest girls&apos; schools in the country. Lititz
          Springs Park, still owned by the Moravian congregation, is where
          most of the town ends up on the Fourth of July.
        </p>
      </Landmark>

      <p>
        For window and door work, that history matters in a practical way.
        A house inside the Moravian district can have openings framed two
        centuries apart from the house next to it, and none of them were
        built to a standard size. We measure every opening on site in
        Lititz and order to the opening, not the other way around. If
        you&apos;re trying to decide whether a set of old sashes is worth
        saving at all, our guide to{" "}
        <Link href="/blog/replacing-windows-in-an-old-house">
          replacing windows in an old house
        </Link>{" "}
        walks through what we look at first.
      </p>

      <h2>Main Street in the middle, newer homes on the edges</h2>

      <p>
        Lititz is a borough of a little over nine thousand people on just
        over two square miles, so it&apos;s compact, but it isn&apos;t
        all old. Once you get away from the Moravian core and the blocks
        around Main and Broad, the housing shifts toward 20th-century
        neighborhoods and newer development, the kind of homes with stock
        openings and builder-grade windows that are now old enough to fog,
        stick, or let air through. In the same town, we&apos;ll handle a
        straightforward{" "}
        <Link href="/windows/replacement">window replacement</Link> on a
        newer house one day and a careful{" "}
        <Link href="/windows/repair">sash repair</Link> on a much older
        one the next.
      </p>

      <p>
        Entry doors follow the same split. On the older blocks, a front
        door often opens right onto the sidewalk and takes every bit of
        weather and foot traffic Main Street can throw at it, and the
        frame around it has usually settled over the decades. Sometimes
        that&apos;s a{" "}
        <Link href="/doors/repair">door repair</Link> job, new
        weatherstripping, a rebuilt threshold, hardware that actually
        latches. Sometimes the frame is past saving and a full{" "}
        <Link href="/doors/replacement">door replacement</Link> is the
        honest answer. Our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        covers how we make that call.
      </p>

      <h2>Older houses, older materials</h2>

      <p>
        Much of the housing in and around the historic district predates
        1978, which means lead paint is a real possibility on original
        trim, sills, and sashes. Interiors from those eras are often
        plaster rather than drywall, and plaster doesn&apos;t forgive a
        crew that pries trim off carelessly. Neither of those is a reason
        to avoid the work. They&apos;re reasons to expect a crew that
        treats an old Lititz opening differently from a twenty-year-old
        vinyl unit, and our{" "}
        <Link href="/old-homes">page on older homes</Link> goes into what
        that looks like in practice.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does the Lititz Moravian Historic District restrict window or door replacements?",
            a: "National Register listing on its own doesn't usually dictate what a private homeowner can install, but local rules can be a separate matter. If your house is in or near the historic district, check with Lititz Borough before committing to a product, and tell us so we can work within whatever actually applies.",
          },
          {
            q: "Can old windows in a Lititz house be repaired instead of replaced?",
            a: "Often, yes, if the frame and sash wood are still sound. Older Lititz homes were built with materials worth keeping, so we look at repair first and only recommend replacement when the frame has rotted or the unit can't be made to seal properly.",
          },
          {
            q: "Do you serve all of Lititz, or just the historic center?",
            a: "All of it, from the Moravian blocks around Main Street to the newer neighborhoods on the edges of the borough. The approach differs by house age, but the service area doesn't.",
          },
        ]}
      />
    </>
  );
}
