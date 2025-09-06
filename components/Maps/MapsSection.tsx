"use client";
import React, { useEffect, useRef, useState } from "react";
import dynamic from "next/dynamic"; // ✅ Untuk dynamic import
import SearchBar from "./SearchBar";
import TileSelector from "./TileSelector";
import MobileHint from "./MobileHint";
import { overlayOptions, OverlayOption } from "./overlayOptions";

// ✅ Import MapWrapper hanya di client (hindari SSR error karena Leaflet)
const MapWrapper = dynamic(() => import("./MapWrapper"), {
  ssr: false,
});

export type TileType = "default" | "satellite" | "terrain";

export interface SearchResult {
  lat: number;
  lon: number;
  display_name: string;
}

export interface TileOption {
  url: string;
  attribution: string;
  name: string;
}

const MapsSection: React.FC = () => {
  const [selectedTile, setSelectedTile] = useState<TileType>("default");
  const [searchQuery, setSearchQuery] = useState("");
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const [selectedLocation, setSelectedLocation] = useState<SearchResult | null>(
    null
  );
  const [mapCenter, setMapCenter] = useState<[number, number]>([
    -6.2, 106.816666,
  ]);
  const [mapZoom, setMapZoom] = useState(6);
  const [isSearching, setIsSearching] = useState(false);
  const [showResults, setShowResults] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [viewportHeight, setViewportHeight] = useState<number | null>(null);
  const searchTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [selectedOverlayKey, setSelectedOverlayKey] = useState<string | null>(
    null
  );

  const tileOptions: Record<TileType, TileOption> = {
    default: {
      url: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
      attribution: "© OpenStreetMap contributors",
      name: "Default",
    },
    satellite: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
      attribution: "© Esri, Maxar, Earthstar Geographics",
      name: "Satellite",
    },
    terrain: {
      url: "https://server.arcgisonline.com/ArcGIS/rest/services/World_Topo_Map/MapServer/tile/{z}/{y}/{x}",
      attribution:
        "© OpenStreetMap contributors, SRTM | Map style: © OpenTopoMap",
      name: "Terrain",
    },
  };

  useEffect(() => {
    const updateDimensions = () => {
      if (typeof window !== "undefined") {
        setIsMobile(window.innerWidth < 768);
        setViewportHeight(window.innerHeight);
      }
    };
    updateDimensions();
    window.addEventListener("resize", updateDimensions);
    return () => window.removeEventListener("resize", updateDimensions);
  }, []);

  useEffect(() => {
    if (showResults) {
      const handleClickOutside = () => setShowResults(false);
      document.addEventListener("click", handleClickOutside);
      return () => document.removeEventListener("click", handleClickOutside);
    }
  }, [showResults]);

  const searchAddress = async (query: string) => {
    if (!query.trim()) return setSearchResults([]);
    setIsSearching(true);
    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/search?format=json&q=${encodeURIComponent(
          query
        )}&limit=5&countrycodes=id`
      );
      const data = await res.json();
      setSearchResults(data);
      setShowResults(true);
    } catch (err) {
      console.error("Search error:", err);
      setSearchResults([]);
    }
    setIsSearching(false);
  };

  const handleSearchInput = (query: string) => {
    setSearchQuery(query);
    if (searchTimeoutRef.current) clearTimeout(searchTimeoutRef.current);
    searchTimeoutRef.current = setTimeout(() => searchAddress(query), 500);
  };

  const handleLocationSelect = (location: SearchResult) => {
    setSelectedLocation(location);
    setMapCenter([location.lat, location.lon]);
    setMapZoom(15);
    setSearchQuery(location.display_name);
    setShowResults(false);
  };

  return (
    <div
      className={`w-full relative ${
        isMobile ? "overflow-hidden" : ""
      }`}
      style={{
        height: isMobile && viewportHeight ? `${viewportHeight}px` : "100vh",
      }}
    >
      {/* Search Bar */}
      <div className="absolute top-4 left-15 right-4 md:left-20 md:right-auto md:w-80 z-[1000]">
        <SearchBar
          query={searchQuery}
          onQueryChange={handleSearchInput}
          onSubmit={() => searchAddress(searchQuery)}
          results={searchResults}
          onSelect={handleLocationSelect}
          isSearching={isSearching}
          showResults={showResults}
          setShowResults={setShowResults}
        />
      </div>

      {/* Tile Selector */}
      <TileSelector
        selectedTile={selectedTile}
        tileOptions={tileOptions}
        onChange={setSelectedTile}
        selectedOverlayKey={selectedOverlayKey}
        onSelectOverlay={setSelectedOverlayKey}
      />

      {/* Map */}
      <MapWrapper
        center={mapCenter}
        zoom={mapZoom}
        tile={tileOptions[selectedTile]}
        isMobile={isMobile}
        selectedLocation={selectedLocation}
        setSelectedLocation={setSelectedLocation}
        showOverlay={!!selectedOverlayKey}
        selectedOverlayKey={selectedOverlayKey}
        overlayOptions={overlayOptions}
      />

      {/* Mobile Hint */}
      {isMobile && <MobileHint />}
    </div>
  );
};

export default MapsSection;
