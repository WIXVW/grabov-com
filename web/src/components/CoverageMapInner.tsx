"use client";

import "leaflet/dist/leaflet.css";
import { useEffect, useRef, useState } from "react";
import { MapContainer, TileLayer, Circle, CircleMarker, Tooltip, useMap } from "react-leaflet";
import L from "leaflet";

const MI = 1609.34;
const GRANBURY: [number, number] = [32.4421, -97.7936];

const cities: { n: string; c: [number, number]; label?: boolean }[] = [
  { n: "Fort Worth", c: [32.7555, -97.3308], label: true },
  { n: "Weatherford", c: [32.7593, -97.7972], label: true },
  { n: "Mineral Wells", c: [32.8085, -98.1128], label: true },
  { n: "Stephenville", c: [32.2207, -98.2023], label: true },
  { n: "Glen Rose", c: [32.2321, -97.7561], label: true },
  { n: "Cleburne", c: [32.3474, -97.3867], label: true },
  { n: "Burleson", c: [32.5421, -97.3208], label: true },
  { n: "Cresson", c: [32.5343, -97.6139], label: true },
];

function FitBounds() {
  const map = useMap();
  useEffect(() => {
    map.fitBounds(L.latLng(GRANBURY[0], GRANBURY[1]).toBounds(135 * MI), { padding: [6, 6] });
  }, [map]);
  return null;
}

export function CoverageMapInner() {
  const [radius, setRadius] = useState(0);
  const wrap = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = wrap.current;
    if (!el) return;
    let raf = 0;
    const io = new IntersectionObserver(([e]) => {
      if (!e.isIntersecting) return;
      io.disconnect();
      const dur = 1100;
      const target = 60 * MI;
      const t0 = performance.now();
      const step = (t: number) => {
        const p = Math.min(1, (t - t0) / dur);
        setRadius(target * (1 - Math.pow(1 - p, 3)));
        if (p < 1) raf = requestAnimationFrame(step);
      };
      raf = requestAnimationFrame(step);
    }, { threshold: 0.3 });
    io.observe(el);
    return () => { io.disconnect(); cancelAnimationFrame(raf); };
  }, []);

  return (
    <div className="area-map" ref={wrap}>
      <MapContainer
        center={GRANBURY}
        zoom={8}
        zoomControl={false}
        attributionControl={false}
        dragging={false}
        scrollWheelZoom={false}
        doubleClickZoom={false}
        touchZoom={false}
        boxZoom={false}
        keyboard={false}
        style={{ height: "100%", width: "100%" }}
      >
        <FitBounds />
        <TileLayer url="https://{s}.basemaps.cartocdn.com/light_nolabels/{z}/{x}/{y}{r}.png" subdomains="abcd" />

        <Circle center={GRANBURY} radius={25 * MI} pathOptions={{ color: "rgba(0,0,0,.2)", weight: 1, fill: false, dashArray: "2 6" }} />
        <Circle center={GRANBURY} radius={radius} pathOptions={{ color: "#2b7de9", weight: 1.6, fillColor: "#2b7de9", fillOpacity: 0.05, dashArray: "3 7" }} />

        {cities.map((c) => (
          <CircleMarker key={c.n} center={c.c} radius={3.6} pathOptions={{ color: "#fff", weight: 1.4, fillColor: "#3a3d42", fillOpacity: 1 }}>
            {c.label && <Tooltip permanent direction="top" offset={[0, -3]} className="area-tip">{c.n}</Tooltip>}
          </CircleMarker>
        ))}

        <CircleMarker center={GRANBURY} radius={7} pathOptions={{ color: "#fff", weight: 2.5, fillColor: "#2b7de9", fillOpacity: 1 }}>
          <Tooltip permanent direction="right" offset={[8, 0]} className="area-tip area-tip-main">Granbury</Tooltip>
        </CircleMarker>
      </MapContainer>
      <div className="area-attr">© OpenStreetMap · © CARTO</div>
    </div>
  );
}
