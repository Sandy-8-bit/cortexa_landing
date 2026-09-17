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
        <div className="contact-layout">
          <aside>
            <span className="technical-label">FROM YOUR WORK, TO WHAT’S NEXT</span>
            <h2>Start with what you already have.</h2>
            <p>You don&apos;t need a patent strategy to begin. Just the research.</p>
            <Link className="contact-link" href="/how-it-works">
              <FileText size={18} />
              How it works
              <ArrowUpRight size={16} />
            </Link>
            <Link className="contact-link" href="/trust">
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
