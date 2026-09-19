import { FactStrip, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Incorporated", value: "1907" },
          { label: "Population", value: "1,363 (2020)" },
          { label: "Earlier name", value: "Fairville" },
          { label: "Settled", value: "1722, by Welsh families" },
        ]}
      />

      <p>
        Cigar manufacturing in the 19th century wasn&apos;t typically one
        large factory the way people picture industrial-era production
        today. It was often smaller operations, sometimes just a few rooms
        in a building near the center of town, employing rollers and
        sorters who lived within walking distance. That kind of light
        manufacturing is part of why Terre Hill&apos;s core reads the way
        it does now: modest commercial buildings and worker housing built
        close together on a walkable scale, instead of the larger footprint
        a single big employer usually leaves behind.
      </p>

      <p>
        Terre Hill was incorporated as a borough in 1907, but it was already
        a working town well before that, first settled by Welsh families in
        1722 and filled in by German settlers afterward. For a stretch, it
        was the real center of cigar manufacturing in Lancaster County, an
        industry that&apos;s mostly forgotten now but that built the
        borough&apos;s tight, walkable core, small shops and homes packed
        close together instead of spread across farmland the way a lot of
        our other towns are. The borough hall&apos;s 19th-century clock is
        still a recognized local landmark, one of the few visible signs of
        that cigar-era prosperity still ticking. With just 1,363 residents as
        of the 2020 census, fewer than almost any other incorporated borough
        in the county, Terre Hill has less population than it used to, but
        the density of that older core hasn&apos;t gone anywhere. That kind
        of block-by-block density is unusual for our service area outside
        Terre Hill itself; most of the towns around it are spread out along
        farmland roads rather than built up shop to shop and house to house.
      </p>

      <Opinion>
        A subdivision built in the last twenty years gives us stock openings
        and a little room for error. A block in Terre Hill doesn&apos;t. When
        an opening was framed by hand in the cigar-industry era and
        hasn&apos;t been touched since, getting that measurement right the
        first time matters more here than almost anywhere else on our list,
        because there usually isn&apos;t a cheap second chance to fix it.
        Order a stock-size replacement for an opening that&apos;s even half
        an inch off and you&apos;re either forcing it in wrong or paying
        twice, once for the mistake and once for the correction.
        <br />
        <br />
        We&apos;d rather spend the extra ten minutes on site with a tape
        measure than assume a Terre Hill house is built like anything else on
        our route. It usually isn&apos;t. It&apos;s also why we&apos;d
        rather quote a Terre Hill job after actually walking the property
        than off a set of photos alone, even when a homeowner offers.
      </Opinion>

      <p>
        A lot of Terre Hill&apos;s older buildings share walls or sit close
        enough together that there&apos;s no room for scaffolding or
        staging equipment the way there is on a farm property with open
        yard space on every side. That changes how a crew plans a job here
        as much as the age of the openings does. We&apos;re used to working
        a tighter footprint, coordinating around a neighbor&apos;s property
        line, and getting equipment in and out without blocking a narrow
        street longer than necessary.
      </p>

      <p>
        Buildings from Terre Hill&apos;s cigar-era boom are old enough that
        lead paint is a real possibility in the layers of trim around a lot
        of the original window and door openings, since any structure
        built before 1978 can have it. That&apos;s not a reason to avoid
        the work, it&apos;s a reason to expect a crew that already knows
        how to handle scraping, sanding, or prying into old painted wood
        with proper containment, rather than treating a 19th-century
        opening the same way they&apos;d treat a twenty-year-old
        vinyl-clad unit.
      </p>

      <p>
        Terre Hill&apos;s tight core also means we can often handle more
        than one property on the same street in a single visit, which
        isn&apos;t true out on the farm roads where the next job might be
        fifteen minutes away once you account for a long driveway. That
        doesn&apos;t change what we charge for any individual job, but it
        does mean scheduling here tends to run more efficiently on our end,
        and a homeowner asking for a slightly different visit time usually
        has more flexibility than someone on a spread-out rural route
        would. It&apos;s a small, practical upside to living somewhere this
        compact, even if compact wasn&apos;t the reason the borough was
        originally built that way.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does Terre Hill have historic-district rules that affect window or door replacement?",
            a: "We're not aware of a formal historic-district designation covering the borough, so we won't claim one exists. Exterior work on an older building here should still be measured and matched carefully, both because most openings are original size and because a mismatched replacement stands out fast on a block this tight.",
          },
          {
            q: "Is it harder to get equipment to a job site in a dense borough like Terre Hill?",
            a: "It takes more planning than a spread-out farm property, since a lot of buildings here share walls or sit close together with little open yard space. We coordinate parking and staging in advance rather than showing up and figuring it out on site.",
          },
          {
            q: "How far is Terre Hill from your shop?",
            a: "About eight minutes from East Earl, close enough that most repair calls here get a same-day response.",
          },
        ]}
      />
    </>
  );
}
