import {
  PageIntro,
  Section,
  SectionHeading,
  FeatureGrid,
  FinalCta,
  Button,
} from '@/components/ui/Primitives';
import { agencyFeatures, matterLifecycle } from '@/data/agencyMatters';
import { AgencyDocket } from './AgencyDocket';
export function AgenciesPage() {
  return (
    <>
      <PageIntro
        label="For patent agencies & IP firms"
        title="Run discovery for every client from one desk."
        description="Separate workspaces per client, a shared docket across all of them, and usage that rolls straight into what you bill. Cortexa does the first pass; your agents spend their hours on the filings worth drafting."
      >
        <Button href="/contact">Request agency access</Button>
        <Button href="/pricing" variant="ghost">
          See agency pricing
        </Button>
      </PageIntro>
      <Section className="first-section">
        <AgencyDocket />
      </Section>
      <Section>
        <SectionHeading
          label="BUILT AROUND YOUR PRACTICE"
          title="Your clients. Your process. Your name."
        />
        <FeatureGrid items={agencyFeatures} />
      </Section>
      <Section className="alternate">
        <SectionHeading title="How a matter moves through the firm" />
        <ol className="lifecycle grid grid-cols-5 gap-[28px]">
          {matterLifecycle.map((stage, i) => (
            <li key={stage.title} data-reveal>
              <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">0{i + 1}</span>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
            </li>
          ))}
        </ol>
      </Section>
      <FinalCta
        title="Bring one client's back catalogue. We'll run it before you sign anything."
        label="Request agency access"
      />
    </>
  );
}
