import Link from "next/link";
import { Faq, Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>What a sealed unit can&apos;t do</h2>
      <p>
        An insulated glass unit is filled with argon or krypton exactly once,
        at the factory, and then closed permanently. There&apos;s no valve, no
        service port, and no access point built into a standard unit for
        adding gas back in later. Once the edge seal that holds that gas in
        place starts to fail, the gas leaks out through whatever gap has
        opened in the spacer or sealant, and that gap doesn&apos;t close itself
        or get patched from the outside. A sealed unit is built to be filled
        once, not topped off, and there&apos;s no honest version of this repair
        that starts from a different premise.
      </p>

      <h2>What a "gas refill" service actually leaves you with</h2>
      <p>
        Some companies offer a gas recharge as a standalone service, usually
        drilling a small hole into the unit, injecting gas, and sealing the
        hole afterward. We aren&apos;t going to say that does literally nothing,
        but we&apos;ll say plainly that it doesn&apos;t fix the problem that caused
        the gas to leak out in the first place. The seal that failed is still
        failed. Drilling a new hole to add gas back in gives that gas a
        second opening to leak back out through, on top of the original one,
        so the unit is left with two failure points instead of one. It&apos;s
        worth asking directly, of us or of anyone offering this service, how
        long the new fill is actually expected to hold and what happens when
        the original seal keeps doing what it was already doing. We would
        rather answer that question honestly up front than sell a service
        that looks like a repair on the invoice and isn&apos;t one in practice.
      </p>

      <h2>What actually fixes it</h2>
      <p>
        The real fix is replacing the insulated glass unit itself, either the
        whole sash where the glass isn&apos;t designed to come out on its own, or
        the sealed unit alone where the window system allows it to be swapped
        inside an existing sash and frame. That&apos;s the same repair used on
        fogged glass, because gas loss and visible fogging are two symptoms
        of the exact same seal failure, just at different points in its
        timeline. Gas escapes faster than moisture becomes visible as haze,
        since gas molecules are smaller and slip through a partial seal
        failure well before enough humid air has worked its way in to fog the
        glass, so a unit can be running low on its fill for a while before
        anyone notices anything by eye. Once we&apos;re replacing the unit, the
        new one goes in matched for thickness, coating, and tint the same way
        any other glass replacement does, so it performs and looks like the
        window it&apos;s going into rather than standing out from the ones
        around it.
      </p>

      <h2>Deciding whether it&apos;s worth acting on yet</h2>
      <p>
        A lost gas fill by itself isn&apos;t an emergency, and there&apos;s no safety
        reason to act on it the same week you notice it. Argon and krypton
        are both inert and harmless, and losing them is strictly an
        efficiency question, a window performing closer to a standard
        air-filled unit rather than a gas-filled one, not a window that has
        become unsafe or is at risk of failing outright. Where it starts
        being worth scheduling is when gas loss is paired with visible
        fogging, since at that point moisture is also getting into the unit
        and etching the inside surfaces of the glass, which only gets worse
        with time and doesn&apos;t stop on its own. It&apos;s also worth acting on
        sooner if more than one window in the same room or on the same
        elevation is showing the same signs, since that usually means several
        units installed around the same time are reaching the end of their
        seal life together, and it can make sense to group them into one
        visit rather than handling each one as it fails. Our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link> walks
        through the general version of that timing question if you&apos;re
        weighing it across more than one window.
      </p>

      <Opinion>
        <p>
          We understand why a gas recharge sounds appealing. It sounds like a
          simple, inexpensive service, the same way topping off a tire or a
          car battery is simple and inexpensive, and that expectation makes
          it an easy thing to sell without explaining what it actually does
          and doesn&apos;t accomplish.
        </p>
        <p>
          We would rather give you the plain version: if the seal has failed,
          the seal needs replacing, and that means a new glass unit, not a
          gas top-off through a new hole in the old one. That isn&apos;t the
          cheapest-sounding answer, but it&apos;s the one that actually holds.
        </p>
      </Opinion>

      <p>
        For the fuller explanation of how gas fills work, why they leak, and
        how to tell if a window has lost its fill before any haze is visible,
        see our piece on{" "}
        <Link href="/blog/gas-filled-window-panes-explained">
          gas-filled window panes
        </Link>
        . This page is about what we actually do about it.
      </p>

      <Faq
        items={[
          {
            q: "Can the argon or krypton in my window actually be refilled?",
            a: "Not in a way that holds. A sealed unit has no service port, so refilling it means drilling a new hole, which creates a second leak point on top of the seal failure that caused the original loss. The only fix that actually addresses the problem is replacing the sealed glass unit.",
          },
          {
            q: "Is a lost gas fill dangerous or something I need to act on right away?",
            a: "No. Argon and krypton are inert and non-toxic, and losing them is purely an efficiency issue, not a safety issue. There's no rush to act the week you notice it. It becomes worth scheduling sooner once visible fogging shows up alongside it, since that means moisture is also getting into the unit.",
          },
          {
            q: "How is fixing lost gas fill different from fixing fogged glass?",
            a: "It isn't really different. Gas loss and fogging are caused by the same failed edge seal, just at different stages. Gas typically escapes before enough moisture has worked its way in to fog the glass, so a unit can lose its fill before it ever looks cloudy. The repair, replacing the insulated glass unit, is the same either way.",
          },
          {
            q: "Will the replacement glass match the coating and tint of what is there now?",
            a: "Yes. Replacing a unit for lost gas fill follows the same process as any other glass replacement: coating surface, tint, and thickness get checked and matched before ordering, so the new unit performs and looks consistent with the window it's going into.",
          },
        ]}
      />
    </>
  );
}
