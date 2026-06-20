'use client';

import { useState } from 'react';
import TabBar from '@/components/ui/TabBar';
import KrwHoldingCard from './KrwHoldingCard';
import SimulationTab from './SimulationTab';
import ReverseTab from './ReverseTab';
import PnlTab from './PnlTab';
import { useLanguage } from '@/contexts/LanguageContext';
import type { KrwTab, Round } from '@/types/calculator';

interface Props {
  initPrice: string; initShares: string; rounds: Round[];
  onInitPriceChange: (v: string) => void;
  onInitSharesChange: (v: string) => void;
  onRoundsChange: (rounds: Round[]) => void;
  onSave: (name: string) => void;
}

export default function KrwCalculator({ initPrice, initShares, rounds, onInitPriceChange, onInitSharesChange, onRoundsChange, onSave }: Props) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<KrwTab>('simulation');

  const TABS = [
    { id: 'simulation', label: t.tabSim },
    { id: 'reverse',    label: t.tabRev },
    { id: 'pnl',        label: t.tabPnl },
  ];

  const initPriceNum  = parseFloat(initPrice)  || 0;
  const initSharesNum = parseFloat(initShares) || 0;

  return (
    <div>
      <KrwHoldingCard price={initPrice} shares={initShares} onPriceChange={onInitPriceChange} onSharesChange={onInitSharesChange} />
      <TabBar tabs={TABS} activeId={activeTab} onChange={(id) => setActiveTab(id as KrwTab)} />
      {activeTab === 'simulation' && (
        <SimulationTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds}
          onAdd={(r) => onRoundsChange([...rounds, r])}
          onRemove={(idx) => onRoundsChange(rounds.filter((_, i) => i !== idx))}
          onClear={() => onRoundsChange([])} onSave={onSave} />
      )}
      {activeTab === 'reverse' && <ReverseTab initPrice={initPriceNum} initShares={initSharesNum} />}
      {activeTab === 'pnl'     && <PnlTab initPrice={initPriceNum} initShares={initSharesNum} rounds={rounds} />}
    </div>
  );
}
