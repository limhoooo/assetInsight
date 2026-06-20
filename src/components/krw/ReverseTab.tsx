'use client';

import { useState } from 'react';
import { calcNeededShares } from '@/lib/calc';
import { fmt } from '@/lib/fmt';
import { useLanguage } from '@/contexts/LanguageContext';

interface Props { initPrice: number; initShares: number; }

export default function ReverseTab({ initPrice, initShares }: Props) {
  const { t } = useLanguage();
  const [revPrice,  setRevPrice]  = useState('');
  const [revTarget, setRevTarget] = useState('');

  const rp = parseFloat(revPrice)  || 0;
  const rt = parseFloat(revTarget) || 0;
  const hasInit = initPrice > 0 && initShares > 0;

  let error = '';
  let result: { needShares: number; needAmt: number; totalShares: number; totalAmt: number; actualAvg: number } | null = null;

  if (!hasInit) {
    error = t.revErrNoInit;
  } else if (rp > 0 && rt > 0) {
    if (rp >= initPrice) error = t.revErrPriceTooHigh;
    else if (rt >= initPrice) error = t.revErrTargetTooHigh;
    else if (rt <= rp)  error = t.revErrTargetTooLow;
    else {
      const needShares = calcNeededShares(initShares, initPrice, rp, rt);
      const needAmt    = needShares * rp;
      const totalShares = initShares + needShares;
      const totalAmt    = initPrice * initShares + needAmt;
      result = { needShares, needAmt, totalShares, totalAmt, actualAvg: totalAmt / totalShares };
    }
  }

  return (
    <div className="card">
      <div className="card-title">{t.revTitle}</div>
      <div className="info-box">{t.revInfo}</div>
      <div className="input-row">
        <div className="form-group">
          <label>{t.revPriceKrw}</label>
          <input type="number" placeholder="38,000" value={revPrice} onChange={(e) => setRevPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{t.revTargetKrw}</label>
          <input type="number" placeholder="44,000" value={revTarget} onChange={(e) => setRevTarget(e.target.value)} />
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
              <div className="result-label">{t.revNeedAmt}</div>
              <div className="result-value xl">{fmt(result.needAmt)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.revAfterShares}</div>
              <div className="result-value">{fmt(result.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.revAfterAmt}</div>
              <div className="result-value">{fmt(result.totalAmt)}원</div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-item">
            <div className="result-label">{t.revVerify}</div>
            <div className="result-sub">{fmt(result.actualAvg)}원 (목표: {fmt(rt)}원)</div>
          </div>
        </>
      )}
    </div>
  );
}
