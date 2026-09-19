import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Population", value: "17,851 (2020)" },
          { label: "Land area", value: "27.29 sq mi" },
          { label: "Character", value: "Rural / agricultural" },
          { label: "Main road", value: "PA-24" },
        ]}
      />

      <p>
        Windsor Township, not to be confused with the much smaller Windsor
        Borough or with Lower Windsor Township over near Long Level, is one
        of the largest and least developed places on our service area map.
        It runs 27.29 square miles and counted 17,851 residents as of the
        2020 census, spread out enough that most of it still reads as rural
        and agricultural rather than suburban. The township has a formal
        Agricultural District in place specifically to protect that farming
        character, land use rules meant to keep working farms viable rather
        than pressured into subdivision, and PA-24 running through it is
        lined with a mix of working farmland, woods, and scattered
        residential rather than anything resembling a downtown.
      </p>

      <p>
        That kind of formal agricultural district is a common tool across
        rural Pennsylvania townships, generally used to keep enrolled
        farmland eligible for preferential tax treatment and to shield
        working farms from nuisance complaints tied to normal agricultural
        activity, noise, odor, and equipment on the road at odd hours.
        Windsor Township leaning on that kind of protection tells you
        something about local priorities: this is a place that has
        deliberately tried to stay working farmland rather than let
        development creep in the way it has closer to York itself.
      </p>

      <p>
        We put Windsor&apos;s drive at roughly 35 to 45 minutes from East
        Earl, and we want to be upfront that it&apos;s more of an estimate
        than a confirmed number, the least firmly established figure
        anywhere on our service area map. It&apos;s a fair rough range for
        a township this large and this rural, but if the exact minutes
        matter to you, ask us and we&apos;ll give you a straighter answer
        for your specific address.
      </p>

      <Opinion>
        Windsor Township has more in common with our home turf around East
        Earl than with York&apos;s rowhome blocks a half hour up the road:
        larger lots, working farmland, and farmhouses instead of shared
        walls and stock-size openings. The difference is the drive. East
        Earl is home base. Windsor is one of the longer hauls in our York
        County coverage. We treat the job the same either way, the same
        on-site measurement, the same crew, we just build the extra travel
        time into the schedule instead of pretending it isn&apos;t there.
      </Opinion>

      <p>
        In practice that means the work we do in Windsor looks a lot like
        the work we do closer to home: older single-family houses and
        farmhouses on real acreage, rather than the dense rowhome blocks
        common nearer the river. If a Windsor farmhouse needs new windows or
        a worn entry door,{" "}
        <Link href="/windows/replacement">window replacement</Link> and{" "}
        <Link href="/doors/replacement">door replacement</Link> both cover
        what to expect, and the process doesn&apos;t change just because the
        property has more acreage around it than square footage inside it.
        A farmhouse on a couple of acres has its own set of considerations,
        older single-pane sash in some cases, a wraparound porch that
        changes how an entry door needs to be trimmed out, and we walk
        those differences with the homeowner before anything gets quoted.
        A detached farmhouse also usually means access on all four sides
        rather than just the front and back the way a borough rowhome
        does, which can actually make some jobs easier, more room for a
        ladder or a lift and no neighbor&apos;s wall to work around.
      </p>

      <p>
        Older farmhouses out here also tend to run drafty in ways a denser
        borough house doesn&apos;t, more exterior wall and window surface
        per square foot of living space, and often a few generations of
        piecemeal additions with their own gaps where they meet the
        original structure. That makes energy performance a bigger part of
        the conversation than it is on a compact rowhome job. We also see
        more homes out here that have had vinyl or aluminum siding added
        over the original wood at some point, which complicates
        re-trimming a window or door opening, since the new siding has to
        be cut back and flashed correctly around the new unit rather than
        just butted up against it.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Windsor Township the same as Windsor Borough?",
            a: "No, they're two separate municipalities. Windsor Borough is a small, distinct borough nearby, and Lower Windsor Township is a different township near Long Level and Accomac. This page is specifically about Windsor Township, the large rural township along PA-24.",
          },
          {
            q: "Do you cover all of Windsor Township, or just the area near the highway?",
            a: "The whole township. It's large and spread out, so drive time varies by address, but PA-24 frontage or deep into farmland, we cover it the same way, with an on-site measurement before anything is quoted.",
          },
          {
            q: "Is a farmhouse job different from a borough rowhome job?",
            a: "Yes, mostly in scope and access. Farmhouses tend to have more standalone walls to reach, sometimes older single-pane sash, and porch details that affect how a door gets trimmed out. Rowhomes trade that for tighter access and shared walls. Different considerations, same careful measurement either way.",
          },
        ]}
      />
    </>
  );
}
