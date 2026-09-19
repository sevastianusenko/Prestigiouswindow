import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "County seat", value: "Lebanon County" },
          { label: "Population", value: "~26,800 (2020)" },
          { label: "Market House", value: "30,000 sq ft, since the 1800s" },
          { label: "Northside homes", value: "Many dating to the 1880s" },
        ]}
      />

      <h2>A steel city rebuilding itself</h2>
      <p>
        For most of the twentieth century, Lebanon&apos;s biggest employer sat
        on a site along the edge of downtown that Bethlehem Steel took over
        in 1917, though the property itself had been in industrial use since
        1881. The plant ran for decades, employed thousands of people at its
        peak, and helped fill the rowhomes and Victorian singles that still
        make up so much of the city today. Like most of the country&apos;s
        steel industry, it wound down through the 1980s, and the site sat
        mostly quiet afterward, a large, obvious gap in a small city that had
        built a lot of its identity around it. That&apos;s finally changing.
        The property is now being redeveloped as Lebanon Steel Works, the
        kind of post-industrial reuse project that&apos;s become familiar
        across former iron and steel towns in this part of Pennsylvania.
        Downtown, the city&apos;s other landmark has had a steadier history.
        The Market House, a roughly 30,000-square-foot farmers market on
        South 8th Street, has been part of daily life in Lebanon for
        generations, and it returned to its original building in 2003 after
        a stretch of operating out of temporary space elsewhere in the city.
        It&apos;s still a working market where people actually do their
        grocery shopping, not a museum piece dressed up for visitors. Between
        the two, Lebanon&apos;s identity is genuinely in transition right
        now: an industrial economy that used to run on one large employer,
        giving way to something less concentrated, while the older
        institutions that predate the steel era, like the Market House,
        keep doing what they&apos;ve always done. That mix of a redeveloping
        industrial site and an unbroken retail tradition a few blocks apart
        is fairly specific to Lebanon among the towns we cover.
      </p>

      <h2>The Northside&apos;s older housing stock</h2>
      <p>
        The Northside is where the city&apos;s age is easiest to see. A lot
        of the homes up there date to the 1880s, built during the same
        stretch when Lebanon&apos;s population and its industrial base were
        both expanding fast. It&apos;s dense, urban housing, narrow rowhomes
        and Victorian-era singles set close together on small lots, which is
        a real contrast to the farmhouses we&apos;re used to working on
        closer to East Earl. Windows and entry doors on a block like that
        have usually had at least one previous replacement already,
        sometimes done well, sometimes done with whatever was cheapest in
        the 1970s or 80s, and every so often something original to the house
        is still hanging on. We do a mix of{" "}
        <Link href="/windows/repair">window repair</Link> and full{" "}
        <Link href="/doors/replacement">door replacement</Link> on the
        Northside for exactly that reason. Every block, sometimes every
        house, calls for a different answer, and the right one usually
        depends on what&apos;s actually behind the trim rather than just how
        old the house looks from the street. A fair amount of what we find
        is original wood double-hung sash that&apos;s had one round of
        storm windows added on top, rather than a full prior replacement,
        which is more original material surviving than we typically see in
        a newer subdivision.
      </p>

      <h2>What density like this means for the work</h2>
      <p>
        Rowhome and close-set Victorian construction changes more than the
        style of window we&apos;re working with. Shared party walls mean
        less exterior access on at least one side of the house, on-street
        parking is often the only parking available, and a lot of these
        blocks were built before anyone anticipated a work truck needing to
        sit outside for a day. None of that is a reason to avoid the job,
        it&apos;s a reason to plan the visit differently than we would for a
        farmhouse on a few open acres. We measure and quote on site
        specifically because a rowhome on a tight Northside block calls for
        a different logistics conversation than a colonial farmhouse outside
        East Earl, even when the window itself ends up being close to the
        same size.
      </p>

      <h2>Entry doors on a shared-wall block</h2>
      <p>
        Rowhome entry doors take more daily weather than a typical suburban
        front door does. There&apos;s usually no covered porch setback,
        often just a stoop a step or two off the sidewalk, taking wind and
        rain straight off the street. On the Northside specifically, that
        shows up as worn weatherstripping and thresholds that have settled
        unevenly after a century of freeze-thaw cycles, sometimes enough
        that the door hasn&apos;t sealed properly for years before anyone
        gets around to calling about it. Storm doors are common here too,
        added at some point by a previous owner to buy a failing entry
        door a few more years, and by the time we&apos;re called out, the
        storm door is often doing more of the actual sealing work than the
        primary door was ever designed to do on its own. Replacing both
        together, rather than patching the storm door and leaving the
        entry door as is, is usually the more honest answer on a block
        like this, even when it&apos;s a bigger job up front than the
        homeowner expected to need.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is the City of Lebanon the same as Lebanon County?",
            a: "No. Lebanon is the county seat, one city inside the larger Lebanon County, which also includes boroughs and townships like Annville, Myerstown, Cornwall, and Jonestown. When people say they're \"from Lebanon,\" they usually mean the city specifically, not the whole county.",
          },
          {
            q: "Do older Lebanon homes need a permit for window or door replacement?",
            a: "Usually a standard building permit, the same as most municipalities. We're not aware of a citywide historic overlay in Lebanon the way there is in nearby Cornwall, but that's worth confirming with the city directly rather than assuming, especially on the Northside where a lot of housing predates modern building code.",
          },
          {
            q: "What's typical for windows in Lebanon's rowhomes?",
            a: "A lot of what we see is older wood double-hung sash, sometimes with an aluminum storm window added later, set into openings that were never resized to a modern standard. That usually means either a careful repair or a replacement unit built to the original opening rather than a stock size off a shelf.",
          },
        ]}
      />
    </>
  );
}
