'use client';

import { useState, useMemo } from 'react';

type Relation = 'spouse' | 'lineal-adult' | 'lineal-minor' | 'descendant' | 'other-relative' | 'none';

/** 증여재산공제 (10년 합산 한도) */
const RELATIONS: { value: Relation; label: string; deduction: number; note: string }[] = [
  { value: 'spouse', label: '배우자', deduction: 600_000_000, note: '10년간 6억원' },
  { value: 'lineal-adult', label: '성인 자녀', deduction: 50_000_000, note: '10년간 5,000만원' },
  { value: 'lineal-minor', label: '미성년 자녀', deduction: 20_000_000, note: '10년간 2,000만원' },
  { value: 'descendant', label: '자녀→부모', deduction: 50_000_000, note: '10년간 5,000만원' },
  { value: 'other-relative', label: '기타 친족', deduction: 10_000_000, note: '10년간 1,000만원' },
  { value: 'none', label: '타인', deduction: 0, note: '공제 없음' },
];

/** 증여세 누진세율 */
const BRACKETS = [
  { limit: 100_000_000, rate: 0.10, ded: 0 },
  { limit: 500_000_000, rate: 0.20, ded: 10_000_000 },
  { limit: 1_000_000_000, rate: 0.30, ded: 60_000_000 },
  { limit: 3_000_000_000, rate: 0.40, ded: 160_000_000 },
  { limit: Infinity, rate: 0.50, ded: 460_000_000 },
];

function progressiveTax(base: number) {
  if (base <= 0) return { tax: 0, rate: 0 };
  for (const b of BRACKETS) {
    if (base <= b.limit) return { tax: Math.max(0, base * b.rate - b.ded), rate: b.rate };
  }
  return { tax: 0, rate: 0 };
}

function calc(
  giftAmount: number,
  priorGifts: number,
  relation: Relation,
  isMinorSkip: boolean,
  reportOnTime: boolean,
) {
  if (!giftAmount) return null;

  const rel = RELATIONS.find((r) => r.value === relation)!;
  // 10년 내 동일인에게 받은 증여는 합산해 과세하고, 공제도 그 기간 안에서 한 번만 쓴다.
  const totalGift = giftAmount + priorGifts;
  const deduction = Math.min(rel.deduction, totalGift);
  const taxBase = Math.max(0, totalGift - deduction);

  const { tax: grossTax, rate } = progressiveTax(taxBase);

  // 조부모가 손자녀에게 건너뛰어 증여하면 30% 할증 (미성년자 20억 초과는 40%)
  const surcharge = isMinorSkip ? grossTax * 0.3 : 0;
  const beforeCredit = grossTax + surcharge;

  // 이미 낸 증여세(사전 증여분)는 기납부세액으로 공제
  const priorBase = Math.max(0, priorGifts - Math.min(rel.deduction, priorGifts));
  const priorTax = progressiveTax(priorBase).tax;
  const afterPrior = Math.max(0, beforeCredit - priorTax);

  // 기한 내 신고 시 3% 세액공제
  const reportCredit = reportOnTime ? afterPrior * 0.03 : 0;
  const finalTax = afterPrior - reportCredit;

  return {
    totalGift,
    deduction,
    remainingDeduction: Math.max(0, rel.deduction - deduction),
    taxBase,
    rate,
    grossTax,
    surcharge,
    priorTax,
    afterPrior,
    reportCredit,
    finalTax,
    netReceived: giftAmount - finalTax,
    relLabel: rel.label,
    relNote: rel.note,
  };
}

function fmt(n: number) {
  return Math.round(n).toLocaleString('ko-KR');
}

