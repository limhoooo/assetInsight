'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import SavingsTab from './SavingsTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function SavingsClient() {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/savings/guide', label: t.svNavGuide },
    { href: '/faq',           label: t.navFaq },
    { href: '/about',         label: t.navAbout },
    { href: '/privacy',       label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.svSubtitle} description={t.svDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 자산인사이트 홈</Link>
        <SavingsTab />
      </main>
    </>
  );
}
