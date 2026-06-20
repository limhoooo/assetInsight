'use client';

import Link from 'next/link';
import { useLanguage } from '@/contexts/LanguageContext';

export default function AppDescription() {
  const { t } = useLanguage();
  return (
    <section className="app-desc-section">
      <div className="card">
        <div className="card-title">{t.descTitle}</div>
        <p className="app-desc-text">{t.descText}</p>
        <div className="app-desc-grid">
          <div className="app-desc-item">
            <div className="app-desc-icon">🔁</div>
            <div><div className="app-desc-label">{t.descSimLabel}</div><div className="app-desc-sub">{t.descSimSub}</div></div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">🎯</div>
            <div><div className="app-desc-label">{t.descRevLabel}</div><div className="app-desc-sub">{t.descRevSub}</div></div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">💰</div>
            <div><div className="app-desc-label">{t.descPnlLabel}</div><div className="app-desc-sub">{t.descPnlSub}</div></div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">💱</div>
            <div><div className="app-desc-label">{t.descUsdLabel}</div><div className="app-desc-sub">{t.descUsdSub}</div></div>
          </div>
        </div>
        <div className="app-desc-footer">
          <Link href="/guide" className="app-desc-link">{t.descGuideLink}</Link>
          <Link href="/faq"   className="app-desc-link">{t.descFaqLink}</Link>
        </div>
      </div>
    </section>
  );
}
