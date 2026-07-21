export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer-top">
          <div>
            <div className="fbrand">Grabov <span>Aerial</span></div>
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
            <a href="#reel">Selected work</a>
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
            © 2026 Grabov Aerial Media · Granbury, TX · FAA Part 107 Certified<br />
            Serving Granbury and North Central Texas within ~60 miles.
          </div>
          <div className="footer-social">
            <a href="https://instagram.com/" aria-label="Instagram">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8}><rect x="3" y="3" width="18" height="18" rx="5" /><circle cx="12" cy="12" r="4" /><circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none" /></svg>
            </a>
            <a href="https://facebook.com/" aria-label="Facebook">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M14 8.5V7c0-.8.2-1.2 1.3-1.2H17V3h-2.5C11.6 3 11 4.6 11 6.7v1.8H9V11h2v9h3v-9h2.1l.4-2.5H14Z" /></svg>
            </a>
            <a href="https://youtube.com/" aria-label="YouTube">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="currentColor"><path d="M22 8.2a2.6 2.6 0 0 0-1.8-1.8C18.5 6 12 6 12 6s-6.5 0-8.2.4A2.6 2.6 0 0 0 2 8.2 27 27 0 0 0 1.6 12 27 27 0 0 0 2 15.8a2.6 2.6 0 0 0 1.8 1.8C5.5 18 12 18 12 18s6.5 0 8.2-.4a2.6 2.6 0 0 0 1.8-1.8 27 27 0 0 0 .4-3.8 27 27 0 0 0-.4-3.8ZM10 15V9l5.2 3L10 15Z" /></svg>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
