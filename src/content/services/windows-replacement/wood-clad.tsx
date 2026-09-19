import Link from "next/link";
import { Faq } from "@/components/blog/Article";

export default function Content() {
  return (
    <>
      <h2>What &quot;clad&quot; actually means</h2>

      <p>
        A wood-clad window is a real wood window on the inside with a
        factory-applied skin of another material bonded over the exterior
        faces, the parts actually exposed to weather. Walk up to it from the
        street and you see the cladding. Stand in the room and you see and
        touch real wood, the same as you would on a fully solid wood window.
        It&apos;s a deliberate hybrid, not a compromise product pretending to be
        one thing or the other: the interior stays wood because that&apos;s what
        a room wants to look at and what takes a stain or paint finish well,
        and the exterior gets a low-maintenance skin because that&apos;s the
        surface that would otherwise need repainting every few years exposed
        to sun and rain. A solid wood window gives you the same interior but
        asks for that exterior maintenance. Vinyl or fiberglass give you the
        low maintenance but no wood at all. Clad sits deliberately between
        them.
      </p>

      <h2>Interior wood species and finishing</h2>

      <p>
        Most manufacturers offer a paint-grade species, typically pine, as
        the standard option, with upgrades available to stain-grade woods,
        often including options like Douglas fir or hardwoods such as oak,
        alder, or cherry, depending on the line. The finishing decision
        matters as much as the species. Factory pre-finishing is faster and
        gives a consistent result across every unit, but it won&apos;t
        necessarily land on the exact stain color already in your house.
        Site-finishing, staining or painting after install to match existing
        trim in the room, takes more labor and time but is the only way to
        get a genuinely exact match when you&apos;re replacing some windows now
        and keeping original woodwork elsewhere. Which route makes sense
        depends entirely on whether matching an existing interior is the
        point of choosing clad in the first place.
      </p>

      <h2>Cladding materials: aluminum versus fiberglass</h2>

      <p>
        Aluminum cladding is the more common option, roll-formed or extruded
        aluminum applied over the exterior wood and finished with a durable
        factory coating, usually a baked-on enamel. It comes in a wide color
        range, stays thin enough to keep exterior profiles fairly slim, and
        holds up well, though it can dent from a hard impact more easily than
        the alternative.
      </p>

      <p>
        Fiberglass cladding shows up less often but is offered by some
        manufacturers as a step up. It resists denting better than aluminum
        and, being fiberglass, doesn&apos;t conduct heat the way an aluminum skin
        does, so it isn&apos;t adding a thermal bridge across the exterior face
        the way metal cladding technically does. It generally costs more than
        an aluminum-clad equivalent.
      </p>

      <h2>Why the joint where the two meet matters</h2>

      <p>
        The actual weak point of a clad window isn&apos;t the wood and not the
        cladding on their own, it&apos;s the seam where they meet, and the
        corner joints of the cladding itself. Wood sits behind that cladding,
        and if the seam isn&apos;t properly sealed, or the cladding gets
        compromised by an impact or aging sealant, moisture can work its way
        behind the skin and reach the wood substrate. That wood then rots out
        of sight, behind an exterior that still looks fine, sometimes for
        years before anyone notices anything wrong. This is exactly the kind
        of detail that separates a well-built clad line from a cheaper one,
        and it isn&apos;t something you can judge by looking at a showroom
        sample. It&apos;s worth asking directly how a manufacturer seals that
        joint and what their track record with it actually is, rather than
        assuming all clad windows handle it the same way.
      </p>

      <h2>When the premium is worth it</h2>

      <p>
        The clearest case is matching existing interior trim in an older
        house. When the woodwork already in the room, the casing, the jambs,
        the moldings, is a specific species and finish, a full switch to
        vinyl or an all-white interior can clash badly with everything
        around it. Clad lets a new window disappear into a room the way a
        vinyl replacement often can&apos;t. Historic districts or older
        neighborhoods are the other clear case, where the street-facing look
        genuinely matters, sometimes because a historic commission requires
        it, and a clad exterior can be detailed closer to a traditional
        painted wood window while performing like a modern unit underneath.
        We cover more of the general decision-making around older houses on
        our <Link href="/old-homes">older homes page</Link>. Outside those
        two drivers, on a typical house without a specific interior match or
        exterior character to preserve, clad&apos;s added cost over vinyl or
        fiberglass is hard to justify on performance alone. It&apos;s largely an
        aesthetic and interior-match decision, and an honest quote should say
        so rather than upsell it as a universal upgrade.
      </p>

      <h2>Honest maintenance reality</h2>

      <p>
        The exterior maintenance genuinely drops compared to solid wood.
        You aren&apos;t repainting an exterior wood surface on a schedule, full
        stop. What doesn&apos;t disappear is normal interior wood care,
        especially if you chose site-finishing: occasional touch-up, some
        sensitivity to humidity swings in extreme cases, and more attention
        needed if that wood sits somewhere with a lot of direct sun or
        humidity, like a sunroom or near a bathroom. And &quot;low
        maintenance&quot; on the exterior doesn&apos;t mean &quot;no
        inspection.&quot; The seam between wood and cladding, particularly at
        the sill where water sheds off the window, is worth a periodic look
        the same way any weather-exposed joint on a house is, since that&apos;s
        the one place a clad window can develop a hidden problem behind an
        exterior that still looks fine from the driveway.
      </p>

      <Faq
        items={[
          {
            q: "Is a wood-clad window the same as an all-wood window?",
            a: "No. An all-wood window is wood on both the interior and exterior faces and needs exterior painting on a regular schedule. A clad window keeps real wood on the interior but covers the exterior faces with a low-maintenance aluminum or fiberglass skin, so you get the interior look without the exterior upkeep.",
          },
          {
            q: "Which cladding material is better, aluminum or fiberglass?",
            a: "Aluminum is the more common, lower-cost option with a wide color range and a proven track record. Fiberglass cladding resists denting better and avoids the slight thermal bridging an aluminum skin technically introduces, generally at a higher price. Neither is wrong; it depends on budget and how much those specific advantages matter to you.",
          },
          {
            q: "Can the interior wood be stained to match my existing trim?",
            a: "Yes, if you choose site-finishing rather than a factory pre-finish. It takes more time and labor, but it's the reliable way to get an exact match to woodwork already in the room, which is often the entire reason to choose a clad window over vinyl in the first place.",
          },
          {
            q: "Are wood-clad windows required for historic homes?",
            a: "Not automatically, but some historic districts or local commissions have exterior appearance requirements that a clad window's exterior detailing can meet more easily than vinyl can. Requirements vary by district, so we check what applies to your specific property before assuming clad is necessary.",
          },
        ]}
      />
    </>
  );
}
