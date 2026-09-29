import { axes } from '@/data/candidates';

const short: Record<string, string> = {
  'Non-obviousness': 'Non-obvious',
  'Commercial pull': 'Commercial',
};

/* Five pixel columns, one per axis. Each square is five points. */
export function ScoreColumns() {
  const base = 340;
  const cell = 10;
  return (
    <svg
      className="score-columns drawing-sheet"
      viewBox="0 0 560 400"
      role="img"
      aria-label="Sample verdict 87 out of 100, supported by five evidence dimensions. Scope is the weakest at 79."
    >
      <text className="score-total" x="0" y="44">
        87<tspan dx="6">/ 100</tspan>
      </text>
      <g className="drawing-lines">
        <path d={`M0 ${base + 8}H560`} />
        {[0, 1, 2, 3].map((i) => (
          <path key={i} className="drawing-construction" d={`M0 ${base - 50 * (i + 1)}H560`} />
        ))}
      </g>
      {axes.map((axis, i) => {
        const x = 24 + i * 108;
        const rows = Math.round(axis.score / 5);
        const weakest = axis.label === 'Scope';
        return (
          <g key={axis.label}>
            <g className={weakest ? 'drawing-pixels seed-pixels' : 'drawing-pixels'}>
              {Array.from({ length: rows }, (_, r) =>
                [0, 1, 2, 3, 4].map((c) => (
                  <rect
                    key={r * 5 + c}
                    x={x + c * (cell + 2)}
                    y={base - (r + 1) * (cell + 2)}
                    width={cell}
                    height={cell}
                  />
                )),
              )}
            </g>
            <text className="score-value" x={x} y={base - rows * (cell + 2) - 12}>
              {axis.score}
            </text>
            <text className="score-axis" x={x} y={base + 34}>
              {short[axis.label] ?? axis.label}
            </text>
          </g>
        );
      })}
    </svg>
  );
}
