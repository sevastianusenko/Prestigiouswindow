import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        Steel, fiberglass, or wood: there&apos;s no single best front door material, only the
        best one for where the door sits, how much sun and rain it takes, and how much
        upkeep you&apos;re willing to do. Here&apos;s how the three actually compare once
        they&apos;ve been hanging on a Pennsylvania house for a few winters.
      </Lead>

      <p>
        The front door is the one part of the house everybody touches, and it takes more
        weather than almost anything else on the outside. Around Lancaster County that means
        hot summer sun, sideways rain, freeze-thaw cycles all winter, and in a lot of
        farmhouses, an entry that faces the road with no porch roof to protect it. The
        material you choose decides how the door holds up to all of that.
      </p>

      <h2>Steel: the budget workhorse</h2>
      <p>
        A steel entry door is a thin steel skin wrapped around a foam core and a wood or
        composite frame. It&apos;s usually the least expensive of the three, it insulates
        well thanks to the foam, and it&apos;s hard to force open.
      </p>
      <p>The trade-offs:</p>
      <ul>
        <li>
          <strong>It dents.</strong> A kicked soccer ball, a hand truck, a dog that jumps at
          the door. Small dents can be filled, but they rarely disappear completely.
        </li>
        <li>
          <strong>It can rust.</strong> Usually at the bottom edge, where water and road
          salt collect. A scratch that reaches bare steel needs touch-up paint quickly.
        </li>
        <li>
          <strong>It gets hot.</strong> A dark steel door in full afternoon sun gets very hot
          to the touch.
        </li>
      </ul>
      <p>
        Steel makes the most sense on a side or garage entry, a door under a covered porch,
        or anywhere budget matters more than looks.{" "}
        <Link href="/doors/replacement/steel-doors">More on steel doors here.</Link>
      </p>

      <h2>Fiberglass: the low-maintenance middle</h2>
      <p>
        Fiberglass doors use a molded composite skin over a foam core. Good ones are
        textured to look like wood grain and can be stained or painted, and from the street
        most people can&apos;t tell the difference.
      </p>
      <p>What makes fiberglass the default choice for most homes:</p>
      <ul>
        <li>It doesn&apos;t dent like steel or rot like wood.</li>
        <li>It doesn&apos;t swell or shrink much with humidity, so it keeps closing well.</li>
        <li>It insulates as well as or better than steel.</li>
        <li>It handles full sun and rain without a porch overhead.</li>
      </ul>
      <p>
        It costs more than steel, and a stained finish still needs a fresh topcoat every
        several years if the door gets hard sun. But for a front door with no protection
        from the weather, it&apos;s usually our first recommendation.{" "}
        <Link href="/doors/replacement/fiberglass-doors">More on fiberglass doors.</Link>
      </p>

      <ArticleFigure
        src="/photos/door-black-hardware.jpg"
        alt="A white entry door with a full-length glass panel"
        caption="From the street, a good fiberglass door and a wood door look surprisingly similar. The difference shows up after a few winters."
      />

      <h2>Wood: beautiful, and honest about the upkeep</h2>
      <p>
        Nothing looks or feels quite like a solid wood door, and on a lot of older Lancaster
        County homes a wood door is simply what belongs there. Wood is also the easiest
        material to repair: a scratch can be sanded out, a damaged panel can be fixed.
      </p>
      <p>But it asks the most of you:</p>
      <ul>
        <li>
          It needs refinishing on a regular schedule, more often if the door faces south or
          west.
        </li>
        <li>It moves with humidity, so it can stick in August and gap in January.</li>
        <li>
          Unprotected bottom rails and the lower part of the frame are where rot starts.
          We repair a lot of{" "}
          <Link href="/doors/repair/jamb-rot">rotted door jambs</Link>, and most of them sit
          under a door with no overhang.
        </li>
      </ul>
      <p>
        Wood makes the most sense under a deep porch roof, on a historic house where the
        look matters, or for owners who don&apos;t mind the maintenance.{" "}
        <Link href="/doors/replacement/wood-doors">More on wood doors.</Link>
      </p>

      <h2>Side by side</h2>
      <ul>
        <li>
          <strong>Price:</strong> steel lowest, fiberglass middle, wood usually highest.
        </li>
        <li>
          <strong>Maintenance:</strong> fiberglass lowest, steel low (watch for scratches),
          wood highest.
        </li>
        <li>
          <strong>Insulation:</strong> fiberglass and steel are close; solid wood is lower.
        </li>
        <li>
          <strong>Dents and dings:</strong> fiberglass resists them; steel dents; wood
          scratches but repairs well.
        </li>
        <li>
          <strong>Unprotected exposure:</strong> fiberglass handles it best; wood handles it
          worst.
        </li>
      </ul>

      <h2>What matters as much as the slab</h2>
      <p>
        People spend a lot of time choosing the door slab and very little thinking about
        what it hangs in. A few things decide whether any of these doors actually seals:
      </p>
      <ul>
        <li>
          <strong>The frame and sill.</strong> A new door hung in an old, out-of-square frame
          will never close right. A pre-hung unit with a new frame and threshold fixes that.
        </li>
        <li>
          <strong>Weatherstripping.</strong> Compression seals around the frame and a good
          sweep at the bottom do more for drafts than the material of the door itself.
        </li>
        <li>
          <strong>Glass.</strong> Sidelights and glass inserts look great and let light in,
          but they&apos;re also where most of the heat goes. Insulated, low-E glass matters.
        </li>
        <li>
          <strong>Installation.</strong> Shimmed plumb, square, and sealed underneath the
          sill so water can&apos;t wick into the subfloor.
        </li>
      </ul>
      <p>
        If you&apos;re still deciding on a style, browsing finished projects helps more than
        any brochure. Houzz is good for that: you can save door ideas from homes all over,
        and{" "}
        <a href={site.social.houzz} target="_blank" rel="noopener">
          our Houzz profile
        </a>{" "}
        is there too if you want to see our work alongside them.
      </p>

      <Opinion>
        If your front door has no porch roof over it, go fiberglass. You can get the look of
        wood without refinishing it every couple of years, and it won&apos;t dent the first
        time somebody backs a wheelbarrow into it.
      </Opinion>

      <Faq
        items={[
          {
            q: "Which is better, a steel or fiberglass front door?",
            a: "Fiberglass is better for most front doors: it doesn't dent or rust, handles full sun and rain, and can look like wood. Steel is a good, cheaper choice for side and garage entries or doors under a covered porch.",
          },
          {
            q: "How long does a fiberglass entry door last?",
            a: "A well-installed fiberglass door can last for decades. The finish may need refreshing over time, especially in full sun, and weatherstripping and hardware wear out before the door itself does.",
          },
          {
            q: "Are wood doors worth it?",
            a: "They can be, on a historic home or under a deep porch, and for owners who enjoy the look and don't mind refinishing. On an exposed entry with no overhang, wood needs a lot of upkeep to avoid swelling and rot.",
          },
          {
            q: "What is the most energy-efficient front door?",
            a: "Foam-core fiberglass and steel doors insulate best. In practice, a tight frame, good weatherstripping, and insulated glass in any sidelights matter as much as the slab material.",
          },
          {
            q: "Should I replace just the door or the whole frame?",
            a: "If the frame is square and solid, a slab replacement can work. If the frame is rotted, out of square, or the threshold leaks, a pre-hung door with a new frame and sill is the better long-term fix.",
          },
        ]}
      />

      <ArticleCTA
        heading="Deciding on a new front door?"
        body="We'll look at your entry, how much weather it takes, and the frame it hangs in, then tell you which material we'd actually put there."
        href="/doors/replacement"
        label="Get a Quote"
      />
    </>
  );
}
