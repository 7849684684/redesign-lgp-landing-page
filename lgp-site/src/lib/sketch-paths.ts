// Pre-computed SVG path data for hand-drawn effects
// These enable server-side rendering without rough.js runtime

// Torn paper edge - jagged irregular teeth across full width (viewBox 0 0 1000 40)
export const TORN_EDGE_TOP =
  "M0,40 L0,12 L18,15 L35,8 L52,18 L68,6 L85,14 L103,9 L120,17 L138,5 L155,13 L172,8 L190,16 L208,4 L225,12 L242,7 L260,15 L278,3 L295,11 L312,6 L330,14 L348,2 L365,10 L382,5 L400,13 L418,1 L435,9 L452,4 L470,12 L488,0 L505,8 L522,3 L540,11 L558,1 L575,9 L592,4 L610,12 L628,2 L645,10 L662,5 L680,13 L698,3 L715,11 L732,6 L750,14 L768,4 L785,12 L802,7 L820,15 L838,5 L855,13 L872,8 L890,16 L908,6 L925,14 L942,9 L960,17 L978,7 L1000,12 L1000,40 Z";

export const TORN_EDGE_BOTTOM =
  "M0,0 L0,28 L18,25 L35,32 L52,22 L68,34 L85,26 L103,31 L120,23 L138,35 L155,27 L172,32 L190,24 L208,36 L225,28 L242,33 L260,25 L278,37 L295,29 L312,34 L330,26 L348,38 L365,30 L382,35 L400,27 L418,39 L435,31 L452,36 L470,28 L488,40 L505,32 L522,37 L540,29 L558,39 L575,31 L592,36 L610,28 L628,38 L645,30 L662,35 L680,27 L698,37 L715,29 L732,34 L750,26 L768,36 L785,28 L802,33 L820,25 L838,35 L855,27 L872,32 L890,24 L908,34 L925,26 L942,31 L960,23 L978,33 L1000,28 L1000,0 Z";

// Wavy underline path (viewBox 0 0 200 12)
export const WAVY_UNDERLINE =
  "M0,6 C10,2 20,10 30,6 C40,2 50,10 60,6 C70,2 80,10 90,6 C100,2 110,10 120,6 C130,2 140,10 150,6 C160,2 170,10 180,6 C190,2 200,10 200,6";

// Crayon scribble paths (viewBox 0 0 300 60)
export const CRAYON_SCRIBBLES = [
  // Orange swoosh
  "M10,30 C30,10 60,50 90,25 C120,0 150,45 180,20 C200,5 230,40 260,15 C275,8 290,25 295,20",
  // Purple arc
  "M20,45 C50,15 80,55 110,30 C140,5 170,50 200,25 C220,10 250,45 280,20",
  // Teal swirl
  "M5,20 C35,50 65,5 95,35 C125,65 155,15 185,40 C210,55 240,10 270,30 C285,40 295,25 298,30",
];

// Imperfect circle paths at various sizes
export const CIRCLE_SM = // ~40px circle
  "M20,2 C30,-1 40,5 42,15 C44,25 38,38 28,40 C18,42 5,35 2,25 C-1,15 8,4 20,2";
export const CIRCLE_MD = // ~80px circle
  "M40,3 C55,-2 72,8 78,25 C84,42 75,68 55,75 C35,82 12,70 5,50 C-2,30 18,8 40,3";
export const CIRCLE_LG = // ~120px circle
  "M60,5 C85,-3 110,12 118,40 C126,68 112,105 82,115 C52,125 18,108 8,75 C-2,42 30,13 60,5";

// Bracket/brace path for annotations (viewBox 0 0 20 100)
export const BRACKET_LEFT =
  "M18,2 C10,2 4,10 4,20 L4,40 C4,45 2,48 0,50 C2,52 4,55 4,60 L4,80 C4,90 10,98 18,98";

// Simple arrow paths (viewBox relative, these are just the arrowhead)
export const ARROWHEAD_RIGHT = "M0,0 L10,5 L0,10"; // small triangle
export const ARROWHEAD_DOWN = "M0,0 L5,10 L10,0";

// Large swirly arrow path (viewBox 0 0 200 300) - the kind from Image 1
export const SWIRLY_ARROW_DOWN =
  "M100,10 C120,30 140,50 130,80 C120,110 80,120 90,150 C100,180 140,170 130,200 C120,230 80,240 90,270 L85,260 L90,270 L95,258";

// Tape strip paths for sticky notes (viewBox 0 0 60 20)
export const TAPE_STRIP =
  "M2,4 L58,2 L60,16 L4,18 Z";

// Notebook paper line positions (returns y positions for lines in a given height)
export function notebookLines(height: number, lineSpacing = 28, startY = 40): number[] {
  const lines: number[] = [];
  for (let y = startY; y < height; y += lineSpacing) {
    lines.push(y);
  }
  return lines;
}

// Paper noise texture as a tiny SVG data URI
export const PAPER_NOISE_SVG = `data:image/svg+xml,${encodeURIComponent(
  '<svg xmlns="http://www.w3.org/2000/svg" width="100" height="100"><filter id="n"><feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="4" stitchTiles="stitch"/></filter><rect width="100" height="100" filter="url(#n)" opacity="0.03"/></svg>'
)}`;
