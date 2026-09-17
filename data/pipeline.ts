export const pipeline = [
  {
    name: 'Ingest',
    title: 'Understand your source',
    description:
      'Domain, method, authorship, references, technical depth. Before anything is extracted, Cortexa works out what kind of document it is reading.',
    output: '14 documents classified · 3 domains · 412 references resolved',
  },
  {
    name: 'Extract',
    title: "Find what's hidden inside",
    description:
      'Novel claims, unusual combinations of known elements, and unexpected applications. The text fragments, and the inventive parts surface with their source paragraph attached.',
    output: '12 candidates · 38 claim fragments · each mapped to a page and line',
  },
  {
    name: 'Evidence',
    title: 'See what already exists',
    description:
      'Three layers of prior art: patent families, published literature, and public code. Records that argue against a candidate surface as prominently as records that support it.',
    output: '11 records · 4 patents · 3 papers · 2 repos · 2 counter-records',
  },
  {
    name: 'Score',
    title: 'Turn evidence into insight',
    description:
      'Five dimensions, each scored against the retrieved records and each carrying its own citations. The number summarises the argument; it never replaces it.',
    output: 'index 87 · confidence 0.86 · limiting axis: scope',
  },
];
export const fragments = [
  'gradient',
  'anneal',
  'interface',
  'dendrite',
  'separator',
  'suppress',
  'layered',
  'boundary',
  'in-situ',
  'drift',
  'protocol',
  'lamination',
];
export const documents = [
  'thesis.pdf',
  'results_v3.docx',
  'train.py',
  'grant_report.pdf',
  'notes.tex',
  'cell_data.ipynb',
  'review_2024.pdf',
  'anneal_study_v4.pdf',
  'repo/README',
  'fig_final.pdf',
];
export const demoFiles = [
  'anneal_study_v4.pdf',
  'cell_data.ipynb',
  'grant_report.pdf',
  'repo: lab/anneal-ctl',
  'thesis_ch3.tex',
];
export const demoSteps = [
  'Upload',
  'Process',
  'Candidates',
  'Evidence',
  'Five-axis verdict',
  'Harvest vs Seed',
  'Opportunity map',
  'Export',
];
export const processingMessages = [
  'Parsing documents…',
  'Extracting candidates…',
  'Searching prior art…',
  'Scoring five axes…',
  'Building opportunity map…',
];
export const exportFormats = [
  {
    title: 'PDF brief',
    description: 'Ranked candidates, verdicts, and citations, formatted for review.',
    file: 'Patent brief.pdf',
  },
  {
    title: 'JSON run',
    description: 'Full analysis object including provenance and model versions.',
    file: 'Cortexa run.json',
  },
  {
    title: 'CSV table',
    description: 'Flat scores for your own dashboards and portfolio tools.',
    file: 'Candidate scores.csv',
  },
];
