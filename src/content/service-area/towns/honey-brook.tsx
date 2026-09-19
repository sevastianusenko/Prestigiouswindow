import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Borough and township aren&apos;t the same place</h2>
      <p>
        &quot;Honey Brook&quot; on a map actually covers two separate
        municipalities: Honey Brook Borough, a few blocks of closely built
        homes at the crossroads, and the much larger Honey Brook Township
        wrapped around it, which is still close to two-thirds farmland. That
        split matters for the kind of work we end up doing out here. Inside
        the borough, at the intersection of Horseshoe Pike (US-322) and
        Conestoga Avenue (PA-10), houses sit close together on smaller lots
        with the window and door openings you&apos;d expect from any small
        Pennsylvania town core. A few minutes outside that crossroads, in
        the township, the calls shift toward farmhouses, converted
        outbuildings, and additions built onto a farm complex over several
        generations, each one with its own window sizes and its own history
        of past repairs layered on top of each other. It&apos;s part of why
        we don&apos;t treat Honey Brook as a windows-only town or a
        doors-only town the way we do a few smaller boroughs on our list.
        A farmhouse that&apos;s been added onto three or four times usually
        needs both looked at in the same visit.
      </p>
      <p>
        The borough itself was originally platted as Waynesburg before it
        took the Honey Brook name, and the oldest houses left in town
        cluster in those first few blocks around the crossroads rather than
        out along the township roads. One thing that surprises people: the
        Brandywine River&apos;s headwaters actually start right here in
        Honey Brook, not down near Wilmington where most people picture the
        river. It doesn&apos;t change how we measure a window, but it&apos;s
        a reminder that this is a working agricultural landscape with its
        own history, not just overflow from somewhere else. On the older
        farmhouses especially, a lot of what we run into lines up with what
        we cover on our <Link href="/old-homes">older homes</Link> page:
        openings that were never cut to a standard size, and repairs
        layered on top of repairs over the decades.
      </p>
      <h2>What two-thirds farmland means for a service call</h2>
      <p>
        A township that&apos;s still mostly agricultural changes what shows
        up on our schedule. A lot of the houses we see in Honey Brook
        Township aren&apos;t simple rectangles, they&apos;re farmhouses with
        additions stacked on over fifty or eighty years: a summer kitchen
        turned into a mudroom, a porch enclosed and glazed sometime in the
        1970s, a second-floor dormer added when a family outgrew the
        original bedrooms. Every one of those additions usually came with
        its own window sizes and its own entry door, chosen by whoever was
        doing the work at the time rather than matched to what was already
        there. That&apos;s normal on a working farm property, but it means a
        Honey Brook estimate often involves measuring four or five
        different eras of construction on a single house rather than one
        consistent opening size repeated room to room.
      </p>
      <p>
        Outbuildings add another layer. A lot of what used to be a
        springhouse, a summer kitchen, or a small barn out here has been
        converted into usable living space or a home office over the last
        few decades, and those conversions usually kept whatever door or
        window opening the original structure happened to have, which is
        rarely a standard residential size. We&apos;d rather quote that
        honestly, sometimes a custom unit, sometimes a stock size with
        extra trim work, than pretend every opening on a farm property is
        going to take an off-the-shelf window the way a newer subdivision
        would.
      </p>
      <h2>When a barn opening becomes a doorway</h2>
      <p>
        A specific kind of Honey Brook Township job we run into more than
        almost anywhere else on our list: converting a barn, springhouse,
        or outbuilding opening that was originally built for equipment or
        livestock into something sized for a person. A hay-mow door or a
        wagon-sized barn opening wasn&apos;t framed with a residential
        header in mind, so dropping a standard entry door into that space
        usually means real structural work first, sizing a proper header
        for the new opening, not just trimming out whatever hole is
        already there. Skipping that step is how you end up with a door
        that looks fine on day one and starts sagging within a year
        because the load above it was never actually accounted for.
      </p>
      <p>
        We flag this up front on any Honey Brook Township estimate that
        involves a converted outbuilding, because it changes both the cost
        and the timeline. A straightforward door swap in an existing
        residential opening is a same-day job. Reframing a barn opening to
        carry a door properly is a different scope of work entirely, and
        we&apos;d rather say so at the estimate than discover it
        mid-installation.
      </p>
      <FactStrip
        items={[
          { label: "Borough population", value: "1,895 (2020 census)" },
          { label: "Township population", value: "8,274 (2020 census)" },
          { label: "Originally platted as", value: "Waynesburg" },
          {
            label: "Crossroads",
            value: "US-322 (Horseshoe Pike) & PA-10 (Conestoga Ave)",
          },
        ]}
      />
      <LocalFaq
        items={[
          {
            q: "Is Honey Brook Borough different from Honey Brook Township for pricing or scheduling?",
            a: "Not for pricing, we quote the same way in both, but it does change what we expect to find. The borough's crossroads homes tend to have more standard in-town openings, while the township's farmhouses usually mean multiple additions and non-standard sizes, so a township visit is often a longer measuring appointment.",
          },
          {
            q: "How far is Honey Brook from your shop in East Earl?",
            a: "About seven miles, roughly a ten-minute drive via US-322 from our shop. It's one of the closest Chester County towns on our list, close enough that we treat it the same as our core Lancaster County coverage rather than as a special out-of-area trip.",
          },
          {
            q: "What's the most common issue you see on Honey Brook farmhouses?",
            a: "Mismatched window sizes from generations of additions, more than any single failure mode. A farmhouse expanded over eighty years rarely has one consistent opening size, which means replacement often means measuring and ordering room by room instead of one uniform order for the whole house.",
          },
        ]}
      />
    </>
  );
}
