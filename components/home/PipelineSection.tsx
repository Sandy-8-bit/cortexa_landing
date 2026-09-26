import { ArrowDown, ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Primitives';
import { ProcessIllustration } from '@/components/how/ProcessIllustration';
import styles from './PipelineSection.module.css';

const steps = [
  { name: 'Bring your research', action: 'YOU ADD', description: 'Start with your papers, technical notes, or code. No special formatting needed.', output: 'Your research, in one place' },
  { name: 'Find the inventions', action: 'CORTEXA FINDS', description: 'Cortexa identifies potential inventions and links each idea to its original source.', output: 'Ideas you can trace back' },
  { name: 'Check the evidence', action: 'CORTEXA COMPARES', description: 'Each idea is compared with existing patents, published research, and public code.', output: 'Matches and differences' },
  { name: 'See what to pursue', action: 'YOU DECIDE', description: 'Review the strengths and gaps of each idea, then choose what deserves a closer look.', output: 'A clear starting point' },
];
export function PipelineSection() {
  return (
    <Section id="how-it-works">
      <SectionHeading label="02 / HOW IT WORKS" title="Your research. A clear path forward." description="From the work you already have to the ideas worth exploring. Here’s how it happens." />
      <div className={styles.overview}><span>RESEARCH IN</span><span className={styles.overviewLine} aria-hidden="true" /><span>FOUR SIMPLE STEPS</span><span className={styles.overviewLine} aria-hidden="true" /><span>DIRECTION OUT <ArrowUpRight size={15} aria-hidden="true" /></span></div>
      <ol className={styles.flow}>
        {steps.map((step, i) => (
          <li className={styles.step} id={`pass-${i}`} key={step.name}>
            <div className={styles.stepTop}><span className={styles.number}>0{i + 1}</span><span>{step.action}</span></div>
            <div className={styles.illustration}><ProcessIllustration stage={i} /></div>
            <div className={styles.copy}><h3>{step.name}</h3><p>{step.description}</p></div>
            <div className={styles.output}><ArrowDown size={14} aria-hidden="true" /><span>{step.output}</span></div>
            {i < steps.length - 1 && <span className={styles.connector} aria-hidden="true"><ArrowRight size={17} /></span>}
          </li>
        ))}
      </ol>
      <div className={styles.footer}><p>One connected journey. Every idea stays linked to its evidence.</p><Link href="/how-it-works">Explore the full process <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    </Section>
  );
}
