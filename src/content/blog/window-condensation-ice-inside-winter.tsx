import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        Water beading on the inside of your windows on a cold morning, or a thin rim of ice
        along the bottom of the glass, is one of the most common things homeowners ask us
        about once winter sets in. The good news: most of the time the window isn&apos;t
        broken. The question is where the water is, because that tells you whether you have
        a humidity problem, a window problem, or both.
      </Lead>

      <p>
        Every winter the same question shows up in neighborhood threads around East Earl,
        New Holland and Ephrata (if you&apos;re on Nextdoor, you&apos;ve probably seen it,
        and you can find{" "}
        <a href={site.social.nextdoor} target="_blank" rel="noopener">
          us there too
        </a>
        ): &quot;Are my windows failing? There&apos;s water all over them every morning.&quot;
        Usually the answer is no. But &quot;usually&quot; isn&apos;t &quot;always,&quot; so
        here&apos;s how to tell.
      </p>

      <h2>First, find out which surface is wet</h2>
      <p>
        A double-pane window has four glass surfaces: the outside face, the two faces sealed
        inside the unit, and the inside face you can touch. Where the moisture sits changes
        everything.
      </p>
      <ul>
        <li>
          <strong>On the inside face (you can wipe it off).</strong> This is indoor humidity
          meeting cold glass. It&apos;s the most common case by far, and it&apos;s mostly
          about the air in the house, not the window.
        </li>
        <li>
          <strong>Between the panes (you can&apos;t wipe it off).</strong> The seal around the
          insulated glass has failed and outside air is getting into the unit. That&apos;s a
          window problem, and we cover it in detail in{" "}
          <Link href="/blog/foggy-window-seal-repair">what a failed seal actually means</Link>.
        </li>
        <li>
          <strong>On the outside face.</strong> Usually on cool mornings in spring and fall.
          It&apos;s actually a sign of good, well-insulated glass: the outer pane is staying
          cold because heat from inside isn&apos;t leaking through. Nothing to fix.
        </li>
      </ul>

      <h2>Why the inside of the glass gets wet</h2>
      <p>
        Warm air holds more moisture than cold air. When warm, humid indoor air touches a
        surface colder than its dew point, water comes out of the air and lands on that
        surface. In a heated house in January, the coldest surface in most rooms is the
        window glass, especially along the bottom edge where the cold air settles and the
        glass meets the frame.
      </p>
      <p>
        Showers, cooking, drying laundry indoors, houseplants, a humidifier set too high,
        even a lot of people sleeping in a small bedroom all add moisture. Newer, tighter
        houses hold onto that moisture longer. And many farmhouses and older homes around
        Lancaster County have basements or crawlspaces that add their own dampness to the
        house air all winter.
      </p>

      <ArticleFigure
        src="/photos/window-green-shutters.jpg"
        alt="A stucco Tudor-style house with green shutters and steep gables"
        caption="Older homes with original or single-pane windows usually see the most condensation and frost once the heat comes on."
      />

      <h2>When it turns to ice</h2>
      <p>
        Ice on the inside of a window is the same thing, just colder. When the glass surface
        drops below freezing, condensation freezes as it forms. You&apos;ll see it most on
        single-pane glass, older storm-window setups, and the edges of double-pane units
        where the spacer conducts cold.
      </p>
      <p>
        A little frost on a single-pane window during a deep cold snap is normal for that
        kind of glass. Heavy ice that builds up day after day, or ice on a fairly modern
        double-pane window, is worth looking at. It points to either very high indoor
        humidity, cold air leaking around the sash, or glass that simply isn&apos;t
        insulating anymore. If your house still has a lot of original single-pane glass,
        our piece on{" "}
        <Link href="/blog/single-pane-windows-repair-or-replace">
          single-pane windows: repair or replace
        </Link>{" "}
        is the next thing to read.
      </p>

      <h2>What to try before calling anyone</h2>
      <ol>
        <li>
          <strong>Check your indoor humidity.</strong> An inexpensive hygrometer from a
          hardware store will tell you. In a Pennsylvania winter, somewhere around 30 to 40
          percent is a reasonable target, and lower during the coldest stretches. If
          you&apos;re above 50, that&apos;s your answer.
        </li>
        <li>
          <strong>Run the exhaust fans.</strong> Bathroom fans during and for twenty minutes
          after a shower, the range hood when cooking. Make sure they actually vent outside
          and not into the attic.
        </li>
        <li>
          <strong>Turn down or turn off the humidifier.</strong> Especially a whole-house
          unit on the furnace. A lot of them are set once and never touched again.
        </li>
        <li>
          <strong>Open the blinds and curtains at night.</strong> Heavy window coverings trap
          cold air against the glass and keep warm room air from reaching it, which makes
          condensation worse.
        </li>
        <li>
          <strong>Keep air moving.</strong> Make sure heat registers below windows
          aren&apos;t blocked by furniture.
        </li>
      </ol>
      <p>
        If the condensation clears up after a week of that, the windows were never the
        problem.
      </p>

      <h2>When it really is the window</h2>
      <p>Some signs that the window itself needs attention:</p>
      <ul>
        <li>
          Moisture or fog <strong>between</strong> the panes, which no amount of wiping or
          dehumidifying will touch.
        </li>
        <li>
          Condensation on one or two windows only, while the rest of the house is dry. That
          often means cold air is leaking around that particular sash: worn{" "}
          <Link href="/windows/repair/weatherstripping">weatherstripping</Link>, a sash that
          no longer closes tight, or a gap around the frame.
        </li>
        <li>Water pooling on the sill and running onto the wall or floor.</li>
        <li>
          Soft or darkened wood on the sill or the bottom of the sash. Repeated condensation
          that sits on wood will eventually rot it.
        </li>
      </ul>
      <p>
        The fix ranges from new weatherstripping or a{" "}
        <Link href="/windows/repair/fogged-glass">glass unit swap</Link> to full{" "}
        <Link href="/windows/replacement">replacement</Link> when the frame itself is gone.
        The order matters: rule out humidity first, then look at the window.
      </p>

      <Opinion>
        A lot of &quot;my windows are failing&quot; calls in winter turn out to be a humidity
        problem, not a window problem. We&apos;d rather tell you to buy a
        ten-dollar hygrometer than sell you new windows that will fog up exactly the same
        way, because the air in the house hasn&apos;t changed.
      </Opinion>

      <Faq
        items={[
          {
            q: "Is condensation on the inside of windows bad?",
            a: "A little on the coldest mornings is normal and harmless if you wipe it up. Heavy condensation every day is a sign of high indoor humidity, and if it keeps soaking the sill it can damage paint and eventually rot wood. Lower the humidity first, then look at the window.",
          },
          {
            q: "Why is there ice on the inside of my windows?",
            a: "The glass surface is below freezing, so condensation freezes as it forms. It's most common on single-pane glass and at the edges of double-pane units. Lowering indoor humidity helps; persistent heavy ice on modern windows can point to air leaks or failing glass.",
          },
          {
            q: "What humidity should my house be in winter?",
            a: "Roughly 30 to 40 percent is a common target in a Pennsylvania winter, and lower during deep cold snaps. Above about 50 percent you'll see condensation on most windows, even good ones.",
          },
          {
            q: "Do new windows stop condensation?",
            a: "They reduce it, because modern insulated glass keeps the inside surface warmer. But if the house is very humid, even the best windows will collect some condensation. New windows fix cold glass and air leaks; they don't fix a humidity problem.",
          },
          {
            q: "Moisture is between the panes. Can that be fixed?",
            a: "Not by wiping or drying it out. It means the seal on the insulated glass has failed. Usually the glass unit can be replaced without replacing the whole window, as long as the frame and sash are still sound.",
          },
        ]}
      />

      <ArticleCTA
        heading="Water on the glass and not sure which kind?"
        body="Send us a photo of the window on a cold morning. We can usually tell from that whether it's humidity, a failed seal, or an air leak."
        href="/windows/repair"
        label="Get a Quote"
      />
    </>
  );
}
