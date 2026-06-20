import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/Footer';
import { ClientProviders } from '@/components/ClientProviders';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://avgdown-calculator.pages.dev';
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? 'ca-pub-3707407763414210';

export const metadata: Metadata = {
  title: '물타기 계산기 - 주식 평균단가 계산기',
  description: '주식 물타기 시뮬레이션, 목표 평균단가 역산, 손익 현황을 계산하는 무료 계산기. 원화(KRW)와 달러(USD)를 모두 지원하며 실시간 환율을 적용합니다.',
  keywords: ['물타기', '평균단가', '주식계산기', '물타기계산기', '손익계산', '미국주식', '주식투자', '주식 평균단가'],
  authors: [{ name: '물타기 계산기' }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: '물타기 계산기 - 주식 평균단가 계산기',
    description: '주식 물타기 시뮬레이션 · 목표단가 역산 · 손익 계산. 원화/달러 지원.',
    type: 'website', locale: 'ko_KR', url: BASE_URL, siteName: '물타기 계산기',
  },
  twitter: { card: 'summary', title: '물타기 계산기', description: '주식 물타기 시뮬레이션 · 평균단가 역산 · 손익 계산' },
  alternates: { canonical: BASE_URL },
  robots: { index: true, follow: true },
  other: { 'google-adsense-account': ADSENSE_CLIENT },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ko">
      <body>
        <ClientProviders>
          {children}
          <Footer />
        </ClientProviders>
        <Script async src={`https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=${ADSENSE_CLIENT}`} crossOrigin="anonymous" strategy="afterInteractive" />
      </body>
    </html>
  );
}
