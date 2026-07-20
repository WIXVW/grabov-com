"use client";

import dynamic from "next/dynamic";

// Leaflet touches `window` at import time, so load it client-only (no SSR/prerender).
const Inner = dynamic(() => import("./CoverageMapInner").then((m) => m.CoverageMapInner), {
  ssr: false,
  loading: () => <div className="area-map" />,
});

export function CoverageMap() {
  return <Inner />;
}
