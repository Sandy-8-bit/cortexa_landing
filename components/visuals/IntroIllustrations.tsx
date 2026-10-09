import type { ReactNode } from 'react';
import styles from './IntroIllustrations.module.css';

function Illustration({ id, label, caption, children }: {
  id: string;
  label: string;
  caption: string;
  children: ReactNode;
}) {
  return (
    <div className={styles.visual}>
      <svg viewBox="0 0 440 290" role="img" aria-label={label}>
        <defs>
          <pattern id={`${id}-dots`} width="16" height="16" patternUnits="userSpaceOnUse">
            <circle cx="1" cy="1" r=".7" fill="var(--dot)" />
          </pattern>
        </defs>
        <rect x="8" y="18" width="424" height="250" rx="12" fill={`url(#${id}-dots)`} />
        {children}
      </svg>
      <p className={styles.caption}>{caption}</p>
    </div>
  );
}

export function ResearchDirectionIllustration() {
  return (
    <Illustration id="research-direction" label="Research files follow a six-step path to a prioritised list of invention opportunities." caption="Six steps. A clearer direction.">
      <g fill="var(--paper)" stroke="var(--periwinkle)">
        <rect x="30" y="57" width="63" height="75" rx="4" transform="rotate(-8 61 95)" />
        <rect x="40" y="63" width="63" height="75" rx="4" />
      </g>
      <g stroke="var(--dot)" strokeWidth="2" strokeLinecap="round">
        <path d="M52 92H91M52 101H85M52 119H79" />
        <path d="M52 110H91" stroke="var(--cyanotype)" opacity=".6" />
      </g>
      <text x="52" y="82" fontFamily="monospace" fontSize="8" fill="var(--blue-700)">RESEARCH</text>
      <path d="M103 101H139Q155 101 155 117V187Q155 203 171 203H238Q254 203 254 187V103Q254 87 270 87H291" fill="none" stroke="var(--periwinkle)" strokeWidth="1.5" />
      {[[137, 101], [155, 149], [177, 203], [226, 203], [254, 151], [269, 87]].map(([x, y], i) => (
        <g key={i}>
          <circle cx={x} cy={y} r="11" fill={i === 5 ? 'var(--cyanotype)' : 'var(--paper)'} stroke="var(--cyanotype)" />
          <text x={x} y={y + 3} textAnchor="middle" fontFamily="monospace" fontSize="8" fill={i === 5 ? 'var(--paper)' : 'var(--blue-700)'}>{i + 1}</text>
        </g>
      ))}
      <rect x="290" y="61" width="129" height="143" rx="7" fill="var(--paper)" stroke="var(--periwinkle)" />
      <text x="303" y="80" fontFamily="monospace" fontSize="8" fill="var(--blue-700)">YOUR NEXT MOVE</text>
      <path d="M302 91H407" stroke="var(--rule)" />
      <rect x="299" y="101" width="111" height="33" rx="4" fill="var(--blue-tint)" />
      <g fontFamily="Arial, sans-serif" fontSize="9" fill="var(--ink)">
        <text x="308" y="115" fill="var(--cyanotype)" fontWeight="600">01</text>
        <text x="330" y="115" fontWeight="600">Priority candidate</text>
        <text x="330" y="126" fontSize="7" fill="var(--muted)">Ready for review</text>
        <text x="308" y="155" fill="var(--muted)">02</text>
        <text x="330" y="155">Explore further</text>
        <text x="308" y="180" fill="var(--muted)">03</text>
        <text x="330" y="180">Keep on the radar</text>
      </g>
      <g fontFamily="monospace" fontSize="8" fill="var(--muted)" letterSpacing="1">
        <text x="40" y="250">COLLECT</text>
        <text x="166" y="250">CONNECT</text>
        <text x="318" y="250">PRIORITISE</text>
      </g>
    </Illustration>
  );
}

export function CorpusPricingIllustration() {
  return (
    <Illustration id="corpus-pricing" label="One research corpus is the pricing unit, with shared evidence accessible to a principal investigator, reviewer, and attorney." caption="One corpus. Shared evidence for your team.">
      <g fill="none" stroke="var(--periwinkle)" strokeWidth="1.3">
        <path d="M180 143H234V71H290M234 143H290M234 143V215H290" />
      </g>
      <rect x="32" y="78" width="148" height="140" rx="8" fill="var(--blue-tint)" stroke="var(--periwinkle)" />
      <g fill="var(--paper)" stroke="var(--periwinkle)">
        <rect x="61" y="63" width="75" height="87" rx="4" transform="rotate(-8 98 107)" />
        <rect x="72" y="63" width="75" height="87" rx="4" transform="rotate(7 110 107)" />
        <rect x="67" y="70" width="75" height="87" rx="4" />
      </g>
      <g stroke="var(--dot)" strokeWidth="2" strokeLinecap="round">
        <path d="M80 99H129M80 108H123M80 128H129M80 137H112" />
        <path d="M80 118H129" stroke="var(--cyanotype)" opacity=".6" />
      </g>
      <text x="80" y="87" fontFamily="monospace" fontSize="7" fill="var(--blue-700)">RESEARCH FILES</text>
      <rect x="49" y="168" width="114" height="33" rx="5" fill="var(--cyanotype)" />
      <text x="106" y="189" textAnchor="middle" fontFamily="monospace" fontSize="11" fill="var(--paper)">01 CORPUS</text>
      <circle cx="234" cy="143" r="5" fill="var(--cyanotype)" />
      {['Principal investigator', 'Reviewer', 'Attorney'].map((role, i) => (
        <g key={role} transform={`translate(290 ${48 + i * 72})`}>
          <rect width="131" height="47" rx="6" fill="var(--paper)" stroke="var(--periwinkle)" />
          <circle cx="21" cy="23" r="14" fill="var(--blue-tint)" />
          <g fill="none" stroke="var(--cyanotype)" strokeWidth="1.3" strokeLinecap="round">
            <circle cx="21" cy="19" r="3.5" />
            <path d="M14 30v-2a7 7 0 0 1 14 0v2" />
          </g>
          <text x="42" y="21" fontFamily="Arial, sans-serif" fontSize="8" fill="var(--ink)">{role}</text>
          <text x="42" y="33" fontFamily="monospace" fontSize="7" fill="var(--blue-700)">Shared evidence</text>
        </g>
      ))}
      <text x="106" y="246" textAnchor="middle" fontFamily="monospace" fontSize="8" fill="var(--muted)" letterSpacing="1">THE PRICING UNIT</text>
    </Illustration>
  );
}
