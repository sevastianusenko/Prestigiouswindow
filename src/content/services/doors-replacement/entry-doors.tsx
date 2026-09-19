import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Five systems, five different failure modes</h2>
      <p>
        An entry door behaves less like one object and more like five, each
        wearing out on its own schedule. Knowing which one is actually causing
        trouble is the difference between a twenty-minute adjustment and a new
        unit.
      </p>
      <ul>
        <li>
          <strong>The slab.</strong> The panel itself. A slab that has bowed a
          quarter inch will latch at the top and leak air at the bottom.
        </li>
        <li>
          <strong>The frame.</strong> Two side jambs and a head. The hinge jamb is
          the one that matters, because it carries the full weight of the door on
          three screws per hinge. If it is not plumb, nothing done to the rest of
          the door fixes how it closes.
        </li>
        <li>
          <strong>The sill and threshold.</strong> Two unrelated jobs at once: it
          takes every footstep into the house, and it is where water is most
          likely to get in. Almost all the rot we cut out of door openings starts
          here.
        </li>
        <li>
          <strong>The weatherstripping.</strong> A compression seal in a kerf in
          the jamb, plus a sweep on the bottom of the slab. Consumable parts that
          wear out long before the door does.
        </li>
        <li>
          <strong>The hardware.</strong> Hinges, lockset, deadbolt, strike plates.
          The part you touch daily, and the one usually blamed for problems the
          frame is causing.
        </li>
      </ul>
      <p>
        A door that drags on the latch side has a hinge jamb that has moved, not a
        slab that has grown. That distinction decides which job you are buying.
      </p>

      <h2>Slab only, or the whole pre-hung unit</h2>
      <p>
        The{" "}
        <Link href="/doors/replacement">door replacement overview</Link> covers
        pre-hung versus full frame. The third option is a slab-only swap, where
        the frame stays and only the panel changes. It works when several things
        line up: same thickness, usually one and three quarter inches on an
        exterior door, hinge mortises in the same places, lock and deadbolt bores
        at the same backset and height, and identical handing.
      </p>
      <p>
        A slab is cheaper than a pre-hung unit on paper. In practice it is a
        labor-heavy job that locks in whatever is already wrong with the frame. If
        the jamb is out of plumb, the new slab fights you exactly the way the old
        one did. We suggest slab-only when the frame is genuinely sound and
        matching original trim matters, and a pre-hung unit nearly everywhere
        else.
      </p>

      <h2>Handing, confirmed before anything gets ordered</h2>
      <p>
        Handing is the most common ordering mistake on entry doors and it cannot
        be undone once the unit is built. Stand outside the house facing the door.
        Hinges on your left, door swinging away from you into the house, is
        left-hand inswing. Hinges on the right, same swing, is right-hand inswing.
        If the door swings toward you while you stand outside, it is an outswing.
      </p>
      <p>
        Inswing is the default on nearly every American entry door for good
        reasons. The hinge pins sit inside where nobody can reach them, the
        weatherstrip compresses against an interior stop, and you can hang a{" "}
        <Link href="/doors/replacement/storm-doors">storm door</Link> in front of
        it. You cannot do that with an outswing.
      </p>
      <p>
        Outswing buys back the floor space the door arc eats, and wind pressure
        pushes it into its seal rather than away from it. The tradeoff is exterior
        hinges that need non-removable pins or security studs, and a door that
        swings out onto whatever people are standing on. On a narrow stoop that is
        a daily nuisance.
      </p>

      <h2>Sidelights and transoms belong to the opening</h2>
      <p>
        A door with sidelights is not a door plus two windows. It is one mulled
        unit, with the sidelight frames joined to the door frame along a common
        post, so the door usually cannot be pulled out of it on its own. If only
        the sidelight glass has failed, that panel alone can sometimes be
        replaced, which is worth checking first. Our{" "}
        <Link href="/blog/cracked-window-glass-repair-cost">
          glass repair cost guide
        </Link>{" "}
        covers how that call tends to go.
      </p>
      <p>
        Replacing the whole assembly means specifying one glass pattern across the
        door insert, both sidelights, and any transom. Glass within a set distance
        of a door edge also counts as a hazardous location under code and has to be
        tempered, which is part of why sidelight glass costs what it does.
      </p>

      <FactStrip
        items={[
          {
            label: "Standard slab",
            value: "36 by 80 in. on most front doors; 30, 32, and 34 in. widths on side entries",
          },
          {
            label: "Jamb depth",
            value: "4 9/16 in. on a 2x4 wall, 6 9/16 in. on 2x6, wall finish to wall finish",
          },
          {
            label: "Rough opening",
            value: "About two inches over the unit in width and height, to leave room to shim plumb",
          },
          {
            label: "Typical install",
            value: "A few hours for a clean pre-hung swap; a rotted sill makes it a full day",
          },
        ]}
      />

      <h2>Security that does something, and security that sells doors</h2>
      <p>
        Door marketing leans on the slab: gauge of steel, density of core,
        thickness of panel. Almost none of that is where a residential door fails
        when someone kicks it. Forced entry is nearly always a jamb failure. The
        bolt sits in a strike plate screwed to three quarter inch pine with a shim
        gap behind it. The wood splits, the strike tears out, and the door opens
        with the lock still thrown and the slab undamaged.
      </p>
      <p>
        The fixes are cheap and specific. Three inch screws through the strike
        plate into the framing behind the jamb rather than into the jamb alone.
        At least one long screw per hinge. A deadbolt with a full one inch throw,
        in a bore aligned well enough that it closes without lifting the door.
        Tight shims or solid blocking behind the strike so the jamb has something
        to push against. Those four things outperform any upgrade in slab
        construction.
      </p>
      <p>
        Two honest notes. Glass beside the lock is a security decision as much as
        a style one, and laminated options exist if that matters to you. And a
        multipoint lock, which engages the frame at several points along the door
        edge, is a real improvement in both security and seal. If the door mostly
        works and only one thing is wrong,{" "}
        <Link href="/doors/repair">repair</Link> is the honest starting point.
      </p>

      <Faq
        items={[
          {
            q: "Do I need a new frame, or can I just replace the door?",
            a: "If the jamb and sill are sound and free of rot, a slab-only replacement is possible, as long as the new slab matches the old one in thickness, hinge locations, bore positions, and handing. If the frame has moved, rotted, or was never plumb, a pre-hung unit is better, because it lets us reset the opening instead of inheriting the problem.",
          },
          {
            q: "How do I tell whether my door is left hand or right hand?",
            a: "Stand outside the house facing the door. Hinges on your left with the door opening away from you is left-hand inswing. Hinges on the right, same swing, is right-hand inswing. If the door opens toward you, it is an outswing. We confirm handing on site before ordering, because it cannot be changed after the unit is built.",
          },
          {
            q: "Can I keep my existing lockset and deadbolt?",
            a: "Often yes, if the new door is bored at the same backset and height and the hardware is in good shape. Backset is the distance from the door edge to the center of the bore, typically two and three eighths or two and three quarter inches. Have the hardware out at the measurement visit and we will tell you whether it transfers.",
          },
          {
            q: "If I replace the door, do the sidelights go too?",
            a: "Usually. A door with sidelights is built as one mulled unit with a continuous frame, so the door generally cannot come out on its own. Occasionally a failed sidelight glass panel can be swapped by itself, which is worth checking before condemning the whole assembly.",
          },
        ]}
      />
    </>
  );
}
