import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <h2>Small, and getting smaller</h2>

      <FactStrip
        items={[
          { label: "Population 2020", value: "399" },
          { label: "Population 2010", value: "482" },
          { label: "Along", value: "PA Route 23" },
          { label: "Goodville Mutual founded", value: "1926" },
        ]}
      />

      <p>
        Goodville is the smallest town on our list, and it&apos;s the only
        one that&apos;s shrinking. The 2020 census counted 399 residents,
        down from 482 in 2010. It sits along PA Route 23 in the eastern part
        of East Earl Township, rural and spread out, more crossroads than
        town center.
      </p>

      <p>
        The one institution that&apos;s kept the Goodville name known well
        beyond the size of the village itself is Goodville Mutual Casualty
        Company, an insurance company founded here in 1926 by local Mennonite
        businessmen, originally to write auto policies for the community.
        It&apos;s still headquartered under that name today, one of the few
        things that puts a village this small on a map at all. Beyond that,
        there isn&apos;t much documented history to point to, and we&apos;re
        not going to invent any. Goodville is a real place with real houses
        that need real work, not a village with a marquee landmark attached.
      </p>

      <p>
        A place this small doesn&apos;t get much attention from companies
        that size up a town by its population, but the properties
        themselves don&apos;t get any less real for it. Goodville homes tend
        to sit on bigger lots than what we see in the denser boroughs on our
        list, which usually means more window and door surface area per
        house, not less, even with a smaller population spread across it.
        It&apos;s also close enough to East Earl, about five minutes, that
        being small has never been a reason for us to treat it as an
        afterthought.
      </p>

      <h2>Part of East Earl Township, in its own right</h2>

      <p>
        Goodville sits in the eastern part of East Earl Township, the same
        township that contains East Earl and Blue Ball, even though it
        doesn&apos;t share either of those names. That&apos;s fairly
        typical for how this part of Lancaster County is organized: a
        township can hold several distinct village identities, each with
        its own crossroads and its own sense of place, without any of them
        being incorporated on their own. If a Goodville homeowner ever
        needs to deal with the township directly, on a permit question or
        anything else, it&apos;s the same East Earl Township office that
        handles the villages on either side of it.
      </p>

      <p>
        Rural and spread out changes the practical side of a job more than
        people expect. A property on a couple of acres usually means more
        exterior wall and more total window and door area than a
        comparable house on a small borough lot, even with fewer people
        living there. It also often means older, single-pane farmhouse
        windows that were never upgraded, since there wasn&apos;t a
        next-door neighbor&apos;s renovation to prompt an update the way
        there might be on a tighter block. We see more storm-window and
        full-replacement conversations out here than quick like-for-like
        swaps, simply because the starting point is older.
      </p>

      <p>
        Goodville Mutual has stayed headquartered under the village&apos;s
        name for a century now, which says something about how this
        community operates: institutions that start here tend to stay
        here, even after the population around them shrinks. It&apos;s not
        a landmark you can visit or photograph, but it&apos;s a real,
        continuous piece of Goodville&apos;s identity that has outlasted a
        lot of towns many times its size.
      </p>

      <p>
        None of that means Goodville is stuck in the past. Newer
        single-family homes sit alongside the older farmhouses here the
        same way they do elsewhere in East Earl Township, and a village
        losing population isn&apos;t the same as a village losing
        activity. People still build additions, replace failing windows,
        and update entry doors here at roughly the same rate as anywhere
        else on our list, it just happens across fewer total properties
        than in a town with a bigger head count.
      </p>

      <LocalFaq
        items={[
          {
            q: "Is Goodville part of East Earl Township?",
            a: "Yes. Goodville sits in the eastern part of East Earl Township, the same township that also contains the village of East Earl and Blue Ball. It isn't its own incorporated borough, so township-level questions run through the same office as its neighbors.",
          },
          {
            q: "Does a smaller population mean less window and door work needed in Goodville?",
            a: "Not really. Properties here tend to sit on larger lots with more exterior wall and window area than a typical borough house, and a lot of the housing stock is older farmhouse construction, so the work is often more involved per property, even with fewer properties overall.",
          },
          {
            q: "Do you actually cover a village this small, or do you focus on the bigger towns?",
            a: "We cover it the same as anywhere else on our list. Goodville is about five minutes from our shop in East Earl, and a small population has never been a reason for us to treat a property here as less of a priority.",
          },
        ]}
      />
    </>
  );
}
