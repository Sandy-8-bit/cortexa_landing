'use client';
import { useState } from 'react';
import { evidence } from '@/data/evidence';
import { TechnicalLabel } from '@/components/ui/Primitives';
export function EvidenceGraph() {
  const [selected, setSelected] = useState(0);
  const record = evidence[selected];
  return (
    <div className="evidence-layout grid [grid-template-columns:1.7fr_1fr] gap-[24px] [align-items:start]">
      <div className="evidence-canvas panel [padding:30px_24px] bg-(--surface)">
        <div className="visual-topline technical-label font-sans text-[9px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium flex items-center justify-between gap-[14px] [border-bottom:1px_solid_var(--line)] pb-[16px]">
          <span>EVIDENCE GRAPH</span>
          <span>SAMPLE RECORDS</span>
        </div>
        <div className="graph-network relative h-[530px]">
          <svg viewBox="0 0 600 400" preserveAspectRatio="none" aria-hidden="true">
            <g fill="none" stroke="var(--line-strong)" strokeWidth="1.2">
              <path
                className="draw-path"
                d="M300 85C300 150 140 150 140 200M300 85C300 150 460 150 460 200M300 85C300 280 140 280 140 335M300 85C300 280 460 280 460 335"
              />
            </g>
          </svg>
          {evidence.map((item, i) => (
            <button
              key={item.label}
              className={`graph-node absolute w-[41%] h-[115px] flex flex-col items-center justify-center gap-[15px] [padding:16px_10px] bg-(--canvas) text-(--ink) [border:1px_solid_var(--line-strong)] node-${i} ${selected === i ? 'selected' : ''}`}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              aria-controls="evidence-record"
            >
              <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">{item.label}</span>
              <span>{i === 0 ? 'High patentability' : item.title.replace('github.com/', '')}</span>
              <small>{i === 0 ? '11 RECORDS · 5 AXES' : 'EXPLORE RECORD ↗'}</small>
            </button>
          ))}
        </div>
        <p className="section-note text-[13px] leading-[1.6] text-(--muted) mt-[28px]">Select a node to inspect its source record.</p>
      </div>
      <aside
        className="evidence-panel panel sticky top-[105px] p-[32px] bg-(--canvas)"
        id="evidence-record"
        aria-live="polite"
        aria-atomic="true"
      >
        <TechnicalLabel>SELECTED RECORD / {String(selected + 1).padStart(2, '0')}</TechnicalLabel>
        <span className="record-badge inline-block [padding:8px_0] mt-[36px] [border-bottom:1px_solid_var(--line)] text-[11px] uppercase">{record.label}</span>
        <h2>{record.title}</h2>
        <p>{record.body}</p>
        <div className="record-meta technical-label font-sans text-[11px] leading-[1.5] tracking-[0] normal-case text-(--muted) font-medium [border-block:1px_solid_var(--line)] [margin:28px_0] [padding:20px_0]">{record.meta}</div>
        <div className="subrecords">
          {record.records.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="demo-note text-[13px] leading-[1.6] text-(--muted)">
          Illustrative sample evidence. These records are part of the product demonstration.
        </p>
      </aside>
    </div>
  );
}
