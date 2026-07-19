"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  type?: "image" | "video";
  src: string;
  poster?: string;
  pos?: string;
  kicker?: string;
  title: string;
  href?: string;
};

// Placeholder media — swap for real per-shoot photos/video later.
// For a video slide use: { type: "video", src: "/clip.mp4", poster: "/clip.jpg", ... }
const slides: Slide[] = [
  { src: "/hero.jpg", pos: "center 45%", kicker: "Aerial reel", title: "Shot over Granbury", href: "#work" },
  { src: "/hero.jpg", pos: "left 55%", kicker: "Real estate", title: "Lakeside estate", href: "#work" },
  { src: "/hero.jpg", pos: "right 50%", kicker: "Land & ranch", title: "1,200-acre survey", href: "#work" },
  { src: "/hero.jpg", pos: "center 30%", kicker: "Golden hour", title: "Sunset flight", href: "#work" },
  { src: "/hero.jpg", pos: "left 70%", kicker: "Construction", title: "Build progress · Cleburne", href: "#work" },
];

const AUTOPLAY_MS = 6000;
const N = slides.length;
// Triple the list so there are always neighbours on both sides (infinite loop).
const items = [...slides, ...slides, ...slides];

export function Carousel() {
  const [index, setIndex] = useState(N); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const timer = useRef<ReturnType<typeof setInterval> | null>(null);
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  const activeReal = ((index % N) + N) % N;

  const go = useCallback((d: number) => { setAnimate(true); setIndex((v) => v + d); }, []);
  const goToReal = useCallback((r: number) => { setAnimate(true); setIndex(N + r); }, []);

  const stop = useCallback(() => { if (timer.current) clearInterval(timer.current); }, []);
  const start = useCallback(() => {
    stop();
    timer.current = setInterval(() => { setAnimate(true); setIndex((v) => v + 1); }, AUTOPLAY_MS);
  }, [stop]);
  useEffect(() => { start(); return stop; }, [start, stop]);

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

      <div className="carousel" onMouseEnter={stop} onMouseLeave={start}>
        <div
          className="car-track"
          style={{ ["--i" as string]: index, transition: animate ? undefined : "none" } as React.CSSProperties}
          onTransitionEnd={onEnd}
          onPointerDown={(e) => { drag.current = { x: e.clientX, active: true }; stop(); }}
          onPointerUp={(e) => {
            if (!drag.current.active) return;
            const dx = e.clientX - drag.current.x;
            drag.current.active = false;
            if (dx > 60) go(-1);
            else if (dx < -60) go(1);
            start();
          }}
        >
          {items.map((s, idx) => (
            <a
              key={idx}
              className={`slide${idx === index ? " active" : ""}`}
              href={s.href || "#work"}
              onClick={(e) => { if (idx !== index) e.preventDefault(); }}
            >
              <div className="m">
                {s.type === "video" ? (
                  <video src={s.src} poster={s.poster} muted loop playsInline autoPlay />
                ) : (
                  <img src={s.src} alt={s.title} style={{ objectPosition: s.pos }} />
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
          ))}
        </div>

        <button className="car-arrow prev" aria-label="Previous" onClick={() => { go(-1); start(); }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m15 18-6-6 6-6" /></svg>
        </button>
        <button className="car-arrow next" aria-label="Next" onClick={() => { go(1); start(); }}>
          <svg width="30" height="30" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><path d="m9 6 6 6-6 6" /></svg>
        </button>
      </div>

      <div className="car-dots">
        {slides.map((_, idx) => (
          <button key={idx} className={idx === activeReal ? "on" : ""} aria-label={`Slide ${idx + 1}`} onClick={() => { goToReal(idx); start(); }} />
        ))}
      </div>
    </section>
  );
}
