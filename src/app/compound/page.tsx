import type { Metadata } from 'next';
import CompoundClient from '@/components/tax/CompoundClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '복리 계산기 - 투자 미래가치·현재가치 계산 | 자산인사이트',
  description: '복리 계산기로 투자 원금의 미래가치와 목표금액 달성을 위한 필요 원금을 계산하세요. 연복리·월복리·분기복리, 단리 대비 복리 효과 비교, 연도별 수익 테이블 제공.',
  keywords: ['복리 계산기', '복리 미래가치 계산', '투자 복리 계산', '목표금액 역산', '현재가치 계산', '복리 효과', '연복리 계산기', '월복리 계산기'],
  alternates: { canonical: `${BASE_URL}/compound` },
  openGraph: {
    title: '복리 계산기 | 자산인사이트',
    description: '투자 미래가치·현재가치 무료 계산. 연복리·월복리·분기복리 선택, 단리 대비 복리 효과 비교.',
    type: 'website', url: `${BASE_URL}/compound`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '복리 계산기 | 자산인사이트',
  url: `${BASE_URL}/compound`,
  description: '복리 미래가치 및 현재가치 역산 계산기. 연복리·월복리·분기복리 지원.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function CompoundPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('compound')) }}
      />
      <CompoundClient>
        <CalcContent calcKey="compound" />
      </CompoundClient>
    </>
  );
}
