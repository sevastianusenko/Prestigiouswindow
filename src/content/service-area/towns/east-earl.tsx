import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Settled", value: "1722, by Welsh farmers" },
          { label: "Township incorporated", value: "1851" },
          { label: "CDP population", value: "~1,113 (2020)" },
          { label: "Township population", value: "~6,721" },
        ]}
      />

      <h2>History</h2>

      <p>
        East Earl Township was settled in 1722 by Welsh farmers, part of the
        same wave of settlement that put down roots across a lot of eastern
        Lancaster County that decade. German families followed within a
        generation, drawn by the same limestone-rich ground that still makes
        this part of the county some of the most productive farmland in the
        country. The township itself wasn&apos;t formally incorporated until
        1851, so for well over a century this was just farms, mills, and a
        scattering of crossroads, no government line drawn around any of it
        yet. Some of that early building stock is still standing and still
        lived in. The Henry Weaver Farmstead, a limestone Pennsylvania-German
        farm complex, has its oldest section dated to around 1761 and carries
        a listing on the National Register of Historic Places. That&apos;s a
        wall that was already standing when the Continental Congress was
        arguing over independence, and it&apos;s still part of a working
        property today, not a museum piece behind glass.
      </p>

      <p>
        East Earl&apos;s other National Register listing, the Spring Grove
        Forge Mansion, points to a slightly different side of the
        township&apos;s early years, one that wasn&apos;t purely
        agricultural. Forges and mills went in wherever there was water power
        to run them, and the mansion attached to this one is evidence that
        East Earl had an industrial streak well before anyone would have
        called it that. We don&apos;t bring any of this up as trivia. When a
        house or outbuilding this old needs a window or door touched, the age
        shows up directly in the opening itself, hand-framed, not milled to a
        modern standard size, and that&apos;s exactly the kind of job we
        cover in more detail on our{" "}
        <Link href="/old-homes">older-homes page</Link>. Being based in East
        Earl means we see this building stock more than anyone else on our
        list, and we&apos;ve learned not to guess at a measurement here.
      </p>

      <p>
        Between the farmstead and the forge mansion, East Earl has two
        separate, verified listings on the National Register within a few
        miles of each other, which is more concentrated documented history
        than most townships this size can claim. That doesn&apos;t mean
        every house in East Earl dates back to the 1700s, plenty of what we
        work on is a lot newer than that, but it does mean the odds of
        running into a genuinely old opening are higher here than almost
        anywhere else on our route. It&apos;s part of why our{" "}
        <Link href="/windows/repair">window repair</Link> calls in East
        Earl skew a little older than they do in some of the
        newer-construction towns nearby.
      </p>

      <h2>One township, three names</h2>

      <p>
        East Earl Township is bigger than just the crossroads people mean
        when they say &quot;East Earl.&quot; The same township boundary also
        contains Blue Ball and Goodville, two more stops on our list, which
        means three of the six communities we cover most often sit inside a
        single township line. None of the three is its own incorporated
        borough. All three are unincorporated communities, what the census
        calls census-designated places, so zoning questions, permitting, and
        any exterior-work rules that might apply to a property run through
        the same East Earl Township office no matter which of the three
        names is on the mailbox. It&apos;s a small piece of local government
        trivia, but it&apos;s the kind of thing worth knowing before a
        homeowner starts calling around.
      </p>

      <p>
        Farmhouses of this age also come with a specific set of practical
        realities that don&apos;t show up on a newer build. Most were
        finished inside with plaster over wood lath rather than drywall,
        which means pulling an old sash or a door slab out carelessly can
        crack plaster well past the opening itself, sometimes across an
        entire wall. Any house built before 1978 may also have lead paint
        somewhere in its layers, and window sashes get repainted more than
        almost anything else in a house, so proper lead-safe practices
        aren&apos;t optional on a property this age. None of that is a
        reason to avoid working on an old farmhouse. It&apos;s a reason to
        hire someone who already expects it, instead of finding out
        partway through a job.
      </p>

      <p>
        Being spread out changes things in smaller ways too. A farmhouse a
        quarter mile down its own lane takes longer to get equipment to
        than a house on a tight borough block, and a lot of these
        properties are still working farms, with driveways shared by
        tractors and delivery trucks on the same afternoon a crew is trying
        to get a window in. We plan around that instead of treating East
        Earl like a denser town with more space between houses.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is East Earl Township the same as the village of East Earl?",
            a: "Not exactly. East Earl Township, incorporated in 1851, is the larger governmental boundary, and it also contains Blue Ball and Goodville. The village of East Earl itself is an unincorporated community inside that township. When people say they're \"in East Earl,\" they usually mean the village, but our shop and our fastest response times cover the whole township.",
          },
          {
            q: "Do you work on limestone farmhouses with original window openings?",
            a: "Regularly. Limestone farmhouses in East Earl Township often have openings that were framed by hand well before anyone standardized a window size, and the walls themselves can run close to two feet thick. We measure every opening on site rather than guessing, and we'll tell you honestly whether a stock replacement fits or the job needs a custom-sized unit.",
          },
          {
            q: "How do you handle scheduling around a working farm property?",
            a: "We ask up front. A lot of East Earl properties are still active farms, with driveways and yard access shared by equipment and sometimes livestock, so we plan crew arrival and material staging around that instead of assuming a property functions like a standard residential lot.",
          },
        ]}
      />
    </>
  );
}
