import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <Landmark>
        <p>
          William Bird began taking up land warrants along Hay Creek as early
          as 1737 and built an iron forge here around 1740, near where the
          creek meets the Schuylkill. Between 1737 and 1751 he assembled
          roughly 1,600 acres, and in 1751 he built the stone mansion that
          still stands today as the Birdsboro Community Memorial Center,
          directly across from the site of his forge. He died in 1761, and
          the town that grew up around his ironworks still carries his name.
        </p>
        <p>
          His son, Marcus Bird, known as Mark, took the operation further
          than his father ever had. By the Revolutionary War, Mark
          Bird&apos;s works were producing cannon, shot, and shell for both
          the Pennsylvania and Continental governments, and he served as
          Deputy Quartermaster General of Pennsylvania. In 1778 he sent
          1,000 barrels of flour from his own mill down the Schuylkill to
          feed George Washington&apos;s troops at Valley Forge. He had
          already founded Hopewell Furnace in 1771, about five miles
          upstream on Hay Creek, and between the two operations he became,
          for a time, the largest iron producer in the American colonies.
        </p>
        <p>
          None of it lasted. Congress&apos;s wartime payments never covered
          the cost of running an operation that size, and by 1784 Bird was
          forced to close the Birdsboro ironworks after a national economic
          downturn. The Hopewell property was auctioned off in 1788, and
          Bird left Pennsylvania for North Carolina. Matthew Brooke bought up
          the Bird family&apos;s remaining holdings here in 1796, and his
          descendants rebuilt the operation as the E. &amp; G. Brooke Iron
          Company, which carried Birdsboro&apos;s iron industry into the next
          century and eventually into Birdsboro Steel.
        </p>
      </Landmark>

      <h2>Main Street&apos;s early-1800s twins and singles</h2>
      <p>
        Birdsboro incorporated as a borough in 1872, carved out of Union and
        Robeson Townships, though the settlement itself was already
        substantial by 1762, the year Berks County was formed. Walk Main
        Street today and most of what you&apos;re looking at is early-1800s
        construction: stone and brick twins and single homes built shoulder
        to shoulder, with a handful of larger stone houses mixed in. St.
        Michael&apos;s Episcopal Church and its parish house, both listed on
        the National Register of Historic Places since 1982, are part of the
        same 19th-century architecture, built once the iron money started
        putting up something more permanent than forges. Birdsboro&apos;s
        population sits around 5,100, small enough that the housing stock
        hasn&apos;t been diluted by much new construction. Water service
        from three reservoirs didn&apos;t arrive until 1883, and electric
        lights followed in 1896, well after most of these homes were already
        standing.
      </p>
      <p>
        That age matters for <Link href="/windows/replacement">window and
        door work</Link>. Openings on a 200-year-old twin were never cut to a
        modern standard size, so a replacement ordered off a generic
        measurement usually doesn&apos;t fit right. We measure every opening
        on site for exactly that reason, and on the oldest homes downtown,{" "}
        <Link href="/old-homes">repair</Link> is sometimes the better call
        than a full replacement anyway.
      </p>
      <p>
        Entry doors face the same problem. A twin built in 1820 often has a
        doorway a few inches narrower than what today&apos;s{" "}
        <Link href="/doors/replacement">pre-hung door stock</Link> assumes,
        and the trim around it was usually built to match the house, not a
        catalog. We see a fair number of doors here that were
        &quot;replaced&quot; at some point with a unit that technically fit
        the rough opening but never sat right in it, gaps at the top, a jamb
        shimmed more than it should have needed to be. Careful{" "}
        <Link href="/doors/repair">repair</Link> can fix a lot of that
        without touching the opening at all.
      </p>

      <h2>The Brooke family&apos;s mansion on the hill</h2>
      <p>
        Iron money eventually built more than forges and rowhomes. In 1887
        and 1888, Edward Brooke II, a descendant of the Matthew Brooke who
        had bought out the Bird family a century earlier, built a Queen Anne
        mansion on a hilltop overlooking the mills as a wedding gift to his
        bride. He hired Frank Furness, one of the best-known American
        architects of the era, to design it: brownstone on the first story,
        wood shingle above, a semicircular tower with a conical roof, and
        elaborate floral ornamentation throughout. Edward II later designed
        his own 1893 addition that brought the house to nearly 14,000 square
        feet, and in 1898 he added a carriage house built to hold two dozen
        carriages on a hand-operated lift.
      </p>
      <p>
        The Brooke family controlled Birdsboro&apos;s iron industry for
        generations through the E. &amp; G. Brooke Iron Company and later
        Birdsboro Steel, and the mansion&apos;s hilltop position over the
        mills wasn&apos;t an accident. Family ownership ended in the 1940s,
        and the house spent thirty years afterward as a nursing home, then
        more years as a bed-and-breakfast, before selling at auction in 2018
        for $572,000 to new owners working to restore it. It&apos;s not open
        to the public and we don&apos;t work on it, but it&apos;s a useful
        marker of how much money moved through this small town at the height
        of the iron era, and how much of that money is still standing in the
        buildings around it.
      </p>

      <FactStrip
        items={[
          { label: "Forge built", value: "c. 1740" },
          { label: "Incorporated", value: "1872" },
          { label: "Population", value: "5,106 (2020)" },
          { label: "From East Earl", value: "27 min" },
        ]}
      />

      <LocalFaq
        items={[
          {
            q: "Is Birdsboro's Main Street a protected historic district?",
            a: "St. Michael's Episcopal Church and its parish house carry their own National Register listing, but Main Street as a whole doesn't have a municipal historic overlay the way some Berks County boroughs do. Most exterior work, windows and doors included, doesn't need a design review board, though we still measure and match carefully because of the age of the openings, not because of a permit.",
          },
          {
            q: "Are there other historic sites nearby worth knowing about?",
            a: "Hopewell Furnace National Historic Site, founded by Mark Bird himself in 1771, sits about five miles south along Hay Creek, with French Creek State Park right next to it. Both are worth a visit if you're already out this way.",
          },
          {
            q: "How does Birdsboro's age affect a typical window or door quote?",
            a: "It usually means more time spent measuring and less certainty that a standard-size unit will just drop in. On a 200-year-old twin, that extra care up front saves a return trip later, so we build it into the quote rather than surprise you with it after the crew shows up.",
          },
        ]}
      />
    </>
  );
}
