import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>A newer town than its neighbors</h2>

      <FactStrip
        items={[
          { label: "Settled", value: "1770" },
          { label: "Incorporated", value: "1908" },
          { label: "Population 1940", value: "799" },
          { label: "Population 2020", value: "2,777" },
        ]}
      />

      <p>
        Hallam was settled back in 1770, but it didn&apos;t become its own
        borough until 1908, splitting off from Hellam Township, and the real
        growth didn&apos;t happen for another few decades after that. The
        1940 census counted just 799 people here. By 2020 that number was
        2,777, more than triple what it was 80 years earlier, and most of
        that growth landed during Hallam&apos;s run as a straightforward
        stop on the US-30 and Lincoln Highway corridor rather than a river
        crossing or a mill town with centuries of buildup behind it. Route
        30 was one of the country&apos;s original cross-state highways
        before the interstate system existed, and a lot of small Pennsylvania
        boroughs along it, Hallam included, grew up as through-towns first
        and residential communities second.
      </p>
      <p>
        That growth curve, quiet for a century and a half and then tripling
        in the back half of the 20th century, is a pattern a lot of small
        boroughs along old cross-state highways share. Once cars became the
        normal way to get around, a town sitting on a paved corridor between
        two established places, Wrightsville on one side and York on the
        other, was in a good spot to pick up steady residential growth
        without ever needing a factory, a river crossing, or a downtown of
        its own to drive it. Hallam is a decent example of that pattern
        working exactly as expected.
      </p>
      <p>
        That later growth curve is the honest reason Hallam doesn&apos;t
        have the dense 18th- or 19th-century core that a lot of its York
        County neighbors do. Most of what&apos;s here reflects the 1940s
        onward, sitting on flatter, more buildable ground between
        Wrightsville and York rather than tucked into a historic riverfront
        or an old industrial core. It makes for a quieter, newer-feeling
        borough than either of them, and it usually makes for a more
        straightforward window or door job too. Fewer original openings
        from three different centuries showing up on the same block, more
        homes built to dimensions a modern stock window or door actually
        fits, and fewer surprises once we&apos;re actually inside the wall.
        We won&apos;t invent a landmark Hallam doesn&apos;t have, and
        we&apos;re not going to pretend it has the same story as
        Wrightsville&apos;s bridge or Red Lion&apos;s cigar factories.
        It&apos;s just a solid, workaday borough that grew up along a
        highway, and that&apos;s a fine thing for a town to be.
      </p>
      <p>
        In practice, a mid-century or later Hallam house is more likely to
        need a straightforward vinyl double-hung swap or a worn slider door
        replaced than a hand-fitted custom unit. The seals and hardware
        wear out just the same as anywhere else, they just wear out on
        openings built to sizes a manufacturer still stocks, which usually
        means a shorter timeline between measuring and installing than a
        job in one of our older river towns.
      </p>
      <p>
        Because so much of Hallam&apos;s housing stock dates to a standard
        building era rather than a historic one, product choice tends to
        matter more here than opening size does. A budget-friendly vinyl
        unit is a perfectly reasonable choice for a straightforward swap
        into a common opening, but it&apos;s worth having the fiberglass
        conversation too on a house the homeowner plans to stay in for
        decades, better dimensional stability through Pennsylvania&apos;s
        temperature swings, even though it costs more upfront. Neither is
        the wrong answer. It comes down to how long the homeowner plans to
        stay and what they&apos;re trying to get out of the investment, a
        conversation we have honestly rather than pushing whichever
        product carries the better margin.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does Hallam have a historic district like Wrightsville or York?",
            a: "No, and we won't pretend otherwise. Hallam's growth mostly happened after 1940, so it doesn't have the kind of designated historic district those two towns do. That's not a downside, it usually just means a more standard job with fewer custom-sized openings to account for.",
          },
          {
            q: "What kind of window and door jobs do you see most in Hallam?",
            a: "Mostly straightforward replacements on mid-century and later construction, vinyl double-hungs that have reached the end of their seal life, sliders with worn rollers, entry doors with tired weatherstripping. Fewer surprises than our older river towns, which usually keeps the timeline shorter too.",
          },
          {
            q: "How far is Hallam from your shop in East Earl?",
            a: "Around 46 minutes, sitting between Wrightsville and York on the Route 30 corridor. It's a real drive, but a standard one, the same crew handles Hallam that handles our closer Lancaster County towns.",
          },
        ]}
      />
    </>
  );
}
