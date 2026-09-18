import { axes } from '@/data/candidates';
export function Verdict({ radar = false }: { radar?: boolean }) {
  return (
    <div className="verdict-grid">
      <div className="verdict-score">
        {radar ? (
          <Radar />
        ) : (
          <>
            <span className="giant-score" data-counter>
              87
            </span>
            <span className="technical-label">
              <span className="status-dot" /> VERDICT · HIGH PATENTABILITY
            </span>
          </>
        )}
        <p>Scores are calibrated estimates, not legal opinions.</p>
      </div>
      <div className="axis-list">
        {axes.map((axis) => (
          <div key={axis.label}>
            <div className="axis-label">
              <span>{axis.label}</span>
              <span>{axis.score}</span>
            </div>
            <div className="axis-track">
              <div data-bar style={{ width: `${axis.score}%` }} />
            </div>
          </div>
        ))}
        <p className="technical-label">LIMITING AXIS: SCOPE · CONFIDENCE 0.86</p>
      </div>
    </div>
  );
}
function Radar() {
  const point = (i: number, radius: number) =>
    `${170 + Math.cos(-Math.PI / 2 + (i * 2 * Math.PI) / 5) * radius},${155 + Math.sin(-Math.PI / 2 + (i * 2 * Math.PI) / 5) * radius}`;
  return (
    <svg
      className="radar"
      viewBox="0 0 340 320"
      role="img"
      aria-label="Five-axis verdict 87: Novelty 92, Non-obviousness 84, Enablement 88, Scope 79, Commercial pull 90"
    >
      {[35, 70, 105].map((r) => (
        <polygon
          key={r}
          points={axes.map((_, i) => point(i, r)).join(' ')}
          fill="none"
          stroke="var(--line-strong)"
        />
      ))}
      {axes.map((_, i) => (
        <line
          key={i}
          x1="170"
          y1="155"
          x2={point(i, 105).split(',')[0]}
          y2={point(i, 105).split(',')[1]}
          stroke="var(--line-strong)"
        />
      ))}
      <polygon
        className="radar-shape"
        points={axes.map((axis, i) => point(i, axis.score * 1.05)).join(' ')}
        fill="var(--ink)"
        fillOpacity=".14"
        stroke="var(--ink)"
        strokeWidth="2"
      />
      <text x="170" y="165" textAnchor="middle" fill="var(--ink)" fontSize="40">
        87
      </text>
      <text x="170" y="26" textAnchor="middle" fill="var(--subtle)" fontSize="11">
        Novelty
      </text>
      <text x="279" y="112" textAnchor="middle" fill="var(--subtle)" fontSize="10">
        Non-obviousness
      </text>
      <text x="246" y="280" textAnchor="middle" fill="var(--subtle)" fontSize="11">
        Enablement
      </text>
      <text x="95" y="280" textAnchor="middle" fill="var(--subtle)" fontSize="11">
        Scope
      </text>
      <text x="55" y="112" textAnchor="middle" fill="var(--subtle)" fontSize="11">
        Commercial
      </text>
    </svg>
  );
}
