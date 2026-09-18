import { Check } from 'lucide-react';
import { pricing } from '@/data/pricing';
import { PageIntro, Section, SectionHeading, Button } from '@/components/ui/Primitives';
export function PricingPage() {
  return (
    <>
      <PageIntro
        label="Pricing"
        title="Priced per corpus, not per seat."
        description="Reviewers, attorneys, and PIs all need to see the same evidence. Charging them each to look at it made no sense to us."
      />
      <Section className="first-section">
        <div className="pricing-grid grid grid-cols-4 gap-0 pt-[28px]">
          {pricing.map((plan) => (
            <article className={`pricing-card relative [padding:32px_26px] [border:1px_solid_var(--line)] bg-(--surface) ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && (
                <span className="plan-ribbon technical-label font-sans text-[8px] leading-[1.5] tracking-[0.02em] uppercase text-(--cx-white) font-medium absolute top-[-28px] left-[-1px] right-[-1px] h-[28px] grid place-items-center bg-(--cx-black) [border-bottom:1px_solid_var(--line)]">FOR GROWING RESEARCH TEAMS</span>
              )}
              <h2 className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">{plan.name}</h2>
              <p className="price text-[clamp(30px,_3.1vw,_48px)] tracking-[-0.055em] text-(--ink) leading-[1.1] whitespace-nowrap">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <p className="plan-description text-[13px] min-h-[48px] mt-[20px]">{plan.description}</p>
              <Button href={plan.href} variant={plan.featured ? 'primary' : 'ghost'}>
                {plan.cta}
              </Button>
              <ul>
                {plan.features.map((feature) => (
                  <li key={feature}>
                    <Check size={15} aria-hidden="true" />
                    {feature}
                  </li>
                ))}
              </ul>
            </article>
          ))}
        </div>
      </Section>
      <Section className="alternate">
        <div className="split-layout grid grid-cols-12 gap-[48px] items-center">
          <SectionHeading label="SIMPLE BY DESIGN" title="What counts as a document?" />
          <div className="prose">
            <p>
              One PDF, one DOCX, one LaTeX project, or one repository snapshot. A 400-page thesis
              counts once. Re-running the same corpus after you&apos;ve added new material only
              charges for what&apos;s new.
            </p>
            <Button href="/faq" variant="ghost">
              More questions, answered
            </Button>
          </div>
        </div>
      </Section>
    </>
  );
}
