export interface AgencyMatter {
  client: string;
  matter: string;
  corpus: string;
  candidates: number;
  score: number;
  review: boolean;
  billable: string;
}
export const agencyMatters: AgencyMatter[] = [
  {
    client: 'Helion Cell Systems',
    matter: 'HCS-2026-014 · Electrolyte interface',
    corpus: '48 docs',
    candidates: 12,
    score: 87,
    review: true,
    billable: '$2,880',
  },
  {
    client: 'Helion Cell Systems',
    matter: 'HCS-2026-011 · Pack thermal management',
    corpus: '31 docs',
    candidates: 7,
    score: 74,
    review: false,
    billable: '$1,860',
  },
  {
    client: 'Northvale University TTO',
    matter: 'NV-TTO-0392 · Sparse cycling protocol',
    corpus: '120 docs',
    candidates: 19,
    score: 81,
    review: true,
    billable: '$4,100',
  },
  {
    client: 'Northvale University TTO',
    matter: 'NV-TTO-0388 · Teardown vision',
    corpus: '22 docs',
    candidates: 5,
    score: 52,
    review: false,
    billable: '$980',
  },
  {
    client: 'Praxis Materials',
    matter: 'PRX-44 · Binder-free lamination',
    corpus: '63 docs + 2 repos',
    candidates: 14,
    score: 78,
    review: true,
    billable: '$3,240',
  },
  {
    client: 'Orbital Sense',
    matter: 'OS-2026-07 · Self-calibrating probe',
    corpus: '29 docs',
    candidates: 9,
    score: 81,
    review: false,
    billable: '$1,740',
  },
  {
    client: 'Kestrel Robotics',
    matter: 'KR-118 · Cross-chemistry estimator',
    corpus: '84 docs + 1 repo',
    candidates: 11,
    score: 69,
    review: true,
    billable: '$2,620',
  },
  {
    client: 'Aldine Chemical',
    matter: 'ALD-2026-03 · Recycled feedstock index',
    corpus: '37 docs',
    candidates: 8,
    score: 63,
    review: false,
    billable: '$1,020',
  },
];
export const agencyFeatures = [
  {
    title: 'Walled client workspaces',
    description:
      'Each client gets its own corpus, key, and audit log. Nothing crosses between them, and a conflict check runs before a new matter can be opened against an existing party.',
  },
  {
    title: 'Usage becomes a line item',
    description:
      'Documents analysed, runs completed, and reviewer hours saved are tracked per matter and export as a billing CSV your practice-management system can read.',
  },
  {
    title: 'Reports in your name',
    description:
      "Put your firm's mark on the candidate brief. Clients see your analysis and your recommendations, with the evidence trail attached underneath.",
  },
  {
    title: 'Client-facing review links',
    description:
      'Send an inventor a single link to confirm or reject candidates. Their responses land back on the matter without another email thread.',
  },
  {
    title: 'Docketing integrations',
    description:
      'Two-way sync with common IP management systems, so a candidate promoted to a filing keeps its evidence trail attached to the matter record.',
  },
  {
    title: 'Privilege-aware retention',
    description:
      'Set retention per client, purge on matter close, and export the full provenance log if the analysis is ever questioned.',
  },
];
export const matterLifecycle = [
  {
    title: 'Intake',
    description:
      'The client drops a corpus into their workspace, or you connect their Drive or repository.',
  },
  {
    title: 'First pass',
    description: 'Harvest runs overnight. Candidates arrive ranked, with prior art already pulled.',
  },
  {
    title: 'Agent review',
    description:
      'Your agent keeps, parks, or kills each candidate. Every decision is recorded against the matter.',
  },
  {
    title: 'Client confirmation',
    description: 'The inventor confirms scope and enablement gaps through a review link.',
  },
  {
    title: 'Draft and bill',
    description:
      "Survivors go to drafting; the period's usage exports as a billing line per client.",
  },
];
