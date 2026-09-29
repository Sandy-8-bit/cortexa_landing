'use client';
import { useState } from 'react';
import { ArrowUpRight } from 'lucide-react';
import styles from './OpportunityMap.module.css';
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
    <div className={styles.map}>
      <div className={styles.overview}>
        <div className={styles.total}><strong>12<span>invention candidates</span></strong><p>One corpus. A spectrum of possibilities.</p></div>
        <div className={styles.distribution}>
          <div className={styles.overviewLabel}><span>Opportunity landscape</span><span>12 candidates, 3 directions</span></div>
          <div className={styles.segments} aria-hidden="true"><span /><span /><span /></div>
          <div className={styles.categories}>
            {(['high', 'emerging', 'adjacent'] as const).map((category) => (
              <button key={category} onClick={() => { setFilter(category); setExpanded(false); }} aria-pressed={filter === category}><i className={styles[category]} aria-hidden="true" /><span>{categoryLabels[category]}<small>{candidates.filter(c => c.category === category).length} candidates</small></span></button>
            ))}
          </div>
        </div>
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
      <div className={styles.listHeader}><span>Ranked invention candidates</span><span>Patentability index, out of 100</span></div>
      <div id="opportunity-candidates" className={styles.list} key={filter}>
        {visible.map((candidate) => {
          const index = candidates.indexOf(candidate);
          return (
            <article key={candidate.title} className={`${styles.row} opportunity-row`}>
              <span className={styles.number}>{String(index + 1).padStart(2, '0')}</span>
              <div className={styles.content}>
                <span className={styles.badge}><i className={styles[candidate.category]} aria-hidden="true" />{categoryLabels[candidate.category]}</span>
                <h3>{candidate.title}</h3>
                <p>{candidate.description}</p>
              </div>
              <div className={styles.score}>
                <strong>{candidate.score}<small>/100</small></strong>
                <div className={styles.track} aria-hidden="true"><span style={{ width: `${candidate.score}%` }} /></div>
                <span>{index === 0 ? 'Confidence: High (86%)' : 'Confidence: not assessed'}</span>
              </div>
              <Link className={styles.evidence} href={index === 0 ? '/evidence#candidate-01' : '/evidence'} aria-label={`View sample evidence for ${candidate.title}`}><span>View evidence</span></Link>
            </article>
          );
        })}
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
