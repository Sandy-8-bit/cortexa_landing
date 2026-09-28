import { IBM_Plex_Mono, Newsreader } from 'next/font/google';
import { SiteHeader } from '@/components/layout/SiteHeader';
import { SiteFooter } from '@/components/layout/SiteFooter';
import { PageAnimations } from '@/components/animations/PageAnimations';
import { pageMetadata } from '@/lib/metadata';
import './globals.css';
import './sabari-theme.css';
const newsreader = Newsreader({
  variable: '--font-newsreader',
  subsets: ['latin'],
  display: 'swap',
});
const plexMono = IBM_Plex_Mono({
  variable: '--font-plex-mono',
  weight: ['400', '500'],
  subsets: ['latin'],
  display: 'swap',
});
export const metadata = pageMetadata(
  'Home',
  'Find the inventions hiding inside your research. Evidence-first invention discovery for research teams, patent teams, and agencies.',
  '/',
);
export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${newsreader.variable} ${plexMono.variable}`}>
      <body>
        <a
          className="skip-link fixed top-[-100px] left-[20px] bg-(--cx-white) text-(--cx-black) z-[100] p-[16px]"
          href="#main-content"
        >
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
