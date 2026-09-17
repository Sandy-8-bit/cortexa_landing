'use client';
import { useState } from 'react';
import { agencyMatters } from '@/data/agencyMatters';
export function AgencyDocket() {
  const [filter, setFilter] = useState('all');
  const matters = agencyMatters.filter(
    (item) => filter === 'all' || (filter === 'review' ? item.review : !item.review),
  );
  return (
    <div className="agency-docket panel">
      <div className="docket-header technical-label">
        <span>
          <span className="status-dot" /> MERIDIAN IP PARTNERS · DOCKET
        </span>
        <span>BILLING PERIOD · SEP 2026</span>
      </div>
      <div className="metrics">
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
      <div className="filter-bar" aria-label="Filter matters">
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
        className="table-scroll"
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
                  <span className="table-score">{item.score}</span>
                </td>
                <td>
                  <span className={`status-badge ${item.review ? 'review' : ''}`}>
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
      <p className="demo-note docket-note">
        Sample docket. Matter numbers follow your own scheme; Cortexa never renumbers them.
      </p>
    </div>
  );
}
