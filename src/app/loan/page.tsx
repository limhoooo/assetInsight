import type { Metadata } from 'next';
import LoanClient from '@/components/tax/LoanClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '대출 이자 계산기 - 원리금균등·원금균등·만기일시 | 자산인사이트',
  description: '대출 이자 계산기. 원리금균등상환·원금균등상환·만기일시상환 세 가지 방식의 월 납입금, 총 이자, 연도별 상환 스케줄을 무료로 계산하세요.',
  keywords: ['대출 이자 계산기', '원리금균등상환 계산', '원금균등상환 계산', '대출 이자 계산', '주택담보대출 이자', '대출 상환 스케줄', '월 납입금 계산기'],
  alternates: { canonical: `${BASE_URL}/loan` },
  openGraph: {
    title: '대출 이자 계산기 | 자산인사이트',
    description: '원리금균등·원금균등·만기일시 대출 이자 계산. 연도별 상환 스케줄 자동 생성.',
    type: 'website', url: `${BASE_URL}/loan`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '대출 이자 계산기 | 자산인사이트',
  url: `${BASE_URL}/loan`,
  description: '원리금균등·원금균등·만기일시 대출 이자 계산기. 월 납입금, 총 이자, 연도별 상환 스케줄 자동 산출.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function LoanPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <LoanClient />
    </>
  );
}
