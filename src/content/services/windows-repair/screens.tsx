import Link from "next/link";
import { Faq, Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Re-screening an existing frame, or building a new one</h2>
      <p>
        A torn or sagging screen almost always falls into one of two repairs,
        and telling them apart takes about thirty seconds at the window. If
        the aluminum or fiberglass frame around the mesh is still straight
        and the corners are still tight, that&apos;s a re-screen: the old mesh
        comes out, new mesh gets stretched across the same frame and locked
        in with a fresh spline, and the frame goes back into the same track
        it came out of. If the frame itself is bent, a corner joint has
        pulled apart, or it no longer sits flat in the track, new mesh in a
        damaged frame just tears again or leaves a gap for insects to get
        through around the edge, so that gets a new frame built rather than
        re-screened. We check the frame first, not just the mesh, because
        re-screening a frame that won&apos;t hold its shape is a repair that
        doesn&apos;t last the season.
      </p>

      <h2>Mesh options, honestly explained</h2>
      <p>
        Standard fiberglass mesh is the default for a reason: inexpensive,
        easy to work with, and it does the basic job of keeping insects out
        without noticeably affecting the view or airflow. It&apos;s also the
        least durable option, and it will tear again eventually from a pet,
        a stray branch, or years of sun exposure making it brittle. Aluminum
        mesh holds its shape better and resists denting and puncturing more
        than fiberglass, at the cost of being stiffer to work with and
        showing corrosion over time in a way fiberglass never will.
        Pet-resistant mesh, a thicker vinyl-coated polyester, genuinely holds
        up to a determined cat or dog far better than fiberglass, but it&apos;s
        heavier, slightly reduces airflow and visibility, and needs a frame
        in good condition to support the added weight without sagging. Solar
        or shade mesh is a darker, tightly woven mesh that cuts glare and
        heat, genuinely useful on a west-facing opening that gets hammered by
        afternoon sun, but it also darkens the view from inside more than
        any of the other options and
        isn&apos;t something most people want on every window in the house. None
        of these is the universally correct choice. Each one trades something
        away for what it&apos;s good at, and we would rather explain the trade
        than default to whatever is fastest to install.
      </p>

      <h2>Spline and corner key repair</h2>
      <p>
        Spline is the thin rubber cord that presses mesh into a groove
        running around the inside of the frame, and it does as much of the
        actual holding as the frame itself. Old spline dries out, cracks, and
        loses its grip long before the mesh above it looks worn, which is
        why every re-screen includes fresh spline rather than reusing what is
        already there. Corner keys are the small plastic or metal connectors
        that join the frame rails at each corner, and when one cracks or
        works loose, that corner of the frame loosens even if the mesh and
        spline are both fine, letting the whole frame twist slightly out of
        its rectangle. A cracked corner key gets replaced on its own where
        the aluminum extrusion itself is still straight. Where the extrusion
        has bent along with the failed corner, that points back to a new
        frame rather than a single-part fix.
      </p>

      <h2>Custom sizing for older homes</h2>
      <p>
        Plenty of homes around Lancaster County predate the standard window
        sizes that hardware-store screen kits are built around, and on those
        houses a generic kit usually doesn&apos;t fit the track at all, or gets
        forced in and pops back out within a season. When that&apos;s the
        situation, the screen frame gets custom cut to the actual opening
        rather than the nearest stock size, the same way the window itself
        was likely never a size you would find on a shelf either. This comes
        up often enough on{" "}
        <Link href="/old-homes">older homes with original openings</Link>{" "}
        that we keep raw aluminum stock on hand specifically for it, rather
        than treating every custom size as a special order.
      </p>

      <h2>Spring is the busy season for a reason</h2>
      <p>
        Screens get put back in around the same few weeks every year, right
        as people start opening windows again after winter, and that means
        spring is consistently our busiest stretch for this particular
        repair. It&apos;s worth knowing going in that lead times on custom frames
        run a little longer in April and May than they do in October, simply
        because more of them are in the queue at once. None of that changes
        what the job involves, and we take screen calls year round, but
        anyone thinking ahead about a known tear or a bent frame saves
        themselves a longer wait by calling before the first warm week
        rather than during it.
      </p>

      <Opinion>
        <p>
          We take these on purpose. A screen repair is a small job, sometimes
          barely worth the drive on its own, and plenty of companies built
          around full replacement sales quietly don&apos;t answer this kind of
          call at all, or quote it high enough that it stops making sense to
          the person asking. We would rather be the company that shows up
          for the small stuff, because someone whose screen we fixed for not
          much money is exactly the person who calls us, or tells a neighbor
          to call us, when a real window job comes along later.
        </p>
        <p>
          For a longer look at why this kind of small repair gets skipped by
          a lot of companies and what else falls into that same category,
          our piece on{" "}
          <Link href="/blog/window-screens-casings-small-jobs">
            screens, casings, and the jobs bigger companies skip
          </Link>{" "}
          covers that in more depth.
        </p>
      </Opinion>

      <Faq
        items={[
          {
            q: "Do you re-screen existing frames or only sell new ones?",
            a: "Both, depending on the frame. If the existing frame is still straight and the corners are tight, we re-screen it with fresh mesh and spline. A new frame only gets built when the old one is bent, cracked at a corner, or no longer sits flat in the track.",
          },
          {
            q: "What mesh should I choose if I have pets or a lot of afternoon sun?",
            a: "For pets, a pet-resistant vinyl-coated mesh holds up to claws far better than standard fiberglass, though it's heavier and slightly reduces visibility. For a window that takes a lot of direct afternoon sun, solar or shade mesh cuts glare and heat but darkens the view more than a standard screen. We can put either on just the windows that need it rather than the whole house.",
          },
          {
            q: "Can you build a screen for an older home with a non-standard window size?",
            a: "Yes, and it comes up regularly. Older homes frequently have openings that predate standardized window sizing, so a hardware-store screen kit doesn't fit correctly. We cut the frame to your actual opening instead of the nearest stock size.",
          },
          {
            q: "Is spring really the busiest time for screen repair?",
            a: "Generally, yes, since most people notice a torn or missing screen right as they start opening windows again for the season. We take these calls year round, but custom frames take a little longer to turn around in spring than they do in fall simply because more are in the queue at once.",
          },
        ]}
      />
    </>
  );
}
