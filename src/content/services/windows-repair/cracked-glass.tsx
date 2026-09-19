import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>Matching the glass, not just cutting it</h2>
      <p>
        Measuring a cracked pane starts the same way any custom glass order
        does: opening size first, then everything hidden behind the stop or
        bead that a tape across the visible glass never catches. What makes a
        crack its own job is that the pane is often still sitting in the
        opening when we arrive, sometimes fully separated at a corner,
        sometimes just a web of lines radiating from one impact point, and we
        work around it rather than pulling everything apart before the new
        glass is confirmed. Thickness gets checked directly rather than
        assumed, since a pane that looks the same as its neighbors from six
        feet away can be an eighth of an inch off, and glass cut to the wrong
        thickness either rattles in a rabbet built for something thinner or
        doesn&apos;t seat at all in one built for something thicker.
      </p>
      <p>
        Tint and coating are the part people forget to ask about until the
        new pane is already in and looks wrong next to the window beside it.
        Low-E coatings sit on one specific face of the glass, and the faces
        are numbered from the outside in, so the same coating on the wrong
        surface changes both how the window performs and how it reflects
        light from the street. On a single cracked pane in a wall of
        otherwise matched windows, getting the surface right the first time
        is the difference between a repair nobody notices and one everybody
        does. An etched code in the corner of the original glass confirms
        coating and tempering before ordering; where that&apos;s missing, both
        can still be identified in the field.
      </p>
      <p>
        Tempering gets checked at the same time, and it isn&apos;t optional where
        code requires it. Glass within a set distance of a door, in or next
        to a tub or shower, or low enough to the floor to be walked into has
        to go back as safety glazing, fracturing into small, blunt pieces
        instead of long shards if it ever breaks again. If the cracked pane
        came out of one of those locations, the replacement goes in tempered
        whether or not the original was, since code applies to what is there
        now, not to what was allowed decades ago.
      </p>

      <h2>Single pane and insulated glass are two different jobs</h2>
      <p>
        An old double-hung with a single sheet of glass in each sash is
        traditional glazing work. The cracked pane comes out, the rabbet is
        cleaned back to bare wood, a fresh bed of glazing compound goes down,
        the new pane sets into it, points or a wood stop hold it in place,
        and the compound gets tooled to a clean bevel before it&apos;s painted.
        It&apos;s slow, hands-on work, and it doesn&apos;t touch anything else about
        the window. The sash stays exactly the size and weight it always was,
        and the rest of the frame is untouched.
      </p>
      <p>
        A cracked pane in a modern insulated unit is a different job wearing
        a similar name. There&apos;s no single sheet to cut out. The crack runs
        through one layer of a sealed sandwich of two or three panes held at
        the edges by a spacer and an edge seal, and cracking that layer
        compromises the seal even when it doesn&apos;t break outright, so the
        honest fix is replacing the whole unit rather than isolating the
        cracked layer. That means the same measuring, ordering, and
        installing process used on a failed seal, not a smaller version of
        the single-pane job, and the two aren&apos;t close in cost or timeline.
      </p>

      <h2>Securing the opening while the glass is on order</h2>
      <p>
        Custom glass doesn&apos;t arrive the same day it&apos;s ordered, so a cracked
        opening usually sits for a stretch before the real fix goes in, and
        what it looks like in the meantime depends on how far the crack has
        actually gone. A hairline crack that hasn&apos;t separated can often be
        left alone, sometimes with a strip of clear security film over it to
        keep the two halves from shifting apart on their own. A pane that has
        come apart at a corner, or one where a piece could work loose on its
        own, gets a rigid board or a fitted acrylic panel set into the
        opening from whichever side keeps weather and anyone reaching through
        it out, sized to the actual opening rather than a sheet of plastic
        taped over the outside, because loose plastic in a Lancaster County
        wind doesn&apos;t last a day. What remains of the old pane doesn&apos;t get
        pulled before the replacement is in hand unless it&apos;s actively unsafe
        to leave in place. An opening with a proper temporary panel in it
        beats one left open to the weather for two or three weeks while
        custom glass is in production.
      </p>

      <h2>Cleaning up after glass breaks</h2>
      <p>
        A cracked pane rarely stays in one piece by the time we get to it,
        and the visit includes getting every fragment out, not just the ones
        still sitting in the sash. Tempered glass breaks into small blunt
        pebbles that travel further than people expect, into window tracks,
        weep holes, and carpet several feet back from the sill. Ordinary
        annealed glass breaks into longer, sharper pieces, swept and
        vacuumed rather than shaken out. Either way, drop cloths go down
        before anything comes apart, and the old glass, along with whatever
        fragments it left behind in the track or the stop, leaves with us.
      </p>
      <p>
        For the fuller breakdown of what drives cracked glass repair cost, see
        our piece on{" "}
        <Link href="/blog/cracked-window-glass-repair-cost">
          cracked glass repair cost
        </Link>
        . This page is about the work itself: what gets matched, what gets
        ordered, and what happens to the opening in between.
      </p>

      <Faq
        items={[
          {
            q: "Will the new pane match the tint and coating of the glass around it?",
            a: "That's the point of checking the coating surface, tint, and any etched code on the original glass before ordering. A pane ordered without confirming those details can come back the right size but a visibly different color or reflectivity than the panes beside it, which is a mismatch nobody wants to live with on a wall of matched windows.",
          },
          {
            q: "How do I know if my cracked pane is single glass or part of an insulated unit?",
            a: "Most windows installed in the last twenty-five years use insulated units, two or three panes sealed together with a spacer between them. Older double-hung windows, especially anything original to a house built before the 1960s, are usually single pane. If it isn't obvious, we confirm it at the same visit where we measure the opening.",
          },
          {
            q: "Is it safe to leave a cracked window boarded up while the glass is on order?",
            a: "Yes, with a properly fitted temporary panel rather than plastic taped over the gap. Custom glass doesn't arrive same day, so the opening needs something rigid and sized correctly to keep weather and anyone reaching through it out while it waits.",
          },
          {
            q: "Does a cracked window always need tempered replacement glass?",
            a: "Only where code requires it: near doors, in or next to tubs and showers, and low enough to the floor to be at risk of impact. In those locations the replacement goes in tempered even if the original wasn't, since code cares about the location, not about what was there before.",
          },
        ]}
      />
    </>
  );
}
