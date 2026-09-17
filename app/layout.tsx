import { Poppins } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PageAnimations } from '@/components/animations/PageAnimations';
import { pageMetadata } from '@/lib/metadata';
import './globals.css';
const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600'],
  display: 'swap',
});
export const metadata = pageMetadata(
  'Home',
  'Find the inventions hiding inside your research. Evidence-first invention discovery for research teams, patent teams, and agencies.',
  '/',
);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <a className="skip-link" href="#main-content">
          Skip to content
        </a>
        <SiteHeader />
        <PageAnimations>
          <main id="main-content">{children}</main>
        </PageAnimations>
        <SiteFooter />
      </body>
    </html>
  );
}
