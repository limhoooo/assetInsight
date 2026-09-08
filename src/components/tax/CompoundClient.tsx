'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import CompoundTab from './CompoundTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function CompoundClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/compound/guide', label: t.cpNavGuide },
    { href: '/faq',            label: t.navFaq },
    { href: '/about',          label: t.navAbout },
    { href: '/privacy',        label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.cpSubtitle} description={t.cpDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <CompoundTab />
        {children}
      </main>
    </>
  );
}
