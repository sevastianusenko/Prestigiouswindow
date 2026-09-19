import Link from "next/link";
import { Opinion } from "@/components/blog/Article";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Incorporated", value: "1926" },
          { label: "Population", value: "~4,604 (2020)" },
          { label: "Furnace operated", value: "1742-1883" },
          { label: "Furnace status", value: "National Historic Landmark" },
        ]}
      />

      <h2>An iron furnace that never stopped being the point</h2>
      <p>
        Cornwall exists because of the Cornwall Iron Furnace, a
        charcoal-burning iron blast furnace that operated from 1742 to 1883
        and is now a National Historic Landmark. It&apos;s the only intact
        original iron plantation of its kind left standing anywhere in the
        Western Hemisphere, not a reconstruction or a partial ruin, but the
        actual furnace along with the surrounding buildings that made the
        whole operation work. The furnace stopped producing iron in 1883,
        but the site itself was preserved rather than demolished or built
        over, which is part of why it&apos;s still possible to see the real
        scale of a mid-1700s iron operation in one place. That&apos;s not a
        small claim, and it&apos;s a big part of why Cornwall reads
        differently than most of the small boroughs around it. The furnace
        didn&apos;t just employ the town for a century and a half, in a lot
        of ways it built the town, and the money it generated is what put up
        some of the more striking homes still standing here today.
      </p>
      <p>
        &quot;Iron plantation&quot; is the accurate historical term for what
        Cornwall was, and it means more than the furnace building itself. An
        operation like this needed its own supporting village: worker
        housing, a company store, blacksmith and carpentry shops, sometimes
        a school, mostly built and owned by the ironmaster&apos;s operation
        rather than by the individual families living in them. That&apos;s
        part of why Cornwall&apos;s older housing stock has real range to
        it beyond the mansions. Modest worker housing from the furnace&apos;s
        operating years still stands in parts of the borough, a very
        different scale and style of construction than the Buckingham
        Mansion or Alden Villa, built for a very different purpose. Both
        ends of that range are part of what makes Cornwall&apos;s older
        buildings interesting to work on, and part of why age alone
        doesn&apos;t tell you much about what kind of job a given house
        actually needs. That pattern still shows up when we&apos;re out
        quoting work in Cornwall today. A lot of the more modest homes we
        see near the historic core sit close together on small lots, more
        like the compact worker housing they descended from than the open,
        spread-out farmland lots common elsewhere in the county, even
        though the families living there now have no direct connection to
        the furnace itself.
      </p>

      <Opinion>
        <p>
          Here&apos;s the part that actually matters if you own a house in
          Cornwall: parts of the borough sit inside a designated Historic
          Overlay District, and that puts real rules on exterior work,
          window and door replacement included, that most of the other
          towns we serve simply don&apos;t have. It&apos;s not a reason to
          put off replacing failing windows or a rotted entry door.
          It&apos;s a reason to find out where your property actually stands
          before you&apos;ve already picked a product and a color. We&apos;d
          rather have that conversation with you up front, before an
          order&apos;s been placed, than have you find out about a review
          requirement afterward.
        </p>
      </Opinion>

      <h2>What an overlay district usually means in practice</h2>
      <p>
        Overlay districts like Cornwall&apos;s typically add an extra layer
        of review on top of normal building permits, specifically for
        exterior changes on properties inside the designated boundary:
        window and door replacement, roofing, siding, and similar work that
        changes how a building looks from the street. The usual process
        involves submitting proposed materials and design to a local review
        board before ordering anything, and the standards can be stricter
        than a standard building code inspection, sometimes specifying
        acceptable materials, colors, or window profiles to keep a historic
        streetscape consistent. The exact boundaries and standards are set
        by the borough itself and can change, so we don&apos;t treat a
        general description like this as a substitute for confirming
        directly with Cornwall before a homeowner commits to a specific
        product. That confirmation step is a normal part of how we quote a
        job here, not an extra hurdle tacked on afterward.
      </p>

      <h2>The mansions the furnace built</h2>
      <p>
        A couple of the borough&apos;s historic homes are worth knowing about
        even if you&apos;re not looking to buy one. The Buckingham Mansion,
        built around 1773, was the ironmaster&apos;s own home and is now
        part of the Cornwall Manor senior living community. Alden Villa,
        also known as Millwood, is a Gilded Age mansion of 11,223 square
        feet that&apos;s currently under restoration. Neither one is a
        typical <Link href="/windows/replacement">window replacement</Link>{" "}
        job, but they&apos;re a useful reminder that historic Cornwall
        covers more than just the furnace, from modest worker housing built
        nearby to the grand estates built for the people who owned it.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is my Cornwall home definitely inside the historic overlay district?",
            a: "Not necessarily. Overlay districts cover specific boundaries within a borough, not every property automatically. We always confirm with Cornwall borough directly as part of quoting a job here, rather than assuming either way based on the house's age alone.",
          },
          {
            q: "Does the Cornwall Iron Furnace's landmark status affect nearby private homes?",
            a: "No. Landmark status applies to the furnace site itself, not automatically to surrounding private property. The borough's separate historic overlay district is what actually governs exterior work on private homes in parts of Cornwall, and it's worth knowing the two designations aren't the same thing.",
          },
          {
            q: "What happens if I replace a window in Cornwall without checking the overlay district first?",
            a: "At worst, work that doesn't match the district's standards can mean costly redo work later, or a compliance issue with the borough. It's a fast question to answer before ordering materials, which is why we ask about it up front instead of after a product's already been chosen.",
          },
        ]}
      />
    </>
  );
}
