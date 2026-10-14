import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        A storm door is one of the cheapest upgrades you can make to an entry, and on the
        right door it&apos;s worth every dollar: it blocks wind and rain, adds a screen for
        summer, and protects the main door behind it. On the wrong door it can actually do
        harm. The difference comes down to which way the door faces and what it&apos;s made
        of.
      </Lead>

      <p>
        Walk down almost any street in Lititz, Ephrata or New Holland and you&apos;ll see
        storm doors on a lot of the front entries, many of them older aluminum units that
        have been there for decades. They&apos;re common here for good reason. But they
        aren&apos;t automatically right for every door, and a few things are worth knowing
        before you buy one.
      </p>

      <h2>What a storm door actually does</h2>
      <ul>
        <li>
          <strong>Protects the main door.</strong> Rain, snow, and direct weather hit the
          storm door first. That&apos;s a big deal for a wood entry door with no porch
          overhead, because it slows down the weathering that leads to refinishing and rot.
        </li>
        <li>
          <strong>Cuts drafts.</strong> It adds a buffer of still air in front of the main
          door. On an older door that doesn&apos;t seal well, you&apos;ll feel the difference.
        </li>
        <li>
          <strong>Gives you a screen door.</strong> Most storm doors swap or slide between
          glass and screen, so you get a breeze in May without letting the bugs in.
        </li>
        <li>
          <strong>Adds a layer of security.</strong> A locking storm door is one more thing
          between the porch and the house.
        </li>
      </ul>

      <h2>The heat problem nobody mentions</h2>
      <p>
        Here&apos;s the part that doesn&apos;t make it into the sales brochure. A full-glass
        storm door on an entry that faces south or west, in full afternoon sun, traps heat
        in the space between the two doors. That pocket can get hot enough to damage the
        finish on the main door, warp vinyl trim, and on some doors cause problems the
        door&apos;s own warranty won&apos;t cover. Several door manufacturers specifically
        warn about it.
      </p>
      <p>If your entry gets hard afternoon sun, you have options:</p>
      <ul>
        <li>Choose a storm door with a vent, retractable screen, or low-E glass.</li>
        <li>Keep the screen in from late spring through early fall.</li>
        <li>
          Check the warranty terms of your main door before adding one, especially if it&apos;s
          dark-colored fiberglass or vinyl.
        </li>
        <li>Or skip the storm door and put the money into a better primary door.</li>
      </ul>

      <ArticleFigure
        src="/photos/door-porch-white.jpg"
        alt="A white front door on a covered porch"
        caption="A door under a porch roof, out of direct sun, is the easy case. Full-sun entries need more thought."
      />

      <h2>The common styles</h2>
      <ul>
        <li>
          <strong>Full-view.</strong> One big pane of glass that swaps for a full screen in
          summer. Shows off the main door behind it; gives the most light.
        </li>
        <li>
          <strong>Ventilating (high-view or mid-view).</strong> Glass panels that slide down
          to reveal a screen. No swapping panels, and you can open it a little or a lot.
        </li>
        <li>
          <strong>Retractable screen.</strong> The screen rolls up into a cassette when you
          don&apos;t need it, so the door looks like a full-view door most of the year.
        </li>
        <li>
          <strong>Security storm doors.</strong> Heavier frames, steel or wrought-iron
          styling, and stronger locks.
        </li>
      </ul>
      <p>
        Frame material matters too. Aluminum is light and common; heavier-gauge aluminum and
        wood-core doors feel more solid and hold up better to slamming wind.
      </p>

      <h2>When a storm door isn&apos;t worth it</h2>
      <ul>
        <li>
          Your main door is a modern, well-sealed fiberglass or steel door under a porch
          roof. It already does most of what a storm door would do.
        </li>
        <li>
          The entry faces full sun and you don&apos;t want to manage the heat issue.
        </li>
        <li>
          The opening isn&apos;t a standard size and the cost of a custom unit gets close to
          what a better main door would cost.
        </li>
      </ul>

      <h2>Already have one? Fix it before you replace it</h2>
      <p>
        A lot of storm doors that seem worn out just need hardware. The usual failures are
        the pneumatic closer, the wind chain, the latch, and the sweep at the bottom. All
        cheap parts, all replaceable, and we cover them under{" "}
        <Link href="/doors/repair/storm-door-hardware">storm door hardware repair</Link>. A
        bent frame or a door that&apos;s been ripped open by wind is usually a replacement.
      </p>
      <p>
        Storm doors are also one of those topics neighbors love to argue about. If you&apos;re
        on{" "}
        <a href={site.social.nextdoor} target="_blank" rel="noopener">
          Nextdoor
        </a>
        , you&apos;ve probably seen a thread or two, and feel free to ask us there.
      </p>

      <Opinion>
        On an older wood front door with no porch over it, we&apos;ll usually recommend a
        storm door; it pays for itself in refinishing alone. On a new fiberglass door in full
        sun, we&apos;ll usually tell you to skip it. Same product, opposite advice, because
        the door and the sun are different.
      </Opinion>

      <Faq
        items={[
          {
            q: "Are storm doors worth it?",
            a: "On an older or wood main door, especially one exposed to weather, yes: they protect the door, cut drafts, and add a screen. On a modern, well-sealed door under a porch roof, the benefit is small.",
          },
          {
            q: "Can a storm door damage my front door?",
            a: "It can, on entries that get strong afternoon sun. Heat builds up between the glass and the main door and can damage finishes and vinyl components. Vented or low-E storm doors, or switching to the screen in summer, reduce the risk.",
          },
          {
            q: "What's the difference between full-view and ventilating storm doors?",
            a: "A full-view door has one large glass panel that you swap for a screen seasonally. A ventilating door has glass panels that slide to open a screen area, so you never swap panels.",
          },
          {
            q: "Why won't my storm door close properly?",
            a: "Most often it's the pneumatic closer, which wears out and loses pressure, or a loose latch or hinge rail. These are inexpensive hardware repairs, not a reason to replace the door.",
          },
          {
            q: "Do storm doors help with energy bills?",
            a: "They add a buffer against drafts, which helps most on older doors that don't seal well. On a modern insulated entry door the savings are modest; the bigger benefits are weather protection and ventilation.",
          },
        ]}
      />

      <ArticleCTA
        heading="Wondering if a storm door makes sense for your entry?"
        body="We'll look at which way it faces, what the main door is made of, and whether the one you have just needs new hardware."
        href="/doors/replacement/storm-doors"
        label="Get a Quote"
      />
    </>
  );
}
