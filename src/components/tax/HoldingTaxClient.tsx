'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import HoldingTaxTab from './HoldingTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function HoldingTaxClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/holding-tax/guide', label: t.ptNavGuide },
    { href: '/faq',               label: t.navFaq },
    { href: '/about',             label: t.navAbout },
    { href: '/privacy',           label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.ptSubtitle} description={t.ptDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <HoldingTaxTab />
        {children}
      </main>
    </>
  );
}
