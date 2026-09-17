export const trustFeatures = [
  {
    title: 'Never used for training',
    description:
      "Your documents, extracted candidates, and scores are never added to any training set, ours or a vendor's. This is contractual, not a setting.",
  },
  {
    title: 'Encrypted in transit and at rest',
    description: 'TLS 1.3 on the wire, AES-256 on disk, with per-workspace key separation.',
  },
  {
    title: 'You set retention',
    description:
      'Keep a corpus indefinitely, or have source files purged the moment a run completes and only the evidence trail retained.',
  },
  {
    title: 'Disclosure-safe by default',
    description:
      'Nothing is published, shared, or sent to a patent office by Cortexa. Prior-art searches are issued without exposing your text.',
  },
  {
    title: 'Full provenance log',
    description:
      'Every run records source hashes, retrieval queries, sources returned, model versions, and timestamps — exportable for review boards and counsel.',
  },
  {
    title: 'Human judgement stays yours',
    description:
      'Cortexa produces evidence and a ranking. It does not file, does not advise, and is not a substitute for a patent attorney.',
  },
];
export const knownLimits =
  'Prior-art coverage is strong for USPTO, EPO, and WIPO, and thinner for some national offices and for non-English filings before 2005. Scores are calibrated estimates, not legal opinions. Where confidence is low, Cortexa says so on the card rather than rounding the number up.';
