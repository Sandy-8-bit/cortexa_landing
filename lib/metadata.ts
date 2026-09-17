import type { Metadata } from 'next';
export const siteUrl = process.env.NEXT_PUBLIC_SITE_URL || 'https://cortexa.co';
export function pageMetadata(title: string, description: string, path: string): Metadata {
  const fullTitle =
    path === '/' ? 'Cortexa — Your research has more to say.' : `${title} — Cortexa`;
  return {
    title: fullTitle,
    description,
    metadataBase: new URL(siteUrl),
    alternates: { canonical: path },
    openGraph: {
      title: fullTitle,
      description,
      url: path,
      siteName: 'Cortexa',
      type: 'website',
      images: [
        {
          url: '/opengraph-image',
          width: 1200,
          height: 630,
          alt: 'Cortexa — Your research has more to say.',
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: fullTitle,
      description,
      images: ['/opengraph-image'],
    },
    robots: { index: true, follow: true },
  };
}
