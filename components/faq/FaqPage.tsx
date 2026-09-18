import { PageIntro, Section, Button } from '@/components/ui/Primitives';
import { FaqAccordion } from './FaqAccordion';
export function FaqPage() {
  return (
    <>
      <PageIntro label="Questions" title="Questions worth asking first." />
      <Section className="first-section">
        <div className="faq-layout grid [grid-template-columns:1fr_2.8fr] gap-[6vw]">
          <aside>
            <p className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">A LITTLE MORE CLARITY</p>
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
