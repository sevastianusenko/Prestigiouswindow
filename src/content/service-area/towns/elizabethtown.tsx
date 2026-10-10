import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Elizabethtown sits at the far western edge of Lancaster County,
        and it&apos;s one of the larger boroughs we cover, with a college,
        a large retirement community, and a train station on Amtrak&apos;s
        Keystone line. It&apos;s also a town that has grown in layers: an
        18th-century core, a factory-era stretch from the early 1900s, and
        a big wave of postwar building around the edges.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1827" },
          { label: "Population", value: "11,639 (2020)" },
          { label: "Laid out", value: "1753, by Barnabas Hughes" },
          { label: "Land area", value: "2.65 sq mi" },
        ]}
      />

      <h2>A tavern town that became a borough</h2>

      <p>
        The accepted story is that Captain Barnabas Hughes acquired land
        here and laid out a town in 1753, naming it for his wife,
        Elizabeth. There&apos;s a competing account that credits Elizabeth
        Reeby, whose husband Michael sold early building lots around 1795,
        so the name&apos;s origin isn&apos;t completely settled. Either
        way, the town was established enough to become a borough in 1827.
      </p>

      <Landmark>
        <p>
          Two institutions that still shape Elizabethtown arrived around
          the turn of the 20th century. Elizabethtown College was
          established in 1899, and in 1910 the Grand Lodge of Pennsylvania
          founded the Masonic Homes on a large tract of land at the edge of
          town, now Masonic Village. The early 1900s also brought the Klein
          Chocolate Company, today part of Mars, and several shoe
          factories. The last of those shoe factories closed in 1979, and
          the Kreider Shoe Manufacturing Company building was listed on the
          National Register of Historic Places in 1980.
        </p>
      </Landmark>

      <h2>Three eras of housing in one borough</h2>

      <p>
        The oldest houses are near the center, on and around the original
        town lots. Around them is housing from the factory years, when
        the chocolate company and shoe plants were hiring. And then there
        is the postwar growth: after World War II, Elizabethtown more than
        doubled its population between 1950 and 2000, with homes spreading
        out into what had been farmland. That last era accounts for a large
        share of the borough&apos;s houses today.
      </p>

      <p>
        Each era tends to bring us a different kind of call. On the older
        homes near the center, it&apos;s usually original or early
        replacement windows that stick, rattle, or let in drafts, and the
        first question is whether{" "}
        <Link href="/windows/repair">repairing them</Link> makes more sense
        than replacing them. Our page on{" "}
        <Link href="/old-homes">older homes</Link> goes into that, including
        the lead-paint precautions any house built before 1978 calls for.
        On postwar houses, it&apos;s more often aging first-generation
        insulated windows with failed seals, and{" "}
        <Link href="/blog/foggy-window-seal-repair">
          our post on foggy window seals
        </Link>{" "}
        explains what can and can&apos;t be fixed there. When the frames are
        tired across the whole house, a full{" "}
        <Link href="/windows/replacement">window replacement</Link> is
        usually the cleaner answer.
      </p>

      <h2>Entry doors that see daily use</h2>

      <p>
        On an older house, the entry door often takes more wear than any
        window, since it&apos;s opened and closed every day through every
        season. A door that sticks, drags, or lets daylight through at the
        bottom can often be brought back with{" "}
        <Link href="/doors/repair">door repair</Link>: new weatherstripping,
        an adjusted or rebuilt threshold, and hardware set right. When the
        slab or frame is past that point, a{" "}
        <Link href="/doors/replacement">replacement entry door</Link> sized
        to the existing opening is the next step. If you&apos;re not sure
        which side of that line you&apos;re on, our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link> is
        the place to start.
      </p>

      <p>
        Elizabethtown is one of the longer drives on our Lancaster County
        list, out past Lancaster city from our East Earl shop, so we
        schedule visits there with a bit more lead time than the towns next
        door to us. That doesn&apos;t change the work itself, just how we
        plan the day around it.
      </p>

      <LocalFaq
        items={[
          {
            q: "Do you work in Elizabethtown even though it's on the far side of Lancaster County?",
            a: "Yes. It's a longer drive from East Earl than our closest towns, so we plan visits with a little more lead time, but we handle both repair and replacement work in the borough and the area around it.",
          },
          {
            q: "My postwar Elizabethtown house has foggy double-pane windows. Do I need all new windows?",
            a: "Not always. A failed seal on one or two units can sometimes be handled by replacing just the glass. If many windows are failing and the frames are worn too, full replacement usually makes more sense, and we'll walk you through both options.",
          },
          {
            q: "Can older windows near the center of Elizabethtown be repaired instead of replaced?",
            a: "Often, yes. Older wood sash that's still solid can usually be freed up, rebalanced, and weatherstripped. If the wood is rotted or the frames have shifted badly, we'll recommend replacement built to the existing opening.",
          },
        ]}
      />
    </>
  );
}
