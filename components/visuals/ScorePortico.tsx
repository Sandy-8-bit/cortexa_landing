import { axes } from '@/data/candidates';
export function ScorePortico() {
  return (
    <svg
      className="score-portico drawing-sheet"
      viewBox="0 0 560 360"
      role="img"
      aria-label="Sample verdict 87 out of 100, supported by five evidence dimensions. Scope is the weakest at 79."
    >
      <g className="drawing-lines">
        <path d="M48 110L280 24L512 110ZM76 102L280 40L484 102M48 118H512V130H48ZM44 290H516V302H44ZM32 302H528V312H32Z" />
        {axes.map((axis, i) => (
          <path
            key={axis.label}
            d={`M${80 + i * 88} 138h32v140h-32ZM${72 + i * 88} 130h48v8h-48ZM${72 + i * 88} 278h48v12h-48Z`}
          />
        ))}
      </g>
      <text
        x="280"
        y="89"
        textAnchor="middle"
        fill="var(--ink)"
        fontFamily="var(--cx-font-mono)"
        fontSize="28"
      >
        87<tspan fontSize="13">/100</tspan>
      </text>
      {axes.map((axis, i) => (
        <g key={axis.label}>
          <g className="drawing-pixels">
            {Array.from({ length: Math.round(axis.score / 8) }, (_, r) =>
              [0, 1, 2].map((c) => (
                <rect
                  key={r * 3 + c}
                  x={84 + i * 88 + c * 8}
                  y={266 - r * 8}
                  width="7"
                  height="7"
                />
              )),
            )}
          </g>
          <text
            x={96 + i * 88}
            y="332"
            textAnchor="middle"
            fill="var(--muted)"
            fontFamily="var(--cx-font-mono)"
            fontSize="10"
          >
            {axis.score}
          </text>
        </g>
      ))}
      <text
        x="280"
        y="355"
        textAnchor="middle"
        fill="var(--muted)"
        fontFamily="var(--cx-font-mono)"
        fontSize="10"
      >
        Sample · Five dimensions, one evidence trail
      </text>
    </svg>
  );
}
