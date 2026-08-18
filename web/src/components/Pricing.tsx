const TIERS = [
  {
    name: "Aerial Essentials",
    price: "$99",
    per: "/ property",
    desc: "Everything a standard listing needs.",
    features: [
      "10–15 edited aerial photos",
      "HDR + sky cleanup",
      "MLS-sized & full-resolution",
      "Next-day delivery (24h)",
    ],
    featured: false,
  },
  {
    name: "Aerial + Video",
    price: "$199",
    per: "/ property",
    desc: "Photos plus a scroll-stopping reel.",
    features: [
      "20–25 edited aerial photos",
      "30–60 sec aerial video with music",
      "Branded & unbranded versions",
      "Built for MLS & social",
      "24–48h delivery",
    ],
    featured: true,
  },
  {
    name: "Signature",
    price: "$349",
    per: "/ property",
    desc: "The full cinematic treatment.",
    features: [
      "30+ edited aerial photos",
      "Extended cinematic aerial video",
      "Golden-hour / twilight window",
      "Priority 24h delivery",
    ],
    featured: false,
  },
];

const ADDONS = [
  "Add aerial to a shoot +$50",
  "Golden hour +$60",
  "Same-day rush +$75",
  "Orthomosaic map +$120",
  "Extra video +$100",
];

export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2>Straightforward rates.</h2>
          <p>
            FAA Part 107 certified, fully edited and listing-ready — no hidden fees.
            Travel inside the coverage area is included.
          </p>
        </div>

        <div className="price-grid">
          {TIERS.map((t) => (
            <div key={t.name} className={`price-card${t.featured ? " feat" : ""}`}>
              {t.featured && <div className="pc-badge">Most popular</div>}
              <div className="pc-name">{t.name}</div>
              <div className="pc-price">
                <span className="amt">{t.price}</span>
                <span className="per">{t.per}</span>
              </div>
              <div className="pc-desc">{t.desc}</div>
              <ul className="pc-list">
                {t.features.map((f) => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
              <a className={`pc-cta${t.featured ? " on" : ""}`} href="#book">
                Book this
              </a>
            </div>
          ))}
        </div>

        <div className="price-two">
          <div className="price-wide">
            <div className="pw-top">
              <span className="pc-name">Land, Ranch &amp; Farm</span>
              <span className="pw-from">from $275</span>
            </div>
            <p>
              10+ acres — full-property aerial photos, boundaries and access, water and
              structures. Orthomosaic acreage map optional. Large tracts quoted by size.
            </p>
          </div>
          <div className="price-wide">
            <div className="pw-top">
              <span className="pc-name">Construction &amp; Roofs</span>
              <span className="pw-from">from $99 / visit</span>
            </div>
            <p>
              Progress documentation from above and roof-inspection stills. Monthly rates
              available for ongoing builds.
            </p>
          </div>
        </div>

        <div className="price-addons">
          <span className="pa-label">Add-ons</span>
          {ADDONS.map((a) => (
            <span key={a}>{a}</span>
          ))}
        </div>
      </div>
    </section>
  );
}
