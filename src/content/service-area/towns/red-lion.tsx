import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Incorporated", value: "1880" },
          { label: "Population", value: "6,506 (2020)" },
          { label: "Peak cigar factories", value: "~150" },
          { label: "Share of US cigar output", value: "~10%" },
        ]}
      />

      <p>
        Red Lion was incorporated in 1880 and spent the next several decades
        as one of the most productive cigar-manufacturing towns in the
        country. At its peak the borough had roughly 150 cigar factories
        running at once, together turning out something like a tenth of
        every cigar made in the United States. That kind of concentrated
        output paid well enough that Red Lion was reportedly the richest
        town per capita in the nation during the 1920s, a remarkable
        distinction for a borough this size. It took a long time to wind all
        the way down, too. The last cigar factory in town didn&apos;t close
        until 2011, closer to a century after the boom than to the
        beginning of it, and the borough now has a designated Red Lion
        Borough Historic District recognizing the factory buildings and
        worker housing that era left behind.
      </p>

      <p>
        That per-capita wealth wasn&apos;t spread evenly, either. Cigar
        manufacturing in a town like Red Lion tended to concentrate money
        at the top, factory owners and cigar barons building grander homes
        nearer the center of town, while the workers rolling the cigars
        lived in the smaller frame rows that still make up most of the
        borough&apos;s housing stock today. Both kinds of house are part
        of the same boom, just very different ends of it, and both still
        need the same careful measuring when it&apos;s time to replace a
        window or a door that&apos;s outlasted the era that built it.
      </p>

      <p>
        The decline, when it came, wasn&apos;t unique to Red Lion. American
        cigar manufacturing shrank across the 20th century as cigarette
        smoking overtook cigars in popularity and larger, more mechanized
        producers squeezed out small-town shops, a shift that hit
        cigar-heavy Pennsylvania boroughs like this one particularly hard.
        What&apos;s unusual about Red Lion is how long it held on. A
        hundred years after the peak, there was still a working cigar
        factory in town, closing only in 2011, long after most of the
        industry it once helped lead had already moved on or shut down
        elsewhere.
      </p>

      <p>
        Red Lion also sits a little differently on the map than our other
        York County towns. It&apos;s south of the city on PA-24 and PA-74,
        off the direct Route 30 corridor that Wrightsville and Hallam sit
        along, which is part of why it built its own self-contained
        identity around cigars rather than growing as a pass-through town.
        The 150-factory figure is easy to say and hard to picture, but it
        means that for a stretch of decades, an outsized share of the
        working households in this one borough depended on the same
        industry, the same shift schedules, and the same kind of modest,
        close-together housing to match.
      </p>

      <p>
        What that boom built, mostly, was housing for the people rolling
        those cigars. Red Lion&apos;s rowhomes and small frame houses
        largely date to that 1880s-to-1920s stretch, modest construction
        typical of a small industrial borough rather than the per-capita
        wealth the town was briefly known for. A hundred-plus years later,
        that&apos;s a lot of original doors and window frames that have
        outlasted the industry that paid for them. It&apos;s why entry-door
        work in Red Lion so often comes down to matching new hardware to a
        frame that&apos;s been through a century of Pennsylvania winters,
        and when that frame&apos;s still sound, that&apos;s a repair job,
        not a replacement. Our <Link href="/doors/repair">door repair</Link>{" "}
        page covers how we make that call.
      </p>

      <p>
        Physically, most of that worker housing follows a pattern common to
        small industrial boroughs of the era: narrow two-story frame homes
        on tight lots, a front porch facing the street, and simple detailing
        compared to the grander homes built nearer the borough center.
        Doors and windows on these houses were sized to a standard of their
        own time, not ours, which is usually close enough to modern
        dimensions that a straightforward swap works, but still worth
        confirming on site rather than assuming. On the rowhomes that
        share a wall with a neighbor, that shared wall changes a few
        practical things about the job too. Any work that touches the
        party wall itself, not just the window or door opening but
        flashing or trim that crosses onto the neighbor&apos;s side,
        needs to be coordinated rather than assumed. The standalone frame
        houses don&apos;t have that particular issue, but they&apos;re
        more prone to threshold and sill rot at the entry door instead, a
        century of rain and foot traffic wearing down wood that was never
        treated to modern standards. We check both the frame and the sill
        on every Red Lion door job, since a door that looks fine at eye
        level can still be sitting on a sill that&apos;s lost its
        structural integrity underneath.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Red Lion's historic district under any exterior restrictions?",
            a: "It can be, since Red Lion's district is a local borough designation rather than just a National Register listing. Depending on where your property falls, there may be exterior guidelines to follow. We'll check with you before ordering materials if your home sits inside the district boundary.",
          },
          {
            q: "What's cigar-era worker housing like to work on?",
            a: "Mostly narrow two-story frame homes on tight lots, some sharing walls, with doors and windows sized close to modern dimensions but not always exact. We measure every opening rather than assume it matches a neighboring house, even on the same block.",
          },
          {
            q: "Do you repair original doors or only replace them?",
            a: "Both, depending on condition. A frame that's still square and solid usually just needs new hardware and weatherstripping. One that's rotted or racked out of square is a replacement job. We'll tell you honestly which one you're looking at before quoting anything.",
          },
        ]}
      />
    </>
  );
}
