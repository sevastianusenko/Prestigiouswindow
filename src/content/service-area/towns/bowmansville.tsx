import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>The county line is the actual story</h2>

      <FactStrip
        items={[
          { label: "Location", value: "Lancaster / Berks county line" },
          { label: "Drive time", value: "~9 min from East Earl" },
          { label: "Character", value: "Rural farmland, both sides" },
        ]}
      />

      <p>
        Bowmansville doesn&apos;t have a marquee landmark or a documented
        founding date we can point to, and we&apos;re not going to make one
        up. What it does have is a genuinely unusual location: the village
        sits directly on the line between Lancaster and Berks counties,
        rural farming country on both sides of it, about nine minutes from
        our shop in East Earl.
      </p>

      <p>
        That county-line position is more than trivia. A lot of contractors
        build their service area around a single county and treat anything
        past the line as somebody else&apos;s territory, which leaves
        villages like Bowmansville sitting in the gap between two
        companies&apos; comfort zones instead of squarely inside either one.
        We don&apos;t work that way. Nine minutes is nine minutes whether the
        property sits on the Lancaster side of the line or the Berks side of
        it, and a Bowmansville job gets the same response time as anything
        closer to the middle of our list.
      </p>

      <p>
        There isn&apos;t a downtown to speak of here, no cluster of shops or
        old streetscape the way some of our other towns have, just houses
        spread along the roads that happen to cross the county line. That&apos;s
        fine. Not every place needs a landmark to be worth taking seriously,
        and a border location is, if anything, more useful information for a
        homeowner than a fact about a building that came down decades ago.
        It tells you something real: whoever you hire out here should
        already be comfortable working both counties, not just one.
      </p>

      <p>
        The county line running through Bowmansville is an administrative
        boundary, not an architectural one. A farmhouse on the Lancaster
        side and a farmhouse on the Berks side, a few hundred feet apart,
        were built by the same kind of Pennsylvania German farming
        families, using the same regional building methods and often the
        same era of construction. The land itself doesn&apos;t change
        character at the county line either, it&apos;s working farmland on
        both sides, which is part of why treating Bowmansville as two
        separate service areas instead of one place never made much sense
        to us.
      </p>

      <p>
        What does change at the line is which office you call. A Lancaster
        County property and a Berks County property can fall under
        different local permitting and inspection processes even when
        they&apos;re neighbors, and a company that only regularly works one
        side of that line can end up slower or less familiar with the
        other county&apos;s process on the occasional job that needs a
        permit. We work both counties often enough that it&apos;s not a
        special case for us.
      </p>

      <p>
        Properties out here tend to be older farmhouses on real acreage
        rather than anything built in the last few decades, which usually
        means original single-pane windows that were never swapped out,
        sometimes paired with a storm window added at some point for a
        little extra winter comfort. Replacing glass like that is a
        different conversation than a standard subdivision swap, since the
        opening itself, the trim, and sometimes the wall it&apos;s set into
        all predate any modern standard size. We treat it that way instead
        of quoting a Bowmansville farmhouse the same way we&apos;d quote a
        fifteen-year-old build.
      </p>

      <p>
        None of this makes Bowmansville a hard place to serve, it just
        makes it a place that&apos;s easy to overlook if a company plans
        its routes by county line instead of by actual drive time. Nine
        minutes from East Earl puts it closer to our shop than several
        towns most people would assume are more central, simply because
        it&apos;s sitting on a border that a map makes look farther away
        than it actually is on the ground.
      </p>

      <LocalFaq
        items={[
          {
            q: "Do you work on both the Lancaster and Berks County sides of Bowmansville?",
            a: "Yes, both, as a matter of course rather than as an exception. The county line runs right through the village, and we don't treat one side as more convenient than the other. Response time is the same regardless of which county a property falls in.",
          },
          {
            q: "Are permits handled differently depending which county a Bowmansville property is in?",
            a: "They can be, since Lancaster and Berks counties don't share a single permitting office. We're familiar with both, which matters on the occasional Bowmansville job that needs a permit pulled, rather than treating it as unfamiliar territory.",
          },
          {
            q: "Is Bowmansville mostly older farmhouses, or is there newer construction too?",
            a: "Mostly older farmhouse-style construction on larger rural lots. We don't see the same mix of new subdivisions here that shows up in some of the bigger towns on our list, so most of the work is old single-pane windows and original openings rather than builder-grade replacements.",
          },
        ]}
      />
    </>
  );
}
