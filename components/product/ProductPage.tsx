import { PageIntro, Section, FinalCta } from '@/components/ui/Primitives';
import { ProductDemo } from './ProductDemo';
export function ProductPage() {
  return (
    <>
      <PageIntro
        label="Product"
        title="Don't read about it. Run it."
        description="This is the actual sequence, with sample data from a materials-science lab. Start at upload and follow it through to export."
      />
      <Section className="first-section">
        <ProductDemo />
      </Section>
      <FinalCta />
    </>
  );
}
