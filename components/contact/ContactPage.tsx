import Link from 'next/link';
import { ShieldCheck, FileText, ArrowUpRight } from 'lucide-react';
import { PageIntro, Section } from '@/components/ui/Primitives';
import { ContactForm } from './ContactForm';
export function ContactPage() {
  return (
    <>
      <PageIntro
        label="Get started"
        title="Bring one corpus. We'll show you what's in it."
        description="Send us a folder — a thesis, a year of lab reports, a repository — and we'll run Harvest on it and walk you through the evidence trail."
      />
      <Section className="first-section">
        <div className="contact-layout grid [grid-template-columns:1fr_1.65fr] gap-[8vw] [align-items:start]">
          <aside>
            <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">FROM YOUR WORK, TO WHAT’S NEXT</span>
            <h2>Start with what you already have.</h2>
            <p>You don&apos;t need a patent strategy to begin. Just the research.</p>
            <Link className="contact-link flex items-center gap-[16px] min-h-[70px] [border-top:1px_solid_var(--line)] text-[14px]" href="/how-it-works">
              <FileText size={18} />
              How it works
              <ArrowUpRight size={16} />
            </Link>
            <Link className="contact-link flex items-center gap-[16px] min-h-[70px] [border-top:1px_solid_var(--line)] text-[14px]" href="/trust">
              <ShieldCheck size={18} />
              Data handling notes
              <ArrowUpRight size={16} />
            </Link>
          </aside>
          <ContactForm />
        </div>
      </Section>
    </>
  );
}
