import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <p>
        Ephrata is the largest borough in our corner of northern Lancaster
        County, with close to fourteen thousand residents packed into about
        three and a half square miles. It&apos;s also home to a group of
        buildings that predate the American
        Revolution by more than three decades and still stand, a
        short walk from Main Street.
      </p>

      <FactStrip
        items={[
          { label: "Incorporated", value: "1891" },
          { label: "Population", value: "13,794 (2020)" },
          { label: "Cloister founded", value: "1732" },
          { label: "Main Street", value: "U.S. Route 322" },
        ]}
      />

      <h2>A town that grew up around a cloister</h2>

      <p>
        Johann Conrad Beissel founded the Ephrata Cloister in 1732 on the
        banks of the Cocalico Creek, a semimonastic community of celibate
        brothers and sisters with a married congregation living around
        them. At its height it held around 80 celibate members and a
        couple hundred householders. The monastic life ended when the last
        celibate member died in 1813, but the buildings stayed, and the
        Commonwealth took over the grounds in 1941. The Pennsylvania
        Historical and Museum Commission still runs it today.
      </p>

      <Landmark>
        <p>
          The Cloister&apos;s surviving buildings, put up between roughly
          1740 and 1746, are described in their National Register
          nomination as the most markedly German and medieval of all the
          colonial-era architecture in Pennsylvania. The Saal, the
          sisters&apos; meeting house, has a hewn oak half-timber frame
          infilled with stone and covered in hand-hewn weatherboards. The
          Saron next to it is a four-story building under a steep shingled
          roof. The site was named a National Historic Landmark in 1967.
        </p>
        <p>
          The community also ran the second German-language printing press
          in the colonies, and excavations have shown the Cloister served
          as a hospital during the Revolutionary War.
        </p>
      </Landmark>

      <p>
        We don&apos;t touch the Cloister, obviously, and nobody should be
        putting vinyl windows in a building like that. But it sets the tone
        for the rest of the borough. Ephrata has a long memory, and a lot
        of homeowners here care about keeping an older house looking like
        an older house, even when the windows inside it need to start
        performing like modern ones.
      </p>

      <h2>Main Street, the railroad, and what got built around them</h2>

      <p>
        Ephrata became a borough in 1891, and its downtown filled in over
        the decades that followed, with U.S. Route 322 running straight
        through the center as Main Street and the Reading and Columbia
        Railroad carrying passengers through downtown until 1952. The
        Ephrata Commercial Historic District is listed on the National
        Register, and some of its anchors are easy to spot: the Beaux-Arts
        Ephrata National Bank building, designed by C. Emlen Urban and
        finished in 1925, and the Main Theater, which opened in 1938. Before
        all that, Ephrata was something of a resort town, home to the
        Mountain Springs Hotel at Main and Spring Garden Streets, which
        stood empty for years before most of it came down in 2004.
      </p>

      <p>
        For us, that history means the neighborhoods closest to Main Street
        are where the older openings are: double-hung windows that may have
        been replaced once already, sometimes badly, and entry doors set
        into frames that have shifted over the better part of a century.
        On a house like that, we measure every opening on site and decide
        between an insert and a full-frame{" "}
        <Link href="/windows/replacement">window replacement</Link> based
        on what the frame actually looks like, not what the house down the
        street needed. Further out, the newer development around the edges
        of the borough is a more straightforward job, standard openings and
        builder-grade units that are often due for an upgrade rather than a
        rescue.
      </p>

      <p>
        Not every older window here needs to come out, either. A sash that
        won&apos;t stay up, a broken pane, or a failed seal is often a{" "}
        <Link href="/windows/repair">window repair</Link>, and the same goes
        for an entry door that just needs weatherstripping and an adjusted
        strike plate rather than a whole new unit. Our{" "}
        <Link href="/repair-or-replace">repair or replace</Link> page walks
        through how we make that call, and if your house is one of the
        older ones near downtown, our guide to{" "}
        <Link href="/blog/replacing-windows-in-an-old-house">
          replacing windows in an old house
        </Link>{" "}
        covers what&apos;s different about the work. The{" "}
        <Link href="/old-homes">older homes</Link> page is worth a read too,
        including the part about lead paint, since any house built before
        1978 may have it somewhere in the trim.
      </p>

      <LocalFaq
        items={[
          {
            q: "Does the Ephrata Commercial Historic District limit what windows or doors I can install?",
            a: "A National Register listing on its own doesn't usually restrict what a private homeowner can do, but local rules are a separate question. If your property is in or near the downtown district, check with the borough before we order anything, and tell us what you find so we can work within it.",
          },
          {
            q: "My house near Main Street already has replacement windows that don't fit well. Can you fix that?",
            a: "Often, yes. A lot of older Ephrata houses have had at least one earlier round of replacements, and poorly sized inserts are a common problem. We measure the original openings and either correct the fit or recommend a full-frame replacement if the frame itself has gone soft.",
          },
          {
            q: "How far is Ephrata from your shop?",
            a: "About twenty minutes from East Earl, straight up Route 322, so it's one of the quicker drives on our route.",
          },
        ]}
      />
    </>
  );
}
