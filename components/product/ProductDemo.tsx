'use client';
import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, Check, FileText, RotateCcw, Upload, Download } from 'lucide-react';
import { demoSteps, demoFiles, processingMessages, exportFormats } from '@/data/pipeline';
import { candidates } from '@/data/candidates';
import { evidence } from '@/data/evidence';
import { CandidateCard, OpportunityMap } from '@/components/home/OpportunityMap';
import { Verdict } from '@/components/visuals/Verdict';
import { LatticeVisual } from '@/components/visuals/ResearchVisual';
import { Toast } from '@/components/ui/Toast';

function ProcessingStep() {
  const [progress, setProgress] = useState(0);
  useEffect(() => {
    const timer = window.setInterval(() => setProgress((value) => Math.min(100, value + 5)), 120);
    return () => window.clearInterval(timer);
  }, []);
  return (
    <div className="processing-step">
      <div className="processing-symbol">
        <span />
        <span />
        <span />
      </div>
      <h2>Analysing 14 documents.</h2>
      <div
        className="progress-track"
        role="progressbar"
        aria-label="Sample analysis progress"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="technical-label" role="status">
        {progress === 100
          ? 'Complete — 12 candidates.'
          : processingMessages[Math.min(4, Math.floor(progress / 20))]}
      </p>
      <span className="processing-percent">{progress}%</span>
    </div>
  );
}
function EngineTabs() {
  const [engine, setEngine] = useState('Harvest');
  return (
    <>
      <div className="filter-bar" aria-label="Select engine">
        {['Harvest', 'Seed'].map((item) => (
          <button key={item} aria-pressed={engine === item} onClick={() => setEngine(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="engine-tab-content">
        {engine === 'Harvest' ? (
          <div className="candidate-grid compact">
            {candidates.slice(0, 4).map((candidate, i) => (
              <CandidateCard candidate={candidate} index={i} key={candidate.title} />
            ))}
          </div>
        ) : (
          <>
            <LatticeVisual />
            <p className="section-note">
              A portfolio, not a list. Explore the directions around a core invention.
            </p>
          </>
        )}
      </div>
    </>
  );
}
export function ProductDemo() {
  const [step, setStep] = useState(0);
  const [uploaded, setUploaded] = useState(false);
  const [toast, setToast] = useState('');
  const heading = useRef<HTMLHeadingElement>(null);
  const changeStep = (next: number) => {
    setStep(next);
    setToast('');
  };
  useEffect(() => {
    if (step > 0) heading.current?.focus({ preventScroll: true });
  }, [step]);
  return (
    <div className="product-demo panel">
      <div className="demo-header">
        <span className="technical-label">
          <span className="status-dot" /> INTERACTIVE WALKTHROUGH
        </span>
        <span className="demo-note">Sample data · No files uploaded</span>
      </div>
      <div className="demo-stepper" aria-label="Demo steps">
        {demoSteps.map((name, i) => (
          <button
            key={name}
            onClick={() => changeStep(i)}
            aria-current={step === i ? 'step' : undefined}
            aria-label={`Step ${i + 1}: ${name}`}
          >
            <span>{i < step ? <Check size={13} /> : String(i + 1).padStart(2, '0')}</span>
            <span>{name}</span>
          </button>
        ))}
      </div>
      <div className="demo-content">
        <div className="demo-stage-label">
          <h2 className="technical-label" ref={heading} tabIndex={-1}>
            STEP {String(step + 1).padStart(2, '0')} · {demoSteps[step]}
          </h2>
          <span className="technical-label">{step + 1} / 8</span>
        </div>
        <div key={step} className="demo-stage">
          {step === 0 && (
            <>
              <h3>Upload your research. Papers, code, everything.</h3>
              <button
                className={`drop-zone ${uploaded ? 'uploaded' : ''}`}
                onClick={() => setUploaded(true)}
                onDragOver={(event) => event.preventDefault()}
                onDrop={(event) => {
                  event.preventDefault();
                  setUploaded(true);
                }}
              >
                <Upload size={30} />
                <strong>
                  {uploaded ? 'SAMPLE CORPUS READY' : 'DROP FILES OR CLICK TO SIMULATE'}
                </strong>
                <span>PDF · DOCX · TEX · .ipynb · git remote — batches of 100+</span>
              </button>
              {uploaded && (
                <div className="uploaded-files" role="status">
                  {demoFiles.map((file) => (
                    <div key={file}>
                      <FileText size={16} />
                      <span>{file}</span>
                      <Check size={16} />
                    </div>
                  ))}
                </div>
              )}
              <p className="demo-note">
                This demo uses a prepared sample corpus. Dropped files are never read or sent.
              </p>
            </>
          )}
          {step === 1 && <ProcessingStep />}
          {step === 2 && (
            <>
              <h3>Here&apos;s what we found — 12 candidates, ordered by confidence.</h3>
              <div className="candidate-grid compact">
                {candidates.slice(0, 4).map((candidate, i) => (
                  <CandidateCard key={candidate.title} candidate={candidate} index={i} />
                ))}
              </div>
            </>
          )}
          {step === 3 && (
            <>
              <h3>Here&apos;s why we think so.</h3>
              <p>Candidate 01 — Gradient-annealed electrolyte interface</p>
              <div className="demo-evidence-grid">
                {evidence.slice(1, 4).map((item) => (
                  <article className="panel" key={item.label}>
                    <span className="technical-label">{item.label}</span>
                    <h4>{item.title}</h4>
                    <p>{item.body}</p>
                  </article>
                ))}
              </div>
            </>
          )}
          {step === 4 && (
            <>
              <h3>Five-axis verdict</h3>
              <Verdict radar />
              <p className="section-note">
                Novelty 92 · Non-obviousness 84 · Enablement 88 · Scope 79 · Commercial 90. Weakest
                axis is scope: the claim as drafted reads narrowly on electrode geometry.
              </p>
            </>
          )}
          {step === 5 && (
            <>
              <h3>Two ways to read the same work.</h3>
              <EngineTabs />
            </>
          )}
          {step === 6 && (
            <>
              <h3>Your complete invention landscape.</h3>
              <OpportunityMap />
            </>
          )}
          {step === 7 && (
            <>
              <h3>Take it with you.</h3>
              <div className="export-grid">
                {exportFormats.map((format) => (
                  <button
                    className="export-card"
                    key={format.title}
                    onClick={() =>
                      setToast(`Demo: Generated ${format.file} — no file was downloaded.`)
                    }
                  >
                    <Download size={24} />
                    <h4>{format.title}</h4>
                    <p>{format.description}</p>
                    <span className="technical-label">PREVIEW EXPORT ↗</span>
                  </button>
                ))}
              </div>
              <p className="demo-note">
                Exports are simulated in this walkthrough. No backend operation or download is
                performed.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="demo-controls">
        <button className="button ghost" onClick={() => changeStep(step - 1)} disabled={step === 0}>
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          className="restart"
          onClick={() => {
            changeStep(0);
            setUploaded(false);
          }}
        >
          <RotateCcw size={14} />
          Restart
        </button>
        <button
          className="button primary"
          disabled={step === 7}
          onClick={() => changeStep(step + 1)}
        >
          Next step
          <ArrowRight size={16} />
        </button>
      </div>
      <Toast message={toast} onClose={() => setToast('')} />
    </div>
  );
}
