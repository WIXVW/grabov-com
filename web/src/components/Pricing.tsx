// Prices from Max's "Real Estate Media + Digital Marketing" services sheet.
// Starting prices; every shoot is FAA Part 107 and fully edited.
const MEDIA = [
  {
    name: "Property Photography",
    tag: "Interior, exterior, aerial & land",
    rows: [
      { label: "Interior + exterior", desc: "20–25 edited hi-res images", price: "$325" },
      { label: "Aerial photography", desc: "10–15 edited aerial images", price: "$395" },
      { label: "Land + ranch aerial", desc: "20–25 images · multi-elevation", price: "from $395" },
    ],
    note: "Extra edited photos +$5–10 each · delivery 24–48h",
    cta: "Book photography",
  },
  {
    name: "Aerial Video + FPV",
    tag: "Cinematic, FPV & social edits",
    rows: [
      { label: "Cinematic aerial video", desc: "Filming + full post-production", price: "$450" },
      { label: "Aerial photos + video", desc: "Complete aerial set, one visit", price: "$720" },
      { label: "FPV property fly-through", desc: "Immersive moving tour", price: "from $595" },
    ],
    note: "Golden hour +$150 · Boundary overlay +$125 · Vertical social reel +$125",
    cta: "Book video",
  },
];

const PACKAGES = [
  { name: "Listing Essentials", items: ["Interior + exterior photos", "Aerial photography"], price: "$615" },
  { name: "Listing Showcase", items: ["Interior + exterior photos", "Aerial photography", "Cinematic aerial video"], price: "$995" },
  { name: "Premium Listing", items: ["Everything in Showcase", "FPV property fly-through", "Vertical social edit"], price: "from $1,595" },
];

const MARKETING = [
  { label: "Single-property website", price: "from $795" },
  { label: "Professional Realtor website", price: "from $1,995" },
  { label: "Campaign landing page", price: "from $495" },
  { label: "Google Business setup", price: "$395" },
  { label: "Local SEO", price: "from $750/mo" },
  { label: "Google Ads setup", price: "from $500" },
  { label: "Meta Ads setup", price: "from $400" },
  { label: "CRM / lead management", price: "from $495" },
];

export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2>One partner for the listing.</h2>
          <p>
            Book any service on its own or bundle it into a package — every shoot is FAA
            Part 107 and fully edited. Starting prices; final quote to the property.
          </p>
        </div>

        <div className="price-cats price-cats-2">
          {MEDIA.map((c) => (
            <div key={c.name} className="pcat">
              <span className="pcat-name">{c.name}</span>
              <div className="pcat-tag">{c.tag}</div>
              <div className="pcat-rows">
                {c.rows.map((r) => (
                  <div key={r.label} className="prow">
                    <div className="prow-l">
                      <b>{r.label}</b>
                      <span>{r.desc}</span>
                    </div>
                    <div className="prow-p">{r.price}</div>
                  </div>
                ))}
              </div>
              <div className="pcat-note">{c.note}</div>
              <a className="pc-cta" href="#book">
                {c.cta}
              </a>
            </div>
          ))}
        </div>

        <div className="price-group-h">Listing packages</div>
        <div className="price-cats">
          {PACKAGES.map((p) => (
            <div key={p.name} className="pcat pkg">
              <span className="pcat-name">{p.name}</span>
              <div className="pkg-price">{p.price}</div>
              <ul className="pkg-list">
                {p.items.map((it) => (
                  <li key={it}>{it}</li>
                ))}
              </ul>
              <a className="pc-cta" href="#book">
                Book this
              </a>
            </div>
          ))}
        </div>

        <div className="price-group-h">Beyond the shoot — websites &amp; marketing</div>
        <div className="price-mkt">
          {MARKETING.map((m) => (
            <div key={m.label} className="mrow">
              <span>{m.label}</span>
              <b>{m.price}</b>
            </div>
          ))}
        </div>

        <p className="price-foot">
          Starting prices — final quote confirmed to property size, access, travel and scope.
        </p>
      </div>
    </section>
  );
}
