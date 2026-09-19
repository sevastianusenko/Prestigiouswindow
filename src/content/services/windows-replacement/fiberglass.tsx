import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Thermal movement", value: "Tracks close to glass, unlike vinyl" },
          { label: "Sightlines", value: "Narrower frame, more glass in the same opening" },
          { label: "Finish", value: "Paintable, including years after install" },
          { label: "Cost vs vinyl", value: "Higher, more noticeable on larger units" },
        ]}
      />

      <h2>Dimensional stability, and why it comes down to expansion</h2>

      <p>
        Every window material expands and contracts with temperature. What
        matters is how much, and how closely that movement matches the glass
        the frame is holding. Glass barely moves across a normal seasonal
        swing. Fiberglass moves at a rate much closer to glass than vinyl
        does, while vinyl expands and contracts considerably more than the
        glass it surrounds across the same temperature range.
      </p>

      <p>
        That mismatch is the real story with vinyl, not a flaw exactly, but
        something a frame has to be engineered around: expansion room built
        into the design, flexible sealant at the glass edge, corner
        construction that can tolerate the frame moving one amount while the
        glass inside it moves a smaller amount. Over enough seasonal cycles,
        and especially on a larger unit where there&apos;s simply more frame to
        move, that mismatch is what stresses the seal around the glass and
        the joints of the frame itself. Fiberglass moving almost in step with
        the glass removes most of that stress from the equation entirely,
        which is exactly why fiberglass shows up disproportionately on
        bigger openings and in climates with wide seasonal swings, where the
        mismatch matters most and has the most room to cause a real problem.
      </p>

      <h2>Structural strength without extra reinforcement</h2>

      <p>
        A vinyl frame on a wide slider or a tall casement often needs
        aluminum or steel reinforcement inserted inside its hollow chambers
        to carry wind load and keep a long span from sagging, an added
        manufacturing step and, over the life of the window, an added place
        where a dissimilar metal is living inside a plastic frame with its
        own separate rate of thermal movement. Fiberglass is strong enough on
        its own, straight from the material itself, that most spans don&apos;t
        need that separate reinforcement at all. That&apos;s one less step in
        manufacturing, one less seam where two different materials have to
        get along inside the same frame, and one less thing that can
        eventually work loose or corrode where you can&apos;t see it.
      </p>

      <h2>Narrower profiles, more actual glass</h2>

      <p>
        Fiberglass is structurally stronger than vinyl for a given wall
        thickness, so a fiberglass frame doesn&apos;t need to be built as thick
        to hit the same structural numbers a vinyl frame needs more material
        to reach. In practice that means a manufacturer can build a genuinely
        narrower visible frame, the sightline, for the same size opening.
        Narrower sightlines mean more glass area and a better view for an
        identical rough opening, a difference that&apos;s easy to miss on a
        small window and hard to miss on a large one, where a few extra
        inches of frame on all four sides adds up to a noticeably smaller
        view.
      </p>

      <h2>Paintability</h2>

      <p>
        Vinyl generally can&apos;t be repainted reliably after install, since
        paint bonds poorly to PVC without special preparation and the
        frame&apos;s own thermal movement works against a painted finish
        holding up. Fiberglass doesn&apos;t have that problem. Because it&apos;s
        dimensionally stable and takes paint the way a properly primed
        exterior surface does, a fiberglass window can be painted at
        install and repainted years later if you want a different color, a
        real flexibility vinyl doesn&apos;t offer once the color is set at the
        factory.
      </p>

      <h2>Where it stands against vinyl on price</h2>

      <p>
        Fiberglass costs more than vinyl, usually noticeably more, for a
        comparable unit. That premium is buying the thermal stability and
        structural strength described above, not a dramatically different
        look from the street on a standard white window. Whether it&apos;s worth
        paying depends heavily on the opening. On a small, sheltered,
        standard-size window, the practical difference between a genuinely
        good vinyl unit and fiberglass over the life of the window may be
        hard to notice. On a large picture window, a wide slider, or a
        house sitting in a genuinely harsh exposure, the stability difference
        is doing real work and the premium is much easier to justify. We do
        not default a whole house to fiberglass without a specific reason
        tied to the actual openings, and we&apos;ll say plainly when a good
        vinyl unit gets you nearly the same result for less.
      </p>

      <p>
        Fiberglass is also chemically inert in a way that matters over
        decades rather than years. It doesn&apos;t rot the way wood can if a
        seal or a joint eventually fails, and it doesn&apos;t corrode the way an
        exposed metal component can in a humid summer. That isn&apos;t the same
        as maintenance-free. The insulated glass seal, the hardware, and the
        exterior finish all still need the same normal attention any window
        needs over time. It just means the frame material itself is rarely
        the part that fails first, which is a different, and generally
        better, failure pattern than what tends to show up on a lower-grade
        vinyl frame under the same conditions.
      </p>

      <Faq
        items={[
          {
            q: "Is fiberglass better than vinyl?",
            a: "It's more dimensionally stable and structurally stronger, which matters more on large openings than small ones. On a standard-size, sheltered window, a good vinyl unit can perform close enough that the extra cost of fiberglass is hard to justify on function alone. It's a tradeoff, not a straightforward upgrade.",
          },
          {
            q: "Can fiberglass windows be painted a different color later?",
            a: "Yes, and that's one of its real advantages over vinyl. Because fiberglass doesn't expand and contract the way vinyl does, a painted finish holds up and can be redone years later if you want to change the color, something vinyl generally can't offer once it leaves the factory.",
          },
          {
            q: "Why does fiberglass cost more than vinyl?",
            a: "It's a more expensive material to manufacture into a window frame, and what that premium buys is dimensional stability close to glass and higher structural strength for the same wall thickness. On small windows that premium is a harder sell; on large openings it's usually worth it.",
          },
          {
            q: "Does fiberglass make sense for a small standard window, or only big openings?",
            a: "It can work anywhere, but the case for it's strongest on larger units and harsher exposures where vinyl's greater thermal movement has more room to cause problems. On a small, sheltered opening, a well-built vinyl window often gets you most of the same performance for less money.",
          },
        ]}
      />
    </>
  );
}
