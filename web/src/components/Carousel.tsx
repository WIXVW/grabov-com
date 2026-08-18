"use client";

import { useCallback, useEffect, useRef, useState } from "react";

type Slide = {
  type?: "image" | "video";
  src: string;       // image url, or video url (mp4/hls) for type: "video"
  poster?: string;   // required for video slides — shown until/instead of the clip
  pos?: string;
  fit?: "cover" | "contain"; // "contain" keeps the whole frame (e.g. orthophoto edges) on the dark slide bg
  kicker?: string;
  title: string;
  href?: string;
};

// Placeholder media — swap for real per-shoot photos/video later.
// Video slide example: { type: "video", src: "https://cdn/clip.mp4", poster: "/clip.jpg", ... }
const slides: Slide[] = [
  { type: "video", src: "/reel-riverview.mp4", poster: "/reel-riverview.jpg", kicker: "Land & ranch", title: "River View Ranch", href: "#work" },
  { src: "/ranch-aerial-photography-sunset.jpg", pos: "center 60%", kicker: "Land & ranch", title: "Country estate, golden hour", href: "#work" },
  { src: "/aerial-orthomosaic-site-survey.jpg", fit: "contain", kicker: "Mapping & survey", title: "Full-site orthomosaic", href: "#work" },
];

const N = slides.length;
// Triple the list so there are always neighbours on both sides (infinite loop).
const items = [...slides, ...slides, ...slides];

export function Carousel() {
  const [index, setIndex] = useState(N); // start in the middle copy
  const [animate, setAnimate] = useState(true);
  const [inView, setInView] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const drag = useRef<{ x: number; active: boolean }>({ x: 0, active: false });

  // Only load/play video once the carousel scrolls into view (keeps initial load light).
  useEffect(() => {
    const el = sectionRef.current;
    if (!el) return;
    const io = new IntersectionObserver(([e]) => setInView(e.isIntersecting), { threshold: 0.2 });
    io.observe(el);
    return () => io.disconnect();
  }, []);

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
    <section className="showcase" id="work" ref={sectionRef}>
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
                  {s.type === "video" && isActive && inView ? (
                    <video src={s.src} poster={s.poster} muted loop playsInline autoPlay preload="none" />
                  ) : (
                    <img
                      src={s.type === "video" ? (s.poster ?? s.src) : s.src}
                      alt={s.title}
                      loading="lazy"
                      style={{ objectPosition: s.pos, objectFit: s.fit }}
                    />
                  )}
                </div>
                <div className="ov" />
                <div className="cap">
                  {s.kicker && <div className="k">{s.kicker}</div>}
                  <h3>{s.title}</h3>
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
