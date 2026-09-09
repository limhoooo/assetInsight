'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type Mode     = 'future' | 'pv';
type Freq     = 'annual' | 'monthly' | 'quarterly';

const FREQS: Record<Freq, number> = { annual: 1, quarterly: 4, monthly: 12 };

function calcFuture(principal: number, monthly: number, rate: number, years: number, freq: Freq) {
  if (!principal && !monthly) return null;
  if (!rate || !years) return null;
  const n  = FREQS[freq];
  const r  = rate / 100 / n;
  const t  = n * years;
  // 선택한 복리 주기가 만드는 실효 연이율을 월 이율로 환산해
  // 초기 투자금과 월 적립금이 같은 기준으로 불어나게 한다.
  const effAnnual = Math.pow(1 + r, n) - 1;
  const rMonthly  = Math.pow(1 + effAnnual, 1 / 12) - 1;
  const fvPrincipal = principal * Math.pow(1 + r, t);
  const fvMonthly   = monthly > 0
    ? monthly * (Math.pow(1 + rMonthly, 12 * years) - 1) / rMonthly
    : 0;
  const total       = fvPrincipal + fvMonthly;
  const totalInvested = principal + monthly * 12 * years;
  const interest    = total - totalInvested;
  const simpleInterest = (principal * rate / 100 * years) + (monthly * 12 * years * rate / 100 * years / 2);
  // yearly breakdown (max 30년)
  const breakdown: { year: number; amount: number }[] = [];
  for (let y = 1; y <= Math.min(years, 30); y++) {
    const ty = n * y;
    const fvP = principal * Math.pow(1 + r, ty);
    const fvM = monthly > 0
      ? monthly * (Math.pow(1 + rMonthly, 12 * y) - 1) / rMonthly
      : 0;
    breakdown.push({ year: y, amount: fvP + fvM });
  }
  return { total, totalInvested, interest, simpleInterest, breakdown };
}

function calcPV(target: number, rate: number, years: number, freq: Freq) {
  if (!target || !rate || !years) return null;
  const n = FREQS[freq];
  const r = rate / 100 / n;
  const t = n * years;
  const pv = target / Math.pow(1 + r, t);
  return { pv, gain: target - pv };
}

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }

