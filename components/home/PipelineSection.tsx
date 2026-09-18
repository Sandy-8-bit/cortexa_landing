'use client';
import { useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
import { pipeline } from '@/data/pipeline';
import { Section, SectionHeading, TechnicalLabel } from '@/components/ui/Primitives';
import { PipelineVisual } from '@/components/visuals/ResearchVisual';
gsap.registerPlugin(ScrollTrigger, useGSAP);
export function PipelineSection() {
  const [active, setActive] = useState(0);
  const scope = useRef<HTMLDivElement>(null);
  useGSAP(
    () => {
      pipeline.forEach((_, i) => {
        ScrollTrigger.create({
          trigger: `#pass-${i}`,
          start: 'top center',
          end: 'bottom center',
          onEnter: () => setActive(i),
          onEnterBack: () => setActive(i),
        });
      });
    },
    { scope },
  );
  return (
    <Section>
      <SectionHeading
        label="02 / THE PROCESS"
        title="Cortexa looks deeper."
        description="Four passes over the same material, each one asking a harder question."
      />
      <div className="pipeline-layout grid grid-cols-12 gap-[28px] [align-items:start]" ref={scope}>
        <nav className="pipeline-nav [grid-column:1/4] sticky top-[112px] pr-[50px]" aria-label="Research passes">
          {pipeline.map((stage, i) => (
            <a
              href={`#pass-${i}`}
              key={stage.name}
              aria-current={i === active ? 'step' : undefined}
            >
              <span>0{i + 1}</span>
              {stage.name}
              <span className="ml-auto">↗</span>
            </a>
          ))}
        </nav>
        <div>
          {pipeline.map((stage, i) => (
            <article className="pipeline-stage [padding:0_0_58px] mb-[58px] [border-bottom:1px_solid_var(--line)] [scroll-margin-top:105px]" id={`pass-${i}`} key={stage.name}>
              <TechnicalLabel>
                PASS 0{i + 1} · {stage.name}
              </TechnicalLabel>
              <h3>{stage.title}</h3>
              <p>{stage.description}</p>
              <PipelineVisual stage={i} />
              <div className="pipeline-output technical-label font-sans text-[11px] leading-[1.5] tracking-[0.02em] uppercase text-(--muted) font-medium max-w-[690px]">OUTPUT · {stage.output}</div>
            </article>
          ))}
        </div>
      </div>
    </Section>
  );
}
