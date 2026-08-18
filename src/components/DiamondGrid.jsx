import './DiamondGrid.css';

const COLS = 9;
const ROWS = 5;
const CENTER_COL = (COLS - 1) / 2; // 4
const CENTER_ROW = (ROWS - 1) / 2; // 2

// Checkerboard of diamonds; each pulses with a delay radiating from the center.
const diamonds = Array.from({ length: ROWS }, (_, row) =>
  Array.from({ length: COLS }, (_, col) => {
    const dist = Math.abs(row - CENTER_ROW) + Math.abs(col - CENTER_COL);
    return {
      key: `${row}-${col}`,
      variant: (row + col) % 2 === 0 ? 'purple' : 'green',
      delay: dist * -0.15,
    };
  })
).flat();

export default function DiamondGrid() {
  return (
    <div className="diamond-grid" aria-hidden="true">
      {diamonds.map(({ key, variant, delay }) => (
        <div key={key} className="diamond-grid__cell">
          <span
            className={`diamond-grid__diamond diamond-grid__diamond--${variant}`}
            style={{ animationDelay: `${delay}s` }}
          />
        </div>
      ))}
    </div>
  );
}
