import { FileText, GitBranch } from 'lucide-react';
import { documents, fragments } from '@/data/pipeline';
export function ResearchVisual() {
  return (
    <div
      className="research-visual relative min-w-0"
      aria-label="Research documents connected to a Cortexa invention candidate"
    >
      <div className="visual-topline technical-label font-sans text-[9px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium flex items-center justify-between gap-[14px] [border-bottom:1px_solid_var(--line)] pb-[16px]">
        <span>
          <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" /> DISCOVERY ENGINE
        </span>
        <span>FIG. 01</span>
      </div>
      <div className="orbital-field h-[320px] relative">
        <svg viewBox="0 0 560 430" fill="none" aria-hidden="true">
          <circle cx="280" cy="205" r="138" stroke="var(--line-strong)" strokeDasharray="3 7" />
          <ellipse
            cx="280"
            cy="205"
            rx="200"
            ry="86"
            transform="rotate(-30 280 205)"
            stroke="var(--line-strong)"
          />
          <ellipse
            cx="280"
            cy="205"
            rx="200"
            ry="86"
            transform="rotate(35 280 205)"
            stroke="var(--line-strong)"
          />
          <path
            className="draw-path"
            d="M80 90C170 90 155 205 280 205S400 280 480 325M75 305C155 305 185 205 280 205S390 95 480 95"
            stroke="var(--ink)"
            strokeOpacity=".4"
          />
          <circle
            cx="280"
            cy="205"
            r="65"
            fill="var(--canvas)"
            stroke="var(--ink)"
            strokeOpacity=".45"
          />
          <circle cx="280" cy="205" r="49" stroke="var(--ink)" strokeOpacity=".18" />
          <path
            d="m280 170 30 18v35l-30 18-30-18v-35l30-18Zm0 0v71m-30-53 60 35m0-35-60 35"
            stroke="var(--ink)"
            strokeWidth="1.5"
          />
          <circle cx="131" cy="120" r="4" fill="var(--ink)" />
          <circle cx="409" cy="303" r="4" fill="var(--ink)" />
        </svg>
        <div className="orbit-file file-one absolute flex items-center gap-[8px] text-[9px] [padding:11px_13px] [border:1px_solid_var(--line)] bg-(--cx-black-soft) text-(--subtle) left-0 top-[48px]">
          <FileText size={16} />
          <span>anneal_study_v4.pdf</span>
          <span className="file-type text-[8px] text-(--muted) [border-left:1px_solid_var(--line)] pl-[8px]">PDF</span>
        </div>
        <div className="orbit-file file-two absolute flex items-center gap-[8px] text-[9px] [padding:11px_13px] [border:1px_solid_var(--line)] bg-(--cx-black-soft) text-(--subtle) right-0 top-[80px]">
          <GitBranch size={16} />
          <span>lab/anneal-ctl</span>
          <span className="file-type text-[8px] text-(--muted) [border-left:1px_solid_var(--line)] pl-[8px]">GIT</span>
        </div>
        <div className="orbit-file file-three absolute flex items-center gap-[8px] text-[9px] [padding:11px_13px] [border:1px_solid_var(--line)] bg-(--cx-black-soft) text-(--subtle) left-0 bottom-[64px]">
          <FileText size={16} />
          <span>cell_data.ipynb</span>
        </div>
        <div className="discovered-card absolute right-0 bottom-[3px] w-[216px] bg-(--cx-white) text-(--cx-black) p-[17px] [border:1px_solid_var(--cx-white)]">
          <div className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
            <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" /> INVENTION IDENTIFIED <span className="score">87</span>
          </div>
          <p>
            Gradient-annealed
            <br />
            electrolyte interface
          </p>
          <span className="mini-label text-[8px] text-[#515151] tracking-[0.025em]">SOURCE-LINKED · HIGH POTENTIAL</span>
        </div>
      </div>
      <div className="visual-bottomline technical-label font-sans text-[8px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium flex items-center justify-between gap-[14px] pt-[18px]">
        <span>14 DOCUMENTS</span>
        <span className="visual-line h-[1px] bg-(--line) [flex:1]" />
        <span>12 POSSIBILITIES</span>
      </div>
    </div>
  );
}
export function DocumentCloud() {
  return (
    <div className="document-cloud grid grid-cols-3 gap-[12px] content-center min-h-[350px]">
      {documents.map((name, index) => (
        <div className={`document-card h-[118px] p-[18px] [border:1px_solid_var(--line)] bg-(--surface) flex flex-col gap-[12px] min-w-0 document-${index}`} key={name}>
          <FileText size={21} />
          <span>{name}</span>
          <div className="paper-lines grid gap-[4px] mt-auto">
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
    <div className="transformation panel [padding:30px_34px] bg-(--surface)">
      <div className="technical-label visual-topline font-sans text-[9px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium flex items-center justify-between gap-[14px] [border-bottom:1px_solid_var(--line)] pb-[16px]">
        <span>SOURCE DOCUMENTS</span>
        <span>CANDIDATES</span>
      </div>
      <svg
        viewBox="0 0 800 250"
        role="img"
        aria-label="Source documents flow through the Cortexa core into evidence-linked candidates"
      >
        <g fill="none" stroke="var(--line-strong)">
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
              rx="0"
              fill="var(--canvas)"
              stroke="var(--line-strong)"
            />
            <text x="97" y={y + 4} textAnchor="middle" fill="var(--subtle)" fontSize="12">
              {['Papers & reports', 'Code & repos', 'Lab notebooks'][i]}
            </text>
            <rect
              x="640"
              y={y - 21}
              width="125"
              height="42"
              rx="0"
              fill="var(--canvas)"
              stroke="var(--line-strong)"
            />
            <text x="702" y={y + 4} textAnchor="middle" fill="var(--ink)" fontSize="12">
              Candidate 0{i + 1}
            </text>
          </g>
        ))}
        <circle cx="400" cy="125" r="46" fill="var(--canvas)" stroke="var(--ink)" />
        <circle
          className="core-pulse"
          cx="400"
          cy="125"
          r="58"
          fill="none"
          stroke="var(--ink)"
          opacity=".2"
        />
        <text x="400" y="130" textAnchor="middle" fill="var(--ink)" fontSize="12">
          CORTEXA
        </text>
      </svg>
    </div>
  );
}
export function PipelineVisual({ stage }: { stage: number }) {
  if (stage === 0)
    return (
      <div className="pipeline-visual scan-document [margin:32px_0] p-[36px] min-h-[265px] bg-(--surface) [border:1px_solid_var(--line)]">
        <FileText size={36} />
        <div className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">anneal_study_v4.pdf</div>
        <div className="scan-line hidden" />
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
      <div className="pipeline-visual fragment-cloud [margin:32px_0] p-[36px] min-h-[265px] bg-(--surface) [border:1px_solid_var(--line)] flex items-center justify-center content-center gap-[14px] flex-wrap">
        {fragments.map((word, i) => (
          <span key={word} className={i % 3 === 0 ? "accent text-(--ink)" : ''}>
            {word}
          </span>
        ))}
      </div>
    );
  if (stage === 2) return <LatticeVisual evidence />;
  return (
    <div className="pipeline-visual score-visual [margin:32px_0] p-[36px] min-h-[265px] bg-(--surface) [border:1px_solid_var(--line)] text-center">
      <span data-counter>87</span>
      <p className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">PATENTABILITY INDEX</p>
      <p className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">CONFIDENCE 0.86</p>
    </div>
  );
}
export function LatticeVisual({ evidence = false }: { evidence?: boolean }) {
  const labels = evidence
    ? ['EVIDENCE', 'USPTO', 'arXiv', 'WIPO', 'GitHub']
    : ['CORE', 'CONTINUATION', 'PLATFORM', 'SYSTEM', 'ADJACENT'];
  return (
    <svg
      className="lattice w-full h-auto block max-h-[480px]"
      viewBox="0 0 500 300"
      role="img"
      aria-label={
        evidence
          ? 'Evidence connected to USPTO, arXiv, WIPO and GitHub'
          : 'Invention lattice connecting core, continuation, platform, system and adjacent claims'
      }
    >
      <g stroke="var(--line-strong)" fill="none">
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
            rx="0"
            fill={i === 0 ? 'var(--surface)' : 'var(--canvas)'}
            stroke={i === 0 ? 'var(--ink)' : 'var(--line-strong)'}
          />
          <text
            x={x}
            y={y + 4}
            textAnchor="middle"
            fill={i === 0 ? 'var(--ink)' : 'var(--subtle)'}
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
