'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import AcquisitionTaxTab from './AcquisitionTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AcquisitionTaxClient() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/acquisition-tax/guide', label: t.atNavGuide },
    { href: '/faq',                   label: t.navFaq },
    { href: '/about',                 label: t.navAbout },
    { href: '/privacy',               label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.atSubtitle} description={t.atDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 자산인사이트 홈</Link>
        <AcquisitionTaxTab />
      </main>
    </>
  );
}
