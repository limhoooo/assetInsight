'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import GiftTaxTab from './GiftTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function GiftTaxClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/acquisition-tax', label: '취득세 계산기' },
    { href: '/realestate-tax', label: '양도세 계산기' },
    { href: '/faq', label: t.navFaq },
    { href: '/about', label: t.navAbout },
  ];

  return (
    <>
      <Header
        subtitle="증여세 계산기"
        description="증여재산공제 · 10년 합산 · 신고세액공제 자동 적용"
        navLinks={navLinks}
      />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <GiftTaxTab />
        {children}
      </main>
    </>
  );
}
