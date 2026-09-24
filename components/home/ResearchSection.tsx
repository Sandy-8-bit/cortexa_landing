import { ArrowDown, ArrowUpRight, FileText, GitBranch, NotebookPen, Check } from 'lucide-react';
import Link from 'next/link';
import { Section, TechnicalLabel } from '@/components/ui/Primitives';
import styles from './ResearchSection.module.css';

const sources = [
  { icon: FileText, name: 'anneal_study_v4.pdf', type: 'PAPER', detail: 'Papers & reports' },
  { icon: GitBranch, name: 'lab / anneal-ctl', type: 'CODE', detail: 'Code & repositories' },
  { icon: NotebookPen, name: 'cell_data.ipynb', type: 'NOTES', detail: 'Lab notebooks' },
];

export function ResearchSection() {
  return (
    <Section id="research" className={styles.section}>
      <div className={styles.layout}>
        <div className={styles.copy} data-reveal>
          <TechnicalLabel>01 / THE UNTAPPED POTENTIAL</TechnicalLabel>
          <h2>Research is<br />everywhere.<span>So is possibility.</span></h2>
          <p className={styles.description}>Your papers. Your code. Your half-finished notebooks and last year&apos;s grant report. Every one of them is a source of invention — and none of them are labelled that way.</p>
          <div className={styles.promise}>
            <span className={styles.mark} aria-hidden="true">↳</span>
            <div>
              <h3>Upload your research.<br />Cortexa listens.</h3>
              <p>Documents go in. Invention candidates come out — each attached to the evidence that earned its place.</p>
            </div>
          </div>
          <Link href="/product" className={styles.link}>Explore the sample workflow <ArrowUpRight size={18} aria-hidden="true" /></Link>
        </div>
        <div className={styles.preview} data-reveal aria-label="Sample research transformed into an invention candidate">
          <div className={styles.topline}><span><i /> RESEARCH → OPPORTUNITY</span><span>SAMPLE 01</span></div>
          <div className={styles.documents}>
            <div className={styles.caption}><span>YOUR SOURCE MATERIAL</span><span>01 / INPUT</span></div>
            {sources.map(({ icon: Icon, name, type, detail }) => (
              <div className={styles.document} key={name}>
                <div className={styles.fileIcon}><Icon size={19} strokeWidth={1.3} aria-hidden="true" /></div>
                <div className={styles.fileName}><span>{name}</span><small>{detail}</small></div>
                <span className={styles.fileType}>{type}</span>
              </div>
            ))}
          </div>
          <div className={styles.connector} aria-hidden="true"><span /><ArrowDown size={18} /><span /></div>
          <div className={styles.result}>
            <div className={styles.resultTop}><span><Check size={13} aria-hidden="true" /> INVENTION IDENTIFIED</span><span>02 / OUTPUT</span></div>
            <h3>Gradient-annealed<br />electrolyte interface</h3>
            <div className={styles.resultBottom}>
              <div><strong>87<small>/100</small></strong><p>Confidence: High (86%)</p></div>
              <Link href="/evidence#candidate-01" aria-label="View evidence for the sample invention"><ArrowUpRight size={24} aria-hidden="true" /></Link>
            </div>
            <div className={styles.resultFoot}><span>SOURCE-LINKED · HIGH POTENTIAL</span><span>Estimate, not a legal opinion.</span></div>
          </div>
          <p className={styles.previewFoot}>From the work you already have. To what comes next.</p>
        </div>
      </div>
    </Section>
  );
}
