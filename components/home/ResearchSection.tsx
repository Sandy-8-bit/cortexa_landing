import { Button, Section } from '@/components/ui/Primitives';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';
export function ResearchSection() {
  return (
    <Section id="research" className="research-sheet drawing-paper">
      <figure className="research-building">
        <DrawingSheet kind="lab" />
        <figcaption className="figure-caption">
          Fig. 02 — A section through the work you already have.
        </figcaption>
      </figure>
      <div className="drawing-title-block">
        <h2>Every lab is sitting on inventions. None of them are labelled.</h2>
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
