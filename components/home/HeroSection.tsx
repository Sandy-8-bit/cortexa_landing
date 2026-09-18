import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button, PageContainer, TechnicalLabel } from '@/components/ui/Primitives';
import { ResearchVisual } from '@/components/visuals/ResearchVisual';
import { pipeline } from '@/data/pipeline';

export function HeroSection() {
  return (
    <section className="hero">
      <div className="hero-atmosphere" aria-hidden="true">
        <span className="hero-horizon" />
        <span className="hero-meridian" />
      </div>
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
                <span>has more to say.</span>
              </span>
            </h1>
            <div className="hero-description hero-support">
              <p>Find the inventions hiding inside it.</p>
              <div className="actions">
                <Button href="/product">Explore Cortexa</Button>
                <Link className="hero-secondary" href="/how-it-works">
                  <span>See how it works</span>
                  <span className="square-action">
                    <ArrowUpRight size={22} aria-hidden="true" />
                  </span>
                </Link>
              </div>
            </div>
          </div>
          <div className="hero-visual hero-support">
            <ResearchVisual />
          </div>
        </div>
        <div className="hero-meta hero-support">
          <a href="#research">
            <ArrowDown size={14} aria-hidden="true" /> SCROLL TO DISCOVER
          </a>
          <span>PDF · DOCX · LATEX · GIT REPOS</span>
          <span>USPTO · WIPO · EPO · ARXIV</span>
        </div>
        <nav className="capability-strip" aria-label="Explore the four research passes">
          {pipeline.map((stage, index) => (
            <Link href={`/how-it-works#stage-${index === 0 ? 1 : index + 2}`} key={stage.name}>
              <span className="capability-number">0{index + 1}</span>
              <span>{stage.name}</span>
              <ArrowUpRight size={18} aria-hidden="true" />
            </Link>
          ))}
        </nav>
      </PageContainer>
    </section>
  );
}
