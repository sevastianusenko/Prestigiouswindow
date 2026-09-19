import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        New Holland is the biggest town on our list by a wide margin, more
        than five times the population of the next-largest community we
        cover, and it didn&apos;t get there by accident. It&apos;s been the
        commercial center of eastern Lancaster County for over a century,
        first as a farm-supply and rail town, later as headquarters to a
        company that&apos;s now known well outside the county.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1895" },
          { label: "Population", value: "5,762 (2020)" },
          { label: "Settled", value: "1728" },
          { label: "Earlier names", value: "Hog Swamp, Earltown, New Design" },
        ]}
      />

      <h2>The company that put New Holland on the map</h2>

      <p>
        In 1895, the same year the borough itself was incorporated, a local
        businessman named Abe Zimmerman started the New Holland Machine
        Company here. It made farm equipment, and it&apos;s still making
        farm equipment, just under a much bigger name today.
      </p>

      <Landmark>
        <p>
          New Holland Machine Company grew, over the following century, into
          what&apos;s now Case New Holland, a globally known farm-equipment
          brand still headquartered in the borough it&apos;s named after.
          It&apos;s the reason a town this size shows up on agricultural
          industry maps next to cities many times its population.
        </p>
      </Landmark>

      <p>
        The borough&apos;s other well-documented piece of history sits
        inside the Eastern Lancaster County Library: a museum collection of
        more than 150 instruments tied to the New Holland Band, a group
        founded in 1829 that served as a regimental band during the Civil
        War. Between the two, New Holland has more actual documented history
        per block than most towns its size, and its identity is still tied
        to that equipment business today in a way most of the towns around
        it can&apos;t claim: a genuinely global brand name still
        headquartered in a borough of under six thousand people.
      </p>

      <h2>Old core, new edges</h2>

      <p>
        As the commercial hub of the area, New Holland grew earlier and
        denser than most of the towns around it. The borough core is
        turn-of-the-20th-century construction, built up around the same
        years the machine company was getting started: narrow lots, older
        framing, entry doors that have seen decades of daily use in a way a
        suburban front door never does. Ring the core and the picture
        changes to newer development from the last few decades, standard
        modern openings, builder-grade doors and windows installed to a spec
        instead of built by hand. We end up working both sides of that line
        in the same week sometimes,{" "}
        <Link href="/doors/replacement">swapping a worn entry door</Link> on
        a hundred-year-old rowhome one day and handling a{" "}
        <Link href="/windows/replacement">window replacement</Link> on a
        fifteen-year-old build the next.
      </p>

      <p>
        That mix also changes what the repair-or-replace conversation looks
        like depending on which side of town we&apos;re standing on. A
        rowhome entry door from the early 1900s might just need proper
        weatherstripping and a rebuilt threshold to see another twenty
        years, which is a repair conversation more than a replacement one. A
        fifteen-year-old builder-grade door that&apos;s already sagging on
        its hinges is usually a replacement conversation, full stop. We walk
        through that distinction in more general terms on our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> page, but
        New Holland is probably where we apply it most often, simply because
        there&apos;s more entry-door traffic here to begin with.
      </p>

      <h2>A borough with its own rulebook</h2>

      <p>
        New Holland is also the only one of our closest six communities
        that&apos;s an incorporated borough with its own local government,
        rather than a census-designated place inside a township. That
        happened in 1895, the same year Abe Zimmerman started his machine
        company, and it gave New Holland its own borough council, its own
        zoning authority, and eventually its own rules about what can and
        can&apos;t change on a building&apos;s exterior in the parts of
        town where that applies. It&apos;s worth a call to the borough
        office before committing to a specific product here, in a way it
        usually isn&apos;t in the unincorporated villages nearby.
      </p>

      <p>
        Before it was New Holland, the settlement went by at least three
        other names: Hog Swamp, Earltown, and New Design, each reflecting a
        different period before the town&apos;s current identity settled
        into place around its 1895 incorporation. That kind of naming
        history is common for towns that grew up gradually around a
        crossroads rather than being platted and named all at once, and
        it&apos;s part of why New Holland&apos;s oldest building stock
        doesn&apos;t share one consistent style. What got built under one
        name doesn&apos;t always match what got built under the next.
      </p>

      <p>
        Rowhomes from New Holland&apos;s early-1900s building boom come
        with their own set of practical considerations. Shared walls mean a
        door or window replacement on one unit needs to account for how it
        reads next to the identical unit attached to it, since a mismatched
        style stands out immediately on a block where every house was
        originally built the same. Interiors from this period are usually
        finished in plaster over lath rather than drywall, and any house
        built before 1978 may have lead paint somewhere in its layers, both
        of which call for a more careful approach than the same job on a
        fifteen-year-old subdivision house at the edge of town.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does New Holland Borough have rules about exterior changes to older buildings?",
            a: "Some parts of the borough may, since New Holland has its own local government and zoning authority, unlike the unincorporated villages nearby. We'd rather a homeowner check with the borough office before settling on a specific product than find out afterward that something needs adjusting.",
          },
          {
            q: "Are New Holland's rowhome doors harder to replace than a standalone house's front door?",
            a: "A little, mostly because they need to look right next to the identical door on the attached unit. We measure and match style carefully on rowhome blocks so a replacement doesn't read as obviously new next to a century-old neighbor.",
          },
          {
            q: "Is Case New Holland still connected to the town, or just the name?",
            a: "Still headquartered in the borough today, not just lending its name from somewhere else. That's part of why New Holland, despite being a town of under six thousand people, shows up on agricultural industry maps most towns its size never would.",
          },
        ]}
      />
    </>
  );
}
