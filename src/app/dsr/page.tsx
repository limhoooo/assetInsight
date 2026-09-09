import type { Metadata } from 'next';
import DsrClient from '@/components/tax/DsrClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: 'DSR 계산기 - 스트레스 DSR 반영 대출 한도 계산 | 자산인사이트',
  description:
    'DSR 계산기. 연소득과 기존 대출을 넣으면 스트레스 DSR 3단계를 반영한 대출 한도를 스트레스 적용 전후로 비교해 보여줍니다. 마이너스 통장 환산과 상환방식별 한도 차이까지 계산합니다.',
  keywords: ['DSR 계산기', '스트레스 DSR', '대출 한도 계산', 'DSR 40%', '주택담보대출 한도', '마이너스통장 DSR'],
  alternates: { canonical: `${BASE_URL}/dsr/` },
  openGraph: {
    title: 'DSR 계산기 | 자산인사이트',
    description: '스트레스 DSR 3단계를 반영한 대출 한도를 적용 전후로 비교합니다.',
    type: 'website', url: `${BASE_URL}/dsr/`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: 'DSR 계산기 | 자산인사이트',
  url: `${BASE_URL}/dsr/`,
  description: '스트레스 DSR 3단계를 반영한 대출 한도 계산기.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function DsrPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('dsr')) }}
      />
      <DsrClient>
        <CalcContent calcKey="dsr" />
      </DsrClient>
    </>
  );
}
