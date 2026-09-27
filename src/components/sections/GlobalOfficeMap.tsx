"use client";

import React, { useState, useEffect, useRef, useCallback } from "react";
import Link from "next/link";
import { SITE_FACTS } from "@/lib/siteFacts";
import { MapPin, Phone, Mail, ExternalLink, ChevronLeft, ChevronRight, Plus, Minus, Globe } from "lucide-react";
import { cn } from "@/lib/utils";
import type { Map as MapLibreMap, Marker as MapLibreMarker } from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";

// Precise geographic coordinates [longitude, latitude] for real operations hubs
const OFFICE_LNG_LAT: { [city: string]: [number, number] } = {
  Dubai: [55.2708, 25.2048],
  Bamako: [-8.0029, 12.6392],
  "Kinshasa & Kolwezi": [15.2663, -4.4419],
  Johannesburg: [28.0473, -26.2041],
};

const DEFAULT_CENTER: [number, number] = [22.0, 4.0];
const DEFAULT_ZOOM = 2.8;

// OpenFreeMap style URL (completely free, open-source, no API key required, no watermarks)
const OPENFREEMAP_STYLE = "https://tiles.openfreemap.org/styles/positron";

export function GlobalOfficeMap() {
  const offices = SITE_FACTS.offices;
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [mapReady, setMapReady] = useState<boolean>(false);
  const selectedOffice = offices[selectedIndex] || offices[0];

  const mapContainerRef = useRef<HTMLDivElement | null>(null);
  const mapInstanceRef = useRef<MapLibreMap | null>(null);
  const markersRef = useRef<{ [city: string]: { marker: MapLibreMarker; el: HTMLElement } }>({});

  // Initialize real geographic OpenFreeMap via MapLibre GL
  useEffect(() => {
    let isMounted = true;

    async function initOpenFreeMap() {
      if (!mapContainerRef.current || mapInstanceRef.current) return;

      try {
        const maplibreModule = await import("maplibre-gl");
        const maplibregl = (maplibreModule as unknown as { default?: typeof maplibreModule }).default || maplibreModule;

        if (!isMounted || !mapContainerRef.current) return;

        const map = new maplibregl.Map({
          container: mapContainerRef.current,
          style: OPENFREEMAP_STYLE,
          center: DEFAULT_CENTER,
          zoom: DEFAULT_ZOOM,
          minZoom: 1.8,
          maxZoom: 12,
          scrollZoom: false,
          attributionControl: {
            compact: true,
            customAttribution: '<a href="https://openfreemap.org" target="_blank" rel="noopener">OpenFreeMap</a>',
          },
        });

        map.on("error", (e) => {
          console.warn("MapLibre tile event:", e);
        });

        map.on("load", () => {
          if (!isMounted) return;
          mapInstanceRef.current = map;
          map.resize();

          // Add real geographic markers
          offices.forEach((office, idx) => {
            const lngLat = OFFICE_LNG_LAT[office.city];
            if (!lngLat) return;

            const el = document.createElement("button");
            el.type = "button";
            el.className = `fiza-marker-${idx} flex items-center gap-2 px-3 py-1.5 rounded-none font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
              idx === 0
                ? "bg-[#141412] text-white ring-2 ring-oxide-red border border-oxide-red scale-105"
                : "bg-white text-earth-black border border-slab-grey hover:border-earth-black"
            }`;
            el.innerHTML = `
              <span class="w-2 h-2 rounded-full bg-oxide-red inline-block shrink-0 ${idx === 0 ? "animate-pulse" : ""}"></span>
              <span>${office.city}</span>
            `;

            el.addEventListener("click", () => {
              setSelectedIndex(idx);
            });

            const marker = new maplibregl.Marker({ element: el })
              .setLngLat(lngLat)
              .addTo(map);

            markersRef.current[office.city] = { marker, el };
          });

          setMapReady(true);
        });
      } catch (err) {
        console.error("Failed to initialize OpenFreeMap:", err);
      }
    }

    initOpenFreeMap();

    return () => {
      isMounted = false;
      if (mapInstanceRef.current) {
        mapInstanceRef.current.remove();
        mapInstanceRef.current = null;
      }
    };
  }, [offices]);

  // Smoothly pan & focus to the selected office on real OpenFreeMap
  const focusOnOffice = useCallback((idx: number) => {
    const targetOffice = offices[idx];
    if (!targetOffice || !mapInstanceRef.current) return;

    const lngLat = OFFICE_LNG_LAT[targetOffice.city];
    if (!lngLat) return;

    // Gently glide to the location
    mapInstanceRef.current.flyTo({
      center: lngLat,
      zoom: 4.8,
      duration: 1400,
      essential: true,
    });

    // Update marker styling
    offices.forEach((office, i) => {
      const data = markersRef.current[office.city];
      if (data?.el) {
        const isCurrent = i === idx;
        data.el.className = `fiza-marker-${i} flex items-center gap-2 px-3 py-1.5 rounded-none font-sans text-xs uppercase tracking-wider font-semibold transition-all duration-300 shadow-sm cursor-pointer ${
          isCurrent
            ? "bg-[#141412] text-white ring-2 ring-oxide-red border border-oxide-red scale-105 z-20"
            : "bg-white text-earth-black border border-slab-grey hover:border-earth-black z-10"
        }`;
        data.el.innerHTML = `
          <span class="w-2 h-2 rounded-full bg-oxide-red inline-block shrink-0 ${isCurrent ? "animate-pulse ring-2 ring-oxide-red/40" : ""}"></span>
          <span>${office.city}</span>
        `;
      }
    });
  }, [offices]);

  useEffect(() => {
    if (mapReady) {
      focusOnOffice(selectedIndex);
    }
  }, [selectedIndex, mapReady, focusOnOffice]);

  const handleZoomIn = () => {
    mapInstanceRef.current?.zoomIn();
  };

  const handleZoomOut = () => {
    mapInstanceRef.current?.zoomOut();
  };

  const handleResetView = () => {
    mapInstanceRef.current?.flyTo({
      center: DEFAULT_CENTER,
      zoom: DEFAULT_ZOOM,
      duration: 1200,
      essential: true,
    });
  };

  const handlePrev = () => {
    setSelectedIndex((prev) => (prev - 1 + offices.length) % offices.length);
  };

  const handleNext = () => {
    setSelectedIndex((prev) => (prev + 1) % offices.length);
  };

  return (
    <div className="w-full">
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
        
        {/* Left: Real Geographic Map via OpenFreeMap (Fixes 3 PDF Page 2) */}
        <div className="lg:col-span-7 bg-[#F4F2EC] border border-slab-grey relative min-h-[460px] md:min-h-[520px] flex flex-col justify-between overflow-hidden shadow-sm">
          
          {/* Top Bar Overlay */}
          <div className="relative z-10 bg-iron-white/95 backdrop-blur-sm border-b border-slab-grey px-6 py-3 flex items-center justify-between">
            <span className="font-heading text-lg font-medium text-earth-black">
              Geographic Operations Map
            </span>
            <span className="text-[11px] font-sans text-quarry-grey font-medium uppercase tracking-wider">
              {selectedIndex + 1} of {offices.length} Hubs
            </span>
          </div>

          {/* OpenFreeMap Viewport */}
          <div className="relative w-full flex-grow min-h-[380px]">
            <div
              ref={mapContainerRef}
              className="absolute inset-0 w-full h-full"
              style={{ background: "#EAE7DF" }}
            />

            {/* Restrained Map Controls */}
            <div className="absolute top-4 right-4 z-10 flex flex-col gap-1.5 shadow-sm">
              <button
                type="button"
                onClick={handleZoomIn}
                aria-label="Zoom in"
                className="w-8 h-8 bg-iron-white border border-slab-grey hover:border-earth-black hover:bg-[#F4F2EC] text-earth-black flex items-center justify-center transition-colors"
              >
                <Plus size={14} />
              </button>
              <button
                type="button"
                onClick={handleZoomOut}
                aria-label="Zoom out"
                className="w-8 h-8 bg-iron-white border border-slab-grey hover:border-earth-black hover:bg-[#F4F2EC] text-earth-black flex items-center justify-center transition-colors"
              >
                <Minus size={14} />
              </button>
              <button
                type="button"
                onClick={handleResetView}
                aria-label="Fit all locations"
                title="View all operational hubs"
                className="w-8 h-8 bg-iron-white border border-slab-grey hover:border-earth-black hover:bg-[#F4F2EC] text-earth-black flex items-center justify-center transition-colors mt-1"
              >
                <Globe size={14} />
              </button>
            </div>
          </div>

          {/* Bottom City Selector Strip */}
          <div className="relative z-10 bg-iron-white border-t border-slab-grey px-5 py-3 flex flex-wrap items-center justify-between gap-3">
            <div className="flex flex-wrap items-center gap-2">
              {offices.map((office, idx) => {
                const isSelected = idx === selectedIndex;
                return (
                  <button
                    key={office.city}
                    type="button"
                    onClick={() => setSelectedIndex(idx)}
                    className={cn(
                      "text-xs font-sans uppercase tracking-wider px-3 py-1.5 border transition-all duration-200 font-semibold",
                      isSelected
                        ? "bg-oxide-red border-oxide-red text-iron-white shadow-sm"
                        : "bg-[#F4F2EC] border-slab-grey/80 text-earth-black hover:border-earth-black"
                    )}
                  >
                    {office.city}
                  </button>
                );
              })}
            </div>

            <div className="flex items-center gap-2">
              <button
                type="button"
                onClick={handlePrev}
                aria-label="Previous office"
                className="w-8 h-8 flex items-center justify-center bg-iron-white border border-slab-grey text-earth-black hover:border-earth-black hover:bg-[#F4F2EC] transition-colors"
              >
                <ChevronLeft size={16} />
              </button>
              <button
                type="button"
                onClick={handleNext}
                aria-label="Next office"
                className="w-8 h-8 flex items-center justify-center bg-iron-white border border-slab-grey text-earth-black hover:border-earth-black hover:bg-[#F4F2EC] transition-colors"
              >
                <ChevronRight size={16} />
              </button>
            </div>
          </div>
        </div>

        {/* Right: Detailed Office Information Card Synchronized with Map */}
        <div className="lg:col-span-5 bg-iron-white border border-slab-grey p-8 md:p-9 flex flex-col justify-between shadow-sm">
          <div>
            <div className="flex items-center justify-between mb-5 pb-3 border-b border-slab-grey">
              <span className="font-heading text-lg font-medium text-oxide-red">
                {selectedOffice.country}
              </span>
              <span className="font-sans text-[11px] text-quarry-grey uppercase tracking-wider font-semibold">
                {selectedOffice.city === "Dubai" ? "Global Headquarters" : "Regional Operations Hub"}
              </span>
            </div>

            <h3 className="font-heading text-3xl sm:text-[2rem] font-medium text-earth-black mb-3 leading-snug">
              {selectedOffice.city}
            </h3>

            <p className="font-sans text-sm text-earth-black font-semibold leading-relaxed mb-6">
              {selectedOffice.type}
            </p>

            <div className="space-y-4 pt-4 border-t border-slab-grey/60 text-xs font-sans">
              <div className="flex items-start gap-3">
                <MapPin size={16} className="text-oxide-red mt-0.5 shrink-0" />
                <div>
                  <span className="text-earth-black font-semibold block mb-0.5">Physical Address</span>
                  <span className="text-quarry-grey leading-relaxed block">{selectedOffice.address}</span>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Phone size={16} className="text-oxide-red mt-0.5 shrink-0" />
                <div>
                  <span className="text-earth-black font-semibold block mb-0.5">Direct Operations Line</span>
                  <a
                    href={`tel:${selectedOffice.phone.replace(/\s+/g, "")}`}
                    className="text-quarry-grey hover:text-oxide-red transition-colors"
                  >
                    {selectedOffice.phone}
                  </a>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Mail size={16} className="text-oxide-red mt-0.5 shrink-0" />
                <div>
                  <span className="text-earth-black font-semibold block mb-0.5">Direct Dispatch Email</span>
                  <a
                    href={`mailto:${selectedOffice.email}`}
                    className="text-quarry-grey hover:text-oxide-red transition-colors"
                  >
                    {selectedOffice.email}
                  </a>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-6 mt-8 border-t border-slab-grey flex items-center justify-between">
            {selectedOffice.mapUrl && (
              <a
                href={selectedOffice.mapUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="font-sans text-xs uppercase tracking-wider font-semibold text-earth-black hover:text-oxide-red inline-flex items-center gap-1.5 transition-colors"
              >
                <span>Open in Map</span>
                <ExternalLink size={13} />
              </a>
            )}

            <Link
              href="/contact"
              className="btn-primary !bg-oxide-red hover:!bg-earth-black text-iron-white text-xs py-3 px-6 font-sans uppercase tracking-wider font-semibold inline-flex items-center gap-2"
            >
              Contact Office
            </Link>
          </div>
        </div>

      </div>
    </div>
  );
}
