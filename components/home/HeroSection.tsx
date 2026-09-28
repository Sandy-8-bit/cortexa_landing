import { Button, PageContainer } from '@/components/ui/Primitives';
import { DrawingSheet } from '@/components/visuals/DrawingSheet';
export function HeroSection() {
  return (
    <section className="hero drawing-paper">
      <PageContainer>
        <div className="sheet-registration">
          <span>Cortexa / Invention discovery</span>
          <span>Research → possibility</span>
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
        <div className="hero-title-block">
          <div>
            <h1>
              <span className="hero-line">Your research</span>
              <span className="hero-line">has more to say.</span>
            </h1>
            <p className="figure-caption">Fig. 01 — Invention, hiding in plain sight.</p>
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
      </PageContainer>
    </section>
  );
}
