import './GeometricCircles.css';

// Two-color palette for the gradient.
const PURPLE = '#5C1476';
const GREEN = '#67F15A';

const hexToRgb = (hex) => {
  const value = parseInt(hex.slice(1), 16);
  return {
    r: (value >> 16) & 0xff,
    g: (value >> 8) & 0xff,
    b: value & 0xff,
  };
};

const lerpColor = (from, to, t) => {
  const a = hexToRgb(from);
  const b = hexToRgb(to);
  const mix = (start, end) => Math.round(start + (end - start) * t);
  const r = mix(a.r, b.r);
  const g = mix(a.g, b.g);
  const bl = mix(a.b, b.b);
  return `#${((1 << 24) + (r << 16) + (g << 8) + bl).toString(16).slice(1)}`;
};

const ramp = (from, to, steps) =>
  Array.from({ length: steps }, (_, i) => lerpColor(from, to, i / (steps - 1)));

// Even-position circles: purple -> green (16 stops).
const COLORS = ramp(PURPLE, GREEN, 16);
// Odd-position circles: green -> purple (17 stops).
const COLORS_ALT = ramp(GREEN, PURPLE, 17);

// Number of circles per row, top to bottom (forms an upward-pointing triangle).
const ROW_COUNTS = [1, 3, 5, 7, 9, 11, 13, 15, 17];

export default function GeometricCircles() {
  return (
    <div className="geometric-circles" aria-hidden="true">
      {ROW_COUNTS.map((count, rowIndex) => {
        // Stagger each row slightly later than the one above it.
        const delay = (2 - rowIndex) * 0.1;
        return (
          <div className="geometric-circles__row" key={rowIndex}>
            {Array.from({ length: count }).map((_, i) => {
              const isEven = (i + 1) % 2 === 0;
              const background = isEven ? COLORS[rowIndex] : COLORS_ALT[rowIndex];
              return (
                <span
                  key={i}
                  className={`geometric-circles__circle geometric-circles__circle--${isEven ? 'even' : 'odd'}`}
                  style={{ background, animationDelay: `${delay}s` }}
                />
              );
            })}
          </div>
        );
      })}
    </div>
  );
}
