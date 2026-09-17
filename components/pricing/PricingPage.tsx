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
        <div className="pricing-grid">
          {pricing.map((plan) => (
            <article className={`pricing-card ${plan.featured ? 'featured' : ''}`} key={plan.name}>
              {plan.featured && (
                <span className="plan-ribbon technical-label">FOR GROWING RESEARCH TEAMS</span>
              )}
              <h2 className="technical-label">{plan.name}</h2>
              <p className="price">
                {plan.price}
                <span>{plan.period}</span>
              </p>
              <p className="plan-description">{plan.description}</p>
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
        <div className="split-layout">
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
