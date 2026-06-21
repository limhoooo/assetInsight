'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Mode    = 'deposit' | 'savings';
type Interest = 'simple' | 'compound';
type TaxType  = 'general' | 'preferred' | 'exempt';

const TAX_RATES: Record<TaxType, number> = {
  general:   0.154,
  preferred: 0.095,
  exempt:    0,
};

function calcDeposit(principal: number, rate: number, months: number, interest: Interest, tax: TaxType) {
  if (!principal || !rate || !months) return null;
  const r = rate / 100;
  const grossInterest = interest === 'compound'
    ? principal * (Math.pow(1 + r / 12, months) - 1)
    : principal * r * months / 12;
  const taxAmt    = grossInterest * TAX_RATES[tax];
  const netInterest = grossInterest - taxAmt;
  return { principal, grossInterest, taxAmt, netInterest, total: principal + netInterest };
}

function calcSavings(monthly: number, rate: number, months: number, tax: TaxType) {
  if (!monthly || !rate || !months) return null;
  const r = rate / 100;
  // 단리: 이자 = 월납입금 × (연이율/12) × n(n+1)/2
  const grossInterest = monthly * (r / 12) * months * (months + 1) / 2;
  const totalPrincipal = monthly * months;
  const taxAmt      = grossInterest * TAX_RATES[tax];
  const netInterest = grossInterest - taxAmt;
  return { totalPrincipal, grossInterest, taxAmt, netInterest, total: totalPrincipal + netInterest };
}

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }

export default function SavingsTab() {
  const { t } = useLanguage();
  const [mode,     setMode]     = useState<Mode>('deposit');
  // 예금
  const [principal, setPrincipal] = useState('');
  const [rate,      setRate]      = useState('');
  const [months,    setMonths]    = useState('');
  const [interest,  setInterest]  = useState<Interest>('simple');
  // 적금
  const [monthly,   setMonthly]   = useState('');
  const [sRate,     setSRate]     = useState('');
  const [sMonths,   setSMonths]   = useState('');
  // 공통
  const [taxType,   setTaxType]   = useState<TaxType>('general');

  const dResult = useMemo(() =>
    calcDeposit(parseFloat(principal)||0, parseFloat(rate)||0, parseFloat(months)||0, interest, taxType),
    [principal, rate, months, interest, taxType]
  );
  const sResult = useMemo(() =>
    calcSavings(parseFloat(monthly)||0, parseFloat(sRate)||0, parseFloat(sMonths)||0, taxType),
    [monthly, sRate, sMonths, taxType]
  );

  const taxOptions: { value: TaxType; label: string }[] = [
    { value: 'general',   label: t.svTaxGeneral },
    { value: 'preferred', label: t.svTaxPreferred },
    { value: 'exempt',    label: t.svTaxExempt },
  ];

  return (
    <>
      <div className="card" style={{ padding: '14px 20px' }}>
        <div className="toggle-group">
          <button className={`toggle-btn${mode === 'deposit' ? ' active' : ''}`}  onClick={() => setMode('deposit')}>{t.svTabDeposit}</button>
          <button className={`toggle-btn${mode === 'savings' ? ' active' : ''}`}  onClick={() => setMode('savings')}>{t.svTabSavings}</button>
        </div>
      </div>

      {mode === 'deposit' && (
        <>
          <div className="card">
            <div className="card-title">{t.svDepositTitle}</div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.svPrincipal}</label>
                <input type="number" placeholder="10000000" value={principal} onChange={e => setPrincipal(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.svRate}</label>
                <input type="number" placeholder="3.5" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.svMonths}</label>
                <input type="number" placeholder="12" min="1" value={months} onChange={e => setMonths(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.svInterestType}</label>
                <div className="toggle-group">
                  <button className={`toggle-btn${interest === 'simple' ? ' active' : ''}`}   onClick={() => setInterest('simple')}>{t.svSimple}</button>
                  <button className={`toggle-btn${interest === 'compound' ? ' active' : ''}`} onClick={() => setInterest('compound')}>{t.svCompound}</button>
                </div>
              </div>
            </div>
            <div className="form-group">
              <label>{t.svTaxType}</label>
              <div className="toggle-group">
                {taxOptions.map(o => (
                  <button key={o.value} className={`toggle-btn${taxType === o.value ? ' active' : ''}`} onClick={() => setTaxType(o.value)}>{o.label}</button>
                ))}
              </div>
            </div>
          </div>

          {dResult && (
            <div className="card">
              <div className="card-title">{t.svResultTitle}</div>
              <div className="tax-result-grid">
                <div className="tax-row"><span className="tax-label">{t.svPrincipal}</span><span className="tax-value">{fmt(dResult.principal)}원</span></div>
                <div className="tax-row"><span className="tax-label">{t.svGrossInterest}</span><span className="tax-value">{fmt(dResult.grossInterest)}원</span></div>
                {dResult.taxAmt > 0 && (
                  <div className="tax-row tax-row-sub"><span className="tax-label">{t.svInterestTax} ({(TAX_RATES[taxType] * 100).toFixed(1)}%)</span><span className="tax-value">−{fmt(dResult.taxAmt)}원</span></div>
                )}
                <div className="tax-row"><span className="tax-label">{t.svNetInterest}</span><span className="tax-value">{fmt(dResult.netInterest)}원</span></div>
                <div className="tax-row tax-row-total"><span className="tax-label">{t.svTotal}</span><span className="tax-value">{fmt(dResult.total)}원</span></div>
              </div>
              <p className="tax-disclaimer">{t.svDisclaimer}</p>
            </div>
          )}
        </>
      )}

      {mode === 'savings' && (
        <>
          <div className="card">
            <div className="card-title">{t.svSavingsTitle}</div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.svMonthly}</label>
                <input type="number" placeholder="500000" value={monthly} onChange={e => setMonthly(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.svRate}</label>
                <input type="number" placeholder="3.5" step="0.1" value={sRate} onChange={e => setSRate(e.target.value)} />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.svMonths}</label>
                <input type="number" placeholder="12" min="1" value={sMonths} onChange={e => setSMonths(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.svTaxType}</label>
                <div className="toggle-group">
                  {taxOptions.map(o => (
                    <button key={o.value} className={`toggle-btn${taxType === o.value ? ' active' : ''}`} onClick={() => setTaxType(o.value)}>{o.label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {sResult && (
            <div className="card">
              <div className="card-title">{t.svResultTitle}</div>
              <div className="tax-result-grid">
                <div className="tax-row"><span className="tax-label">{t.svTotalPrincipal}</span><span className="tax-value">{fmt(sResult.totalPrincipal)}원</span></div>
                <div className="tax-row"><span className="tax-label">{t.svGrossInterest}</span><span className="tax-value">{fmt(sResult.grossInterest)}원</span></div>
                {sResult.taxAmt > 0 && (
                  <div className="tax-row tax-row-sub"><span className="tax-label">{t.svInterestTax} ({(TAX_RATES[taxType] * 100).toFixed(1)}%)</span><span className="tax-value">−{fmt(sResult.taxAmt)}원</span></div>
                )}
                <div className="tax-row"><span className="tax-label">{t.svNetInterest}</span><span className="tax-value">{fmt(sResult.netInterest)}원</span></div>
                <div className="tax-row tax-row-total"><span className="tax-label">{t.svTotal}</span><span className="tax-value">{fmt(sResult.total)}원</span></div>
              </div>
              <p className="tax-disclaimer">{t.svDisclaimer}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
