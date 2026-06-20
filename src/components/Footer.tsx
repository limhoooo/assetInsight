'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function Footer() {
  const { t } = useLanguage();
  return (
    <footer className="footer">
      <nav className="footer-nav">
        <Link href="/about" className="footer-link">{t.footerAbout}</Link>
        <span className="footer-sep">·</span>
        <Link href="/privacy" className="footer-link">{t.footerPrivacy}</Link>
      </nav>
      <p className="footer-disclaimer">{t.footerDisclaimer}</p>
      <p className="footer-copy">© {new Date().getFullYear()} {t.footerCopy}</p>
    </footer>
  );
}
