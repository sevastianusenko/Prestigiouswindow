import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Population", value: "~4,915 (CDP)" },
          { label: "Historic district", value: "88.5 acres, listed 1979" },
          { label: "Lebanon Valley College", value: "Founded 1866" },
          { label: "College campus", value: "357 acres, ~1,900 students" },
        ]}
      />

      <Landmark>
        <p>
          Annville&apos;s Main Street corridor, running along Route 422, is
          listed on the National Register of Historic Places as the Annville
          Historic District, added in 1979 and covering roughly 88.5 acres.
          What stands out is the range packed into that one stretch of road.
          On the west end, around 30 log houses survive, some of the oldest
          residential construction left standing anywhere in the county.
          Moving east, the district shifts into numerous stone houses built
          in the late 1700s and early 1800s, and by the time Main Street
          reaches its eastern end, the architecture has changed again into
          Victorian-era mansions built by 19th-century industrialists. Three
          distinct building eras, all still standing on the same road. For a
          community this size, having log, stone, and Victorian brick
          construction within easy walking distance of each other is unusual
          even by Lebanon County standards. Because so much of the district
          survives intact rather than in scattered fragments, it&apos;s one
          of the few places on our list where you can walk from a
          colonial-era log house to a Gilded Age mansion in about ten
          minutes without ever leaving Main Street.
        </p>
      </Landmark>

      <h2>A college town that never replaced its Main Street</h2>
      <p>
        Lebanon Valley College sits in the middle of all this. It&apos;s a
        private liberal arts college founded in 1866, with roughly 1,900
        students on a 357-acre campus today, and it gives Annville a
        college-town rhythm that most of the other small communities we
        cover don&apos;t have. What it hasn&apos;t done is erase the older
        Main Street around it. In a lot of college towns, the campus expands
        and the older housing nearby gets replaced or converted into student
        rentals until not much of the original streetscape survives.
        Annville&apos;s historic district has held on instead. Log houses,
        stone houses, and Victorian mansions are still standing on the same
        corridor as the campus rather than having been cleared to make room
        for it. For us, that means a genuinely wide range of window and door
        work packed into a fairly small area. Original openings in an
        18th-century log house look nothing like the tall, formal windows on
        a Victorian-era mansion built for an industrialist&apos;s family a
        century later, even though both houses might be a five-minute walk
        from each other. It also means we rarely walk into an Annville job
        already knowing what we&apos;ll find. A stone house near the log
        district might call for historically appropriate profiles and true
        divided lites, while a Victorian mansion two blocks over needs
        taller, more ornate sash work entirely, and a home built in the
        decades since needs neither. Age alone doesn&apos;t tell the whole
        story here the way it might in a town with one dominant building
        era. That&apos;s also why we don&apos;t assume replacement is
        automatic just because a house is old; see{" "}
        <Link href="/repair-or-replace">repair or replace</Link> for how we
        actually make that call.
      </p>

      <h2>What survives from each era looks different up close</h2>
      <p>
        The log houses on Annville&apos;s west end aren&apos;t recreations,
        they&apos;re genuine 18th-century construction, and that shows in
        details a lot of newer buildings don&apos;t have: thick, solid
        walls, small and deeply set window openings, and framing that was
        often added or altered as the building changed hands over two
        centuries. Stone houses from the same general period have their own
        version of the same problem, masonry openings sized for the
        technology and glass available at the time, not for a modern
        replacement unit ordered off a size chart. The Victorian-era
        mansions on East Main Street are the opposite kind of challenge,
        taller and more formal window openings, often with decorative
        surrounds or multiple lites per sash, built for houses meant to
        look impressive from the street rather than simply keep weather
        out. Three eras, three completely different sets of assumptions
        about what a window or door job actually involves before a crew
        ever measures anything.
      </p>
      <p>
        Annville&apos;s year-round population is small, under 5,000 by the
        most recent count, which means the roughly 1,900 students at
        Lebanon Valley College are a real presence in the area&apos;s
        day-to-day rhythm rather than just a name on a campus map. Even so,
        the college hasn&apos;t reshaped the town the way a fast-growing
        campus sometimes does elsewhere. Main Street still reads as a
        historic residential corridor first and a college town second, log
        houses and stone houses and Victorian mansions doing most of the
        talking, with the campus sitting alongside that history rather than
        replacing it.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Annville a borough?",
            a: "No, and this trips people up. Annville is not an incorporated borough, it's an unincorporated village inside Annville Township. Most people, including us, just call it Annville regardless, but it's worth knowing if you're looking up local ordinances or permits, since those run through the township.",
          },
          {
            q: "Do homes in the Annville Historic District have restrictions on window replacement?",
            a: "Not automatically. A National Register listing is mostly a record and an honor, it doesn't by itself create the kind of local design review that a municipal historic overlay district does, like the one in nearby Cornwall. Still worth confirming with Annville Township directly before assuming either way, and we're glad to help sort that out.",
          },
          {
            q: "How old are the log houses in the historic district?",
            a: "The National Register listing itself dates to 1979, but the log construction goes back to the 1700s, the same century Annville was first settled. About 30 of these log houses survive on the west end of Main Street, one of the more concentrated groupings of colonial-era log construction anywhere in the county.",
          },
        ]}
      />
    </>
  );
}
