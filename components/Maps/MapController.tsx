'use client';
import { useEffect, useRef } from 'react';
import { useMap } from 'react-leaflet';

interface MapControllerProps {
  center: [number, number];
  zoom: number;
  selectedLocation?: any; // tambahkan prop ini
}

const MapController: React.FC<MapControllerProps> = ({ center, zoom, selectedLocation }) => {
  const map = useMap();
  const isInitialized = useRef(false);

  useEffect(() => {
    // Hanya set view pada initialization pertama atau ketika tidak ada selectedLocation
    if (!isInitialized.current) {
      if (center && zoom) {
        map.setView(center, zoom);
        isInitialized.current = true;
      }
    } else if (!selectedLocation) {
      // Hanya update jika tidak ada selectedLocation (hasil pencarian)
      if (center && zoom) {
        map.setView(center, zoom);
      }
    }
  }, [map, center, zoom, selectedLocation]);

  return null;
};

export default MapController;