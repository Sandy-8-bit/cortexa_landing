import { PageIntro, Section, Button } from '@/components/ui/Primitives';
import { FaqAccordion } from './FaqAccordion';
export function FaqPage() {
  return (
    <>
      <PageIntro label="Questions" title="Questions worth asking first." />
      <Section className="first-section">
        <div className="faq-layout">
          <aside>
            <p className="technical-label">A LITTLE MORE CLARITY</p>
            <p>Evidence first. Including how we work.</p>
            <Button href="/contact" variant="ghost">
              Talk to us
            </Button>
          </aside>
          <FaqAccordion />
        </div>
      </Section>
    </>
  );
}
