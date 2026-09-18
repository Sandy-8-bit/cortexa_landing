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
      <div className="candidate-bottom flex items-center justify-between gap-[12px] mt-[30px]">
        <span className="category text-[10px] tracking-[0.045em] uppercase text-(--subtle)">
          <i />
          {categoryLabels[candidate.category]}
        </span>
        <Link href="/evidence" aria-label={`Explore sample evidence for ${candidate.title}`}>
          <ArrowUpRight size={18} />
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
  const visible = candidates.filter(
    (candidate) => filter === 'all' || candidate.category === filter,
  );
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
          <button key={item} onClick={() => setFilter(item)} aria-pressed={item === filter}>
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
      <div className="candidate-grid grid grid-cols-3 gap-[1px] bg-(--line) [border:1px_solid_var(--line)]" key={filter}>
        {visible.map((candidate) => (
          <CandidateCard
            key={candidate.title}
            candidate={candidate}
            index={candidates.indexOf(candidate)}
          />
        ))}
      </div>
      <p className="section-note text-[13px] leading-[1.6] text-(--muted) mt-[28px]">
        Every candidate is ranked by potential. Every score is traceable back to the paragraph it
        came from.
      </p>
    </div>
  );
}
