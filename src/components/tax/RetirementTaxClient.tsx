'use client';

import Link from 'next/link';
import Header from '@/components/Header';
import RetirementTaxTab from './RetirementTaxTab';
import { useLanguage } from '@/contexts/LanguageContext';

export default function RetirementTaxClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();

  const navLinks = [
    { href: '/compound', label: '복리 계산기' },
    { href: '/articles/pension-irp-tax-deduction', label: '연금저축 IRP 가이드' },
    { href: '/faq', label: t.navFaq },
    { href: '/about', label: t.navAbout },
  ];

  return (
    <>
      <Header
        subtitle="퇴직금 · 퇴직소득세 계산기"
        description="근속연수공제 · 환산급여 · 연분연승 자동 계산"
        navLinks={navLinks}
      />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <RetirementTaxTab />
        {children}
      </main>
    </>
  );
}
