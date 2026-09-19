import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Three seals, and usually only one is actually leaking</h2>
      <p>
        A window that feels drafty is sealed in three separate places, and
        they fail on different schedules for different reasons, which is why
        we check them independently rather than replacing everything at
        once. The sash seal is the weatherstrip running around the sash
        itself, compressed against the frame when the window is locked. The
        meeting rail is the horizontal seal where the top and bottom sashes
        of a double-hung overlap and lock together, a joint that takes more
        wear than any other point on the window because it moves every time
        the sash does. The perimeter is the caulk line between the outer
        frame and the rough opening in the wall, which has nothing to do with
        the window mechanism at all and everything to do with how the unit
        was installed years or decades ago.
      </p>
      <p>
        All three feel roughly the same to a hand held near the glass on a
        windy day, which is exactly why guessing gets people nowhere. We
        check the sash seal by running a hand along the compression point
        with the window locked, looking for gaps, flattened or missing
        weatherstrip, or a lock that isn&apos;t actually pulling the sash tight
        anymore. The meeting rail gets the same treatment, plus a look at
        whether the lock itself is drawing the rails together the way it&apos;s
        supposed to, since a worn or misaligned lock can leave a visible gap
        even with good weatherstrip underneath it. The perimeter caulk gets
        checked from outside, looking for cracking, separation from the
        siding or trim, or caulk that has simply aged out and pulled away
        from one side of the joint. Whichever one is actually failing gets
        fixed. The other two get left alone rather than resealed on a
        guess.
      </p>

      <h2>The weatherstrip types we actually replace</h2>
      <p>
        Weatherstrip isn&apos;t one product, and matching the right type to the
        channel it sits in matters more than most people expect. Leaf
        weatherstrip is a thin strip of metal or vinyl, sometimes called a
        fin seal, set into a track and designed to flex against the sash as
        it slides past. Bulb weatherstrip is a compressible tube, usually
        vinyl or foam-backed, that seals by being squeezed flat when the sash
        closes against it, common on meeting rails and sash stops. Pile
        weatherstrip, sometimes called brush seal, is a dense strip of fuzzy
        fiber set into a slot, most often found on sliding windows and
        casements where a sash moves across the seal rather than compressing
        straight into it. Kerf-in weatherstrip is a specific profile
        engineered to snap into a narrow slot, or kerf, routed directly into
        the frame or sash, standard on a lot of newer vinyl and wood windows
        and not something a generic peel-and-stick strip from a hardware
        store can substitute for. Getting the profile wrong means it either
        doesn&apos;t seat in the channel at all or seats loosely enough that it
        stops sealing within a season.
      </p>

      <h2>Re-glazing: a separate draft source on older wood windows</h2>
      <p>
        On a wood window with individual panes set in glazing putty rather
        than a single sealed unit, the putty itself is a fourth seal that
        weatherstripping never touches. Glazing compound dries out, cracks,
        and eventually falls away from the edge of the glass over years of
        sun and temperature swings, and where it has gone missing, air moves
        straight around the pane rather than through the sash or meeting
        rail at all. A window can have brand new weatherstripping on every
        moving joint and still feel drafty if the glazing along the panes
        has failed, which is why we check the glazing lines on any older wood
        window at the same visit rather than assuming weatherstrip is the
        whole story. Re-glazing is its own job, removing what is left of the
        old putty, cleaning the rabbet, and bedding the pane in fresh
        compound, and it gets quoted separately from the weatherstrip work
        since the labor and material are different.
      </p>

      <h2>Doing this ahead of winter, not during it</h2>
      <p>
        Fall is the right time for this work, not because a draft in
        December is any harder to fix, but because the materials involved
        want mild weather to do their job properly. Fresh glazing compound
        and exterior caulk both need time and a reasonable temperature range
        to cure before they get tested by freezing overnight lows, and a
        weatherstrip profile that has to be special ordered to match an
        original channel takes lead time that&apos;s easier to plan for in
        October than to wait out in January with a cold room. We would
        rather do this work while it&apos;s comfortable to have windows open for
        twenty minutes at a time and the compound has weeks to set, not the
        week the first hard freeze already made the point for us.
      </p>
      <p>
        For the broader picture of how to sort a draft from other window
        complaints before calling anyone, our{" "}
        <Link href="/blog/house-window-repair-guide">
          guide to diagnosing window problems
        </Link>{" "}
        walks through that process in more depth. This page is about what
        the repair visit itself involves once the source is known.
      </p>

      <Faq
        items={[
          {
            q: "How do you tell which seal is actually causing a draft?",
            a: "By checking the sash seal, the meeting rail, and the perimeter caulk separately, since they fail for different reasons and all three feel similar to a hand held near the glass. We test the lock and compression at the sash and meeting rail, and inspect the caulk line from outside, before deciding what actually needs replacing.",
          },
          {
            q: "Can weatherstripping alone fix a drafty window, or does the glass matter too?",
            a: "It depends on the window. On most modern windows, worn weatherstrip is the main draft source and replacing it solves the problem. On older wood windows with individual glazed panes, cracked or missing glazing putty around the glass is a separate seal that weatherstripping doesn't touch, and both may need attention.",
          },
          {
            q: "What kind of weatherstripping do you install?",
            a: "Whatever matches the channel already built into your window: leaf, bulb, pile, or kerf-in profiles. We match the original type rather than substituting a generic peel-and-stick strip, since the wrong profile either won't seat in the channel or stops sealing within a season.",
          },
          {
            q: "Why should I get this done before winter instead of waiting until it's cold?",
            a: "Glazing compound and exterior caulk both need mild weather to cure properly, and some weatherstrip profiles have to be ordered to match an original channel, which takes lead time. Doing this work in fall means it's fully cured and in place before the first hard freeze tests it, rather than being installed under pressure once a room is already cold.",
          },
        ]}
      />
    </>
  );
}
