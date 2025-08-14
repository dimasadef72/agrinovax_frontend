import type { LatLngBoundsExpression } from 'leaflet';

export interface OverlayOption {
  key: string;
  name: string;
  url: string;
  bounds: LatLngBoundsExpression;
  opacity?: number;
}

export const overlayOptions: OverlayOption[] = [
  {
    key: 'yolo',
    name: 'YOLO Overlay',
    url: '/atr_overlay.png',
    bounds: [
      [-7.2423112, 112.5522574], // Southwest (bawah kiri)
      [-7.2411861, 112.5534917], // Northeast (atas kanan)
    ],
    opacity: 0.5,
  },
  {
    key: 'mask',
    name: 'Mask AI Overlay',
    url: '/overlays/mask.png',
    bounds: [
      [-6.5, 106.6],
      [-6.1, 107.1],
    ],
    opacity: 0.9,
  },
];
