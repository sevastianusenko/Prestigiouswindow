import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        There are two ways to replace a window. An insert (also called a pocket replacement)
        slides a new window into the existing frame. A full-frame replacement tears the old
        window out down to the rough opening and starts over. Most quotes don&apos;t explain
        which one you&apos;re getting, and it changes the price, the look, and how long the
        result lasts.
      </Lead>

      <p>
        If you&apos;re comparing two window quotes that look wildly different on price,
        this is often why. One contractor is quoting an insert, the other is quoting full
        frame, and neither one wrote it down clearly. Here&apos;s what each method actually
        involves and how to tell which one your house needs.
      </p>

      <h2>Insert replacement: the new window goes inside the old frame</h2>
      <p>
        With an insert, the crew removes the old sashes, stops and balance hardware, but
        leaves the original frame, sill and interior trim in place. A new window built to
        fit inside that frame is set, shimmed, fastened, insulated and sealed. The outside of
        the old frame is usually wrapped in aluminum or vinyl capping so there&apos;s no
        bare wood left to paint.
      </p>
      <p>The upside:</p>
      <ul>
        <li>Faster and less expensive per opening.</li>
        <li>Interior trim, plaster and wallpaper usually aren&apos;t disturbed.</li>
        <li>Less mess, and on a cold day, less time with the opening exposed.</li>
      </ul>
      <p>The downside:</p>
      <ul>
        <li>
          <strong>Smaller glass.</strong> The new frame sits inside the old one, so you lose
          some glass area on every side. On small windows it&apos;s noticeable.
        </li>
        <li>
          <strong>You&apos;re trusting the old frame.</strong> If it&apos;s soft, out of
          square, or leaking, the new window inherits all of that.
        </li>
        <li>
          <strong>Hidden gaps stay hidden.</strong> In older homes with sash weights, the
          empty weight pockets beside the window are big uninsulated cavities. An insert can
          leave them as they are unless the crew opens them up and insulates them.
        </li>
      </ul>

      <ArticleFigure
        src="/photos/process-rough-opening.jpg"
        alt="A large rough opening in a block wall before the new unit is installed"
        caption="A bare rough opening. Full-frame replacement takes a window back to this point, which is where hidden rot and missing insulation finally become visible."
      />

      <h2>Full-frame replacement: back to the rough opening</h2>
      <p>
        A full-frame job removes everything: sashes, frame, sill, and usually the interior
        and exterior trim. That exposes the rough opening, the actual framed hole in the wall.
        Any rot can be cut out and repaired, the opening gets properly flashed against water,
        the gaps are insulated, and a complete new window with its own frame and sill goes
        in. Then new trim goes on inside and out.
      </p>
      <p>The upside:</p>
      <ul>
        <li>Maximum glass area, sometimes more than the original window had.</li>
        <li>Rot, water damage and missing insulation get found and fixed, not covered up.</li>
        <li>Proper flashing, which is what actually keeps water out long-term.</li>
        <li>A chance to change the size or style of the window entirely.</li>
      </ul>
      <p>The downside:</p>
      <ul>
        <li>More labor per opening, so a higher price.</li>
        <li>New interior trim, and often some paint or plaster touch-up.</li>
        <li>Exterior siding or brick may need careful work around the opening.</li>
      </ul>

      <h2>How to tell which one your house needs</h2>
      <p>An insert usually makes sense when:</p>
      <ul>
        <li>The existing frames are solid, dry and reasonably square.</li>
        <li>You like your interior trim and don&apos;t want it disturbed.</li>
        <li>The windows were already replaced once and the frames are fairly modern.</li>
      </ul>
      <p>Full-frame usually makes sense when:</p>
      <ul>
        <li>There&apos;s rot in the sill or the bottom of the frame.</li>
        <li>You&apos;ve had water staining below windows, inside or out.</li>
        <li>The windows are original to an older house, with sash weights and drafty pockets.</li>
        <li>You want more glass, or a different style or size of window.</li>
        <li>New siding is going on at the same time.</li>
      </ul>
      <p>
        On many houses the honest answer is a mix: inserts where the frames are good,
        full-frame on the two or three openings that take the most weather. A lot of{" "}
        <Link href="/old-homes">older homes around Lancaster County</Link> end up that way.
        If you&apos;re dealing with an older house specifically, our guide to{" "}
        <Link href="/blog/replacing-windows-in-an-old-house">
          replacing windows in an old house
        </Link>{" "}
        goes deeper on frames, weight pockets and trim.
      </p>

      <h2>Questions to ask on any quote</h2>
      <ol>
        <li>Is this an insert or a full-frame installation, for each opening?</li>
        <li>What happens to my interior trim?</li>
        <li>How will you handle the old sash weight pockets?</li>
        <li>How is the exterior finished: capping, new trim, or paint?</li>
        <li>If you find rot when the old window comes out, how is that priced?</li>
      </ol>
      <p>
        A contractor who answers those clearly is probably going to install carefully too.
        We go through more questions like this in{" "}
        <Link href="/blog/choosing-a-window-door-contractor">
          how to choose a window and door contractor
        </Link>
        .
      </p>
      <p>
        It also helps to look at finished projects before deciding, because the difference
        in glass size and trim is easier to see than to describe. Our{" "}
        <a href={site.social.houzz} target="_blank" rel="noopener">
          Houzz profile
        </a>{" "}
        is one place to compare finished openings.
      </p>

      <Opinion>
        An insert into a rotten frame is the most common shortcut in this business, and it
        looks great for about two years. If we pull the old sash and the sill is soft,
        we&apos;ll tell you, show you, and price the opening as full-frame, even if that
        makes our quote the higher one.
      </Opinion>

      <Faq
        items={[
          {
            q: "What is the difference between insert and full-frame window replacement?",
            a: "An insert installs a new window inside the existing frame, keeping the old frame, sill and trim. Full-frame removes everything down to the rough opening and installs a complete new window with its own frame, plus new trim.",
          },
          {
            q: "Is insert window replacement cheaper?",
            a: "Yes, usually noticeably cheaper per opening because there's less labor and trim work. It's only a good value if the existing frame is solid; an insert into a rotted frame tends to fail early.",
          },
          {
            q: "Do insert windows reduce glass size?",
            a: "Yes. Because the new frame sits inside the old one, you lose some glass on each side. On large windows it's minor; on small ones it can be noticeable.",
          },
          {
            q: "When is full-frame window replacement necessary?",
            a: "When the frame or sill is rotted, there's been water damage around the window, you want to change the window's size or style, or the house has drafty sash-weight pockets that need insulating.",
          },
          {
            q: "Can some windows be inserts and others full-frame?",
            a: "Yes, and on many homes that's the best value: inserts where the frames are sound, full-frame where they're not.",
          },
        ]}
      />

      <ArticleCTA
        heading="Not sure which method your windows need?"
        body="We'll check each frame when we measure and tell you, opening by opening, where an insert is fine and where it isn't."
        href="/windows/replacement"
        label="Get a Quote"
      />
    </>
  );
}
