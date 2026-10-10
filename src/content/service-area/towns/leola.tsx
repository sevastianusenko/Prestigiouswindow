import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Leola is bigger than a lot of people assume. It isn&apos;t a
        borough, it&apos;s a census-designated place, mostly inside Upper
        Leacock Township with a corner reaching into West Earl, but with
        more than seven thousand residents it outnumbers most of the
        incorporated boroughs we work in. Route 23 runs the length of it as
        Main Street, the same road that carries on east to New Holland and
        west to Lancaster.
      </p>

      <FactStrip
        items={[
          { label: "Status", value: "Census-designated place" },
          { label: "Population", value: "7,465 (2020)" },
          { label: "Named", value: "1896" },
          { label: "Earlier names", value: "Batten's Corner, Bareville" },
        ]}
      />

      <h2>A name built from two others</h2>

      <p>
        The village was first known as Batten&apos;s Corner and was part of
        the larger Bareville area. It became its own place on June 10,
        1896, and picking a name turned out to be the hard part. Residents
        proposed Glenolde and Glenola, but both clashed with existing
        station names on the railroad. The compromise took &quot;Le&quot;
        from Leacock and &quot;ola&quot; from Glenola, and Leola stuck. For
        census purposes the area was counted as Leacock-Leola-Bareville
        before 2010, when the census started using Leola on its own.
      </p>

      <Landmark>
        <p>
          One of the clearest examples of Leola&apos;s farm-era building
          stock is now a hotel. The Inn at Leola Village started as an Amish
          tobacco farm whose first farmhouse dates to 1867, with a large
          barn added shortly after and a second farmhouse built in 1890.
          The farm grew tobacco for cigar factories in Lancaster City. By
          the late 20th century it had fallen into disrepair and was slated
          for demolition, but in 2000 the farmhouses and barn were saved
          and converted, keeping original wood beams and corncob joints.
        </p>
      </Landmark>

      <h2>Farmhouses, village homes, and everything since</h2>

      <p>
        That mix is a fair picture of Leola as a whole. There are
        19th-century farmhouses on the surrounding land, older village
        homes along Main Street, and a lot of newer construction filling in
        between, from single-family neighborhoods to commercial strips
        along Route 23. The work changes accordingly. An old farmhouse
        usually means openings sized by hand, deep sills, and frames that
        have settled unevenly over a century or more, so we measure each
        one on site before deciding on an insert or a full-frame{" "}
        <Link href="/windows/replacement">window replacement</Link>. A
        house from the last couple of decades is more often a
        straightforward upgrade from builder-grade units, or a{" "}
        <Link href="/windows/repair">window repair</Link> when only a seal
        or a balance has failed.
      </p>

      <p>
        Entry doors on the older Main Street homes take a beating from
        traffic noise, road grime, and decades of weather on the street
        side, and they&apos;re often the first thing a homeowner here asks
        about. Sometimes the answer is a{" "}
        <Link href="/doors/repair">door repair</Link>: new weatherstripping,
        a rebuilt threshold, hinges brought back into square. When the
        frame has rotted out, a full{" "}
        <Link href="/doors/replacement">door replacement</Link> is the
        better long-term call. Our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> page lays
        out how we make that decision.
      </p>

      <p>
        For older farmhouses in particular, it&apos;s worth reading our{" "}
        <Link href="/old-homes">page on older homes</Link> before deciding
        anything. Any house built before 1978 may have lead paint in its
        trim layers, and a farmhouse that&apos;s been added onto a few times
        can have three or four different window sizes on the same wall. If
        a window in one of those houses won&apos;t stay open anymore, our
        post on{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          windows that won&apos;t stay up
        </Link>{" "}
        explains why that&apos;s often a repair, not a replacement.
      </p>

      <LocalFaq
        items={[
          {
            q: "Leola isn't a borough. Does that change anything about permits for window or door work?",
            a: "It means the township, mostly Upper Leacock, is the local government rather than a borough council. Rules for exterior work are set there, so if you have any doubt about your property, check with the township before we order a specific product.",
          },
          {
            q: "Can you replace windows in an old Leola farmhouse without changing its character?",
            a: "Yes, as long as the replacement is built to the opening rather than forced into it. Farmhouse openings here are often non-standard and uneven, so we measure each one on site and choose grille patterns and trim that suit the house.",
          },
          {
            q: "How far is Leola from your shop?",
            a: "Around twenty minutes from East Earl, west through New Holland on Route 23.",
          },
        ]}
      />
    </>
  );
}
