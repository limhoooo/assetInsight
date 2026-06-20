import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://avgdown-calculator.pages.dev';

export const metadata: Metadata = {
  title: '미국주식 물타기 계산기 - 달러 평균단가 낮추기 | 물타기 계산기',
  description: '미국주식(해외주식) 물타기 계산기. 달러(USD) 기준 평균단가 낮추기 계산, 목표 달러 평균단가 역산, 원화 환산 손익까지 한번에. 애플, 엔비디아, 테슬라 등 모든 미국주식 지원.',
  keywords: ['미국주식 물타기', '달러 평균단가 계산', '미국주식 물타기 계산기', '달러 물타기', '해외주식 물타기', '달러 평균단가 낮추기', '미국주식 평균단가', 'USD 물타기 계산기', '엔비디아 물타기', '테슬라 물타기', '애플 물타기'],
  alternates: { canonical: `${BASE_URL}/us-stocks` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '미국주식 물타기 계산기 - 달러 평균단가 낮추기 완벽 가이드',
  description: '미국주식(해외주식) 물타기 계산 방법과 달러 평균단가 낮추기 전략을 설명합니다.',
  url: `${BASE_URL}/us-stocks`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '물타기 계산기', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '물타기 계산기', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/us-stocks` },
};

export default function UsStocksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/" className="back-link">← 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>미국주식 물타기 계산기 — 달러 평균단가 낮추기</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            애플(AAPL), 엔비디아(NVDA), 테슬라(TSLA) 등 미국주식 투자 중 손실이 발생했을 때, <strong>달러(USD) 기준 물타기(평균단가 낮추기)</strong>를 계산하는 방법을 안내합니다.
            원화 기준 물타기와 계산 공식은 동일하며, 실시간 환율을 적용해 원화 기준 손익도 함께 확인할 수 있습니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 달러 평균단가 계산 공식</h2>
          <p className="privacy-text">미국주식 달러 평균단가 계산 공식은 원화와 동일합니다.</p>
          <div className="guide-formula">
            달러 평균단가(USD) = 총 투자금액(USD) ÷ 총 보유 수량(주)
          </div>
          <p className="privacy-text" style={{ marginTop: '14px' }}>
            <strong>달러 평균단가 계산 예시 (엔비디아 물타기)</strong>
          </p>
          <ul className="privacy-list">
            <li>1차 매수: $150 × 10주 = $1,500</li>
            <li>2차 매수(물타기): $120 × 10주 = $1,200</li>
            <li>총 투자금: $2,700 / 총 수량: 20주</li>
            <li><strong>새 달러 평균단가: $2,700 ÷ 20 = $135</strong></li>
            <li>평균단가 $150 → $135로 10% 낮아짐</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 미국주식 물타기 계산기 사용법</h2>
          <ul className="feature-list" style={{ gap: '12px' }}>
            <li>
              <span className="feature-icon">①</span>
              <div>
                <strong>USD 모드로 전환</strong>
                <p>상단 KRW/USD 토글에서 <strong>USD</strong>를 선택합니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">②</span>
              <div>
                <strong>달러 보유 현황 입력</strong>
                <p>현재 달러 평균 매수가($)와 보유 수량(주)을 입력합니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">③</span>
              <div>
                <strong>미국주식 물타기 시뮬레이션</strong>
                <p>추가 매수 예정가($)와 수량(또는 달러 금액)을 입력하면 새 달러 평균단가를 즉시 계산합니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">④</span>
              <div>
                <strong>원화 환산 손익 확인</strong>
                <p>실시간 환율을 자동으로 적용해 달러(USD)와 원화(KRW) 기준 투자금·손익을 동시에 표시합니다.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 달러 목표 평균단가 역산</h2>
          <p className="privacy-text">
            원하는 달러 평균단가로 낮추려면 <strong>얼마에 몇 주를 추가 매수해야 하는지</strong> 자동으로 역산할 수 있습니다.
            USD 모드의 <strong>'목표단가 역산'</strong> 탭에서 추가 매수 예정가($)와 목표 달러 평균단가($)를 입력하면 필요 수량과 달러 금액이 즉시 계산됩니다.
          </p>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            <strong>예시:</strong> 현재 달러 평균단가 $150, 추가 매수 예정가 $120으로 평균단가를 $130으로 낮추고 싶다면 — 필요 추가 수량과 달러 금액을 자동으로 계산해드립니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 환율과 미국주식 물타기</h2>
          <p className="privacy-text">
            미국주식은 달러로 투자하기 때문에 <strong>환율 변동</strong>이 원화 기준 수익률에 영향을 줍니다.
            동일한 달러 평균단가라도 환율이 높을 때는 원화 투자금이 더 많아지고, 환율이 낮을 때는 원화 기준 수익률이 더 높아질 수 있습니다.
          </p>
          <ul className="privacy-list">
            <li>달러 손익이 +10%여도 환율 하락 시 원화 수익률은 그보다 낮을 수 있습니다.</li>
            <li>반대로 달러 기준 손실이어도 환율 상승 시 원화 기준으로는 손실이 줄어들 수 있습니다.</li>
            <li>물타기 계산기 USD 모드에서 달러·원화 손익을 동시에 확인해 환율 영향을 파악할 수 있습니다.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 미국주식 물타기 시 유의사항</h2>
          <div className="guide-warning-box">
            ⚠️ 미국주식은 환율 리스크가 추가로 존재합니다. 달러 평균단가가 낮아지더라도 환율 변동에 따라 원화 기준 손익이 달라질 수 있습니다.
          </div>
          <ul className="privacy-list" style={{ marginTop: '12px' }}>
            <li>레버리지 ETF(TQQQ, SOXL 등)는 시간 가치 소멸로 물타기에 부적합합니다.</li>
            <li>개별 종목 물타기 전 기업 펀더멘털(실적, 가이던스)을 반드시 확인하세요.</li>
            <li>환율이 높은 시점에 물타기하면 원화 투자금 부담이 커질 수 있습니다.</li>
          </ul>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            미국주식 물타기 계산기 바로 사용하기 →
          </Link>
        </div>

        <div style={{ textAlign: 'center', marginTop: '12px' }}>
          <Link href="/guide" className="privacy-link" style={{ fontSize: '14px', fontWeight: 600 }}>
            물타기 기초 개념 가이드 보기 →
          </Link>
        </div>
      </main>
    </>
  );
}
