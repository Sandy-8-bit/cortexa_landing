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
    name: 'Analyse',
    action: 'Cortexa analyses',
    description:
      'Each document is understood first: its domain, method, technical depth, and references.',
    output: 'Every source, understood',
  },
  {
    name: 'Find opportunities',
    action: 'Cortexa finds',
    description:
      'Cortexa identifies potential inventions and links each idea to its original source.',
    output: 'Ideas you can trace back',
  },
  {
    name: 'Harvest and seed',
    action: 'Cortexa explores',
    description:
      'Harvest develops the inventions already in your work. Seed proposes new directions worth exploring.',
    output: "What's here, and what's next",
  },
  {
    name: 'Score',
    action: 'You decide',
    description:
      'Each idea is checked against patents, published research, and public code, then scored on its strengths and gaps.',
    output: 'A clear starting point',
  },
];
export function PipelineSection() {
  return (
    <Section id="how-it-works">
      <SectionHeading
        label="02 / HOW IT WORKS"
        title="Five passes. Each one asks a harder question."
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
