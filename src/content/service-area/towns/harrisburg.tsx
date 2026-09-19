import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Role", value: "Dauphin County seat, PA capital" },
          { label: "Population", value: "~50,000 (2020)" },
          { label: "Size rank", value: "PA's 11th-largest city" },
          { label: "From East Earl", value: "73 min" },
        ]}
      />

      <p>
        Harrisburg has been the seat of Dauphin County since 1785 and the
        actual capital of Pennsylvania since 1812, a longer run as capital
        than a lot of people realize when they think of it as just another
        river city along I-83. The Capitol complex sits on the east bank of
        the Susquehanna, and I-83 crosses into the city over the John Harris
        Bridge, named for the trader who ran a ferry across this stretch of
        river generations before any of the current buildings went up.
      </p>

      <Landmark>
        <p>
          The Pennsylvania State Capitol is the obvious landmark, a building
          most Pennsylvanians have seen in photos even if they&apos;ve never
          walked past it in person. What&apos;s less obvious from the outside
          is how much genuinely old rowhome housing surrounds it. Midtown
          gets the most attention, but Fox Ridge Historic District and
          Capitol Heights are named neighborhoods in their own right, and
          together they give Harrisburg an unusually large stock of pre-WWII
          architecture for a city this size, dense blocks built well before
          anyone was thinking about standardized window sizes.
        </p>
      </Landmark>

      <p>
        Midtown, Fox Ridge, and Capitol Heights don&apos;t function as one
        neighborhood, even though they get grouped together as
        Harrisburg&apos;s old rowhome core. Midtown sits closest to the
        Capitol itself and has drawn most of the reinvestment attention over
        the past three decades, the restaurants and renovated storefronts
        that usually come up first when people mention the area. Fox Ridge
        carries a formal historic-district designation of its own, and like
        some of the other historic districts we work in across our service
        area, that kind of designation sometimes comes with its own review
        process for visible exterior changes, worth checking with the city
        before committing to a specific product. Capitol Heights gets
        written about less than either of the other two, but its rowhomes
        are cut from the same pre-WWII cloth: narrow lots, shared walls, and
        openings built to a standard that predates modern manufacturing
        sizing. Three names, three slightly different situations, but the
        same underlying construction era and the same practical challenge
        when it comes to fitting a modern window or door into a wall that
        was never sized for one.
      </p>

      <h2>A city that&apos;s had real ups and real downs</h2>

      <p>
        We&apos;re not going to describe Harrisburg&apos;s recent history as
        all revitalization, because it isn&apos;t. The city carried
        &quot;financially distressed&quot; status under Pennsylvania&apos;s
        Act 47 starting in 2010, driven mainly by more than $300 million in
        debt tied to a botched incinerator retrofit, and it stayed under
        state oversight until it exited receivership in 2014. That&apos;s a
        real, documented stretch of financial trouble, not a rumor, and it
        shaped how much the city could invest in itself for years afterward.
      </p>

      <p>
        At the same time, Midtown&apos;s revitalization is just as real. It
        has been underway since the 1990s, well before the Act 47 period
        even started, and it has continued through it and past it, block by
        block, rowhome by rowhome. Both things are true about Harrisburg at
        once: a city that went through genuine fiscal distress, and a
        neighborhood inside that same city that has spent thirty years being
        rebuilt one property at a time. Neither fact cancels the other out,
        and pretending it does would be dishonest in either direction.
      </p>

      <p>
        None of that history is abstract when you&apos;re the one measuring
        a window. A decade of official fiscal distress doesn&apos;t leave a
        city extra money for optional programs, and it&apos;s a reasonable
        bet that some of what we see in Harrisburg&apos;s older housing
        reflects deferred maintenance from those years as much as it
        reflects the sheer age of the house. That&apos;s not a knock on any
        homeowner. Cities and the people living in them absorb budget
        problems differently than a household does, and plenty of owners in
        Harrisburg have kept their properties in excellent shape through all
        of it. It&apos;s just useful context for understanding why two
        rowhomes built the same year, a few blocks apart, can be in
        noticeably different condition by the time we&apos;re called out to
        look at either one.
      </p>

      <Opinion>
        <p>
          Harrisburg is 73 minutes from our shop in East Earl, our longest
          regular drive by a wide margin, and we&apos;re upfront about that
          rather than letting a homeowner find out after we&apos;ve already
          scheduled a visit. We&apos;re selective about which jobs out here
          make sense for us, because a single loose window that&apos;s a
          quick add-on stop in Blue Ball is a dedicated round trip when
          it&apos;s in Harrisburg, and that math has to work honestly.
        </p>
        <p>
          What consistently does make sense is the older rowhome{" "}
          <Link href="/doors/repair">door repair</Link> and{" "}
          <Link href="/windows/repair">window repair</Link> work in
          neighborhoods like Midtown. That housing stock, pre-WWII rowhomes
          with original openings, narrow frames, and a century of settling
          behind them, is exactly the kind of work we&apos;re built around.
          We&apos;d rather tell a homeowner plainly that the drive shapes
          which jobs we take than show up underprepared for a house that
          needed more attention than a standard visit allows.
        </p>
      </Opinion>

      <LocalFaq
        items={[
          {
            q: "How far is Harrisburg from your shop in East Earl?",
            a: "About 73 minutes and 53 miles, our longest regular drive by a wide margin. We plan for it as a dedicated trip rather than an add-on stop, and we're selective about which Harrisburg jobs make sense given that drive.",
          },
          {
            q: "Does Harrisburg's older housing need special-sized windows or doors?",
            a: "Often, yes. Rowhomes in neighborhoods like Midtown and Capitol Heights predate standardized manufacturing sizes, so openings were framed by hand to whatever dimension made sense at the time. We measure every opening on site before quoting instead of assuming a stock size will fit.",
          },
          {
            q: "Is Fox Ridge Historic District subject to special rules for exterior work?",
            a: "It's a formally designated historic district, and districts like it sometimes carry design-review expectations for visible exterior changes. We'd recommend checking with the city before settling on a specific product if your home is inside the district boundary, since the rules can affect what's allowed.",
          },
        ]}
      />
    </>
  );
}
