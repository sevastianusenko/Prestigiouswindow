import { FactStrip, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>A town built by one decision in 1866</h2>

      <FactStrip
        items={[
          { label: "Plant sited", value: "1866, Pennsylvania Steel Co." },
          { label: "Sold to", value: "Bethlehem Steel, 1917" },
          { label: "Population", value: "6,263 (2020), down from 16,000+" },
          { label: "From East Earl", value: "~48-52 mi, ~70 min" },
        ]}
      />

      <p>
        Steelton exists because of one decision: in 1866, the Pennsylvania
        Steel Company sited its plant on this stretch of the Susquehanna,
        the first mill in the country built solely for steelmaking rather
        than iron or a mix of both. The company sold the operation to
        Bethlehem Steel in 1917, and the plant kept running and expanding
        under that name for decades afterward. Every rowhome block in
        Steelton traces back to that mill in one way or another, built to
        house the workers it needed as it grew.
      </p>

      <p>
        The population numbers show how fast that growth happened and how
        far it has since receded. Steelton had already passed 14,000
        residents by the 1910 census, and it went on to peak at more than
        16,000, a population that included 33 different ethnic groups drawn
        here by mill jobs, before the long decline that&apos;s common to
        company towns once the industry that built them contracts. The 2020
        census counted 6,263 residents, well under half the borough&apos;s
        early-20th-century peak, but the rowhomes those 16,000-plus people
        once filled are mostly still standing, built close together and
        built fast, on narrow lots laid out to fit as many worker households
        as possible near the mill gates.
      </p>

      <p>
        That 33-ethnic-group figure isn&apos;t a footnote, it&apos;s the
        real story of how a town like Steelton got built. Mill jobs drew
        immigrant families from across Europe and beyond within a few
        decades, all needing housing at once, which is exactly the kind of
        pressure that produces dense, fast, standardized rowhome
        construction instead of the slower, more varied building patterns
        you see in a town that grew organically over a couple of centuries.
        It&apos;s the same basic pattern that built company and mill towns
        across Pennsylvania in this era, just compressed here into a
        smaller footprint along the river.
      </p>

      <p>
        A borough built for well over 16,000 people that now holds 6,263
        means the rowhome stock and the population stopped matching each
        other a long time ago. Some of that shows up as units converted to
        fewer households than they were originally built for, some as
        smaller household sizes than a mill-era family would have had,
        and some, inevitably, as buildings that didn&apos;t make it through
        the decline in usable condition at all. None of that changes what
        the surviving housing actually is: a dense, genuine, well-built
        rowhome stock from a specific and well-documented era, still doing
        the job it was built for on the blocks where families still live in
        it.
      </p>

      <Opinion>
        <p>
          We&apos;re not going to describe Steelton as some undiscovered
          gem, and we&apos;re not going to describe it as a town that&apos;s
          nothing but decline either. Both the mill-era boom and the
          population loss that followed are real, documented history, and
          neither one is the whole story of a borough that&apos;s still home
          to over six thousand people today.
        </p>
        <p>
          What matters for our end of the work is what that boom-era
          construction actually left behind: rowhomes that share walls,
          share a construction era, and share the same narrow entry-door
          openings that made sense on a lot sized for a mill worker&apos;s
          family in the 1880s or 1890s. Frames on housing like this have had
          well over a century to settle, sometimes unevenly from one shared
          wall to the next, which means a door or window that fits perfectly
          on paper can still need real on-site adjustment to actually hang
          right. It&apos;s the kind of measuring we do constantly on older
          housing closer to home, just applied to a denser, more uniform
          block of it.
        </p>
      </Opinion>

      <LocalFaq
        items={[
          {
            q: "How far is Steelton from your shop in East Earl?",
            a: "Roughly 70 minutes and 48 to 52 miles, one of our longer regular drives. We treat it as a dedicated trip out to Dauphin County rather than an add-on stop closer to home.",
          },
          {
            q: "Why are Steelton's entry doors often narrower than newer homes?",
            a: "Steelton's rowhomes were built quickly on narrow lots to house as many mill workers as possible close to the plant, so door and window openings followed that same tight, standardized layout. A modern stock-size door doesn't always fit an opening built to a 19th-century mill-town standard.",
          },
          {
            q: "Does Steelton still have a working steel mill?",
            a: "The Pennsylvania Steel Company that built the town sold its operation to Bethlehem Steel in 1917. We don't have confirmed details on the site's current ownership or operations, so we won't guess. What matters for our work is the rowhome housing the mill era left behind, which is still very much standing.",
          },
        ]}
      />
    </>
  );
}
