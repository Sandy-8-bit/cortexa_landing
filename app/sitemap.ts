import type { MetadataRoute } from 'next';
import { routes } from '@/data/navigation';
import { siteUrl } from '@/lib/metadata';
export default function sitemap(): MetadataRoute.Sitemap {
  return routes.map((path) => ({
    url: new URL(path, siteUrl).href,
    changeFrequency: 'monthly',
    priority: path === '/' ? 1 : 0.8,
  }));
}
