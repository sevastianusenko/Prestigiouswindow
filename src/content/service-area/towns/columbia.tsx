import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Columbia sits on the Lancaster County bank of the Susquehanna,
        directly across the river from Wrightsville, and it has more river
        history packed into it than almost any town on our list. It started
        as a ferry crossing, came within a single vote of becoming the
        nation&apos;s capital, and spent the 1800s as a canal, rail and
        iron town. Most of its housing dates from that run.
      </p>

      <FactStrip
        items={[
          { label: "Settled", value: "1726, by Quakers" },
          { label: "Incorporated", value: "1814" },
          { label: "Population", value: "10,207 (2020)" },
          { label: "Earlier name", value: "Wright's Ferry" },
        ]}
      />

      <h2>Wright&apos;s Ferry and a near miss with history</h2>

      <p>
        Quakers led by John Wright settled here in 1726, and Wright was
        granted a patent to run a ferry across the Susquehanna in 1730. The
        settlement was known as Wright&apos;s Ferry until 1788, when it
        took the name Columbia, and it became an incorporated borough in
        1814. In 1789 the town was put forward as the site of the new
        national capital. When Congress voted on it in 1790, Columbia lost
        by one vote.
      </p>

      <Landmark>
        <p>
          Wright&apos;s Ferry Mansion, built in 1738 by Susanna Wright, is
          the oldest house still standing in Columbia. The borough is also home to
          the National Watch and Clock Museum on Poplar Street is one of the
          few museums anywhere devoted entirely to timekeeping.
        </p>
        <p>
          The river crossing has its own Civil War chapter. On June 28,
          1863, during the Gettysburg campaign, Columbia residents and
          Pennsylvania militia burned the covered bridge to Wrightsville to
          keep Confederate troops from crossing. The Veterans
          Memorial Bridge that links the two towns today opened in 1930.
        </p>
      </Landmark>

      <h2>A canal, rail and iron town&apos;s housing</h2>

      <p>
        The Pennsylvania Canal reached Columbia in 1833, the Philadelphia
        and Columbia Railroad opened in 1834, and from about the 1850s to
        1900 the area around the borough ran a string of anthracite iron
        furnaces. Warehousing, tobacco processing and boat building filled
        in the rest. That industry built most of what you see downtown, and
        the Columbia Historic District, listed on the National Register in
        1983, reflects it: more than 800 contributing buildings, mostly
        residential and largely Late Victorian, across the business
        district and the neighborhoods around it.
      </p>

      <p>
        For windows and doors, that means a lot of original wood sash in
        tall, narrow openings and entry doors that have had well over a
        century to settle into their frames. Openings from that era were
        framed by hand, so we measure every one on site before ordering a{" "}
        <Link href="/windows/replacement">replacement window</Link> rather
        than assuming the house next door tells us anything. When the old
        sash is still sound, a{" "}
        <Link href="/windows/repair">window repair</Link> can be the better
        answer, and our article on{" "}
        <Link href="/blog/single-pane-windows-repair-or-replace">
          single-pane windows
        </Link>{" "}
        walks through how to weigh the two on a house this age.
      </p>

      <p>
        The same goes for doors. A worn threshold, a sagging hinge side or
        a latch that won&apos;t catch is often a{" "}
        <Link href="/doors/repair">door repair</Link>; a frame that&apos;s
        rotted at the bottom or an opening that&apos;s shifted out of
        square is more likely a{" "}
        <Link href="/doors/replacement">door replacement</Link>. Our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> guide
        covers how we make that call, and our page on{" "}
        <Link href="/old-homes">older homes</Link> covers plaster walls and
        pre-1978 paint, both of which come with most of Columbia&apos;s
        historic housing.
      </p>

      <h2>Exterior changes in the historic district</h2>

      <p>
        Columbia has a Historic Architecture Review Board. It&apos;s an
        advisory board that reviews exterior changes to buildings in the
        historic district that are visible from a public right-of-way,
        using the Secretary of the Interior&apos;s Standards, and makes
        recommendations to Borough Council. If your house is in the
        district and the work faces the street, check with Borough Hall
        before a product is chosen. We&apos;d rather plan around that
        review from the start than adjust an order afterward.
      </p>

      <LocalFaq
        items={[
          {
            q: "Do window or door changes in Columbia's historic district need borough review?",
            a: "Exterior changes visible from a public right-of-way in the historic district go through the borough's Historic Architecture Review Board, which makes recommendations to Borough Council. Check with Borough Hall before choosing a product, and let us know what applies so we can plan the job around it.",
          },
          {
            q: "Can original wood windows in an old Columbia house be repaired instead of replaced?",
            a: "Often, if the wood is still sound. Sticking sash, broken balances and failed glazing are repairable. We'll tell you which openings are worth saving and which have gone too far.",
          },
          {
            q: "Is Columbia the town across the river from Wrightsville?",
            a: "Yes. Columbia is on the Lancaster County side of the Susquehanna, Wrightsville is on the York County side, and the Veterans Memorial Bridge connects them. We work on both sides of the river.",
          },
        ]}
      />
    </>
  );
}
