export interface EvidenceRecord {
  label: string;
  title: string;
  body: string;
  meta: string;
  records: { title: string; body: string }[];
}
export const evidence: EvidenceRecord[] = [
  {
    label: 'Verdict · 87',
    title: 'High patentability',
    body: 'The verdict node. Everything below it is what produced this conclusion. Pick a branch to go one level deeper.',
    meta: 'Five-axis verdict · Confidence 0.86',
    records: [
      {
        title: 'Limiting axis: scope',
        body: 'The claim as drafted reads narrowly on electrode geometry.',
      },
    ],
  },
  {
    label: 'Patent match',
    title: 'US 11,4xx,xxx B2',
    body: 'Closest art in the family: a stacked anneal without the gradient step. Cortexa treats the gradient as the distinguishing feature and flags claim 1 as the point of comparison.',
    meta: 'Confidence 0.91 · Retrieved from USPTO full-text · 2026-04-02',
    records: [
      { title: 'Claim 1', body: 'Stacked anneal, fixed temperature.' },
      { title: '§0042', body: 'Describes separator boundary handling.' },
    ],
  },
  {
    label: 'Publication',
    title: 'J. Power Sources, 2023',
    body: 'Reports gradient annealing in a different cell chemistry. Supports enablement, weakens novelty slightly — Cortexa scores it as mixed and shows it either way.',
    meta: 'Confidence 0.84 · DOI resolved · Cited 41 times',
    records: [
      { title: 'Fig. 3', body: 'Dendrite density vs anneal profile.' },
      { title: 'Methods', body: 'Anneal ramp described in full.' },
    ],
  },
  {
    label: 'Code repository',
    title: 'github.com/lab/anneal-ctl',
    body: 'Public controller implementing the ramp. Reduction to practice is documented in commit history and test fixtures, which strengthens the enablement axis.',
    meta: 'Confidence 0.78 · 214 commits · Last push 2026-01-19',
    records: [
      { title: 'ramp.py', body: 'Gradient profile implementation.' },
      { title: 'tests/', body: 'Cycle-life regression fixtures.' },
    ],
  },
  {
    label: 'Market signal',
    title: 'Three filings in 18 months',
    body: 'Competitor activity in adjacent art is accelerating. This lifts commercial pull and shortens the useful window for filing.',
    meta: 'Confidence 0.72 · Derived from family filing dates',
    records: [
      { title: 'Timeline', body: 'Filings clustered Q3 2025 onward.' },
      { title: 'Assignees', body: 'Two cell makers, one supplier.' },
    ],
  },
];
