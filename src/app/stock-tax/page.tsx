import type { Metadata } from 'next';
import StockTaxClient from '@/components/tax/StockTaxClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '해외주식 양도소득세 계산기 - 미국주식 세금 계산 | 자산인사이트',
  description: '미국·유럽 등 해외주식 양도소득세를 무료로 계산하세요. 연간 기본공제 250만원 자동 적용, 22% 세율(소득세 20%+지방소득세 2%) 즉시 산출. 손익 통산도 고려한 정확한 계산.',
  keywords: ['해외주식 양도소득세', '미국주식 양도세', '해외주식 세금 계산기', '해외주식 양도세 계산', '미국주식 세금', '해외주식 250만원 공제', '해외주식 양도소득세 신고', '주식 양도세 계산기'],
  alternates: { canonical: `${BASE_URL}/stock-tax/` },
  openGraph: {
    title: '해외주식 양도소득세 계산기 | 자산인사이트',
    description: '미국·유럽 해외주식 양도소득세 무료 계산. 기본공제 250만원 · 22% 세율 자동 적용.',
    type: 'website', url: `${BASE_URL}/stock-tax`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '해외주식 양도소득세 계산기 | 자산인사이트',
  url: `${BASE_URL}/stock-tax`,
  description: '해외주식 양도소득세 계산기. 기본공제 250만원 자동 적용, 22% 세율 계산.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function StockTaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('stock-tax')) }}
      />
      <StockTaxClient>
        <CalcContent calcKey="stock-tax" />
      </StockTaxClient>
    </>
  );
}
