import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Lancaster is the county seat and the one real city in the county
        we&apos;re named after, and it&apos;s where a lot of eastern
        Lancaster County ends up anyway, for court dates, for Central
        Market, for a doctor&apos;s appointment. It&apos;s also some of the
        oldest, densest housing we work on. If you&apos;re looking into
        window replacement in Lancaster, PA, the most useful thing to know
        up front is that the house you&apos;re standing in was very likely
        built before anyone standardized a window size.
      </p>

      <FactStrip
        items={[
          { label: "Laid out", value: "1734, by James Hamilton" },
          { label: "Chartered as a city", value: "1818" },
          { label: "Population", value: "58,039 (2020)" },
          { label: "Known as", value: "The Red Rose City" },
        ]}
      />

      <h2>A capital, briefly, twice over</h2>

      <p>
        Lancaster was laid out in 1734, became a borough in 1742, and was
        chartered as a city in 1818. In between, it held two titles most
        cities its size never get near. On September 27, 1777, with the
        British closing in on Philadelphia, the Continental Congress met
        here for a single day before moving on to York, which is why
        Lancaster can say it was the nation&apos;s capital, if only
        overnight. From 1799 to 1812 it was the capital of Pennsylvania,
        before the state government moved up the river to Harrisburg.
      </p>

      <Landmark>
        <p>
          Central Market, on Penn Square, is the oldest continuously
          operated farmers&apos; market in the country, and the brick
          market house it trades out of today was built in 1889. It&apos;s
          listed on the National Register of Historic Places, and it&apos;s
          a good shorthand for the city around it: old, still in daily use,
          and maintained rather than replaced.
        </p>
      </Landmark>

      <h2>What the city&apos;s housing stock actually looks like</h2>

      <p>
        The Lancaster City Historic District, added to the National
        Register in 2001, covers roughly three square miles and counts more
        than 13,000 contributing buildings. Its buildings range from 1760 to
        1950, but most went up between 1860 and 1930, with Italianate and
        Queen Anne among the styles that define it. In practice, that means
        block after block of brick rowhomes and twins with tall, narrow
        window openings, original wood sash, and entry doors set into frames
        that have had more than a century to settle.
      </p>

      <p>
        That age shapes nearly every job here. Openings were framed by
        hand, so two windows on the same wall can differ by more than you
        would expect, and a stock-size unit ordered off a guess rarely
        seals right. We measure every opening on site, then decide between
        an insert, which fits a new window into the existing frame, and a
        full-frame replacement down to the rough opening when the old
        frame&apos;s gone soft or out of square. Our{" "}
        <Link href="/windows/replacement">window replacement</Link> page
        goes through both approaches, and our article on{" "}
        <Link href="/blog/replacing-windows-in-an-old-house">
          replacing windows in an old house
        </Link>{" "}
        covers the questions that come up most on homes this age.
      </p>

      <p>
        Not every Lancaster window needs to go, either. A lot of
        century-old sash is old-growth wood that&apos;s still sound under
        the paint, and a sash that won&apos;t stay up or rattles in the
        wind is often a{" "}
        <Link href="/windows/repair">repair job</Link>, a broken balance
        cord or worn weatherstripping, rather than a reason to replace the
        whole unit. If you&apos;re on the fence, our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> guide lays
        out how we make that call, and our page on{" "}
        <Link href="/old-homes">older homes</Link> covers the rest,
        including the plaster walls and pre-1978 paint layers that come
        with nearly every house in the older parts of the city.
      </p>

      <h2>Rowhome entry doors</h2>

      <p>
        On a city rowhome, the front door works harder than any window in
        the house. It opens straight onto the sidewalk, takes the weather
        head-on, and usually sits a few feet from an identical door on the
        house next to it. When we{" "}
        <Link href="/doors/replacement">replace an entry door</Link> on a
        block like that, the new one has to fit an opening that was never a
        standard size and still look like it belongs next to the neighbor&apos;s.
        When the frame is solid and the problem is a sticking latch, a
        drafty threshold or worn hardware, a{" "}
        <Link href="/doors/repair">door repair</Link> is often the better
        first step.
      </p>

      <h2>Check the historic district before you order</h2>

      <p>
        The city has two local historic districts, each with its own
        ordinance and review board, and they don&apos;t work the same way.
        In the Lancaster Historic District, the Historical Architectural
        Review Board (HARB) reviews exterior alterations, along with new
        construction and demolition, and makes recommendations to City
        Council using the Secretary of the Interior&apos;s Standards. The
        separate Heritage Conservation District, created by City Council
        in 1999, is administered by the Historical Commission and reviews
        only new construction and demolition, not window and door changes.
      </p>

      <p>
        Which one, if either, applies depends on your exact address, and
        the city&apos;s local historic district map is the place to check.
        If your house falls inside HARB&apos;s district, it&apos;s worth
        sorting that out before a product is chosen, not after it&apos;s
        been ordered. Tell us early and we&apos;ll plan the job around
        whatever review the city actually requires.
      </p>

      <LocalFaq
        items={[
          {
            q: "Do I need city approval to replace windows on a house in Lancaster's historic district?",
            a: "It depends on which district your address falls in. Exterior alterations in the Lancaster Historic District are reviewed by the city's Historical Architectural Review Board, while the Heritage Conservation District reviews only new construction and demolition, not windows and doors. Check the city's historic district map or call the city first, and let us know what you find before we order anything.",
          },
          {
            q: "Will a stock-size replacement window fit my Lancaster rowhome?",
            a: "Sometimes, but most of the city's houses were built between 1860 and 1930, well before window sizes were standardized. We measure each opening on site and order to the opening rather than assuming one window on the block tells us anything about the next.",
          },
          {
            q: "Is it worth repairing original wood windows in a Lancaster house instead of replacing them?",
            a: "Often, yes, if the wood is sound. A sash that won't stay up or lets in a draft usually needs a balance, cord or weatherstripping fix, not a new window. We'll tell you honestly which openings are worth saving and which aren't.",
          },
        ]}
      />
    </>
  );
}