export default function GiftTaxTab() {
  const [amount, setAmount] = useState('');
  const [prior, setPrior] = useState('');
  const [relation, setRelation] = useState<Relation>('lineal-adult');
  const [isMinorSkip, setIsMinorSkip] = useState(false);
  const [reportOnTime, setReportOnTime] = useState(true);

  const r = useMemo(
    () =>
      calc(
        parseFloat(amount) || 0,
        parseFloat(prior) || 0,
        relation,
        isMinorSkip,
        reportOnTime,
      ),
    [amount, prior, relation, isMinorSkip, reportOnTime],
  );

  return (
    <>
      <div className="card">
        <div className="card-title">증여 정보 입력</div>
        <p className="tax-notice">
          증여세는 <strong>받는 사람(수증자)</strong>이 냅니다. 같은 사람에게서 10년 안에 받은 증여는
          모두 합산해 과세하므로, 이전에 받은 금액이 있다면 함께 입력해야 정확합니다.
        </p>
        <div className="input-row">
          <div className="form-group">
            <label>이번 증여 재산가액 (원)</label>
            <input
              type="number"
              placeholder="300000000"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
            />
          </div>
          <div className="form-group">
            <label>10년 내 사전 증여액 (원)</label>
            <input
              type="number"
              placeholder="0"
              value={prior}
              onChange={(e) => setPrior(e.target.value)}
            />
          </div>
        </div>

        <div className="form-group">
          <label>증여자와의 관계</label>
          <div className="toggle-group" style={{ flexWrap: 'wrap' }}>
            {RELATIONS.map((o) => (
              <button
                key={o.value}
                className={`toggle-btn${relation === o.value ? ' active' : ''}`}
                onClick={() => setRelation(o.value)}
              >
                {o.label}
              </button>
            ))}
          </div>
          <p className="tax-notice" style={{ marginTop: '8px', marginBottom: 0 }}>
            증여재산공제: {RELATIONS.find((x) => x.value === relation)!.note}. 직계존속 공제는 부모·조부모를
            합산한 한도입니다.
          </p>
        </div>

        <div className="form-group">
          <label>세대생략 증여 (조부모 → 손자녀)</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn${!isMinorSkip ? ' active' : ''}`}
              onClick={() => setIsMinorSkip(false)}
            >
              해당 없음
            </button>
            <button
              className={`toggle-btn${isMinorSkip ? ' active' : ''}`}
              onClick={() => setIsMinorSkip(true)}
            >
              세대생략 (30% 할증)
            </button>
          </div>
        </div>

        <div className="form-group">
          <label>기한 내 신고 여부</label>
          <div className="toggle-group">
            <button
              className={`toggle-btn${reportOnTime ? ' active' : ''}`}
              onClick={() => setReportOnTime(true)}
            >
              기한 내 신고 (3% 공제)
            </button>
            <button
              className={`toggle-btn${!reportOnTime ? ' active' : ''}`}
              onClick={() => setReportOnTime(false)}
            >
              미신고
            </button>
          </div>
          <p className="tax-notice" style={{ marginTop: '8px', marginBottom: 0 }}>
            증여받은 날이 속한 달의 말일부터 3개월 이내에 신고하면 산출세액의 3%를 공제받습니다.
          </p>
        </div>
      </div>

      {r && (
        <div className="card">
          <div className="card-title">증여세 계산 결과</div>
          <div className="tax-result-grid">
            <div className="tax-row">
              <span className="tax-label">10년 합산 증여재산</span>
              <span className="tax-value">{fmt(r.totalGift)}원</span>
            </div>
            <div className="tax-row tax-row-sub">
              <span className="tax-label">− 증여재산공제 ({r.relLabel})</span>
              <span className="tax-value">-{fmt(r.deduction)}원</span>
            </div>
            <div className="tax-row">
              <span className="tax-label">과세표준</span>
              <span className="tax-value">{fmt(r.taxBase)}원</span>
            </div>
            <div className="tax-row tax-row-sub">
              <span className="tax-label">산출세액 (누진세율 {(r.rate * 100).toFixed(0)}%)</span>
              <span className="tax-value">{fmt(r.grossTax)}원</span>
            </div>
            {r.surcharge > 0 && (
              <div className="tax-row tax-row-sub">
                <span className="tax-label">+ 세대생략 할증 (30%)</span>
                <span className="tax-value">{fmt(r.surcharge)}원</span>
              </div>
            )}
            {r.priorTax > 0 && (
              <div className="tax-row tax-row-sub">
                <span className="tax-label">− 기납부세액 (사전 증여분)</span>
                <span className="tax-value">-{fmt(r.priorTax)}원</span>
              </div>
            )}
            {r.reportCredit > 0 && (
              <div className="tax-row tax-row-sub">
                <span className="tax-label">− 신고세액공제 (3%)</span>
                <span className="tax-value">-{fmt(r.reportCredit)}원</span>
              </div>
            )}
            <div className="tax-row tax-row-total">
              <span className="tax-label">납부할 증여세</span>
              <span className="tax-value">{fmt(r.finalTax)}원</span>
            </div>
          </div>

          {r.finalTax === 0 ? (
            <div className="tax-success-box" style={{ marginTop: '14px' }}>
              증여재산공제 범위 안이라 납부할 증여세가 없습니다.
              {r.remainingDeduction > 0 && (
                <>
                  <br />
                  앞으로 10년 안에 <strong>{fmt(r.remainingDeduction)}원</strong>까지 추가로 공제받을 수
                  있습니다.
                </>
              )}
            </div>
          ) : (
            <div className="tax-success-box" style={{ marginTop: '14px' }}>
              세후 실수령액 <strong>{fmt(r.netReceived)}원</strong>
              <br />
              실효세율 {((r.finalTax / (parseFloat(amount) || 1)) * 100).toFixed(2)}%
            </div>
          )}

          <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
            증여세는 <strong>10년 단위로 리셋</strong>됩니다. 한 번에 큰 금액을 넘기는 것보다 10년
            간격으로 나누면 공제를 여러 번 쓰고 누진세율 구간도 낮출 수 있습니다.
          </div>
          <p className="tax-disclaimer">
            본 계산은 참고용입니다. 부동산·비상장주식의 평가액 산정, 부담부증여(채무 인수), 창업자금·
            가업승계 특례, 혼인·출산 증여재산 공제 등은 반영되지 않았습니다. 실제 신고 전 세무 전문가에게
            확인하세요.
          </p>
        </div>
      )}
    </>
  );
}
