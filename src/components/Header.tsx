'use client';

import Link from 'next/link';
import { KR, US } from 'country-flag-icons/react/3x2';
import { useTheme } from '@/hooks/useTheme';
import { useLanguage } from '@/contexts/LanguageContext';

const BUBBLES = [
  { left: '7%',  size: 7,  duration: 6.0, delay: 0.0 },
  { left: '19%', size: 4,  duration: 9.0, delay: 2.2 },
  { left: '33%', size: 10, duration: 7.0, delay: 1.0 },
  { left: '48%', size: 5,  duration: 5.5, delay: 3.5 },
  { left: '61%', size: 8,  duration: 8.5, delay: 0.5 },
  { left: '74%', size: 6,  duration: 6.5, delay: 4.0 },
  { left: '86%', size: 9,  duration: 7.5, delay: 1.8 },
  { left: '94%', size: 4,  duration: 10,  delay: 2.8 },
];

export default function Header() {
  const { theme, toggleTheme } = useTheme();
  const { lang, setLang, t } = useLanguage();

  const navLinks = [
    { href: '/guide', label: t.navGuide },
    { href: '/faq',   label: t.navFaq },
    { href: '/about', label: t.navAbout },
    { href: '/privacy', label: t.navPrivacy },
  ];

  return (
    <header className="header">
      <div className="header-water" aria-hidden="true">
        <div className="hwave hwave-1" />
        <div className="hwave hwave-2" />
        <div className="hwave hwave-3" />
        {BUBBLES.map((b, i) => (
          <span key={i} className="hbubble" style={{ left: b.left, width: b.size, height: b.size, animationDuration: `${b.duration}s`, animationDelay: `${b.delay}s` }} />
        ))}
        <div className="header-caustic" />
      </div>

      <div className="header-controls">
        <button className="lang-toggle" onClick={() => setLang(lang === 'ko' ? 'en' : 'ko')}>
          {lang === 'ko'
            ? <><US className="flag-icon" title="English" /> English</>
            : <><KR className="flag-icon" title="한국어" /> Korea</>}
        </button>
        <button className="theme-toggle" onClick={toggleTheme}>
          {theme === 'dark' ? t.themeLight : t.themeDark}
        </button>
      </div>

      <h1>{t.title}</h1>
      <p>{t.subtitle}</p>
      <nav className="header-nav">
        {navLinks.map(({ href, label }) => (
          <Link key={href} href={href} className="header-nav-link">{label}</Link>
        ))}
      </nav>
    </header>
  );
}
