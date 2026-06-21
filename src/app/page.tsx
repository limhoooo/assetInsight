import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '자산인사이트 - 투자자를 위한 스마트 계산기 모음',
  description: '물타기 계산기, 양도소득세 계산기 등 투자에 필요한 계산을 한 곳에서. 자산인사이트에서 스마트하게 투자하세요.',
  keywords: ['자산인사이트', '투자 계산기', '물타기 계산기', '양도소득세 계산기', '주식 계산기'],
  alternates: { canonical: BASE_URL },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  name: '자산인사이트',
  url: BASE_URL,
  description: '투자자를 위한 스마트 계산기 모음',
  inLanguage: 'ko-KR',
};

const CALCULATORS = [
  {
    emoji: '📉',
    name: '물타기 계산기',
    nameEn: 'Avg. Down Calculator',
    desc: '주식 평균단가 낮추기 시뮬레이션 · 목표단가 역산 · 손익 현황',
    href: '/avgdown',
    ready: true,
  },
  {
    emoji: '📈',
    name: '해외주식 양도소득세 계산기',
    nameEn: 'Foreign Stock Tax',
    desc: '해외주식 매도 시 양도세 계산. 기본공제 250만원 · 22% 세율 자동 적용',
    href: '/stock-tax',
    ready: true,
  },
  {
    emoji: '🏠',
    name: '부동산 양도소득세 계산기',
    nameEn: 'Real Estate Tax',
    desc: '부동산 양도세 계산. 장기보유특별공제 · 1세대1주택 비과세 · 누진세율 자동 적용',
    href: '/realestate-tax',
    ready: true,
  },
  {
    emoji: '🏘️',
    name: '보유세 계산기',
    nameEn: 'Property Holding Tax',
    desc: '재산세 + 종합부동산세(종부세) 자동 계산. 공시가격 입력 시 총 보유세 즉시 산출',
    href: '/holding-tax',
    ready: true,
  },
  {
    emoji: '🏦',
    name: '대출 이자 계산기',
    nameEn: 'Loan Interest',
    desc: '원리금균등·원금균등·만기일시 월 납입금 계산 · 연도별 상환 스케줄 자동 생성',
    href: '/loan',
    ready: true,
  },
  {
    emoji: '📊',
    name: '복리 계산기',
    nameEn: 'Compound Interest',
    desc: '투자 원금의 복리 미래가치 계산 · 목표금액 역산 · 단리 대비 복리 효과 비교',
    href: '/compound',
    ready: true,
  },
  {
    emoji: '🏦',
    name: '정기예금/적금 계산기',
    nameEn: 'Deposit / Savings',
    desc: '정기예금·적금 세후 이자 계산. 이자소득세 · 단리·복리 · 비과세 자동 적용',
    href: '/savings',
    ready: true,
  },
  {
    emoji: '🏡',
    name: '취득세 계산기',
    nameEn: 'Acquisition Tax',
    desc: '부동산 취득 시 취득세 계산. 주택 수·조정지역·전용면적에 따른 세율 자동 적용',
    href: '/acquisition-tax',
    ready: true,
  },
];

const FINANCE_FLOATS = [
  { left: '4%',  symbol: '₩', duration: 7.5, delay: 0.0 },
  { left: '13%', symbol: '$', duration: 9.0, delay: 1.5 },
  { left: '23%', symbol: '%', duration: 8.0, delay: 0.8 },
  { left: '35%', symbol: '▲', duration: 10.0, delay: 2.5 },
  { left: '46%', symbol: '+', duration: 7.0, delay: 0.3 },
  { left: '57%', symbol: '↗', duration: 8.5, delay: 1.8 },
  { left: '68%', symbol: '$', duration: 9.5, delay: 3.2 },
  { left: '78%', symbol: '₩', duration: 7.5, delay: 1.0 },
  { left: '87%', symbol: '%', duration: 8.0, delay: 2.0 },
  { left: '95%', symbol: '▲', duration: 6.5, delay: 0.5 },
];

const CHART_BARS = [
  { delay: 0.0, dur: 2.4, h: 40 }, { delay: 0.3, dur: 3.1, h: 65 },
  { delay: 0.6, dur: 2.7, h: 50 }, { delay: 0.1, dur: 3.3, h: 75 },
  { delay: 0.9, dur: 2.5, h: 45 }, { delay: 0.4, dur: 2.9, h: 60 },
  { delay: 0.7, dur: 3.0, h: 80 }, { delay: 0.2, dur: 2.6, h: 55 },
  { delay: 1.0, dur: 3.2, h: 70 }, { delay: 0.5, dur: 2.8, h: 35 },
  { delay: 0.8, dur: 2.4, h: 50 }, { delay: 0.3, dur: 3.1, h: 65 },
  { delay: 1.1, dur: 2.7, h: 45 }, { delay: 0.6, dur: 3.0, h: 55 },
  { delay: 0.2, dur: 2.5, h: 70 }, { delay: 0.9, dur: 2.9, h: 40 },
  { delay: 0.4, dur: 2.6, h: 60 }, { delay: 1.2, dur: 3.2, h: 35 },
];

export default function HubPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="hub-page">
        <header className="hub-header">
          <div className="hub-anim" aria-hidden="true">
            {FINANCE_FLOATS.map((f, i) => (
              <span
                key={i}
                className="hub-float"
                style={{ left: f.left, animationDuration: `${f.duration}s`, animationDelay: `${f.delay}s` }}
              >
                {f.symbol}
              </span>
            ))}
            <div className="hub-chart">
              {CHART_BARS.map((b, i) => (
                <div
                  key={i}
                  className="hub-chart-bar"
                  style={{ animationDelay: `${b.delay}s`, animationDuration: `${b.dur}s`, height: `${b.h}%` }}
                />
              ))}
            </div>
          </div>
          <h1 className="hub-title">자산인사이트</h1>
          <p className="hub-subtitle">투자자를 위한 스마트 계산기 모음</p>
        </header>

        <main className="container">
          <div className="hub-section-title">계산기 목록</div>
          <div className="hub-grid">
            {CALCULATORS.map((calc) =>
              calc.ready ? (
                <Link key={calc.name} href={calc.href!} className="hub-card hub-card-link">
                  <div className="hub-card-emoji">{calc.emoji}</div>
                  <div className="hub-card-body">
                    <div className="hub-card-name">{calc.name}</div>
                    <div className="hub-card-desc">{calc.desc}</div>
                  </div>
                  <div className="hub-card-arrow">→</div>
                </Link>
              ) : (
                <div key={calc.name} className="hub-card hub-card-soon">
                  <div className="hub-card-emoji">{calc.emoji}</div>
                  <div className="hub-card-body">
                    <div className="hub-card-name">{calc.name}</div>
                    <div className="hub-card-desc">{calc.desc}</div>
                  </div>
                  <div className="hub-card-badge">준비중</div>
                </div>
              )
            )}
          </div>
        </main>
      </div>
    </>
  );
}
