'use client';
import { useState } from 'react';
import { evidence } from '@/data/evidence';
import { TechnicalLabel } from '@/components/ui/Primitives';
export function EvidenceGraph() {
  const [selected, setSelected] = useState(0);
  const record = evidence[selected];
  return (
    <div className="evidence-layout">
      <div className="evidence-canvas panel">
        <div className="visual-topline technical-label">
          <span>EVIDENCE GRAPH</span>
          <span>SAMPLE RECORDS</span>
        </div>
        <div className="graph-network">
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
              className={`graph-node node-${i} ${selected === i ? 'selected' : ''}`}
              onClick={() => setSelected(i)}
              aria-pressed={selected === i}
              aria-controls="evidence-record"
            >
              <span className="technical-label">{item.label}</span>
              <span>{i === 0 ? 'High patentability' : item.title.replace('github.com/', '')}</span>
              <small>{i === 0 ? '11 RECORDS · 5 AXES' : 'EXPLORE RECORD ↗'}</small>
            </button>
          ))}
        </div>
        <p className="section-note">Select a node to inspect its source record.</p>
      </div>
      <aside
        className="evidence-panel panel"
        id="evidence-record"
        aria-live="polite"
        aria-atomic="true"
      >
        <TechnicalLabel>SELECTED RECORD / {String(selected + 1).padStart(2, '0')}</TechnicalLabel>
        <span className="record-badge">{record.label}</span>
        <h2>{record.title}</h2>
        <p>{record.body}</p>
        <div className="record-meta technical-label">{record.meta}</div>
        <div className="subrecords">
          {record.records.map((item) => (
            <div key={item.title}>
              <h3>{item.title}</h3>
              <p>{item.body}</p>
            </div>
          ))}
        </div>
        <p className="demo-note">
          Illustrative sample evidence. These records are part of the product demonstration.
        </p>
      </aside>
    </div>
  );
}
