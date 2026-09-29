import Link from 'next/link';
import { Section, SectionHeading } from '@/components/ui/Primitives';
import { ProcessIllustration } from '@/components/how/ProcessIllustration';
import styles from './PipelineSection.module.css';

const steps = [
  {
    name: 'Read',
    action: 'You add',
    description: 'Start with your papers, technical notes, or code. No special formatting needed.',
    output: 'Your research, in one place',
  },
  {
    name: 'Find',
    action: 'Cortexa finds',
    description:
      'Cortexa identifies potential inventions and links each idea to its original source.',
    output: 'Ideas you can trace back',
  },
  {
    name: 'Check',
    action: 'Cortexa compares',
    description:
      'Each idea is compared with existing patents, published research, and public code.',
    output: 'Matches and differences',
  },
  {
    name: 'Rank',
    action: 'You decide',
    description:
      'Review the strengths and gaps of each idea, then choose what deserves a closer look.',
    output: 'A clear starting point',
  },
];
export function PipelineSection() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        label="02 / HOW IT WORKS"
        title="Four passes. Each one asks a harder question."
        description="From the work you already have to the ideas worth exploring. Here’s how it happens."
      />
      <ol className={styles.flow}>
        {steps.map((step, i) => (
          <li className={styles.step} id={`pass-${i}`} key={step.name}>
            <div className={styles.stepTop}>
              <span>{step.action}</span>
              <span className={styles.number}>0{i + 1}</span>
            </div>
            <div className={styles.illustration}>
              <ProcessIllustration stage={i} />
            </div>
            <div className={styles.copy}>
              <h3>{step.name}</h3>
              <p>{step.description}</p>
            </div>
            <div className={styles.output}>
              <span>Result</span>
              {step.output}
            </div>
          </li>
        ))}
      </ol>
      <div className={styles.footer}>
        <p>One connected journey. Every idea stays linked to its evidence.</p>
        <Link href="/how-it-works">Explore the full process</Link>
      </div>
    </Section>
  );
}
