'use client';

import { useState } from 'react';
import ToggleGroup from '@/components/ui/ToggleGroup';
import { calcAvg } from '@/lib/calc';
import { fmt, fmtP } from '@/lib/fmt';
import type { Round, InputMode } from '@/types/calculator';

interface Props {
  initPrice: number;
  initShares: number;
  rounds: Round[];
  onAdd: (r: Round) => void;
  onRemove: (idx: number) => void;
  onClear: () => void;
}

const MODE_OPTIONS = [
  { value: 'shares', label: '수량으로 입력' },
  { value: 'amount', label: '금액으로 입력' },
];

export default function SimulationTab({ initPrice, initShares, rounds, onAdd, onRemove, onClear }: Props) {
  const [addPrice, setAddPrice] = useState('');
  const [addAmount, setAddAmount] = useState('');
  const [inputMode, setInputMode] = useState<InputMode>('shares');

  const hasInit = initPrice > 0 && initShares > 0;

  const handleAdd = () => {
    const price = parseFloat(addPrice);
    const val = parseFloat(addAmount);
    if (!price || price <= 0) { alert('추가 매수가를 입력하세요.'); return; }
    if (!val || val <= 0) { alert(inputMode === 'shares' ? '추가 수량을 입력하세요.' : '추가 금액을 입력하세요.'); return; }
    const shares = inputMode === 'shares' ? val : Math.floor(val / price);
    if (shares <= 0) { alert('금액이 너무 작습니다.'); return; }
    onAdd({ price, shares });
    setAddPrice('');
    setAddAmount('');
  };

  const all: Array<Round & { isInit: boolean }> = [];
  if (hasInit) all.push({ price: initPrice, shares: initShares, isInit: true });
  rounds.forEach((r) => all.push({ ...r, isInit: false }));

  let running: Round[] = [];
  const rows = all.map((r, i) => {
    running = [...running, { price: r.price, shares: r.shares }];
    const { avg } = calcAvg(running);
    const vsInit = hasInit && !r.isInit ? ((r.price - initPrice) / initPrice) * 100 : null;
    const roundIdx = hasInit ? i - 1 : i;
    return { ...r, avg, vsInit, roundIdx };
  });

  const finalCalc = running.length > 0 ? calcAvg(running) : null;
  const hasData = hasInit || rounds.length > 0;

  return (
    <div>
      <div className="card">
        <div className="card-title">➕ 추가 매수 입력</div>
        <div className="form-group">
          <label>입력 방식</label>
          <ToggleGroup
            options={MODE_OPTIONS}
            value={inputMode}
            onChange={(v) => { setInputMode(v as InputMode); setAddAmount(''); }}
          />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label>추가 매수가 (원)</label>
            <input type="number" placeholder="40,000" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{inputMode === 'shares' ? '추가 수량 (주)' : '추가 금액 (원)'}</label>
            <input
              type="number"
              placeholder={inputMode === 'shares' ? '50' : '2,000,000'}
              value={addAmount}
              onChange={(e) => setAddAmount(e.target.value)}
            />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>+ 물타기 추가</button>
      </div>

      {hasData && finalCalc ? (
        <div className="card">
          <div className="card-title">📊 시뮬레이션 결과</div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>구분</th><th>매수가</th><th>수량</th>
                  <th>투자금액</th><th>평균단가</th><th>단가대비</th><th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      {row.isInit
                        ? <span className="badge badge-init">최초 매수</span>
                        : <span className="badge badge-round">{row.roundIdx + 1}차 물타기</span>}
                    </td>
                    <td>{fmt(row.price)}원</td>
                    <td>{fmt(row.shares)}주</td>
                    <td>{fmt(row.price * row.shares)}원</td>
                    <td><strong>{fmt(row.avg)}원</strong></td>
                    <td>
                      {row.vsInit !== null
                        ? <span style={{ color: row.vsInit < 0 ? 'var(--blue)' : 'var(--danger)' }}>
                            {fmtP(row.vsInit, 1)}
                          </span>
                        : '-'}
                    </td>
                    <td>
                      {!row.isInit && (
                        <button className="btn-sm" onClick={() => onRemove(row.roundIdx)}>삭제</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item accent">
              <div className="result-label">최종 평균단가</div>
              <div className="result-value xl">{fmt(finalCalc.avg)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">평균단가 변화</div>
              {hasInit && rounds.length > 0 ? (() => {
                const diff = finalCalc.avg - initPrice;
                return (
                  <>
                    <div className={`result-value ${diff > 0 ? 'up' : 'down'}`}>
                      {(diff > 0 ? '+' : '') + fmt(diff)}원
                    </div>
                    <div className="result-sub">{fmtP((diff / initPrice) * 100, 2)}</div>
                  </>
                );
              })() : <div className="result-value">-</div>}
            </div>
            <div className="result-item">
              <div className="result-label">총 보유 수량</div>
              <div className="result-value">{fmt(finalCalc.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">총 투자금액</div>
              <div className="result-value">{fmt(finalCalc.totalAmt)}원</div>
            </div>
          </div>
          <div className="divider" />
          <button className="btn btn-ghost" onClick={onClear}>전체 초기화</button>
        </div>
      ) : (
        <div className="card">
          <div className="empty">
            <div className="empty-icon">📥</div>
            <div className="empty-text">
              위에서 현재 보유 현황을 입력하고<br />추가 매수를 추가하면 시뮬레이션이 시작됩니다
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
