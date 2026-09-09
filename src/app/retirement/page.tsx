import type { Metadata } from 'next';
import RetirementTaxClient from '@/components/tax/RetirementTaxClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '퇴직금·퇴직소득세 계산기 - 근속연수공제 환산급여 자동 계산 | 자산인사이트',
  description:
    '퇴직금과 퇴직소득세를 한 번에 계산합니다. 근속연수공제, 환산급여, 환산급여공제, 연분연승 5단계 산식을 그대로 적용해 세후 실수령액과 실효세율까지 보여줍니다.',
  keywords: ['퇴직소득세 계산기', '퇴직금 계산기', '근속연수공제', '환산급여', '퇴직금 세금', 'IRP 퇴직금 이체'],
  alternates: { canonical: `${BASE_URL}/retirement/` },
  openGraph: {
    title: '퇴직금·퇴직소득세 계산기 | 자산인사이트',
    description: '근속연수공제·환산급여공제·연분연승 5단계 산식으로 세후 퇴직금을 계산합니다.',
    type: 'website', url: `${BASE_URL}/retirement/`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '퇴직금·퇴직소득세 계산기 | 자산인사이트',
  url: `${BASE_URL}/retirement/`,
  description: '퇴직금 추정과 퇴직소득세 5단계 계산을 함께 제공하는 무료 계산기.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function RetirementPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('retirement')) }}
      />
      <RetirementTaxClient>
        <CalcContent calcKey="retirement" />
      </RetirementTaxClient>
    </>
  );
}
