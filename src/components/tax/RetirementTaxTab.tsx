'use client';

import { useState, useMemo } from 'react';

/** 종합소득세 기본세율 (누진공제 방식) */
const BRACKETS = [
  { limit: 14_000_000, rate: 0.06, ded: 0 },
  { limit: 50_000_000, rate: 0.15, ded: 1_260_000 },
  { limit: 88_000_000, rate: 0.24, ded: 5_760_000 },
  { limit: 150_000_000, rate: 0.35, ded: 15_440_000 },
  { limit: 300_000_000, rate: 0.38, ded: 19_940_000 },
  { limit: 500_000_000, rate: 0.40, ded: 25_940_000 },
  { limit: 1_000_000_000, rate: 0.42, ded: 35_940_000 },
  { limit: Infinity, rate: 0.45, ded: 65_940_000 },
];

function progressiveTax(base: number): number {
  if (base <= 0) return 0;
  for (const b of BRACKETS) {
    if (base <= b.limit) return Math.max(0, base * b.rate - b.ded);
  }
  return 0;
}

/** 근속연수공제 (2023년 1월 1일 이후 퇴직분) */
function serviceDeduction(y: number): number {
  if (y <= 0) return 0;
  if (y <= 5) return y * 1_000_000;
  if (y <= 10) return 5_000_000 + (y - 5) * 2_000_000;
  if (y <= 20) return 15_000_000 + (y - 10) * 2_500_000;
  return 40_000_000 + (y - 20) * 3_000_000;
}

/** 환산급여공제 */
function convertedDeduction(c: number): number {
  if (c <= 0) return 0;
  if (c <= 8_000_000) return c;
  if (c <= 70_000_000) return 8_000_000 + (c - 8_000_000) * 0.6;
  if (c <= 100_000_000) return 45_200_000 + (c - 70_000_000) * 0.55;
  if (c <= 300_000_000) return 61_700_000 + (c - 100_000_000) * 0.45;
  return 151_700_000 + (c - 300_000_000) * 0.35;
}

/** 법정 퇴직금 = 1일 평균임금 × 30 × (재직일수 / 365) */
function calcSeverance(monthlyAvgWage: number, days: number): number {
  if (!monthlyAvgWage || !days) return 0;
  const dailyAvg = (monthlyAvgWage * 3) / 91; // 3개월 평균임금 ÷ 91일 근사
  return dailyAvg * 30 * (days / 365);
}

function calcTax(severance: number, serviceYears: number) {
  if (!severance || !serviceYears) return null;

  // 근속연수는 1년 미만 절상
  const y = Math.max(1, Math.ceil(serviceYears));
  const sDed = serviceDeduction(y);
  const afterService = Math.max(0, severance - sDed);
  const converted = (afterService / y) * 12;
  const cDed = convertedDeduction(converted);
  const taxBase = Math.max(0, converted - cDed);
  const convertedTax = progressiveTax(taxBase);
  const incomeTax = (convertedTax / 12) * y;
  const localTax = incomeTax * 0.1;
  const total = incomeTax + localTax;

  return {
    years: y,
    sDed,
    afterService,
    converted,
    cDed,
    taxBase,
    convertedTax,
    incomeTax,
    localTax,
    total,
    net: severance - total,
    effectiveRate: severance > 0 ? (total / severance) * 100 : 0,
  };
}

function fmt(n: number) {
  return Math.round(n).toLocaleString('ko-KR');
}

