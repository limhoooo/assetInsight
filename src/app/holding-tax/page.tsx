import type { Metadata } from 'next';
import HoldingTaxClient from '@/components/tax/HoldingTaxClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '보유세 계산기 - 재산세·종합부동산세 자동 계산 | 자산인사이트',
  description: '부동산 보유세(재산세+종합부동산세)를 무료로 계산하세요. 공시가격 입력 시 재산세·지방교육세·도시지역분·종부세·농어촌특별세 자동 산출. 1세대1주택 12억 공제 적용.',
  keywords: ['보유세 계산기', '재산세 계산기', '종합부동산세 계산기', '종부세 계산', '재산세 계산', '부동산 보유세', '공시가격 재산세', '1세대1주택 종부세'],
  alternates: { canonical: `${BASE_URL}/holding-tax` },
  openGraph: {
    title: '보유세 계산기 | 자산인사이트',
    description: '재산세+종합부동산세 자동 계산. 공시가격 입력 시 총 보유세 즉시 산출.',
    type: 'website', url: `${BASE_URL}/holding-tax`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '보유세 계산기 | 자산인사이트',
  url: `${BASE_URL}/holding-tax`,
  description: '재산세·종합부동산세 자동 계산기. 공시가격 기준 총 보유세 산출.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function HoldingTaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <HoldingTaxClient />
    </>
  );
}
