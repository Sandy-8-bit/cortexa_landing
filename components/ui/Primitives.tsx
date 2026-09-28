import Link from 'next/link';
import { FlaskConical, ScanSearch, FolderLock, Building2 } from 'lucide-react';
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
  return clean.charAt(0).toUpperCase() + clean.slice(1).toLowerCase();
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
        <div className="sheet-registration">
          <span>Cortexa / {label}</span>
          <span>Invention discovery</span>
        </div>
        <div className="intro-sheet">
          <div className="intro-copy">
            <h1>{title}</h1>
            {description && <p className="intro-description">{description}</p>}
            {children && <div className="actions">{children}</div>}
          </div>
          <figure className="intro-drawing">
            <DrawingSheet kind={drawingForPage(label)} />
            <figcaption className="figure-caption">A study in {label.toLowerCase()}.</figcaption>
          </figure>
        </div>
      </PageContainer>
    </section>
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
  const number = label?.match(/^(\d+)\s*\//)?.[1];
  return (
    <div className="section-heading">
      <h2>{title}</h2>
      {description && <p>{description}</p>}
      {label && (
        <p className="figure-caption">
          {number ? `Fig. ${number} — ` : ''}
          {captionCase(label)}
        </p>
      )}
    </div>
  );
}
export function FeatureGrid({ items }: { items: { title: string; description: string }[] }) {
  const icons = [FlaskConical, ScanSearch, FolderLock, Building2];
  return (
    <div className={`feature-grid ${items.length === 4 ? 'feature-grid-four' : ''}`}>
      {items.map((item, index) => {
        const Icon = icons[index % icons.length];
        return (
          <article className="feature-card" key={item.title}>
            <div className="feature-drawing" aria-hidden="true">
              <Icon size={64} strokeWidth={0.8} />
              <i />
            </div>
            <h3>{item.title}</h3>
            <p>{item.description}</p>
          </article>
        );
      })}
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
      <p className="figure-caption">The next chapter starts with the work you already have.</p>
    </Section>
  );
}
