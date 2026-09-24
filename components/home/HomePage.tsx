import { Button, Section, SectionHeading, FeatureGrid, FinalCta } from '@/components/ui/Primitives';
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
      <ResearchSection />
      <TrustStrip />
      <DemoVideo />
      <PipelineSection />
      <Section className="alternate">
        <SectionHeading
          label="03 / TWO ENGINES. ONE CORPUS."
          title="Two ways to read the same work."
          description="Harvest looks backward at what you've already built. Seed looks forward at what it could become."
        />
        <EnginePanels />
      </Section>
      <Section>
        <SectionHeading
          label="04 / EVIDENCE, NOT GUESSWORK"
          title="A number isn't the whole story."
          description="Every axis carries its own evidence, and every piece of evidence points back to a source you can open."
        />
        <Verdict />
        <div className="mt-10">
          <Button href="/evidence" variant="ghost">
            Follow the evidence
          </Button>
        </div>
      </Section>
      <Section className="alternate">
        <SectionHeading
          label="05 / FROM RESEARCH TO DIRECTION"
          title="Meet your opportunity map."
        />
        <div className="sample-caption technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium mb-[22px]">SAMPLE CORPUS · MATERIALS SCIENCE LAB</div>
        <OpportunityMap />
      </Section>
      <Section>
        <SectionHeading
          label="06 / BUILT FOR YOUR TEAM"
          title="Built for people who turn research into what's next."
        />
        <FeatureGrid items={personas} />
        <div className="mt-10 border-t border-(--line) pt-8">
          <p className="technical-label">SEE THE SAMPLE WORKFLOW</p>
          <h3>From research to an evidence-backed filing discussion.</h3>
          <p>Explore a sample corpus, inspect the ranked candidates, and follow the evidence behind a recommendation.</p>
          <Button href="/product" variant="ghost">Try the sample walkthrough</Button>
        </div>
      </Section>
      <FinalCta />
    </>
  );
}
