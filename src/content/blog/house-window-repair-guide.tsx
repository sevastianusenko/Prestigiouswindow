import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <Lead>
        When something&apos;s off with a window, it&apos;s almost always one of five
        things: a failed seal, a bad balance, cracked glass, rot in the frame, or
        stuck hardware. This guide walks through how to tell which one you&apos;ve
        got, what&apos;s worth fixing yourself, and when it&apos;s time to call
        someone who does this for a living.
      </Lead>

      <ArticleFigure
        src="/photos/window-double-hung.jpg"
        alt="A newly installed double-hung window, trimmed and caulked"
        caption="This is what a healthy double-hung window looks like once it's properly set, trimmed, and caulked, which is the baseline we're checking your window against."
      />

      <h2>Why windows fail differently, and why that&apos;s rarely a death sentence</h2>
      <p>
        Vinyl, wood, and aluminum windows don&apos;t wear out the same way, so the
        same symptom can mean something different depending on what&apos;s
        actually in your walls. Vinyl is the most common thing we run into
        around Lancaster County, built around a sealed insulated glass unit
        inside a welded vinyl frame. The vinyl itself doesn&apos;t rot, but the
        seals and the balance systems hidden inside the frame are wear items,
        and they&apos;re usually what fails first. Wood windows are almost the
        opposite: the glass and hardware can outlast the frame by decades, but
        any spot where water gets into end grain or a sill joint starts a slow
        rot problem that eventually turns into a frame job. Aluminum windows,
        which you mostly see on older additions and sunrooms, don&apos;t rot at
        all, but they conduct cold straight through the metal unless
        there&apos;s a thermal break built in, so what feels like &quot;a broken
        window&quot; on an aluminum unit is frequently just physics.
      </p>
      <p>
        None of that changes the basic fact that a window is a long-lived
        thing. Properly installed windows are generally expected to last on the
        order of 20 to 40 years depending on material and exposure, which is
        part of why{" "}
        <a
          href="https://www.energy.gov/energysaver/update-or-replace-windows"
          target="_blank"
          rel="noopener noreferrer"
        >
          the Department of Energy&apos;s guidance on updating or replacing windows
        </a>{" "}
        treats replacement as something to weigh against repair, not something
        to do reflexively the first time a window acts up. If your house is 15
        years old and a window is suddenly sticking or fogging, that&apos;s not
        the window dying of old age, that&apos;s one component wearing out on
        its own schedule.
      </p>

      <h2>The five things that actually go wrong</h2>
      <p>
        In our experience there are really only five failure modes behind almost
        every window service call we get, and most of the time you can narrow it
        down yourself before you ever pick up the phone.
      </p>

      <h3>A failed seal (fogging between the panes)</h3>
      <p>
        Double-pane and triple-pane windows have a spacer between the panes,
        sealed shut and filled with air or an inert gas for insulation. When
        that seal breaks, moist air gets in, and you get the telltale fog or
        haze that won&apos;t wipe off, because it&apos;s trapped between the two
        pieces of glass, not sitting on either surface. It usually starts as a
        faint ring in one corner on cold mornings and fades by afternoon, then
        gets more permanent over a year or two. This is the single most common
        reason people call us, and we&apos;ve written a full breakdown in{" "}
        <Link href="/blog/foggy-window-seal-repair">
          our guide to foggy and cloudy windows
        </Link>
        .
      </p>

      <h3>A bad balance (won&apos;t stay up, or falls shut)</h3>
      <p>
        If you open a double-hung window and it slowly drifts back down, or you
        find yourself propping it open with a paint stick like it&apos;s 1985,
        the glass and frame are almost certainly fine. The problem is the
        balance system, the spring or block-and-tackle mechanism hidden in the
        side jambs that counterweights the sash. Balances wear out on their own
        schedule, and replacing them is a contained, inexpensive repair on most
        window brands. We cover the mechanics of this one in{" "}
        <Link href="/blog/window-wont-stay-up-balance-repair">
          our post on double-hung balances
        </Link>
        .
      </p>

      <h3>Cracked or broken glass</h3>
      <p>
        This one&apos;s obvious to spot and less obvious to price, because cost
        and speed depend on whether it&apos;s a single pane or part of a sealed
        insulated unit, and whether it&apos;s a standard size or something
        custom. A crack from a stray baseball is a different job than a crack
        that&apos;s been slowly spreading from a corner for months, which is
        usually a sign of stress on the frame rather than a one-time impact.
        Details on both are in{" "}
        <Link href="/blog/cracked-window-glass-repair-cost">
          our guide to cracked glass repair
        </Link>
        .
      </p>

      <h3>Rot or frame failure</h3>
      <p>
        This is the one that turns a repair conversation into a replacement
        conversation, because once the wood framing itself is compromised, the
        window doesn&apos;t have anything solid left to be repaired into. It
        usually starts at the sill, where water sits the longest, and
        it&apos;s often hidden under a coat of paint that looks fine right up
        until you press on it. This risk runs higher on older houses with
        original wood frames, covered on{" "}
        <Link href="/old-homes">
          our page on windows and doors in older homes
        </Link>
        .
      </p>

      <h3>Stuck hardware or a torn screen</h3>
      <p>
        Locks, cranks, hinges, and screens are the smallest, cheapest things to
        go wrong, and the ones people live with the longest because they feel
        too minor to bother calling anyone about. A casement crank that spins
        without opening the window, a lock that won&apos;t fully engage, a
        torn screen, none of that needs a new window, it needs a part. These
        are exactly the small jobs covered in{" "}
        <Link href="/blog/window-screens-casings-small-jobs">
          our post on screens, casings, and the jobs bigger companies skip
        </Link>
        .
      </p>

      <h2>How to tell repair from replace in under five minutes</h2>
      <p>
        You don&apos;t need to be a contractor to narrow this down before you
        call anyone. A few minutes with your hands will tell you more than
        staring at the window ever will.
      </p>
      <ul>
        <li>
          <strong>Push on the frame near the corners.</strong> A little give in
          old wood trim is normal. Actual flex, or a soft, spongy feel where the
          frame meets the sill, is a sign the wood underneath has lost its
          structure, not just its paint.
        </li>
        <li>
          <strong>Look for daylight around a closed sash.</strong> Check the
          edges where sash meets frame. A thin sliver of light usually just
          means worn weatherstripping, an easy fix. A gap you could slide a
          business card through on one side but not the other usually means
          the frame has racked out of square.
        </li>
        <li>
          <strong>Press a thumbnail into the sill and any exposed wood trim.</strong>{" "}
          If it dents like cardboard, or your nail sinks in without much
          effort, that&apos;s rot, and paint sitting on top of it is cosmetic,
          not structural.
        </li>
        <li>
          <strong>Isolate the symptom.</strong> If the window operates
          smoothly and closes tight except for one specific complaint,
          fogging, a slow drift down, a stiff lock, that&apos;s almost always
          a contained repair. Three or four things wrong at once on the same
          window is usually your cue the whole unit is past chasing
          individual fixes.
        </li>
      </ul>
      <p>
        None of that replaces an actual inspection, but it&apos;s enough to walk
        into a conversation, with us or with anyone else, already knowing
        roughly which camp you&apos;re in.
      </p>

      <h2>What an actual diagnosis looks like</h2>
      <p>
        When we come out for a window that&apos;s &quot;doing something
        wrong,&quot; we&apos;re not eyeballing it from the driveway. A real
        diagnosis means measuring the opening itself, not just the sash,
        because a window that&apos;s been slowly racking out of square shows up
        as a rectangle that isn&apos;t quite a rectangle anymore, sometimes by
        a quarter inch or more corner to corner. We check the diagonal
        measurements against each other, run the sash through its full range
        of motion to feel where it binds, and probe any suspect wood with a
        pick or an awl rather than just looking at it, because paint hides a
        lot and a fingertip doesn&apos;t tell you as much as a tool that can
        actually find soft spots below the surface.
      </p>
      <p>
        That&apos;s the real difference between an actual diagnosis and a phone
        quote. A phone-only estimate is a guess dressed up as a number, because
        nobody can tell whether your sill has three inches of solid wood left
        or three-eighths of an inch of paint holding together the memory of
        wood, not without being there in person. It takes maybe fifteen
        minutes to do this properly on a single window, and it&apos;s the only
        way to give you a price you can actually trust instead of a
        placeholder that changes the moment someone opens things up.
      </p>

      <ArticleFigure
        src="/photos/process-rough-opening.jpg"
        alt="A rough opening squared and leveled mid-construction, ready for a window or door"
        caption="Sometimes a repair visit turns into this, a squared and leveled rough opening, because the rot had spread further into the framing than the window itself."
      />

      <h2>Common mistakes</h2>
      <p>
        A few habits are what turn small, cheap problems into bigger, more
        expensive ones. We see these often enough that they&apos;re worth
        calling out directly.
      </p>
      <ul>
        <li>
          <strong>Forcing a stuck sash until something gives.</strong> A window
          that won&apos;t budge is usually painted shut, swollen, or hung up on
          a broken balance, and none of those get fixed by muscle. We&apos;ve
          replaced more cracked stiles and broken sash locks caused by someone
          forcing a stuck window than by any storm.
        </li>
        <li>
          <strong>Painting over a soft sill instead of dealing with it.</strong>{" "}
          A fresh coat of paint on punky wood buys you a season or two of it
          looking fine while the rot underneath keeps spreading into the jamb
          next to it. By the time it shows through again, the repair has gotten
          noticeably bigger.
        </li>
        <li>
          <strong>
            Assuming one foggy window means the whole house needs new windows.
          </strong>{" "}
          Seal failure happens unit by unit, driven by sun exposure and age,
          not a house-wide expiration date. It&apos;s common for the two
          south-facing windows to fail years before the ones on a shaded side,
          and treating that as proof the whole house needs replacing is usually
          more than the problem calls for.
        </li>
        <li>
          <strong>
            Letting a small draft go for years until the energy bill makes the
            decision.
          </strong>{" "}
          A draft that&apos;s barely noticeable in September gets a lot more
          noticeable, and expensive, in January. Weatherstripping and balance
          issues are cheap to fix early and considerably more annoying to fix
          after a winter of higher bills has already made the case for you.
        </li>
      </ul>

      <Opinion>
        <p>
          Most of the windows that get replaced around Lancaster County could
          have been repaired for a fraction of what a new unit costs. We&apos;re
          not saying that to sound noble, we&apos;re saying it because
          it&apos;s true, and because we do both kinds of work, so we
          don&apos;t have a reason to steer anyone toward the more expensive
          option.
        </p>
        <p>
          A company that only sells replacement windows has a built-in
          incentive to treat every problem as terminal, because a repair
          doesn&apos;t make them any money. We&apos;d rather fix the balance,
          reseal the unit, or patch the sill when that&apos;s genuinely the
          right call, and earn the replacement job later when something
          actually needs it, than push a sale on a window that had another
          fifteen good years left in it.
        </p>
      </Opinion>

      <Faq
        items={[
          {
            q: "How do I know if my window needs repair or replacement?",
            a: "Look at what's actually broken. If the frame is solid and the problem is fogging, a stuck balance, cracked glass, or hardware, it's almost always repairable. If the frame itself is soft, rotted, or visibly out of square, or the same window has needed repeated repairs, replacement usually makes more sense. When you're not sure, an on-site look settles it in a few minutes.",
          },
          {
            q: "How much does window repair typically cost?",
            a: "It depends entirely on what's wrong. A balance replacement, a reseal, and a rotted sill repair are three different jobs with three different price ranges, and lumping them together isn't honest. Most repairs cost meaningfully less than replacing the unit, which is usually the point of doing one. We give firm numbers after seeing the window in person, not before.",
          },
          {
            q: "Can any window be repaired?",
            a: "Most can, but not all. If the frame has lost its structural integrity to rot, or the parts needed for an older or discontinued window model are no longer made, repair stops being practical or affordable compared to replacement. Condition, not age alone, is what decides that, and it's usually obvious once someone has actually looked at it.",
          },
          {
            q: "How long does a typical window repair take?",
            a: "A straightforward repair like a balance replacement, a reseal, or a hardware fix is usually a same-visit job, often under an hour per window once parts are on hand. Custom glass or a discontinued part can add lead time for ordering. Rot repair takes longer since it involves opening up the frame, and we'll walk you through the timeline before starting anything.",
          },
          {
            q: "Do you repair windows you didn't install?",
            a: "Yes. Most of our repair calls are on windows someone else installed, sometimes years or decades ago, sometimes by a company that's no longer in business. We don't need to have installed a window to fix its balance, reseal it, or replace a rotted sill, we just need to see it in person first.",
          },
        ]}
      />

      <ArticleCTA
        heading="Not sure what's wrong with your window?"
        body="Send us a couple of photos, or have someone come take a look in person. Most of what's covered here gets sorted out in a single visit, and the estimate is free either way."
        href="/windows/repair"
        label="Get a Quote"
      />
    </>
  );
}
