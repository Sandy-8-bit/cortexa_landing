import { PageIntro, Section, SectionHeading, FinalCta } from '@/components/ui/Primitives';
import { EvidenceGraph } from './EvidenceGraph';
export function EvidencePage() {
  return (
    <>
      <PageIntro
        label="Evidence"
        title="Don't just get an answer. Trace it."
        description="Select any node to open the record behind it."
      />
      <Section className="first-section">
        <EvidenceGraph />
      </Section>
      {/* <Section>
        <SectionHeading
          title="The verdict is never isolated."
          description="Every conclusion connects to evidence. Every piece of evidence traces to a source. Every source is verifiable, dated, and yours to check. That's the whole point — an analysis you can argue with is worth more than one you have to believe."
        />
      </Section> */}
      <FinalCta />
    </>
  );
}
