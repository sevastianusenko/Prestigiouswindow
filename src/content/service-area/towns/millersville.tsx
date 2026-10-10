import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Millersville sits just southwest of Lancaster city, close enough
        that a lot of people assume it&apos;s a neighborhood rather than a
        borough of its own. It isn&apos;t. It has its own borough
        government, its own history going back to the 1760s, and a
        university that has shaped the town since before the Civil War.
      </p>

      <FactStrip
        items={[
          { label: "Founded", value: "1761, by John Miller" },
          { label: "Incorporated", value: "1932" },
          { label: "Population", value: "~7,900 (2020)" },
          { label: "Earlier name", value: "Millerstown" },
        ]}
      />

      <h2>From blacksmith&apos;s village to college town</h2>

      <p>
        According to the borough, the village was founded in 1761 by John
        Miller, who ran a blacksmith shop and hardware store here on what
        was then farmland in Manor Township. It went by Millerstown for a
        while and became Millersville in the mid-1850s, right around the
        time the thing that would define it arrived. In 1855 the first
        Pennsylvania state normal school was founded here, a teacher
        training school that grew, over the next century and a half, into
        Millersville University.
      </p>

      <Landmark>
        <p>
          John Miller&apos;s original homestead, built in 1763, is still
          standing and still in use. Today it houses the Millersville
          University police department, a 260-year-old building doing a
          very modern job.
        </p>
      </Landmark>

      <p>
        For most of its history Millersville was the largest community in
        Manor Township rather than a town in its own right. It wasn&apos;t
        incorporated as a separate borough until 1932, which is late
        compared with a lot of Lancaster County boroughs and says something
        about how gradually the place grew: a village core first, then the
        school, then the houses that filled in around both.
      </p>

      <h2>Older core, newer streets, and a lot of rentals</h2>

      <p>
        That gradual growth shows up in the housing. Closer to the old
        village center and the campus, you&apos;ll find older homes with
        original or once-replaced wood windows and entry doors that have
        been through a lot of owners. Further out, the streets fill in with
        newer single-family houses built to more standard sizes, where a{" "}
        <Link href="/windows/replacement">window replacement</Link> is
        usually more straightforward because the openings were framed to a
        spec instead of by hand.
      </p>

      <p>
        Like a lot of college towns, Millersville also has its share of
        houses that are rented out rather than owner-occupied, and rental
        properties tend to collect a particular set of problems: a door
        that&apos;s been forced one too many times, a lock that no longer
        lines up, a sash that won&apos;t stay up, a cracked pane nobody
        reported. Plenty of those are{" "}
        <Link href="/windows/repair">window repairs</Link> or{" "}
        <Link href="/doors/repair">door repairs</Link> rather than
        replacements, and our guide to{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          windows that won&apos;t stay up
        </Link>{" "}
        covers one of the most common of them. When a door really is past
        saving, a{" "}
        <Link href="/doors/replacement">door replacement</Link> with
        sturdier hardware is usually the better long-term call for a
        property that sees a new set of tenants every year or two.
      </p>

      <p>
        On the older homes near the village core, the usual cautions
        apply. Original openings rarely match a stock size, interior walls
        may be plaster rather than drywall, and anything built before 1978
        can have lead paint in the trim layers. Our page on{" "}
        <Link href="/old-homes">older homes</Link> goes into how we handle
        that, and our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> guide
        covers how we decide whether an original window is worth keeping.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Millersville part of Lancaster city?",
            a: "No. Millersville is its own borough, incorporated in 1932, with its own borough government. It sits just southwest of the city, and we serve both.",
          },
          {
            q: "Do you work on rental properties near Millersville University?",
            a: "Yes. The work is the same as on an owner-occupied home, from a single door repair or broken sash to replacing several windows between tenants. We'll quote the work the property actually needs, not a whole-house package.",
          },
          {
            q: "Are newer Millersville homes easier to fit with replacement windows?",
            a: "Usually. Houses built in the last several decades tend to have standard-size openings, which makes ordering simpler. Older homes near the village core are more likely to need every opening measured individually, so we measure on site either way.",
          },
        ]}
      />
    </>
  );
}
