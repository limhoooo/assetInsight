'use client';

import { useState } from 'react';
import { calcNeededShares } from '@/lib/calc';
import { fmt, fmtUSD } from '@/lib/fmt';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props { initPrice: number; initShares: number; exchangeRate: number; }

export default function DollarRevTab({ initPrice, initShares, exchangeRate }: Props) {
  const { t } = useLanguage();
  const [revPrice,  setRevPrice]  = useState('');
  const [revTarget, setRevTarget] = useState('');

  const rp = parseFloat(revPrice)  || 0;
  const rt = parseFloat(revTarget) || 0;
  const hasInit = initPrice > 0 && initShares > 0;
  const krw = (v: number) => exchangeRate > 0 ? fmt(v * exchangeRate) + '원' : '-';

  let error = '';
  let result: { needShares: number; needUSD: number; totalShares: number; totalUSD: number; actualAvg: number } | null = null;

  if (!hasInit) {
    error = t.revErrNoInitUsd;
  } else if (rp > 0 && rt > 0) {
    if (rp >= initPrice) error = t.revErrPriceTooHigh;
    else if (rt >= initPrice) error = t.revErrTargetTooHigh;
    else if (rt <= rp)  error = t.revErrTargetTooLow;
    else {
      const needShares  = calcNeededShares(initShares, initPrice, rp, rt);
      const needUSD     = needShares * rp;
      const totalShares = initShares + needShares;
      const totalUSD    = initPrice * initShares + needUSD;
      result = { needShares, needUSD, totalShares, totalUSD, actualAvg: totalUSD / totalShares };
    }
  }

  return (
    <div className="card">
      <div className="card-title">{t.revTitle}</div>
      <div className="info-box">{t.revInfoUsd}</div>
      <div className="input-row">
        <div className="form-group">
          <label>{t.revPriceUsd}</label>
          <input type="number" placeholder="120.00" step="0.01" value={revPrice} onChange={(e) => setRevPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{t.revTargetUsd}</label>
          <input type="number" placeholder="135.00" step="0.01" value={revTarget} onChange={(e) => setRevTarget(e.target.value)} />
        </div>
      </div>
      {error && <div className="error-box">{error}</div>}
      {result && (
        <>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item accent">
              <div className="result-label">{t.revNeedShares}</div>
              <div className="result-value xl">{fmt(result.needShares)}주</div>
            </div>
            <div className="result-item accent">
              <div className="result-label">{t.revNeedAmtUsd}</div>
              <div className="result-value xl">{fmtUSD(result.needUSD)}</div>
            </div>
            <div className="result-item accent">
              <div className="result-label">{t.revNeedAmtKrw}</div>
              <div className="result-value">{krw(result.needUSD)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.revAfterShares}</div>
              <div className="result-value">{fmt(result.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.revAfterAmtUsd}</div>
              <div className="result-value">{fmtUSD(result.totalUSD)}</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.revAfterAmtKrw}</div>
              <div className="result-value">{krw(result.totalUSD)}</div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-item">
            <div className="result-label">{t.revVerify}</div>
            <div className="result-sub">{fmtUSD(result.actualAvg)} (목표: {fmtUSD(rt)})</div>
          </div>
        </>
      )}
    </div>
  );
}
