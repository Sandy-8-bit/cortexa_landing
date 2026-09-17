'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { candidates, candidateFilters, categoryLabels, type Candidate } from '@/data/candidates';

export function CandidateCard({ candidate, index }: { candidate: Candidate; index: number }) {
  return (
    <article className={`candidate-card ${candidate.category}`}>
      <div className="candidate-top">
        <span className="technical-label">CANDIDATE {String(index + 1).padStart(2, '0')}</span>
        <span className="candidate-score">
          {candidate.score}
          <span>/100</span>
        </span>
      </div>
      <h3>{candidate.title}</h3>
      <p>{candidate.description}</p>
      <div className="candidate-bottom">
        <span className="category">
          <i />
          {categoryLabels[candidate.category]}
        </span>
        <Link href="/evidence" aria-label={`Explore sample evidence for ${candidate.title}`}>
          <ArrowUpRight size={18} />
        </Link>
      </div>
      <div className="candidate-track">
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
      <div className="metrics">
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
      <div className="filter-bar" aria-label="Filter candidates">
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
      <div className="candidate-grid" key={filter}>
        {visible.map((candidate) => (
          <CandidateCard
            key={candidate.title}
            candidate={candidate}
            index={candidates.indexOf(candidate)}
          />
        ))}
      </div>
      <p className="section-note">
        Every candidate is ranked by potential. Every score is traceable back to the paragraph it
        came from.
      </p>
    </div>
  );
}
