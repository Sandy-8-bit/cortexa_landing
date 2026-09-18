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
    <div className="processing-step max-w-[650px] m-auto [padding:40px_0] text-center">
      <div className="processing-symbol h-[80px] flex items-center justify-center gap-[6px] mb-[25px]">
        <span />
        <span />
        <span />
      </div>
      <h2>Analysing 14 documents.</h2>
      <div
        className="progress-track h-[2px] bg-(--line) [margin:26px_0]"
        role="progressbar"
        aria-label="Sample analysis progress"
        aria-valuenow={progress}
        aria-valuemin={0}
        aria-valuemax={100}
      >
        <span style={{ width: `${progress}%` }} />
      </div>
      <p className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium" role="status">
        {progress === 100
          ? 'Complete — 12 candidates.'
          : processingMessages[Math.min(4, Math.floor(progress / 20))]}
      </p>
      <span className="processing-percent block text-[12px] mt-[15px]">{progress}%</span>
    </div>
  );
}
function EngineTabs() {
  const [engine, setEngine] = useState('Harvest');
  return (
    <>
      <div className="filter-bar flex items-center flex-wrap gap-[8px] [margin:28px_0]" aria-label="Select engine">
        {['Harvest', 'Seed'].map((item) => (
          <button key={item} aria-pressed={engine === item} onClick={() => setEngine(item)}>
            {item}
          </button>
        ))}
      </div>
      <div className="engine-tab-content min-h-[360px]">
        {engine === 'Harvest' ? (
          <div className="candidate-grid compact grid grid-cols-3 gap-[1px] bg-(--line) [border:1px_solid_var(--line)]">
            {candidates.slice(0, 4).map((candidate, i) => (
              <CandidateCard candidate={candidate} index={i} key={candidate.title} />
            ))}
          </div>
        ) : (
          <>
            <LatticeVisual />
            <p className="section-note text-[13px] leading-[1.6] text-(--muted) mt-[28px]">
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
    <div className="product-demo panel bg-(--canvas) overflow-hidden">
      <div className="demo-header flex items-center justify-between gap-[16px] [border-bottom:1px_solid_var(--line)] [padding:24px_32px] bg-(--surface)">
        <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
          <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" /> INTERACTIVE WALKTHROUGH
        </span>
        <span className="demo-note text-[13px] leading-[1.6] text-(--muted)">Sample data · No files uploaded</span>
      </div>
      <div className="demo-stepper grid grid-cols-8 [border-bottom:1px_solid_var(--line)]" aria-label="Demo steps">
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
      <div className="demo-content p-[42px] min-h-[510px]">
        <div className="demo-stage-label flex items-center justify-between gap-[18px] mb-[38px]">
          <h2 className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium" ref={heading} tabIndex={-1}>
            STEP {String(step + 1).padStart(2, '0')} · {demoSteps[step]}
          </h2>
          <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">{step + 1} / 8</span>
        </div>
        <div key={step} className="demo-stage">
          {step === 0 && (
            <>
              <h3>Upload your research. Papers, code, everything.</h3>
              <button
                className={`drop-zone w-full flex flex-col items-center justify-center gap-[24px] min-h-[260px] p-[32px] bg-(--surface) [border:1px_dashed_var(--line-strong)] text-center ${uploaded ? 'uploaded' : ''}`}
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
                <div className="uploaded-files mt-[24px]" role="status">
                  {demoFiles.map((file) => (
                    <div key={file}>
                      <FileText size={16} />
                      <span>{file}</span>
                      <Check size={16} />
                    </div>
                  ))}
                </div>
              )}
              <p className="demo-note text-[13px] leading-[1.6] text-(--muted)">
                This demo uses a prepared sample corpus. Dropped files are never read or sent.
              </p>
            </>
          )}
          {step === 1 && <ProcessingStep />}
          {step === 2 && (
            <>
              <h3>Here&apos;s what we found — 12 candidates, ordered by confidence.</h3>
              <div className="candidate-grid compact grid grid-cols-3 gap-[1px] bg-(--line) [border:1px_solid_var(--line)]">
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
              <div className="demo-evidence-grid grid grid-cols-3 gap-[16px] mt-[30px]">
                {evidence.slice(1, 4).map((item) => (
                  <article className="panel" key={item.label}>
                    <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">{item.label}</span>
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
              <p className="section-note text-[13px] leading-[1.6] text-(--muted) mt-[28px]">
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
              <div className="export-grid grid grid-cols-3 gap-[16px] mt-[30px]">
                {exportFormats.map((format) => (
                  <button
                    className="export-card flex flex-col items-start text-left min-h-[330px] p-[30px] bg-(--surface) [border:1px_solid_var(--line)] text-(--ink)"
                    key={format.title}
                    onClick={() =>
                      setToast(`Demo: Generated ${format.file} — no file was downloaded.`)
                    }
                  >
                    <Download size={24} />
                    <h4>{format.title}</h4>
                    <p>{format.description}</p>
                    <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">PREVIEW EXPORT ↗</span>
                  </button>
                ))}
              </div>
              <p className="demo-note text-[13px] leading-[1.6] text-(--muted)">
                Exports are simulated in this walkthrough. No backend operation or download is
                performed.
              </p>
            </>
          )}
        </div>
      </div>
      <div className="demo-controls flex items-center justify-between gap-[14px] [padding:24px_32px] [border-top:1px_solid_var(--line)]">
        <button className="button ghost min-h-[60px] inline-flex items-center justify-between gap-[35px] [padding:18px_26px] [border:1px_solid_var(--ink)] rounded-none text-[14px] font-medium leading-[1.4]" onClick={() => changeStep(step - 1)} disabled={step === 0}>
          <ArrowLeft size={16} />
          Back
        </button>
        <button
          className="restart flex items-center gap-[9px] min-h-[44px] [background:none] [border:0] text-[13px] text-(--muted)"
          onClick={() => {
            changeStep(0);
            setUploaded(false);
          }}
        >
          <RotateCcw size={14} />
          Restart
        </button>
        <button
          className="button primary min-h-[60px] inline-flex items-center justify-between gap-[35px] [padding:18px_26px] [border:1px_solid_var(--ink)] rounded-none text-[14px] font-medium leading-[1.4]"
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
