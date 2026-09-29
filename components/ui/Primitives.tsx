import Link from 'next/link';
import type { ReactNode } from 'react';
import { DrawingSheet, drawingForPage } from '@/components/visuals/DrawingSheet';

export function PageContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`page-container ${className}`}>{children}</div>;
}
export function Section({
  children,
  className = '',
  id,
}: {
  children: ReactNode;
  className?: string;
  id?: string;
}) {
  return (
    <section id={id} className={`section ${className}`}>
      <PageContainer>{children}</PageContainer>
    </section>
  );
}
function captionCase(value: string) {
  const clean = value.replace(/^\d+\s*\/\s*/, '').trim();
  return clean
    .toLowerCase()
    .replace(/(^|[.?!]\s+)([a-z])/g, (_, start: string, letter: string) => start + letter.toUpperCase());
}
export function TechnicalLabel({ children }: { children: ReactNode }) {
  return (
    <p className="technical-label">
      {typeof children === 'string' ? captionCase(children) : children}
    </p>
  );
}
export function Button({
  children,
  href,
  className = '',
  variant = 'primary',
  size,
}: {
  children: ReactNode;
  href: string;
  className?: string;
  variant?: 'primary' | 'ghost';
  size?: 'sm';
}) {
  return (
    <Link href={href} className={`button ${variant} ${size === 'sm' ? 'small' : ''} ${className}`}>
      {children}
    </Link>
  );
}
export function PageIntro({
  label,
  title,
  description,
  children,
}: {
  label: string;
  title: string;
  description?: string;
  children?: ReactNode;
}) {
  return (
    <section className="page-intro drawing-paper">
      <PageContainer>
        <SectionIndex text={label} />
        <div className="intro-sheet">
          <div className="intro-copy">
            <h1>{title}</h1>
            {description && <p className="intro-description">{description}</p>}
            {children && <div className="actions">{children}</div>}
          </div>
          <figure className="intro-drawing">
            <DrawingSheet kind={drawingForPage(label)} />
          </figure>
        </div>
      </PageContainer>
    </section>
  );
}
/* "02 / HOW IT WORKS" renders as a numbered rule: [ 02 ] ——— How it works */
export function SectionIndex({ text }: { text: string }) {
  const number = text.match(/^(\d+)\s*\//)?.[1];
  return (
    <div className="section-index">
      {number && <span className="section-index-number">[ {number} ]</span>}
      <span className="section-index-rule" aria-hidden="true" />
      <span>{captionCase(text)}</span>
    </div>
  );
}
export function SectionHeading({
  label,
  title,
  description,
}: {
  label?: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="section-heading">
      {label && <SectionIndex text={label} />}
      <div className="section-heading-body">
        <h2>{title}</h2>
        {description && <p>{description}</p>}
      </div>
    </div>
  );
}
export function FeatureGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className={`feature-grid ${items.length === 4 ? 'feature-grid-four' : ''}`}>
      {items.map((item, index) => (
        <article className="feature-card" key={item.title}>
          <span className="feature-index">{String(index + 1).padStart(2, '0')}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
export function FinalCta({
  title = 'Your next patent may already be written.',
  label = 'Run a corpus',
}: {
  title?: string;
  label?: string;
}) {
  return (
    <Section className="final-cta">
      <div className="closing-drawing">
        <DrawingSheet />
      </div>
      <div className="closing-title-block">
        <div>
          <h2>{title}</h2>
          <p>Send one corpus. We’ll run it and walk you through what we find.</p>
        </div>
        <Button href="/contact">{label}</Button>
      </div>
    </Section>
  );
}
