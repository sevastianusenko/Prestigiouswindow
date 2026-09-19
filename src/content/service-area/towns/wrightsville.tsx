import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Population", value: "2,257 (2020)" },
          { label: "Historic district listed", value: "1983" },
          { label: "Contributing buildings", value: "~350" },
          { label: "Oldest construction", value: "1790s" },
        ]}
      />

      <Landmark>
        <p>
          On June 28, 1863, Union militia set fire to the Susquehanna River
          bridge at Wrightsville to keep Confederate Gen. John B.
          Gordon&apos;s troops from crossing during the Gettysburg campaign.
          It worked, but the fire didn&apos;t stop at the bridge. Sparks
          carried into town, and rather than let Wrightsville burn along
          with it, Confederate troops reportedly formed a bucket brigade
          alongside residents to help save the place they&apos;d just been
          trying to take. Three houses, a foundry, a mill, and a lumberyard
          were lost. The rest of the town made it through.
        </p>
        <p>
          That bridge burning didn&apos;t happen in isolation. It was part
          of Gen. Robert E. Lee&apos;s broader push into Pennsylvania that
          June, an invasion aimed at resupplying his army on Northern soil
          and drawing the fight away from Virginia. Gordon&apos;s advance
          toward the Susquehanna was one of the farthest points that
          invasion reached before Union forces met Lee&apos;s army at
          Gettysburg just days later, which makes the bridge at
          Wrightsville one of the closer calls Pennsylvania had that
          summer, not just a local skirmish.
        </p>
      </Landmark>

      <p>
        Wrightsville&apos;s historic district, listed on the National
        Register of Historic Places in 1983, covers roughly 350 contributing
        buildings, most of them Federal and Georgian Vernacular in style and
        dating as far back as the 1790s, decades before the bridge burning
        even happened. That&apos;s a large share of the town&apos;s total
        housing stock, given a population of just 2,257 as of the 2020
        census. It&apos;s mostly small frame vernacular homes built for
        river and mill workers, with some brick and stone mixed in, modest
        footprints and window and door openings sized to a period well
        before modern stock dimensions existed. Entry doors on these homes
        are often original or close to it, set into frames that were built
        by hand for a specific opening rather than pulled from a catalog.
      </p>

      <p>
        Federal and Georgian Vernacular, the two styles that make up most
        of the district, both lean toward a plain, symmetrical facade,
        evenly spaced windows on either side of a centered front door,
        often with multi-pane sash and a simple transom or fanlight above
        the entry rather than heavy Victorian trim. It&apos;s a quieter
        style than what you&apos;ll find in York&apos;s downtown, but the
        openings behave the same way structurally, hand-framed to the
        house rather than to a catalog size, which is exactly why we
        measure a Wrightsville job the same careful way we&apos;d measure
        one across the river.
      </p>

      <p>
        A lot of the original sash in these homes is true divided light,
        individual small panes held in place with wood muntins and glazing
        putty rather than a single sealed unit. On those, we&apos;re honest
        that full restoration, reglazing, re-puttying, rehanging the sash
        weights, sometimes beats replacement outright, especially this
        close to the historic district&apos;s original character. Where
        the wood&apos;s too far gone, or a homeowner wants better energy
        performance than old single-pane glass can offer, a well-built
        replacement that keeps the multi-pane look from the street is
        usually the right middle ground. Either way, it starts with
        actually inspecting the sash in hand rather than guessing its
        condition from the ground.
      </p>

      <p>
        A lot of that housing stock is still standing and still occupied,
        which means a lot of our work here is repair and replacement on
        openings that predate the Civil War by two generations, not just
        survive it. Original frame construction from the 1790s and early
        1800s doesn&apos;t forgive a careless measurement the way a newer
        build does, so a Wrightsville job usually starts with more time on
        site than a comparable job in a newer neighborhood, before any glass
        or hardware gets ordered.
      </p>

      <p>
        The town still sits right where it always has, at the Pennsylvania
        end of the river crossing. US-30&apos;s Wright&apos;s Ferry Bridge
        and PA-462&apos;s Veterans Memorial Bridge both land here on their
        way into Columbia, on the Lancaster County side. For us that makes
        Wrightsville the first York County town on the other side of the
        Susquehanna, and usually the shortest of our York County drives,
        though we treat that as a reasonable estimate rather than a
        guarantee, since travel time here depends heavily on how the
        crossing is running that day. If an old frame window in one of
        these houses has finally reached the point of no return, our{" "}
        <Link href="/windows/replacement">window replacement</Link> page
        walks through what that job actually looks like on a house built
        before anyone standardized a window size. The same goes for an
        original entry door that&apos;s finally past saving. We&apos;d
        rather have that honest conversation on site than let a homeowner
        keep patching a door that&apos;s already told us it&apos;s done.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does National Register listing restrict what we can do to our own house?",
            a: "Listing on the National Register by itself doesn't usually limit what a private owner can do, that kind of restriction typically comes from a local historic-overlay ordinance layered on top. We're not aware of Wrightsville having that kind of local overlay, but check with the borough if you want certainty before you commit to a product.",
          },
          {
            q: "Can you match a replacement window to an 1790s opening?",
            a: "Yes, that's most of what we do in Wrightsville. We measure the actual opening on site rather than assuming a stock size, and match sash pattern and proportions to the house so a new window doesn't look out of place next to openings nobody's touched in decades.",
          },
          {
            q: "Does the bridge crossing ever affect scheduling?",
            a: "Occasionally. Traffic on the Wright's Ferry Bridge can back up at peak times, so for a tight install window we'll sometimes plan around it. It rarely adds more than a few minutes, but we'd rather account for it than promise an arrival time we can't hit.",
          },
        ]}
      />
    </>
  );
}
