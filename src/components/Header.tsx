'use client';

import Link from 'next/link';
import { useTheme } from '@/hooks/useTheme';

const NAV_LINKS = [
  { href: '/guide', label: '물타기 가이드' },
  { href: '/faq', label: 'FAQ' },
  { href: '/about', label: '서비스 소개' },
  { href: '/privacy', label: '개인정보처리방침' },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();

  return (
    <header className="header">
      <button className="theme-toggle" onClick={toggleTheme}>
        {theme === 'dark' ? '☀️ 라이트' : '🌙 다크'}
      </button>
      <h1>📉 물타기 계산기</h1>
      <p>주식 평균단가 계산 · 시뮬레이션 · 손익 분석</p>
      <nav className="header-nav">
        {NAV_LINKS.map(({ href, label }) => (
          <Link key={href} href={href} className="header-nav-link">{label}</Link>
        ))}
      </nav>
    </header>
  );
}
