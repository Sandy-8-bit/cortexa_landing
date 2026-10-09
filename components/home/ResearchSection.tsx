import { Button, Section } from '@/components/ui/Primitives';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';
export function ResearchSection() {
  return (
    <Section id="research" className="research-sheet">
      <figure className="research-building">
        <DrawingSheet kind="lab" />
      </figure>
      <div className="drawing-title-block">
        <h2>Not every developer is an inventor. But every lab holds inventions waiting to be discovered.</h2>
        <div>
          <p>
            Papers, notebooks, grant reports and code all hold patentable ideas. Nobody has time to
            read them that way.
          </p>
          <Button href="/product" variant="ghost">
            Explore the sample workflow
          </Button>
        </div>
      </div>
    </Section>
  );
}
