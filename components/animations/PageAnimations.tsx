'use client';
import { useRef } from 'react';
import { usePathname } from 'next/navigation';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useGSAP } from '@gsap/react';
gsap.registerPlugin(ScrollTrigger, useGSAP);

export function PageAnimations({ children }: { children: React.ReactNode }) {
  const scope = useRef<HTMLDivElement>(null);
  const pathname = usePathname();
  useGSAP(
    () => {
      const media = gsap.matchMedia();
      media.add('(prefers-reduced-motion: no-preference)', () => {
        gsap.from('.hero-line > span', {
          y: 110,
          opacity: 0,
          duration: 0.95,
          stagger: 0.13,
          ease: 'power3.out',
        });
        gsap.from('.hero-support', { y: 15, opacity: 0, duration: 0.7, delay: 0.4, stagger: 0.12 });
        gsap.utils.toArray<HTMLElement>('[data-reveal]').forEach((element) => {
          gsap.from(element, {
            y: 24,
            opacity: 0,
            duration: 0.65,
            ease: 'power2.out',
            scrollTrigger: { trigger: element, start: 'top 94%', once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>('[data-bar]').forEach((element) => {
          gsap.from(element, {
            scaleX: 0,
            transformOrigin: 'left',
            duration: 1.2,
            scrollTrigger: { trigger: element, start: 'top 95%', once: true },
          });
        });
        gsap.utils.toArray<HTMLElement>('[data-counter]').forEach((element) => {
          gsap.from(element, {
            textContent: 0,
            snap: { textContent: 1 },
            duration: 1.2,
            scrollTrigger: { trigger: element, start: 'top 95%', once: true },
          });
        });
        gsap.utils.toArray<SVGPathElement>('.draw-path').forEach((path) => {
          const length = path.getTotalLength();
          gsap.fromTo(
            path,
            { strokeDasharray: length, strokeDashoffset: length },
            {
              strokeDashoffset: 0,
              duration: 1.5,
              scrollTrigger: { trigger: path, start: 'top 95%', once: true },
            },
          );
        });
      });
      return () => media.revert();
    },
    { scope, dependencies: [pathname], revertOnUpdate: true },
  );
  return <div ref={scope}>{children}</div>;
}
