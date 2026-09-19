import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Hay Creek Valley, and not much else</h2>

      <FactStrip
        items={[
          { label: "Setting", value: "Hay Creek Valley, Robeson & Union Twps" },
          { label: "Joanna Furnace", value: "In blast 1791 to 1898" },
          { label: "ZIP code", value: "19523" },
          { label: "From East Earl", value: "22 min" },
        ]}
      />

      <p>
        Geigertown is unincorporated, stretched along Hay Creek Road between
        Geigertown Road and Fire Tower Road, split across Robeson and Union
        Townships, and it doesn&apos;t have a commercial center or downtown
        of its own. What it has is the Hay Creek Valley itself, a rural
        stretch of Berks County that&apos;s kept its farmhouse-era character
        mostly because there&apos;s never been much pressure to develop it.
        The valley sits at a modest elevation, tucked between wooded
        ridgelines that made it a natural spot for water-powered iron works
        two centuries ago.
      </p>

      <p>
        That iron history is still the area&apos;s identity. Joanna Furnace
        went into blast in 1791, built by Samuel Potts, Thomas Rutter III,
        Thomas May, and Thomas Bull, and named for Potts&apos; wife, Joanna
        Holland Potts. By 1800 it was known for hollow ware and ten-plate
        stoves, cast kettles, pots, and pans, and after 1845 it shifted
        mostly to pig iron before it finally went cold in 1898. Bethlehem
        Steel later owned the site and, in 1979, deeded it to the Hay Creek
        Valley Historical Association, which has preserved the furnace ruins
        and keeps them open to visitors. It&apos;s a low-key kind of historic
        site, no gift shop or paid admission, just stone ruins in a creek
        valley that most of the county has forgotten used to be an
        industrial corridor.
      </p>

      <p>
        Geigertown also has the Geigertown Central Railroad Museum, a
        private collection of antique locomotives, cabooses, and rail cars
        spread across a rural property, kept up by a local family in memory
        of a relative who spent his life collecting old trains. It&apos;s
        open informally during daytime hours to anyone who wants to look.
        The volunteer Friendship Fire Company No. 1 is about the closest
        thing the area has to a civic hub. French Creek State Park and the
        Hopewell Furnace National Historic Site, both part of the same
        iron-industry story as Joanna Furnace, sit just a few miles further
        down the valley.
      </p>

      <p>
        Housing out here tends to be older farmhouses on larger lots rather
        than anything built recently, which is typical for this end of the
        county, and it&apos;s exactly the kind of area where a company
        willing to make the drive matters more than one with a storefront
        nearby. There&apos;s no dispatch office around the corner in
        Geigertown. There&apos;s just the drive, about 22 minutes from East
        Earl, and a rural housing stock old enough that a lot of the window
        and door openings out here were built by hand, not off a lumber
        yard&apos;s standard chart.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is there anything to actually see in Geigertown, or is it just farmland?",
            a: "More than you'd expect for a place this size. The Joanna Furnace ruins are preserved and open to visitors, there's a private antique railroad museum along Hay Creek Road, and French Creek State Park and Hopewell Furnace are both a few minutes further down the valley. None of it is a downtown, but it's not nothing either.",
          },
          {
            q: "Since Geigertown doesn't have a commercial center, how do you handle service calls out there?",
            a: "The same way we handle any rural stop: we drive out, measure on site, and quote from what we actually see. Not having a storefront nearby doesn't change how carefully we do the job, it just means we're used to making the trip.",
          },
          {
            q: "Is the housing out here mostly old farmhouses, or is there newer construction too?",
            a: "Mostly older farmhouses on larger lots. There's some newer, scattered construction along Hay Creek Road, but this end of the county hasn't seen the kind of subdivision growth that a town like Douglassville has.",
          },
        ]}
      />
    </>
  );
}
