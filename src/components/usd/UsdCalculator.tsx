'use client';

import { useEffect, useState } from 'react';
import TabBar from '@/components/ui/TabBar';
import ExchangeRateCard from './ExchangeRateCard';
import UsdHoldingCard from './UsdHoldingCard';
import DollarSimTab from './DollarSimTab';
import DollarRevTab from './DollarRevTab';
import DollarPnlTab from './DollarPnlTab';
import { useExchangeRate } from '@/hooks/useExchangeRate';
import { useLanguage } from '@/contexts/LanguageContext';
import type { UsdTab, Round } from '@/types/calculator';

interface Props {
  initPrice: string; initShares: string; rounds: Round[];
  onInitPriceChange: (v: string) => void;
  onInitSharesChange: (v: string) => void;
  onRoundsChange: (rounds: Round[]) => void;
  onSave: (name: string) => void;
}

export default function UsdCalculator({ initPrice, initShares, rounds, onInitPriceChange, onInitSharesChange, onRoundsChange, onSave }: Props) {
  const { rate, updateRate, status, updatedAt, refetch } = useExchangeRate();
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<UsdTab>('d-simulation');

  useEffect(() => { refetch(); }, [refetch]);

  const TABS = [
    { id: 'd-simulation', label: t.tabSim },
    { id: 'd-reverse',    label: t.tabRev },
    { id: 'd-pnl',        label: t.tabPnl },
  ];

  const initPriceNum  = parseFloat(initPrice)  || 0;
  const initSharesNum = parseFloat(initShares) || 0;

  return (
    <div>
      <ExchangeRateCard rate={rate} status={status} updatedAt={updatedAt} onRefetch={refetch} onRateChange={updateRate} />
      <UsdHoldingCard price={initPrice} shares={initShares} exchangeRate={rate} onPriceChange={onInitPriceChange} onSharesChange={onInitSharesChange} />
      <TabBar tabs={TABS} activeId={activeTab} onChange={(id) => setActiveTab(id as UsdTab)} />
      {activeTab === 'd-simulation' && (
        <DollarSimTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds} exchangeRate={rate}
          onAdd={(r) => onRoundsChange([...rounds, r])}
          onRemove={(idx) => onRoundsChange(rounds.filter((_, i) => i !== idx))}
          onClear={() => onRoundsChange([])} onSave={onSave} />
      )}
      {activeTab === 'd-reverse' && <DollarRevTab initPrice={initPriceNum} initShares={initSharesNum} exchangeRate={rate} />}
      {activeTab === 'd-pnl'    && <DollarPnlTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds} exchangeRate={rate} />}
    </div>
  );
}
