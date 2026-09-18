'use client';
import { useState } from 'react';
import { agencyMatters } from '@/data/agencyMatters';
export function AgencyDocket() {
  const [filter, setFilter] = useState('all');
  const matters = agencyMatters.filter(
    (item) => filter === 'all' || (filter === 'review' ? item.review : !item.review),
  );
  return (
    <div className="agency-docket panel overflow-hidden bg-(--canvas)">
      <div className="docket-header technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium flex justify-between gap-[24px] [padding:24px_32px] bg-(--surface) [border-bottom:1px_solid_var(--line)]">
        <span>
          <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" /> MERIDIAN IP PARTNERS · DOCKET
        </span>
        <span>BILLING PERIOD · SEP 2026</span>
      </div>
      <div className="metrics grid grid-cols-4 [border-block:1px_solid_var(--line)] mb-[38px] [padding:30px_0]">
        {[
          ['9', 'Active clients'],
          ['23', 'Open matters'],
          ['147', 'Candidates in review'],
          ['$18.4k', 'Billable this period'],
        ].map(([value, label]) => (
          <div key={label}>
            <strong>{value}</strong>
            <span>{label}</span>
          </div>
        ))}
      </div>
      <div className="filter-bar flex items-center flex-wrap gap-[8px] [margin:28px_0]" aria-label="Filter matters">
        {[
          ['all', 'All matters'],
          ['review', 'Awaiting your review'],
          ['client', 'With client'],
        ].map(([value, label]) => (
          <button key={value} aria-pressed={filter === value} onClick={() => setFilter(value)}>
            {label}
          </button>
        ))}
      </div>
      <p className="sr-only" role="status">
        {matters.length} sample matters shown
      </p>
      <div
        className="table-scroll w-full overflow-x-auto"
        role="region"
        aria-label="Agency matters, scroll horizontally for all columns"
        tabIndex={0}
      >
        <table>
          <caption className="sr-only">Meridian IP Partners sample docket</caption>
          <thead>
            <tr>
              {['Client / matter', 'Corpus', 'Candidates', 'Top score', 'Status', 'Billable'].map(
                (label) => (
                  <th scope="col" key={label}>
                    {label}
                  </th>
                ),
              )}
            </tr>
          </thead>
          <tbody>
            {matters.map((item) => (
              <tr key={item.matter}>
                <th scope="row">
                  {item.client}
                  <span>{item.matter}</span>
                </th>
                <td>{item.corpus}</td>
                <td>{item.candidates}</td>
                <td>
                  <span className="table-score text-[18px] text-(--ink)">{item.score}</span>
                </td>
                <td>
                  <span className={`status-badge inline-flex items-center gap-[7px] text-[11px] ${item.review ? 'review' : ''}`}>
                    <i />
                    {item.review ? 'Awaiting agent review' : 'With client'}
                  </span>
                </td>
                <td>{item.billable}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <p className="demo-note docket-note text-[13px] leading-[1.6] text-(--muted) [padding:22px_32px]">
        Sample docket. Matter numbers follow your own scheme; Cortexa never renumbers them.
      </p>
    </div>
  );
}
