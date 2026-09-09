'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

const BRACKETS = [
  { limit: 14_000_000,    rate: 0.06, ded: 0 },
  { limit: 50_000_000,    rate: 0.15, ded: 1_260_000 },
  { limit: 88_000_000,    rate: 0.24, ded: 5_760_000 },
  { limit: 150_000_000,   rate: 0.35, ded: 15_440_000 },
  { limit: 300_000_000,   rate: 0.38, ded: 19_940_000 },
  { limit: 500_000_000,   rate: 0.40, ded: 25_940_000 },
  { limit: 1_000_000_000, rate: 0.42, ded: 35_940_000 },
  { limit: Infinity,      rate: 0.45, ded: 65_940_000 },
];

function progressiveTax(base: number): number {
  if (base <= 0) return 0;
  for (const b of BRACKETS) {
    if (base <= b.limit) return Math.max(0, base * b.rate - b.ded);
  }
  return base * 0.45 - 65_940_000;
}

function taxRateLabel(base: number): string {
  for (const b of BRACKETS) {
    if (base <= b.limit) return `${(b.rate * 100).toFixed(0)}%`;
  }
  return '45%';
}

const BASIC_DEDUCTION = 2_500_000;
const NON_TAXABLE_LIMIT = 1_200_000_000;

type HouseType = 'one' | 'multi' | 'land';

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }
function pct(r: number) { return (r * 100).toFixed(0) + '%'; }

