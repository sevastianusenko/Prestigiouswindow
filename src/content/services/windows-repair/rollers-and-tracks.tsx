import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>How sliding hardware carries the load</h2>
      <p>
        A sliding window, whether it&apos;s a horizontal slider or a double-hung
        riding in a modern vinyl jamb, doesn&apos;t rest its full weight on the
        frame the way a fixed pane does. The sash sits on a set of small
        wheels, usually two per sash, mounted on an axle near the bottom
        corners, and those wheels carry the entire weight of the glass and
        frame across a metal or vinyl track every time the window moves. It
        is a small point of contact doing a lot of work, and it&apos;s built to
        do that work smoothly, not to be dragged, slammed, or forced past a
        spot where it has started to bind. When a slider starts feeling
        heavy or gritty instead of gliding, the wheels or the track they ride
        in are almost always where that resistance is actually coming from.
      </p>

      <h2>Flat-spotting, and why forcing it ruins the new roller too</h2>
      <p>
        A window left in one position for months or years develops a flat
        spot on whichever wheel is bearing weight at that exact point of
        contact, the same way a car tire develops a flat spot sitting in one
        place too long. Once that flat spot forms, the wheel no longer rolls
        smoothly, it thumps or catches with every rotation, and the sash gets
        harder to move the longer it sits. The instinct at that point is to
        push harder, and that&apos;s exactly the wrong move. Forcing a sash over
        a flat-spotted wheel or through a track packed with grit doesn&apos;t
        free it, it grinds the wheel further out of round and can bend or
        gouge the track it&apos;s riding in. Install a brand new roller into a
        track that&apos;s still bent or still full of the debris that damaged
        the old one, and the new roller flat-spots or seizes on the same
        timeline the old one did. That&apos;s why the track always gets cleaned
        and checked at the same visit as the roller, not treated as a
        separate problem for another day.
      </p>

      <h2>Straightening a track versus replacing it</h2>
      <p>
        Aluminum and vinyl tracks take a surprising amount of abuse before
        they need full replacement. A track that has been bent by a sash
        forced off its rollers, or dented by something set on the sill, can
        often be straightened back into a true, flat channel with the right
        tool and some patience, and that gets the existing hardware running
        smoothly again without replacing anything structural. What doesn&apos;t
        straighten out is a track that has worn a visible groove from years
        of a flat-spotted wheel grinding across the same few inches, or one
        that has corroded or pitted badly enough that a new roller won&apos;t
        seat evenly across it. That kind of wear isn&apos;t cosmetic. It changes
        the shape of the surface the roller depends on, and a new roller
        riding on an uneven track wears unevenly too. At that point,
        replacing the track section is the actual fix, not a temporary
        straightening job that buys another few months.
      </p>

      <h2>The right lubricant, and why the wrong one makes it worse</h2>
      <p>
        A dry, silicone-based lubricant is what goes into a track and onto
        the wheel axles, and it&apos;s worth saying plainly what doesn&apos;t belong
        there: a general-purpose penetrating oil isn&apos;t the right product for
        this job, even though it&apos;s the first thing most people reach for.
        Penetrating oil is wet and stays wet, which means it collects
        airborne dust, pollen, and grit rather than shedding it, and within a
        season that same lubricant has turned into the gritty paste that
        causes the binding in the first place. Silicone-based lubricant dries
        to a thin, slick film that doesn&apos;t attract debris the same way,
        which is exactly what a track exposed to an open window needs.
      </p>

      <FactStrip
        items={[
          { label: "Lubricant", value: "Dry, silicone-based only, never a wet penetrating oil" },
          { label: "Rollers", value: "Matched by wheel diameter and axle type, not universal" },
          { label: "Track", value: "Straightened where possible, replaced where worn or grooved" },
          { label: "Tested", value: "Full range of motion checked before we leave" },
        ]}
      />

      <h2>When the sash itself is the real problem</h2>
      <p>
        Not every slider that drags has bad hardware. A sash that has sagged
        or racked slightly out of square rubs against its own frame
        regardless of how new the rollers are, and no amount of track
        cleaning or lubricant fixes friction that&apos;s coming from the frame
        pinching the sash rather than the wheels binding in the channel. We
        check for this before quoting a hardware swap, since replacing
        rollers on a sash that&apos;s actually the problem fixes nothing and
        leaves the same drag in place. When that&apos;s what is actually going
        on, the honest answer is a different repair, sometimes a bigger one,
        and we say so rather than selling hardware that was never going to
        solve it. Our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        covers how we think about that decision more generally.
      </p>
      <p>
        For the broader picture of sorting a hardware problem from every
        other kind of window complaint, our{" "}
        <Link href="/blog/house-window-repair-guide">
          window repair diagnosis guide
        </Link>{" "}
        is a useful starting point before calling anyone. This page is about
        what the roller and track repair itself actually involves.
      </p>

      <Faq
        items={[
          {
            q: "Why does my sliding window feel heavy or grind when I move it?",
            a: "Almost always a flat-spotted roller or a track packed with dust and grit. A wheel that has sat in one position for a long time develops a flat spot and stops rolling smoothly, and forcing the sash past that point grinds the wheel further out of round and can damage the track underneath it.",
          },
          {
            q: "Can the track be fixed without replacing the whole window?",
            a: "In most cases, yes. A bent track can often be straightened back into shape, and a worn or grooved section can be replaced without touching the sash, glass, or frame around it. Full window replacement only makes sense if the frame itself has failed, not because a track needs attention.",
          },
          {
            q: "What kind of lubricant should be used on window tracks?",
            a: "A dry, silicone-based lubricant, not a general-purpose penetrating oil. Penetrating oil stays wet and attracts dust and grit, which turns into the gritty buildup that causes binding in the first place. Silicone-based lubricant dries to a thin film that resists collecting debris.",
          },
          {
            q: "How do I know if it's the rollers or the sash itself that's the problem?",
            a: "If the sash drags evenly across the whole track and feels gritty or thumps as it moves, that points to the rollers or track. If it binds at one specific spot regardless of the hardware, or feels like it's being pinched by the frame rather than dragging along it, the sash itself may be out of square, which is a different repair. We check both at the same visit.",
          },
        ]}
      />
    </>
  );
}
