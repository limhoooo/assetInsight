import type { Metadata } from 'next';
import Script from 'next/script';
import './globals.css';
import Footer from '@/components/Footer';
import { ClientProviders } from '@/components/ClientProviders';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';
const ADSENSE_CLIENT = process.env.NEXT_PUBLIC_ADSENSE_CLIENT ?? 'ca-pub-3707407763414210';

export const metadata: Metadata = {
  title: '자산인사이트 - 투자자를 위한 스마트 계산기 모음',
  description: '물타기 계산기, 양도소득세 계산기 등 투자에 필요한 계산을 한 곳에서. 자산인사이트에서 스마트하게 투자하세요.',
  keywords: ['자산인사이트', '투자 계산기', '물타기 계산기', '양도소득세 계산기', '주식 계산기', '평균단가 계산기'],
  authors: [{ name: '자산인사이트' }],
  metadataBase: new URL(BASE_URL),
  openGraph: {
    title: '자산인사이트 - 투자자를 위한 스마트 계산기 모음',
    description: '물타기 계산기, 양도소득세 계산기 등 투자에 필요한 계산을 한 곳에서.',
    type: 'website', locale: 'ko_KR', url: BASE_URL, siteName: '자산인사이트',
  },
  twitter: { card: 'summary', title: '자산인사이트', description: '물타기 계산기, 양도소득세 계산기 등 투자 계산기 모음' },
  alternates: { canonical: `${BASE_URL}/` },
  verification: { google: ['VO0T_4Yb3qD2RrVEM0qN_5OTMHHAkOXi_z8nhmz7qn4', 'SG3eDjq8t8SeacZliY6Lpq2CUcuPpb-r6UtsXzhYZlU'] },
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
