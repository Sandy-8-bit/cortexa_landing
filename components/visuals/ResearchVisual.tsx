import { FileText, GitBranch } from 'lucide-react';
import { documents, fragments } from '@/data/pipeline';
export function ResearchVisual() {
  return (
    <div
      className="research-visual"
      aria-label="Research documents connected to a Cortexa invention candidate"
    >
      <div className="visual-topline technical-label">
        <span>
          <span className="status-dot" /> DISCOVERY ENGINE
        </span>
        <span>FIG. 01</span>
      </div>
      <div className="orbital-field">
        <svg viewBox="0 0 560 430" fill="none" aria-hidden="true">
          <circle cx="280" cy="205" r="138" stroke="#243331" strokeDasharray="3 7" />
          <ellipse
            cx="280"
            cy="205"
            rx="200"
            ry="86"
            transform="rotate(-30 280 205)"
            stroke="#28423c"
          />
          <ellipse
            cx="280"
            cy="205"
            rx="200"
            ry="86"
            transform="rotate(35 280 205)"
            stroke="#28423c"
          />
          <path
            className="draw-path"
            d="M80 90C170 90 155 205 280 205S400 280 480 325M75 305C155 305 185 205 280 205S390 95 480 95"
            stroke="#4fe3c1"
            strokeOpacity=".4"
          />
          <circle cx="280" cy="205" r="65" fill="#0c1917" stroke="#4fe3c1" strokeOpacity=".45" />
          <circle cx="280" cy="205" r="49" stroke="#4fe3c1" strokeOpacity=".18" />
          <path
            d="m280 170 30 18v35l-30 18-30-18v-35l30-18Zm0 0v71m-30-53 60 35m0-35-60 35"
            stroke="#4fe3c1"
            strokeWidth="1.5"
          />
          <circle cx="131" cy="120" r="4" fill="#4fe3c1" />
          <circle cx="409" cy="303" r="4" fill="#f0a44a" />
        </svg>
        <div className="orbit-file file-one">
          <FileText size={16} />
          <span>anneal_study_v4.pdf</span>
          <span className="file-type">PDF</span>
        </div>
        <div className="orbit-file file-two">
          <GitBranch size={16} />
          <span>lab/anneal-ctl</span>
          <span className="file-type">GIT</span>
        </div>
        <div className="orbit-file file-three">
          <FileText size={16} />
          <span>cell_data.ipynb</span>
        </div>
        <div className="discovered-card">
          <div className="technical-label">
            <span className="status-dot" /> INVENTION IDENTIFIED <span className="score">87</span>
          </div>
          <p>
            Gradient-annealed
            <br />
            electrolyte interface
          </p>
          <span className="mini-label">SOURCE-LINKED · HIGH POTENTIAL</span>
        </div>
      </div>
      <div className="visual-bottomline technical-label">
        <span>14 DOCUMENTS</span>
        <span className="visual-line" />
        <span>12 POSSIBILITIES</span>
      </div>
    </div>
  );
}
export function DocumentCloud() {
  return (
    <div className="document-cloud">
      {documents.map((name, index) => (
        <div className={`document-card document-${index}`} key={name}>
          <FileText size={21} />
          <span>{name}</span>
          <div className="paper-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      ))}
    </div>
  );
}
export function TransformationVisual() {
  return (
    <div className="transformation panel">
      <div className="technical-label visual-topline">
        <span>SOURCE DOCUMENTS</span>
        <span>CANDIDATES</span>
      </div>
      <svg
        viewBox="0 0 800 250"
        role="img"
        aria-label="Source documents flow through the Cortexa core into evidence-linked candidates"
      >
        <g fill="none" stroke="#354843">
          {[50, 125, 200].map((y) => (
            <path
              className="draw-path"
              key={y}
              d={`M160 ${y} C280 ${y} 270 125 380 125 M420 125 C530 125 520 ${y} 640 ${y}`}
            />
          ))}
        </g>
        {[50, 125, 200].map((y, i) => (
          <g key={y}>
            <rect
              x="35"
              y={y - 21}
              width="125"
              height="42"
              rx="3"
              fill="#111b1c"
              stroke="#2c393a"
            />
            <text x="97" y={y + 4} textAnchor="middle" fill="#aab8b9" fontSize="12">
              {['Papers & reports', 'Code & repos', 'Lab notebooks'][i]}
            </text>
            <rect
              x="640"
              y={y - 21}
              width="125"
              height="42"
              rx="3"
              fill="#10221c"
              stroke="#315648"
            />
            <text x="702" y={y + 4} textAnchor="middle" fill="#4fe3c1" fontSize="12">
              Candidate 0{i + 1}
            </text>
          </g>
        ))}
        <circle cx="400" cy="125" r="46" fill="#0b1e18" stroke="#4fe3c1" />
        <circle
          className="core-pulse"
          cx="400"
          cy="125"
          r="58"
          fill="none"
          stroke="#4fe3c1"
          opacity=".2"
        />
        <text x="400" y="130" textAnchor="middle" fill="#4fe3c1" fontSize="12">
          CORTEXA
        </text>
      </svg>
    </div>
  );
}
export function PipelineVisual({ stage }: { stage: number }) {
  if (stage === 0)
    return (
      <div className="pipeline-visual scan-document">
        <FileText size={36} />
        <div className="technical-label">anneal_study_v4.pdf</div>
        <div className="scan-line" />
        <dl>
          <div>
            <dt>Domain</dt>
            <dd>Materials science</dd>
          </div>
          <div>
            <dt>Method</dt>
            <dd>Gradient annealing</dd>
          </div>
          <div>
            <dt>References</dt>
            <dd>412 resolved</dd>
          </div>
        </dl>
      </div>
    );
  if (stage === 1)
    return (
      <div className="pipeline-visual fragment-cloud">
        {fragments.map((word, i) => (
          <span key={word} className={i % 3 === 0 ? 'accent' : ''}>
            {word}
          </span>
        ))}
      </div>
    );
  if (stage === 2) return <LatticeVisual evidence />;
  return (
    <div className="pipeline-visual score-visual">
      <span data-counter>87</span>
      <p className="technical-label">PATENTABILITY INDEX</p>
      <p className="technical-label">CONFIDENCE 0.86</p>
    </div>
  );
}
export function LatticeVisual({ evidence = false }: { evidence?: boolean }) {
  const labels = evidence
    ? ['EVIDENCE', 'USPTO', 'arXiv', 'WIPO', 'GitHub']
    : ['CORE', 'CONTINUATION', 'PLATFORM', 'SYSTEM', 'ADJACENT'];
  return (
    <svg
      className="lattice"
      viewBox="0 0 500 300"
      role="img"
      aria-label={
        evidence
          ? 'Evidence connected to USPTO, arXiv, WIPO and GitHub'
          : 'Invention lattice connecting core, continuation, platform, system and adjacent claims'
      }
    >
      <g stroke="#31564b" fill="none">
        <path
          className="draw-path"
          d="M250 150 110 60M250 150 390 60M250 150 110 240M250 150 390 240M110 60 390 60M110 240 390 240"
        />
      </g>
      {[
        [250, 150],
        [110, 60],
        [390, 60],
        [110, 240],
        [390, 240],
      ].map(([x, y], i) => (
        <g key={i}>
          <rect
            x={x - 72}
            y={y - 24}
            width="144"
            height="48"
            rx="3"
            fill={i === 0 ? '#15382c' : '#101b1b'}
            stroke={i === 0 ? '#4fe3c1' : '#355049'}
          />
          <text
            x={x}
            y={y + 4}
            textAnchor="middle"
            fill={i === 0 ? '#4fe3c1' : '#b6c7c2'}
            fontSize="11"
            fontFamily="monospace"
          >
            {labels[i]}
          </text>
        </g>
      ))}
    </svg>
  );
}
