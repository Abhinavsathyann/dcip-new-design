import { MetadataRoute } from 'next';
import { siteConfig } from '@/config/site';
import { NEWS_ITEMS } from '@/data/news';

export default function sitemap(): MetadataRoute.Sitemap {
  const routes = [
    '',
    '/about',
    '/programme',
    '/news',
    '/gallery',
    '/apply',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${siteConfig.url}${route}`,
    lastModified: new Date().toISOString().split('T')[0],
    changeFrequency: 'weekly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  const newsRoutes = NEWS_ITEMS.map((item) => ({
    url: `${siteConfig.url}/news/${item.slug}`,
    lastModified: item.publishedDate,
    changeFrequency: 'monthly' as const,
    priority: 0.6,
  }));

  return [...routes, ...newsRoutes];
}