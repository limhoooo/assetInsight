'use client';

import { useState, useEffect } from 'react';
import type { SavedStock } from '@/types/calculator';

const KEY = 'portfolio_v1';

export function usePortfolio() {
  const [stocks, setStocks] = useState<SavedStock[]>([]);

  useEffect(() => {
    try {
      const raw = localStorage.getItem(KEY);
      if (!raw) return;
      const parsed: unknown = JSON.parse(raw);
      // 저장 데이터가 손상된 경우 빈 목록으로 시작한다.
      if (Array.isArray(parsed)) setStocks(parsed as SavedStock[]);
    } catch {}
  }, []);

  // 사생활 보호 모드나 저장 공간 부족으로 setItem이 throw해도
  // 화면 상태는 갱신되도록 쓰기를 감싼다.
  const write = (next: SavedStock[]) => {
    try {
      localStorage.setItem(KEY, JSON.stringify(next));
    } catch {}
  };

  const save = (data: Omit<SavedStock, 'id' | 'savedAt'>) => {
    setStocks((prev) => {
      const entry: SavedStock = {
        ...data,
        id: `${Date.now()}-${Math.random().toString(36).slice(2, 8)}`,
        savedAt: Date.now(),
      };
      const next = [entry, ...prev];
      write(next);
      return next;
    });
  };

  const remove = (id: string) => {
    setStocks((prev) => {
      const next = prev.filter((s) => s.id !== id);
      write(next);
      return next;
    });
  };

  return { stocks, save, remove };
}
