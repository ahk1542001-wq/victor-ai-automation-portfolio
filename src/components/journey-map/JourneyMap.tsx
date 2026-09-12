/**
 * JourneyMap — a small static "atlas page" that replaces the rotating
 * 3D globe. Two cities, one line, no controls.
 *
 *   Yangon (origin)  →  Bangkok (now)
 *
 * The country outlines are hand-drawn simplified silhouettes —
 * recognisable shapes, ~12 vertices each, no geographic precision.
 * Drawn deliberately so the ink stroke sits in the page's hard 2px
 * edge language.
 *
 * Why this and not a real interactive map:
 *   - The Globe was interactive and the user did not want controls.
 *   - An SDK-driven map looks like Google Maps and breaks editorial.
 *   - This is a portfolio, not a logistics tool. The story is the two
 *     cities and the line between them.
 *
 * Coords are converted from (lat, lon) to SVG (x, y) using:
 *   x = (lon - 90) * 40
 *   y = (30 - lat) * 16.67
 * so the viewport covers lon 90..110°E, lat 0..30°N in an 800×500
 * viewBox. Both cities fall well inside that window.
 *
 * Static — no 'use client' needed.
 */

import { ArrowRight } from 'lucide-react';

// ---------------------------------------------------------------
// Coords
// ---------------------------------------------------------------
const CITY_FROM = { name: 'Yangon', country: 'Myanmar', lat: 16.8409, lon: 96.1735, label: 'From' };
const CITY_NOW  = { name: 'Bangkok', country: 'Thailand', lat: 13.7563, lon: 100.5018, label: 'Now' };

// Viewport
const LON_MIN = 90;
const LAT_MAX = 30;
const SCALE_X = 40;   // px per degree of longitude
const SCALE_Y = 16.67; // px per degree of latitude

function toXY(lat: number, lon: number): { x: number; y: number } {
  return {
    x: (lon - LON_MIN) * SCALE_X,
    y: (LAT_MAX - lat) * SCALE_Y,
  };
}

// Country silhouettes. Hand-drawn approximations of well-known
// geographic shapes — recognisable silhouettes at a glance, ~15–20
// vertices each, deliberately simplified so they sit in the page's
// hard 2px edge language. NOT reproductions of any specific basemap;
// each path is constructed from the author's knowledge of geography
// for the purposes of this illustration.
const COUNTRY_PATHS: Array<{ id: string; d: string; labelXY: { lat: number; lon: number } }> = [
  // India — large triangle on the west, tapers south as a peninsula
  {
    id: 'in',
    d: 'M -40,0 L 300,0 L 300,90 L 270,170 L 245,230 L 200,290 L 130,360 L 50,390 L -40,395 Z',
    // lon 91, not 78 — India's real centroid sits west of this
    // viewport's left edge (LON_MIN 90), which put the label at
    // x = -480, entirely off-canvas. 91 lands it at x = 40, clear of
    // Myanmar's western boundary and of the Bangladesh label below.
    labelXY: { lat: 25, lon: 91 },
  },
  // Bangladesh — small wedge between India and Myanmar
  {
    id: 'bd',
    d: 'M 300,90 L 270,170 L 245,170 L 245,140 L 270,115 Z',
    labelXY: { lat: 23.5, lon: 90.4 },
  },
  // Myanmar — long vertical kite shape, narrowing at the south
  {
    id: 'mm',
    d: 'M 300,33 L 420,33 L 440,83 L 400,133 L 380,167 L 320,217 L 340,267 L 368,300 L 340,333 L 160,333 L 112,283 L 180,233 L 100,167 L 180,100 L 220,67 Z',
    labelXY: { lat: 22, lon: 96 },
  },
  // Thailand — hourglass with a long south peninsula
  {
    id: 'th',
    d: 'M 280,167 L 420,167 L 620,167 L 608,200 L 620,250 L 580,267 L 500,300 L 480,317 L 500,333 L 400,367 L 420,383 L 460,400 L 480,407 L 320,407 L 360,383 L 340,367 L 320,333 L 360,300 L 352,267 L 340,250 L 320,217 L 300,200 Z',
    labelXY: { lat: 17, lon: 101 },
  },
  // Laos — narrow vertical strip east of Thailand
  {
    id: 'la',
    d: 'M 620,167 L 700,170 L 700,290 L 650,330 L 600,300 L 580,267 Z',
    labelXY: { lat: 19, lon: 103.5 },
  },
  // Cambodia — small rounded shape south of Laos
  {
    id: 'kh',
    d: 'M 600,330 L 680,330 L 680,360 L 630,375 L 600,360 Z',
    labelXY: { lat: 12.5, lon: 105 },
  },
  // Vietnam — long S-curve down the east coast
  {
    id: 'vn',
    d: 'M 700,170 L 800,200 L 800,260 L 740,300 L 780,360 L 760,420 L 720,430 L 700,360 L 680,330 L 700,290 Z',
    labelXY: { lat: 16, lon: 108 },
  },
  // China — wide north band that fills above Myanmar
  {
    id: 'cn',
    d: 'M -40,0 L 800,0 L 800,90 L 740,140 L 680,200 L 620,167 L 420,33 L 300,33 L 300,0 Z',
    labelXY: { lat: 28, lon: 104 },
  },
];

