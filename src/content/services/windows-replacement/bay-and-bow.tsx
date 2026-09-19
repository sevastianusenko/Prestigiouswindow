import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>The structure above the opening does real work</h2>

      <p>
        A bay or bow window isn&apos;t just a wider window, it&apos;s a wider hole in
        a wall that was framed to carry roof and floor loads down through
        that section. Take out enough wall for a bay and the header above the
        opening, the beam that used to have studs directly below it, has to
        carry that load across a much longer span on its own. On a standard
        double-hung swap the existing header is almost always fine as is. On
        a bay or bow, sizing that header correctly, or confirming the
        existing one is already adequate, is the first real decision on the
        job, not an afterthought.
      </p>

      <p>
        What holds the window itself out from the wall is a separate
        question from what holds up the wall above it. Bay and bow units
        project out twelve to twenty-some inches past the siding, and that
        projection is effectively cantilevered off the house unless something
        is carrying it. Two approaches cover most jobs: a cable support
        system, steel cables running from the header down to the outer
        corners of the unit in tension, or knee brackets, angled braces
        underneath the projection that carry the load in compression instead.
        Which one applies depends on the size of the unit, how far it
        projects, and what is already there to anchor into.
      </p>

      <p>
        Then there&apos;s the roof. Anything that projects out from a wall needs
        something over it to shed water, so a small roof, usually a shallow
        hip or a shed pitch, gets built over the top of the unit and tied
        into the house wall above it. That roof is a small, low-slope plane
        sitting right against a wall, which is exactly the kind of detail
        that leaks in five years if the flashing is done carelessly and does
        not leak in twenty if it&apos;s done right. We treat that roof as
        structural work, not trim.
      </p>

      <h2>Bay and bow aren&apos;t the same shape</h2>

      <p>
        A bay window is usually three units, a large center window, often
        fixed, flanked by two smaller units set at an angle to the wall,
        commonly thirty or forty-five degrees. That angle is what gives a bay
        its pointed, angular projection and the deep triangular nook you see
        from inside.
      </p>

      <p>
        A bow window uses four to six units of equal or near-equal width, set
        at much shallower angles to each other so the whole assembly curves
        rather than points. The result reads softer from the street, a gentle
        arc instead of a peak, and because the units are narrower and more
        numerous, a bow can extend further along the wall for a similar
        overall projection. Neither is better in the abstract. A bay usually
        suits a house with more angular, traditional lines and gives you a
        defined seat with a clear front-facing view; a bow suits a wider wall
        and a house whose other details are already curved or softer.
      </p>

      <h2>Why these quotes vary so much more than a flat window</h2>

      <p>
        A flat window replacement has a short list of variables. A bay or
        bow has a long one: whether the header needs to be resized, whether
        the opening is growing or staying the same size, cable support versus
        knee brackets, how much of the existing roof and siding has to be
        opened up to tie in the new roof over the projection, whether the
        unit needs support down to grade on a ground-floor installation
        rather than a true cantilever, and how much interior finish work the
        seat and surrounding wall need once the structure is closed up. Two
        houses with what looks like the same size bay window on the outside
        can price very differently once one of those variables is different
        underneath. We walk through what is actually driving your number
        rather than handing you a flat per-window figure, and our{" "}
        <Link href="/blog/window-cost-guide">window cost guide</Link> goes
        into more detail on what moves price generally.
      </p>

      <h2>Finishing it, inside and out</h2>

      <p>
        Inside, the floor of the projection becomes a seat, built on
        insulated plywood decking over the support structure below, finished
        with a seat board that usually matches the window trim or the room&apos;s
        existing woodwork. That cavity under the seat gets insulated the same
        as an exterior wall would be, because it&apos;s one, projecting out past
        the thermal envelope of the house on three sides instead of one.
      </p>

      <p>
        Outside, the small roof over the unit gets shingled or covered to
        match the main roof where reasonable, with step and counter flashing
        at the wall tying it into the existing siding and building paper, and
        ice and water shield underneath given how small and low-pitched that
        roof plane is. The angled corners where the flanking units meet the
        center unit, on a bay especially, create extra seams in the exterior
        trim compared to a single flat window, and each of those seams needs
        its own attention at caulking rather than getting treated as one long
        run. A bay or bow that looks finished from the street usually has
        more careful trim work behind it than it lets on.
      </p>

      <Faq
        items={[
          {
            q: "How far do bay and bow windows project from the house?",
            a: "It varies by unit and manufacturer, but a bay typically projects further at its center point given the sharper angle of the flanking units, while a bow's shallower angles usually mean a more moderate, even projection across its width. We confirm the exact projection against your wall and any roof overhang above it before finalizing a size.",
          },
          {
            q: "Do bay or bow windows need extra support underneath?",
            a: "Almost always, since the unit projects out past the wall and is effectively unsupported on its outer edge otherwise. Cable support from the header and knee brackets from below are the two common methods, and the right one depends on the size of the unit and what the wall and header can anchor into.",
          },
          {
            q: "Is a bay or bow window more expensive to heat and cool than a flat window?",
            a: "It has more glass and more perimeter seam length than a single flat window of similar width, so yes, somewhat, per square foot of wall it replaces. A well-built and well-insulated seat and roof structure keeps that difference small. A poorly detailed one is where a bay window earns its reputation as a draft source.",
          },
          {
            q: "Can a bay or bow window be replaced without changing the size of the opening?",
            a: "In many cases yes, if the existing structure, support system, and roof are sound, and you're replacing the sashes and glass in the same footprint. If the existing support or roof shows damage, or you're changing the size or the number of units, it becomes a full structural project rather than a straightforward swap. We check the existing structure before quoting either scope.",
          },
        ]}
      />
    </>
  );
}
