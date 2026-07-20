import { CoverageMap } from "./CoverageMap";

export function ServiceArea() {
  return (
    <section className="area" id="coverage">
      <div className="wrap area-grid">
        <div className="area-text">
          <span className="eyebrow">Coverage</span>
          <h2>Where we fly.</h2>
          <p>
            Based in Granbury, flying across North Central Texas — out to Fort Worth and
            Mineral Wells, roughly a 60-mile radius — and farther out on request.
          </p>
          <div className="area-serving">
            <b>Serving:</b> Granbury · Fort Worth · Weatherford · Mineral Wells · Cresson ·
            Cleburne · Burleson · Glen Rose · Stephenville &amp; surrounding communities.
          </div>
          <a className="area-cta" href="https://forms.gle/qL1Z1Kp1dSkx2ZaHA">
            Not sure if you&apos;re in range? Just ask
            <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
          </a>
        </div>

        <CoverageMap />
      </div>
    </section>
  );
}
