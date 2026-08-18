"use client";

import { useEffect, useState } from "react";

// Decorative iOS-style picker drum: the highlighted label stays dead-centre while
// the list rotates through it. Purely cosmetic — no hover, no clicks.
const LABELS = ["Real Estate & Airbnb", "Land, Ranch & Farm", "Construction & Roofs"];
const N = LABELS.length;
const ROW = 32; // px per row — keep in sync with .witem height in globals.css
const STEP = 1900; // ms between advances

// Tripled so the drum can wrap seamlessly (centre snaps back into the middle copy).
const ITEMS = [...LABELS, ...LABELS, ...LABELS];

export function CategoryCycle() {
  const [idx, setIdx] = useState(N + 1); // centre starts on "Land, Ranch & Farm"
  const [anim, setAnim] = useState(true);

  useEffect(() => {
    const t = setInterval(() => setIdx((i) => i + 1), STEP);
    return () => clearInterval(t);
  }, []);

  // After a move settles, snap the centre back into the middle copy without animating.
  function onEnd() {
    if (idx >= 2 * N) {
      setAnim(false);
      setIdx((i) => i - N);
    }
  }
  useEffect(() => {
    if (!anim) {
      const t = setTimeout(() => setAnim(true), 20);
      return () => clearTimeout(t);
    }
  }, [anim]);

  return (
    <div className="switcher" aria-hidden="true">
      <div className="wheel">
        <span className="wheel-marker" />
        <div className={`wheel-track${anim ? "" : " noanim"}`} onTransitionEnd={onEnd}>
          {ITEMS.map((label, i) => {
            const d = i - idx; // rows away from centre
            const ad = Math.abs(d);
            const style = {
              transform: `translateY(${d * ROW}px) rotateX(${d * -32}deg) scale(${Math.max(0, 1 - ad * 0.12)})`,
              opacity: ad > 2 ? 0 : d === 0 ? 1 : Math.max(0, 0.5 - (ad - 1) * 0.28),
            };
            return (
              <div key={i} className={`witem${d === 0 ? " on" : ""}`} style={style}>
                {label}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
