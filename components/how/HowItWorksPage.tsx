import { howItWorks } from '@/data/howItWorks';
import { PageIntro, Section, TechnicalLabel, FinalCta } from '@/components/ui/Primitives';
import {
  TransformationVisual,
  PipelineVisual,
  LatticeVisual,
} from '@/components/visuals/ResearchVisual';
import { Verdict } from '@/components/visuals/Verdict';
export function HowItWorksPage() {
  return (
    <>
      <PageIntro label="How it works" title="Seven stages, start to strategy." />
      <Section className="first-section">
        <div className="how-stages">
          {howItWorks.map((stage, i) => (
            <article className="how-stage" id={`stage-${i + 1}`} key={stage.title} data-reveal>
              <div>
                <TechnicalLabel>STAGE {String(i + 1).padStart(2, '0')} / 07</TechnicalLabel>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
              </div>
              <div className="how-visual">
                {i === 0 || i === 6 ? (
                  <TransformationVisual />
                ) : i === 4 ? (
                  <Verdict radar />
                ) : i === 5 ? (
                  <LatticeVisual />
                ) : (
                  <PipelineVisual stage={i - 1} />
                )}
              </div>
            </article>
          ))}
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
