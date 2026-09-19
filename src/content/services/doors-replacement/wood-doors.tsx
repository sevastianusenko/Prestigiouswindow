import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Solid slab versus stile-and-rail</h2>
      <p>
        Wood entry doors are built one of two ways, and the difference matters
        more than most buyers realize. A solid slab door is exactly what it
        sounds like, a thick plank or a glued-up panel of solid wood, sometimes
        with a veneer face over an engineered core for stability. It looks
        substantial and it is, but a wide solid panel is also the construction
        most prone to seasonal movement, because there&apos;s a lot of wood
        surface exposed to humidity swings with nothing engineered into it to
        resist that movement.
      </p>
      <p>
        Stile-and-rail construction is how most quality wood doors are actually
        built, and it&apos;s the same joinery logic as a traditional six-panel
        interior door, just heavier and weatherproofed for exterior use. Vertical
        stiles and horizontal rails form a frame, and panels float in grooves
        within that frame rather than being glued rigid, which lets the panels
        expand and contract with humidity without stressing the joints or
        splitting. A well-built stile-and-rail door moves less overall and moves
        more predictably than a solid slab of the same size, which is exactly why
        it&apos;s the standard for anything beyond a small door in a protected
        spot.
      </p>

      <h2>Species, and how each one moves</h2>
      <p>
        Different wood species bring genuinely different behavior, not just
        different looks. Mahogany is dimensionally stable relative to most
        alternatives and resists rot well, which is why it shows up so often on
        higher-end exterior doors despite the cost. Fir is a common, more
        affordable choice with a straight, attractive grain, but it moves more
        with humidity than mahogany and is softer, so it dents and dings more
        easily. Oak is hard and handsome but moves the most of the common choices
        and is heavy enough that hinge sizing matters even more than usual.
        Species selection isn&apos;t just an aesthetic decision, it&apos;s a
        decision about how much movement and maintenance you&apos;re signing up
        for before finish and exposure even enter the picture.
      </p>

      <h2>Exposure decides more than the door does</h2>
      <p>
        The single biggest factor in how a wood door performs has nothing to do
        with species or construction quality. It&apos;s which direction the door
        faces and how much overhang protects it. A wood door tucked under a deep
        porch roof, shielded from direct rain and getting indirect rather than
        blasting afternoon sun, can go years between refinishing and hold up
        beautifully for decades. The same door, same species, same finish, set
        into a south or west-facing wall with no overhang at all, takes direct UV
        that breaks down the finish and direct rain that gets into any hairline
        crack in it, and it will need attention every year or two rather than
        every several.
      </p>
      <p>
        This is worth deciding before you commit to wood, not after. If your
        entry has real overhang protection, a covered porch, a deep roofline
        above the door, wood is a genuinely low-hassle choice. If your entry sits
        exposed with no overhang on a south or west wall, wood is still an option,
        but it&apos;s an option you&apos;re choosing to maintain more actively,
        and it&apos;s worth going into that decision with eyes open rather than
        discovering it after the finish starts failing.
      </p>

      <h2>Refinishing on a schedule, not when it fails</h2>
      <p>
        Every exterior wood finish, stain and spar varnish, a penetrating oil
        finish, a painted finish, is a maintenance item with a lifespan, not a
        one-time job. The mistake we see most often is treating refinishing as
        something you do when the old finish has visibly failed, peeling,
        graying, or letting water in, rather than on a schedule ahead of that
        point. Once UV and moisture get past a failed finish and into the wood
        itself, you&apos;re not refinishing anymore, you&apos;re repairing wood
        damage and then refinishing, which is a bigger and more expensive job. A
        protected door might go three to five years between refinishing. An
        exposed one is better served refinished every one to two years,
        deliberately, before the old coat gives out rather than after.
      </p>

      <h2>When wood is genuinely worth it</h2>
      <p>
        Wood earns its place in specific situations rather than as a default
        choice. It&apos;s the only material that actually is wood, which matters
        on a historic home where matching original millwork profiles, panel
        proportions, or a specific species used throughout a house isn&apos;t
        optional if you want the entry to look like it belongs. Our page on{" "}
        <Link href="/old-homes">working on older Lancaster County homes</Link>{" "}
        goes into more of what that kind of matching involves. It&apos;s also the
        right call on a genuinely protected entry, a deep porch, a covered
        breezeway, where the exposure problem largely disappears and you get
        wood&apos;s look without wood&apos;s worst-case maintenance schedule. Where
        we steer people away from it is an exposed front entry on a busy family
        household that wants to set a finish and forget about it. That door
        exists, but it&apos;s fiberglass, not wood.
      </p>

      <Faq
        items={[
          {
            q: "How often does a wood entry door need to be refinished?",
            a: "It depends entirely on exposure. A door under a deep porch roof facing north or east can go three to five years between refinishing. An exposed door facing south or west with no overhang is better refinished every one to two years, ahead of visible failure rather than after it.",
          },
          {
            q: "What's the difference between a solid wood door and a stile-and-rail door?",
            a: "A solid slab is one wide panel of wood, which looks substantial but has more surface exposed to humidity movement. Stile-and-rail construction frames floating panels within a joined frame, which is how most quality wood doors are actually built, because it lets the panels move with humidity without stressing the joints.",
          },
          {
            q: "Can a wood door be repaired instead of refinished from scratch?",
            a: "Often, yes, if the underlying wood is still sound and the damage is limited to the finish. Once moisture has gotten past a failed finish and into the wood itself, rot or checking, that's a wood repair first and a refinish second, which costs more than staying ahead of the finish would have.",
          },
          {
            q: "Is a wood door a good choice if my entry gets full afternoon sun?",
            a: "It can be, but go in knowing it's a maintenance commitment, refinishing every year or two rather than every several. If you'd rather not be on that schedule, a fiberglass door with a wood-grain texture and stained finish gets you a similar look without the seasonal movement or the recurring refinishing.",
          },
        ]}
      />
    </>
  );
}
