import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Mount Joy is really more than one town wearing a single name. The
        borough was created in 1851 when the Pennsylvania legislature
        consolidated the village of Mount Joy with neighboring Richland,
        an older settlement once known as Rohrer&apos;s Town, and
        incorporated the two together. Today&apos;s borough also takes in
        Florin, which is part of why Main Street doesn&apos;t feel like one
        continuous block of the same era from end to end.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1851" },
          { label: "Population", value: "8,325 (2020)" },
          { label: "Land area", value: "2.41 sq mi" },
          { label: "Formed from", value: "Mount Joy and Richland" },
        ]}
      />

      <h2>A brewer, a hotel, and a Market Street landmark</h2>

      <Landmark>
        <p>
          Alois Bube, a brewer trained in Bavaria, came to the United
          States in 1869 and was brewing in Mount Joy by the late 1870s.
          In 1889 he built a larger brewery and the Central House Hotel
          next to it on North Market Street, an Italianate building with
          arched windows and pressed-metal cornices. The hotel, at 102
          North Market, was listed on the National Register of Historic
          Places in 1973, and the brewery complex behind it is often
          described as the only surviving lager-era brewery in the country
          still in nearly intact condition. Today it&apos;s Bube&apos;s
          Brewery, a restaurant and microbrewery.
        </p>
      </Landmark>

      <p>
        Bube&apos;s isn&apos;t the only piece of industrial history still
        standing. The George Brown&apos;s Sons Cotton and Woolen Mill on
        East Main Street was added to the National Register in 1995, and
        the Nissly Swiss Chocolate Company building on Wood Street was
        listed in 1996. Spangler&apos;s Flour Mill has been operating in
        town since 1854. Taken together, it&apos;s the profile of a
        working borough that made things, and housed the people who made
        them within walking distance.
      </p>

      <h2>Pre-1939 downtown, newer homes outside it</h2>

      <p>
        Much of the residential architecture downtown dates from before
        1939, while a lot of the development on the outskirts has been
        built since. That&apos;s the split that shapes most of our work
        here. Downtown, we see original openings that were never built to
        a modern standard size, older wood sash, and entry doors set into
        frames that have moved a little with every decade. Out toward the
        newer neighborhoods, it&apos;s stock-size openings and
        builder-grade units now old enough to start failing at the seal.
        If your double-panes have gone cloudy, our post on{" "}
        <Link href="/blog/foggy-window-seal-repair">foggy window seals</Link>{" "}
        explains what&apos;s actually happening and what can be done.
      </p>

      <p>
        On the older blocks, a{" "}
        <Link href="/windows/repair">window repair</Link> is often the
        right first step, since a solid old frame with a worn sash or
        failed glazing can usually be brought back. When the frame is
        rotted or out of square, a{" "}
        <Link href="/windows/replacement">window replacement</Link> built
        to the measured opening is the better call. Entry doors on
        downtown houses tend to take the most wear, and the same logic
        applies: a <Link href="/doors/repair">door repair</Link> when the
        frame is sound, a full{" "}
        <Link href="/doors/replacement">door replacement</Link> when it
        isn&apos;t. Our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link>{" "}
        explains how we decide.
      </p>

      <p>
        Any house built before 1978 may have lead paint somewhere in its
        trim and sash layers, and pre-1939 houses usually have plaster
        walls rather than drywall. We plan for both on older Mount Joy
        jobs, with containment and careful trim removal, instead of
        treating them like a newer build. Our{" "}
        <Link href="/old-homes">page on older homes</Link> goes into more
        detail.
      </p>

      <LocalFaq
        items={[
          {
            q: "Are there historic-district rules in Mount Joy for window and door replacements?",
            a: "Several individual buildings in Mount Joy are on the National Register, but that listing doesn't usually control what a private homeowner installs. Local rules can be separate, so check with Mount Joy Borough before choosing a product if you're unsure, and tell us so we can work within whatever applies.",
          },
          {
            q: "Is Mount Joy within your regular service area?",
            a: "Yes. It's farther west than our closest towns, but it's a regular part of our Lancaster County route, and we quote Mount Joy jobs after walking the property, the same as anywhere else.",
          },
          {
            q: "My newer Mount Joy home has foggy windows. Do I need all new windows?",
            a: "Not necessarily. Fogging between panes means the seal on that insulated glass unit has failed, and depending on the window, the glass unit can sometimes be replaced without replacing the whole window. We'll look at the frame and tell you which option makes sense.",
          },
        ]}
      />
    </>
  );
}
