import type { Metadata } from 'next';
import HomeClient from '@/components/HomeClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://avgdown-calculator.pages.dev';

export const metadata: Metadata = {
  title: '물타기 계산기 - 주식 평균단가 계산기',
  description: '주식 물타기 시뮬레이션, 목표 평균단가 역산, 손익 현황을 계산하는 무료 계산기. 원화(KRW)와 달러(USD)를 모두 지원하며 실시간 환율을 적용합니다.',
  keywords: ['물타기', '평균단가', '주식계산기', '물타기계산기', '손익계산', '미국주식', '주식투자', '주식 평균단가', 'averaging down', '평균단가 낮추기'],
  alternates: { canonical: BASE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '물타기 계산기',
  url: BASE_URL,
  description: '주식 물타기 시뮬레이션, 목표 평균단가 역산, 손익 현황을 계산하는 무료 계산기. 원화(KRW)와 달러(USD)를 모두 지원하며 실시간 환율을 적용합니다.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: {
    '@type': 'Offer',
    price: '0',
    priceCurrency: 'KRW',
  },
  featureList: [
    '물타기 시뮬레이션',
    '목표단가 역산',
    '손익 현황',
    '달러(USD) 모드',
    '실시간 환율 적용',
    '포트폴리오 저장',
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <HomeClient />
    </>
  );
}
