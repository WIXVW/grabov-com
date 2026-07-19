"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  type?: "image" | "video";
  src: string;       // image url, or video url (mp4/hls) for type: "video"
  poster?: string;   // required for video slides — shown until/instead of the clip
  pos?: string;
  kicker?: string;
  title: string;
  href?: string;
};

// Placeholder media — swap for real per-shoot photos/video later.
// Video slide example: { type: "video", src: "https://cdn/clip.mp4", poster: "/clip.jpg", ... }
const slides: Slide[] = [
  { src: "/hero.jpg", pos: "center 45%", kicker: "Aerial reel", title: "Shot over Granbury", href: "#work" },
  { src: "/hero.jpg", pos: "left 55%", kicker: "Real estate", title: "Lakeside estate", href: "#work" },
  { src: "/hero.jpg", pos: "right 50%", kicker: "Land & ranch", title: "1,200-acre survey", href: "#work" },
  { src: "/hero.jpg", pos: "center 30%", kicker: "Golden hour", title: "Sunset flight", href: "#work" },
  { src: "/hero.jpg", pos: "left 70%", kicker: "Construction", title: "Build progress · Cleburne", href: "#work" },
];

const N = slides.length;
// Triple the list so there are always neighbours on both sides (infinite loop).
const items = [...slides, ...slides, ...slides];

export function Carousel() {
  const [index, setIndex] = useState(N); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  const activeReal = ((index % N) + N) % N;

  const go = useCallback((d: number) => { setAnimate(true); setIndex((v) => v + d); }, []);
  const goToReal = useCallback((r: number) => { setAnimate(true); setIndex(N + r); }, []);

  // After the slide animation ends, if we've drifted into a clone copy,
  // snap back into the middle copy without a transition (seamless loop).
  const onEnd = useCallback(() => {
    if (index < N) { setAnimate(false); setIndex(index + N); }
    else if (index >= 2 * N) { setAnimate(false); setIndex(index - N); }
  }, [index]);

  // Re-enable transitions on the frame after a seamless snap.
  useEffect(() => {
    if (!animate) {
      const id = requestAnimationFrame(() => requestAnimationFrame(() => setAnimate(true)));
      return () => cancelAnimationFrame(id);
    }
  }, [animate]);

  return (
    <section className="showcase" id="reel">
      <div className="showcase-head">
        <h2>See it in the field.</h2>
        <p>Recent aerial photo and video from shoots across North Central Texas.</p>
      </div>

      <div className="carousel">
        <div
          className="car-track"
          style={{ ["--i" as string]: index, transition: animate ? undefined : "none" } as React.CSSProperties}
          onTransitionEnd={onEnd}
          onPointerDown={(e) => { drag.current = { x: e.clientX, active: true }; }}
          onPointerUp={(e) => {
            if (!drag.current.active) return;
            const dx = e.clientX - drag.current.x;
            drag.current.active = false;
            if (dx > 60) go(-1);
            else if (dx < -60) go(1);
          }}
        >
          {items.map((s, idx) => {
            const isActive = idx === index;
            return (
              <a
                key={idx}
                className={`slide${isActive ? " active" : ""}`}
                href={s.href || "#work"}
                onClick={(e) => { if (!isActive) e.preventDefault(); }}
              >
                <div className="m">
                  {/* Only the centred slide loads/plays its video — neighbours show a light poster. */}
                  {s.type === "video" && isActive ? (
                    <video src={s.src} poster={s.poster} muted loop playsInline autoPlay preload="none" />
                  ) : (
                    <img
                      src={s.type === "video" ? (s.poster ?? s.src) : s.src}
                      alt={s.title}
                      loading="lazy"
                      style={{ objectPosition: s.pos }}
                    />
                  )}
                </div>
                <div className="ov" />
                <div className="cap">
                  {s.kicker && <div className="k">{s.kicker}</div>}
                  <h3>{s.title}</h3>
                  <span className="more">Learn More
                    <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
                  </span>
                </div>
              </a>
            );
          })}
        </div>

        <button className="car-arrow prev" aria-label="Previous" onClick={() => go(-1)}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="car-arrow next" aria-label="Next" onClick={() => go(1)}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>

      <div className="car-dots">
        {slides.map((_, idx) => (
          <button key={idx} className={idx === activeReal ? "on" : ""} aria-label={`Slide ${idx + 1}`} onClick={() => goToReal(idx)} />
        ))}
      </div>
    </section>
  );
}
