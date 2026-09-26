import {
  FileText,
  Code2,
  Check,
  ArrowDown,
  Lightbulb,
  Search,
  GitBranch,
  ArrowUpRight,
} from 'lucide-react';
import styles from './ProcessIllustration.module.css';

export function ProcessIllustration({ stage }: { stage: number }) {
  return (
    <div className={styles.canvas}>
      <span className={styles.caption}>ILLUSTRATIVE EXAMPLE</span>
      {stage === 0 && (
        <div data-process-content className={styles.files}>
          <div>
            <FileText size={18} aria-hidden="true" />
            <span>
              Research paper<small>PDF / DOCX / LaTeX</small>
            </span>
            <Check size={13} aria-hidden="true" />
          </div>
          <div>
            <Code2 size={18} aria-hidden="true" />
            <span>
              Project code<small>Git repository</small>
            </span>
            <Check size={13} aria-hidden="true" />
          </div>
          <ArrowDown className={styles.down} size={20} aria-hidden="true" />
          <strong className={styles.result}>One research collection</strong>
        </div>
      )}
      {stage === 1 && (
        <div data-process-content className={styles.paper}>
          <div className={styles.paperTitle}>
            <FileText size={14} aria-hidden="true" /> Research paper · p. 08
          </div>
          <div className={styles.lines} aria-hidden="true">
            <i />
            <i />
          </div>
          <mark>A new method for controlling heat during material processing.</mark>
          <div className={styles.idea}>
            <Lightbulb size={16} aria-hidden="true" />
            <span>
              Potential invention<small>Linked to this passage</small>
            </span>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div data-process-content className={styles.evidence}>
          <div className={styles.query}>
            <Search size={15} aria-hidden="true" /> Compare the idea
          </div>
          <div>
            <span>Patents</span>
            <b>Similar method</b>
          </div>
          <div>
            <span>Papers</span>
            <b>Related research</b>
          </div>
          <div>
            <span>Public code</span>
            <b>Different approach</b>
          </div>
          <p>
            See what overlaps.
            <br />
            <strong>Understand what’s different.</strong>
          </p>
        </div>
      )}
      {stage === 3 && (
        <div data-process-content className={styles.assessment}>
          <div className={styles.paperTitle}>INVENTION REVIEW</div>
          <strong>Heat-control method</strong>
          <div className={styles.rating}>
            <span>Novelty</span>
            <b>Promising</b>
          </div>
          <div className={styles.rating}>
            <span>Evidence</span>
            <b>Linked</b>
          </div>
          <div className={styles.rating}>
            <span>Scope</span>
            <b>Needs review</b>
          </div>
          <div className={styles.next}>
            Next: review with your team <ArrowUpRight size={14} aria-hidden="true" />
          </div>
        </div>
      )}
      {stage === 4 && (
        <div data-process-content className={styles.paths}>
          <GitBranch size={26} aria-hidden="true" />
          <strong>Choose your next move</strong>
          <div>
            <b>Harvest</b>
            <span>Develop existing inventions</span>
          </div>
          <div>
            <b>Seed</b>
            <span>Explore new directions</span>
          </div>
        </div>
      )}
      {stage === 5 && (
        <div data-process-content className={styles.assessment}>
          <div className={styles.paperTitle}>YOUR OPPORTUNITY MAP</div>
          {['Review first', 'Develop further', 'Explore next'].map((label, i) => (
            <div className={styles.mapRow} key={label}>
              <span>0{i + 1}</span>
              <strong>{label}</strong>
              <ArrowUpRight size={14} aria-hidden="true" />
            </div>
          ))}
          <div className={styles.next}>Explore · Prioritise · Export</div>
        </div>
      )}
    </div>
  );
}
