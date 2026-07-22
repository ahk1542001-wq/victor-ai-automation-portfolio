export const SVG_RADIUS = 40;
export const SVG_CENTER = 50;
const DEG2RAD = Math.PI / 180;

export interface Point3D {
  x: number;
  y: number;
  z: number;
  visible: boolean;
}

/**
 * Project latitude/longitude to 2D SVG coordinates using orthographic projection.
 * @param lat Latitude in degrees
 * @param lon Longitude in degrees
 * @param rotX Tilt (pitch) of the globe in degrees
 * @param rotY Rotation (yaw) of the globe in degrees
 * @param zoom Zoom scale factor
 * @returns Projected 2D coordinates + z-depth + visibility
 */
export function project(
  lat: number,
  lon: number,
  rotX: number,
  rotY: number,
  zoom: number = 1
): Point3D {
  const rLat = lat * DEG2RAD;
  const rLon = (lon + rotY) * DEG2RAD;

  // 3D coordinates on a unit sphere
  const x = Math.cos(rLat) * Math.sin(rLon);
  const y = Math.sin(rLat);
  const z = Math.cos(rLat) * Math.cos(rLon);

  // Apply tilt (rotation around X-axis)
  const rTilt = rotX * DEG2RAD;
  const y1 = y * Math.cos(rTilt) - z * Math.sin(rTilt);
  const z1 = y * Math.sin(rTilt) + z * Math.cos(rTilt);

  // Project to SVG coordinates
  // SVG Y-axis points downwards, so we negate y1
  return {
    x: SVG_CENTER + x * SVG_RADIUS * zoom,
    y: SVG_CENTER - y1 * SVG_RADIUS * zoom,
    z: z1,
    visible: z1 > 0,
  };
}

/**
 * Generate a grid of latitude and longitude lines.
 */
export function generateGridLines() {
  const LATS = [-75, -60, -45, -30, -15, 0, 15, 30, 45, 60, 75];
  const LONS = Array.from({ length: 24 }, (_, i) => i * 15 - 180);
  const pointsPerLine = 72; // every 5 degrees

  const lines: Array<Array<[number, number]>> = [];

  // Latitudes
  for (const lat of LATS) {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i <= pointsPerLine; i++) {
      const lon = -180 + (i / pointsPerLine) * 360;
      pts.push([lat, lon]);
    }
    lines.push(pts);
  }

  // Longitudes
  for (const lon of LONS) {
    const pts: Array<[number, number]> = [];
    for (let i = 0; i <= pointsPerLine; i++) {
      const lat = -90 + (i / pointsPerLine) * 180;
      pts.push([lat, lon]);
    }
    lines.push(pts);
  }

  return lines;
}

/**
 * Generate points along a great circle arc between two locations.
 */
export function generateArc(
  lat1: number,
  lon1: number,
  lat2: number,
  lon2: number,
  steps: number = 20
) {
  // Simple linear interpolation is sufficient for close coordinates
  // For distant ones, spherical linear interpolation (SLERP) would be needed.
  // Myanmar and Bangkok are close enough that linear interpolation looks fine.
  const pts: Array<[number, number]> = [];
  for (let i = 0; i <= steps; i++) {
    const t = i / steps;
    const lat = lat1 + (lat2 - lat1) * t;
    const lon = lon1 + (lon2 - lon1) * t;
    pts.push([lat, lon]);
  }
  return pts;
}

// Myanmar and Bangkok approximate coordinates
export const MYANMAR_COORDS = { lat: 21.9162, lon: 95.956 };
export const BANGKOK_COORDS = { lat: 13.7563, lon: 100.5018 };

// Target rotation to show Southeast Asia
export const SEA_ROT_X = 18;
export const SEA_ROT_Y = -98;
