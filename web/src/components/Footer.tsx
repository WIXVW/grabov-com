export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="fbrand">Above<span>Capture</span></div>
            <p className="blurb">
              FAA Part 107 certified drone photography &amp; video for real estate, land,
              ranches, construction and roof inspections across North Central Texas.
            </p>
          </div>

          <div className="col">
            <h4>Services</h4>
            <a href="#services">Real Estate &amp; Airbnb</a>
            <a href="#services">Land, Ranch &amp; Farm</a>
            <a href="#services">Construction &amp; Roofs</a>
          </div>

          <div className="col">
            <h4>Explore</h4>
            <a href="#work">Selected work</a>
            <a href="#how">How it works</a>
            <a href="#coverage">Service area</a>
            <a href="#book">Request a quote</a>
          </div>

          <div className="col">
            <h4>Contact</h4>
            <a href="tel:+16822882885">(682) 288-2885</a>
            <a href="mailto:max@grabov.com">max@grabov.com</a>
            <a href="https://wa.me/16822882885">WhatsApp</a>
            <a href="#book">Book a shoot</a>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copy">
            © 2026 AboveCapture · Granbury, TX · FAA Part 107 Certified<br />
            Serving Granbury and North Central Texas within ~60 miles.
          </div>
          <div className="footer-social">
            <a href="https://www.facebook.com/drone.photography.near.me" aria-label="Facebook" target="_blank" rel="noopener noreferrer">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.5C11.6 3 11 4.6 11 6.7v1.8H9V11h2v9h3v-9h2.1l.4-2.5H14Z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
