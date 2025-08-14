'use client';
import React, { useState, useRef, useEffect } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';

const ClickMarker: React.FC = () => {
  const [position, setPosition] = useState<[number, number] | null>(null);
  const [address, setAddress] = useState<string | null>(null);
  const markerRef = useRef<any>(null);

  useMapEvents({
    click: async (e) => {
      const { lat, lng } = e.latlng;
      setPosition([lat, lng]);
      setAddress('Mengambil alamat...');

      try {
        const res = await fetch(
          `https://nominatim.openstreetmap.org/reverse?format=json&lat=${lat}&lon=${lng}`
        );
        const data = await res.json();
        setAddress(data.display_name || 'Alamat tidak ditemukan');
      } catch (err) {
        console.error('Reverse geocoding gagal:', err);
        setAddress('Gagal mengambil alamat');
      }
    },
  });

  useEffect(() => {
    if (markerRef.current) {
      setTimeout(() => {
        markerRef.current?.openPopup();
      }, 50);
    }
  }, [position]);

  return position ? (
    <Marker position={position} ref={markerRef}>
      <Popup closeButton={true} maxWidth={340}>
        <div className="text-sm space-y-2 max-h-[150px] overflow-y-auto w-[320px] break-words">
          <div className="grid grid-cols-[80px_1fr] gap-x-2">
            <span className="text-gray-500">Koordinat</span>
            <span className="text-gray-800 break-words">
              {position[0].toFixed(6)}, {position[1].toFixed(6)}
            </span>
          </div>
          <div className="grid grid-cols-[80px_1fr] gap-x-2">
            <span className="text-gray-500">Lokasi</span>
            <span className="text-gray-800 break-words">
              {address}
            </span>
          </div>
        </div>
      </Popup>
    </Marker>
  ) : null;
};

export default ClickMarker;