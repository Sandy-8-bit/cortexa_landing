export type CandidateCategory = 'high' | 'emerging' | 'adjacent';
export interface Candidate {
  title: string;
  description: string;
  score: number;
  category: CandidateCategory;
}
export const categoryLabels = {
  high: 'High potential',
  emerging: 'Emerging',
  adjacent: 'Adjacent',
};
export const candidateFilters = ['all', 'high', 'emerging', 'adjacent'] as const;
export const candidates: Candidate[] = [
  {
    title: 'Gradient-annealed electrolyte interface',
    description: 'A layered anneal that suppresses dendrite nucleation at the separator boundary.',
    score: 87,
    category: 'high',
  },
  {
    title: 'Self-calibrating impedance probe',
    description: 'In-situ probe that re-baselines against its own drift between cycles.',
    score: 81,
    category: 'high',
  },
  {
    title: 'Sparse-sampling cycling protocol',
    description: 'Cuts qualification time by sampling where the degradation signal actually lives.',
    score: 78,
    category: 'high',
  },
  {
    title: 'Binder-free cathode lamination',
    description: 'Mechanical interlock replaces polymer binder in thick-film cathodes.',
    score: 74,
    category: 'high',
  },
  {
    title: 'Thermal runaway precursor signature',
    description: 'Acoustic precursor detected 40 minutes before thermal event onset.',
    score: 69,
    category: 'emerging',
  },
  {
    title: 'Electrode geometry search loop',
    description: 'Closed-loop design search over rib spacing and channel depth.',
    score: 66,
    category: 'emerging',
  },
  {
    title: 'Recycled-feedstock purity index',
    description: 'A single index that predicts cell yield from reclaimed material.',
    score: 63,
    category: 'emerging',
  },
  {
    title: 'Low-temperature formation cycle',
    description: 'Formation at 12 °C with no capacity penalty across 400 cycles.',
    score: 61,
    category: 'emerging',
  },
  {
    title: 'Cross-chemistry state estimator',
    description: 'One estimator that transfers between LFP and NMC packs.',
    score: 58,
    category: 'emerging',
  },
  {
    title: 'Fixture for warped-cell testing',
    description: 'Defensive filing around the test rig itself.',
    score: 52,
    category: 'adjacent',
  },
  {
    title: 'Data schema for cell provenance',
    description: 'Adjacent claim covering the traceability record format.',
    score: 48,
    category: 'adjacent',
  },
  {
    title: 'Automated teardown labelling',
    description: 'Vision-assisted labelling of teardown imagery.',
    score: 44,
    category: 'adjacent',
  },
];
export const axes = [
  { label: 'Novelty', score: 92 },
  { label: 'Non-obviousness', score: 84 },
  { label: 'Enablement', score: 88 },
  { label: 'Scope', score: 79 },
  { label: 'Commercial pull', score: 90 },
];
