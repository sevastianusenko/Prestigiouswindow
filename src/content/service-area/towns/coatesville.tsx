import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <p>
        Coatesville is the only city in Chester County, and the numbers
        make that obvious fast: roughly 13,350 residents as of the 2020
        census, three to ten times the population of any of the smaller
        boroughs we cover elsewhere in Chester County. Most of that scale
        traces back to one business.
      </p>
      <FactStrip
        items={[
          { label: "Population", value: "~13,350 (2020 census)" },
          { label: "Municipal type", value: "City, the only one in Chester County" },
          {
            label: "Historic district",
            value: "457 contributing buildings, mid-1700s to 1937",
          },
          { label: "From East Earl", value: "~19 miles, about 26 minutes via US-322" },
        ]}
      />
      <h2>The mill that built the city</h2>
      <Landmark eyebrow="Lukens Steel">
        <p>
          The Brandywine Iron Works opened on this site in 1810 and
          eventually became Lukens Steel, at one point the oldest
          continuously operated steel mill site in the country. Rebecca
          Lukens later ran the company and is recognized as the first
          woman to head a major American industrial company. Steel rolled
          here went into real, documented uses well beyond Coatesville:
          armor plate during World War II, and the distinctive
          &quot;tree&quot; columns used in the original World Trade Center
          towers.
        </p>
        <p>
          The mill&apos;s fortunes changed after Bethlehem Steel bought the
          operation in 1998. It runs today under ArcelorMittal, at a
          smaller scale than its peak, and that decline is a big part of
          why the city looks the way it does now: a genuine industrial
          history sitting alongside real, ongoing work to bring investment
          back. That transition, from an industrial powerhouse to a city
          figuring out its next chapter, still shapes almost every
          conversation about Coatesville today.
        </p>
        <p>
          It&apos;s worth sitting with what &quot;oldest continuously
          operated steel mill site in the country&quot; actually means.
          Plenty of American towns had a mill at some point. Coatesville
          had the same one, expanding and changing hands, for the better
          part of two centuries, which is a different kind of history than
          a plant that opened, ran for thirty years, and closed.
          Everything about the city&apos;s street grid, its worker
          housing, and its downtown commercial buildings grew up around
          that continuity, not around a single boom-and-bust cycle the way
          some of our smaller Chester County towns did.
        </p>
      </Landmark>
      <h2>A historic core built block by block</h2>
      <p>
        Coatesville&apos;s historic district covers 457 contributing
        buildings dating from the mid-1700s up through 1937, and there&apos;s
        a separate Lukens Historic District also listed on the National
        Register. Walk through the core and the housing tells the
        mill&apos;s story almost as clearly as the plant itself once did:
        turn-of-the-century rowhomes and townhouses built for mill workers,
        Victorian houses from the years the company was thriving, and
        Tudor- and Craftsman-style homes from the early 1900s, all within a
        few blocks of each other. Newer townhouse construction fills in
        parts of the edges of the city, which means a Coatesville service
        call can be a careful{" "}
        <Link href="/windows/repair">window repair</Link> on a
        century-old rowhome frame in the morning and a straightforward{" "}
        <Link href="/windows/replacement">replacement</Link> job on a
        modern build in the afternoon. There&apos;s no single
        &quot;Coatesville house,&quot; the way there might be in a town
        that grew up all at once. Entry doors see the same range: narrow
        rowhome doors set into frames that have shifted with a century of
        shared-wall settling, right alongside standard prehung doors in
        newer construction a few blocks away.
      </p>
      <h2>What the housing variety means for a quote</h2>
      <p>
        The architectural mix in Coatesville&apos;s historic core
        isn&apos;t just a visual detail, it changes what a window or door
        job actually involves. Victorian-era homes here tend toward
        taller, narrower double-hung sashes and more elaborate trim,
        which usually calls for a closer match on proportion than a
        standard modern unit provides off the shelf. Craftsman-era houses
        from the early 1900s often group windows in twos and threes rather
        than spacing them individually, which means a single failed unit
        in a grouped window can affect how the whole grouping reads once
        it&apos;s replaced. Tudor-influenced homes from the same building
        boom sometimes carry steeper rooflines and multi-pane,
        casement-style windows that don&apos;t have a direct off-the-shelf
        equivalent, so matching them takes more planning up front than a
        straightforward double-hung swap.
      </p>
      <p>
        Rowhomes and townhouses, meanwhile, bring their own set of
        questions: shared walls mean less flexibility in how an opening
        can be resized, and a door replacement has to account for however
        much the shared structure has shifted over a century of settling
        next to its neighbors. None of this is unusual work for us, but it
        does mean a Coatesville estimate usually involves more up-front
        conversation about what&apos;s actually achievable on a specific
        house than a quote on a newer build a few blocks away, where
        almost any standard product is going to fit without much
        discussion.
      </p>
      <h2>Where we come down on the revitalization</h2>
      <Opinion>
        We&apos;re not going to pretend Coatesville hasn&apos;t been through
        a hard few decades, or that a city built around one steel mill
        doesn&apos;t feel that mill&apos;s decline in a real way. It has.
        But we&apos;re also not going to pretend the current revitalization
        effort is just talk. Over roughly the past eight years the city has
        seen more than 40 documented economic development projects and
        upward of $200 million in combined public and private investment,
        and that&apos;s not a number a marketing department invented, it
        shows up block by block if you spend time here.
        <br />
        <br />
        What that means for us practically is that Coatesville isn&apos;t
        one kind of job. Some blocks are exactly the careful,
        original-opening work we do on any historic home. Others are newer
        construction that needs nothing more than a standard install.
        We&apos;d rather describe the city accurately, a real place with a
        real industrial history that&apos;s genuinely mid-recovery, than
        oversell it as fully turned around or undersell it as somewhere to
        avoid. Both versions are wrong, and either one does a disservice to
        the people who actually live here.
      </Opinion>
      <LocalFaq
        items={[
          {
            q: "Is it worth investing in window or door replacement in Coatesville right now?",
            a: "We think so, and we're not just saying that because we do the work. The city has seen more than 40 documented economic development projects and upward of $200 million in combined investment over roughly the past eight years, real, ongoing momentum, not a promise. A well-maintained window or door is part of that same investment, on a house-by-house scale.",
          },
          {
            q: "Do you work on Coatesville's historic rowhomes, or mainly newer construction?",
            a: "Both, often in the same week. The historic core's rowhomes, Victorians, and Craftsman-era homes need careful, original-opening work, while newer townhouse construction on the edges of the city is usually a more standard install. We quote each on its own terms rather than treating the city as one type of job.",
          },
          {
            q: "What's the difference between the Coatesville Historic District and the Lukens Historic District?",
            a: "The Coatesville Historic District covers 457 contributing buildings across the city's core, homes and commercial buildings dating from the mid-1700s to 1937. The Lukens Historic District is a separate, more focused National Register listing tied specifically to the steel works itself. Both are recognized, but they cover different ground.",
          },
          {
            q: "How does Coatesville compare to the smaller Chester County towns you serve?",
            a: "Mainly in scale. Coatesville runs three to ten times the population of Honey Brook, Elverson, Parkesburg, or Atglen, and it's the only city, not a borough or township, in that group. The housing variety, rowhomes through Victorians through newer townhouses, is also wider than any single one of the smaller towns has on its own.",
          },
        ]}
      />
    </>
  );
}
