'use client';
import React from 'react';

const MobileHint: React.FC = () => (
  <div className="absolute bottom-4 right-4 z-[1000] bg-white/80 backdrop-blur-sm rounded-lg p-2 shadow-md">
    <div className="text-xs text-gray-600 font-medium">Pinch to zoom</div>
  </div>
);

export default MobileHint;
