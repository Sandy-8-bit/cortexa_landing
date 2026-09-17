import { ArrowDown } from 'lucide-react';
import {
  Button,
  Section,
  SectionHeading,
  PageContainer,
  TechnicalLabel,
  FeatureGrid,
  FinalCta,
} from '@/components/ui/Primitives';
import {
  ResearchVisual,
  DocumentCloud,
  TransformationVisual,
} from '@/components/visuals/ResearchVisual';
import { Verdict } from '@/components/visuals/Verdict';
import { PipelineSection } from './PipelineSection';
import { EnginePanels } from './EnginePanels';
import { OpportunityMap } from './OpportunityMap';
import { personas } from '@/data/content';

function HeroSection() {
  return (
    <section className="hero grid-texture">
      <PageContainer>
        <div className="hero-grid">
          <div className="hero-copy">
            <TechnicalLabel>
              <span className="status-dot" /> INVENTION DISCOVERY, EVIDENCE FIRST
            </TechnicalLabel>
            <h1>
              <span className="hero-line">
                <span>Your research</span>
              </span>
              <span className="hero-line">
                <span>has more</span>
              </span>
              <span className="hero-line">
                <span className="accent">to say.</span>
              </span>
            </h1>
            <p className="hero-support">Find the inventions hiding inside it.</p>
            <div className="actions hero-support">
              <Button href="/product">Explore Cortexa</Button>
              <Button href="/how-it-works" variant="ghost">
                See how it works
              </Button>
            </div>
          </div>
          <div className="hero-support">
            <ResearchVisual />
          </div>
        </div>
        <div className="hero-meta hero-support">
          <a href="#research">
            <ArrowDown size={14} /> SCROLL TO DISCOVER
          </a>
          <span>PDF · DOCX · LATEX · GIT REPOS</span>
          <span>USPTO · WIPO · EPO · ARXIV</span>
        </div>
      </PageContainer>
    </section>
  );
}
export function HomePage() {
  return (
    <>
      <HeroSection />
      <Section id="research" className="research-section">
        <div className="split-layout">
          <SectionHeading
            label="01 / THE UNTAPPED POTENTIAL"
            title="Research is everywhere."
            description="Your papers. Your code. Your half-finished notebooks and last year's grant report. Every one of them is a source of invention — and none of them are labelled that way."
          />
          <DocumentCloud />
        </div>
      </Section>
      <Section className="transformation-section">
        <SectionHeading
          title="Upload your research. Cortexa listens. See what emerges."
          description="Documents go in. Invention candidates come out — each one attached to the evidence that earned it a place on the list."
        />
        <TransformationVisual />
      </Section>
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
        <div className="sample-caption technical-label">SAMPLE CORPUS · MATERIALS SCIENCE LAB</div>
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
