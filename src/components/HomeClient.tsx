'use client';

import { useState } from 'react';
import Link from 'next/link';
import Header from '@/components/Header';
import CurrencyToggle from '@/components/CurrencyToggle';
import PortfolioCard from '@/components/PortfolioCard';
import KrwCalculator from '@/components/krw/KrwCalculator';
import UsdCalculator from '@/components/usd/UsdCalculator';
import AppDescription from '@/components/AppDescription';
import { usePortfolio } from '@/hooks/usePortfolio';
import { useLanguage } from '@/contexts/LanguageContext';
import type { Currency, Round, SavedStock } from '@/types/calculator';

export default function HomeClient({ children }: { children?: React.ReactNode }) {
  const { t } = useLanguage();
  const [currency, setCurrency] = useState<Currency>('krw');

  const [krwPrice, setKrwPrice] = useState('');
  const [krwShares, setKrwShares] = useState('');
  const [krwRounds, setKrwRounds] = useState<Round[]>([]);

  const [usdPrice, setUsdPrice] = useState('');
  const [usdShares, setUsdShares] = useState('');
  const [usdRounds, setUsdRounds] = useState<Round[]>([]);

  const { stocks, save, remove } = usePortfolio();

  const handleSave = (name: string) => {
    const price = currency === 'krw' ? krwPrice : usdPrice;
    const shares = currency === 'krw' ? krwShares : usdShares;
    const rounds = currency === 'krw' ? krwRounds : usdRounds;
    save({ name, currency, initPrice: parseFloat(price) || 0, initShares: parseFloat(shares) || 0, rounds });
  };

  const handleLoad = (stock: SavedStock) => {
    setCurrency(stock.currency);
    if (stock.currency === 'krw') {
      setKrwPrice(String(stock.initPrice));
      setKrwShares(String(stock.initShares));
      setKrwRounds(stock.rounds);
    } else {
      setUsdPrice(String(stock.initPrice));
      setUsdShares(String(stock.initShares));
      setUsdRounds(stock.rounds);
    }
  };

  const navLinks = [
    { href: '/avgdown/guide', label: t.navGuide },
    { href: '/faq',           label: t.navFaq },
    { href: '/about',         label: t.navAbout },
    { href: '/privacy',       label: t.navPrivacy },
  ];

  return (
    <>
      <Header subtitle={t.avgdownSubtitle} description={t.avgdownDesc} navLinks={navLinks} />
      <main className="container">
        <Link href="/" className="back-link">← 홈으로</Link>
        <CurrencyToggle currency={currency} onChange={setCurrency} />
        <PortfolioCard
          stocks={stocks}
          onLoad={handleLoad}
          onRemove={remove}
        />
        {currency === 'krw' ? (
          <KrwCalculator
            initPrice={krwPrice}
            initShares={krwShares}
            rounds={krwRounds}
            onInitPriceChange={setKrwPrice}
            onInitSharesChange={setKrwShares}
            onRoundsChange={setKrwRounds}
            onSave={handleSave}
          />
        ) : (
          <UsdCalculator
            initPrice={usdPrice}
            initShares={usdShares}
            rounds={usdRounds}
            onInitPriceChange={setUsdPrice}
            onInitSharesChange={setUsdShares}
            onRoundsChange={setUsdRounds}
            onSave={handleSave}
          />
        )}
        <AppDescription />
        {children}
      </main>
    </>
  );
}
