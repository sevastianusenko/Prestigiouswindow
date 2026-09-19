import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Net clear opening", value: "5.7 sq ft minimum" },
          { label: "Clear height", value: "24 in minimum" },
          { label: "Clear width", value: "20 in minimum" },
          { label: "Sill height", value: "44 in maximum above the floor" },
        ]}
      />

      <h2>What the code actually requires</h2>

      <p>
        An egress window is sized to a rule, not to whatever will fit the
        existing hole in the wall. The standard most Pennsylvania
        municipalities work from sets a minimum net clear opening of 5.7
        square feet, with a minimum clear height of 24 inches and a minimum
        clear width of 20 inches, both of which have to be met at the same
        time as the area minimum. That last part catches people off guard: a
        window that&apos;s exactly 24 inches tall and 20 inches wide only clears
        3.3 square feet, well under 5.7, so hitting both the height and width
        minimums doesn&apos;t automatically satisfy the area requirement. The
        window has to be genuinely larger than the two minimums taken
        separately would suggest. On top of that, the sill, the bottom of the
        clear opening, can&apos;t sit more than 44 inches above the finished
        floor, so a window that&apos;s otherwise large enough still fails if it
        is mounted too high for someone to actually climb through it.
      </p>

      <p>
        Net clear opening means the actual space you can climb through with
        the sash fully open, not the rough opening in the wall and not the
        window&apos;s nominal size on a spec sheet. That distinction is why
        window type matters for egress. A casement swings its entire sash
        clear, so most of the glass area counts toward the opening. A
        double-hung only ever opens half its area, so the whole unit has to
        be considerably larger before the operable half reaches 5.7 square
        feet. A hopper or slider falls somewhere in between depending on how
        far it travels. We measure the actual clear opening a given unit
        produces, not just the window size on the order sheet, before
        telling you it meets code.
      </p>

      <p>
        One honest caveat: Pennsylvania municipalities adopt the state
        building code but can amend or interpret parts of it locally, and
        permit and inspection processes differ by township. The numbers above
        are the standard baseline and hold in the overwhelming majority of
        cases, but your township&apos;s code office is the actual authority
        on your specific job, and we confirm with them rather than assuming.
      </p>

      <h2>Cutting a larger opening in the foundation</h2>

      <p>
        Existing basement windows are almost never sized for egress. They&apos;re
        usually a small hopper or slider set into an opening built for
        ventilation and light, not for someone to climb through, and getting
        to 5.7 square feet with 24 and 20 inch minimums almost always means
        enlarging that opening. In a poured concrete or block foundation
        wall, that means cutting with a concrete saw, and it means the
        section of wall above the new, larger opening has to be carrying its
        load through something other than solid concrete once the cut is
        made. A properly sized lintel, steel or engineered concrete, goes in
        above the new opening before the window does. This is structural
        work on a load-bearing wall, and it&apos;s where most of the real labor
        and cost on an egress job actually live, not in the window unit
        itself, which is usually a standard size built to meet the code
        numbers already.
      </p>

      <h2>Window wells and drainage</h2>

      <p>
        Once the opening is below grade, code requires a window well in front
        of it, and the well has its own minimums: at least 9 square feet of
        floor area with a minimum 36 inch projection out from the foundation
        wall, enough room to actually stand and climb out, not just open the
        window into a hole in the ground. If the well is deeper than 44
        inches, a permanently mounted ladder or built-in steps is required
        inside it, usable with the window open.
      </p>

      <p>
        Drainage is the part that gets skipped and shouldn&apos;t be. A well
        that fills with water in a storm isn&apos;t just an egress problem, it&apos;s
        a basement leak problem, since that water is sitting directly against
        the foundation wall right next to a window seal. A well needs to
        drain, either to daylight if the grade allows it, or down through a
        gravel bed to a drain line tied into the foundation&apos;s existing
        drainage or a sump. We treat the well and its drainage as part of the
        window job, not a separate scope someone else figures out later. Our{" "}
        <Link href="/blog/basement-window-installation-repair">
          basement window guide
        </Link>{" "}
        goes deeper into well construction and what a finished basement
        project actually involves start to finish.
      </p>

      <h2>When a basement legally needs one</h2>

      <p>
        The trigger isn&apos;t &quot;basement,&quot; it&apos;s &quot;bedroom.&quot;
        Any room used for sleeping, on any floor of a house, has to have an
        egress window or door meeting these numbers. A basement used as a rec
        room, a home office, or storage doesn&apos;t require egress by code even
        fully finished. The same basement with a bed and a closet in it, used
        as a bedroom, does. This gets missed constantly on DIY basement
        finishes and shows up later as a real problem, at resale when a room
        is being marketed as a bedroom without meeting code, or when a permit
        finally gets pulled and an inspector catches it. If you&apos;re finishing
        a basement and there&apos;s any chance a room in it gets used for
        sleeping now or later, it&apos;s worth building the egress window into
        the plan from the start rather than retrofitting it after drywall is
        up.
      </p>

      <Faq
        items={[
          {
            q: "Does every basement need an egress window?",
            a: "No. Egress is required for any room used for sleeping, not for a basement generally. A finished rec room, office, or storage area doesn't trigger the requirement. A basement bedroom does, on any floor of the house, not just below grade.",
          },
          {
            q: "What size does an egress window well need to be?",
            a: "At least 9 square feet of floor area with a minimum 36 inch projection out from the foundation wall, so there's room to actually climb out. If the well is deeper than 44 inches, code also requires a permanently mounted ladder or steps inside it.",
          },
          {
            q: "Can an existing basement window opening be enlarged for egress, or does it need to be started fresh?",
            a: "Enlarging the existing opening is the normal approach. It means cutting the foundation wall wider and taller and installing a properly sized lintel above the new opening to carry the load, then building the well outside. The window unit itself is usually a standard size built to meet the code minimums.",
          },
          {
            q: "Who confirms the exact egress requirements for my township?",
            a: "Your local building or code enforcement office has the final say, since Pennsylvania municipalities can amend or interpret the base building code locally. We work from the standard code numbers and confirm specifics with your township as part of the job rather than assuming they match another town's.",
          },
        ]}
      />
    </>
  );
}
