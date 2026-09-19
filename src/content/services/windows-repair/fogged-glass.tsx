import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>What we&apos;re actually swapping out</h2>
      <p>
        The job is an insulated glass unit replacement. The unit is the sealed
        sandwich of two or three panes, a spacer bar around the perimeter, and
        the edge seal holding it together. On almost every window built in the
        last thirty years, that unit is its own component inside the sash, held
        by snap-in glazing beads, glazing tape, or a bead of compound. We take
        the failed one out and set a new one in. The sash, the frame, the trim,
        the hardware, the caulk line outside, all of it stays where it&apos;s. For
        the background on why edge seals let go, we covered that in our piece
        on{" "}
        <Link href="/blog/foggy-window-seal-repair">foggy window seals</Link>.
        This page is about the work.
      </p>

      <h2>Measuring, which is most of the job</h2>
      <p>
        Glass is cut to order, so the measurement has to be right the first
        time. The number people expect us to take is the glass they can see,
        called the sight line. That isn&apos;t what gets ordered. Somewhere between
        a quarter and a half inch of glass on every edge is buried behind the
        bead or the stop, and the overall dimension includes it. We get at the
        real number by pulling a bead, or by taking the sash out and measuring
        the pocket directly, rather than adding a guess to the visible glass.
        Width and height both get checked in more than one place, because a sash
        that has been in the sun for twenty years isn&apos;t always the rectangle it
        started as, and the smallest reading is the one that has to fit.
      </p>
      <p>
        Overall thickness matters as much as width and height. A three-quarter
        inch unit won&apos;t go into a pocket built for a half inch one, and
        shimming it in isn&apos;t a repair, it&apos;s a callback. Spacer type gets noted
        at the same time. If the original has a bare metal spacer and the new
        one has a warm-edge composite, the sight line can shift slightly, and on
        a wall of matched windows that&apos;s worth knowing before the order goes in
        rather than after.
      </p>
      <p>
        Then the coating. Low-E is a microscopically thin metallic layer applied
        to one specific face of the glass, and the faces are numbered from the
        outside in. The same coating on the wrong surface changes both the
        performance and the reflected color, which is the kind of thing nobody
        notices on the bench and everybody notices from the driveway. If the
        original label is gone, the coating and its surface can still be
        identified in the field. Tempering gets checked at the same time,
        usually from the etched stamp in a corner, because a safety glazing
        location has to go back tempered.
      </p>

      <FactStrip
        items={[
          {
            label: "Measured",
            value: "Overall unit size, not the glass you can see",
          },
          { label: "Sash", value: "Usually stays in the opening" },
          { label: "Order", value: "Custom cut after measuring, never before" },
          { label: "Visits", value: "One to measure, one to install" },
        ]}
      />

      <h2>Install day</h2>
      <p>
        The floor gets covered before anything comes apart, because a unit that
        has been sitting in butyl for fifteen years doesn&apos;t always come out
        gently. Glazing beads come off first. They&apos;re mitered to their own
        corner and they aren&apos;t interchangeable, so they get marked as they come
        out and go back in the same position. The old unit is freed from the
        tape or compound, lifted out, and the pocket is cleaned back to a flat,
        dry surface. Old setting blocks get replaced rather than reused, and the
        new ones are positioned so the unit is carried on the glass edge at the
        quarter points and not resting on a corner.
      </p>
      <p>
        The new unit goes in, gets bedded and sealed, the beads snap back, and
        then the window gets operated. Opened, closed, locked, unlocked, checked
        that the sash still sits square and the lock still draws the meeting
        rail tight. Adding thickness or weight to a sash can change how it
        hangs, particularly on a double-hung with balances sized to the old
        unit, and that&apos;s worth catching while we&apos;re standing there. The old
        glass leaves with us.
      </p>

      <h2>When the sash comes with us instead</h2>
      <p>
        Some sashes are glazed from the exterior. On a first floor that&apos;s a
        minor difference. On a second-story bedroom window it means working off
        a ladder with both hands full of glass, and it&apos;s safer to pull the
        sash, take it to the bench, and bring it back glazed. The same goes for
        wood sashes bedded in compound rather than held by removable beads, and
        for fixed units that have to be disassembled at the corners to release
        the glass. When a sash leaves, a temporary panel goes into the opening
        the same day. Nobody gets left with a hole overnight.
      </p>

      <h2>Lead time, plainly</h2>
      <p>
        Replacement units are fabricated for your opening, so nothing here&apos;s
        stocked in your size. Ordinary clear or Low-E double pane moves fastest.
        Tempered, laminated, obscure patterns, tinted glass, triple pane, and
        any shape that isn&apos;t a rectangle all run longer. We order after
        measuring, and we don&apos;t pull the old unit out of your wall until the
        new one is physically in hand. If that means the hazy window sits a few
        more weeks, it sits. A window with glass in it beats a window with
        plywood in it.
      </p>

      <Faq
        items={[
          {
            q: "Do you have to replace the whole window to fix fogged glass?",
            a: "On most windows built in the last few decades, no. The insulated glass unit is a separate component inside the sash, so we swap the glass and leave the sash, frame, trim, and exterior caulk alone. Full replacement only enters the conversation if the sash or frame has failed on its own, which we would say at the measuring visit.",
          },
          {
            q: "Why does it take two visits?",
            a: "Because the glass has to be measured before it can be ordered, and it's cut to your exact opening. The first visit is measuring and confirming the coating, thickness, and whether the location needs tempered glass. The second visit is the install, which is usually the shorter of the two.",
          },
          {
            q: "Will the new glass match the windows next to it?",
            a: "That's why we record the coating and its surface, the tint, and the spacer before ordering. A unit ordered without checking those can come back slightly different in reflected color even at the correct size. Better to spend the extra minutes at the measurement than explain a mismatched pane later.",
          },
          {
            q: "Can you do several fogged windows in one visit?",
            a: "Yes, and that's the sensible way to do it if more than one unit has gone. They get measured together, ordered together, and installed in the same trip. Sun-exposed elevations tend to fail before shaded ones, so two or three on the same side of a house is a common order.",
          },
        ]}
      />
    </>
  );
}
