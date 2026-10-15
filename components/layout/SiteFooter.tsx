import Link from 'next/link';
import { CortexaLogo } from '@/components/branding/CortexaLogo';
export function SiteFooter() {
  return (
    <footer className="site-footer pt-[88px]">
      <div className="page-container w-auto px-[var(--cx-page-padding)] mx-auto">
        {/* <div className="footer-statement">
          <p>
            Evidence first,
            <br />
            always.
          </p>
          <Link href="/contact" className="footer-contact" aria-label="Contact Cortexa">
            <ArrowUpRight strokeWidth={1} aria-hidden="true" />
          </Link>
        </div> */}
        <div className="footer-grid grid [grid-template-columns:2fr_1fr_1fr_1.2fr] gap-[40px] pb-[80px]">
          <div className="footer-brand">
            <Link href="/" aria-label="Cortexa home">
              <CortexaLogo />
            </Link>
            <p>
              Invention discovery for research teams.
              <br />
              Evidence first, always.
            </p>
            <span className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
              RESEARCH → POSSIBILITY
            </span>
          </div>
          <div>
            <h2 className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
              Product
            </h2>
            <Link href="/product">Product</Link>
            <Link href="/pricing">Pricing</Link>
          </div>
          <div>
            <h2 className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
              Company
            </h2>
            <Link href="/contact">Contact</Link>
            <Link href="/faq">FAQ</Link>
          </div>
          {/* <div>
            <h2 className="technical-label font-sans text-[11px] leading-[1.5] tracking-[0.055em] uppercase text-(--muted) font-medium">
              Sources
            </h2>
            <p>
              USPTO · EPO · WIPO
              <br />
              arXiv · Crossref · Scholar
              <br />
              GitHub · GitLab
            </p>
          </div> */}
        </div>
        <div className="footer-bottom flex justify-between flex-wrap gap-[20px] py-[27px] [border-top:1px_solid_var(--line)] text-[11px] text-(--muted)">
          <span>© 2026 Cortexa. Concept site.</span>
          <span>Cortexa is not a law firm and does not provide legal advice.</span>
          <Link href="/trust">Trust & data ↗</Link>
        </div>
      </div>
    </footer>
  );
}
