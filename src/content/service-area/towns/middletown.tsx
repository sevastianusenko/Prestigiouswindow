import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Founded", value: "1755, on the Susquehanna" },
          { label: "Incorporated", value: "Borough, 1828" },
          { label: "Population", value: "9,550 (2020)" },
          { label: "From East Earl", value: "68 min" },
        ]}
      />

      <p>
        Middletown sits on the Susquehanna River about ten miles southeast
        of Harrisburg, and it earned its name honestly: it was roughly
        midway between Lancaster and Carlisle when it was founded in 1755,
        decades before it was formally incorporated as a borough in 1828.
        Seventy-three years between founding and incorporation tells you
        something about how long people were already living and building
        here before the paperwork caught up.
      </p>

      <p>
        Like a lot of Colonial-era Susquehanna towns, Middletown&apos;s
        location wasn&apos;t an accident. Before rail and highways, the river
        itself was the practical way to move people and goods through this
        part of Pennsylvania, and a town sited on the water at a useful
        midpoint had an obvious head start over one sited inland. That early
        advantage is part of why Middletown had decades of building already
        behind it by the time it bothered incorporating as a formal borough,
        and why its oldest sections sit close to the water rather than set
        back from it.
      </p>

      <p>
        The borough&apos;s own records describe the resulting housing stock
        as running &quot;from log houses to Victorian mansions,&quot; and
        that&apos;s not an exaggeration for effect, it&apos;s a fair summary
        of what two and a half centuries of continuous settlement actually
        produces. A town founded before the Revolution and still growing
        through the Victorian era ends up with construction from every
        decade in between: log construction from the 1700s a few blocks from
        stone and brick built with 19th-century river and rail money, and
        plenty of ordinary infill from every era after that. Few towns on
        our list have that wide a spread in one place, which means the
        window and door work here rarely looks the same from one block to
        the next. Some of it is exactly the kind of older-home{" "}
        <Link href="/windows/repair">window repair</Link> we specialize in;
        some of it is a straightforward{" "}
        <Link href="/windows/replacement">replacement</Link> on a much newer
        build. We measure each job rather than assuming based on the block.
      </p>

      <p>
        Middletown is also home to Penn State Harrisburg, the
        university&apos;s upper-division campus, which brings a steady
        population of students, faculty, and staff housing into a borough
        that would otherwise be considerably smaller. And Three Mile
        Island&apos;s Unit 2, the site of the 1979 partial meltdown, sits in
        the borough&apos;s immediate vicinity, in neighboring Londonderry
        Township. We mention it because it&apos;s a documented part of the
        area&apos;s history, not because it has any bearing on a window or
        door job more than four decades later.
      </p>

      <p>
        Penn State Harrisburg&apos;s campus is worth a second mention because
        of what &quot;upper-division&quot; actually means: it&apos;s not a
        traditional four-year campus taking in freshmen straight out of high
        school, it&apos;s built mainly for students transferring in with
        credits already earned, along with graduate programs. That changes
        the housing picture around it a little compared to a typical college
        town. There&apos;s real demand for rental housing near campus, but
        it&apos;s layered on top of Middletown&apos;s existing borough
        housing stock rather than having reshaped the whole town around
        student life the way some campus towns do.
      </p>

      <LocalFaq
        items={[
          {
            q: "How far is Middletown from your shop in East Earl?",
            a: "Around 68 minutes, one of the longer drives in our service area, since Middletown sits toward the far end of Dauphin County along the Susquehanna. We treat it as a dedicated trip rather than a quick stop.",
          },
          {
            q: "Does Middletown's older housing need custom-sized windows or doors?",
            a: "Frequently. A borough founded in 1755 has openings from every era since, log construction, colonial and Victorian stonework, and everything after, and a lot of that predates standardized manufacturing sizing. We measure on site rather than assuming a stock size fits.",
          },
          {
            q: "Is Three Mile Island a concern for homeowners in Middletown today?",
            a: "It's a documented part of the area's history, Unit 2's 1979 partial meltdown happened in neighboring Londonderry Township, but it has no bearing on a window or door job more than four decades later. We mention it for context, not because it affects our work.",
          },
        ]}
      />
    </>
  );
}
