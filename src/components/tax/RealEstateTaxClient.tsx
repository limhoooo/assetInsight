'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import RealEstateTaxTab from './RealEstateTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RealEstateTaxClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/realestate-tax/guide', label: t.reNavGuide },
    { href: '/faq',                  label: t.navFaq },
    { href: '/about',                label: t.navAbout },
    { href: '/privacy',              label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.reSubtitle} description={t.reDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <RealEstateTaxTab />
        {children}
      </main>
    </>
  );
}
