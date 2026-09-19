import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Renamed", value: "1833, from Earl Town" },
          { label: "Inn built / demolished", value: "1766 to 1997" },
          { label: "Population", value: "~1,095 (2020)" },
          { label: "Trade era", value: "1790s to Civil War cattle hub" },
        ]}
      />

      <Landmark>
        <p>
          Blue Ball didn&apos;t start out as Blue Ball. The crossroads where
          US 322 meets PA 23 was originally called Earl Town, and it kept
          that name until 1833, when it was renamed after an inn already
          sitting on the corner: the Sign of the Blue Ball, built in 1766.
          For more than two centuries, the inn, later known as the Blue Ball
          Hotel, was the literal namesake of the village that grew up around
          it. It didn&apos;t survive to see this website. The building was
          demolished in 1997. The name stuck anyway. Two hundred and
          thirty-one years is a long run for a single building to define a
          place&apos;s identity, and Blue Ball is still called Blue Ball more
          than a quarter-century after the building itself came down.
        </p>
      </Landmark>

      <p>
        Blue Ball was a real commercial crossroads long before it was a
        bedroom community, a cattle-trading hub from the 1790s through the
        Civil War era, with the inn functioning as the center of that trade.
        That commercial history left behind a different kind of housing stock
        than you&apos;d find in a purely residential village: a mix of
        larger inn-adjacent buildings and smaller farmhouses built up around
        them over more than a century. One farmstead here has an oldest wing
        dating to 1755, meaning it predates the inn itself by over a decade.
        Houses and outbuildings spanning that range of construction eras
        don&apos;t share a single style of framing or a single generation of
        hardware, and that&apos;s a big part of why we walk a property in
        person before quoting anything. A fix that works on a Civil War-era
        addition doesn&apos;t always work on the older core three feet away.
      </p>

      <p>
        None of that history changes what actually shows up on a work order
        today, but it does explain why Blue Ball&apos;s building stock is
        such a mix: a colonial-era farmhouse wing, a 19th-century commercial
        building left over from the cattle-trading years, and a 20th-century
        addition tacked onto either one, sometimes all under the same
        roofline. A lot of the door and window calls we get here aren&apos;t
        really about one bad unit, they&apos;re about a property that has
        accumulated several different eras of construction under one
        address, and figuring out which era you&apos;re actually working on
        before ordering anything is half the job.
      </p>

      <h2>Not its own town, on paper</h2>

      <p>
        Blue Ball has never been its own borough. Like East Earl and
        Goodville, it&apos;s an unincorporated community inside East Earl
        Township, a census-designated place rather than a place with its
        own government. Practically, that means zoning, permitting, and any
        township-level rules on exterior work for a Blue Ball property run
        through the same township office that handles East Earl and
        Goodville, not a separate borough council the way Terre Hill or New
        Holland has. It&apos;s a small distinction, but it matters if a
        homeowner is trying to figure out who to call before a project
        starts.
      </p>

      <p>
        The mix of building types here also means a mix of construction
        approaches within a few hundred feet of each other. A residential
        farmhouse from this era was typically built to house one family and
        whatever seasonal storage a farm needed, with window and door
        openings sized modestly. A coaching-era inn or commercial building
        built to handle travelers and trade, the kind Blue Ball had plenty
        of during its cattle-market years, tended to be framed heavier and
        taller, with larger openings to light a public room or a
        second-floor lodging space. Both types are still standing in Blue
        Ball today, sometimes across the street from each other, and
        neither one gets treated like the other when we&apos;re measuring
        for a replacement.
      </p>

      <p>
        Blue Ball also sits directly on a through-road, the same US 322 and
        PA 23 crossroads that gave the old inn its business in the first
        place, which makes it one of the more accessible stops on our list.
        It&apos;s about six minutes from our shop in East Earl, close enough
        that a same-day repair call here is rarely a scheduling problem, the
        way it can be on properties farther from a state route. That same
        visibility is probably why Blue Ball ended up as a commercial
        crossroads in the first place, long before anyone was thinking
        about drive times to a windows-and-doors shop: an inn and a trading
        post both do better business on a road people are already using
        than on a lane nobody passes by accident.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Blue Ball its own town with its own local government?",
            a: "No. Blue Ball is an unincorporated community inside East Earl Township, a census-designated place rather than a borough with its own council. Zoning and permitting questions for a Blue Ball property go through East Earl Township, the same office that covers East Earl and Goodville.",
          },
          {
            q: "A lot of Blue Ball's windows look like they've already been replaced once. Does that make the next job harder?",
            a: "Sometimes, yes. Properties with a round or two of prior work often have inconsistent sash styles or hardware between openings. We inspect and measure each opening individually rather than assuming one fix applies to the whole house, and we'll flag it honestly if trim from earlier work needs correcting as part of the job.",
          },
          {
            q: "How quickly can you get to a job in Blue Ball?",
            a: "Usually the same day for anything urgent. Blue Ball sits right on the US 322 and PA 23 corridor, about six minutes from our shop in East Earl, which is one of the shortest drives on our list.",
          },
        ]}
      />
    </>
  );
}
