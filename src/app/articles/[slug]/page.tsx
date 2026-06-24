import type { Metadata } from 'next';
import { notFound } from 'next/navigation';
import { ARTICLES, getArticle, categoryColor } from '@/lib/articles';
import Header from '@/components/Header';
import LoanRepaymentComparison from './content/LoanRepaymentComparison';
import CompoundInterest72Rule from './content/CompoundInterest72Rule';
import RealEstateTaxChecklist from './content/RealEstateTaxChecklist';
import SavingsVsDeposit from './content/SavingsVsDeposit';
import OverseasStockTaxGuide from './content/OverseasStockTaxGuide';
import JongbuTaxGuide from './content/JongbuTaxGuide';
import SamsungStockAnalysis from './content/SamsungStockAnalysis';
import SkhynixHbmAiInvestment from './content/SkhynixHbmAiInvestment';
import MicronTechnologyInvestment from './content/MicronTechnologyInvestment';
import SemiconductorCycleStrategy from './content/SemiconductorCycleStrategy';
import SemiconductorEtfGuide from './content/SemiconductorEtfGuide';
import PensionIrpTaxDeduction from './content/PensionIrpTaxDeduction';
import IsaAccountGuide from './content/IsaAccountGuide';
import DividendStockInvestment from './content/DividendStockInvestment';
import TsmcInvestmentAnalysis from './content/TsmcInvestmentAnalysis';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export function generateStaticParams() {
  return ARTICLES.map((a) => ({ slug: a.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) return {};
  return {
    title: `${article.title} | 자산인사이트`,
    description: article.description,
    keywords: article.keywords,
    alternates: { canonical: `${BASE_URL}/articles/${slug}` },
    openGraph: {
      title: article.title,
      description: article.description,
      type: 'article',
      publishedTime: article.publishedAt,
      locale: 'ko_KR',
      url: `${BASE_URL}/articles/${slug}`,
      siteName: '자산인사이트',
      authors: ['자산인사이트'],
    },
    twitter: {
      card: 'summary',
      title: article.title,
      description: article.description,
    },
    robots: { index: true, follow: true },
  };
}

const CONTENT_MAP: Record<string, React.ReactNode> = {
  'loan-repayment-comparison': <LoanRepaymentComparison />,
  'compound-interest-72-rule': <CompoundInterest72Rule />,
  'realestate-tax-checklist': <RealEstateTaxChecklist />,
  'savings-vs-deposit': <SavingsVsDeposit />,
  'overseas-stock-tax-guide': <OverseasStockTaxGuide />,
  'jongbu-tax-guide': <JongbuTaxGuide />,
  'samsung-electronics-stock-analysis': <SamsungStockAnalysis />,
  'skhynix-hbm-ai-investment': <SkhynixHbmAiInvestment />,
  'micron-technology-investment': <MicronTechnologyInvestment />,
  'semiconductor-cycle-strategy': <SemiconductorCycleStrategy />,
  'semiconductor-etf-guide': <SemiconductorEtfGuide />,
  'pension-irp-tax-deduction': <PensionIrpTaxDeduction />,
  'isa-account-guide': <IsaAccountGuide />,
  'dividend-stock-investment': <DividendStockInvestment />,
  'tsmc-investment-analysis': <TsmcInvestmentAnalysis />,
};

export default async function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);
  if (!article) notFound();

  const content = CONTENT_MAP[slug];
  if (!content) notFound();

  const navLinks = [
    { href: '/articles', label: '아티클 목록' },
    ...(article.relatedCalc
      ? [{ href: article.relatedCalc.href, label: article.relatedCalc.label }]
      : []),
    { href: '/faq', label: 'FAQ' },
  ];

  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: article.title,
    description: article.description,
    keywords: article.keywords.join(', '),
    articleSection: article.category,
    url: `${BASE_URL}/articles/${slug}`,
    datePublished: article.publishedAt,
    dateModified: article.publishedAt,
    inLanguage: 'ko-KR',
    author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
    publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
    mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/articles/${slug}` },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        subtitle={`${article.category} 가이드`}
        description={article.title}
        navLinks={navLinks}
      />
      <main className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '8px', marginBottom: '16px' }}>
          <span
            className="article-category-badge"
            style={{ background: categoryColor(article.category) }}
          >
            {article.category}
          </span>
          <span style={{ fontSize: '12px', color: 'var(--text-muted)' }}>{article.publishedAt}</span>
        </div>

        {content}
      </main>
    </>
  );
}
