'use client';

import { useEffect, useState } from 'react';
import { fmt } from '@/lib/fmt';
import { useLanguage } from '@/contexts/LanguageContext';
import type { RateStatus } from '@/hooks/useExchangeRate';

interface Props {
  rate: number; status: RateStatus; updatedAt: string;
  onRefetch: () => void; onRateChange: (rate: number) => void;
}

export default function ExchangeRateCard({ rate, status, updatedAt, onRefetch, onRateChange }: Props) {
  const { t } = useLanguage();
  const [manualInput, setManualInput] = useState('');

  useEffect(() => {
    if (status === 'success' && rate > 0) setManualInput(String(Math.round(rate)));
  }, [status, rate]);

  return (
    <div className="card">
      <div className="card-title">{t.exTitle}</div>
      {status === 'loading' && <div className="info-box">{t.exLoading}</div>}
      {status === 'success' && (
        <div className="result-grid" style={{ marginBottom: '12px' }}>
          <div className="result-item accent">
            <div className="result-label">1 USD</div>
            <div className="result-value xl">{fmt(rate)}{t.exRateUnit}</div>
          </div>
          <div className="result-item">
            <div className="result-label">{t.exUpdated}</div>
            <div className="result-value" style={{ fontSize: '13px', fontWeight: 600, lineHeight: 1.5 }}>{updatedAt}</div>
            <div className="result-sub">open.er-api.com</div>
          </div>
        </div>
      )}
      {status === 'error' && <div className="error-box" style={{ marginBottom: '12px' }}>{t.exError}</div>}
      <div className="form-group">
        <label>{t.exManualLabel}</label>
        <input type="number" placeholder="1350" value={manualInput}
          onChange={(e) => { setManualInput(e.target.value); const val = parseFloat(e.target.value); if (val > 0) onRateChange(val); }} />
      </div>
      <button className="btn btn-ghost" style={{ marginTop: '8px' }} onClick={onRefetch}>{t.exRefresh}</button>
    </div>
  );
}
