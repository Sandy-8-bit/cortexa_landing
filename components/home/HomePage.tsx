import { Button, Section, SectionHeading, FeatureGrid, FinalCta } from '@/components/ui/Primitives';
import { InputOutputStrip } from './InputOutputStrip';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';
import { ResearchSection } from './ResearchSection';
import { TrustStrip } from './TrustStrip';
import { DemoVideo } from './DemoVideo';
import { Verdict } from '@/components/visuals/Verdict';
import { HeroSection } from './HeroSection';
import { PipelineSection } from './PipelineSection';
import { EnginePanels } from './EnginePanels';
import { OpportunityMap } from './OpportunityMap';
import { personas } from '@/data/content';
export function HomePage() {
  return (
    <>
      <HeroSection />
      <InputOutputStrip />
      <ResearchSection />
      <TrustStrip />
      <DemoVideo />
      <PipelineSection />
      <Section className="alternate">
        <SectionHeading
          label="03 / TWO ENGINES. ONE CORPUS."
          title="Look at what you've built. Then at what comes next."
          description="Harvest looks backward at what you've already built. Seed looks forward at what it could become."
        />
        <div className="engine-drawing">
          <DrawingSheet kind="seed" />
        </div>
        <EnginePanels />
      </Section>
      <Section>
        <SectionHeading
          label="04 / EVIDENCE, NOT GUESSWORK"
          title="A score you can argue with."
          description="Every axis carries its own evidence, and every piece of evidence points back to a source you can open."
        />
        <Verdict />
        <div className="mt-10">
          <Button href="/evidence" variant="ghost">
            Follow the evidence
          </Button>
        </div>
      </Section>
      <Section>
        <SectionHeading
          label="05 / FROM RESEARCH TO DIRECTION"
          title="See every opportunity at once."
        />
        <p className="sample-caption">Sample corpus: materials science lab</p>
        <OpportunityMap />
      </Section>
      <Section>
        <SectionHeading
          label="06 / BUILT FOR YOUR TEAM"
          title="Built for people who turn research into what's next."
        />
        <FeatureGrid items={personas} />
      </Section>
      <FinalCta />
    </>
  );
}
