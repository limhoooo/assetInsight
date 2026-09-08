'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import StockTaxTab from './StockTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function StockTaxClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/stock-tax/guide', label: t.stNavGuide },
    { href: '/faq',             label: t.navFaq },
    { href: '/about',           label: t.navAbout },
    { href: '/privacy',         label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.stSubtitle} description={t.stDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <StockTaxTab />
        {children}
      </main>
    </>
  );
}
