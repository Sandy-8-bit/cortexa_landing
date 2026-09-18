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
  return <div className={`page-container w-auto max-w-[1800px] px-[var(--cx-page-padding)] mx-auto ${className}`}>{children}</div>;
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
  return <p className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">{children}</p>;
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
    <Link href={href} className={`button min-h-[60px] inline-flex items-center justify-between gap-[35px] [padding:18px_26px] [border:1px_solid_var(--ink)] rounded-none text-[14px] font-medium leading-[1.4] ${variant} ${size === 'sm' ? 'small' : ''} ${className}`}>
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
    <section className="page-intro grid-texture [padding-block:90px_96px] [border-bottom:1px_solid_var(--line)]">
      <PageContainer>
        <TechnicalLabel>
          <span className="status-dot inline-block w-[5px] h-[5px] mr-[8px] [background:currentColor] rounded-[50%] align-middle" />
          {label}
        </TechnicalLabel>
        <h1 data-reveal>{title}</h1>
        {description && (
          <p className="intro-description text-[19px] max-w-[740px] mt-[10px]" data-reveal>
            {description}
          </p>
        )}
        {children && <div className="actions flex items-center flex-wrap gap-[16px] mt-[36px]">{children}</div>}
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
<div
  className="section-heading  gap-x-[28px] gap-y-[28px] mb-[64px]"
  data-reveal
>
  {label && <TechnicalLabel>{label}</TechnicalLabel>}

<div className="flex w-full flex-col gap-3">

    <h2 className="col-span-8">{title}</h2>

  {description && (
    <p className="col-span-4 col-start-1">{description}</p>
  )}
</div>
</div>
  );
}
export function FeatureGrid({ items }: { items: { title: string; description: string }[] }) {
  return (
    <div className="feature-grid grid [grid-template-columns:1.2fr_1fr_1fr] gap-[14px]">
      {items.map((item, index) => (
        <article className="feature-card flex flex-col min-h-[380px] min-w-0 p-[32px] bg-(--surface) [border:1px_solid_var(--line)]" key={item.title} data-reveal>
          <span className="feature-number text-[11px] mb-[58px]">{String(index + 1).padStart(2, '0')} /</span>
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
      <div className="actions flex items-center flex-wrap gap-[16px] mt-[36px]">
        <Button href="/contact">{label}</Button>
        <Button href="/how-it-works" variant="ghost">
          See how it works
        </Button>
      </div>
    </Section>
  );
}
