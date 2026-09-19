import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Built by the railroad, not much bigger since</h2>
      <p>
        Atglen&apos;s entire borough footprint comes in under a square mile,
        about 0.9 square miles, with a 2020 census population of 1,311.
        That&apos;s not a modern zoning choice, it&apos;s just how the place
        grew: as a railroad village. The Columbia &amp; Philadelphia
        Railroad reached the area in 1834, and the Pennsylvania Railroad
        later ran its main line straight through, with Main Street (Route
        372) laid out to serve the depot and the businesses that grew up
        around it rather than any farm crossroads.
      </p>
      <p>
        The creek running along the borough, the Octoraro (this stretch is
        sometimes called Valley Creek), used to mark the boundary between
        Lancaster and Chester counties before the modern line was surveyed,
        so Atglen has always sat right on that seam. We haven&apos;t found
        a formally designated historic district here, just a compact grid
        of older homes built up around the rail line over a fairly narrow
        stretch of the 1800s and early 1900s. That narrow age range is its
        own kind of useful on a service call, once you&apos;ve measured one
        Atglen window frame, you generally have a decent idea what the next
        one down the block is going to need.
      </p>
      <p>
        None of that makes Atglen a landmark town, and we&apos;d rather say
        so plainly than dress up a small railroad borough as something
        it&apos;s not. It&apos;s a quiet, compact place built for a purpose
        that mostly stopped mattering decades ago, and the housing stock
        still reflects the era it was actually built in.
      </p>
      <h2>What barely a square mile means for a service call</h2>
      <p>
        A borough this compact changes the shape of a service day more
        than people expect. Most of Atglen&apos;s roughly 1,300 residents
        live within a few streets of Main Street, which means once
        we&apos;re in town for one job, a second or third estimate a few
        blocks away barely adds any drive time at all. That&apos;s
        different from a spread-out township call, where getting from one
        property to the next can eat up as much time as the work itself.
        It&apos;s part of why we can usually turn a same-day estimate
        around quickly here, there&apos;s less distance between
        &quot;we looked at it&quot; and &quot;here&apos;s a number.&quot;
      </p>
      <p>
        The tight footprint also means we see the same handful of building
        eras over and over, rather than the wide mix a bigger town
        produces. Once we&apos;ve measured a few openings from
        Atglen&apos;s railroad-era core, we generally have a good read on
        what the next house on the block is going to need, which speeds up
        both the estimate and the eventual install. It&apos;s not a town
        where every job is a surprise, and that predictability is worth
        something when we&apos;re scheduling a crew.
      </p>
      <h2>The creek that used to be a county line</h2>
      <p>
        The Octoraro Creek running along Atglen, called Valley Creek on
        this particular stretch, did more than provide the town&apos;s
        water and scenery. For a long stretch of Pennsylvania&apos;s early
        history, it functioned as the actual boundary between Lancaster
        and Chester counties, before later surveys redrew the line. That
        history is part of why Atglen has always felt like a blend rather
        than firmly one county&apos;s town or the other, close enough to
        Lancaster County&apos;s farming country to share its character,
        but officially on the Chester County side of the water.
      </p>
      <p>
        For us, that&apos;s less a historical curiosity than a practical
        overlap. We already work deep into Lancaster County as our home
        territory, so a borough that sits right where the old county line
        used to run isn&apos;t a stretch for us the way it might be for a
        company that only advertises &quot;Chester County&quot; or only
        advertises &quot;Lancaster County.&quot; Atglen doesn&apos;t have
        to choose a side, and neither do we.
      </p>
      <FactStrip
        items={[
          { label: "Population", value: "1,311 (2020 census)" },
          { label: "Borough size", value: "~0.9 square miles" },
          { label: "Railroad arrived", value: "1834 (Columbia & Philadelphia RR)" },
          { label: "From East Earl", value: "~16 miles, about 26 minutes via PA-897" },
        ]}
      />
      <LocalFaq
        items={[
          {
            q: "Is Atglen part of Lancaster County or Chester County?",
            a: "Chester County, officially, though the Octoraro Creek running through town used to mark the actual boundary between the two counties before later surveys redrew the line. That history is part of why Atglen's character reads closer to Lancaster County farm country than to the rest of Chester County.",
          },
          {
            q: "Is there a historic district in Atglen?",
            a: "Not a formally designated one that we've found. What you do get is a compact grid of homes built up around the old Pennsylvania Railroad line in a fairly narrow stretch of the 1800s and early 1900s, which keeps the housing stock in a fairly consistent age range.",
          },
          {
            q: "How far is Atglen from your shop in East Earl?",
            a: "About sixteen miles, roughly twenty-six minutes via Route 897. It's one of the smaller towns on our Chester County list, and its compact size usually means a faster estimate turnaround than a spread-out township call would take, simply because there's less ground to cover once we're there.",
          },
        ]}
      />
    </>
  );
}
