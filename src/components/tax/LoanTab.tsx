'use client';

import { useState, useMemo } from 'react';
import { useLanguage } from '@/contexts/LanguageContext';

type RepayType = 'equal-payment' | 'equal-principal' | 'bullet';

interface MonthRow { month: number; payment: number; principal: number; interest: number; balance: number; }
interface YearRow  { year: number; totalPayment: number; totalPrincipal: number; totalInterest: number; balance: number; }

function calcLoan(amount: number, rate: number, months: number, type: RepayType) {
  if (!amount || !months) return null;
  const r = rate / 100 / 12;

  if (type === 'bullet') {
    const monthlyInterest = r === 0 ? 0 : amount * r;
    const totalInterest   = monthlyInterest * months;
    return { type, firstPayment: monthlyInterest, lastPayment: amount + monthlyInterest, totalPayment: amount + totalInterest, totalInterest, rows: [] as YearRow[] };
  }

  const rows: MonthRow[] = [];

  if (type === 'equal-payment') {
    const monthly = r === 0
      ? amount / months
      : amount * r * Math.pow(1 + r, months) / (Math.pow(1 + r, months) - 1);
    let balance = amount;
    for (let i = 1; i <= months; i++) {
      const interest  = balance * r;
      const principal = monthly - interest;
      balance = Math.max(0, balance - principal);
      rows.push({ month: i, payment: monthly, principal, interest, balance });
    }
    const totalPayment  = monthly * months;
    const totalInterest = totalPayment - amount;
    return { type, firstPayment: monthly, lastPayment: monthly, totalPayment, totalInterest, rows: toYearly(rows) };
  }

  if (type === 'equal-principal') {
    const principalPer = amount / months;
    let balance = amount;
    let totalInterest = 0;
    for (let i = 1; i <= months; i++) {
      const interest = balance * r;
      const payment  = principalPer + interest;
      totalInterest += interest;
      balance = Math.max(0, balance - principalPer);
      rows.push({ month: i, payment, principal: principalPer, interest, balance });
    }
    return { type, firstPayment: rows[0].payment, lastPayment: rows[rows.length - 1].payment, totalPayment: amount + totalInterest, totalInterest, rows: toYearly(rows) };
  }

  return null;
}

function toYearly(rows: MonthRow[]): YearRow[] {
  const map: Record<number, YearRow> = {};
  rows.forEach(r => {
    const y = Math.ceil(r.month / 12);
    if (!map[y]) map[y] = { year: y, totalPayment: 0, totalPrincipal: 0, totalInterest: 0, balance: 0 };
    map[y].totalPayment   += r.payment;
    map[y].totalPrincipal += r.principal;
    map[y].totalInterest  += r.interest;
    map[y].balance         = r.balance;
  });
  return Object.values(map);
}

function fmt(n: number) { return Math.round(n).toLocaleString('ko-KR'); }

export default function LoanTab() {
  const { t } = useLanguage();
  const [amount,   setAmount]   = useState('');
  const [rate,     setRate]     = useState('');
  const [months,   setMonths]   = useState('');
  const [repay,    setRepay]    = useState<RepayType>('equal-payment');

  const r = useMemo(() =>
    calcLoan(parseFloat(amount)||0, parseFloat(rate)||0, parseFloat(months)||0, repay),
    [amount, rate, months, repay]
  );

  const repayOptions: { value: RepayType; label: string }[] = [
    { value: 'equal-payment',   label: t.lnRepayEqual },
    { value: 'equal-principal', label: t.lnRepayPrincipal },
    { value: 'bullet',          label: t.lnRepayBullet },
  ];

  return (
    <>
      <div className="card">
        <div className="card-title">{t.lnInputTitle}</div>
        <div className="input-row">
          <div className="form-group">
            <label>{t.lnAmount}</label>
            <input type="number" placeholder="100000000" value={amount} onChange={e => setAmount(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{t.lnRate}</label>
            <input type="number" placeholder="4.5" step="0.1" value={rate} onChange={e => setRate(e.target.value)} />
          </div>
        </div>
        <div className="form-group">
          <label>{t.lnMonths}</label>
          <input type="number" placeholder="360" min="1" value={months} onChange={e => setMonths(e.target.value)} />
        </div>
        <div className="form-group">
          <label>{t.lnRepayType}</label>
          <div className="toggle-group">
            {repayOptions.map(o => (
              <button key={o.value} className={`toggle-btn${repay === o.value ? ' active' : ''}`} onClick={() => setRepay(o.value)}>
                {o.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {r && (
        <>
          <div className="card">
            <div className="card-title">{t.lnResultTitle}</div>
            <div className="tax-result-grid">
              <div className="tax-row">
                <span className="tax-label">{t.lnLoanAmount}</span>
                <span className="tax-value">{fmt(parseFloat(amount))}원</span>
              </div>
              {r.type === 'equal-payment' && (
                <div className="tax-row">
                  <span className="tax-label">{t.lnMonthlyPayment}</span>
                  <span className="tax-value">{fmt(r.firstPayment)}원</span>
                </div>
              )}
              {r.type === 'equal-principal' && (
                <>
                  <div className="tax-row">
                    <span className="tax-label">{t.lnFirstPayment}</span>
                    <span className="tax-value">{fmt(r.firstPayment)}원</span>
                  </div>
                  <div className="tax-row tax-row-sub">
                    <span className="tax-label">{t.lnLastPayment}</span>
                    <span className="tax-value">{fmt(r.lastPayment)}원</span>
                  </div>
                </>
              )}
              {r.type === 'bullet' && (
                <>
                  <div className="tax-row">
                    <span className="tax-label">{t.lnMonthlyInterest}</span>
                    <span className="tax-value">{fmt(r.firstPayment)}원</span>
                  </div>
                  <div className="tax-row tax-row-sub">
                    <span className="tax-label">{t.lnLastPayment}</span>
                    <span className="tax-value">{fmt(r.lastPayment)}원</span>
                  </div>
                </>
              )}
              <div className="tax-row">
                <span className="tax-label">{t.lnTotalInterest}</span>
                <span className="tax-value">{fmt(r.totalInterest)}원</span>
              </div>
              <div className="tax-row tax-row-total">
                <span className="tax-label">{t.lnTotalPayment}</span>
                <span className="tax-value">{fmt(r.totalPayment)}원</span>
              </div>
            </div>
            <p className="tax-disclaimer">{t.lnDisclaimer}</p>
          </div>

          {r.rows.length > 0 && (
            <div className="card">
              <div className="card-title">{t.lnScheduleTitle}</div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th>{t.lnScYear}</th>
                      <th>{t.lnScPayment}</th>
                      <th>{t.lnScPrincipal}</th>
                      <th>{t.lnScInterest}</th>
                      <th>{t.lnScBalance}</th>
                    </tr>
                  </thead>
                  <tbody>
                    {r.rows.map(row => (
                      <tr key={row.year}>
                        <td>{row.year}{t.lnYearUnit}</td>
                        <td>{fmt(row.totalPayment)}원</td>
                        <td>{fmt(row.totalPrincipal)}원</td>
                        <td>{fmt(row.totalInterest)}원</td>
                        <td>{fmt(row.balance)}원</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          )}
        </>
      )}
    </>
  );
}
