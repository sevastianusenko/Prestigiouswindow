import Link from "next/link";
import { Faq, Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Two systems, and only two</h2>
      <p>
        Every double-hung window we repair uses one of two balance systems,
        and the repair looks different depending on which one is behind the
        trim. Vinyl windows and most modern wood and fiberglass windows use a
        spring balance set into a channel routed in the side jamb, either a
        coil spring in a tube or a spiral, constant-force rod preloaded with
        torque. A small shoe rides in that channel and clips onto a pin on
        the side of the sash, carrying the tension straight from the spring
        to the weight of the glass and frame. Older wood double-hungs, most
        of what is original to houses built before the 1950s, use a cord or
        chain running over a pulley at the top of the jamb down to a cast
        iron weight hidden in a pocket behind the interior trim. Two
        completely different mechanisms, built decades apart, doing the same
        job in different ways.
      </p>

      <h2>Identifying which one you have before opening anything</h2>
      <p>
        Figuring out which system is behind a given window doesn&apos;t usually
        require opening anything up first. A sash that tilts in toward the
        room for cleaning is built around a spring balance almost every time,
        since a cord-and-weight sash isn&apos;t designed to tilt. A jamb with a
        visible plastic or aluminum track running its length, rather than
        plain painted wood, points the same direction. On older wood windows,
        a small access panel low on the jamb, sometimes painted over so many
        times it has to be found by feel rather than by sight, covers the
        weight pocket, and a pulley wheel at the top corner of the jamb,
        visible once the sash is raised, confirms a cord system before any
        trim comes off. Getting this right first matters, because the two
        repairs use entirely different parts and entirely different access
        points, and starting down the wrong path means undoing work that did
        not need doing in the first place.
      </p>

      <h2>Freeing a painted-shut sash without breaking glass or the finish</h2>
      <p>
        Decades of repainting without anyone cutting the paint line first is
        the most common reason a sash won&apos;t move at all, and it&apos;s also
        the easiest way to damage a window when someone tries to force it
        open. We run a stiff blade or a purpose-built zipper tool along the
        seam between the sash and the stop, and along the meeting rail if
        both sashes are involved, cutting through the paint film before any
        pressure goes on the frame itself. Once that seam is cut clean on
        both sides, gentle, even pressure from a padded block, never a
        screwdriver braced against the glass or a muntin, walks the sash free
        without cracking a pane or splitting a thin piece of wood that has
        been in place for a hundred years. On original trim worth keeping
        intact, that paint line gets cut carefully enough that the finish on
        either side isn&apos;t chipped or scored in the process, since the point
        of this repair is a window that moves, not a window that moves and
        now needs a fresh coat of paint to look right again.
      </p>
      <p>
        Once the sash is free, the balance gets tested through its full range
        rather than left to prove itself the first time a homeowner opens the
        window after we leave. That means raising and lowering it several
        times, checking that it holds level at a few different heights, and
        confirming both sides carry their share of the weight evenly rather
        than one side doing most of the work while the other drags.
      </p>

      <Opinion>
        <p>
          This is one of the least expensive repairs we do, and one of the
          ones people are most surprised by. A balance failure looks and
          feels dramatic, a sash slamming shut on its own or a window that
          won&apos;t budge at all, but the part that actually failed is small,
          cheap, and accessible without touching the glass, the frame, or
          anything structural.
        </p>
        <p>
          We would rather quote the half hour of labor and the one part it
          actually needs than let someone walk into a full replacement
          conversation over a problem this contained. Plenty of the sashes we
          free up or rebalance are otherwise in fine shape, on{" "}
          <Link href="/old-homes">original wood windows</Link> included, with
          years of service left once the actual mechanism is working the way
          it was built to.
        </p>
      </Opinion>

      <p>
        For a deeper look at how both balance systems actually work and how
        to tell a balance problem apart from other window complaints, our
        piece on{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          window balance repair
        </Link>{" "}
        covers that side of it. This page is about the repair visit itself.
      </p>

      <Faq
        items={[
          {
            q: "Do you work on both spring balances and old cord-and-weight windows?",
            a: "Yes. They're different repairs with different parts, but we service both regularly, and identifying which one is behind your window is part of the same visit, not a separate diagnostic trip.",
          },
          {
            q: "Will freeing a painted-shut sash damage the wood or the paint finish?",
            a: "Not when the paint seam is cut first. Cutting through the paint film along the sash and stop before applying any pressure is what keeps the finish intact and keeps the wood from splitting. Forcing a painted-shut sash without that step is exactly what causes the damage people are worried about.",
          },
          {
            q: "How do you know which balance system is behind my window without opening the wall?",
            a: "A tilt-in sash, a visible track running down the jamb, or a pulley wheel at the top of the jamb are all visible clues that tell us which system is in play before any trim comes off. That gets confirmed at the same visit where the repair happens.",
          },
          {
            q: "Is balance repair really one of the cheaper window repairs?",
            a: "Generally, yes. The part itself is inexpensive and the labor is usually well under an hour per sash once the paint seam, if there's one, is cut clean. It's consistently one of the smallest invoices we write relative to how urgent the problem feels to the person living with it.",
          },
        ]}
      />
    </>
  );
}
