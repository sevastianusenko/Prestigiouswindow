import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Two kinds of storm windows, serviced differently</h2>
      <p>
        Most of what we work on falls into one of two categories, and they do
        not have much in common besides both sitting in front of a primary
        window. The exterior aluminum triple-track is the version most
        people picture: a metal frame mounted over the outside of the
        existing window, with a glass panel and a screen panel that both
        slide up and down independently within the same outer frame, so the
        same unit works as a storm in winter and a screen in summer without
        being removed. The second kind is the older wooden storm, common on
        homes with original wood double-hungs, a heavier single or two-panel
        wood-framed unit that hangs or hooks onto the exterior casing and, on
        a lot of older houses, still gets swapped seasonally between a glass
        panel for winter and a screen panel for summer the way it was
        designed to decades ago. Diagnosing and repairing one has almost
        nothing in common with the other, so figuring out which type is on
        your house comes before anything else at the visit.
      </p>

      <h2>Freeing a painted-shut storm</h2>
      <p>
        Wood storms get painted shut the same way primary sashes do, and for
        the same reason: nobody cuts the paint line before repainting the
        casing, and after a few rounds of it the storm is effectively glued
        to the exterior trim. We cut that seam clean around the frame before
        applying any pressure, the same approach used on a painted-shut
        primary sash, so the panel comes free without cracking its glass or
        splitting the wood frame around it. Aluminum triple-tracks rarely get
        painted, but they seize up in a different way: the glass and screen
        panels ride in their own small tracks within the outer frame, and
        years of dirt, oxidation, and dried lubricant in those tracks can
        leave a panel just as stuck as a painted wood storm, even though the
        cause is completely different. Either way, freeing it&apos;s about
        finding and clearing the actual obstruction rather than forcing a
        panel that isn&apos;t moving for a reason.
      </p>

      <h2>Glass and screen inserts within the frame</h2>
      <p>
        The advantage of a triple-track storm is that the glass and screen
        panels are separate, replaceable pieces riding in their own channels,
        not one fixed unit. A cracked glass panel or a torn screen panel gets
        replaced on its own, sized to the existing outer frame, without
        touching the frame itself or the primary window behind it. That&apos;s a
        smaller, faster repair than most people expect once they realize the
        whole storm doesn&apos;t need to come off the house. Wooden storms work
        differently. Most hold a single fixed pane of glass set in glazing
        putty, the same as a primary wood sash, and a cracked or failed pane
        gets re-glazed using the same process, removing the old putty,
        cleaning the rabbet, and bedding a new pane, rather than swapping an
        interchangeable insert. Where a wood storm has a separate screen
        panel for summer use, that panel gets re-screened the same way any
        other screen frame does.
      </p>

      <h2>On a genuinely old house, a working storm can be the smarter money</h2>
      <p>
        On original wood windows, the choice is rarely storm window versus
        replacement window in the abstract. It&apos;s a working storm plus fresh
        weatherstripping on the primary sash versus tearing out a sash that
        may still have decades of service left in it. A well-fitted storm
        adds a second air gap over the original glass, doing a version of
        what an insulated unit does, just built as two separate layers
        instead of one sealed one, and it does that without changing how the
        window looks or operates from either side of the wall. For a house
        with{" "}
        <Link href="/old-homes">original wood windows worth keeping</Link>,
        we regularly recommend repairing and re-hanging the storm alongside
        weatherstripping the primary sash before we recommend replacing
        anything, because that combination closes most of the comfort gap
        for a fraction of what a new unit costs, and it leaves the original
        window exactly as it was.
      </p>
      <p>
        We cover the fuller version of this decision, repair versus a storm
        versus full replacement, in our piece on{" "}
        <Link href="/blog/single-pane-windows-repair-or-replace">
          single-pane windows
        </Link>
        , since the two questions run on the same logic. This page is about
        what actually happens when the storm window itself is the thing
        getting fixed.
      </p>

      <Faq
        items={[
          {
            q: "Can a painted-shut storm window be freed without breaking it?",
            a: "Yes, the same way a painted-shut primary sash is handled: cutting the paint seam clean around the frame before any pressure is applied, rather than prying or forcing it. That keeps the glass and the wood frame intact.",
          },
          {
            q: "Do you replace just the glass or screen in a triple-track storm, or the whole unit?",
            a: "Just the panel that failed, in most cases. The glass and screen panels in an aluminum triple-track ride independently in their own channels within the outer frame, so a cracked pane or torn screen gets replaced on its own without removing the storm from the house.",
          },
          {
            q: "Is it worth fixing an old storm window instead of just replacing the whole window?",
            a: "Often, yes, especially on an original wood window that's otherwise sound. A working storm combined with fresh weatherstripping on the primary sash closes most of the comfort gap that drives people toward replacement, at a fraction of the cost, and it leaves the original window untouched.",
          },
          {
            q: "Do wood storm windows still get swapped seasonally, or is that outdated?",
            a: "Some homeowners still do it, and where the storm was built with separate glass and screen panels, it works exactly as designed. It isn't required for the storm to function, but where the seasonal swap is already part of how a house operates, we keep both panels in working order rather than assuming one is unnecessary.",
          },
        ]}
      />
    </>
  );
}
