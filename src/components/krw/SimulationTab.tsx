'use client';

import { useState } from 'react';
import ToggleGroup from '@/components/ui/ToggleGroup';
import { calcAvg } from '@/lib/calc';
import { fmt, fmtP } from '@/lib/fmt';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Round, InputMode } from '@/types/calculator';

interface Props {
  initPrice: number; initShares: number; rounds: Round[];
  onAdd: (r: Round) => void; onRemove: (idx: number) => void;
  onClear: () => void; onSave: (name: string) => void;
}

export default function SimulationTab({ initPrice, initShares, rounds, onAdd, onRemove, onClear, onSave }: Props) {
  const { t, lang } = useLanguage();
  const [addPrice, setAddPrice]   = useState('');
  const [addAmount, setAddAmount] = useState('');
  const [inputMode, setInputMode] = useState<InputMode>('shares');
  const [saving, setSaving]       = useState(false);
  const [saveName, setSaveName]   = useState('');

  const MODE_OPTIONS = [
    { value: 'shares', label: t.modeShares },
    { value: 'amount', label: t.modeAmount },
  ];

  const hasInit = initPrice > 0 && initShares > 0;

  const handleAdd = () => {
    const price = parseFloat(addPrice);
    const val   = parseFloat(addAmount);
    if (!price || price <= 0) { alert(t.alertPrice); return; }
    if (!val   || val   <= 0) { alert(inputMode === 'shares' ? t.alertShares : t.alertAmount); return; }
    const shares = inputMode === 'shares' ? val : Math.floor(val / price);
    if (shares <= 0) { alert(t.alertTooSmall); return; }
    onAdd({ price, shares });
    setAddPrice(''); setAddAmount('');
  };

  const all: Array<Round & { isInit: boolean }> = [];
  if (hasInit) all.push({ price: initPrice, shares: initShares, isInit: true });
  rounds.forEach((r) => all.push({ ...r, isInit: false }));

  let running: Round[] = [];
  const rows = all.map((r, i) => {
    running = [...running, { price: r.price, shares: r.shares }];
    const { avg } = calcAvg(running);
    const vsInit = hasInit && !r.isInit ? ((r.price - initPrice) / initPrice) * 100 : null;
    return { ...r, avg, vsInit, roundIdx: hasInit ? i - 1 : i };
  });

  const finalCalc = running.length > 0 ? calcAvg(running) : null;
  const hasData   = hasInit || rounds.length > 0;

  return (
    <div>
      <div className="card">
        <div className="card-title">{t.addTitle}</div>
        <div className="form-group">
          <label>{t.inputMode}</label>
          <ToggleGroup options={MODE_OPTIONS} value={inputMode} onChange={(v) => { setInputMode(v as InputMode); setAddAmount(''); }} />
        </div>
        <div className="input-row">
          <div className="form-group">
            <label>{t.addPriceKrw}</label>
            <input type="number" placeholder="40,000" value={addPrice} onChange={(e) => setAddPrice(e.target.value)} />
          </div>
          <div className="form-group">
            <label>{inputMode === 'shares' ? t.addSharesLabel : t.addAmtKrw}</label>
            <input type="number" placeholder={inputMode === 'shares' ? '50' : '2,000,000'} value={addAmount} onChange={(e) => setAddAmount(e.target.value)} />
          </div>
        </div>
        <button className="btn btn-primary" onClick={handleAdd}>{t.addBtn}</button>
      </div>

      {hasData && finalCalc ? (
        <div className="card">
          <div className="card-title">{t.resultTitle}</div>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th>{t.colType}</th><th>{t.colPrice}</th><th>{t.colShares}</th>
                  <th>{t.colAmt}</th><th>{t.colAvg}</th><th>{t.colVsInit}</th><th></th>
                </tr>
              </thead>
              <tbody>
                {rows.map((row, i) => (
                  <tr key={i}>
                    <td>
                      {row.isInit
                        ? <span className="badge badge-init">{t.badgeInit}</span>
                        : <span className="badge badge-round">{t.badgeRoundBefore}{row.roundIdx + 1}{t.badgeRoundAfter}</span>}
                    </td>
                    <td>{fmt(row.price)}원</td>
                    <td>{fmt(row.shares)}주</td>
                    <td>{fmt(row.price * row.shares)}원</td>
                    <td><strong>{fmt(row.avg)}원</strong></td>
                    <td>
                      {row.vsInit !== null
                        ? <span style={{ color: row.vsInit < 0 ? 'var(--blue)' : 'var(--danger)' }}>{fmtP(row.vsInit, 1)}</span>
                        : '-'}
                    </td>
                    <td>{!row.isInit && <button className="btn-sm" onClick={() => onRemove(row.roundIdx)}>{t.deleteBtn}</button>}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <div className="divider" />
          <div className="result-grid">
            <div className="result-item accent">
              <div className="result-label">{t.finalAvg}</div>
              <div className="result-value xl">{fmt(finalCalc.avg)}원</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.avgChange}</div>
              {hasInit && rounds.length > 0 ? (() => {
                const diff = finalCalc.avg - initPrice;
                return (
                  <>
                    <div className={`result-value ${diff > 0 ? 'up' : 'down'}`}>{(diff > 0 ? '+' : '') + fmt(diff)}원</div>
                    <div className="result-sub">{fmtP((diff / initPrice) * 100, 2)}</div>
                  </>
                );
              })() : <div className="result-value">-</div>}
            </div>
            <div className="result-item">
              <div className="result-label">{t.totalShares}</div>
              <div className="result-value">{fmt(finalCalc.totalShares)}주</div>
            </div>
            <div className="result-item">
              <div className="result-label">{t.totalAmt}</div>
              <div className="result-value">{fmt(finalCalc.totalAmt)}원</div>
            </div>
          </div>
          <div className="divider" />
          {saving ? (
            <div className="portfolio-save-form">
              <input type="text" className="portfolio-name-input" placeholder={t.saveNameKrw}
                value={saveName} onChange={(e) => setSaveName(e.target.value)} autoFocus maxLength={20}
                onKeyDown={(e) => {
                  if (e.key === 'Enter' && saveName.trim()) { onSave(saveName.trim()); setSaving(false); setSaveName(''); }
                  if (e.key === 'Escape') { setSaving(false); setSaveName(''); }
                }} />
              <div className="portfolio-save-actions">
                <button className="btn btn-primary" style={{ flex: 1, padding: '9px', fontSize: '14px' }}
                  onClick={() => { if (saveName.trim()) { onSave(saveName.trim()); setSaving(false); setSaveName(''); } }}
                  disabled={!saveName.trim()}>{t.saveBtnLabel}</button>
                <button className="btn btn-ghost" style={{ flex: 1, padding: '9px', fontSize: '14px' }}
                  onClick={() => { setSaving(false); setSaveName(''); }}>{t.cancelBtnLabel}</button>
              </div>
            </div>
          ) : (
            <div className="sim-bottom-row">
              <button className="btn btn-ghost" onClick={onClear}>{t.resetAll}</button>
              <button className="btn btn-portfolio-save" onClick={() => setSaving(true)}>{t.saveStock}</button>
            </div>
          )}
        </div>
      ) : (
        <div className="card">
          <div className="empty">
            <div className="empty-icon">📥</div>
            <div className="empty-text">{t.emptyText}</div>
          </div>
        </div>
      )}
    </div>
  );
}
