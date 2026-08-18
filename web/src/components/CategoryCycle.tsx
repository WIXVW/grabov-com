"use client";

import { useEffect, useState } from "react";

// Purely decorative: the hero photo stays put; these category labels auto-cycle,
// highlighting one at a time. No hover, no clicks.
const LABELS = ["Real Estate & Airbnb", "Land, Ranch & Farm", "Construction & Roofs"];
const DURATION = 3000;

export function CategoryCycle() {
  const [active, setActive] = useState(1);

  useEffect(() => {
    const t = setInterval(() => setActive((a) => (a + 1) % LABELS.length), DURATION);
    return () => clearInterval(t);
  }, []);

  return (
    <div className="switcher" aria-hidden="true">
      <div className="wrap">
        {LABELS.map((l, i) => (
          <div key={l} className={`item${i === active ? " on" : ""}`}>
            {l}
          </div>
        ))}
      </div>
    </div>
  );
}
