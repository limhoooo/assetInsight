import type { Metadata } from 'next';
import AcquisitionTaxClient from '@/components/tax/AcquisitionTaxClient';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '취득세 계산기 - 부동산 취득세 자동 계산 | 자산인사이트',
  description: '부동산 취득 시 취득세를 무료로 계산하세요. 1~3주택 세율 자동 적용, 지방교육세·농어촌특별세 포함 총 세액 즉시 산출. 아파트·토지·상가 모두 지원.',
  keywords: ['취득세 계산기', '부동산 취득세', '취득세 계산', '주택 취득세', '아파트 취득세', '취득세율', '다주택자 취득세', '취득세 지방교육세'],
  alternates: { canonical: `${BASE_URL}/acquisition-tax` },
  openGraph: {
    title: '취득세 계산기 | 자산인사이트',
    description: '부동산 취득세 무료 계산. 주택 수·조정지역 여부에 따른 세율 자동 적용.',
    type: 'website', url: `${BASE_URL}/acquisition-tax`, siteName: '자산인사이트',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebApplication',
  name: '취득세 계산기 | 자산인사이트',
  url: `${BASE_URL}/acquisition-tax`,
  description: '부동산 취득세 자동 계산기. 주택·비주택, 1~4주택, 조정지역 여부 반영.',
  applicationCategory: 'FinanceApplication',
  operatingSystem: 'Any',
  inLanguage: 'ko-KR',
  isAccessibleForFree: true,
  offers: { '@type': 'Offer', price: '0', priceCurrency: 'KRW' },
};

export default function AcquisitionTaxPage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <AcquisitionTaxClient />
    </>
  );
}
