'use client';

import { useRef, type ReactNode } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';

gsap.registerPlugin(ScrollTrigger, useGSAP);

export function HowScrollAnimations({ children }: { children: ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);

  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        scope.current?.querySelectorAll<HTMLElement>('.how-stage').forEach((stage) => {
          const copy = stage.querySelector('[data-stage-copy]');
          const visual = stage.querySelector('[data-stage-visual]');
          const progress = stage.querySelector('[data-stage-progress]');
          if (!copy || !visual || !progress) return;

          gsap
            .timeline({
              defaults: { ease: 'power3.out', duration: 0.8 },
              scrollTrigger: { trigger: stage, start: 'top 85%', once: true },
            })
            .from(copy.children, {
              y: 28,
              opacity: 0,
              stagger: 0.12,
              clearProps: 'transform,opacity',
            })
            .from(visual, { y: 40, scale: 0.96, opacity: 0, clearProps: 'transform,opacity' }, 0.15)
            .from(
              visual.querySelectorAll('[data-process-content] > *'),
              {
                y: 12,
                opacity: 0,
                stagger: 0.09,
                duration: 0.5,
                clearProps: 'transform,opacity',
              },
              0.4,
            );

          gsap.fromTo(
            progress,
            { scaleX: 0 },
            {
              scaleX: 1,
              ease: 'none',
              scrollTrigger: { trigger: stage, start: 'top 80%', end: 'bottom 35%', scrub: 0.5 },
            },
          );
        });
      });
      return () => media.revert();
    },
    { scope },
  );

  return (
    <div ref={scope} className="how-stages">
      {children}
    </div>
  );
}
