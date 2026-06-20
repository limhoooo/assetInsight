'use client';

import { useLanguage } from '@/contexts/LanguageContext';
import type { Currency } from '@/types/calculator';

interface Props {
  currency: Currency;
  onChange: (c: Currency) => void;
}

export default function CurrencyToggle({ currency, onChange }: Props) {
  const { t } = useLanguage();
  return (
    <div className="card" style={{ padding: '14px 20px' }}>
      <div className="toggle-group">
        <button className={`toggle-btn${currency === 'krw' ? ' active' : ''}`} onClick={() => onChange('krw')}>
          {t.currencyKrw}
        </button>
        <button className={`toggle-btn${currency === 'usd' ? ' active' : ''}`} onClick={() => onChange('usd')}>
          {t.currencyUsd}
        </button>
      </div>
    </div>
  );
}
