import Link from 'next/link';
import { CortexaLogo } from '@/components/branding/CortexaLogo';
import { navigation, companyNavigation } from '@/data/navigation';
export function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <Link href="/" aria-label="Cortexa home">
              <CortexaLogo />
            </Link>
            <p>
              Invention discovery for research teams.
              <br />
              Evidence first, always.
            </p>
            <span className="technical-label">
              <span className="status-dot" /> RESEARCH → POSSIBILITY
            </span>
          </div>
          <div>
            <h2 className="technical-label">Product</h2>
            {navigation.slice(0, 4).map((item, i) => (
              <Link key={item.href} href={item.href}>
                {['Walkthrough', 'How it works', 'Harvest & Seed', 'Evidence graph'][i]}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="technical-label">Company</h2>
            {companyNavigation.map((item) => (
              <Link key={item.href} href={item.href}>
                {item.label}
              </Link>
            ))}
          </div>
          <div>
            <h2 className="technical-label">Sources</h2>
            <p>
              USPTO · EPO · WIPO
              <br />
              arXiv · Crossref · Scholar
              <br />
              GitHub · GitLab
            </p>
          </div>
        </div>
        <div className="footer-bottom">
          <span>© 2026 Cortexa. Concept site.</span>
          <span>Cortexa is not a law firm and does not provide legal advice.</span>
          <Link href="/trust">Trust & data ↗</Link>
        </div>
      </div>
    </footer>
  );
}
