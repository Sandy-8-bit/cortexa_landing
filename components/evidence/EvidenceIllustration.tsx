import styles from './EvidenceIllustration.module.css';

export function EvidenceIllustration() {
  return (
    <div className={styles.visual}>
      <svg
        viewBox="0 0 440 290"
        role="img"
        aria-label="An illustrative conclusion connects through an evidence record to a highlighted passage in the original source."
      >
        <defs>
          <pattern id="evidence-trace-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".7" fill="var(--dot)" />
          </pattern>
          <filter id="evidence-trace-shadow" x="-25%" y="-25%" width="160%" height="170%">
            <feDropShadow dx="0" dy="7" stdDeviation="7" floodColor="var(--blue-800)" floodOpacity=".07" />
          </filter>
        </defs>
        <rect x="8" y="18" width="424" height="250" rx="12" fill="url(#evidence-trace-dots)" />
        <g fill="none" stroke="var(--periwinkle)" strokeWidth="1.3">
          <path d="M148 102H171Q183 102 183 114V150Q183 162 195 162H212" />
          <path d="M238 162H259Q271 162 271 150V118Q271 106 283 106H300" />
          <path d="M225 175V212H299" strokeDasharray="3 5" />
        </g>
        <g filter="url(#evidence-trace-shadow)">
          <rect x="26" y="66" width="126" height="89" rx="7" fill="var(--paper)" stroke="var(--periwinkle)" />
          <rect x="294" y="49" width="124" height="153" rx="7" fill="var(--paper)" stroke="var(--periwinkle)" />
        </g>
        <rect x="37" y="78" width="65" height="16" rx="3" fill="var(--blue-tint)" />
        <g fontFamily="monospace" fontSize="8" fill="var(--blue-700)">
          <text x="44" y="89">CONCLUSION</text>
          <text x="307" y="70">SOURCE / 01</text>
        </g>
        <g fontFamily="Arial, sans-serif" fill="var(--ink)">
          <text x="38" y="113" fontSize="11" fontWeight="600">Improved interface</text>
          <text x="38" y="128" fontSize="11" fontWeight="600">stability</text>
          <text x="38" y="143" fontSize="8" fill="var(--muted)">Illustrative finding</text>
          <text x="307" y="88" fontSize="9" fontWeight="600">Lab notebook</text>
        </g>
        <g stroke="var(--dot)" strokeWidth="2" strokeLinecap="round">
          <path d="M307 102H400M307 111H384M307 157H396M307 166H387M307 175H367" />
        </g>
        <rect x="302" y="120" width="108" height="26" rx="2" fill="var(--blue-tint)" />
        <path d="M302 120V146" stroke="var(--cyanotype)" strokeWidth="2" />
        <g stroke="var(--cyanotype)" strokeWidth="2" strokeLinecap="round">
          <path d="M308 129H397M308 137H379" opacity=".65" />
        </g>
        <circle cx="225" cy="162" r="22" fill="var(--blue-tint)" />
        <circle cx="225" cy="162" r="14" fill="var(--cyanotype)" />
        <g fill="none" stroke="var(--paper)" strokeWidth="1.5" strokeLinecap="round">
          <path d="m222 164-2 2a3 3 0 0 1-4-4l4-4a3 3 0 0 1 4 0M228 160l2-2a3 3 0 0 1 4 4l-4 4a3 3 0 0 1-4 0M222 165l6-6" />
        </g>
        <circle cx="152" cy="102" r="3" fill="var(--cyanotype)" />
        <circle cx="294" cy="106" r="3" fill="var(--cyanotype)" />
        <g fontFamily="monospace" fontSize="8" textAnchor="middle" fill="var(--muted)">
          <text x="225" y="128">EVIDENCE</text>
          <text x="354" y="216" fill="var(--blue-700)">p. 12 / lines 8–11</text>
        </g>
        <path d="M42 243H398" stroke="var(--rule)" />
        <g fontFamily="monospace" fontSize="8" fill="var(--muted)" letterSpacing="1">
          <text x="42" y="259">FINDING</text>
          <text x="180" y="259">CONNECTION</text>
          <text x="341" y="259">SOURCE</text>
        </g>
      </svg>
      <p className={styles.caption}>Follow the finding. Open the original.</p>
    </div>
  );
}
