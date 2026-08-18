import './DotGrid.css';

const COLS = 12;
const ROWS = 6;
const CENTER_ROW = 3; // 0-indexed
const CENTER_COL = 6; // 1-indexed

// Precompute each cell's opacity and animation delay from its distance to
// the center, so the pulse radiates outward.
const cells = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: COLS }, (_, i) => {
    const col = i + 1;
    const rowPower = (CENTER_ROW - Math.abs(CENTER_ROW - row)) / 4;
    const colPower = (CENTER_COL - Math.abs(CENTER_COL - col)) / 4;
    const power = rowPower + colPower;
    return {
      key: `${row}-${col}`,
      opacity: power * 0.9,
      delay: power * -0.5,
    };
  })
).flat();

export default function DotGrid() {
  return (
    <div className="geo-grid" aria-hidden="true">
      {cells.map(({ key, opacity, delay }) => (
        <div
          key={key}
          className="geo-grid__cell"
          style={{ '--cell-opacity': opacity, '--cell-delay': `${delay}s` }}
        >
          <span className="geo-grid__dot" />
          <span className="geo-grid__dot geo-grid__dot--center" />
        </div>
      ))}
    </div>
  );
}
