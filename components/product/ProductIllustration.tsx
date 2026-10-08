import styles from './ProductIllustration.module.css';

export function ProductIllustration() {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 440 290" role="img" aria-label="Sample workflow: research documents are analysed to produce an invention candidate linked to its source evidence.">
        <defs>
          <pattern id="product-dots" width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".7" fill="var(--dot)" />
          </pattern>
          <filter id="product-shadow" x="-30%" y="-30%" width="170%" height="180%">
            <feDropShadow dx="0" dy="8" stdDeviation="8" floodColor="var(--blue-800)" floodOpacity=".08" />
          </filter>
        </defs>
        <rect x="8" y="18" width="424" height="250" rx="12" fill="url(#product-dots)" />
        <g fill="none" stroke="var(--periwinkle)" strokeWidth="1.2">
          <path d="M100 113H143Q153 113 153 123V143H182M100 183H143Q153 183 153 173V153H182" />
          <path d="M228 148H260" />
          <path d="m254 144 6 4-6 4" />
        </g>
        <g filter="url(#product-shadow)">
          <rect x="40" y="71" width="67" height="80" rx="5" fill="var(--blue-tint)" stroke="var(--periwinkle)" transform="rotate(-9 73 111)" />
          <rect x="49" y="77" width="67" height="80" rx="5" fill="var(--paper)" stroke="var(--periwinkle)" />
          <rect x="49" y="166" width="67" height="40" rx="5" fill="var(--paper)" stroke="var(--periwinkle)" />
        </g>
        <g stroke="var(--dot)" strokeWidth="2" strokeLinecap="round">
          <path d="M61 108H100M61 116H94M61 135H86" />
          <path d="M61 125H100" stroke="var(--cyanotype)" strokeWidth="5" opacity=".4" />
        </g>
        <g fontFamily="monospace" fontSize="8" fill="var(--muted)">
          <text x="61" y="96">PAPER / 01</text>
          <text x="61" y="190">&lt;/&gt; CODE</text>
        </g>
        <rect x="180" y="123" width="50" height="50" rx="13" fill="var(--cyanotype)" />
        <g fill="none" stroke="var(--paper)" strokeWidth="1.5">
          <path d="m192 140 13-7 13 7-13 8Z M192 148l13 7 13-7 M192 156l13 7 13-7" />
        </g>
        <g filter="url(#product-shadow)">
          <rect x="267" y="77" width="150" height="143" rx="8" fill="var(--paper)" stroke="var(--periwinkle)" />
          <path d="M275 77H409Q417 77 417 85V104H267V85Q267 77 275 77" fill="var(--blue-tint)" />
        </g>
        <circle cx="281" cy="91" r="3" fill="var(--cyanotype)" />
        <text x="290" y="94" fontFamily="monospace" fontSize="8" fill="var(--blue-700)">CANDIDATE / 01</text>
        <g fontFamily="Arial, sans-serif" fill="var(--ink)">
          <text x="280" y="125" fontSize="12" fontWeight="600">Self-healing</text>
          <text x="280" y="141" fontSize="12" fontWeight="600">polymer coating</text>
          <text x="280" y="160" fontSize="8" fill="var(--muted)">Materials science · Sample</text>
          <path d="M280 173H403" stroke="var(--rule)" />
          <circle cx="285" cy="190" r="6" fill="var(--blue-tint)" />
          <path d="m282 190 2 2 4-4" fill="none" stroke="var(--cyanotype)" strokeWidth="1.2" />
          <text x="297" y="193" fontSize="9">Source evidence linked</text>
        </g>
        <g fontFamily="monospace" fontSize="8" fill="var(--muted)" textAnchor="middle" letterSpacing="1">
          <text x="82" y="244">01 / INPUT</text>
          <text x="205" y="244">02 / ANALYSE</text>
          <text x="342" y="244">03 / REVIEW</text>
        </g>
      </svg>
      <p className={styles.caption}>Your research. A traceable next step.</p>
    </div>
  );
}
