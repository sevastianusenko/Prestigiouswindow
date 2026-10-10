import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Quarryville is about as plainly named as a town gets. It grew up
        around limestone quarries in the southern end of Lancaster County,
        and for a good part of the 1800s that stone, and the lime burned
        from it, was what the place did. Today it&apos;s a small borough
        and the main town for the surrounding farm country, but the
        quarrying history still explains a lot about how it was built.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1892" },
          { label: "Population", value: "2,843 (2020)" },
          { label: "Earlier name", value: "Barr's Quarries" },
          { label: "Named Quarryville", value: "1837" },
        ]}
      />

      <h2>From Barr&apos;s Quarries to a borough</h2>

      <p>
        According to the borough&apos;s own history, Martin Barr acquired
        several thousand acres here in 1775, part of which is now
        Quarryville. His son Abram Barr is reported to have been the first
        to take limestone out of the ground, in 1820, and the area was
        known as Barr&apos;s Quarries until it was officially renamed
        Quarryville in 1837. The business grew fast: by 1858 more than
        600,000 bushels of lime were being hauled out of the area, with over
        a dozen quarries employing more than 100 men. The post office came
        in 1849, and Quarryville was chartered as a borough in 1892.
      </p>

      <Landmark>
        <p>
          The oldest building still standing in town is &quot;The
          Ark,&quot; also called Barr&apos;s Ark, built by Martin Barr in
          1791 or 1792. Quarryville is also where George Hensel founded the
          Slumbering Groundhog Lodge in 1908, giving the town its own
          Groundhog Day tradition. And about seven miles south of the
          borough sits the birthplace of Robert Fulton, born there in 1765
          and later known for his steamboat work. The house was declared a
          National Historic Landmark in 1964.
        </p>
      </Landmark>

      <h2>What the housing stock looks like</h2>

      <p>
        The borough&apos;s history notes that many of its early structures
        were lost over the years to fires and demolition, so Quarryville
        doesn&apos;t have the block-after-block 18th-century core some of
        our other towns do. What it does have is a center that filled in
        during the late 1800s and early 1900s, when churches, hotels, and
        other businesses went up, ringed by newer houses built as the area
        kept growing. In practical terms, that means two very different
        kinds of job inside a small footprint.
      </p>

      <p>
        On the older houses near the center, we tend to find wood windows
        that have been painted shut, sash cords that gave out long ago, and
        entry doors whose frames have settled over a century of seasons. A
        lot of that is repair work first: freeing and rebalancing sash,
        replacing glass, and tightening up a door so it seals again. Our{" "}
        <Link href="/windows/repair">window repair</Link> and{" "}
        <Link href="/doors/repair">door repair</Link> pages cover what that
        usually involves, and if you&apos;re dealing with a sash that
        won&apos;t stay open,{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          this post on balance repair
        </Link>{" "}
        is a good place to start. When an older opening is past saving,
        we measure it on site and build the{" "}
        <Link href="/windows/replacement">replacement window</Link> to fit,
        the same approach we describe on our{" "}
        <Link href="/old-homes">older homes</Link> page.
      </p>

      <p>
        The newer houses at the edges of town are a simpler conversation.
        Openings are standard sizes, and the issues are the usual ones for
        builder-grade products: fogged insulated glass, worn weatherstripping,
        and front doors that were never built to last. Sometimes that&apos;s
        a repair and sometimes a{" "}
        <Link href="/doors/replacement">new entry door</Link> makes more
        sense, and our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        lays out how we decide.
      </p>

      <LocalFaq
        items={[
          {
            q: "Do you serve Quarryville and the surrounding southern Lancaster County townships?",
            a: "Yes. Quarryville is a longer drive from our East Earl shop than our closest towns, so we usually group visits in the area, but we handle both repair and replacement work there and in the farm country around it.",
          },
          {
            q: "My older Quarryville house has windows painted shut. Do they need replacing?",
            a: "Not necessarily. Painted-shut sash can often be freed, rebalanced, and weatherstripped. If the frame or sash is rotted through, we'll tell you and talk about replacement instead. In any house built before 1978, we also plan for the possibility of lead paint.",
          },
          {
            q: "Is a newer home in Quarryville a quicker job than an older one?",
            a: "Usually. Standard-size openings mean replacement units can be ordered to common dimensions, while older houses near the center often need each opening measured and matched individually.",
          },
        ]}
      />
    </>
  );
}
