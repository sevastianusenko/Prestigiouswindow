import Link from "next/link";
import { Faq } from "@/components/blog/Article";
import { FactStrip } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>The first few minutes are diagnosis, not adjustment</h2>

      <p>
        A door is one rectangle hanging inside another, and there are only so
        many ways the two can stop agreeing. The first thing we do on a sticking
        door call is find the exact spot where the slab touches: the burnished
        stripe where paint has polished off the edge, which part of the gap shuts
        first when the door swings slowly, and where you have to push. That
        decides everything after it, from two long screws to an honest
        conversation about the frame.
      </p>

      <FactStrip
        items={[
          { label: "Most common cause", value: "Hinge screws pulled loose in a soft jamb" },
          { label: "Usual fix", value: "Long screws into the framing behind the jamb" },
          { label: "Visit", value: "Most doors are done in one trip" },
          { label: "Worst stretch", value: "Humid July through September" },
        ]}
      />

      <h2>Rubbing at the top corner of the latch edge</h2>

      <p>
        This is the one we see most, and the cheapest to put right. The top hinge
        carries most of a door&apos;s weight every time it swings, and the screws
        in that leaf are often three quarters of an inch long, biting into nothing
        but the jamb board. Behind that board is a shim, an air gap, then framing.
        Years of pulling elongates the holes, the leaf creeps away from the jamb,
        the top of the door drops toward the latch side, and that corner hits the
        stop first.
      </p>

      <p>
        The repair is to swap one or two screws in the top hinge for screws long
        enough to pass through the jamb, cross the shim space, and land in the
        trimmer stud behind it. That one change pulls the jamb tight and lifts
        the latch corner at the same time. We drive them in increments and keep
        checking the gap all the way around, because a jamb can be pulled too far
        and bind on the hinge side instead. If the old holes are chewed out, a
        long screw just spins, so we plug them with glued hardwood and redrill
        once it sets. Dry toothpicks are a two-month fix, not a repair.
      </p>

      <h2>Rubbing along the whole latch edge</h2>

      <p>
        When the door drags for the full height of the latch side rather than at
        one corner, the hinges are usually fine and the opening has moved. Either
        the house settled and took the frame with it, or the unit was never
        shimmed properly behind that jamb leg. We pull the interior casing on that
        side, then reset or add shims until the leg runs straight and parallel to
        the door edge again. The stop moulding often moves with it, since it was
        nailed to match the door&apos;s old position.
      </p>

      <p>
        Planing the slab is the last option. When it really is the answer, we
        prime and paint the bare edge the same day, because an unsealed edge on
        an exterior door is where the next round of swelling starts.
      </p>

      <h2>Dragging on the floor</h2>

      <p>
        A door that scuffs the floor has four likely causes, and the shape of the
        gap underneath says which. An even gap that is simply too tight means the
        finished floor came up: new carpet, an underlayment, a floating floor over
        the old one. A wedge that closes toward the latch side is the hinge sag
        above. A gap that pinches in the middle points at a header deflecting over
        a wide opening, which is framing work, and we will say so rather than
        pretend hinge screws fix it. On an entry door, a threshold cranked up on
        its adjusting screws can imitate all three.
      </p>

      <h2>Binding on the hinge side</h2>

      <p>
        A door that springs back at you or refuses the last quarter inch is
        usually hinge bound. Either the mortises were cut too deep when it was
        hung, or decades of repainting have packed the leaf pockets so the hinge
        cannot close flat. Shimming behind the leaf with thin stock fixes the
        first, cleaning paint out of the mortise fixes the second. We also check
        for screw heads standing proud of the leaf and for a bent knuckle on the
        middle hinge, common on a heavy door hanging on two good hinges and one
        tired one.
      </p>

      <h2>Doors that only stick in July</h2>

      <p>
        Seasonal sticking is a moisture problem, not an alignment problem. Wood
        takes on humidity fastest through the unsealed end grain at the top and
        bottom edges, the two faces almost nobody paints. We seal those and leave
        the fit alone until the door has been through a dry month. Older houses
        move more than people expect, which is part of why we keep a separate
        page on{" "}
        <Link href="/old-homes">windows and doors in older homes</Link>.
      </p>

      <h2>When we tell you not to bother adjusting it</h2>

      <p>
        Three honest cutoffs. A slab warped across its width, so the latch edge no
        longer sits in the same plane as the hinge edge, will not come flat to the
        stop no matter what we do at the hinges. A frame racked far enough that
        straightening it would fight the wall framing is a replacement. And a jamb
        too soft to hold a screw is a{" "}
        <Link href="/doors/repair/jamb-rot">rot repair</Link> first. Short of
        those, adjusting is worth doing before anyone prices a{" "}
        <Link href="/doors/replacement">new door</Link>. See the rest of what we
        handle under <Link href="/doors/repair">door repair</Link>, or{" "}
        <Link href="/contact">send a photo of the gap</Link> and we can usually
        tell you before we drive out.
      </p>

      <Faq
        items={[
          {
            q: "My door only sticks in humid weather. Is that worth a service call?",
            a: "It can be, but the useful work is sealing the door's top and bottom edges rather than cutting anything off. Those two faces are almost never painted, and they are where a slab takes on moisture fastest. Planing a swollen door in August tends to buy you a draft in January.",
          },
          {
            q: "Can you just plane the door so it stops rubbing?",
            a: "Sometimes that is the right answer, but it is the last step rather than the first. Material taken off does not come back, and a planed door often needs the strike reset afterward. We check the hinges and the frame first, because one of those is usually the actual cause.",
          },
          {
            q: "The house has settled. Does the door have to be replaced?",
            a: "Usually not. Settling moves the frame, and a frame can normally be reshimmed so the door hangs square in it again. Replacement enters the conversation when the opening has racked far enough that straightening the jamb would fight the framing around it, or when the jamb no longer holds a screw.",
          },
          {
            q: "Will fixing the sticking also fix a deadbolt that will not throw?",
            a: "Very often, yes. A bolt that misses its strike is usually the same hinge sag showing up at a different point, so lifting the latch corner back into position lines it up again. If it still misses afterward, the strike and the bolt throw get addressed separately.",
          },
        ]}
      />
    </>
  );
}
