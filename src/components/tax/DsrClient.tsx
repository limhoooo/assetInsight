'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import DsrTab from './DsrTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function DsrClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/loan', label: '대출 이자 계산기' },
    { href: '/articles/dsr-loan-limit-guide', label: 'DSR 가이드' },
    { href: '/faq', label: t.navFaq },
    { href: '/about', label: t.navAbout },
  ];

  return (
    <>
      <Header
        subtitle="DSR 계산기"
        description="스트레스 DSR 반영 대출 한도 · 기존 대출 합산"
        navLinks={navLinks}
      />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <DsrTab />
        {children}
      </main>
    </>
  );
}
