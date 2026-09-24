import Link from 'next/link';
import { ArrowDown, ArrowUpRight } from 'lucide-react';
import { Button, PageContainer, TechnicalLabel } from '@/components/ui/Primitives';
import { ResearchVisual } from '@/components/visuals/ResearchVisual';
import { pipeline } from '@/data/pipeline';

export function HeroSection() {
  return (
    <section className="hero relative isolate overflow-hidden">
      <div className="hero-atmosphere absolute inset-0 z-0 overflow-hidden pointer-events-none" aria-hidden="true">
        <span className="hero-horizon absolute left-[-30%] top-[24%] w-[155%] h-[260px] [border-top:1px_solid_rgba(222,_232,_255,_0.65)] rounded-[50%] opacity-[0.6]" />
        <span className="hero-meridian absolute inset-0 opacity-[0.16]" />
      </div>
      <PageContainer>
        <div className="hero-grid grid grid-cols-12 gap-[24px] [align-items:end] min-h-[660px] [padding:150px_0_72px]">
          <div className="hero-copy [grid-column:1/9] relative z-[2]">
            <TechnicalLabel>
              <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" /> INVENTION DISCOVERY, EVIDENCE FIRST
            </TechnicalLabel>
            <h1>
              <span className="hero-line block overflow-hidden pb-[0.06em] mb-[-0.04em]">
                <span>Your research </span>
              </span>
              <span className="hero-line block overflow-hidden pb-[0.06em] mb-[-0.04em]">
                <span>has more to say.</span>
              </span>
            </h1>
            <div className="hero-description hero-support">
              <p>Find the inventions hiding inside it.</p>
              <p className="hero-detail">Upload papers, code and lab notes. Get ranked invention candidates, each backed by prior art from USPTO, EPO and arXiv.</p>
              <div className="actions flex items-center flex-wrap gap-[16px] mt-[36px]">
                <Button href="/contact">Book a demo</Button>
                <Button href="/how-it-works" variant="ghost">
                  See how it works
                </Button>
              </div>
            </div>
          </div>
          <div className="hero-visual hero-support [grid-column:9/-1] min-w-0 pb-[8px]">
            <ResearchVisual />
          </div>
        </div>
        <div className="hero-meta hero-support flex items-center justify-between gap-[20px] [padding:22px_0] text-[9px] tracking-[0.055em] text-[#969694]">
          <a href="#research">
            <ArrowDown size={14} aria-hidden="true" /> SCROLL TO DISCOVER
          </a>
          <span>PDF · DOCX · LATEX · GIT REPOS</span>
          <span>USPTO · WIPO · EPO · ARXIV</span>
        </div>
        <nav className="capability-strip grid grid-cols-4 [border-top:1px_solid_var(--line)]" aria-label="Explore the four research passes">
          {pipeline.map((stage, index) => (
            <Link href={`/how-it-works#stage-${index + 1}`} key={stage.name}>
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
