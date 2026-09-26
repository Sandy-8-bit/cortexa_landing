import { howItWorks } from '@/data/howItWorks';
import { PageIntro, Section, TechnicalLabel, FinalCta } from '@/components/ui/Primitives';
import { ProcessIllustration } from './ProcessIllustration';
import { HowScrollAnimations } from './HowScrollAnimations';
export function HowItWorksPage() {
  return (
    <>
      <PageIntro
        label="How it works"
        title="From your research to your next move."
        description="Follow six steps from the files you already have to a prioritised set of invention opportunities."
      />
      <Section className="first-section">
        <HowScrollAnimations>
          {howItWorks.map((stage, i) => (
            <article
              className="how-stage relative grid [grid-template-columns:1fr_1fr] gap-[7vw] items-center [padding:74px_0] [border-top:1px_solid_var(--line)] [scroll-margin-top:95px]"
              id={`stage-${i + 1}`}
              key={stage.title}
            >
              <span
                data-stage-progress
                aria-hidden="true"
                className="absolute top-[-1px] left-0 h-[2px] w-full origin-left bg-(--cx-blue)"
              />
              <div data-stage-copy>
                <TechnicalLabel>STAGE {String(i + 1).padStart(2, '0')} / 06</TechnicalLabel>
                <h2>{stage.title}</h2>
                <p>{stage.description}</p>
              </div>
              <div data-stage-visual className="min-w-0 w-full max-w-[440px] mx-auto">
                <ProcessIllustration stage={i} />
              </div>
            </article>
          ))}
        </HowScrollAnimations>
      </Section>
      <FinalCta />
    </>
  );
}
