import { Button, PageContainer } from '@/components/ui/Primitives';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';
export function HeroSection() {
  return (
    <section className="hero">
      <PageContainer>
        <div className="hero-title-block">
          <div>
            <p className="hero-tag">Invention discovery</p>
            <h1>
              <span className="hero-line">Your research</span>
              <span className="hero-line">
                has <em>more to say.</em>
              </span>
            </h1>
          </div>
          <div className="hero-summary">
            <p>
              Cortexa finds the inventions hidden in your papers, code and lab notes, and shows the
              evidence behind each one.
            </p>
            <div className="actions">
              <Button href="/contact">Run a corpus</Button>
              <Button href="/how-it-works" variant="ghost">
                See how it works
              </Button>
            </div>
          </div>
        </div>
        <figure className="hero-drawing">
          <DrawingSheet scan />
          <figcaption className="drawing-legend">
            <span>
              <i /> Your research
            </span>
            <span>
              <i /> What Cortexa found
            </span>
          </figcaption>
        </figure>
      </PageContainer>
    </section>
  );
}
