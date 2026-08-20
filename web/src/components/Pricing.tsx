// Aerial-only pricing, drawn from Max's services sheet. FAA Part 107, fully edited.
const CARDS = [
  {
    name: "Aerial Photography",
    tag: "Homes, land & ranch from above",
    rows: [
      { label: "Aerial photography", desc: "10–15 edited aerial images", price: "$395" },
      { label: "Land + ranch aerial", desc: "20–25 images · multi-elevation", price: "from $395" },
    ],
    note: "Extra edited photos +$5–10 each · property boundary overlay +$125 · delivery 24–48h",
    cta: "Book aerial photos",
  },
  {
    name: "Aerial Video + FPV",
    tag: "Cinematic, FPV & social edits",
    rows: [
      { label: "Cinematic aerial video", desc: "Filming + full post-production", price: "$450" },
      { label: "Aerial photos + video", desc: "Complete aerial set, one visit", price: "$720" },
      { label: "FPV property fly-through", desc: "Immersive moving tour", price: "from $595" },
    ],
    note: "Golden hour / twilight +$150 · vertical social reel +$125 · delivery 3–5 days",
    cta: "Book aerial video",
  },
];

export function Pricing() {
  return (
    <section className="pricing" id="pricing">
      <div className="wrap">
        <div className="pricing-head">
          <span className="eyebrow">Pricing</span>
          <h2>Aerial media, priced simply.</h2>
          <p>
            FAA Part 107 certified and fully edited. Starting prices — the final quote is
            confirmed to the property size, access and travel.
          </p>
        </div>

        <div className="price-cats price-cats-2">
          {CARDS.map((c) => (
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

        <p className="price-foot">
          Large acreage, builders and recurring aerial content are quoted to the actual scope.
        </p>
      </div>
    </section>
  );
}
