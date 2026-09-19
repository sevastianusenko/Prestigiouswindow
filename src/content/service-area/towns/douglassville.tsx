import { FactStrip, LocalFaq } from "@/components/service-area/Local";
import { Opinion } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>The oldest house in Berks County, and its newest neighbors</h2>

      <FactStrip
        items={[
          { label: "Population", value: "518 (2020)" },
          { label: "Oldest house", value: "Mouns Jones House, 1716" },
          { label: "Oldest congregation", value: "Old St. Gabriel's, 1720" },
          { label: "From East Earl", value: "37 min" },
        ]}
      />

      <p>
        Douglassville is an unincorporated community within Amity Township,
        sitting along US Route 422 and PA Route 724. It&apos;s also the site of
        Morlatton Village, the first European settlement on the Schuylkill River
        in what&apos;s now Berks County, founded by Swedish colonists years
        before William Penn&apos;s better-known English settlers arrived
        further south. Four separate structures from that early village are
        still standing today, preserved as a small cluster of historic sites
        within sight of the modern town.
      </p>

      <h2>Morlatton Village</h2>
      <p>
        In 1701, Swedish Lutheran minister Andreas Rudman secured a grant
        from William Penn setting aside 10,000 acres near Manatawny Creek for
        his congregation. Of the seventeen Swedish colonists named in that
        grant, only one, Mans Mouce Jonasson, later known as Mouns Jones,
        actually settled on the land, building his home here around 1704.
        His stone dwelling, a two-and-a-half-story house roughly 24 by 30
        feet with a nine-foot kitchen fireplace, is commonly dated to 1716
        and recognized as the oldest documented house in Berks County. It
        was listed on the National Register of Historic Places in 1974. By
        1719, the surrounding tract had organized into Amity Township,
        decades before Berks County itself was created in 1752, which is why
        local histories still call it the county&apos;s first municipality.
      </p>
      <p>
        Old St. Gabriel&apos;s Episcopal Church traces its congregation back
        to 1720, making it the oldest in the county, though the stone
        building standing today was actually constructed later, in 1801. The
        White Horse Tavern, a Georgian sandstone building put up in 1765 with
        an addition in 1780, served travelers along the Schuylkill for over
        a century before closing as an inn in 1870 and being converted into
        a three-family residence. The Historic Preservation Trust of Berks
        County bought and restored it in 1971, and it was added to the
        National Register in 1975.
      </p>
      <p>
        The town&apos;s own name comes from a fourth building in the same
        cluster. George Douglass, who&apos;d worked as a saddler and
        innkeeper in Reading, moved to Morlatton by 1762 and built the
        sandstone home and store now known as the George Douglass House the
        following year. Douglassville was named for him. His house was
        acquired by the Historic Preservation Trust in 1988 and restored
        between 1995 and 2002, and it carries its own National Register
        listing from 2009.
      </p>

      <Opinion>
        <p>
          Most towns on our list have some age to them, but Douglassville is
          the sharpest contrast we work in. You&apos;ve got four buildings
          from the 1700s clustered in Morlatton Village on one side of town,
          and on the other, subdivisions like Amity Gardens and Briarwood
          that went up in the last few decades with little architecturally
          in common with the older buildings a few minutes away. It means we
          can&apos;t assume anything walking into a Douglassville job. A
          house here might call for the kind of careful, historically-aware
          work a building like the Mouns Jones House would need, or it might
          be a standard builder-grade swap in a neighborhood built during our
          lifetime. We treat each one on its own terms rather than quoting
          the town instead of the house.
        </p>
      </Opinion>

      <p>
        Douglassville is also the farthest of the five Berks County towns we
        cover from our shop in East Earl, close to 40 minutes each way. The
        newer side of town isn&apos;t limited to Amity Gardens and Briarwood
        either, subdivisions like West Ridge, High Meadow, Cider Mill, Woods
        Edge, and the 55-and-over community at Arbour Green have all gone up
        within a few miles of Morlatton Village. We still measure every job
        on site before quoting, same as anywhere closer, and on a street
        like this, that on-site look matters more than most.
      </p>

      <LocalFaq
        items={[
          {
            q: "Can you actually visit the historic buildings in Morlatton Village?",
            a: "Some of them, periodically. The Mouns Jones House, the White Horse Tavern, and the George Douglass House are all preserved by the Historic Preservation Trust of Berks County and open to the public at certain times of year. They're maintained as historic exhibits, not lived-in homes, so the work we do in Douglassville is almost always on the surrounding residential streets instead.",
          },
          {
            q: "Does a house near Morlatton Village need special approval for window or door work?",
            a: "Not usually. Being near a historic site isn't the same as sitting inside a historic district with its own design review board. The four protected landmark buildings are the exception, not the neighborhood rule. Most nearby homes, old or new, get treated like any other job: measured on site, quoted honestly.",
          },
          {
            q: "Is Douglassville worth the extra drive time compared to your closer towns?",
            a: "To us, yes. It's our farthest stop in Berks County, but it's still well inside our regular service area. We quote it the same way we would a five-minute job, we just build the extra travel into scheduling rather than passing it along as a surprise fee.",
          },
        ]}
      />
    </>
  );
}
