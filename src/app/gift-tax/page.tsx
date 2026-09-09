import type { Metadata } from 'next';
import GiftTaxClient from '@/components/tax/GiftTaxClient';
import CalcContent, { calcFaqJsonLd } from '@/components/CalcContent';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '증여세 계산기 - 증여재산공제 10년 합산 자동 계산 | 자산인사이트',
  description:
    '증여세 계산기. 관계별 증여재산공제(배우자 6억, 성인자녀 5천만원)와 10년 합산 과세, 세대생략 할증, 신고세액공제 3%를 자동 적용해 납부할 증여세를 계산합니다.',
  keywords: ['증여세 계산기', '증여재산공제', '증여세 면제 한도', '증여세 세율', '10년 합산 증여', '세대생략 할증'],
  alternates: { canonical: `${BASE_URL}/gift-tax/` },
  openGraph: {
    title: '증여세 계산기 | 자산인사이트',
    description: '관계별 공제와 10년 합산 과세를 반영한 증여세 계산기.',
    type: 'website', url: `${BASE_URL}/gift-tax/`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '증여세 계산기 | 자산인사이트',
  url: `${BASE_URL}/gift-tax/`,
  description: '증여재산공제와 10년 합산 과세를 반영한 무료 증여세 계산기.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function GiftTaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(calcFaqJsonLd('gift-tax')) }}
      />
      <GiftTaxClient>
        <CalcContent calcKey="gift-tax" />
      </GiftTaxClient>
    </>
  );
}
