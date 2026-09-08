import type { Metadata } from 'next';
import RealEstateTaxClient from '@/components/tax/RealEstateTaxClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '부동산 양도소득세 계산기 - 아파트·토지 양도세 계산 | 자산인사이트',
  description: '부동산 양도소득세를 무료로 계산하세요. 1세대1주택 비과세(12억), 장기보유특별공제(최대 80%), 단기세율(1·2년 미만), 누진세율 자동 적용. 아파트·토지·건물 모두 지원.',
  keywords: ['부동산 양도소득세', '양도세 계산기', '아파트 양도소득세', '부동산 양도세 계산', '장기보유특별공제', '1세대1주택 비과세', '양도소득세 누진세율', '부동산 세금 계산기'],
  alternates: { canonical: `${BASE_URL}/realestate-tax` },
  openGraph: {
    title: '부동산 양도소득세 계산기 | 자산인사이트',
    description: '부동산 양도소득세 무료 계산. 1세대1주택 비과세 · 장기보유특별공제 · 누진세율 자동 적용.',
    type: 'website', url: `${BASE_URL}/realestate-tax`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '부동산 양도소득세 계산기 | 자산인사이트',
  url: `${BASE_URL}/realestate-tax`,
  description: '부동산 양도소득세 계산기. 장기보유특별공제, 1세대1주택 비과세, 누진세율 자동 적용.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function RealEstateTaxPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('realestate-tax')) }}
      />
      <RealEstateTaxClient>
        <CalcContent calcKey="realestate-tax" />
      </RealEstateTaxClient>
    </>
  );
}
