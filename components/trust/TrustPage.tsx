import { ShieldCheck } from 'lucide-react';
import { trustFeatures, knownLimits } from '@/data/trust';
import {
  PageIntro,
  Section,
  SectionHeading,
  FeatureGrid,
  Button,
} from '@/components/ui/Primitives';
export function TrustPage() {
  return (
    <>
      <PageIntro
        label="Trust & data"
        title="Unpublished research needs a careful host."
        description="Most of what you'll upload isn't public yet. Here is exactly what happens to it."
      />
      <Section className="first-section">
        <div className="trust-banner flex items-center gap-[22px] [padding:26px_30px] [border:1px_solid_var(--line)] mb-[40px] bg-(--surface)">
          <ShieldCheck size={28} />
          <p>
            Concept site · The product policies below describe the intended service. This website
            uses sample data and does not accept research uploads.
          </p>
        </div>
        <FeatureGrid items={trustFeatures} />
      </Section>
      <Section className="alternate">
        <SectionHeading
          label="TRANSPARENCY IS PART OF THE PRODUCT"
          title="Known limits"
          description={knownLimits}
        />
        <Button href="/contact" variant="ghost">
          Talk about your requirements
        </Button>
      </Section>
    </>
  );
}
