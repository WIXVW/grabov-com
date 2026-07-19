import { Carousel } from "@/components/Carousel";

export default function Home() {
  return (
    <main>
      <section className="hero" id="top">
        <div className="hero-bg">
          <img src="/hero.jpg" alt="Aerial drone photography over North Central Texas" />
        </div>
        <div className="hero-grad" />

        {/* top nav */}
        <div className="nav">
          <div className="wrap nav-in">
            <div className="nav-left">
              <a className="logo" href="#top">GRABOV</a>
              <nav className="nav-links">
                <a href="#work">Work</a>
                <a href="#services">Services</a>
                <a href="#coverage">Coverage</a>
                <a href="#pricing">Pricing</a>
                <a href="#about">About</a>
              </nav>
            </div>
            <div className="nav-right">
              <span className="ic" aria-hidden="true">
                <svg width="19" height="19" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round"><circle cx="11" cy="11" r="7" /><path d="m21 21-4.3-4.3" /></svg>
              </span>
              <a className="phone" href="tel:+16822882885">(682) 288-2885</a>
              <a className="store" href="#book">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="M3 9h18l-1.5 11a1 1 0 0 1-1 .9H5.5a1 1 0 0 1-1-.9L3 9Z" /><path d="M8 9V6a4 4 0 0 1 8 0v3" /></svg>
                Book a shoot
              </a>
            </div>
          </div>
        </div>

        {/* hero content */}
        <div className="hero-in">
          <div className="kick">Aerial Photography &amp; Video · Real Estate &amp; Land</div>
          <h1>Grabov <span>Aerial</span></h1>
          <div className="tag">See it from above</div>
          <div className="btns">
            <a className="hbtn" href="#work">
              See the work
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </a>
            <a className="hbtn" href="#book">
              Book a shoot
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
            </a>
          </div>
        </div>

        {/* category switcher */}
        <div className="switcher">
          <div className="wrap">
            <a href="#services">Real Estate &amp; Airbnb</a>
            <a href="#services" className="on">Land, Ranch &amp; Farm</a>
            <a href="#services">Construction &amp; Roofs</a>
          </div>
        </div>
      </section>

      {/* BLOCK 2 — category cards */}
      <section className="cats" id="services">
        <div className="wrap">
          <div className="cats-head">
            <h2>Coverage for every kind of property.</h2>
            <p>Whatever you&apos;re marketing — a home, hundreds of acres, or an active build — there&apos;s a shoot built to sell it.</p>
          </div>
          <div className="cat-grid">
            <a className="cat" href="#book">
              <div className="bg"><img src="/hero.jpg" alt="Aerial real estate photography" style={{ objectPosition: "center 55%" }} /></div>
              <div className="top-scrim" />
              <div className="c-in">
                <div className="kick">Real Estate &amp; Airbnb</div>
                <h3>Listings that sell faster from above</h3>
                <span className="more">Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                </span>
              </div>
            </a>

            <a className="cat" href="#book">
              <div className="bg"><img src="/hero.jpg" alt="Aerial land and ranch survey" style={{ objectPosition: "right 50%" }} /></div>
              <div className="top-scrim" />
              <div className="c-in">
                <div className="kick">Land, Ranch &amp; Farm</div>
                <h3>Show every acre, access and water</h3>
                <span className="more">Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                </span>
              </div>
            </a>

            <a className="cat" href="#book">
              <div className="bg"><img src="/hero.jpg" alt="Aerial construction and roof documentation" style={{ objectPosition: "left 60%" }} /></div>
              <div className="top-scrim" />
              <div className="c-in">
                <div className="kick">Construction &amp; Roofs</div>
                <h3>Document progress without the ladder</h3>
                <span className="more">Learn More
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                </span>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* BLOCK 3 — showcase carousel */}
      <Carousel />
    </main>
  );
}
