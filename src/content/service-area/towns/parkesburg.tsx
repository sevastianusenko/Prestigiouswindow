import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>A tavern, then a railroad, then a mill</h2>
      <p>
        Long before Parkesburg was its own borough, incorporated in 1872 out
        of Sadsbury Township, the spot was known for a tavern. The Fountain
        Inn opened around 1734 along the road that&apos;s now Route 10
        (Limestone Pike), near its junction with Route 30, and for the
        better part of a century that&apos;s about all the place was. The
        real growth came later: the Philadelphia &amp; Columbia Railroad
        reached town in 1831, and the Parkesburg Iron Company built up
        around that rail connection, reaching peak prosperity in the 1900s
        and 1920s before closing for good in 1926.
      </p>
      <p>
        A lot of what&apos;s now downtown Parkesburg, the largest of the
        small towns we cover in this part of Chester County at 3,984
        residents as of the 2020 census, was built up during that
        railroad-and-iron-company era. That shows up directly in the entry
        doors and window frames we see on service calls: more often
        original openings on century-old framing than anything built in the
        last few decades. The Parkesburg National Bank and the Parkesburg
        School are both individually listed on the National Register of
        Historic Places, though downtown Parkesburg doesn&apos;t carry a
        formal historic-district designation the way a few of our other
        towns do. That doesn&apos;t make the housing stock any newer, it
        just means there&apos;s no review board involved before you replace
        a <Link href="/doors/replacement">door</Link> here, only the
        ordinary work of matching an old opening correctly.
      </p>
      <p>
        Parkesburg sits near where Route 10 (Limestone Pike) meets Route
        30, and the borough&apos;s size relative to our other small Chester
        County towns, nearly three times Elverson&apos;s population on a
        similarly compact street grid, is a direct result of how much the
        railroad and the iron company packed into this stretch a century
        ago. A door that hangs a little off-square on one of those blocks
        usually isn&apos;t a sign of a bad install, it&apos;s a hundred
        years of a rowhome frame settling the way old framing does.
      </p>
      <h2>What a century-old rail town means for entry doors</h2>
      <p>
        Parkesburg&apos;s entry doors carry more daily wear than a
        farmhouse door out in Honey Brook Township ever will, simply
        because rowhomes and close-set houses built during the
        iron-company boom put more people through fewer doors on a
        tighter street grid. A hundred years of that kind of traffic,
        combined with a frame that&apos;s settled the way attached and
        semi-attached houses do, means the most common call we get here
        isn&apos;t a door that&apos;s failed outright, it&apos;s a door
        that&apos;s been fighting its frame for years: sticking in summer,
        drafting in winter, needing a shoulder to close all the way.
      </p>
      <p>
        We check the frame before we ever talk about the door itself on a
        Parkesburg job, because installing a new door into a frame
        that&apos;s out of square just moves the same problem into a new
        unit. Sometimes that means squaring and shimming an old frame
        before a new door goes in, sometimes it means a repair to the
        existing door is the more honest answer than a full replacement.
        Either way, a town built up this fast, this early, in this small a
        footprint tends to need that extra step more often than a town
        that grew slowly over a longer stretch of time.
      </p>
      <h2>What Parkesburg&apos;s rail-boom windows usually need</h2>
      <p>
        Parkesburg&apos;s focus for us has always leaned toward doors, but
        the windows on these same rowhomes and close-set houses come from
        the same era and carry a lot of the same wear. Most of what we
        find are original single-pane sashes paired with a storm window
        added on at some point after the fact, sometimes decades after
        the house itself was built. That combination can perform
        reasonably well when both pieces are in good shape, but it&apos;s
        common on a hundred-year-old house for the storm window&apos;s own
        hardware to have failed separately from the primary sash, which
        means a homeowner sometimes gets quoted for a full window
        replacement when the real fix is a storm window repair or a
        properly resealed primary sash.
      </p>
      <p>
        We check both pieces separately before recommending anything on a
        Parkesburg estimate, because the era&apos;s construction, original
        sash plus later storm, means the two problems don&apos;t always
        travel together. A window that feels drafty here is just as
        likely to be a gap around the storm window as a failure in the
        original glass, and the fix, and the cost, are completely
        different depending on which one it actually is.
      </p>
      <FactStrip
        items={[
          { label: "Population", value: "3,984 (2020 census)" },
          { label: "Incorporated", value: "1872, from Sadsbury Township" },
          { label: "From East Earl", value: "~16 miles, about 27 minutes" },
          { label: "Iron company era", value: "Peak 1900s-1920s, closed 1926" },
        ]}
      />
      <LocalFaq
        items={[
          {
            q: "Is downtown Parkesburg a designated historic district?",
            a: "Not as a whole. The Parkesburg National Bank and Parkesburg School are both individually listed on the National Register, but there's no formal historic-district designation covering the residential streets, so replacing a window or door here doesn't require a review board, just careful matching to the original opening.",
          },
          {
            q: "Why do you see so many door calls in Parkesburg specifically?",
            a: "The borough's housing dates mostly to its 1900s-1920s iron-company boom, which means entry doors here are usually original openings on frames that have had a century to settle. That combination shows up as sticking, drafting, and misaligned doors more often than it does in newer construction.",
          },
          {
            q: "How far is Parkesburg from your shop in East Earl?",
            a: "About sixteen miles, roughly twenty-seven minutes from East Earl. It's farther than Honey Brook or Elverson, but it's still a town we serve regularly, not an occasional special trip we only take on when the job is big enough to justify the drive.",
          },
        ]}
      />
    </>
  );
}
