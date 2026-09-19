import Link from "next/link";
import { FactStrip, Landmark, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Where the old road meets the new interchange</h2>

      <FactStrip
        items={[
          { label: "Population", value: "1,614 (2020)" },
          { label: "Crossroads", value: "Route 23 & Route 10" },
          { label: "Turnpike exit", value: "Exit 298" },
          { label: "From East Earl", value: "15 min" },
        ]}
      />

      <p>
        Morgantown isn&apos;t its own municipality, it&apos;s an unincorporated
        village that straddles Caernarvon Township, which technically extends
        into a second township of the same name just across the line in
        Lancaster County. Welsh settlers were already here by 1718, when
        William Davies took up land warrants near the headwaters of the
        Conestoga, and the township took its name from Caernarfon in North
        Wales. Captain Jacob Morgan, a Philadelphia merchant whose father
        Thomas had served as a Welsh-born captain in the French and Indian
        War, settled in the area around 1765 and built a stone house
        that&apos;s still standing on Hartz Road. In 1770, Jacob laid out the
        formal plan for the village that carries his name. German families
        followed within a generation, clearing farmland to feed the charcoal
        furnaces and forges that once lined the Conestoga and French Creeks.
        Conestoga Road itself, the route that still runs through the middle
        of the village, predates all of that: it dates back to the 1680s,
        one of the older thoroughfares anywhere in this region. Today
        it&apos;s also home to the Morgantown Flea Market, one of the
        better-known antique markets in the area, though that&apos;s not
        usually why we&apos;re out here.
      </p>

      <Landmark>
        <p>
          The Green Hills Inn has stood near the village since 1805, predating the
          automobile by a century. Morgantown&apos;s modern layout was set later,
          when the Pennsylvania Turnpike built its Morgantown Interchange, Exit
          298, connecting I-76 to I-176 toward Reading. That interchange turned a
          quiet crossroads into one of the busier access points in southern Berks
          County, and it&apos;s the reason the village now has two distinct layers
          of development instead of one.
        </p>
      </Landmark>

      <h3>A Main Street built to be looked at</h3>
      <p>
        The heart of the village, Main Street between Walnut and Washington
        Streets, is listed on the National Register as the Morgantown
        Historic District, sometimes called the Old Main Street Historic
        District. It covers about 21 acres and includes 104 contributing
        buildings, most of them built between 1790 and 1945, in a mix of
        Georgian and Late Victorian styles. The earliest buildings were built
        from brown sandstone, and the district still includes a circa-1800
        tavern, an 1868 lodge hall, a 1920s garage, and a 1921 fire hall
        alongside the houses.
      </p>
      <p>
        Hotel Morgan anchors the middle of it, a hotel that opened in 1924
        and has hosted guests over the decades that included JFK, Harry
        Truman, and Eleanor Roosevelt. It went through a full renovation in
        2021 that brought back its original wood-paneled ballroom and marble
        floors while updating everything behind the walls, which is close to
        the ideal outcome for a building this age: looking the way it always
        did, working the way a building finished a century later would.
      </p>

      <h3>Century-old sashes next to ten-year-old vinyl</h3>
      <p>
        That split shows up directly in the kind of calls we get. The historic
        core along Conestoga Road is built up with older homes, some well over a
        century old, with window openings that were sized long before anyone
        standardized a double-hung, and entry doors set into frames that have
        settled and shifted over two centuries. Closer to the interchange, the
        housing is newer, built up around the convenience of Turnpike access, with{" "}
        <Link href="/windows/replacement">builder-grade windows and doors</Link>{" "}
        that are only a decade or two old but weren&apos;t installed with much
        attention to detail in the first place, the kind of shortcut that shows
        up as air leaks and sticking sashes well before the unit&apos;s rated
        lifespan is up.
      </p>
      <p>
        We end up doing careful <Link href="/windows/repair">repair work</Link> on
        one end of Morgantown and straightforward replacement on the other,
        sometimes within the same square mile. It&apos;s not a town where you
        can assume anything about a house&apos;s age just because of the ZIP
        code, which is exactly the kind of judgment call we walk through in
        more detail on our <Link href="/repair-or-replace">repair or replace
        page</Link>.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Morgantown's Main Street a protected historic district? Does that limit what we can do to our windows or doors?",
            a: "The Morgantown Historic District is a National Register listing, which recognizes the area's history but doesn't by itself restrict what a private homeowner can do to their own windows or doors, unlike a municipal historic overlay with its own review board. We still measure and match old openings carefully because of the building's age, not because of a permit requirement.",
          },
          {
            q: "Morgantown technically spans two townships. Does that change which crew shows up or how the job is priced?",
            a: "No. Whether a property sits in Caernarvon Township on the Berks side or right at the edge into Lancaster County, it's the same crew, the same roughly 15-minute drive, and the same on-site measuring either way.",
          },
          {
            q: "Do you work the newer subdivisions near the Turnpike interchange as often as the historic core?",
            a: "Just as often. Those jobs usually call for standard-size replacement rather than custom measuring, since the housing stock there is only a decade or two old, but the same crew handles both ends of town, sometimes on the same day.",
          },
        ]}
      />
    </>
  );
}
