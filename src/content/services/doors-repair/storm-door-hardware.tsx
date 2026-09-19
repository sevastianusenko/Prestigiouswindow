import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>What actually fails, roughly in order</h2>

      <p>
        Storm doors take more daily abuse than any other door on the house,
        opened and slammed by kids, pets, and grocery bags far more than an
        entry door ever is, and the parts that fail are predictable. In
        order of how often we see them:
      </p>

      <ul>
        <li>Pneumatic closers losing tension or starting to slam</li>
        <li>Hold-open washers that no longer catch</li>
        <li>Wind chains, missing, broken, or never installed</li>
        <li>Hinge rails that have sagged or stripped out their screws</li>
        <li>Torn or popped-out screens</li>
        <li>Latch and handle hardware that&apos;s worn or loose</li>
      </ul>

      <p>
        None of these require replacing the door. They&apos;re individually
        small, cheap parts, which is a large part of why storm door repair
        is some of the fastest, lowest-cost work we do.
      </p>

      <FactStrip
        items={[
          { label: "Most common call", value: "Pneumatic closer losing tension" },
          { label: "Cheapest fix", value: "Hold-open washer or wind chain" },
          { label: "Usual visit", value: "Most hardware fixed in one trip" },
          { label: "Replace instead when", value: "Frame is bent or hinge rail has failed" },
        ]}
      />

      <h2>Pneumatic closers: adjustment before replacement</h2>

      <p>
        The closer is the cylinder mounted between the door and the frame
        that controls how it swings shut. When it stops working, most people
        assume it&apos;s worn out entirely, but there&apos;s usually an
        adjustment step first. At the end of the cylinder, near where the rod
        connects, there&apos;s a small screw that controls closing speed, how
        fast the door swings through the last few inches before it latches.
        Turning it one direction slows the door down and cushions the final
        close; turning it the other way speeds it up. A door that slams hard
        is very often just that screw set wrong, not a failed closer. What
        that screw doesn&apos;t fix is a closer that&apos;s genuinely lost
        its internal tension, where the door barely pulls itself shut at
        all no matter how the screw is set. At that point the cylinder is
        done and gets swapped, which is a quick, inexpensive part. Heavier
        storm doors often take two closers rather than one, and a door
        that&apos;s sagging on a single closer because the second mounting
        point was never used is a common, easy fix.
      </p>

      <h2>Hold-open washers and the wind chain</h2>

      <p>
        The hold-open washer is a small clip on the closer&apos;s rod that
        catches at a set position to prop the door open, useful for carrying
        things through without the door swinging shut on you. It wears out
        on its own, independent of the closer itself, and when it does the
        door simply won&apos;t stay propped anymore. It&apos;s a small,
        inexpensive part to replace on its own.
      </p>

      <p>
        The wind chain is a different piece of hardware entirely, and it
        gets treated far too casually. It&apos;s a short safety chain that
        limits how far the door can swing open, and its job is to stop a
        gust of wind from throwing the door past its normal range, which
        would otherwise rip the closer arm loose or tear the hinges out of
        the frame. A missing or broken wind chain isn&apos;t a cosmetic gap.
        It&apos;s the one piece of hardware standing between a windy day and
        real damage to the door and the person standing near it, so we treat
        replacing a broken or missing one as a priority, not an afterthought.
      </p>

      <h2>Hinge rails, screens, and latch hardware</h2>

      <p>
        Storm door frames are thin extruded aluminum, not solid wood, so
        when a hinge screw strips out, simply driving a bigger screw in
        rarely holds for long. The stripped hole usually needs to be filled,
        with an epoxy filler or a repositioned screw location, before the
        hinge is reattached properly. A hinge rail that&apos;s visibly bent,
        often from the door being yanked open past its range without a wind
        chain to stop it, sometimes needs the rail itself replaced rather
        than just the screws.
      </p>

      <p>
        Torn screens are among the simplest repairs here. The screen and its
        spline sit in a removable frame section, and replacing torn mesh is
        usually a short job on its own. Latch and handle hardware, push
        buttons, levers, and the strike they engage, wear out with enough
        cycles like anything else, and given how inexpensive most storm door
        hardware is, replacing the whole latch unit is usually more
        practical than trying to repair the mechanism inside an old one.
      </p>

      <h2>When a storm door is past worth fixing</h2>

      <p>
        There&apos;s a point where individual hardware repairs stop making
        sense. A frame that&apos;s visibly bent or racked from a wind event,
        multiple stripped hinge screw holes on a rail that&apos;s already
        failing, or corners where the frame&apos;s welded or crimped joints
        have separated are all signs the door itself, not just its hardware,
        has reached the end of its useful life. Storm doors are inexpensive
        relative to an entry door, and at that point we&apos;ll say plainly
        that a new storm door is the better use of your money rather than
        stacking repairs on a frame that&apos;s already compromised. Short of
        that, the hardware issues above are worth fixing every time. See the
        rest of what we handle on the{" "}
        <Link href="/doors/repair">door repair</Link> page, or{" "}
        <Link href="/contact">tell us what&apos;s wrong</Link> and we can
        often tell you which category your door falls into before we come
        out.
      </p>

      <Faq
        items={[
          {
            q: "My storm door slams shut. Is the closer broken?",
            a: "Not necessarily. Most closers have a small screw at the end of the cylinder that controls closing speed, and a slamming door is often just that screw set too fast. If adjusting it doesn't slow the door down at all, the closer has likely lost its internal tension and needs to be replaced, which is a quick, inexpensive swap.",
          },
          {
            q: "What does the wind chain on a storm door actually do?",
            a: "It limits how far the door can swing open, stopping a gust of wind from throwing it past its normal range and tearing the closer arm or hinges loose. It's a safety part, not decorative, so a missing or broken chain is worth replacing promptly rather than leaving off.",
          },
          {
            q: "Can a torn screen be replaced without replacing the whole door?",
            a: "Yes. The screen sits in its own removable frame section held in with a spline, and replacing torn mesh is a straightforward, inexpensive repair on its own that doesn't involve the rest of the door.",
          },
          {
            q: "At what point should a storm door just be replaced instead of repaired?",
            a: "When the frame itself is bent or racked, when hinge screw holes are stripped out on a rail that's already failing, or when the corner joints have separated. Individual hardware, closers, washers, chains, screens, and latches, are always worth fixing first, since they're inexpensive parts on an otherwise sound door.",
          },
        ]}
      />
    </>
  );
}
