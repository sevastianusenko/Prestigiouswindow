import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Finding out how much of the jamb is actually gone</h2>

      <p>
        Rot never looks as bad on the surface as it is underneath, so the
        first thing we do is not cut anything. We probe the jamb leg with an
        awl or a screwdriver tip, working out from the visibly damaged wood
        in quarter-inch steps, up the leg, across the sill area, and into the
        casing if the casing is original. Sound wood resists the point.
        Rotted wood lets it sink in with almost no pressure, sometimes with a
        soft, fibrous give that feels nothing like healthy pine or fir. We
        mark that boundary all the way around before any tool that removes
        material comes out, because cutting to the edge of what you can see
        almost always leaves punky wood behind the patch, and a repair built
        on punky wood fails again within a couple of years.
      </p>

      <h2>Cutting back to sound wood and splicing in new material</h2>

      <p>
        Once we know the real boundary, we cut back past it, typically an
        inch or two into wood that resists the probe test consistently, not
        just at one lucky spot. That usually means removing more than looks
        necessary from the outside, which is normal and expected. The
        replacement piece is cut to match the jamb&apos;s existing profile,
        species, and thickness as closely as we can source it, then scarfed
        or lapped into the remaining sound wood with a glued joint backed by
        screws driven into what&apos;s left of solid material. This is a
        splice, sometimes called a dutchman repair in the trade, not a patch
        smeared over a soft spot.
      </p>

      <p>
        The distinction matters most at the hinge leg. An epoxy wood filler
        or consolidant has a real place in this work, mainly on shallow
        surface rot away from load points, where it can stabilize wood and
        fill a small void without a full cutout. But packed into a hinge
        mortise or the section of jamb that actually carries a swinging
        door&apos;s weight, epoxy filler eventually cracks and works loose
        under the constant flex of hinge screws pulling against it every time
        the door opens. Anywhere the jamb has to hold a screw under real load,
        we splice in wood. Anywhere it&apos;s purely cosmetic, filler can be
        the right call, and we&apos;ll say which one your repair actually is
        before we start.
      </p>

      <h2>Priming and sealing the end grain</h2>

      <p>
        After a splice is glued and set, every cut face gets primed before
        anything goes back together, including the faces that will be hidden
        behind casing or pressed against the subfloor once the repair is
        closed up. End grain is where a jamb takes on water fastest, faster
        than the flat face of the board by a wide margin, and it&apos;s
        almost never painted on a standard installation because nobody sees
        it. We prime the new piece on all sides before it goes in, not just
        the face that will show, because the backside touching the framing or
        the subfloor is often the side most exposed to moisture wicking up
        from below. A splice that looks finished from the front but was never
        sealed on the hidden faces is a repair that rots again from the
        inside.
      </p>

      <h2>Why the rot started in the first place</h2>

      <p>
        Wood jambs don&apos;t rot on their own schedule. Something is putting
        water where it shouldn&apos;t sit, and fixing the wood without
        addressing that just resets the clock. The usual culprits: splashback
        off a low stoop or a walkway that slopes toward the door instead of
        away from it, a missing or improperly lapped drip cap above the unit
        that lets water run down behind the casing instead of off the front
        of it, a failed caulk joint where the brick mold meets the siding, or
        simply no roof overhang at all to shed water off the face of the
        door. Any one of those keeps the bottom few inches of a jamb damp
        far more often than it should be. Part of every jamb repair is
        pointing out which of these is present, because a new splice sitting
        under the same drip point or the same bad caulk joint is rotted again
        inside a few seasons, and that&apos;s a call-back nobody wants.
      </p>

      <h2>When we tell you to replace the jamb instead of splicing it</h2>

      <p>
        Splicing has real limits, and we&apos;d rather draw the line clearly
        than stretch a repair that won&apos;t hold. If rot has traveled well
        past the hinge mortise and up a significant length of the leg, if it
        has reached the sill or the subfloor underneath the threshold, or if
        both jamb legs are compromised rather than just one, a series of
        spliced-in sections stops making sense next to simply setting a new
        frame. The same is true on older houses where the original jamb
        stock doesn&apos;t match anything available today. Matching an odd
        thickness or profile piece by piece can cost more in time than
        replacing the frame outright, which is one of the reasons older
        homes come up so often in this conversation. If that sounds like
        your situation, our page on{" "}
        <Link href="/old-homes">older homes</Link> and our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> breakdown
        both cover the same logic in more depth. Short of that point,
        splicing sound wood back in is a real, durable repair, worth doing
        before anyone prices a{" "}
        <Link href="/doors/replacement">new door</Link>. The rest of what we
        handle is on the main{" "}
        <Link href="/doors/repair">door repair</Link> page, and{" "}
        <Link href="/contact">a couple of photos</Link> of the damaged spot
        usually tells us which category yours falls into before we drive out.
      </p>

      <Faq
        items={[
          {
            q: "How do you know if jamb rot is a repair or a replacement?",
            a: "We probe the wood with an awl in small steps out from the visible damage. If the soft wood stays confined to the bottom few inches of one leg, it's a splice repair. If it has traveled well up the leg, into the sill or subfloor, or shows up on both legs at once, replacing the frame is usually the more sensible call, and we'll tell you which one we're looking at before quoting anything.",
          },
          {
            q: "Can you just fill the rotted section with epoxy instead of cutting it out?",
            a: "Sometimes, but only where the wood isn't carrying real load, like a shallow surface spot away from the hinges. Anywhere the jamb has to hold a hinge screw under the weight and swing of a door, filler eventually cracks loose. That section gets sound wood spliced in instead, glued and screwed into material that passes the probe test.",
          },
          {
            q: "Will the rot just come back after you repair it?",
            a: "Not if the cause gets addressed at the same time, which is part of every jamb repair we do. Rot almost always has a source: splashback, a missing drip cap, a failed caulk joint, or no overhang shedding water off the door. New wood sitting under the same water source rots again within a few seasons, so we point out and, where it's part of the job, correct what's feeding it.",
          },
          {
            q: "How long does a jamb splice repair take?",
            a: "A straightforward splice at one jamb leg is usually a one-day job once we've confirmed the extent of the rot, including cutting out the bad wood, fitting and gluing the new section, and priming every cut face. Repairs that also involve the threshold or extend into the subfloor take longer, and we'll give you a real timeline after the first look rather than a guess over the phone.",
          },
        ]}
      />
    </>
  );
}
