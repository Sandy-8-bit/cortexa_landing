'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { candidates, candidateFilters, categoryLabels, type Candidate } from '@/data/candidates';

export function CandidateCard({ candidate, index }: { candidate: Candidate; index: number }) {
  return (
    <article className={`candidate-card flex flex-col min-w-0 bg-(--canvas) p-[30px] relative ${candidate.category}`}>
      <div className="candidate-top flex items-center justify-between gap-[16px] mb-[45px]">
        <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">CANDIDATE {String(index + 1).padStart(2, '0')}</span>
        <span className="candidate-score text-[36px] leading-[1] tracking-[-0.05em]">
          {candidate.score}
          <span>/100</span>
        </span>
      </div>
      <h3>{candidate.title}</h3>
      <p>{candidate.description}</p>
      <p className="text-xs">{index === 0 ? 'Confidence: High (86%)' : 'Confidence: not assessed in this sample'}</p>
      <div className="candidate-bottom flex items-center justify-between gap-[12px] mt-[30px]">
        <span className="category text-[10px] tracking-[0.045em] uppercase text-(--subtle)">
          <i />
          {categoryLabels[candidate.category]}
        </span>
        <Link href={index === 0 ? '/evidence#candidate-01' : '/evidence'} aria-label={`View sample evidence for ${candidate.title}`}>
          View evidence <ArrowUpRight size={14} aria-hidden="true" />
        </Link>
      </div>
      <div className="candidate-track h-[1px] bg-(--line) mt-[12px]">
        <span style={{ width: `${candidate.score}%` }} />
      </div>
    </article>
  );
}
export function OpportunityMap() {
  const [filter, setFilter] = useState<(typeof candidateFilters)[number]>('all');
  const [expanded, setExpanded] = useState(false);
  const filtered = candidates.filter(
    (candidate) => filter === 'all' || candidate.category === filter,
  );
  const visible = filter === 'all' && !expanded ? filtered.slice(0, 6) : filtered;
  return (
    <div>
      <div className="metrics grid grid-cols-4 [border-block:1px_solid_var(--line)] mb-[38px] [padding:30px_0]">
        {[
          ['12', 'Candidates found'],
          ['4', 'High potential'],
          ['5', 'Emerging'],
          ['3', 'Adjacent / defensive'],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="filter-bar flex items-center flex-wrap gap-[8px] [margin:28px_0]" aria-label="Filter candidates">
        {candidateFilters.map((item) => (
          <button key={item} onClick={() => { setFilter(item); setExpanded(false); }} aria-pressed={item === filter}>
            {item === 'all' ? 'All' : categoryLabels[item]}
            <span>
              {item === 'all' ? 12 : candidates.filter((c) => c.category === item).length}
            </span>
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {visible.length} candidates shown
      </p>
      <div id="opportunity-candidates" className="candidate-grid grid grid-cols-3 gap-[1px] bg-(--line) [border:1px_solid_var(--line)]" key={filter}>
        {visible.map((candidate) => (
          <CandidateCard
            key={candidate.title}
            candidate={candidate}
            index={candidates.indexOf(candidate)}
          />
        ))}
      </div>
      {filter === 'all' && (
        <button className="button ghost mt-6 inline-flex min-h-12 items-center border border-(--ink) px-6 py-3 text-sm" aria-expanded={expanded} aria-controls="opportunity-candidates" onClick={() => setExpanded(!expanded)}>
          {expanded ? 'Show fewer candidates' : 'Show all 12 candidates'}
        </button>
      )}
      <p className="section-note text-[13px] leading-[1.6] text-(--muted) mt-[28px]">
        Every candidate is ranked by potential. Every score is traceable back to the paragraph it
        came from.
      </p>
    </div>
  );
}
