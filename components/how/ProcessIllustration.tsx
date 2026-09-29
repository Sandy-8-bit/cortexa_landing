import styles from './ProcessIllustration.module.css';

export function ProcessIllustration({ stage }: { stage: number }) {
  return (
    <div className={styles.canvas}>
      {stage === 0 && (
        <div data-process-content className={styles.files}>
          <div className={styles.file}>
            <span className={styles.badge}>PDF</span>
            <span>
              Research paper<small>PDF, DOCX or LaTeX</small>
            </span>
          </div>
          <div className={styles.file}>
            <span className={styles.badge}>GIT</span>
            <span>
              Project code<small>Git repository</small>
            </span>
          </div>
          <span className={styles.join} aria-hidden="true" />
          <strong className={styles.result}>One research collection</strong>
        </div>
      )}
      {stage === 1 && (
        <div data-process-content className={styles.card}>
          <div className={styles.cardTitle}>Research paper, p. 8</div>
          <div className={styles.lines} aria-hidden="true">
            <i />
            <i />
            <i />
          </div>
          <mark>A new method for controlling heat during material processing.</mark>
          <div className={styles.idea}>
            <i aria-hidden="true" />
            <span>
              Potential invention<small>Linked to this passage</small>
            </span>
          </div>
        </div>
      )}
      {stage === 2 && (
        <div data-process-content className={styles.card}>
          <div className={styles.query}>Compare the idea</div>
          {[
            ['Patents', 'Similar method'],
            ['Papers', 'Related research'],
            ['Public code', 'Different approach'],
          ].map(([source, match]) => (
            <div className={styles.row} key={source}>
              <span>{source}</span>
              <b>{match}</b>
            </div>
          ))}
          <p>See what overlaps, and what is different.</p>
        </div>
      )}
      {stage === 3 && (
        <div data-process-content className={styles.card}>
          <div className={styles.cardTitle}>Invention review</div>
          <strong className={styles.cardHeading}>Heat-control method</strong>
          {[
            ['Novelty', 'Promising'],
            ['Evidence', 'Linked'],
            ['Scope', 'Needs review'],
          ].map(([axis, rating]) => (
            <div className={styles.row} key={axis}>
              <span>{axis}</span>
              <b className={rating === 'Needs review' ? styles.open : undefined}>{rating}</b>
            </div>
          ))}
          <div className={styles.next}>Next: review with your team</div>
        </div>
      )}
      {stage === 4 && (
        <div data-process-content className={styles.paths}>
          <strong className={styles.cardHeading}>Choose your next move</strong>
          <div>
            <b>Harvest</b>
            <span>Develop existing inventions</span>
          </div>
          <div className={styles.seed}>
            <b>Seed</b>
            <span>Explore new directions</span>
          </div>
        </div>
      )}
      {stage === 5 && (
        <div data-process-content className={styles.card}>
          <div className={styles.cardTitle}>Your opportunity map</div>
          {['Review first', 'Develop further', 'Explore next'].map((label, i) => (
            <div className={styles.row} key={label}>
              <span>0{i + 1}</span>
              <b className={styles.plain}>{label}</b>
            </div>
          ))}
          <div className={styles.next}>Explore, prioritise, export</div>
        </div>
      )}
    </div>
  );
}
