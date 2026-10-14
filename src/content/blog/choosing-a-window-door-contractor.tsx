import Link from "next/link";
import { Lead, ArticleFigure, Opinion, Faq, ArticleCTA } from "@/components/blog/Article";
import { site } from "@/lib/site";

export default function Content() {
  return (
    <>
      <Lead>
        The window or door you pick matters less than most people think. Who installs it
        matters more. A good unit put in badly will leak, draft, and stick; an ordinary unit
        put in well will quietly do its job for decades. So the real decision is the
        contractor, and there are a handful of things worth checking before you sign anything.
      </Lead>

      <p>
        Around Lancaster County there&apos;s no shortage of people who will replace windows
        and doors: big regional brands with showrooms and TV ads, one-truck crews that work
        by word of mouth, general contractors who do windows alongside decks and kitchens.
        Any of them can be the right call. What separates a good experience from a bad one
        has very little to do with the size of the company and a lot to do with a few
        habits you can spot before the first measurement.
      </p>

      <h2>1. Check the Pennsylvania registration first</h2>
      <p>
        Pennsylvania requires most home improvement contractors to register with the
        Attorney General&apos;s office under the Home Improvement Consumer Protection Act.
        The registration number has to appear on contracts, estimates, and advertising, and
        you can look any contractor up yourself on the{" "}
        <a href="https://hicsearch.attorneygeneral.gov/" target="_blank" rel="noopener noreferrer">
          state&apos;s HIC search
        </a>
        . It takes a minute. If a contractor can&apos;t give you a number, or the name on the
        registration doesn&apos;t match the name on the truck, that&apos;s your answer.
      </p>
      <p>
        Registration isn&apos;t a skill test, it doesn&apos;t prove anyone is good at the
        work. But it does mean the contractor carries liability insurance at the levels the
        state requires and has a record the state can act on if something goes wrong. Ours is{" "}
        {site.license}, and it&apos;s printed on every estimate we write.
      </p>

      <h2>2. Read the reviews, but read them the right way</h2>
      <p>
        A star average tells you less than the reviews themselves. Look for detail: did the
        reviewer mention the crew by name, the town, what kind of window or door, how the
        cleanup went? Detailed reviews are hard to fake and they tell you what the company is
        like on an ordinary Tuesday, not on its best day.
      </p>
      <p>
        Spread your reading across more than one site, because different people review in
        different places. Google is the obvious one. Houzz is useful for remodeling work
        because reviews sit next to project photos, so you can see the work the review is
        talking about (ours is on{" "}
        <a href={site.social.houzz} target="_blank" rel="noopener">
          our Houzz profile
        </a>
        ). ProvenExpert collects verified customer feedback rather than open reviews, which
        cuts down on the fake ones; you can see how{" "}
        <a href={site.social.provenexpert} target="_blank" rel="noopener">
          our ProvenExpert page
        </a>{" "}
        works as an example. And the Better Business Bureau is still worth a glance, mostly
        for how a company responds when a complaint does come in.
      </p>
      <p>
        One more thing: pay attention to the replies. A company that answers a bad review
        calmly and offers to come back out is telling you how it handles problems. A company
        that argues with customers in public will argue with you in private.
      </p>

      <ArticleFigure
        src="/photos/van-construction-site.jpg"
        alt="A work van parked at a residential job site during window installation"
        caption="Who shows up matters. Ask whether the people who measure your home are the same people who install."
      />

      <h2>3. Ask who actually does the install</h2>
      <p>
        This is the question most homeowners don&apos;t think to ask, and it explains a lot
        of bad installs. Plenty of window companies sell the job with their own salesperson
        and then hand the installation to a subcontracted crew paid by the opening. Nothing
        about subcontracting is automatically bad, but it means the person who promised you
        something isn&apos;t the person doing it.
      </p>
      <p>
        Ask directly: &quot;Who will be at my house on install day, and are they your
        employees?&quot; Then ask whether the person measuring is part of that crew. On our
        jobs the crew that measures is the crew that installs, partly because{" "}
        <Link href="/old-homes">older Lancaster County homes</Link> rarely have openings that
        are square or standard, and the measurement is where most of those surprises get
        caught.
      </p>

      <h2>4. Get the quote in writing, and read what&apos;s in it</h2>
      <p>
        In Pennsylvania, home improvement contracts over a small threshold have to be in
        writing, signed by both sides, and must include the contractor&apos;s registration
        number, a description of the work, the price, and start and finish dates. You also
        get a three-day right to cancel after signing. Those rules exist because the
        verbal-handshake version of this business went badly for a lot of people.
      </p>
      <p>A good written quote also answers these, without you having to ask:</p>
      <ul>
        <li>
          <strong>Exactly which product.</strong> Brand, series, glass package, color. &quot;Vinyl
          double-hung&quot; is not a product.
        </li>
        <li>
          <strong>Insert or full-frame.</strong> Whether the old frame stays or comes out
          changes the price, the result, and the trim work. We explain the difference in{" "}
          <Link href="/blog/insert-vs-full-frame-window-replacement">
            insert vs. full-frame replacement
          </Link>
          .
        </li>
        <li>
          <strong>What happens to the trim and the old units.</strong> Is interior trim
          reused, replaced, or patched? Is exterior capping included? Who hauls the old
          windows away?
        </li>
        <li>
          <strong>What happens if they find rot.</strong> In older houses they often do. A
          good quote says how hidden damage gets handled and priced before it happens, not
          after.
        </li>
      </ul>

      <h2>5. Watch out for the pressure tactics</h2>
      <p>
        You&apos;ve probably heard of the in-home pitch that ends with &quot;this price is
        only good if you sign tonight.&quot; It&apos;s still common in this industry, and
        there&apos;s no honest reason for it. Material prices don&apos;t change overnight.
        A company that needs you to decide before you can compare quotes is telling you it
        doesn&apos;t expect to win a fair comparison.
      </p>
      <p>Other things that should slow you down:</p>
      <ul>
        <li>A quote given over the phone without anyone measuring.</li>
        <li>
          A deposit request that&apos;s most of the job. Pennsylvania caps deposits on
          larger jobs at a third of the price, plus the cost of special-order materials.
        </li>
        <li>A &quot;lifetime warranty&quot; nobody will put the terms of in writing.</li>
        <li>Pushing full replacement when you asked about a repair.</li>
      </ul>
      <p>
        That last one matters to us. A lot of the windows and doors we look at need a{" "}
        <Link href="/windows/repair">repair</Link>, not a replacement, and our{" "}
        <Link href="/repair-or-replace">repair-or-replace guide</Link> walks through how we
        make that call.
      </p>

      <h2>6. Ask about lead paint if your house is older than 1978</h2>
      <p>
        Window replacement disturbs painted surfaces, and in a house built before 1978 there
        is a real chance some of that paint contains lead. Federal rules require contractors
        working on those homes to be certified in lead-safe work practices and to contain and
        clean up dust properly. A lot of the housing stock in towns like{" "}
        <Link href="/service-area/ephrata">Ephrata</Link>,{" "}
        <Link href="/service-area/lititz">Lititz</Link> and the older blocks of{" "}
        <Link href="/service-area/lancaster">Lancaster city</Link> falls in that range. Ask
        the question; a good contractor will answer it without hesitating.
      </p>

      <h2>7. Notice how they talk about your house</h2>
      <p>
        The last check is the hardest to write down. A good contractor asks about your house
        before talking about their product. How old is it? Which rooms are drafty? Which
        windows do you actually open? Is the problem comfort, appearance, a failed seal, or
        resale? Those questions are what turns a generic quote into one that fits your home.
      </p>
      <p>
        If the conversation is mostly about the company&apos;s awards and the brand of vinyl,
        and very little about your windows, the install will probably go the same way.
      </p>

      <Opinion>
        Get at least two quotes, ideally three. Not to beat the price down, but because
        seeing how different contractors approach the same house is the fastest way to
        learn what you actually need. If we&apos;re one of the quotes and someone else is a
        better fit for your job, we&apos;d rather you know that going in.
      </Opinion>

      <Faq
        items={[
          {
            q: "How do I check if a contractor is registered in Pennsylvania?",
            a: "Use the Attorney General's Home Improvement Contractor search at hicsearch.attorneygeneral.gov. Search by the company name or the PA number on the estimate. The registration should match the business name you're signing with.",
          },
          {
            q: "How many quotes should I get for new windows?",
            a: "Two or three is the sweet spot. Fewer and you have nothing to compare; many more and the quotes start to blur together. Make sure each one is for a comparable product and the same type of installation, insert or full-frame, or the prices won't mean much side by side.",
          },
          {
            q: "Is a big window company better than a small local installer?",
            a: "Neither is automatically better. Large companies often have showrooms and financing; small crews often have the same people measuring and installing. What matters is registration, insurance, detailed reviews, a clear written quote, and who actually does the install.",
          },
          {
            q: "How much deposit is normal for window replacement?",
            a: "Pennsylvania law limits deposits on home improvement contracts over $1,000 to one third of the price, plus the cost of any special-order materials. Custom windows are usually special-order, so a deposit that covers the product is normal. A request for most of the job up front is not.",
          },
          {
            q: "What should a window replacement quote include?",
            a: "The exact product (brand, series, glass), the installation method, how trim and exterior capping are handled, removal and disposal of the old units, how hidden rot will be priced, the timeline, the warranty terms, and the contractor's PA registration number.",
          },
        ]}
      />

      <ArticleCTA
        heading="Want a second opinion on a quote you already have?"
        body="We're happy to look at your windows or doors in person and tell you what we'd do, even if you already have another quote in hand."
        href="/contact"
        label="Get a Quote"
      />
    </>
  );
}
