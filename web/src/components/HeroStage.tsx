"use client";

import { useEffect, useState } from "react";

// Vertical category slider: selecting (or auto-advancing) crossfades the hero
// background to that category's photo. The active item's left bar fills over the
// autoplay duration for a "slider progress" feel.
type Cat = { label: string; img: string; pos: string };

const CATS: Cat[] = [
  { label: "Real Estate & Airbnb", img: "/real-estate-airbnb.jpg", pos: "center 42%" },
  { label: "Land, Ranch & Farm", img: "/ranch-aerial-photography-sunset.jpg", pos: "center 60%" },
  { label: "Construction & Roofs", img: "/construction-roof.jpg", pos: "center 45%" },
];
const DURATION = 5000; // keep in sync with --sw-dur in globals.css

export function HeroStage() {
  const [active, setActive] = useState(1); // start on Land, Ranch & Farm
  const [paused, setPaused] = useState(false);

  useEffect(() => {
    if (paused) return;
    const t = setTimeout(() => setActive((a) => (a + 1) % CATS.length), DURATION);
    return () => clearTimeout(t);
  }, [active, paused]);

  return (
    <>
      <div className="hero-bg">
        {CATS.map((c, i) => (
          <img
            key={c.img}
            src={c.img}
            alt=""
            aria-hidden="true"
            className={i === active ? "on" : ""}
            style={{ objectPosition: c.pos }}
          />
        ))}
      </div>

      <div
        className="switcher"
        onMouseEnter={() => setPaused(true)}
        onMouseLeave={() => setPaused(false)}
      >
        <div className="wrap">
          {CATS.map((c, i) => (
            <button
              key={c.label}
              type="button"
              className={i === active ? "on" : ""}
              aria-current={i === active}
              onClick={() => setActive(i)}
            >
              <span className="bar">
                {i === active && (
                  <span
                    key={active}
                    className="fill"
                    style={{ animationPlayState: paused ? "paused" : "running" }}
                  />
                )}
              </span>
              {c.label}
            </button>
          ))}
        </div>
      </div>
    </>
  );
}
