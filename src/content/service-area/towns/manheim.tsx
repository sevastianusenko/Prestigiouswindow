import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Manheim is one of the few towns on our list that was laid out on
        purpose by one man with a plan. Henry William Stiegel platted it in
        1762 on a tract in what was then Rapho Township, built a glassworks
        here, and gave the town an ambitious start that the glassworks
        itself didn&apos;t outlive. The factory closed in 1780. The town
        kept going, and was incorporated as a borough in 1838.
      </p>

      <FactStrip
        items={[
          { label: "Laid out", value: "1762, by Henry William Stiegel" },
          { label: "Incorporated", value: "1838" },
          { label: "Population", value: "5,046 (2020)" },
          { label: "Historic district", value: "Manheim Borough (NRHP, 2000)" },
        ]}
      />

      <Landmark>
        <p>
          Manheim still pays a rent of one red rose. In 1772, Stiegel and
          his wife deeded a lot to the town&apos;s Lutheran congregation
          for five shillings plus a yearly rent of one red rose in June,
          if it was ever demanded. The custom faded for more than a
          century, then was revived in the early 1890s as the Festival
          of the Red Rose, with the rose presented to a Stiegel
          descendant. The congregation&apos;s current building, Zion
          Evangelical Lutheran Church, dates to 1891 and is still known
          locally as the Red Rose Church.
        </p>
      </Landmark>

      <h2>A town that mostly grew between 1860 and 1930</h2>

      <p>
        The Manheim Borough Historic District was added to the National
        Register of Historic Places in 2000, and it&apos;s big: about 230
        acres and 787 contributing buildings covering the central business
        district and the residential streets around it. The buildings span
        roughly 1762 to 1949, but most of them went up between 1860 and
        1930, and the majority are houses. That window lines up with the
        town&apos;s working years, when it had a railroad station (built
        in 1881), a cigar factory, and other small manufacturers, and the
        dominant styles show it: Italianate and Stick/Eastlake, the
        mid-to-late Victorian look of a prosperous railroad-era borough.
      </p>

      <p>
        For us, that translates into a lot of tall, narrow window openings,
        decorative trim around them, and front doors that often came with a
        transom or sidelights. Those are details a stock replacement unit
        can erase in an afternoon if nobody&apos;s paying attention. When
        we handle a{" "}
        <Link href="/windows/replacement">window replacement</Link> on a
        Manheim Italianate, we measure each opening on site and match the
        proportions and grille pattern to the house, rather than squaring
        everything off to the nearest standard size.
      </p>

      <h2>Repair first, when the bones are good</h2>

      <p>
        A house built in Manheim in the 1880s was framed with lumber that
        often holds up better than people expect. A lot of the window
        problems we see in town, sashes that won&apos;t stay up, drafts at
        the meeting rail, a sill with one soft spot, are{" "}
        <Link href="/windows/repair">repair jobs</Link>, not replacement
        jobs. The same goes for entry doors: a sagging door on a sound
        frame usually needs hinges, weatherstripping, and a threshold, and
        that&apos;s a <Link href="/doors/repair">door repair</Link>. When
        the frame itself is gone, we&apos;ll say so and quote a proper{" "}
        <Link href="/doors/replacement">door replacement</Link> instead.
        Our <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        lays out how we draw that line, and if your old double-hungs keep
        sliding shut, start with{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          why a window won&apos;t stay up
        </Link>
        .
      </p>

      <p>
        Most of what&apos;s inside the historic district was built well
        before 1978, so original painted trim and sashes may carry lead
        paint, and plaster walls are the norm rather than the exception.
        Both call for a slower, cleaner approach than the same job on a
        newer house outside the borough core. Our{" "}
        <Link href="/old-homes">page on older homes</Link> covers what that
        involves.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does being in the Manheim Borough Historic District limit what windows I can install?",
            a: "National Register listing by itself doesn't usually control what a private homeowner installs, but local rules are a separate question. Check with Manheim Borough before choosing a product if your house is inside the district, and let us know so we can work within whatever applies.",
          },
          {
            q: "Can you keep the transom or sidelights when replacing a Manheim entry door?",
            a: "In most cases, yes. A lot of Victorian-era doors in Manheim were built with a transom or sidelights, and we treat those as part of the opening's design rather than something to frame over. Whether we keep, restore, or replace them depends on their condition.",
          },
          {
            q: "Are Italianate windows in Manheim too tall for standard replacements?",
            a: "Often they don't match a standard size, which is why we measure each opening on site and order to it. Tall, narrow openings can take a modern, energy-efficient unit; it just has to be built to fit the house.",
          },
        ]}
      />
    </>
  );
}
