'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { SavedStock } from '@/types/calculator';
import { fmt, fmtUSD } from '@/lib/fmt';

interface Props {
  stocks: SavedStock[];
  onLoad: (stock: SavedStock) => void;
  onRemove: (id: string) => void;
}

export default function PortfolioCard({ stocks, onLoad, onRemove }: Props) {
  const { t } = useLanguage();
  if (stocks.length === 0) return null;

  return (
    <div className="card portfolio-card">
      <div className="portfolio-header">
        <span className="card-title" style={{ margin: 0 }}>{t.portfolioTitle}</span>
        <span className="portfolio-count">{stocks.length}{t.portfolioCountSuffix}</span>
      </div>
      <ul className="stock-list">
        {stocks.map((stock) => (
          <li key={stock.id} className="stock-item">
            <div className="stock-info">
              <div className="stock-row-top">
                <span className="stock-name">{stock.name}</span>
                <span className={`stock-badge stock-badge-${stock.currency}`}>{stock.currency.toUpperCase()}</span>
                {stock.rounds.length > 0 && (
                  <span className="stock-rounds-badge">
                    {t.portRoundBefore}{stock.rounds.length}{t.portRoundAfter}
                  </span>
                )}
              </div>
              <div className="stock-detail">
                {stock.currency === 'krw'
                  ? `${t.pnlAvgBasis} ${fmt(stock.initPrice)}원 · ${fmt(stock.initShares)}주`
                  : `${t.pnlAvgBasis} ${fmtUSD(stock.initPrice)} · ${fmt(stock.initShares)}주`}
              </div>
              <div className="stock-date">
                {new Date(stock.savedAt).toLocaleDateString('ko-KR', { year: 'numeric', month: 'short', day: 'numeric' })}
              </div>
            </div>
            <div className="stock-actions">
              <button className="btn-load" onClick={() => onLoad(stock)}>{t.portfolioLoad}</button>
              <button className="btn-del" onClick={() => onRemove(stock.id)} aria-label="삭제">×</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
