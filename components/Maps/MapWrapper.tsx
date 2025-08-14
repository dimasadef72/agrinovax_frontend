"use client";
import React, { useEffect, useRef, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  useMapEvents,
  useMap,
  ImageOverlay, // ✅ Tambahan
} from "react-leaflet";
import MapController from "./MapController"; // Asumsi Anda sudah punya komponen ini
import type { OverlayOption } from "./overlayOptions"; // ✅ Pastikan path sesuai

interface TileOption {
  url: string;
  attribution: string;
}

interface SearchResult {
  lat: number;
  lon: number;
  display_name: string;
}

interface MapWrapperProps {
  center: [number, number];
  zoom: number;
  tile: TileOption;
  isMobile: boolean;
  selectedLocation: SearchResult | null;
  setSelectedLocation: (val: SearchResult | null) => void; // ⬅️ Tambah ini
  onMapClick?: (lat: number, lon: number) => Promise<void>;
  showOverlay?: boolean;
  selectedOverlayKey?: string | null;
  overlayOptions?: OverlayOption[];
}

// Komponen untuk memindahkan peta ke lokasi hasil pencarian
const SearchLocationController: React.FC<{
  selectedLocation: SearchResult | null;
  zoom: number;
}> = ({ selectedLocation, zoom }) => {
  const map = useMap();

  useEffect(() => {
    if (selectedLocation) {
      const timer = setTimeout(() => {
        map.setView([selectedLocation.lat, selectedLocation.lon], zoom, {
          animate: true,
          duration: 1.2,
        });
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [selectedLocation, map, zoom]);

  return null;
};

const MapClickHandler: React.FC<{
  onClick: (lat: number, lon: number) => Promise<void>;
}> = ({ onClick }) => {
  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      await onClick(lat, lng);
    },
  });
  return null;
};

const PopupCloseHandler: React.FC<{ onClose: () => void }> = ({ onClose }) => {
  useMapEvents({
    popupclose: () => {
      onClose();
    },
  });
  return null;
};

const MapWrapper: React.FC<MapWrapperProps> = ({
  center,
  zoom,
  tile,
  isMobile,
  selectedLocation,
  setSelectedLocation,
  showOverlay,
  selectedOverlayKey,
  overlayOptions,
}) => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const markerRef = useRef<any>(null);
  const searchMarkerRef = useRef<any>(null);

  useEffect(() => {
    if (selectedLocation) {
      setPosition(null);
    }
  }, [selectedLocation]);

  useEffect(() => {
    if (searchMarkerRef.current && selectedLocation && !position) {
      const timer = setTimeout(() => {
        searchMarkerRef.current.openPopup();
      }, 1400);
      return () => clearTimeout(timer);
    }
  }, [selectedLocation, position]);

  const handleMapClick = async (lat: number, lon: number) => {
    setPosition([lat, lon]);
    setAddress("Mengambil alamat...");

    try {
      const res = await fetch(
        `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lon}`
      );
      const data = await res.json();
      setAddress(data.display_name || "Alamat tidak ditemukan");
    } catch (err) {
      console.error("Reverse geocoding gagal:", err);
      setAddress("Gagal mengambil alamat");
    }
  };

  useEffect(() => {
    if (markerRef.current && position) {
      const timer = setTimeout(() => {
        markerRef.current.openPopup();
      }, 50);
      return () => clearTimeout(timer);
    }
  }, [position]);

  return (
    <MapContainer
      center={center}
      zoom={isMobile ? 5 : zoom}
      scrollWheelZoom={!isMobile}
      className="w-full h-full"
    >
      <TileLayer
        url={tile.url}
        attribution={tile.attribution}
        maxZoom={23}
        maxNativeZoom={19}
      />
      <MapController
        center={center}
        zoom={zoom}
        selectedLocation={selectedLocation}
      />
      <SearchLocationController
        selectedLocation={selectedLocation}
        zoom={zoom}
      />

      <MapClickHandler onClick={handleMapClick} />

      {selectedLocation && !position && (
        <Marker
          position={[selectedLocation.lat, selectedLocation.lon]}
          ref={searchMarkerRef}
        >
          <Popup>
            <PopupCloseHandler onClose={() => setSelectedLocation(null)} />
            <div className="text-sm">
              <div className="font-medium">
                {selectedLocation.display_name.split(",")[0]}
              </div>
              <div className="text-gray-600 text-xs mt-1">
                {selectedLocation.display_name}
              </div>
            </div>
          </Popup>
        </Marker>
      )}

      {position && (
        <Marker position={position} ref={markerRef}>
          <Popup closeButton maxWidth={340}>
            <PopupCloseHandler onClose={() => setPosition(null)} />
            <div className="text-xs space-y-2 max-h-[150px] overflow-y-auto w-[300px] break-words">
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="text-gray-500">Koordinat</span>
                <span className="text-gray-800 break-words">
                  {position[0].toFixed(6)}, {position[1].toFixed(6)}
                </span>
              </div>
              <div className="grid grid-cols-[80px_1fr] gap-x-2">
                <span className="text-gray-500">Lokasi</span>
                <span className="text-gray-800 break-words">{address}</span>
              </div>
            </div>
          </Popup>
        </Marker>
      )}

      {/* ✅ Tambahkan overlay di bawah marker */}
      {showOverlay &&
        selectedOverlayKey &&
        overlayOptions &&
        overlayOptions
          .filter((o) => o.key === selectedOverlayKey)
          .map((overlay) => (
            <ImageOverlay
              key={overlay.key}
              url={overlay.url}
              bounds={overlay.bounds}
              opacity={overlay.opacity ?? 0.5}
            />
          ))}
    </MapContainer>
  );
};

export default MapWrapper;
