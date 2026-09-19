import Link from "next/link";
import { Faq, Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>What lifting or leaning on the door actually tells us</h2>

      <p>
        A deadbolt throws into a hole, and that hole has to be in the exact
        path the bolt travels when it extends. When a door won&apos;t lock
        unless you push up on the handle or lean your shoulder into it,
        you&apos;re temporarily forcing the door into the one position where
        that path happens to line up again. That&apos;s not a lock problem.
        The bolt, the cylinder, and the mechanism inside the door are almost
        always fine. What&apos;s moved is the frame, usually from a hinge
        that&apos;s sagged or a jamb that&apos;s settled, dropping or
        shifting the door just enough that the bolt no longer meets its
        strike on its own. We confirm this before touching any hardware,
        because the fix for a moved frame and the fix for worn lock
        hardware are two different jobs, and only one of them is what most
        people are actually dealing with when they call about a sticky
        deadbolt.
      </p>

      <h2>Strike plate adjustment, and when it&apos;s the wrong fix</h2>

      <p>
        For a small amount of misalignment, an eighth of an inch or less,
        shifting the strike plate itself, or filing a slight taper into the
        edge of the strike hole, is a legitimate first-line fix. It&apos;s
        quick and it works fine for minor cases. Where it stops being the
        right answer is when the misalignment is bigger than that. Chasing a
        larger gap by filing the strike hole wider and wider eventually
        removes enough wood around the hole that the strike plate no longer
        has solid material to grab, which weakens exactly the spot that&apos;s
        supposed to resist someone kicking the door in. At that point,
        adjusting the strike is treating the symptom while leaving the actual
        cause, a door that&apos;s no longer hanging square in its frame,
        untouched.
      </p>

      <h2>Hinge-side correction: the repair that actually holds</h2>

      <p>
        For anything beyond a small strike adjustment, the real fix is at
        the hinges, not the latch. Pulling a sagged hinge leaf tight with
        longer screws that reach past the jamb into the framing behind it,
        or reshimming a hinge that&apos;s sitting proud or recessed, moves
        the entire door back into its original position in the opening.
        Done correctly, that often puts the bolt back in line with the
        strike on its own, with no filing needed at all. It&apos;s more work
        than a strike adjustment, but it addresses the actual cause instead
        of compensating for it, and it doesn&apos;t remove any wood from the
        part of the frame that needs to stay strong.
      </p>

      <Opinion>
        We understand the appeal of just filing the strike hole bigger. It&apos;s
        faster, it&apos;s cheaper in the moment, and the door locks again
        right away. But a strike hole that&apos;s been opened up to chase a
        half-inch of hinge sag is a strike plate held by thin wood, and
        that&apos;s the exact hardware a forced entry attempt tests first.
        We&apos;d rather spend the extra time at the hinges and hand you back
        a door that locks properly without having weakened the one part of
        the frame built to resist someone trying to force it.
      </Opinion>

      <h2>Deadbolt throw depth and strike box depth</h2>

      <p>
        The bolt itself has to fully extend into a strike box, a metal
        pocket mortised into the jamb behind the strike plate, deep enough
        to seat the bolt&apos;s full throw. On some older installations
        there&apos;s no real strike box at all, just a plate screwed over a
        shallow, hand-chiseled recess, which means the bolt is only ever
        partially engaged even when the alignment looks fine. Part of a
        proper lock repair is checking that depth and installing or
        deepening a real strike box where one is missing or too shallow,
        not just resetting the plate over the same inadequate pocket.
      </p>

      <h2>Rekeying and hardware swaps are a separate job</h2>

      <p>
        Alignment repair gets the existing lock working the way it&apos;s
        supposed to. It doesn&apos;t include rekeying the cylinder to a new
        key or swapping in heavier-duty hardware, and we treat those as
        their own small scope rather than bundling them in automatically.
        If we&apos;re already out for an alignment repair, both are easy to
        add to the same visit, but they get their own pricing since they&apos;re
        genuinely separate work: a rekey changes the pins inside the
        cylinder, a hardware swap replaces the visible lockset entirely,
        and neither one has anything to do with whether the frame is square.
      </p>

      <p>
        Most lock and latch calls turn out to be this same story, a frame
        that&apos;s moved rather than a lock that&apos;s failed, which is
        also the most common cause behind a door that sticks in general.
        See the full range of what that covers on our{" "}
        <Link href="/doors/repair">door repair</Link> page, or{" "}
        <Link href="/contact">send us a photo</Link> of the gap around the
        latch and we can often tell you which fix you need before we come
        out.
      </p>

      <Faq
        items={[
          {
            q: "My deadbolt only locks if I lift or push the door. Is that the lock or the door?",
            a: "It's the door, not the lock. Lifting or pushing temporarily forces the door into the one position where the bolt happens to line up with the strike, which means the frame has moved, usually from a settled or sagging hinge, rather than anything being wrong with the lock mechanism itself.",
          },
          {
            q: "Can you just make the strike hole bigger to fix a misaligned lock?",
            a: "For a small amount of misalignment, yes, and it's a legitimate quick fix. For anything larger, filing the hole wider removes wood the strike plate needs to stay secure, so we correct the hinge side instead, which realigns the whole door rather than weakening the frame to compensate for it.",
          },
          {
            q: "Does fixing the lock alignment also fix a door that sticks?",
            a: "Often, yes, since both usually trace back to the same sagged hinge or settled frame. Correcting the hinge side that's causing the lock misalignment frequently resolves sticking or dragging at the same time, because it's the same root cause showing up in two places.",
          },
          {
            q: "Do you rekey locks or just repair the alignment?",
            a: "We do both, but they're separate jobs. Alignment repair gets your existing lock working correctly again. Rekeying changes what key operates it. If we're already out for an alignment repair, adding a rekey or a hardware upgrade to the same visit is easy, priced as its own line rather than bundled in automatically.",
          },
        ]}
      />
    </>
  );
}
