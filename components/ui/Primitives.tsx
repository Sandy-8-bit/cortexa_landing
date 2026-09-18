import Link from 'next/link';
import { ArrowUpRight } from 'lucide-react';
import type { ReactNode } from 'react';

export function PageContainer({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={`container ${className}`}>{children}</div>;
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
export function TechnicalLabel({ children }: { children: ReactNode }) {
  return <p className="technical-label">{children}</p>;
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
      <ArrowUpRight size={16} aria-hidden="true" />
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
    <section className="page-intro grid-texture">
      <PageContainer>
        <TechnicalLabel>
          <span className="status-dot" />
          {label}
        </TechnicalLabel>
        <h1 data-reveal>{title}</h1>
        {description && (
          <p className="intro-description" data-reveal>
            {description}
          </p>
        )}
        {children && <div className="actions">{children}</div>}
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
  return (
    <div className="section-heading" data-reveal>
      {label && <TechnicalLabel>{label}</TechnicalLabel>}
      <h2>{title}</h2>
      {description && <p>{description}</p>}
    </div>
  );
}
export function FeatureGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="feature-grid">
      {items.map((item, index) => (
        <article className="feature-card" key={item.title} data-reveal>
          <span className="feature-number">{String(index + 1).padStart(2, '0')} /</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
        </article>
      ))}
    </div>
  );
}
export function FinalCta({
  title = 'Your next patent may already be in your research.',
  label = 'Start with Cortexa',
}: {
  title?: string;
  label?: string;
}) {
  return (
    <Section className="final-cta grid-texture">
      <TechnicalLabel>THE NEXT CHAPTER</TechnicalLabel>
      <h2 data-reveal>{title}</h2>
      <div className="actions">
        <Button href="/contact">{label}</Button>
        <Button href="/how-it-works" variant="ghost">
          See how it works
        </Button>
      </div>
    </Section>
  );
}
