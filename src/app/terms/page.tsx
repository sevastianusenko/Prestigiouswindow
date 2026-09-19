import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { site } from "@/lib/site";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Terms of Use",
  description: `The terms that apply to the ${site.name} website, the guidance published on it, and the quotes we give.`,
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-14 sm:pt-20 pb-24">
      <Eyebrow>Terms of Use</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl">
        The rules that come with this website.
      </SectionHeading>
      <p className="mt-4 font-sans text-sm text-ink/50">
        Effective {LEGAL_EFFECTIVE_DATE}
      </p>

      <div className="mt-10 rounded-lg border border-line bg-fog p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-ink">The short version</h2>
        <p className="mt-3 text-sm text-ink/75">
          This website explains what we do and offers general guidance about
          windows and doors. It is not a diagnosis of your particular house, and
          nothing on it is a binding offer. Actual work is agreed in a separate
          written contract that you sign before we start. Read on if you want the
          detail.
        </p>
      </div>

      <div className="article mt-12">
        <h2>Agreeing to these terms</h2>
        <p>
          By using this website you accept what is written here. If you
          don&apos;t, the remedy is simple: stop using the site. These terms
          cover the website itself. They are not the agreement under which we
          perform work, which is a separate document described below.
        </p>

        <h2>What this website is</h2>
        <p>
          It is two things. First, a description of the services we offer and the
          area we cover. Second, a library of guidance on diagnosing and fixing
          window and door problems, written to be genuinely useful to somebody
          trying to work out what is wrong before they call anybody.
        </p>
        <p>
          What it is not is an inspection of your home. A guide explaining why
          sealed units fog up is written for the general case. Your house has its
          own age, its own framing, its own drainage and its own history of
          previous repairs, and any of those can change the answer completely.
          Use the guidance to ask better questions, not as a substitute for
          somebody looking at the actual opening.
        </p>
        <p>
          We take accuracy seriously and correct mistakes when we find them, but
          we can&apos;t promise every page is complete, current, or right for
          your situation. Building codes and product lines both change. If you
          are about to spend money based on something you read here, confirm it
          with us first.
        </p>

        <h2>Quotes, estimates, and what actually forms a contract</h2>
        <p>
          Nothing on this website is an offer that can be accepted into a
          contract. Prices, product availability and lead times are not published
          here for a reason: they depend on measurements, on the condition of the
          opening, and on what the manufacturer can actually supply that month.
        </p>
        <p>
          Submitting the quote form does not book work and does not create any
          obligation on either side. It starts a conversation. A quote we give
          you afterward is valid for the period stated on it and may be revised
          if what we find on site differs from what was described, which happens
          most often when rot or previous repair work is hidden behind trim.
        </p>
        <p>
          Work is only agreed in a signed written contract between you and us.
          That document, not this website and not an email thread, sets out the
          scope, the price, the schedule, the payment terms and the warranty.
          Under Pennsylvania&apos;s Home Improvement Consumer Protection Act, a
          home improvement contract for more than $500 has to be in writing to be
          enforceable against you at all, which is a protection for you rather
          than a formality for us. Where that Act requires particular terms or
          disclosures, your contract is where they live, and it controls if
          anything in it differs from what you read on this website.
        </p>

        <h2>Your right to cancel</h2>
        <p>
          Pennsylvania gives you three business days from the day you sign a home
          improvement contract to cancel it without penalty and without giving a
          reason. That right is yours by law, it will be set out in the contract
          itself, and it applies no matter where the contract was signed.
        </p>
        <p>
          You do not have to put it in writing. Pennsylvania&apos;s Supreme Court
          confirmed in 2026 that you can cancel by any means that actually
          reaches the contractor inside those three days, including a phone call.
          If you change your mind, call us on{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a> and that is the end of
          it. We would rather lose a job cleanly than hold someone to a decision
          they regretted the next morning.
        </p>

        <h2>Licensing and who we are</h2>
        <p>
          {site.name} is a home improvement contractor based in {site.baseTown},
          working in {site.serviceCounty} and neighboring counties. Our
          Pennsylvania Home Improvement Contractor registration number is{" "}
          {site.license}. Pennsylvania requires that number to appear on
          contractor advertising and on every contract, estimate and proposal, so
          you will find it in the footer of every page here and on any paperwork
          we hand you. If a contractor quoting against us cannot show you theirs,
          that tells you something.
        </p>
        <p>
          You can check any Pennsylvania contractor&apos;s registration, ours
          included, through the{" "}
          <a
            href="https://hicsearch.attorneygeneral.gov/"
            target="_blank"
            rel="noopener"
          >
            Attorney General&apos;s public register
          </a>
          . We would encourage you to, and not only for us.
        </p>

        <h2>Photographs, words, and who owns them</h2>
        <p>
          The text, layout, photographs and guides on this site belong to us or
          are used with permission, and are protected by copyright. You are
          welcome to read them, print a page for your own use, and link to
          anything here. You may not republish our content as your own, or
          reproduce it commercially, without asking us first.
        </p>
        <p>
          Photographs of completed work show real jobs. They illustrate the kind
          of work we do rather than promising an identical result on a different
          house with different openings and different light.
        </p>

        <h2>Using the site sensibly</h2>
        <p>
          Don&apos;t try to break the site, don&apos;t use it to send anything
          unlawful, and don&apos;t scrape it wholesale to spin up a competing
          page. Ordinary human use, and ordinary search engine crawling, are
          exactly what it is here for.
        </p>
        <p>
          When you send us something through the quote form, it should be true
          and it should be yours to send. What we do with it afterward is
          described in our <Link href="/privacy">privacy policy</Link>.
        </p>

        <h2>Links to other websites</h2>
        <p>
          Our guides link out to outside sources, typically government energy and
          building code material, where those explain something better than we
          could. We don&apos;t control those sites and aren&apos;t responsible
          for what they say or do. A link is a pointer, not an endorsement of
          everything on the other end of it.
        </p>

        <h2>The website comes as it is</h2>
        <p>
          We provide this site on an as-is basis. We don&apos;t warrant that it
          will always be available, that it will be free of errors, or that it
          will suit any particular purpose you have in mind for it. To the extent
          the law allows, we exclude the implied warranties that would otherwise
          apply to the website itself.
        </p>
        <p>
          To be clear about what this paragraph does not touch: it is about the
          website. It has nothing to do with the warranty on work we perform or
          on products we install, which is set out in your contract and in the
          manufacturer&apos;s own warranty.
        </p>

        <h2>Limits on liability</h2>
        <p>
          To the fullest extent Pennsylvania law permits, we are not liable for
          indirect or consequential loss arising from your use of this website or
          from reliance on general guidance published here. Nothing in these
          terms limits any liability that cannot lawfully be limited, and nothing
          here reduces the rights Pennsylvania consumer protection law gives you
          in connection with home improvement work.
        </p>

        <h2>Which law applies</h2>
        <p>
          These terms are governed by the laws of the Commonwealth of
          Pennsylvania, and disputes arising from them belong in the courts of
          Pennsylvania. We work locally, so this is unlikely to surprise anyone.
        </p>

        <h2>Changes</h2>
        <p>
          We may update these terms. When we do, the effective date at the top of
          this page changes with them, and the version published here is the one
          that applies to your use of the site from that point on.
        </p>

        <h2>Getting in touch</h2>
        <p>
          Questions about these terms go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>. For anything about a
          job, the <Link href="/contact">contact page</Link> is faster.
        </p>
      </div>
    </div>
  );
}
