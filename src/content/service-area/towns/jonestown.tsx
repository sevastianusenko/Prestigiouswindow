import Link from "next/link";
import { FactStrip, LocalFaq } from "@/components/service-area/Local";

export default function Content() {
  return (
    <>
      <FactStrip
        items={[
          { label: "Settled", value: "1761, as Williamsburg" },
          { label: "Incorporated", value: "1870" },
          { label: "Population", value: "~1,626 (2020)" },
          { label: "Borough size", value: "0.6 sq mi" },
        ]}
      />

      <h2>Small, old, and easy to drive past</h2>
      <p>
        Jonestown goes back further than its current name suggests. The
        area was settled in 1761 under the name Williamsburg, and
        wasn&apos;t incorporated as its own borough until 1870, over a
        century later. That&apos;s a long stretch of history for a town
        most drivers only see from the highway. Today it&apos;s still small
        by any measure, just 0.6 square miles, the smallest footprint of
        any Lebanon County town on our list, with a population of a little
        over 1,600 people.
      </p>
      <p>
        Most people who&apos;ve heard of Jonestown know it from the
        highway. It sits near Exit 90 on I-81, about two miles south of
        where the interstate crosses Swatara Creek, close to Swatara State
        Park and the Swatara Creek recreation area. We don&apos;t have a
        landmark or a historic district to point to here the way we do in
        Cornwall or Annville, and we&apos;d rather say that plainly than
        dress up a small borough as something it isn&apos;t. It&apos;s a
        quiet town near an interstate exit, with modest, older homes and
        none of the marketing hooks its neighbors have, and the work we do
        here tends to match that: straightforward{" "}
        <Link href="/windows/repair">window</Link> and{" "}
        <Link href="/doors/repair">door</Link> jobs, without a sales pitch
        attached.
      </p>

      <h2>From Williamsburg to Jonestown</h2>
      <p>
        The name change itself isn&apos;t something we&apos;re going to
        guess at here. The area was first settled in 1761 under the name
        Williamsburg, and by the time it incorporated as its own borough in
        1870, the name Jonestown was already the one in use. Exactly when
        and why that change happened isn&apos;t spelled out in the
        historical record we&apos;ve found, and we&apos;d rather tell you
        that plainly than invent a tidy story to fill the gap. What&apos;s
        clear is that the name has stuck for well over a century and a
        half, long enough that most residents today have never heard it
        called anything else.
      </p>

      <h2>Close to Swatara Creek and the state park</h2>
      <p>
        Jonestown sits close to Swatara Creek and the recreation land
        around it, including Swatara State Park a short drive away. That
        part of Lebanon County leans toward outdoor recreation rather than
        commerce, fishing, hiking, and camping along the creek corridor
        instead of shopping districts or dense development. It gives
        Jonestown a quieter, more rural feel than its size and interstate
        access might suggest, even with I-81 Exit 90 only about two miles
        north of the borough, close to where the interstate itself crosses
        the creek. It&apos;s an unusual combination for a town this small:
        genuinely easy highway access paired with a genuinely quiet
        setting, rather than the built-up commercial strip that sometimes
        clusters around an interstate exit.
      </p>

      <h2>What that combination means in practice</h2>
      <p>
        For a homeowner, sitting this close to I-81 without much commercial
        development around the exit usually means fewer of the traffic and
        drainage complications that come with a busier interchange, while
        still having fast, direct highway access for anything that needs
        it, including us. For our own scheduling, Jonestown&apos;s
        interstate access actually works in a homeowner&apos;s favor:
        getting a crew and materials out to a small borough near a highway
        exit is often more straightforward than reaching an equally small
        but more rural spot down a series of township roads. The
        borough&apos;s small size also tends to mean fewer layers of
        permitting review than a larger municipality, though we still
        confirm current requirements with Jonestown directly rather than
        assume based on size alone.
      </p>

      <LocalFaq
        items={[
          {
            q: "Why was Jonestown originally called Williamsburg?",
            a: "We don't know, and we're not going to guess. The area was settled in 1761 under the name Williamsburg, and by the time it incorporated as its own borough in 1870, the name Jonestown was already in use. The historical record we've found doesn't explain the change.",
          },
          {
            q: "Is Jonestown close to Swatara State Park?",
            a: "Yes. The borough sits near Swatara Creek and the recreation land around it, including Swatara State Park a short drive away, with I-81 Exit 90 about two miles north, close to where the interstate crosses the creek.",
          },
          {
            q: "Does Jonestown's small size make window and door permitting simpler?",
            a: "Often, yes, a borough this size typically has fewer layers of review than a larger municipality, though we always confirm current requirements with Jonestown directly rather than assume based on size alone.",
          },
        ]}
      />
    </>
  );
}