export default function RetirementTaxTab() {
  const [mode, setMode] = useState<'estimate' | 'direct'>('estimate');
  // 퇴직금 추정용
  const [wage, setWage] = useState('');
  const [days, setDays] = useState('');
  // 직접 입력용
  const [amount, setAmount] = useState('');
  const [years, setYears] = useState('');

  const severance = useMemo(() => {
    if (mode === 'direct') return parseFloat(amount) || 0;
    return calcSeverance(parseFloat(wage) || 0, parseFloat(days) || 0);
  }, [mode, amount, wage, days]);

  const serviceYears = useMemo(() => {
    if (mode === 'direct') return parseFloat(years) || 0;
    return (parseFloat(days) || 0) / 365;
  }, [mode, years, days]);

  const r = useMemo(() => calcTax(severance, serviceYears), [severance, serviceYears]);

  return (
    <>
      <div className="card">
        <div className="card-title">입력 방식</div>
        <div className="toggle-group">
          <button
            className={`toggle-btn${mode === 'estimate' ? ' active' : ''}`}
            onClick={() => setMode('estimate')}
          >
            급여로 퇴직금 추정
          </button>
          <button
            className={`toggle-btn${mode === 'direct' ? ' active' : ''}`}
            onClick={() => setMode('direct')}
          >
            퇴직금 직접 입력
          </button>
        </div>
      </div>

      {mode === 'estimate' ? (
        <div className="card">
          <div className="card-title">퇴직금 추정</div>
          <p className="tax-notice">
            퇴직 직전 3개월 평균 월급과 총 재직일수를 넣으면 법정 퇴직금을 추정합니다. 상여금·연차수당이
            있으면 해당 비율만큼 평균임금에 더해 입력하세요.
          </p>
          <div className="input-row">
            <div className="form-group">
              <label>3개월 평균 월급 (원)</label>
              <input
                type="number"
                placeholder="4000000"
                value={wage}
                onChange={(e) => setWage(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>총 재직일수 (일)</label>
              <input
                type="number"
                placeholder="3650"
                value={days}
                onChange={(e) => setDays(e.target.value)}
              />
            </div>
          </div>
          {severance > 0 && (
            <div className="tax-success-box" style={{ marginTop: '4px' }}>
              추정 퇴직금 <strong>{fmt(severance)}원</strong> · 근속 약{' '}
              {(serviceYears).toFixed(1)}년
            </div>
          )}
        </div>
      ) : (
        <div className="card">
          <div className="card-title">퇴직금 정보</div>
          <div className="input-row">
            <div className="form-group">
              <label>퇴직금 (원)</label>
              <input
                type="number"
                placeholder="100000000"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
            </div>
            <div className="form-group">
              <label>근속연수 (년)</label>
              <input
                type="number"
                placeholder="10"
                value={years}
                onChange={(e) => setYears(e.target.value)}
              />
            </div>
          </div>
        </div>
      )}

      {r && (
        <>
          <div className="card">
            <div className="card-title">퇴직소득세 계산 과정</div>
            <div className="tax-result-grid">
              <div className="tax-row">
                <span className="tax-label">퇴직소득금액</span>
                <span className="tax-value">{fmt(severance)}원</span>
              </div>
              <div className="tax-row tax-row-sub">
                <span className="tax-label">− 근속연수공제 ({r.years}년)</span>
                <span className="tax-value">-{fmt(r.sDed)}원</span>
              </div>
              <div className="tax-row">
                <span className="tax-label">환산급여 = (차감액 ÷ {r.years}년) × 12</span>
                <span className="tax-value">{fmt(r.converted)}원</span>
              </div>
              <div className="tax-row tax-row-sub">
                <span className="tax-label">− 환산급여공제</span>
                <span className="tax-value">-{fmt(r.cDed)}원</span>
              </div>
              <div className="tax-row">
                <span className="tax-label">과세표준</span>
                <span className="tax-value">{fmt(r.taxBase)}원</span>
              </div>
              <div className="tax-row tax-row-sub">
                <span className="tax-label">환산산출세액</span>
                <span className="tax-value">{fmt(r.convertedTax)}원</span>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-title">납부 세액</div>
            <div className="tax-result-grid">
              <div className="tax-row">
                <span className="tax-label">퇴직소득세 (환산산출세액 ÷ 12 × {r.years}년)</span>
                <span className="tax-value">{fmt(r.incomeTax)}원</span>
              </div>
              <div className="tax-row tax-row-sub">
                <span className="tax-label">지방소득세 (10%)</span>
                <span className="tax-value">{fmt(r.localTax)}원</span>
              </div>
              <div className="tax-row tax-row-total">
                <span className="tax-label">총 세액</span>
                <span className="tax-value">{fmt(r.total)}원</span>
              </div>
            </div>
            <div className="tax-success-box" style={{ marginTop: '14px' }}>
              세후 실수령 퇴직금 <strong>{fmt(r.net)}원</strong>
              <br />
              실효세율 {r.effectiveRate.toFixed(2)}%
            </div>
            {r.total === 0 && (
              <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
                근속연수공제와 환산급여공제로 과세표준이 0이 되어 납부할 퇴직소득세가 없습니다. 근속
                기간이 짧고 퇴직금이 크지 않은 경우 자주 나오는 결과입니다.
              </div>
            )}
            <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
              퇴직금을 <strong>IRP 계좌로 이체</strong>하면 이 세금을 지금 내지 않고 연금 수령 시점까지
              미룰 수 있습니다. 연금으로 나눠 받으면 퇴직소득세의 60~70% 수준만 부담합니다.
            </div>
            <p className="tax-disclaimer">
              본 계산은 2023년 이후 퇴직분 기준 참고용입니다. 임원 퇴직금 한도 초과분, 퇴직위로금,
              2012년 이전 근속분 등은 별도 규정이 적용되어 실제 원천징수액과 다를 수 있습니다.
            </p>
          </div>
        </>
      )}
    </>
  );
}
