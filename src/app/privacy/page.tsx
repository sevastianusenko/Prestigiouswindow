import type { Metadata } from "next";
import Link from "next/link";
import { Eyebrow, SectionHeading } from "@/components/ui/Type";
import { site } from "@/lib/site";
import { LEGAL_EFFECTIVE_DATE } from "@/lib/legal";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description: `How ${site.name} handles the information you send us. No trackers, no cookies, no data sales.`,
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <div className="mx-auto max-w-3xl px-5 sm:px-8 pt-14 sm:pt-20 pb-24">
      <Eyebrow>Privacy Policy</Eyebrow>
      <SectionHeading as="h1" className="text-4xl sm:text-5xl">
        What we do with your information.
      </SectionHeading>
      <p className="mt-4 font-sans text-sm text-ink/50">
        Effective {LEGAL_EFFECTIVE_DATE}
      </p>

      <div className="mt-10 rounded-lg border border-line bg-fog p-6 sm:p-8">
        <h2 className="font-display text-xl font-bold text-ink">The short version</h2>
        <p className="mt-3 text-sm text-ink/75">
          We collect what you tell us when you ask for a quote, and we use it to
          get back to you about the work. This website sets no cookies and runs
          no analytics or advertising trackers of any kind. We don&apos;t sell
          your information, and we don&apos;t add you to a marketing list you
          didn&apos;t ask for. The long version below just says the same thing
          with more precision.
        </p>
      </div>

      <div className="article mt-12">
        <h2>Who this applies to</h2>
        <p>
          This policy covers {site.name}, a window and door contractor based in{" "}
          {site.baseTown}, and it covers this website along with the phone calls
          and emails that come out of it. If you hire us, the information we
          gather in the course of doing the job is covered here too.
        </p>

        <h2>What we collect</h2>
        <p>
          There are only two ways information about you reaches us, and neither
          one is subtle.
        </p>
        <p>
          <strong>What you hand us directly.</strong> If you fill out the quote
          form, that is your name and phone number, and optionally your town and
          a description of what needs doing. If you call or email instead, it is
          whatever you choose to tell us. If we come out to look at the job, we
          take measurements, notes and usually photographs of the openings we are
          quoting, because you cannot price a window off a description.
        </p>
        <p>
          <strong>What the web server records on its own.</strong> Like every
          website, ours sits on a host that keeps standard server logs: the IP
          address a request came from, the browser and device type, which page
          was requested and when. We do not use these logs to build a profile of
          you. They exist so the site stays up and so abuse can be traced.
        </p>

        <h2>What we deliberately do not do</h2>
        <p>
          This part is worth spelling out, because a lot of contractor websites
          quietly do the opposite:
        </p>
        <ul>
          <li>
            <strong>No cookies.</strong> This site sets none. You will not get a
            cookie banner here because there is nothing to consent to.
          </li>
          <li>
            <strong>No analytics or advertising trackers.</strong> There is no
            Google Analytics, no advertising pixel, no session recorder, no
            heatmap tool. Nobody is watching you scroll.
          </li>
          <li>
            <strong>No third-party fonts or embeds.</strong> Our typefaces are
            served from our own domain rather than loaded from an outside font
            service, so browsing this site does not quietly announce your visit
            to a company you have never dealt with.
          </li>
          <li>
            <strong>No selling or renting your information.</strong> Not to lead
            brokers, not to other contractors, not to anyone. Home improvement
            leads get traded around constantly in this industry. We don&apos;t
            participate.
          </li>
          <li>
            <strong>No accounts and no online payments.</strong> There is nothing
            to sign up for on this site, so we hold no passwords, and we take no
            card or bank details through it.
          </li>
        </ul>

        <h2>Why we use what we collect</h2>
        <p>
          To call you back, answer your question, put together a quote, schedule
          the visit, order the right parts, do the work, and keep the records a
          business has to keep afterward, including for warranty questions that
          surface years later. That is the whole list.
        </p>
        <p>
          We will follow up on a quote you asked for. If you tell us you are not
          interested, that ends it.
        </p>

        <h2>Who else sees it</h2>
        <p>
          We keep this deliberately small. Your information may reach:
        </p>
        <ul>
          <li>
            <strong>Our hosting provider.</strong> This site runs on Vercel,
            which processes the server logs described above as part of
            delivering the site to your browser.
          </li>
          <li>
            <strong>Suppliers and trade partners, only as far as your job needs
            it.</strong> A manufacturer needs the measurements and the delivery
            address to build and ship your units. They do not need your
            life story, and they don&apos;t get it.
          </li>
          <li>
            <strong>Anyone the law requires.</strong> A court order, a valid legal
            request, or an insurance or permit process you have asked us to take
            part in.
          </li>
        </ul>
        <p>
          That is the complete list. There is no advertising network in it and no
          data broker.
        </p>

        <h2>How long we keep it</h2>
        <p>
          Quote requests that never turn into work get cleared out once they are
          clearly stale. For jobs we actually did, we keep the file for as long
          as we may need it: warranty claims, follow-up work, and the tax and
          business records a contractor is required to retain. If you want your
          information removed sooner, ask us and we will remove whatever we are
          not required to keep.
        </p>

        <h2>Your choices</h2>
        <p>
          You can ask us what we have about you, ask us to correct it, ask us to
          delete it, or tell us to stop contacting you. Email{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or call{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>. You do not need to
          explain why, and asking costs you nothing.
        </p>
        <p>
          Because this site runs no trackers, there is nothing here for a browser
          Do Not Track or Global Privacy Control signal to switch off. There is
          no tracking to opt out of in the first place.
        </p>

        <h2>Keeping it safe</h2>
        <p>
          The site is served over an encrypted connection, and access to job files
          is limited to the people who need them to do their work. We are a local
          contractor, not a bank, and we are not going to pretend our systems are
          impenetrable. What we can tell you honestly is that we collect very
          little, share less, and do not keep what we have no reason to keep,
          which is the most reliable protection there is.
        </p>

        <h2>Children</h2>
        <p>
          This site is meant for adults arranging work on a property. We do not
          knowingly collect information from children. If you believe a child has
          sent us something, contact us and we will delete it.
        </p>

        <h2>Links to other sites</h2>
        <p>
          Our guides sometimes link out to sources worth reading, such as
          government energy or building code pages. Once you follow a link, you
          are on someone else&apos;s website under someone else&apos;s privacy
          policy, and this one no longer applies.
        </p>

        <h2>Changes to this policy</h2>
        <p>
          If we change how we handle your information, we will update this page
          and move the effective date at the top. If a change is significant and
          we are already working with you, we will tell you directly rather than
          hoping you re-read a web page.
        </p>

        <h2>Getting in touch</h2>
        <p>
          Questions about any of this go to{" "}
          <a href={`mailto:${site.email}`}>{site.email}</a> or{" "}
          <a href={site.phoneHref}>{site.phoneDisplay}</a>. Our{" "}
          <Link href="/terms">terms of use</Link> cover the other half of the
          legal picture, and you can reach a human any time through the{" "}
          <Link href="/contact">contact page</Link>.
        </p>
      </div>
    </div>
  );
}