export default function RealEstateTaxTab() {
  const { t } = useLanguage();
  const [sellPrice,  setSellPrice]  = useState('');
  const [buyPrice,   setBuyPrice]   = useState('');
  const [expenses,   setExpenses]   = useState('');
  const [holdYears,  setHoldYears]  = useState('');
  const [houseType,  setHouseType]  = useState<HouseType>('one');
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [residYears, setResidYears] = useState('');
  const [isUnreg,    setIsUnreg]    = useState(false);

  const r = useMemo(() => {
    const sell  = parseFloat(sellPrice)  || 0;
    const buy   = parseFloat(buyPrice)   || 0;
    const exp   = parseFloat(expenses)   || 0;
    const hold  = parseFloat(holdYears)  || 0;
    const resid = parseFloat(residYears) || 0;
    if (!sell || !buy) return null;

    const gain = sell - buy - exp;
    if (gain <= 0) return { kind: 'loss' as const, gain };

    if (isUnreg) {
      const taxBase = Math.max(0, gain - BASIC_DEDUCTION);
      const tax     = taxBase * 0.70;
      const local   = tax * 0.10;
      return { kind: 'flat' as const, gain, taxBase, rate: '70% (미등기)', tax, local, total: tax + local };
    }

    // 단기 보유 세율. 주택·조합원입주권은 70%/60%, 토지 등 그 외 부동산은 50%/40%.
    if (hold < 2) {
      const isHousing = houseType !== 'land';
      const shortRate = hold < 1
        ? (isHousing ? 0.70 : 0.50)
        : (isHousing ? 0.60 : 0.40);
      const label = hold < 1
        ? `${shortRate * 100}% (1년 미만)`
        : `${shortRate * 100}% (2년 미만)`;
      const taxBase = Math.max(0, gain - BASIC_DEDUCTION);
      const tax     = taxBase * shortRate;
      const local   = tax * 0.10;
      return { kind: 'flat' as const, gain, taxBase, rate: label, tax, local, total: tax + local };
    }

    if (houseType === 'one') {
      const holdOk = isAdjusted ? hold >= 2 && resid >= 2 : hold >= 2;
      if (holdOk && sell <= NON_TAXABLE_LIMIT) {
        return { kind: 'exempt' as const, gain };
      }
      if (holdOk && sell > NON_TAXABLE_LIMIT) {
        const taxableRatio = (sell - NON_TAXABLE_LIMIT) / sell;
        const taxableGain  = gain * taxableRatio;
        // 1세대1주택 장기보유특별공제(표2): 보유는 3년 이상부터 연 4%,
        // 거주는 2년 이상부터 적용(2년 8%, 3년 이상 연 4%). 각각 최대 40%.
        const holdRate  = hold  >= 3 ? Math.min(Math.floor(hold)  * 0.04, 0.40) : 0;
        const residRate = resid >= 2 ? Math.min(Math.floor(resid) * 0.04, 0.40) : 0;
        const deductRate   = Math.min(holdRate + residRate, 0.80);
        const afterDeduct  = taxableGain * (1 - deductRate);
        const taxBase      = Math.max(0, afterDeduct - BASIC_DEDUCTION);
        const tax          = progressiveTax(taxBase);
        const local        = tax * 0.10;
        return { kind: 'over12' as const, gain, taxableRatio, taxableGain, holdRate, residRate, deductRate, afterDeduct, taxBase, rateLabel: taxRateLabel(taxBase), tax, local, total: tax + local };
      }
    }

    const deductRate  = hold >= 3 ? Math.min(Math.floor(hold) * 0.02, 0.30) : 0;
    const afterDeduct = gain * (1 - deductRate);
    const taxBase     = Math.max(0, afterDeduct - BASIC_DEDUCTION);
    const tax         = progressiveTax(taxBase);
    const local       = tax * 0.10;
    return { kind: 'general' as const, gain, deductRate, afterDeduct, taxBase, rateLabel: taxRateLabel(taxBase), tax, local, total: tax + local };
  }, [sellPrice, buyPrice, expenses, holdYears, houseType, isAdjusted, residYears, isUnreg]);

  const houseOptions: { value: HouseType; label: string }[] = [
    { value: 'one',   label: t.reTypeOne },
    { value: 'multi', label: t.reTypeMulti },
    { value: 'land',  label: t.reTypeLand },
  ];

  return (
    <>
      <div className="card">
        <div className="card-title">{t.reInputTitle}</div>
        <div className="input-row">
          <div className="form-group">
            <label>{t.reSell}</label>
            <input type="number" placeholder="500000000" value={sellPrice} onChange={e => setSellPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{t.reCost}</label>
            <input type="number" placeholder="300000000" value={buyPrice} onChange={e => setBuyPrice(e.target.value)} />
          </div>
        </div>
        <div className="input-row">
          <div className="form-group">
            <label>{t.reExpenses}</label>
            <input type="number" placeholder="5000000" value={expenses} onChange={e => setExpenses(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{t.reHoldYears}</label>
            <input type="number" placeholder="5" step="0.5" min="0" value={holdYears} onChange={e => setHoldYears(e.target.value)} />
          </div>
        </div>

        <div className="form-group">
          <label>{t.reType}</label>
          <div className="toggle-group">
            {houseOptions.map(o => (
              <button key={o.value} className={`toggle-btn${houseType === o.value ? ' active' : ''}`} onClick={() => setHouseType(o.value)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>

        {houseType === 'one' && (
          <>
            <div className="form-group">
              <label>{t.reRegion}</label>
              <div className="toggle-group">
                <button className={`toggle-btn${isAdjusted ? ' active' : ''}`}  onClick={() => setIsAdjusted(true)}>{t.reAdjusted}</button>
                <button className={`toggle-btn${!isAdjusted ? ' active' : ''}`} onClick={() => setIsAdjusted(false)}>{t.reNonAdjusted}</button>
              </div>
            </div>
            <div className="form-group">
              <label>{t.reResidYears}</label>
              <input type="number" placeholder="3" step="0.5" min="0" value={residYears} onChange={e => setResidYears(e.target.value)} />
            </div>
          </>
        )}

        <div className="form-group">
          <label className="tax-checkbox-label">
            <input type="checkbox" checked={isUnreg} onChange={e => setIsUnreg(e.target.checked)} />
            {t.reUnreg}
          </label>
        </div>
      </div>

      {r && (
        <div className="card">
          <div className="card-title">{t.reResultTitle}</div>

          {r.kind === 'loss' && (
            <div className="tax-info-box">{t.reLoss}</div>
          )}

          {r.kind === 'exempt' && (
            <div className="tax-success-box">
              {t.reExemptTitle}<br />{t.reExemptDesc}
            </div>
          )}

          {r.kind === 'flat' && (
            <div className="tax-result-grid">
              <div className="tax-row"><span className="tax-label">{t.reGain}</span><span className="tax-value">{fmt(r.gain)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.reBasicDeduct}</span><span className="tax-value">−{fmt(Math.min(r.gain, BASIC_DEDUCTION))}{t.reUnit}</span></div>
              <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.reTaxBase}</span><span className="tax-value">{fmt(r.taxBase)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reFlatRate} ({r.rate})</span><span className="tax-value">{fmt(r.tax)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reLocalTax}</span><span className="tax-value">{fmt(r.local)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-total"><span className="tax-label">{t.reTotal}</span><span className="tax-value">{fmt(r.total)}{t.reUnit}</span></div>
            </div>
          )}

          {r.kind === 'over12' && (
            <div className="tax-result-grid">
              <div className="tax-row"><span className="tax-label">{t.reGain}</span><span className="tax-value">{fmt(r.gain)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.reTaxableRatioLabel} ({pct(r.taxableRatio)})</span><span className="tax-value">{fmt(r.taxableGain)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.reLtDeductLabel} ({pct(r.deductRate)})</span><span className="tax-value">−{fmt(r.taxableGain * r.deductRate)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reIncomeAmt}</span><span className="tax-value">{fmt(r.afterDeduct)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.reBasicDeduct}</span><span className="tax-value">−{fmt(Math.min(r.afterDeduct, BASIC_DEDUCTION))}{t.reUnit}</span></div>
              <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.reTaxBase}</span><span className="tax-value">{fmt(r.taxBase)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reTaxProgressive} ({r.rateLabel})</span><span className="tax-value">{fmt(r.tax)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reLocalTax}</span><span className="tax-value">{fmt(r.local)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-total"><span className="tax-label">{t.reTotal}</span><span className="tax-value">{fmt(r.total)}{t.reUnit}</span></div>
            </div>
          )}

          {r.kind === 'general' && (
            <div className="tax-result-grid">
              <div className="tax-row"><span className="tax-label">{t.reGain}</span><span className="tax-value">{fmt(r.gain)}{t.reUnit}</span></div>
              {r.deductRate > 0 && (
                <div className="tax-row tax-row-sub"><span className="tax-label">{t.reLtDeductLabel} ({pct(r.deductRate)})</span><span className="tax-value">−{fmt(r.gain * r.deductRate)}{t.reUnit}</span></div>
              )}
              <div className="tax-row"><span className="tax-label">{t.reIncomeAmt}</span><span className="tax-value">{fmt(r.afterDeduct)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-sub"><span className="tax-label">{t.reBasicDeduct}</span><span className="tax-value">−{fmt(Math.min(r.afterDeduct, BASIC_DEDUCTION))}{t.reUnit}</span></div>
              <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.reTaxBase}</span><span className="tax-value">{fmt(r.taxBase)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reTaxProgressive} ({r.rateLabel})</span><span className="tax-value">{fmt(r.tax)}{t.reUnit}</span></div>
              <div className="tax-row"><span className="tax-label">{t.reLocalTax}</span><span className="tax-value">{fmt(r.local)}{t.reUnit}</span></div>
              <div className="tax-row tax-row-total"><span className="tax-label">{t.reTotal}</span><span className="tax-value">{fmt(r.total)}{t.reUnit}</span></div>
              {r.deductRate === 0 && parseFloat(holdYears) > 0 && parseFloat(holdYears) < 3 && (
                <p className="tax-notice" style={{ margin: '8px 16px' }}>{t.reShortHold}</p>
              )}
            </div>
          )}

          <p className="tax-disclaimer">{t.reDisclaimer}</p>
        </div>
      )}
    </>
  );
}
