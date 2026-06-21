'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

const CALCULATORS = [
  { emoji: '📉', name: '물타기 계산기',        href: '/avgdown' },
  { emoji: '📈', name: '해외주식 양도소득세',   href: '/stock-tax' },
  { emoji: '🏠', name: '부동산 양도소득세',     href: '/realestate-tax' },
  { emoji: '🏘️', name: '보유세',               href: '/holding-tax' },
  { emoji: '🏦', name: '대출 이자',             href: '/loan' },
  { emoji: '📊', name: '복리',                  href: '/compound' },
  { emoji: '🏦', name: '예적금',                href: '/savings' },
  { emoji: '🏡', name: '취득세',                href: '/acquisition-tax' },
];

export default function NavSidebar() {
  const [open, setOpen] = useState(false);
  const [calcOpen, setCalcOpen] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const close = () => setOpen(false);

  return (
    <>
      <button
        className={`nav-toggle${scrolled ? ' nav-toggle-scrolled' : ''}`}
        onClick={() => setOpen(true)}
        aria-label="메뉴 열기"
      >
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
        <span className="nav-toggle-bar" />
      </button>

      {open && <div className="nav-backdrop" onClick={close} />}

      <nav className={`nav-sidebar${open ? ' nav-sidebar-open' : ''}`} aria-hidden={!open}>
        <div className="nav-sidebar-head">
          <span className="nav-sidebar-brand">자산인사이트</span>
          <button className="nav-close" onClick={close} aria-label="메뉴 닫기">✕</button>
        </div>

        <ul className="nav-list">
          <li>
            <Link
              href="/"
              className={`nav-item nav-depth-1${pathname === '/' ? ' nav-item-active' : ''}`}
              onClick={close}
            >
              <span className="nav-item-icon">🏠</span>홈
            </Link>
          </li>

          <li>
            <button
              className={`nav-item nav-depth-1 nav-expandable${calcOpen ? ' nav-expanded' : ''}`}
              onClick={() => setCalcOpen((v) => !v)}
            >
              <span className="nav-item-icon">🧮</span>
              계산기
              <span className="nav-chevron">{calcOpen ? '▾' : '▸'}</span>
            </button>
            {calcOpen && (
              <ul className="nav-sublist">
                {CALCULATORS.map((c) => (
                  <li key={c.href}>
                    <Link
                      href={c.href}
                      className={`nav-item nav-depth-2${pathname === c.href ? ' nav-item-active' : ''}`}
                      onClick={close}
                    >
                      <span className="nav-item-icon">{c.emoji}</span>
                      {c.name}
                    </Link>
                  </li>
                ))}
              </ul>
            )}
          </li>

          <li>
            <Link
              href="/articles"
              className={`nav-item nav-depth-1${pathname.startsWith('/articles') ? ' nav-item-active' : ''}`}
              onClick={close}
            >
              <span className="nav-item-icon">📝</span>아티클 목록
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
