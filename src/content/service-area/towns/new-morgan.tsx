import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>One of the smallest boroughs in the state</h2>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1988, by a 9-1 vote" },
          { label: "Land area", value: "5.79 sq mi" },
          { label: "Population", value: "54 (2020)" },
          { label: "From East Earl", value: "17 min" },
        ]}
      />

      <p>
        New Morgan didn&apos;t grow into a borough the way most Pennsylvania
        towns did, it was created as one, on paper, almost overnight. In
        1987, Raymond Carr, the sole owner of a company called Morgantown
        Properties, petitioned to carve a new borough out of roughly 3,500
        acres spanning Caernarvon and Robeson Townships. Under the rules at
        the time, the decision fell to whoever actually lived within the
        proposed boundary, which in this case was ten people, most of them
        Carr&apos;s own tenants. They voted 9 to 1 in April 1988 to
        incorporate. The plan behind that vote was enormous for a place this
        size: a Victorian-themed village, a 1,000-room hotel, an 18-hole golf
        course, a cultural center, and later on a residential development
        called Bryn Eyre and a hospital, the whole thing estimated at around
        $800 million. Most of it was never built.
      </p>

      <p>
        The borough&apos;s population has swung around on itself ever since:
        36 residents in 1990, 35 in 2000, a jump to 71 by 2010, then back
        down to 54 by the 2020 census, still one of the smallest numbers of
        any borough in Pennsylvania. The state has since changed its own
        rules around this. A new borough now has to show at least 500
        residents before it&apos;s allowed to incorporate, which means the
        process that created New Morgan in 1988 couldn&apos;t happen again
        today.
      </p>

      <p>
        There isn&apos;t a historic downtown or a landmark building to point
        to here, and we&apos;re not going to invent one. What there is, is a
        small number of homes in a borough that most companies skip past
        because it barely registers on a map. We don&apos;t skip it. If
        you&apos;re in New Morgan, or in the parts of Caernarvon and Robeson
        Townships that surround it and share its ZIP code, the drive out
        gets treated the same as any other stop on our list, about 17
        minutes from our shop in East Earl.
      </p>

      <LocalFaq
        items={[
          {
            q: "Why is New Morgan a borough at all if it's this small?",
            a: "A local landowner petitioned to form it in 1987, and the vote to incorporate was decided by the ten people who happened to live within the proposed boundary. Pennsylvania has since raised the bar to 500 residents for any new borough, so a place this size couldn't be created the same way today.",
          },
          {
            q: "What happened to the planned Victorian village, hotel, and golf course?",
            a: "Most of it was never built. What's on the ground today looks little like the 1980s plans, and we won't pretend to know every reason a project that size didn't happen. We just know the address is real and the drive out is short.",
          },
          {
            q: "Since New Morgan doesn't have much housing stock of its own, what kind of work do you actually do out there?",
            a: "Most calls near New Morgan are actually just outside the borough line, in the surrounding stretches of Caernarvon and Robeson Townships that share its ZIP code and the same short drive from our shop.",
          },
        ]}
      />
    </>
  );
}
