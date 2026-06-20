'use client';

import { useState } from 'react';
import { calcAvg } from '@/lib/calc';
import { fmt, fmtP } from '@/lib/fmt';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Round } from '@/types/calculator';

interface Props { initPrice: number; initShares: number; rounds: Round[]; }

export default function PnlTab({ initPrice, initShares, rounds }: Props) {
  const { t, lang } = useLanguage();
  const [curPrice, setCurPrice] = useState('');
  const cur     = parseFloat(curPrice) || 0;
  const hasInit = initPrice > 0 && initShares > 0;

  let result: { avg: number; totalShares: number; totalAmt: number; evalAmt: number; profit: number; rate: number; isProfit: boolean } | null = null;
  if (hasInit && cur > 0) {
    const { avg, totalShares, totalAmt } = calcAvg([{ price: initPrice, shares: initShares }, ...rounds]);
    const evalAmt = cur * totalShares;
    const profit  = evalAmt - totalAmt;
    result = { avg, totalShares, totalAmt, evalAmt, profit, rate: (profit / totalAmt) * 100, isProfit: profit >= 0 };
  }

  return (
    <div className="card">
      <div className="card-title">{t.pnlTitle}</div>
      <div className="info-box">{t.pnlInfo}</div>
      <div className="form-group">
        <label>{t.pnlCurPriceKrw}</label>
        <input type="number" placeholder="42,000" value={curPrice} onChange={(e) => setCurPrice(e.target.value)} />
      </div>
      {result && (
        <>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item">
              <div className="result-label">{t.pnlAvgBasis}</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.avg)}원</div>
              <div className="result-sub">{fmt(result.totalShares)}{t.pnlSharesUnit}</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.pnlTotalInvest}</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.totalAmt)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.pnlEvalAmt}</div>
              <div className="result-value" style={{ fontSize: '16px' }}>{fmt(result.evalAmt)}원</div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">{t.pnlUnrealizedPnl}</div>
              <div className={`result-value xl ${result.isProfit ? 'up' : 'down'}`}>
                {(result.profit > 0 ? '+' : '') + fmt(result.profit)}원
              </div>
            </div>
          </div>
          <div className="divider" />
          <div className="result-grid">
            <div className={`result-item ${result.isProfit ? 'green' : 'red'}`}>
              <div className="result-label">{t.pnlReturnRate}</div>
              <div className={`result-value xl ${result.isProfit ? 'up' : 'down'}`}>{fmtP(result.rate, 2)}</div>
            </div>
            <div className={`result-item ${result.isProfit ? 'green' : ''}`}>
              <div className="result-label">{result.isProfit ? t.pnlGainVsAvg : t.pnlNeedRise}</div>
              {result.isProfit ? (
                <>
                  <div className="result-value up">+{(((cur - result.avg) / result.avg) * 100).toFixed(2)}%</div>
                  <div className="result-sub">
                    {lang === 'ko'
                      ? `평균단가(${fmt(result.avg)}원) 대비 ${fmt(cur - result.avg)}원 초과`
                      : `${fmt(cur - result.avg)} KRW above avg. (${fmt(result.avg)} KRW)`}
                  </div>
                </>
              ) : (
                <>
                  <div className="result-value down">+{(((result.avg - cur) / cur) * 100).toFixed(2)}%</div>
                  <div className="result-sub">
                    {lang === 'ko'
                      ? `현재가 ${fmt(cur)}원 → ${fmt(result.avg)}원까지 상승 필요`
                      : `${fmt(cur)} → ${fmt(result.avg)} KRW needed`}
                  </div>
                </>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
}
