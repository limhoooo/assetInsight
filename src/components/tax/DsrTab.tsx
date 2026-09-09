'use client';

import { useState, useMemo } from 'react';

type RateType = 'variable' | 'mixed' | 'periodic' | 'fixed';
type Repay = 'equal-payment' | 'equal-principal';

/** 3단계 스트레스 금리 */
const STRESS_RATE = 1.5;

/**
 * 스트레스 금리 가산비율.
 * 혼합형·주기형은 (고정금리 기간 ÷ 만기) 비율 구간에 따라 달라진다.
 */
function stressMultiplier(type: RateType, fixedYears: number, totalYears: number): number {
  if (type === 'variable') return 1;
  if (type === 'fixed') return 0;
  const ratio = totalYears > 0 ? fixedYears / totalYears : 0;
  if (ratio >= 0.7) return 0;
  if (type === 'mixed') {
    if (ratio < 0.3) return 0.8;
    if (ratio < 0.5) return 0.6;
    return 0.4;
  }
  // periodic
  if (ratio < 0.3) return 0.4;
  if (ratio < 0.5) return 0.3;
  return 0.2;
}

/** 원리금균등 월 상환액 계수 */
function annuityFactor(r: number, n: number): number {
  if (r === 0) return 1 / n;
  const p = Math.pow(1 + r, n);
  return (r * p) / (p - 1);
}

/** 주어진 연간 상환 여력으로 빌릴 수 있는 원금 */
function principalFromAnnual(annual: number, ratePct: number, years: number, repay: Repay): number {
  const n = years * 12;
  const r = ratePct / 100 / 12;
  if (n <= 0) return 0;
  if (repay === 'equal-payment') {
    const f = annuityFactor(r, n);
    return f > 0 ? annual / 12 / f : 0;
  }
  // 원금균등은 첫 1년 상환액이 가장 크고, DSR도 그 금액으로 잡힌다.
  // 1년차 상환액 = 원금 × (12/n + r × (12 - 66/n))
  const coef = 12 / n + r * (12 - 66 / n);
  return coef > 0 ? annual / coef : 0;
}

/** 실제 금리로 계산한 월 상환액(원리금균등) 또는 첫 달 상환액(원금균등) */
function monthlyPayment(principal: number, ratePct: number, years: number, repay: Repay): number {
  const n = years * 12;
  const r = ratePct / 100 / 12;
  if (n <= 0) return 0;
  if (repay === 'equal-payment') return principal * annuityFactor(r, n);
  return principal / n + principal * r;
}

function calc(
  incomeManwon: number,
  existingAnnualManwon: number,
  creditLineManwon: number,
  ratePct: number,
  years: number,
  repay: Repay,
  rateType: RateType,
  fixedYears: number,
  dsrLimitPct: number,
) {
  const income = incomeManwon * 10_000;
  if (!income || !ratePct || !years) return null;

  // 마이너스 통장은 사용 여부와 무관하게 한도 전액이 부채로 잡히고,
  // 통상 5년 만기로 나눠 연간 상환액에 반영된다.
  const creditLine = creditLineManwon * 10_000;
  const creditAnnual = creditLine > 0
    ? monthlyPayment(creditLine, ratePct, 5, 'equal-payment') * 12
    : 0;

  const existingAnnual = existingAnnualManwon * 10_000 + creditAnnual;
  const capacity = income * (dsrLimitPct / 100);
  const available = capacity - existingAnnual;

  const multiplier = stressMultiplier(rateType, fixedYears, years);
  const stressAdd = STRESS_RATE * multiplier;
  const stressedRate = ratePct + stressAdd;

  const limitBefore = available > 0 ? principalFromAnnual(available, ratePct, years, repay) : 0;
  const limitAfter = available > 0 ? principalFromAnnual(available, stressedRate, years, repay) : 0;

  // 실제로 부담하는 금액은 약정 금리 기준이다.
  const actualMonthly = monthlyPayment(limitAfter, ratePct, years, repay);
  const existingDsr = (existingAnnual / income) * 100;
  const finalDsr = ((existingAnnual + actualMonthly * 12) / income) * 100;

  return {
    income,
    capacity,
    existingAnnual,
    creditAnnual,
    available,
    multiplier,
    stressAdd,
    stressedRate,
    limitBefore,
    limitAfter,
    reduced: limitBefore - limitAfter,
    actualMonthly,
    existingDsr,
    finalDsr,
    overLimit: available <= 0,
  };
}