export default function CompoundTab() {
  const { t } = useLanguage();
  const [mode,      setMode]      = useState<Mode>('future');
  const [principal, setPrincipal] = useState('');
  const [monthly,   setMonthly]   = useState('');
  const [rate,      setRate]      = useState('');
  const [years,     setYears]     = useState('');
  const [freq,      setFreq]      = useState<Freq>('annual');
  const [target,    setTarget]    = useState('');

  const fResult = useMemo(() =>
    calcFuture(parseFloat(principal)||0, parseFloat(monthly)||0, parseFloat(rate)||0, parseFloat(years)||0, freq),
    [principal, monthly, rate, years, freq]
  );
  const pvResult = useMemo(() =>
    calcPV(parseFloat(target)||0, parseFloat(rate)||0, parseFloat(years)||0, freq),
    [target, rate, years, freq]
  );

  const freqOptions: { value: Freq; label: string }[] = [
    { value: 'annual',    label: t.cpFreqAnnual },
    { value: 'quarterly', label: t.cpFreqQuarterly },
    { value: 'monthly',   label: t.cpFreqMonthly },
  ];

  return (
    <>
      <div className="card" style={{ padding: '14px 20px' }}>
        <div className="toggle-group">
          <button className={`toggle-btn${mode === 'future' ? ' active' : ''}`} onClick={() => setMode('future')}>{t.cpTabFuture}</button>
          <button className={`toggle-btn${mode === 'pv' ? ' active' : ''}`}     onClick={() => setMode('pv')}>{t.cpTabPV}</button>
        </div>
      </div>

      {mode === 'future' && (
        <>
          <div className="card">
            <div className="card-title">{t.cpFutureTitle}</div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.cpPrincipal}</label>
                <input type="number" placeholder="10000000" value={principal} onChange={e => setPrincipal(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.cpMonthly}</label>
                <input type="number" placeholder="0" value={monthly} onChange={e => setMonthly(e.target.value)} />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.cpRate}</label>
                <input type="number" placeholder="7" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.cpYears}</label>
                <input type="number" placeholder="10" min="1" max="100" value={years} onChange={e => setYears(e.target.value)} />
              </div>
            </div>
            <div className="form-group">
              <label>{t.cpFreq}</label>
              <div className="toggle-group">
                {freqOptions.map(o => (
                  <button key={o.value} className={`toggle-btn${freq === o.value ? ' active' : ''}`} onClick={() => setFreq(o.value)}>{o.label}</button>
                ))}
              </div>
            </div>
          </div>

          {fResult && (
            <>
              <div className="card">
                <div className="card-title">{t.cpResultTitle}</div>
                <div className="tax-result-grid">
                  <div className="tax-row"><span className="tax-label">{t.cpTotalInvested}</span><span className="tax-value">{fmt(fResult.totalInvested)}원</span></div>
                  <div className="tax-row"><span className="tax-label">{t.cpInterest}</span><span className="tax-value">{fmt(fResult.interest)}원</span></div>
                  <div className="tax-row tax-row-total"><span className="tax-label">{t.cpTotal}</span><span className="tax-value">{fmt(fResult.total)}원</span></div>
                </div>
                <div className="tax-result-grid" style={{ marginTop: 12 }}>
                  <div className="tax-row tax-row-sub"><span className="tax-label">{t.cpSimpleInterest}</span><span className="tax-value">{fmt(fResult.simpleInterest)}원</span></div>
                  <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.cpEffect}</span><span className="tax-value">+{fmt(fResult.interest - fResult.simpleInterest)}원</span></div>
                </div>
                <p className="tax-disclaimer">{t.cpDisclaimer}</p>
              </div>

              {fResult.breakdown.length > 0 && (
                <div className="card">
                  <div className="card-title">{t.cpBreakdownTitle}</div>
                  <div className="table-wrap">
                    <table>
                      <thead>
                        <tr>
                          <th>{t.cpBreakdownYear}</th>
                          <th>{t.cpBreakdownInvested}</th>
                          <th>{t.cpBreakdownAmount}</th>
                          <th>{t.cpBreakdownReturn}</th>
                        </tr>
                      </thead>
                      <tbody>
                        {fResult.breakdown.map(row => {
                          const invested = parseFloat(principal||'0') + parseFloat(monthly||'0') * 12 * row.year;
                          return (
                            <tr key={row.year}>
                              <td>{row.year}{t.cpYearUnit}</td>
                              <td>{fmt(invested)}원</td>
                              <td>{fmt(row.amount)}원</td>
                              <td style={{ color: 'var(--success)', fontWeight: 600 }}>+{((row.amount / invested - 1) * 100).toFixed(1)}%</td>
                            </tr>
                          );
                        })}
                      </tbody>
                    </table>
                  </div>
                </div>
              )}
            </>
          )}
        </>
      )}

      {mode === 'pv' && (
        <>
          <div className="card">
            <div className="card-title">{t.cpPVTitle}</div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.cpTarget}</label>
                <input type="number" placeholder="100000000" value={target} onChange={e => setTarget(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.cpRate}</label>
                <input type="number" placeholder="7" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
              </div>
            </div>
            <div className="input-row">
              <div className="form-group">
                <label>{t.cpYears}</label>
                <input type="number" placeholder="10" min="1" max="100" value={years} onChange={e => setYears(e.target.value)} />
              </div>
              <div className="form-group">
                <label>{t.cpFreq}</label>
                <div className="toggle-group">
                  {freqOptions.map(o => (
                    <button key={o.value} className={`toggle-btn${freq === o.value ? ' active' : ''}`} onClick={() => setFreq(o.value)}>{o.label}</button>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {pvResult && (
            <div className="card">
              <div className="card-title">{t.cpResultTitle}</div>
              <div className="tax-result-grid">
                <div className="tax-row"><span className="tax-label">{t.cpTarget}</span><span className="tax-value">{fmt(parseFloat(target))}원</span></div>
                <div className="tax-row tax-row-total"><span className="tax-label">{t.cpRequiredPV}</span><span className="tax-value">{fmt(pvResult.pv)}원</span></div>
                <div className="tax-row tax-row-emphasis"><span className="tax-label">{t.cpPVGain}</span><span className="tax-value">+{fmt(pvResult.gain)}원</span></div>
              </div>
              <p className="tax-disclaimer">{t.cpDisclaimer}</p>
            </div>
          )}
        </>
      )}
    </>
  );
}
