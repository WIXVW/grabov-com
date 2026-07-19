const CX = 270;
const CY = 235;

// Towns placed at roughly their real bearing/distance from Granbury.
const towns = [
  { name: "Weatherford", x: 230, y: 149, lx: 222, ly: 145, anchor: "end" as const },
  { name: "Cresson", x: 307, y: 191, lx: 315, ly: 189, anchor: "start" as const },
  { name: "Cleburne", x: 368, y: 244, lx: 376, ly: 248, anchor: "start" as const },
  { name: "Glen Rose", x: 240, y: 300, lx: 233, ly: 312, anchor: "end" as const },
  { name: "Stephenville", x: 176, y: 269, lx: 168, ly: 273, anchor: "end" as const },
];

export function ServiceArea() {
  return (
    <section className="area" id="coverage">
      <div className="wrap area-grid">
        <div className="area-text">
          <span className="eyebrow">Coverage</span>
          <h2>Where we fly.</h2>
          <p>
            Based in Granbury, flying anywhere within about 50 miles across North Central
            Texas — and farther out on request.
          </p>
          <div className="area-serving">
            <b>Serving:</b> Granbury · Weatherford · Glen Rose · Stephenville · Cleburne ·
            Cresson &amp; surrounding communities.
          </div>
          <a className="area-cta" href="https://forms.gle/qL1Z1Kp1dSkx2ZaHA">
            Not sure if you&apos;re in range? Just ask
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
          </a>
        </div>

        <div className="area-map">
          <svg viewBox="0 0 540 470" role="img" aria-label="Service area map centered on Granbury, Texas with a roughly 50-mile radius">
            {/* crosshair */}
            <g stroke="rgba(0,0,0,.07)" strokeWidth="1">
              <line x1={CX} y1={CY - 150} x2={CX} y2={CY + 150} />
              <line x1={CX - 175} y1={CY} x2={CX + 175} y2={CY} />
            </g>
            {/* range rings */}
            <circle cx={CX} cy={CY} r="60" fill="none" stroke="rgba(0,0,0,.12)" strokeWidth="1" strokeDasharray="2 6" />
            <circle cx={CX} cy={CY} r="112" fill="rgba(43,125,233,.06)" stroke="rgba(43,125,233,.5)" strokeWidth="1.4" strokeDasharray="2 6" />
            <text x={CX} y={CY - 118} textAnchor="middle" fontSize="12" fill="#8a8f96" letterSpacing="0.06em">≈ 50 MILE RADIUS</text>
            <text x={CX + 4} y={CY - 62} fontSize="10.5" fill="#a2a7ad">25 mi</text>

            {/* connectors */}
            <g stroke="rgba(0,0,0,.13)" strokeWidth="1">
              {towns.map((t) => (
                <line key={t.name} x1={CX} y1={CY} x2={t.x} y2={t.y} />
              ))}
            </g>

            {/* towns */}
            {towns.map((t) => (
              <g key={t.name}>
                <circle cx={t.x} cy={t.y} r="3.6" fill="#3a3d42" />
                <text x={t.lx} y={t.ly} textAnchor={t.anchor} fontSize="13" fontWeight={500} fill="#3a3d42">{t.name}</text>
              </g>
            ))}

            {/* Granbury (center) */}
            <circle cx={CX} cy={CY} r="15" fill="rgba(43,125,233,.16)" />
            <circle cx={CX} cy={CY} r="6.5" fill="#2b7de9" stroke="#fff" strokeWidth="2.5" />
            <text x={CX + 14} y={CY + 5} fontSize="15.5" fontWeight={700} fill="#16181c">Granbury</text>
            <text x={CX + 14} y={CY + 21} fontSize="11.5" fill="#8a8f96">Base · North Central Texas</text>
          </svg>
        </div>
      </div>
    </section>
  );
}
