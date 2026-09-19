import Link from "next/link";
import { Faq, Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Four seal points, and why they wear at different rates</h2>

      <p>
        A door has four places where weatherstripping has to do real work,
        and they don&apos;t fail at the same pace. The hinge side sees
        almost no rubbing from normal use, since the door doesn&apos;t move
        much relative to the stop on that edge, but it&apos;s exposed to
        sun and heat for years and can go brittle or crack even without much
        physical wear. The latch side takes the opposite kind of abuse:
        every time the door slams shut, that seal gets compressed hard, and
        it&apos;s usually the first of the four to show visible damage. The
        head, the strip across the top of the frame, wears moderately and
        gets overlooked simply because it&apos;s above eye level and nobody
        checks it. The sweep at the bottom has the shortest life of all
        four, taking foot traffic, moisture, grit tracked in on shoes, and
        direct sun if the threshold isn&apos;t shaded, and it&apos;s the one
        most people notice failing first because a draft at floor level is
        the easiest kind to feel.
      </p>

      <h2>Adjustable thresholds: the screws almost nobody notices</h2>

      <p>
        Most aluminum thresholds are adjustable, with small screws set into
        the face or the interior channel of the sill, usually every several
        inches along its length. Those screws raise or lower the threshold
        cap itself, and after years of the sweep compressing it, turning
        them can lift the sill back up to meet the sweep again without
        buying any new material at all. Most homeowners have never noticed
        these screws exist, often because they&apos;re under a coat of paint,
        grime, or a doormat that&apos;s sat in the same spot for years. It&apos;s
        one of the cheapest possible fixes for a drafty door, and it&apos;s
        worth checking before assuming the sweep or the whole threshold
        needs replacing.
      </p>

      <h2>Kerf-in versus adhesive-backed weatherstrip</h2>

      <p>
        There are two fundamentally different ways weatherstripping attaches,
        and they age differently. Kerf-in strip fits into a thin slot, a
        kerf, milled directly into the door or jamb edge during
        manufacturing, with a rigid backing that slides or snaps into that
        slot and holds securely for a long time, often a decade or more
        before it needs attention. Most factory-installed weatherstripping on
        a reasonably modern door is kerf-in. Adhesive-backed foam or rubber
        strip, by contrast, sticks directly to the surface with peel-and-stick
        backing. It&apos;s easier to retrofit onto a jamb that was never
        milled with a kerf, but it has a noticeably shorter service life,
        often needing to be redone every few years rather than lasting a
        decade, since the adhesive itself degrades with temperature swings.
        We use kerf-in wherever a kerf already exists or can reasonably be
        added, and reserve adhesive-backed strip for jambs where cutting a
        kerf isn&apos;t practical, or as a quick interim fix while a bigger
        repair gets scheduled.
      </p>

      <h2>The dollar-bill test and the daylight test</h2>

      <p>
        We use two simple tests to find exactly where a seal is failing
        rather than guessing at which side needs new material. The
        dollar-bill test: close the door on a dollar bill at several points
        around the frame, latch it, then pull the bill out. Even, light
        resistance the whole way around means the seal is doing its job at
        that point. A spot where the bill slides out with no resistance at
        all is a gap. The daylight test works from the inside, either at
        night with the exterior light on or during the day looking for
        points of light around the frame, and it&apos;s sometimes faster at
        pinpointing exactly where a gap is than the feel-based dollar-bill
        method. We generally use both, since they catch slightly different
        kinds of gaps, a compressed seal that still resists a light pull but
        lets air through, versus an actual physical opening you can see
        light through. It&apos;s the same basic diagnostic logic covered in
        our{" "}
        <Link href="/blog/house-window-repair-guide">
          general window and door repair diagnosis guide
        </Link>
        , just applied at the door instead of a window sash.
      </p>

      <Opinion>
        We&apos;d rather do weatherstripping work in September or October
        than in January, and we tell people that even when it means booking
        further out. Foam and rubber weatherstripping compress and take a
        set at roughly whatever temperature they&apos;re installed and
        adjusted at. Fit a sweep or set a threshold height in twenty-degree
        weather, when the door and frame have already contracted from the
        cold, and there&apos;s a real chance it feels too tight once summer
        humidity swells the wood or vinyl back out. Doing this work in
        fall, closer to a year-round average temperature, gives you a fit
        that holds up through both extremes, and it means the fix is in
        place before the heating season actually starts rather than after
        you&apos;ve already paid for a few cold months of a drafty door.
      </Opinion>

      <p>
        Most of this work is inexpensive relative to almost anything else on
        the house, and it&apos;s often the whole fix for a door that feels
        drafty even though nothing about it looks obviously broken. See the
        rest of what we handle on the{" "}
        <Link href="/doors/repair">door repair</Link> page, or{" "}
        <Link href="/contact">reach out</Link> and we can usually tell you
        which of the four seal points needs attention before we come out.
      </p>

      <Faq
        items={[
          {
            q: "My door has weatherstripping and still feels drafty. What's wrong?",
            a: "Weatherstripping fails at four separate points, hinge side, latch side, head, and the bottom sweep, and they wear at different rates. A door can look fine at a glance while one specific section, often the sweep or the threshold, has compressed or worn through. We use the dollar-bill and daylight tests to find exactly which point is letting air through.",
          },
          {
            q: "What are the screws on my door threshold for?",
            a: "Most aluminum thresholds are adjustable, with small screws along the face or interior channel that raise or lower the sill cap. Turning them can lift a compressed threshold back up to meet the sweep again, often solving a draft without buying any new material at all. Many homeowners never notice these screws exist.",
          },
          {
            q: "What's the difference between kerf-in and stick-on weatherstripping?",
            a: "Kerf-in strip fits into a slot milled into the door or jamb and holds securely for a long time, often a decade or more. Adhesive-backed foam or rubber sticks directly to the surface, which makes it easier to add where no kerf exists, but it wears out faster, typically needing to be redone every few years.",
          },
          {
            q: "Why do you recommend doing weatherstripping in fall instead of winter?",
            a: "Weatherstripping compresses and takes a set at close to the temperature it's installed at. Fitting it in very cold weather, when the door and frame have already contracted, can leave it too tight once warm, humid months swell the wood or vinyl back out. Fall gives a fit that holds through both extremes.",
          },
        ]}
      />
    </>
  );
}
