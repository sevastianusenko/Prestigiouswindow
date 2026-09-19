import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Getting the panel out of the track safely</h2>

      <p>
        A large sliding panel, glass included, can run well over a hundred
        pounds, and it has to come out of the track before any roller work
        happens. That takes two people on anything but a small unit: one
        controlling the top rail so the panel doesn&apos;t tip toward the
        room, one lifting the bottom rail up and in until the rollers clear
        the track lip. On some frames the interior stop moulding has to come
        off first, because the panel needs more vertical clearance to angle
        out than the track alone provides. We lay down protection on the
        sill and the finished floor before any of this starts. A dropped
        panel at this stage is how a simple roller job turns into a glass
        replacement, so we take the extra few minutes rather than rush it.
      </p>

      <FactStrip
        items={[
          { label: "Panel weight", value: "Often 100+ lbs on a full-size slider" },
          { label: "Roller type", value: "Tandem or single, matched to what's already there" },
          { label: "Typical visit", value: "Removal and adjustment same day; parts sometimes ordered" },
          { label: "Lubricant", value: "Dry silicone only, never a penetrating oil" },
        ]}
      />

      <h2>Tandem rollers versus single-wheel assemblies</h2>

      <p>
        Not every sliding door uses the same hardware. Lighter or older doors
        often ride on a single-wheel roller assembly, one wheel per bracket,
        bolted near each bottom corner of the panel. Heavier doors, and most
        anything built in the last couple of decades, use tandem
        assemblies instead, two smaller wheels mounted in one housing, which
        track straighter and spread the panel&apos;s weight more evenly
        across the aluminum sill. We don&apos;t guess which one a door needs.
        The old roller comes out and gets matched physically, bolt spacing,
        wheel diameter, and housing width all have to line up, or we order
        the specific part number if the door&apos;s manufacturer and model
        can be identified from the hardware itself.
      </p>

      <h2>When the exact roller isn&apos;t available anymore</h2>

      <p>
        Sliding doors get discontinued or change manufacturers faster than
        the hardware inside them wears out, so it&apos;s common for the
        original roller assembly to no longer be made by the time it needs
        replacing. When that happens, we work from the physical dimensions
        rather than a part number: wheel diameter, axle height, housing
        width, and where the mounting bolts land on the bottom rail. A
        universal adjustable roller often bridges the gap, built with a
        wider adjustment range specifically to fit openings where the exact
        original part is gone. It has to be set carefully to match the
        original roller&apos;s working height, since guessing at that
        setting is how a universal replacement ends up sitting a panel
        slightly crooked in its track even though the hardware itself is
        sound. We&apos;d rather take the extra time getting that setting
        right than hand back a door that slides but doesn&apos;t sit square.
      </p>

      <h2>Adjusting roller height to square the panel</h2>

      <p>
        Most roller assemblies have an adjustment screw accessible from the
        bottom rail, usually near each corner, that raises or lowers the
        panel in the track a fraction of an inch per turn. The goal isn&apos;t
        just getting the door to slide. It&apos;s an even reveal against the
        jamb on the latch side, correct engagement with the weatherstrip on
        the fixed panel when the door is closed, and a top rail that sits
        square in its own channel rather than leaning into or away from the
        interior stop. We check all three before calling an adjustment done.
        Raise a panel too far and it can bind against the head jamb or pop a
        top corner out of its track guide, so this gets done in small
        increments with the door tested at each step, not cranked to a
        setting and left.
      </p>

      <h2>Track: cleaning, straightening, or replacing</h2>

      <p>
        A track packed with years of grit acts like sandpaper on new rollers,
        so it gets fully cleaned out before any new hardware goes in, not
        just around the area where the door usually sits closed. Beyond
        cleaning, a track that&apos;s dented or slightly bowed, from a dropped
        tool, a bike leaned against the door, or a chair shoved into it, can
        sometimes be worked back straight with a block and light pressure if
        the aluminum is thin enough and the damage is shallow. A sharper
        crease, or a track that&apos;s integrated into the door&apos;s sill
        rather than a separate strip, usually can&apos;t be trued reliably.
        On doors where the track cap is its own replaceable piece, screwed
        down over the structural sill, swapping just that cap is often
        enough. When the damage runs into the sill itself, that&apos;s a
        bigger job, and it&apos;s worth reading our piece on{" "}
        <Link href="/blog/patio-sliding-door-repair">
          diagnosing a sliding door that won&apos;t glide
        </Link>{" "}
        if you want the fuller picture of what separates a hardware fix from
        a frame problem.
      </p>

      <h2>What we lubricate with, and why it isn&apos;t WD-40</h2>

      <p>
        Every roller and track we service gets a dry, silicone-based
        lubricant made for door and window hardware, applied sparingly to the
        wheels and the track itself once everything is clean. We don&apos;t
        use a general penetrating oil like WD-40 for this. It works for a
        week or two and then does the opposite of what you want, because it
        stays tacky longer than a dry lubricant and collects exactly the sand
        and dust a patio door sits next to all summer. A track lubricated
        that way often needs a fresh cleaning within a season, sometimes
        gummed up worse than before anyone touched it. Silicone spray dries
        to a film that doesn&apos;t hold grit the same way, which is the
        whole reason it&apos;s the standard for sliding hardware rather than
        a household catch-all.
      </p>

      <p>
        Once the panel is rehung, adjusted, and sliding evenly with the
        weatherstripping making full contact along both edges, we test it
        under normal use, opening and closing it repeatedly rather than once,
        before calling the visit finished. The rest of what we cover on
        doors is on the main{" "}
        <Link href="/doors/repair">door repair</Link> page, and if the frame
        itself turns out to be the real issue rather than the rollers,{" "}
        <Link href="/doors/replacement">replacement</Link> gets discussed
        honestly rather than assumed.
      </p>

      <Faq
        items={[
          {
            q: "Do you need to remove the whole door to fix the rollers?",
            a: "Yes. The rollers are bolted to the bottom rail underneath the panel, so the panel has to come out of the track to access and replace them. On some doors the interior stop moulding comes off first to give enough clearance to angle the panel free without forcing it.",
          },
          {
            q: "How do I know if I need tandem or single rollers?",
            a: "It depends on what the door was built with, not on preference. We pull the existing roller and match it physically, wheel size, housing width, and bolt pattern, or identify the door's manufacturer and model to order the correct part. Installing the wrong type can leave a panel riding unevenly even after adjustment.",
          },
          {
            q: "Can a bent track be fixed without replacing it?",
            a: "Sometimes. A shallow dent or slight bow in thin aluminum track can often be worked back straight. A sharp crease, or damage to a track that's built into the door's sill rather than a separate strip, usually can't be trued reliably and needs the track cap or sill section replaced instead.",
          },
          {
            q: "Why shouldn't I just spray WD-40 on the rollers myself?",
            a: "It lubricates for a short while, but it stays tacky longer than a proper dry lubricant and attracts dust, sand, and grit, which tends to make a sluggish door worse within a season rather than better. A dry, silicone-based lubricant made for sliding door track is the right product, applied after the track is fully cleaned out.",
          },
        ]}
      />
    </>
  );
}
