import {
  PageIntro,
  Section,
  SectionHeading,
  FeatureGrid,
  FinalCta,
} from '@/components/ui/Primitives';
import { EnginePanels } from '@/components/home/EnginePanels';
import { engineUseCases } from '@/data/content';
import { LatticeVisual } from '@/components/visuals/ResearchVisual';
export function EnginesPage() {
  return (
    <>
      <PageIntro label="Engines" title="Two ways to explore your innovation." />
      <Section className="first-section">
        <EnginePanels detailed />
      </Section>
      <Section className="alternate">
        <div className="split-layout">
          <SectionHeading
            label="CONNECTED STRATEGY"
            title="A portfolio, not a list."
            description="The lattice shows how a core filing could extend into continuation, platform, and system claims."
          />
          <LatticeVisual />
        </div>
      </Section>
      <Section>
        <SectionHeading title="When to reach for which" />
        <FeatureGrid items={engineUseCases} />
      </Section>
      <FinalCta />
    </>
  );
}
