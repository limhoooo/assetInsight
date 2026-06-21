'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type PropType = 'housing' | 'non-housing';
type Homes = 1 | 2 | 3 | 4;

function getBasicHousingRate(price: number): number {
  if (price <= 600_000_000) return 0.01;
  if (price <= 900_000_000) return (price * 2 / 300_000_000 - 3) / 100;
  return 0.03;
}

function calcTax(price: number, propType: PropType, homes: Homes, isAdjusted: boolean, isOver85: boolean) {
  if (!price) return null;

  let taxRate: number;

  if (propType === 'non-housing') {
    taxRate = 0.04;
    const tax   = price * taxRate;
    const edu   = tax * 0.1;
    const rural = price * 0.002;
    return { taxRate, tax, edu, rural, total: tax + edu + rural };
  }

  // 주택
  if (homes >= 4) {
    taxRate = 0.12;
  } else if (homes === 3) {
    taxRate = isAdjusted ? 0.12 : 0.08;
  } else if (homes === 2) {
    taxRate = isAdjusted ? 0.08 : getBasicHousingRate(price);
  } else {
    taxRate = getBasicHousingRate(price);
  }

  const tax   = price * taxRate;
  const edu   = tax * 0.1;
  const rural = taxRate >= 0.08
    ? price * 0.006
    : isOver85 ? price * 0.002 : 0;

  return { taxRate, tax, edu, rural, total: tax + edu + rural };
}

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }
function pctStr(r: number) { return (r * 100).toFixed(2).replace(/\.?0+$/, '') + '%'; }

export default function AcquisitionTaxTab() {
  const { t } = useLanguage();
  const [price,      setPrice]      = useState('');
  const [propType,   setPropType]   = useState<PropType>('housing');
  const [homes,      setHomes]      = useState<Homes>(1);
  const [isAdjusted, setIsAdjusted] = useState(false);
  const [isOver85,   setIsOver85]   = useState(false);

  const r = useMemo(() =>
    calcTax(parseFloat(price) || 0, propType, homes, isAdjusted, isOver85),
    [price, propType, homes, isAdjusted, isOver85]
  );

  const homesOptions: { value: Homes; label: string }[] = [
    { value: 1, label: t.atHomes1 },
    { value: 2, label: t.atHomes2 },
    { value: 3, label: t.atHomes3 },
    { value: 4, label: t.atHomes4Plus },
  ];

  return (
    <>
      <div className="card">
        <div className="card-title">{t.atInputTitle}</div>

        <div className="form-group">
          <label>{t.atPrice}</label>
          <input type="number" placeholder="500000000" value={price} onChange={e => setPrice(e.target.value)} />
        </div>

        <div className="form-group">
          <label>{t.atType}</label>
          <div className="toggle-group">
            <button className={`toggle-btn${propType === 'housing' ? ' active' : ''}`}    onClick={() => setPropType('housing')}>{t.atTypeHousing}</button>
            <button className={`toggle-btn${propType === 'non-housing' ? ' active' : ''}`} onClick={() => setPropType('non-housing')}>{t.atTypeNonHousing}</button>
          </div>
        </div>

        {propType === 'housing' && (
          <>
            <div className="form-group">
              <label>{t.atHomes}</label>
              <div className="toggle-group">
                {homesOptions.map(o => (
                  <button key={o.value} className={`toggle-btn${homes === o.value ? ' active' : ''}`} onClick={() => setHomes(o.value)}>
                    {o.label}
                  </button>
                ))}
              </div>
            </div>

            {(homes === 2 || homes === 3) && (
              <div className="form-group">
                <label>{t.atRegion}</label>
                <div className="toggle-group">
                  <button className={`toggle-btn${isAdjusted ? ' active' : ''}`}  onClick={() => setIsAdjusted(true)}>{t.atAdjusted}</button>
                  <button className={`toggle-btn${!isAdjusted ? ' active' : ''}`} onClick={() => setIsAdjusted(false)}>{t.atNonAdjusted}</button>
                </div>
              </div>
            )}

            <div className="form-group">
              <label>{t.atArea}</label>
              <div className="toggle-group">
                <button className={`toggle-btn${isOver85 ? ' active' : ''}`}  onClick={() => setIsOver85(true)}>{t.atAreaOver85}</button>
                <button className={`toggle-btn${!isOver85 ? ' active' : ''}`} onClick={() => setIsOver85(false)}>{t.atAreaUnder85}</button>
              </div>
            </div>
          </>
        )}
      </div>

      {r && parseFloat(price) > 0 && (
        <div className="card">
          <div className="card-title">{t.atResultTitle}</div>
          <div className="tax-result-grid">
            <div className="tax-row">
              <span className="tax-label">{t.atPrice}</span>
              <span className="tax-value">{fmt(parseFloat(price))}원</span>
            </div>
            <div className="tax-row tax-row-sub">
              <span className="tax-label">{t.atTaxRate}</span>
              <span className="tax-value">{pctStr(r.taxRate)}</span>
            </div>
            <div className="tax-row">
              <span className="tax-label">{t.atTax}</span>
              <span className="tax-value">{fmt(r.tax)}원</span>
            </div>
            <div className="tax-row">
              <span className="tax-label">{t.atLocalEdu}</span>
              <span className="tax-value">{fmt(r.edu)}원</span>
            </div>
            {r.rural > 0 && (
              <div className="tax-row">
                <span className="tax-label">{t.atRuralSpec}</span>
                <span className="tax-value">{fmt(r.rural)}원</span>
              </div>
            )}
            <div className="tax-row tax-row-total">
              <span className="tax-label">{t.atTotal}</span>
              <span className="tax-value">{fmt(r.total)}원</span>
            </div>
          </div>
          <p className="tax-disclaimer">{t.atDisclaimer}</p>
        </div>
      )}
    </>
  );
}