// ---------------------------------------------------------------
// Component
// ---------------------------------------------------------------
export function JourneyMap() {
  const from = toXY(CITY_FROM.lat, CITY_FROM.lon);
  const now  = toXY(CITY_NOW.lat,  CITY_NOW.lon);

  // Curved dashed arc between the two cities (quadratic curve,
  // arching north). The control point is the midpoint pulled north
  // so the arc reads as a journey, not a straight line.
  const midX = (from.x + now.x) / 2;
  const midY = (from.y + now.y) / 2 - 80;
  const arcPath = `M ${from.x} ${from.y} Q ${midX} ${midY} ${now.x} ${now.y}`;

  // Endpoints of the arc, used for tiny tick markers at the pins
  return (
    <figure className="journey-map">
      <svg
        viewBox="0 0 800 500"
        xmlns="http://www.w3.org/2000/svg"
        role="img"
        aria-label={`Map showing the journey from ${CITY_FROM.name}, ${CITY_FROM.country} to ${CITY_NOW.name}, ${CITY_NOW.country}`}
        className="block h-auto w-full"
      >
        {/* Sea — soft warm tone. Subtle. Drawn first so countries sit on top. */}
        <rect x={0} y={0} width={800} height={500} fill="var(--paper-2)" />

        {/* Subtle grid — graph-paper feel. Every 2°. */}
        <g stroke="var(--sand)" strokeWidth={1} strokeOpacity={0.5}>
          {Array.from({ length: 11 }, (_, i) => i * 80).map((x) => (
            <line key={`vx-${x}`} x1={x} y1={0} x2={x} y2={500} />
          ))}
          {Array.from({ length: 7 }, (_, i) => i * 80).map((y) => (
            <line key={`hy-${y}`} x1={0} y1={y} x2={800} y2={y} />
          ))}
        </g>

        {/* Countries — outline only, paper fill */}
        <g>
          {COUNTRY_PATHS.map((c) => {
            const { x, y } = toXY(c.labelXY.lat, c.labelXY.lon);
            return (
              <g key={c.id}>
                <path
                  d={c.d}
                  fill="var(--paper)"
                  stroke="var(--ink)"
                  strokeWidth={1.5}
                  strokeLinejoin="round"
                  strokeLinecap="round"
                />
                <text
                  x={x}
                  y={y}
                  textAnchor="middle"
                  fontFamily="ui-serif, Georgia, serif"
                  fontSize={14}
                  fontWeight={500}
                  fill="var(--ink-soft)"
                  style={{ letterSpacing: '0.06em', textTransform: 'uppercase' }}
                  /* 0.75, not lower: ink-soft at 0.55 measures 2.89:1 on
                     the sea fill in light mode and 4.33:1 in dark — both
                     fail WCAG AA for 14px text. At 0.75 the weakest pair
                     is 4.72:1 (light) / 6.86:1 (dark), and the labels
                     still read as clearly recessive against the 16:1
                     city names. */
                  opacity={0.75}
                >
                  {c.id === 'mm' ? 'Myanmar'
                    : c.id === 'th' ? 'Thailand'
                    : c.id === 'in' ? 'India'
                    : c.id === 'bd' ? 'Bangladesh'
                    : c.id === 'la' ? 'Laos'
                    : c.id === 'kh' ? 'Cambodia'
                    : c.id === 'vn' ? 'Vietnam'
                    : c.id === 'cn' ? 'China'
                    : ''}
                </text>
              </g>
            );
          })}
        </g>

        {/* The arc — clay, dashed. The journey. */}
        <path
          d={arcPath}
          fill="none"
          stroke="var(--clay)"
          strokeWidth={2}
          strokeLinecap="round"
          strokeDasharray="4 6"
          opacity={0.85}
        />

        {/* FROM pin — pine. Outer ring + filled dot + crosshair */}
        <g>
          <circle cx={from.x} cy={from.y} r={11} fill="var(--paper)" stroke="var(--ink)" strokeWidth={2} />
          <circle cx={from.x} cy={from.y} r={5}  fill="var(--pine)" />
          <line x1={from.x - 16} y1={from.y} x2={from.x + 16} y2={from.y} stroke="var(--ink)" strokeWidth={1} opacity={0.3} />
          <line x1={from.x} y1={from.y - 16} x2={from.x} y2={from.y + 16} stroke="var(--ink)" strokeWidth={1} opacity={0.3} />
        </g>

        {/* NOW pin — clay. Slightly larger so "now" reads as the destination. */}
        <g>
          <circle cx={now.x} cy={now.y} r={13} fill="var(--paper)" stroke="var(--ink)" strokeWidth={2} />
          <circle cx={now.x} cy={now.y} r={7}  fill="var(--clay)" />
          <line x1={now.x - 18} y1={now.y} x2={now.x + 18} y2={now.y} stroke="var(--ink)" strokeWidth={1} opacity={0.3} />
          <line x1={now.x} y1={now.y - 18} x2={now.x} y2={now.y + 18} stroke="var(--ink)" strokeWidth={1} opacity={0.3} />
        </g>

        {/* City labels — small serif labels next to each pin. Yangon
            label sits above-right (so it doesn't fight the Myanmar
            outline); Bangkok label sits to the right. */}
        <g fontFamily="ui-serif, Georgia, serif" fill="var(--ink)">
          {/* Yangon */}
          <text x={from.x + 18} y={from.y - 18} fontSize={18} fontWeight={500}>{CITY_FROM.name}</text>
          <text x={from.x + 18} y={from.y - 3} fontFamily="ui-monospace, monospace" fontSize={9.5} fill="var(--muted)" letterSpacing="0.1em">
            {CITY_FROM.country.toUpperCase()}
          </text>

          {/* Bangkok */}
          <text x={now.x + 22} y={now.y - 18} fontSize={18} fontWeight={500}>{CITY_NOW.name}</text>
          <text x={now.x + 22} y={now.y - 3} fontFamily="ui-monospace, monospace" fontSize={9.5} fill="var(--muted)" letterSpacing="0.1em">
            {CITY_NOW.country.toUpperCase()}
          </text>
        </g>

        {/* Compass rose, top-right */}
        <g transform="translate(740 40)">
          <circle r={22} fill="var(--paper)" stroke="var(--ink)" strokeWidth={1.5} />
          <line x1={0} y1={-18} x2={0} y2={18} stroke="var(--ink)" strokeWidth={1} opacity={0.6} />
          <line x1={-18} y1={0} x2={18} y2={0} stroke="var(--ink)" strokeWidth={1} opacity={0.6} />
          <polygon points="0,-18 -4,0 0,4 4,0" fill="var(--ink)" />
          <polygon points="0,18 -4,0 0,-4 4,0" fill="var(--ink)" opacity={0.5} />
          <text x={0} y={-25} textAnchor="middle" fontFamily="ui-monospace, monospace" fontSize={9} fill="var(--muted)" letterSpacing="0.1em">N</text>
        </g>

        {/* Scale bar, bottom-left. Roughly 500 km. */}
        <g transform="translate(40 460)" fontFamily="ui-monospace, monospace" fontSize={10} fill="var(--muted)">
          <line x1={0} y1={0} x2={80} y2={0} stroke="var(--ink)" strokeWidth={1.5} />
          <line x1={0} y1={-4} x2={0} y2={4} stroke="var(--ink)" strokeWidth={1.5} />
          <line x1={80} y1={-4} x2={80} y2={4} stroke="var(--ink)" strokeWidth={1.5} />
          <text x={0} y={18} letterSpacing="0.08em">~ 500 KM</text>
        </g>
      </svg>

      <figcaption className="journey-map-cap">
        <span className="cap-row">
          <span className="cap-dot bg-pine" aria-hidden />
          <strong>{CITY_FROM.name}</strong>
          <span className="cap-meta">{CITY_FROM.country}</span>
          <ArrowRight className="cap-arrow" aria-hidden />
          <span className="cap-dot bg-clay" aria-hidden />
          <strong>{CITY_NOW.name}</strong>
          <span className="cap-meta">{CITY_NOW.country}</span>
        </span>
        <span className="cap-note">Since 2023 · UTC+7</span>
      </figcaption>
    </figure>
  );
}