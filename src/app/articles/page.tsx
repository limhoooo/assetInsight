import type { Metadata } from 'next';
import Link from 'next/link';
import { ARTICLES, categoryColor } from '@/lib/articles';
import Header from '@/components/Header';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '투자·금융 가이드 아티클 | 자산인사이트',
  description: '대출 상환 방식 비교, 복리 투자 원리, 부동산 세금 정리 등 투자자에게 꼭 필요한 금융 정보를 알기 쉽게 설명합니다.',
  keywords: ['투자 가이드', '금융 정보', '대출 상환', '복리 투자', '부동산 세금', '재테크'],
  alternates: { canonical: `${BASE_URL}/articles/` },
};

const navLinks = [
  { href: '/',         label: '계산기 목록' },
  { href: '/faq',      label: 'FAQ' },
  { href: '/about',    label: '소개' },
];

export default function ArticlesPage() {
  const sorted = [...ARTICLES].sort((a, b) =>
    b.publishedAt.localeCompare(a.publishedAt)
  );

  return (
    <div className="articles-page">
      <Header
        subtitle="투자·금융 가이드"
        description="재테크·세금·투자 핵심 정보를 쉽고 명확하게 정리합니다"
        navLinks={navLinks}
      />
      <main className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div className="hub-article-grid">
          {sorted.map((article) => (
            <Link key={article.slug} href={`/articles/${article.slug}`} className="hub-article-card">
              <div className="hub-article-meta">
                <span
                  className="article-category-badge"
                  style={{ background: categoryColor(article.category) }}
                >
                  {article.category}
                </span>
                <span className="article-date">{article.publishedAt}</span>
              </div>
              <p className="hub-article-title">{article.title}</p>
              <p className="hub-article-desc">{article.description}</p>
              <span className="article-card-more" style={{ marginTop: '14px', fontSize: '13px', fontWeight: 700, color: 'var(--primary)' }}>자세히 보기 →</span>
            </Link>
          ))}
        </div>
      </main>
    </div>
  );
}
