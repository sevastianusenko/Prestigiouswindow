import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Denver, Pennsylvania shares its name with a much bigger city out
        west, but the borough had its own story long before the name. It
        sits in a small valley between the Cocalico Creek and the Little
        Cocalico, which join at the borough&apos;s southern edge, and it
        started out in 1735 as a settlement founded by a Swiss immigrant
        named Hans Bucher. For most of its early history it went by Bucher&apos;s
        Thal, Bucher&apos;s Valley, and that&apos;s still where the
        Pennsylvania German name for the town comes from.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1900" },
          { label: "Population", value: "3,792 (2020)" },
          { label: "Founded", value: "1735, by Hans Bucher" },
          { label: "Earlier names", value: "Bucher's Thal, Union Station" },
        ]}
      />

      <h2>How a valley village became Denver</h2>

      <p>
        The Reading and Columbia Railroad came through during the Civil War,
        and the stop here was called Union Station. The town took the name
        Denver on November 1, 1881, reportedly because a postal researcher
        found only one other post office in the country using it. A fire at
        the Denver House tavern, built behind the train station in 1868,
        pushed residents to incorporate so they could build a municipal
        water system, and by the end of 1900 Denver was a borough covering
        just 183 acres. The water plant went online in 1902.
      </p>

      <Landmark>
        <p>
          Around the time of incorporation, cigar making was Denver&apos;s
          main industry, until mechanization moved it elsewhere. The F&amp;M
          Hat Company, founded here in 1912, filled the gap and had 835
          employees by 1939. Limestone quarrying in the area goes back to
          the 1850s, and the quarry still operating today opened in 1906.
        </p>
        <p>
          A little south of town, near Reamstown, Bucher&apos;s Mill
          Covered Bridge carries the Bucher name forward. It was listed on
          the National Register of Historic Places in 1980.
        </p>
      </Landmark>

      <h2>Factory-era houses in a small borough</h2>

      <p>
        A borough that small, built up around a rail stop, cigar shops, and
        a hat factory, tends to have a compact older core of worker housing
        and modest homes close together, with newer neighborhoods spreading
        out past it. That&apos;s the split we plan for in Denver. Close to
        the center, a lot of houses are old enough that the window openings
        were framed by hand and haven&apos;t been touched since, which
        means we measure every one on site rather than assume a stock size
        will fit. Out toward the edges, openings are standard and the
        conversation is usually about upgrading tired builder-grade units
        with a proper{" "}
        <Link href="/windows/replacement">window replacement</Link>.
      </p>

      <p>
        Older entry doors here deserve the same care. A door that sticks
        every summer or lets daylight under the threshold in winter
        isn&apos;t always a lost cause. Sometimes it needs a rebuilt
        threshold, new weatherstripping, and the hinges brought back into
        line, which is a{" "}
        <Link href="/doors/repair">door repair</Link> job. When the frame
        itself has rotted or the slab has warped past saving, a{" "}
        <Link href="/doors/replacement">door replacement</Link> is the
        better money. Our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> page goes
        through how we decide.
      </p>

      <p>
        Houses from the cigar and hat-factory years are also old enough
        that lead paint is a real possibility in the trim around original
        openings, since anything built before 1978 can have it. That
        doesn&apos;t change whether the work gets done, it changes how a
        crew handles scraping, sanding, and prying old painted wood. Our{" "}
        <Link href="/old-homes">older homes</Link> page covers what to
        expect, and if you&apos;re dealing with original single-pane sash,
        our post on{" "}
        <Link href="/blog/single-pane-windows-repair-or-replace">
          single-pane windows
        </Link>{" "}
        walks through when they&apos;re worth keeping.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is there a historic district in Denver that affects window or door replacement?",
            a: "We're not aware of a formal historic district covering Denver's residential streets, so we won't claim one exists. If you know your property has special status, or the borough tells you it does, let us know before we order so the product fits whatever rules apply.",
          },
          {
            q: "Can you match the look of the original windows on an older Denver home?",
            a: "Usually, yes. Older houses near the center of the borough often have openings that no manufacturer stocks, so we measure on site and order to the exact opening, with grille patterns and trim chosen to suit the house rather than a generic default.",
          },
          {
            q: "How far is Denver from your shop?",
            a: "Roughly twenty-five minutes from East Earl, north up toward Reamstown, well within our regular service area.",
          },
        ]}
      />
    </>
  );
}
