import { readFileSync, writeFileSync } from 'node:fs';

// Mechanical migration of existing diagram colors to surface-aware theme tokens.
// The diagram geometry, records, and interaction handlers are unchanged.
const replacements = {
  '#4fe3c1': 'var(--ink)', '#f0a44a': 'var(--ink)', '#eef2f4': 'var(--ink)',
  '#9aa6ad': 'var(--subtle)', '#aab8b9': 'var(--subtle)', '#b6c7c2': 'var(--subtle)',
  '#243331': 'var(--line-strong)', '#28423c': 'var(--line-strong)',
  '#354843': 'var(--line-strong)', '#2c393a': 'var(--line-strong)',
  '#315648': 'var(--line-strong)', '#31564b': 'var(--line-strong)',
  '#355049': 'var(--line-strong)', '#2b3a37': 'var(--line-strong)', '#37584e': 'var(--line-strong)',
  '#0c1917': 'var(--canvas)', '#111b1c': 'var(--canvas)', '#10221c': 'var(--canvas)',
  '#0b1e18': 'var(--canvas)', '#15382c': 'var(--surface)', '#101b1b': 'var(--canvas)',
};
for (const file of ['components/visuals/ResearchVisual.tsx', 'components/visuals/Verdict.tsx', 'components/evidence/EvidenceGraph.tsx']) {
  let source = readFileSync(file, 'utf8');
  for (const [previous, next] of Object.entries(replacements)) source = source.replaceAll(previous, next);
  source = source.replaceAll('rx="3"', 'rx="0"');
  writeFileSync(file, source);
}
