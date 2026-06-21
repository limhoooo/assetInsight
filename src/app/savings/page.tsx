import type { Metadata } from 'next';
import SavingsClient from '@/components/tax/SavingsClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '정기예금/적금 계산기 - 세후 이자 자동 계산 | 자산인사이트',
  description: '정기예금과 정기적금의 세전·세후 이자를 무료로 계산하세요. 이자소득세(15.4%), 세금우대(9.5%), 비과세 선택 가능. 단리·월복리 자동 계산.',
  keywords: ['정기예금 계산기', '정기적금 계산기', '예금 이자 계산', '적금 만기 수령액', '이자소득세 계산', '세후 이자 계산기', '예금 금리 계산기'],
  alternates: { canonical: `${BASE_URL}/savings` },
  openGraph: {
    title: '정기예금/적금 계산기 | 자산인사이트',
    description: '정기예금·적금 세후 이자 무료 계산. 이자소득세 15.4% 자동 적용.',
    type: 'website', url: `${BASE_URL}/savings`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '정기예금/적금 계산기 | 자산인사이트',
  url: `${BASE_URL}/savings`,
  description: '정기예금·적금 세전·세후 이자 자동 계산. 이자소득세, 세금우대, 비과세 선택.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function SavingsPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <SavingsClient />
    </>
  );
}
