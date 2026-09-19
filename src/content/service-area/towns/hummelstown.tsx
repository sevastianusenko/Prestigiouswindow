import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Older than either of its bigger neighbors</h2>

      <FactStrip
        items={[
          { label: "Founded", value: "1762, as Fredrickstown" },
          { label: "Founders", value: "Frederick & Rosina Hummel" },
          { label: "Population", value: "~4,500 (borough)" },
          { label: "From East Earl", value: "48 mi, 65 min" },
        ]}
      />

      <p>
        Hummelstown&apos;s history goes back further than either of the two
        much bigger names on either side of it. It was founded in 1762, more
        than 140 years before Milton Hershey built his first factory, as
        Fredrickstown, named for Frederick and Rosina Hummel, whose own
        family name eventually stuck instead. Today it&apos;s a small
        borough of a little over 4,500 people, sitting almost exactly
        between Harrisburg and Hershey, and that position has shaped the
        town as much as its own history has. A steady stream of visitors
        headed to one or the other passes straight through Hummelstown&apos;s
        old downtown core rather than around it, which keeps its Main
        Street busier than the population alone would suggest.
      </p>

      <p>
        We don&apos;t have a documented date for exactly when Fredrickstown
        started going by Hummelstown instead, just that the family name
        eventually won out, which is a common enough pattern for a Colonial
        Pennsylvania town named after its founder rather than its founding
        family. What&apos;s more useful to a homeowner today is what it
        actually means to own a house on a road that&apos;s effectively a
        connector between two much bigger destinations. It means more
        passing traffic wearing on a street-facing entry door than a
        similarly old house on a quiet side street would see, more exposure
        to winter road salt and spray kicked up by cars, and, because
        everyone driving Harrisburg to Hershey or back gets a look at your
        front elevation, a little more incentive to keep it looking right
        than a house nobody passes.
      </p>

      <p>
        We haven&apos;t found a confirmed, formally designated historic
        district covering that downtown core, so we won&apos;t claim one.
        What is clear is that the housing along and near the old
        through-route is genuinely old, and it gets measured the same
        careful way we&apos;d measure any{" "}
        <Link href="/old-homes">older home</Link>: openings that predate
        standard manufacturing sizes, frames that have moved a little over
        two and a half centuries, and a downtown streetscape where a
        mismatched replacement window stands out to anyone driving through,
        tourist or neighbor.
      </p>

      <p>
        None of this means every Hummelstown job is a downtown storefront or
        a Main Street rowhome. The borough is small enough that older
        construction and newer infill sit close together, and a house two
        streets off the old through-route can be a completely ordinary
        mid-century build with nothing historic about it at all. We treat
        the borough&apos;s age as a reason to look closer, not as an excuse
        to assume every job here needs{" "}
        <Link href="/repair-or-replace">custom, historically-aware work</Link>
        . Plenty of it is a standard replacement, just with a longer drive
        attached than our closer towns.
      </p>

      <LocalFaq
        items={[
          {
            q: "How far is Hummelstown from East Earl?",
            a: "About 48 miles, roughly 65 minutes by car depending on traffic through the Harrisburg area. It's one of the longer drives in our service area, and we plan the trip accordingly rather than treating it as a quick add-on stop.",
          },
          {
            q: "Is Hummelstown's downtown a designated historic district?",
            a: "We haven't found a confirmed, formal historic-district designation for Hummelstown's downtown, so we don't claim one. The core is genuinely old regardless, dating to the borough's 1762 founding, and we measure openings there with the same care we'd use on a formally designated district.",
          },
          {
            q: "Is every house in Hummelstown old?",
            a: "No. The old through-town core along Main Street is genuinely historic, but the borough also has newer infill and mid-century construction a couple of streets off that main route. We look at each house rather than assuming its age from the borough's founding date.",
          },
        ]}
      />
    </>
  );
}
