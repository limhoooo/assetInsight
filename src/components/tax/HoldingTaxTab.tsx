'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

// 종부세 누진세율 (2024년 기준)
const COMP_BRACKETS = [
  { limit: 300_000_000,   rate: 0.005 },
  { limit: 600_000_000,   rate: 0.007 },
  { limit: 1_200_000_000, rate: 0.010 },
  { limit: 2_500_000_000, rate: 0.013 },
  { limit: 5_000_000_000, rate: 0.015 },
  { limit: 9_400_000_000, rate: 0.020 },
  { limit: Infinity,       rate: 0.027 },
];

function calcCompTax(base: number): number {
  let tax = 0, prev = 0;
  for (const b of COMP_BRACKETS) {
    const cap = Math.min(base, b.limit);
    if (cap > prev) tax += (cap - prev) * b.rate;
    prev = b.limit;
    if (base <= b.limit) break;
  }
  return tax;
}

function calc(publicPrice: number, is1Home: boolean, isUrban: boolean) {
  if (!publicPrice) return null;

  // ── 재산세
  const ptBase = publicPrice * 0.6; // 공정시장가액비율 60%
  let propertyTax = 0;
  if      (ptBase <= 60_000_000)  propertyTax = ptBase * 0.001;
  else if (ptBase <= 150_000_000) propertyTax = 60_000   + (ptBase - 60_000_000)  * 0.0015;
  else if (ptBase <= 300_000_000) propertyTax = 195_000  + (ptBase - 150_000_000) * 0.0025;
  else                            propertyTax = 570_000  + (ptBase - 300_000_000) * 0.004;

  const localEdu  = propertyTax * 0.2;
  const urbanTax  = isUrban ? ptBase * 0.0014 : 0;
  const totalPT   = propertyTax + localEdu + urbanTax;

  // ── 종합부동산세
  const deduction = is1Home ? 1_200_000_000 : 900_000_000;
  let compResult: { ctBase: number; compTax: number; ruralTax: number } | null = null;

  if (publicPrice > deduction) {
    const ctBase   = (publicPrice - deduction) * 0.6;
    const compTax  = calcCompTax(ctBase);
    const ruralTax = compTax * 0.2;
    compResult = { ctBase, compTax, ruralTax };
  }

  const totalTax = totalPT + (compResult ? compResult.compTax + compResult.ruralTax : 0);

  return { ptBase, propertyTax, localEdu, urbanTax, totalPT, compResult, totalTax };
}

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }

export default function HoldingTaxTab() {
  const { t } = useLanguage();
  const [price,    setPrice]    = useState('');
  const [is1Home,  setIs1Home]  = useState(true);
  const [isUrban,  setIsUrban]  = useState(true);

  const r = useMemo(() =>
    calc(parseFloat(price) || 0, is1Home, isUrban),
    [price, is1Home, isUrban]
  );

  return (
    <>
      <div className="card">
        <div className="card-title">{t.ptInputTitle}</div>
        <p className="tax-notice">{t.ptNotice}</p>
        <div className="form-group">
          <label>{t.ptPublicPrice}</label>
          <input type="number" placeholder="500000000" value={price} onChange={e => setPrice(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{t.ptHomeType}</label>
          <div className="toggle-group">
            <button className={`toggle-btn${is1Home ? ' active' : ''}`}  onClick={() => setIs1Home(true)}>{t.ptIs1Home}</button>
            <button className={`toggle-btn${!is1Home ? ' active' : ''}`} onClick={() => setIs1Home(false)}>{t.ptIsGeneral}</button>
          </div>
        </div>
        <div className="form-group">
          <label>{t.ptUrban}</label>
          <div className="toggle-group">
            <button className={`toggle-btn${isUrban ? ' active' : ''}`}  onClick={() => setIsUrban(true)}>{t.ptIsUrban}</button>
            <button className={`toggle-btn${!isUrban ? ' active' : ''}`} onClick={() => setIsUrban(false)}>{t.ptIsNotUrban}</button>
          </div>
        </div>
      </div>

      {r && (
        <>
          <div className="card">
            <div className="card-title">{t.ptPropertyTaxTitle}</div>
            <div className="tax-result-grid">
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptTaxBase} (공시가 × 60%)</span><span className="tax-value">{fmt(r.ptBase)}원</span></div>
              <div className="tax-row"><span className="tax-label">{t.ptPropertyTax}</span><span className="tax-value">{fmt(r.propertyTax)}원</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptLocalEdu}</span><span className="tax-value">{fmt(r.localEdu)}원</span></div>
              {r.urbanTax > 0 && (
                <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptUrbanTax}</span><span className="tax-value">{fmt(r.urbanTax)}원</span></div>
              )}
              <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.ptPropertyTaxTotal}</span><span className="tax-value">{fmt(r.totalPT)}원</span></div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">{t.ptCompTitle}</div>
            {r.compResult ? (
              <div className="tax-result-grid">
                <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptCompDeduction} ({is1Home ? '12억' : '9억'})</span><span className="tax-value">{is1Home ? '1,200,000,000' : '900,000,000'}원</span></div>
                <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptTaxBase} ((공시가 - 공제) × 60%)</span><span className="tax-value">{fmt(r.compResult.ctBase)}원</span></div>
                <div className="tax-row"><span className="tax-label">{t.ptCompTax}</span><span className="tax-value">{fmt(r.compResult.compTax)}원</span></div>
                <div className="tax-row tax-row-sub"><span className="tax-label">{t.ptRuralTax}</span><span className="tax-value">{fmt(r.compResult.ruralTax)}원</span></div>
                <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.ptCompTotal}</span><span className="tax-value">{fmt(r.compResult.compTax + r.compResult.ruralTax)}원</span></div>
              </div>
            ) : (
              <div className="tax-info-box">{t.ptNoComp} ({is1Home ? '공시가 12억 이하' : '공시가 9억 이하'})</div>
            )}
          </div>

          <div className="card">
            <div className="card-title">{t.ptTotalTitle}</div>
            <div className="tax-result-grid">
              <div className="tax-row"><span className="tax-label">{t.ptPropertyTaxTotal}</span><span className="tax-value">{fmt(r.totalPT)}원</span></div>
              {r.compResult && (
                <div className="tax-row"><span className="tax-label">{t.ptCompTotal}</span><span className="tax-value">{fmt(r.compResult.compTax + r.compResult.ruralTax)}원</span></div>
              )}
              <div className="tax-row tax-row-total"><span className="tax-label">{t.ptTotal}</span><span className="tax-value">{fmt(r.totalTax)}원</span></div>
            </div>
            <p className="tax-disclaimer">{t.ptDisclaimer}</p>
          </div>
        </>
      )}
    </>
  );
}
