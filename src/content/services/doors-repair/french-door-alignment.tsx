import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Why one small error becomes an obvious problem on a pair</h2>

      <p>
        On a single door, one edge closes against a stop, and a gap of an
        eighth of an inch along that edge is barely noticeable. On a French
        pair, the two leaves don&apos;t close against a stop at their meeting
        edge, they close against each other, down the center of the opening
        where the eye naturally lands. The same eighth-inch of hinge sag
        that would go unnoticed on a single door shows up as a visible wedge
        of light, a step where one leaf sits proud of the other, or a gap
        you can feel with a fingertip right where the two doors are supposed
        to meet flush. Every source of misalignment that affects a single
        door, hinge sag, frame settling, a slightly swollen slab, still
        applies to each leaf of a French pair. The difference is that a
        pair has nowhere to hide the error, because both edges have to agree
        with each other, not just with a fixed jamb.
      </p>

      <h2>The astragal and the flush bolts on the inactive leaf</h2>

      <p>
        Most French pairs have one active leaf, the one used for daily
        traffic, and one inactive leaf that stays closed most of the time.
        The inactive leaf&apos;s meeting edge usually carries an astragal, a
        vertical strip that the active leaf closes against, which provides
        both the seal between the two doors and the surface the active
        leaf&apos;s lock actually engages into. Many French door locksets
        don&apos;t throw into the jamb at all. They throw into the edge of
        the inactive leaf itself. That leaf is held rigid by flush bolts,
        usually one at the top and one at the bottom, that extend into
        strike holes in the head jamb and the sill or threshold. If those
        bolts don&apos;t seat cleanly and fully, the inactive leaf isn&apos;t
        actually rigid, and no amount of adjusting the active leaf&apos;s
        lock will make it engage properly, because the target it&apos;s
        supposed to meet is itself loose.
      </p>

      <h2>The order matters: inactive leaf first, then the active leaf to it</h2>

      <p>
        We always adjust the inactive leaf first and get it right before
        touching the active leaf. That means correcting its hinges and
        shimming until it sits plumb and square in the opening on its own,
        and confirming the flush bolts engage smoothly into their strikes
        top and bottom without forcing. Only once that leaf is a fixed,
        reliable reference do we move to the active leaf, adjusting its
        hinges so its meeting edge sits evenly against the astragal along
        the full height of the door and its lock lines up cleanly with the
        strike in the inactive leaf&apos;s edge. Doing this in the other
        order means adjusting the active leaf against a target that hasn&apos;t
        actually been fixed yet, which turns into a loop of chasing a moving
        reference instead of solving the actual misalignment.
      </p>

      <h2>Hinge shimming across both leaves, not just one hinge</h2>

      <p>
        On a single sticking door, one hinge is often the whole problem, and
        shimming that one hinge solves it. French doors get a more thorough
        pass, because a slight twist in either leaf shows up as an uneven
        line along the entire meeting edge rather than a rub at one corner,
        and a twist can originate at any of the three or four hinges on that
        leaf. We check and, where needed, shim at every hinge on both doors,
        adjusting front-to-back position and side-to-side plane until each
        leaf hangs true on its own before we look at how the two meet each
        other. It takes longer than a single-door hinge adjustment, but a
        pair that&apos;s only half corrected still shows the error clearly
        down the middle, which defeats the point of the repair.
      </p>

      <h2>Seasonal movement on exterior French doors</h2>

      <p>
        Exterior French pairs move with the seasons more noticeably than a
        single exterior door does, simply because the tolerance at the
        meeting edge is tighter to begin with. Wood doors expand slightly in
        humid months and contract in dry, cold ones, and even fiberglass or
        composite doors shift a little with temperature swings in their
        frames and hardware. An adjustment that looks perfect in October can
        show a hairline gap by the following July, not because anything
        failed, but because the seasonal cycle moved both leaves slightly.
        This is especially common on older houses, where the surrounding
        framing itself moves with the seasons on top of the door, something
        we cover in more depth on our{" "}
        <Link href="/old-homes">older homes</Link> page. A small seasonal
        recheck is normal and not a sign the first repair was done wrong.
        For the rest of what we handle on doors, see{" "}
        <Link href="/doors/repair">door repair</Link>, and if a pair has
        settled badly enough that alignment alone won&apos;t solve it,{" "}
        <Link href="/repair-or-replace">repair or replace</Link> walks
        through how we make that call, or{" "}
        <Link href="/contact">reach out</Link> and we&apos;ll take a look.
      </p>

      <Faq
        items={[
          {
            q: "Why do French doors go out of alignment more than a single door?",
            a: "Because the two leaves close against each other rather than against a fixed stop, so any hinge sag or frame movement shows up as a visible gap or step right down the middle where both edges are supposed to meet. The same amount of movement on a single door would barely be noticeable.",
          },
          {
            q: "Which leaf do you adjust first on a French door pair?",
            a: "The inactive leaf, the one held by flush bolts at the top and bottom rather than opened daily. It has to be plumb, square, and fully engaged in its strikes first, because the active leaf gets adjusted to meet it. Doing it the other way around means chasing a target that hasn't been fixed yet.",
          },
          {
            q: "My French door lock doesn't line up even though the doors close fine. What's wrong?",
            a: "On many French door sets, the lock throws into the edge of the inactive leaf itself rather than into the jamb. If that leaf's flush bolts aren't fully seated, the leaf isn't truly rigid, and the active leaf's lock won't engage properly even if the doors appear to close normally.",
          },
          {
            q: "Do French doors need to be readjusted every season?",
            a: "Not usually, but a small recheck from time to time is normal, especially on exterior pairs and older homes where the frame itself moves seasonally. It's not a sign the original repair failed. It's the same wood or frame movement that affects any exterior opening, just more visible on a pair.",
          },
        ]}
      />
    </>
  );
}
