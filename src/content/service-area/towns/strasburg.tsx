import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Most people know Strasburg for its trains, and fair enough, it
        calls itself Train Town USA for a reason. But the borough was a
        working town long before anyone thought of it as a destination. Its
        Main Street follows the Old Conestoga Road, which was already in use
        by 1714, and the houses lining it are some of the oldest we see
        anywhere in Lancaster County.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1816" },
          { label: "Population", value: "3,117 (2020)" },
          { label: "Named for", value: "Strasbourg" },
          { label: "Historic district", value: "National Register, 1983" },
        ]}
      />

      <h2>A way station on the Conestoga Road</h2>

      <p>
        Strasburg grew up as a stop for travelers and freight. A tavern and
        a few log houses went up along the road in the first half of the
        1700s, and as Conestoga wagons hauled goods between Philadelphia and
        the interior, the town became a way station with, by the
        borough&apos;s own account, as many as ten hotels and as many stores
        serving the traffic. It was formally incorporated as a borough in
        1816, and it took its name from Strasbourg, the native city of an
        early settler.
      </p>

      <Landmark>
        <p>
          The Strasburg Rail Road was chartered by the state legislature in
          1832 and is described as the oldest continuously operating
          standard-gauge railroad in the western hemisphere. It ran freight
          and passengers for well over a century before a group of
          enthusiasts bought it in 1958 and started tourist excursions in
          January 1959. Today it shares the area with the Railroad Museum
          of Pennsylvania, which is a big part of why the borough draws
          visitors from well outside the county.
        </p>
      </Landmark>

      <h2>Log, brick and limestone, still standing</h2>

      <p>
        The Strasburg Historic District was added to the National Register
        of Historic Places in 1983, and it covers 68 acres of Georgian,
        Federal, and German vernacular buildings. The numbers behind it are
        what stand out to us. By 1815 the town had about 90 houses: 53 log,
        29 brick, and four limestone. About half of those log houses, a
        dozen of the brick ones, and all four stone houses are still
        standing, and roughly 150 more houses in the district were built
        almost entirely before 1900.
      </p>

      <p>
        For window and door work, that means a lot of openings that were
        framed by hand two centuries ago, in walls that can be thick log,
        soft old brick, or solid stone. None of those take a stock-size unit
        gracefully, and a window that looks right on a 1990s house can look
        badly out of place on a Federal-era front. On houses like these we
        often start with{" "}
        <Link href="/windows/repair">repairing the existing sash</Link>{" "}
        before we talk about replacing anything, since original wood windows
        on a building this old are frequently worth saving. When
        replacement is the right call, we measure each opening on site and
        order to it, which is the approach we lay out in more detail in{" "}
        <Link href="/blog/replacing-windows-in-an-old-house">
          our guide to replacing windows in an old house
        </Link>
        .
      </p>

      <h2>Entry doors on an old main street</h2>

      <p>
        On a street lined with houses this old, the front doors have had
        a long time to take weather and wear, and the frames around them
        have had just as long to settle. Sometimes the fix is new weatherstripping,
        a rebuilt threshold, and hardware adjusted so the door closes
        cleanly again, which is a{" "}
        <Link href="/doors/repair">door repair</Link> job. Other times the
        door or frame has gone too far, and a{" "}
        <Link href="/doors/replacement">replacement door</Link> built to the
        existing opening is the better long-term answer. Our{" "}
        <Link href="/repair-or-replace">repair-or-replace page</Link> walks
        through how we make that call, and our page on{" "}
        <Link href="/old-homes">older homes</Link> covers the extra care
        houses of this age need, including the possibility of lead paint in
        any building put up before 1978.
      </p>

      <p>
        Outside the historic core, Strasburg has newer homes too, and those
        are a much more ordinary job: standard openings, builder-grade
        units, and straightforward{" "}
        <Link href="/windows/replacement">window replacement</Link>. The
        difference between the two sides of town is part of why we
        don&apos;t quote a Strasburg job without seeing it first.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does being in the Strasburg Historic District limit what windows or doors I can install?",
            a: "The National Register listing by itself doesn't usually restrict what a private homeowner does, but local rules can be a separate matter. Check with the borough office before committing to a product, and tell us your house is in the district so we can plan around whatever actually applies.",
          },
          {
            q: "Can you work on log, brick or stone houses in Strasburg?",
            a: "Yes. Each wall type changes how an opening is trimmed and sealed, so we look at the wall itself as well as the window or door before recommending anything, and we measure every opening rather than assuming a standard size.",
          },
          {
            q: "Is it worth repairing the original windows on a 19th-century Strasburg house?",
            a: "Often, yes. Old-growth wood sash in sound condition can usually be repaired and weatherstripped to work well again. If the frames are rotted or the sash are beyond saving, we'll say so and talk through replacement instead.",
          },
        ]}
      />
    </>
  );
}
