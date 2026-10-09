import { PageIntro, Section, FinalCta } from '@/components/ui/Primitives';
import { EvidenceGraph } from './EvidenceGraph';
import { EvidenceIllustration } from './EvidenceIllustration';
export function EvidencePage() {
  return (
    <>
      <PageIntro
        label="Evidence"
        illustration={<EvidenceIllustration />}
        title="Don't just get an answer. Trace it."
        description="Select any node to open the record behind it."
      />
      <Section id="candidate-01" className="first-section scroll-mt-24">
        <p className="technical-label">CANDIDATE 01 · ILLUSTRATIVE EVIDENCE</p>
        <h2>Gradient-annealed electrolyte interface</h2>
        <p>Sample score: 87/100 · Confidence: High (86%). These example records demonstrate the workflow.</p>
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
