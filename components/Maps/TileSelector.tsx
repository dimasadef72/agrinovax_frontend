'use client';
import React, { useState } from 'react';
import type { TileOption } from './MapsSection';

interface Props {
  selectedTile: string;
  tileOptions: Record<string, TileOption>;
  onChange: (value: 'default' | 'satellite' | 'terrain') => void;
  selectedOverlayKey: string | null; // ✅ ganti dari showOverlay
  onSelectOverlay: (key: string | null) => void;
}

const TileSelector: React.FC<Props> = ({
  selectedTile,
  tileOptions,
  onChange,
  selectedOverlayKey,
  onSelectOverlay,
}) => {
  const [isOpen, setIsOpen] = useState(false);

  const previewImages: Record<string, string> = {
    default: '/map-default.jpg',
    satellite: '/map-satellite.jpg',
    terrain: '/map-terrain.jpg',
    yolo: '/map-yolo.jpg',
  };

  const handleOverlayClick = (key: string) => {
    onSelectOverlay(selectedOverlayKey === key ? null : key);
  };

  return (
    <div
      className="absolute top-20 md:top-4 right-4 z-[1000]"
      onMouseEnter={() => setIsOpen(true)}
      onMouseLeave={() => setIsOpen(false)}
    >
      {!isOpen ? (
        <div className="bg-white rounded-lg shadow-sm px-3 py-2 cursor-pointer border border-gray-300 hover:shadow-md transition">
          <img src="/layers.png" alt="Layer Selector" width={32} height={32} />
        </div>
      ) : (
        <div className="p-4 w-72 bg-white rounded-xl shadow-lg border border-gray-300 text-black space-y-4">
          {/* Map Type */}
          <div>
            <div className="text-sm font-semibold mb-2">Map type</div>
            <div className="flex justify-between">
              {Object.entries(tileOptions).map(([key, value]) => {
                const isActive = selectedTile === key;
                return (
                  <div
                    key={key}
                    onClick={() => onChange(key as any)}
                    className={`flex flex-col items-center cursor-pointer rounded-xl p-1 ${
                      isActive ? 'border-2 border-cyan-500' : 'border border-transparent'
                    } hover:bg-gray-100 transition`}
                  >
                    <img
                      src={previewImages[key]}
                      alt={value.name}
                      className="w-16 h-16 rounded-lg object-cover"
                    />
                    <span
                      className={`mt-1 text-xs ${
                        isActive ? 'text-cyan-500 font-semibold' : 'text-gray-700'
                      }`}
                    >
                      {value.name}
                    </span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* Overlay */}
          <div>
            <div className="text-sm font-semibold mb-2">Image Overlay</div>
            <div className="grid grid-cols-3 gap-2">
              <div
                onClick={() => handleOverlayClick('yolo')}
                className={`flex flex-col items-center cursor-pointer rounded-xl p-1 ${
                  selectedOverlayKey === 'yolo'
                    ? 'border-2 border-cyan-500'
                    : 'border border-transparent'
                } hover:bg-gray-100 transition`}
              >
                <img
                  src={previewImages['yolo']}
                  alt="Yolo"
                  className="w-16 h-16 rounded-lg object-cover"
                />
                <span
                  className={`mt-1 text-xs ${
                    selectedOverlayKey === 'yolo'
                      ? 'text-cyan-500 font-semibold'
                      : 'text-gray-700'
                  }`}
                >
                  Yolo
                </span>
              </div>
              <div></div>
              <div></div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TileSelector;