'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import LoanTab from './LoanTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function LoanClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/loan/guide', label: t.lnNavGuide },
    { href: '/faq',        label: t.navFaq },
    { href: '/about',      label: t.navAbout },
    { href: '/privacy',    label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.lnSubtitle} description={t.lnDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <LoanTab />
        {children}
      </main>
    </>
  );
}
