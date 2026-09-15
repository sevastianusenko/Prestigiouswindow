import { site } from "@/lib/site";

const items = [
  { k: "Licensed", v: site.license },
  { k: "Insured", v: "General liability & workers' comp on file" },
  { k: "Based", v: `${site.baseTown} — ${site.serviceCounty}` },
  { k: "Estimates", v: "In-person, measured on site, no upsell script" },
];

export function TrustBar() {
  return (
    <div className="bg-graphite text-quartz">
      <div className="mx-auto max-w-7xl px-5 sm:px-8 py-5 grid grid-cols-2 lg:grid-cols-4 gap-6">
        {items.map((item) => (
          <div key={item.k} className="min-w-0">
            <div className="font-mono text-[11px] tracking-[0.2em] uppercase text-gold">
              {item.k}
            </div>
            <div className="text-sm text-quartz/85 mt-1">{item.v}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
