import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        New windows add value to a house, but not dollar for dollar. Industry surveys of
        resale value consistently show that window and door replacement recovers a solid
        share of its cost at sale, and rarely all of it. The bigger payoff is usually
        indirect: a house that shows better, inspects cleaner, and sells faster.
      </Lead>

      <p>
        This question tends to come up in two situations. Either someone is about to list a
        house and wonders whether new windows are worth doing first, or someone is planning
        to stay and wants to know if the money comes back eventually. The answer is
        different for each, so it&apos;s worth separating them.
      </p>

      <h2>If you&apos;re selling soon</h2>
      <p>
        Buyers and their agents notice windows. Fogged glass, rotted sills, painted-shut
        sashes and single-pane windows with storm inserts all read as &quot;deferred
        maintenance,&quot; and buyers tend to mentally subtract more than the repair would
        actually cost. Inspectors write them up, and those notes become negotiating points.
      </p>
      <p>
        That doesn&apos;t mean replacing every window before listing. Usually the better
        move is to fix what will show up in the inspection report:
      </p>
      <ul>
        <li>
          <Link href="/windows/repair/fogged-glass">Replace fogged glass units</Link> rather
          than whole windows.
        </li>
        <li>
          <Link href="/windows/repair/sash-balance">Fix sashes that won&apos;t stay up</Link>{" "}
          or won&apos;t open.
        </li>
        <li>Repair soft sills and repaint exterior trim.</li>
        <li>Replace a worn-out or drafty front door, since buyers touch it first.</li>
      </ul>
      <p>
        Those repairs cost a fraction of full replacement and remove most of the objections.
        Our <Link href="/repair-or-replace">repair-or-replace guide</Link> is a good way to
        sort which windows need what.
      </p>

      <ArticleFigure
        src="/photos/house-multi-gable-blue.jpg"
        alt="A multi-gabled house with blue siding and many windows"
        caption="On a house with a lot of windows, the front elevation does most of the selling. That's where condition matters most."
      />

      <h2>If you&apos;re staying</h2>
      <p>
        If you plan to be in the house for years, resale value is a side benefit. What you
        actually get is a more comfortable house: fewer drafts, less condensation, windows
        that open and lock properly, lower heating and cooling loads, and less outside noise.
        New windows rarely pay for themselves on energy savings alone, especially if your
        current windows are already double-pane. They pay off in comfort and in not having
        to keep repairing old ones.
      </p>
      <p>
        By the time you do sell, newer windows are one less item on a buyer&apos;s list,
        and documentation helps: keep the product information, the warranty paperwork, and
        your contractor&apos;s details together for the next owner.
      </p>

      <h2>What gets the best return</h2>
      <ul>
        <li>
          <strong>The front door.</strong> Entry door replacement is one of the
          best-recovering exterior projects in most resale surveys, because it&apos;s
          relatively inexpensive and it&apos;s the first thing every buyer sees up close. Our{" "}
          <Link href="/blog/entry-door-materials-steel-fiberglass-wood">
            entry door materials guide
          </Link>{" "}
          covers the options.
        </li>
        <li>
          <strong>Windows on the front of the house.</strong> If you&apos;re phasing a
          replacement, start with the street-facing side.
        </li>
        <li>
          <strong>Failed and broken units.</strong> Anything visibly broken costs you more in
          a buyer&apos;s mind than it does to fix.
        </li>
        <li>
          <strong>Matching the house.</strong> Windows that suit the style of the home add
          more than the most expensive product. On older Lancaster County farmhouses, divided
          lites and the right proportions matter.
        </li>
      </ul>

      <h2>What doesn&apos;t move the needle</h2>
      <ul>
        <li>Top-tier, premium-brand windows in a modest house.</li>
        <li>Replacing windows that are already double-pane and working fine.</li>
        <li>Specialty glass packages a buyer won&apos;t notice or ask about.</li>
      </ul>

      <h2>A word on picking who does it</h2>
      <p>
        Buyers can&apos;t see brand names from the curb, but they can see a bad install:
        gaps in caulk, crooked trim, water stains under the sill. A clean install is part of
        the value. Check reviews, ask questions, and look at past work. We collect
        customer feedback through{" "}
        <a href={site.social.provenexpert} target="_blank" rel="noopener">
          ProvenExpert
        </a>
        , and you&apos;ll find us listed on{" "}
        <a href={site.listings.manta} target="_blank" rel="noopener">
          Manta
        </a>{" "}
        too, along with the rest of the usual places. The checklist we&apos;d use ourselves
        is in{" "}
        <Link href="/blog/choosing-a-window-door-contractor">
          how to choose a window and door contractor
        </Link>
        .
      </p>

      <Opinion>
        If you&apos;re selling within a year, fix what&apos;s broken and replace the front
        door. If you&apos;re staying five years or more, replace the windows for yourself and
        treat the resale bump as a bonus.
      </Opinion>

      <Faq
        items={[
          {
            q: "Do new windows increase home value?",
            a: "Yes, but not dollar for dollar. Resale surveys show window replacement recovers a meaningful share of its cost, not all of it. Newer windows also help a house show and inspect better, which can matter as much as the appraisal.",
          },
          {
            q: "Should I replace windows before selling my house?",
            a: "Usually not all of them. Fixing what an inspector would flag, such as fogged glass, stuck sashes, rotted sills, and a worn front door, removes most buyer objections for much less money.",
          },
          {
            q: "Which home improvement adds the most value: windows or doors?",
            a: "A new front door typically recovers a higher share of its cost than window replacement, because it costs less and buyers notice it immediately. Windows add more comfort and longer-term value.",
          },
          {
            q: "Do energy-efficient windows pay for themselves?",
            a: "Rarely on energy savings alone, especially if you're replacing double-pane windows. They pay off through comfort, less maintenance, fewer drafts and condensation, and resale appeal.",
          },
          {
            q: "Do buyers care about window brands?",
            a: "Not much. Buyers notice condition, operation, and installation quality far more than the name on the label.",
          },
        ]}
      />

      <ArticleCTA
        heading="Getting a house ready to sell?"
        body="We'll walk through your windows and doors and tell you which ones are worth fixing before listing, and which ones you can leave alone."
        href="/contact"
        label="Get a Quote"
      />
    </>
  );
}