function fmt(n: number) {
  return Math.round(n).toLocaleString('ko-KR');
}
/** 원 단위 금액을 억/만원 표기로 */
function fmtKor(n: number) {
  const v = Math.round(n);
  if (v <= 0) return '0원';
  const eok = Math.floor(v / 100_000_000);
  const man = Math.floor((v % 100_000_000) / 10_000);
  if (eok > 0) return man > 0 ? `${eok}억 ${man.toLocaleString('ko-KR')}만원` : `${eok}억원`;
  return `${man.toLocaleString('ko-KR')}만원`;
}

const RATE_TYPES: { value: RateType; label: string }[] = [
  { value: 'variable', label: '변동금리' },
  { value: 'mixed', label: '혼합형' },
  { value: 'periodic', label: '주기형' },
  { value: 'fixed', label: '순수고정' },
];

export default function DsrTab() {
  const [income, setIncome] = useState('');
  const [existing, setExisting] = useState('');
  const [creditLine, setCreditLine] = useState('');
  const [rate, setRate] = useState('');
  const [years, setYears] = useState('');
  const [repay, setRepay] = useState<Repay>('equal-payment');
  const [rateType, setRateType] = useState<RateType>('variable');
  const [fixedYears, setFixedYears] = useState('5');
  const [dsrLimit, setDsrLimit] = useState(40);

  const r = useMemo(
    () =>
      calc(
        parseFloat(income) || 0,
        parseFloat(existing) || 0,
        parseFloat(creditLine) || 0,
        parseFloat(rate) || 0,
        parseFloat(years) || 0,
        repay,
        rateType,
        parseFloat(fixedYears) || 0,
        dsrLimit,
      ),
    [income, existing, creditLine, rate, years, repay, rateType, fixedYears, dsrLimit],
  );

  const needsFixedPeriod = rateType === 'mixed' || rateType === 'periodic';

  return (
    <>
      <div className="card">
        <div className="card-title">소득과 기존 대출</div>
        <p className="tax-notice">
          금액은 <strong>만원 단위</strong>로 입력하세요. 연소득 6,000만원이면 6000을 넣습니다.
        </p>
        <div className="input-row">
          <div className="form-group">
            <label>연소득 (만원)</label>
            <input
              type="number"
              placeholder="6000"
              value={income}
              onChange={(e) => setIncome(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>기존 대출 연간 상환액 (만원)</label>
            <input
              type="number"
              placeholder="0"
              value={existing}
              onChange={(e) => setExisting(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>마이너스 통장 한도 (만원)</label>
          <input
            type="number"
            placeholder="0"
            value={creditLine}
            onChange={(e) => setCreditLine(e.target.value)}
          />
          <p className="tax-notice" style={{ marginTop: '8px', marginBottom: 0 }}>
            실제로 쓰지 않아도 한도 전액이 부채로 잡힙니다. 5년 분할 기준으로 연간 상환액에 반영합니다.
          </p>
        </div>
        <div className="form-group">
          <label>DSR 규제 비율</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn${dsrLimit === 40 ? ' active' : ''}`}
              onClick={() => setDsrLimit(40)}
            >
              은행권 40%
            </button>
            <button
              className={`toggle-btn${dsrLimit === 50 ? ' active' : ''}`}
              onClick={() => setDsrLimit(50)}
            >
              제2금융권 50%
            </button>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="card-title">받으려는 대출</div>
        <div className="input-row">
          <div className="form-group">
            <label>연 이자율 (%)</label>
            <input
              type="number"
              step="0.1"
              placeholder="4.5"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>대출 기간 (년)</label>
            <input
              type="number"
              placeholder="30"
              value={years}
              onChange={(e) => setYears(e.target.value)}
            />
          </div>
        </div>
        <div className="form-group">
          <label>금리 유형</label>
          <div className="toggle-group">
            {RATE_TYPES.map((o) => (
              <button
                key={o.value}
                className={`toggle-btn${rateType === o.value ? ' active' : ''}`}
                onClick={() => setRateType(o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
        </div>
        {needsFixedPeriod && (
          <div className="form-group">
            <label>고정금리 기간 (년)</label>
            <input
              type="number"
              placeholder="5"
              value={fixedYears}
              onChange={(e) => setFixedYears(e.target.value)}
            />
            <p className="tax-notice" style={{ marginTop: '8px', marginBottom: 0 }}>
              고정금리 기간이 만기의 70% 이상이면 스트레스 금리가 적용되지 않습니다.
            </p>
          </div>
        )}
        <div className="form-group">
          <label>상환 방식</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn${repay === 'equal-payment' ? ' active' : ''}`}
              onClick={() => setRepay('equal-payment')}
            >
              원리금균등
            </button>
            <button
              className={`toggle-btn${repay === 'equal-principal' ? ' active' : ''}`}
              onClick={() => setRepay('equal-principal')}
            >
              원금균등
            </button>
          </div>
        </div>
      </div>

      {r && (
        <>
          <div className="card">
            <div className="card-title">DSR 상환 여력</div>
            <div className="tax-result-grid">
              <div className="tax-row">
                <span className="tax-label">연간 상환 가능액 (연소득 × {dsrLimit}%)</span>
                <span className="tax-value">{fmt(r.capacity)}원</span>
              </div>
              <div className="tax-row tax-row-sub">
                <span className="tax-label">기존 대출 연간 상환액</span>
                <span className="tax-value">-{fmt(r.existingAnnual)}원</span>
              </div>
              {r.creditAnnual > 0 && (
                <div className="tax-row tax-row-sub">
                  <span className="tax-label">└ 마이너스 통장 환산분</span>
                  <span className="tax-value">{fmt(r.creditAnnual)}원</span>
                </div>
              )}
              <div className="tax-row tax-row-total">
                <span className="tax-label">신규 대출에 쓸 수 있는 여력</span>
                <span className="tax-value">{fmt(Math.max(0, r.available))}원</span>
              </div>
            </div>
            {r.overLimit && (
              <div className="guide-warning-box" style={{ marginTop: '14px' }}>
                기존 대출만으로 이미 DSR {dsrLimit}%를 채웠습니다. 현재 조건에서는 추가 대출이 어렵습니다.
              </div>
            )}
          </div>

          {!r.overLimit && (
            <div className="card">
              <div className="card-title">스트레스 DSR 적용 결과</div>
              <div className="table-wrap">
                <table>
                  <thead>
                    <tr>
                      <th style={{ textAlign: 'left' }}>구분</th>
                      <th>적용 금리</th>
                      <th>대출 한도</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td>스트레스 적용 전</td>
                      <td>{(parseFloat(rate) || 0).toFixed(2)}%</td>
                      <td>{fmtKor(r.limitBefore)}</td>
                    </tr>
                    <tr>
                      <td>
                        <strong>스트레스 적용 후</strong>
                      </td>
                      <td>
                        <strong>{r.stressedRate.toFixed(2)}%</strong>
                      </td>
                      <td>
                        <strong>{fmtKor(r.limitAfter)}</strong>
                      </td>
                    </tr>
                    <tr>
                      <td>줄어든 한도</td>
                      <td>+{r.stressAdd.toFixed(2)}%p</td>
                      <td>-{fmtKor(r.reduced)}</td>
                    </tr>
                  </tbody>
                </table>
              </div>
              <div className="info-box" style={{ marginTop: '14px' }}>
                스트레스 금리 {STRESS_RATE}%에 가산비율 {(r.multiplier * 100).toFixed(0)}%가 적용돼{' '}
                <strong>{r.stressAdd.toFixed(2)}%p</strong>가 얹혔습니다.
                {r.multiplier === 0 && ' 고정금리 비중이 높아 스트레스 금리가 붙지 않았습니다.'}
              </div>
              <div className="tax-result-grid">
                <div className="tax-row">
                  <span className="tax-label">
                    {repay === 'equal-payment' ? '월 납입금 (약정 금리 기준)' : '첫 달 납입금 (약정 금리 기준)'}
                  </span>
                  <span className="tax-value">{fmt(r.actualMonthly)}원</span>
                </div>
                <div className="tax-row tax-row-sub">
                  <span className="tax-label">기존 대출만의 DSR</span>
                  <span className="tax-value">{r.existingDsr.toFixed(1)}%</span>
                </div>
                <div className="tax-row tax-row-total">
                  <span className="tax-label">신규 대출 포함 DSR</span>
                  <span className="tax-value">{r.finalDsr.toFixed(1)}%</span>
                </div>
              </div>
              <p className="tax-disclaimer">
                한도는 원리금 상환액이 DSR 규제 비율에 딱 맞춰지는 금액입니다. 실제 승인 한도는 LTV,
                DTI, 신용등급, 담보 가치, 은행별 내부 기준에 따라 더 낮아질 수 있습니다.
              </p>
            </div>
          )}
        </>
      )}
    </>
  );
}
