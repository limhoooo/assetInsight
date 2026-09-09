'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();

  const links = [
    { href: '/', label: t.footerCalculators },
    { href: '/articles/', label: t.footerArticles },
    { href: '/faq/', label: t.footerFaq },
    { href: '/about/', label: t.footerAbout },
    { href: '/contact/', label: t.footerContact },
    { href: '/terms/', label: t.footerTerms },
    { href: '/privacy/', label: t.footerPrivacy },
  ];

  return (
    <footer className="footer">
      <nav className="footer-nav">
        {links.map((link, i) => (
          <span key={link.href} style={{ display: 'contents' }}>
            {i > 0 && <span className="footer-sep">·</span>}
            <Link href={link.href} className="footer-link">
              {link.label}
            </Link>
          </span>
        ))}
      </nav>
      <p className="footer-disclaimer">{t.footerDisclaimer}</p>
      <p className="footer-copy">
        © {new Date().getFullYear()} {t.footerCopy}
      </p>
    </footer>
  );
}
