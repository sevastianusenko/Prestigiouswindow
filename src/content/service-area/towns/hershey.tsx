import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Hershey isn&apos;t actually its own borough. It&apos;s an
        unincorporated community inside Derry Township, with a population
        around 14,200. That surprises some people given how much the name
        carries on its own, but it&apos;s the company and the park that made
        Hershey a household word, not a formal municipal charter.
      </p>

      <FactStrip
        items={[
          { label: "Founded", value: "1903, by Milton S. Hershey" },
          { label: "Population", value: "~14,200 (CDP)" },
          { label: "Status", value: "Unincorporated, Derry Township" },
          { label: "From East Earl", value: "38 mi, 57 min" },
        ]}
      />

      <Landmark>
        <p>
          Milton S. Hershey was born in Derry Township in 1857, and by 1903
          he was building a chocolate factory here along with an entire
          company town around it: homes for workers, schools, a trolley
          system to move people around, and parks. Hersheypark itself opened
          in 1906, originally built as a leisure park for factory employees,
          and has grown into the 121-acre park with fifteen roller coasters
          that draws visitors from well outside Pennsylvania today. Route
          422, Chocolate Avenue through the center of town, and Route 322
          just south of it both trace back to roads that were already
          carrying workers and visitors here a century ago.
        </p>
      </Landmark>

      <p>
        Because Hershey never incorporated as its own borough, it doesn&apos;t
        run its own separate municipal government the way Hummelstown or
        Middletown does. Building permits, zoning, and most other municipal
        decisions run through Derry Township instead, which matters if
        you&apos;re planning exterior work that needs a permit, since
        you&apos;re dealing with the township office rather than a
        Hershey-specific one. It&apos;s a small administrative detail, but
        it&apos;s the kind of thing that trips homeowners up who assume a
        town this well-known must have its own borough hall somewhere.
      </p>

      <h2>Company housing that&apos;s now well past its first century</h2>

      <p>
        The homes Hershey built for his workers in the early 1900s are still
        standing, and a lot of them are still lived in, sitting right next
        to newer development that has gone up around them in the decades
        since. That&apos;s a genuinely different situation than most of the
        towns on our list. This isn&apos;t housing stock that accumulated
        organically over a century of different owners and different eras of
        construction, it&apos;s a planned company town where an entire block
        could have gone up in the same year, to the same general standard,
        under the same employer.
      </p>

      <p>
        For us, that means the original units carry the same kind of window
        and door issues we see in any early-1900s construction, frames and
        openings sized to a standard that predates modern manufacturing, but
        with the added consistency of knowing roughly when a given block was
        actually built. A window job on one original Hershey street tends to
        look a lot like the next one over, which isn&apos;t something we can
        say about most of the older towns we cover.
      </p>

      <p>
        There&apos;s a practical upside to that consistency. On a town like
        Douglassville or Middletown, we might see log construction, Victorian
        stonework, and mid-century infill on the same block, so every
        estimate starts from scratch. In Hershey&apos;s original company
        blocks, once we&apos;ve worked on one unit from a given construction
        phase, we usually have a good sense of what the next one on the same
        street is going to need before we even measure it. That doesn&apos;t
        replace an on-site measurement, openings still settle differently
        house to house, but it does mean fewer surprises than a town that
        grew up in a more haphazard way.
      </p>

      <LocalFaq
        items={[
          {
            q: "How far is Hershey from your shop in East Earl?",
            a: "About 38 miles, roughly 57 minutes by car. It's a shorter drive than our other Dauphin County towns, though still a dedicated trip rather than a quick add-on stop.",
          },
          {
            q: "Is Hershey its own town with its own building permits?",
            a: "No. Hershey is an unincorporated community inside Derry Township, so permitting, zoning, and most municipal services run through the township rather than a separate Hershey government. Worth knowing before you plan exterior work that needs a permit.",
          },
          {
            q: "Does original Hershey company housing need special-sized windows or doors?",
            a: "Often, yes, the same way any early-1900s construction does. Original worker housing was built to whatever standard made sense in the 1900s and 1910s, which predates a lot of modern manufacturing sizing, so we measure on site rather than assuming a stock size fits.",
          },
        ]}
      />
    </>
  );
}
