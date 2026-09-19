import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>What a storm door is actually for</h2>
      <p>
        A storm door hangs in front of your entry door and does three jobs,
        not just the one people usually name. The obvious one is weather
        protection: it keeps wind-driven rain and snow off the entry door,
        which matters most on wood and least on fiberglass or steel. The second
        is ventilation, letting you open the entry door for airflow without
        leaving the opening unsecured. The third is a genuine second layer
        between the house and the outside, some distance between anyone at the
        entry and the actual lockset behind it.
      </p>
      <p>
        None of those three jobs is free. A storm door adds a second set of
        hinges, a second closer, and a second seal to maintain, and it changes how
        the entry door behind it experiences sun and heat, which is worth
        understanding before you pick the glass.
      </p>

      <h2>Full-view, ventilating, or retractable screen</h2>
      <p>
        The three common configurations trade off differently between light,
        airflow, and how much you have to think about the door through the
        seasons.
      </p>
      <ul>
        <li>
          <strong>Full-view.</strong> A single large glass panel, usually
          removable or swappable for a screen panel by hand, twice a year. Gives
          the clearest look at the entry door and the most light into an entry
          hall, which is often the whole reason someone wants one. The tradeoff
          is the seasonal swap and the heat issue below.
        </li>
        <li>
          <strong>Ventilating.</strong> The glass panel is split, with the top or
          bottom section sliding independently so you can crack it for airflow
          without swapping anything out. Less dramatic than a full-view panel but
          far less maintenance, since you are not pulling panels twice a year.
        </li>
        <li>
          <strong>Retractable screen.</strong> A screen built into the door
          itself that rolls or slides out of a housing at the top or side, so the
          same door is glass in winter and screen in summer with one motion.
          Costs more, and the retracting mechanism is another moving part, but it
          removes the seasonal panel swap entirely.
        </li>
      </ul>

      <h2>The heat problem, said plainly</h2>
      <p>
        A full-view storm door with clear glass in front of a dark-colored entry
        door on a south-facing wall can genuinely overheat that door. The glass
        acts like the front of a greenhouse: it lets sunlight through, the dark
        door absorbs it, and the air gap between the two doors has nowhere for
        that heat to go. On a clear winter day the space between them can run
        well past outdoor temperature, and a dark fiberglass or steel skin sitting
        in that trapped heat day after day can warp, blister its finish, or in
        worse cases separate at the seams. This is a documented failure mode, not
        a rare fluke, and most storm door manufacturers say so in their own
        installation literature.
      </p>
      <p>
        The fix isn&apos;t complicated. On a south or west-facing entry with a
        dark door, a ventilating storm door, or one with tinted or low-E glass,
        is the safer call than a plain full-view panel, and cracking the vent
        panel on a hot, sunny day lets trapped heat escape instead of cooking the
        door behind it. We flag this at the measurement visit when the exposure
        calls for it, because it&apos;s cheap to get right up front and expensive
        to fix after a door has already blistered.
      </p>

      <h2>Closers and wind chains</h2>
      <p>
        The closer is the pneumatic or hydraulic arm that keeps the storm door
        from slamming and holds it shut against the entry door&apos;s
        weatherstrip. Most come with two, top and bottom, and both matter: a
        single closer lets the door twist as it swings, which is what makes a
        storm door feel loose or bang unevenly. Closers are adjustable, a small
        screw on the arm controls closing speed, and a door that slams
        shouldn&apos;t be written off as worn out before that adjustment has been
        tried.
      </p>
      <p>
        A wind chain limits how far the door can swing open in a gust so it
        doesn&apos;t get thrown back against its own hinges. On an exposed
        entry, a covered porch facing open farmland, a rowhome stoop that funnels
        wind down a street, a storm door without wind protection eventually gets
        torn off, not maybe. We size closers and chains to the exposure, not just
        the door.
      </p>

      <h2>Sized to your opening, not picked off a shelf</h2>
      <p>
        Stock storm doors are commonly sold in a handful of standard widths,
        thirty, thirty-two, and thirty-six inches, meant to fit a standard entry
        opening with standard brickmould trim. A lot of houses, especially older
        construction or anything that has had trim built up or replaced over the
        years, don&apos;t match those widths exactly. Forcing a stock-width storm
        door onto an opening a half inch narrower or wider than it expects means
        packing out the frame or trimming the unit, and either one compromises
        the seal the door is supposed to provide.
      </p>
      <p>
        We measure the actual opening, brickmould to brickmould, before
        ordering, the same as we would for the entry door itself, and order or
        build the storm door to that measurement. It costs a little more than
        grabbing a stock width off a shelf, and it is the difference between a
        storm door that seals correctly on day one and one that needs foam and
        caulk to fake it.
      </p>

      <FactStrip
        items={[
          {
            label: "Stock widths",
            value: "30, 32, and 36 in. cover most standard openings, but brickmould-to-brickmould still gets measured",
          },
          {
            label: "Closers",
            value: "Two per door, top and bottom, each independently adjustable for closing speed",
          },
          {
            label: "Heat risk",
            value: "Highest on dark, south or west-facing entry doors behind clear full-view glass",
          },
          {
            label: "Typical install",
            value: "Under two hours on an opening with sound existing trim",
          },
        ]}
      />

      <p>
        If your current storm door is dragging or won&apos;t latch, that&apos;s
        often a hardware fix rather than a reason to replace the unit. Worth
        checking <Link href="/doors/repair">door repair</Link> first.
      </p>

      <Faq
        items={[
          {
            q: "Will a storm door damage my entry door?",
            a: "It can, specifically on a dark-colored entry door facing south or west behind clear full-view glass, where trapped heat between the two doors can warp the finish or the slab over time. A ventilating storm door, or glass with a tint or low-E coating, avoids the problem on exposures where it's a real risk. We flag this at measurement when your entry door's color and exposure call for it.",
          },
          {
            q: "Do I need a storm door if I already have a good entry door?",
            a: "Not strictly, a well-sealed fiberglass or steel entry door doesn't need a storm door to perform. People add one for the ventilation option, the extra security layer, or to protect a wood door specifically. It's worth doing for the right reasons rather than as an automatic add-on.",
          },
          {
            q: "Can a storm door be installed on an out-swing entry door?",
            a: "Generally not in the standard configuration, since a storm door is designed to swing outward in front of an entry door that swings inward, and the two would collide. This is one of the practical downsides of choosing an out-swing entry door if a storm door is something you want later.",
          },
          {
            q: "How long does a storm door actually last?",
            a: "The frame and glass typically outlast the moving parts. Closers, hinges, and sweeps are the components that wear and are also the easiest and cheapest to service or replace, which is why a storm door that feels tired is usually a repair candidate rather than a full replacement.",
          },
        ]}
      />
    </>
  );
}
