import type { MetadataRoute } from 'next';
import { ARTICLES } from '@/lib/articles';

export const dynamic = 'force-static';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

/**
 * next.config.ts의 trailingSlash: true 설정 때문에 실제 페이지는 모두 슬래시로 끝난다.
 * 사이트맵 URL에도 슬래시를 붙여야 색인 시 불필요한 리다이렉트가 생기지 않는다.
 */
function url(path: string): string {
  const clean = path.replace(/^\/+|\/+$/g, '');
  return clean ? `${BASE_URL}/${clean}/` : `${BASE_URL}/`;
}

type Entry = {
  path: string;
  priority: number;
  changeFrequency: MetadataRoute.Sitemap[number]['changeFrequency'];
};

const CALCULATORS = [
  'avgdown',
  'stock-tax',
  'realestate-tax',
  'holding-tax',
  'loan',
  'compound',
  'savings',
  'acquisition-tax',
];

const STATIC_ENTRIES: Entry[] = [
  { path: '/', priority: 1, changeFrequency: 'weekly' },
  { path: '/articles', priority: 0.9, changeFrequency: 'weekly' },
  { path: '/faq', priority: 0.8, changeFrequency: 'monthly' },
  { path: '/us-stocks', priority: 0.7, changeFrequency: 'monthly' },
  { path: '/about', priority: 0.5, changeFrequency: 'monthly' },
  { path: '/contact', priority: 0.4, changeFrequency: 'yearly' },
  { path: '/terms', priority: 0.3, changeFrequency: 'yearly' },
  { path: '/privacy', priority: 0.3, changeFrequency: 'yearly' },
];

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date();

  const calculatorEntries: MetadataRoute.Sitemap = CALCULATORS.flatMap((slug) => [
    {
      url: url(`/${slug}`),
      lastModified: now,
      changeFrequency: 'weekly' as const,
      priority: 0.95,
    },
    {
      url: url(`/${slug}/guide`),
      lastModified: now,
      changeFrequency: 'monthly' as const,
      priority: 0.85,
    },
  ]);

  const articleEntries: MetadataRoute.Sitemap = ARTICLES.map((a) => ({
    url: url(`/articles/${a.slug}`),
    lastModified: new Date(a.publishedAt),
    changeFrequency: 'monthly' as const,
    priority: 0.85,
  }));

  const staticEntries: MetadataRoute.Sitemap = STATIC_ENTRIES.map((e) => ({
    url: url(e.path),
    lastModified: now,
    changeFrequency: e.changeFrequency,
    priority: e.priority,
  }));

  return [...staticEntries, ...calculatorEntries, ...articleEntries];
}
