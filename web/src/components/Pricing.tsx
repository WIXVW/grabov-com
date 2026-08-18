// Priced by kind of shoot. Each category has a photo line and a photo+video line
// (video costs more — that's where the color-grading hours go).
const CATS = [
  {
    name: "Real Estate & Airbnb",
    tag: "Homes, condos & short-term rentals",
    rows: [
      { label: "Aerial photos", desc: "12–18 graded stills · MLS + full-res", price: "$225" },
      { label: "Photos + video", desc: "+ 45–60s color-graded reel", price: "$450" },
    ],
    note: "Twilight / golden-hour window +$75",
    cta: "Book real estate",
  },
  {
    name: "Land, Ranch & Farm",
    tag: "Acreage, ranches & farmland",
    rows: [
      { label: "Aerial photos", desc: "Full-property stills · boundaries & water", price: "from $400" },
      { label: "Photos + video", desc: "+ cinematic graded flyover", price: "from $750" },
    ],
    note: "Orthomosaic acreage map +$250 · large tracts quoted by size",
    cta: "Book land & ranch",
  },
  {
    name: "Construction & Roofs",
    tag: "Builds, sites & roof inspections",
    rows: [
      { label: "Roof & site photos", desc: "Inspection stills + progress set", price: "$200" },
      { label: "Photos + video", desc: "+ graded progress reel", price: "$400" },
    ],
    note: "Ongoing builds — monthly retainer available",
    cta: "Book construction",
  },
];

const ADDONS = [
  "Same-day rush +$100",
  "Extra edited video +$150",
  "Travel beyond the coverage area — quoted",
];

export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2>Priced by the kind of shoot.</h2>
          <p>
            FAA Part 107 certified. Every photo and clip is fully color-graded and
            listing-ready — travel inside the coverage area is included.
          </p>
        </div>

        <div className="price-cats">
          {CATS.map((c) => (
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
