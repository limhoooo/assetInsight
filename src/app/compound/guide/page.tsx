import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '복리 계산기 가이드 - 복리 원리·공식·72법칙 | 자산인사이트',
  description: '복리의 원리와 계산 공식, 단리와의 차이, 72법칙, 복리 주기별 효과까지 완벽 정리. 장기 투자에서 복리가 왜 강력한지 알아보세요.',
  keywords: ['복리 원리', '복리 계산 공식', '단리 복리 차이', '72법칙', '복리 투자', '복리 효과', '연복리 월복리 차이'],
  alternates: { canonical: `${BASE_URL}/compound/guide/` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '복리 계산기 가이드 - 복리 원리·공식·72법칙',
  description: '복리의 원리와 계산 공식, 단리와의 차이, 72법칙, 복리 주기별 효과 완벽 정리.',
  url: `${BASE_URL}/compound/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function CompoundGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/compound" className="back-link">← 복리 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>복리 계산기 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            아인슈타인이 "세상에서 가장 강력한 힘"이라고 불렀다는 <strong>복리(Compound Interest)</strong>.
            복리가 왜 강력한지, 어떻게 계산하는지, 장기 투자에서 어떤 의미를 갖는지 알아봅니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 복리란?</h2>
          <p className="privacy-text">
            복리는 <strong>이자에 이자가 붙는 방식</strong>입니다. 원금뿐 아니라 이전에 발생한 이자에도 다음 기간의 이자가 계산됩니다.
            반면 단리는 원금에만 이자가 붙습니다.
          </p>
          <div className="guide-formula">
            단리: 최종금액 = 원금 × (1 + 이율 × 기간)<br />
            복리: 최종금액 = 원금 × (1 + 이율)^기간
          </div>
          <p className="privacy-text" style={{ marginTop: '14px' }}>
            <strong>예시:</strong> 1,000만원을 연 7%로 10년 투자
          </p>
          <ul className="privacy-list">
            <li>단리: 1,000만 × (1 + 0.07 × 10) = <strong>1,700만원</strong> (이익 700만원)</li>
            <li>복리: 1,000만 × (1.07)^10 = <strong>약 1,967만원</strong> (이익 967만원)</li>
            <li>복리 효과: 단리보다 <strong>약 267만원 추가 수익</strong></li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 복리 계산 공식</h2>
          <p className="privacy-text"><strong>연복리 (1년에 1회 복리 계산)</strong></p>
          <div className="guide-formula">FV = P × (1 + r)^n</div>
          <p className="privacy-text" style={{ marginTop: '10px' }}><strong>월복리 (1달에 1회 복리 계산)</strong></p>
          <div className="guide-formula">FV = P × (1 + r/12)^(12n)</div>
          <p className="privacy-text" style={{ marginTop: '10px' }}><strong>분기복리 (3달에 1회 복리 계산)</strong></p>
          <div className="guide-formula">FV = P × (1 + r/4)^(4n)</div>
          <p className="privacy-text" style={{ marginTop: '10px', marginBottom: 0 }}>
            P = 원금, r = 연이율(소수), n = 기간(년)<br />
            복리 주기가 잦을수록 최종 금액이 조금 더 커집니다. (월복리 &gt; 분기복리 &gt; 연복리)
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 72법칙 — 원금이 두 배가 되는 기간</h2>
          <div className="guide-formula">두 배 기간(년) ≈ 72 ÷ 연이율(%)</div>
          <ul className="privacy-list" style={{ marginTop: '14px' }}>
            <li>연 6%: 72 ÷ 6 = <strong>약 12년</strong>에 원금 2배</li>
            <li>연 8%: 72 ÷ 8 = <strong>약 9년</strong>에 원금 2배</li>
            <li>연 10%: 72 ÷ 10 = <strong>약 7.2년</strong>에 원금 2배</li>
            <li>연 12%: 72 ÷ 12 = <strong>약 6년</strong>에 원금 2배</li>
          </ul>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            72법칙은 복리로 원금이 두 배가 되는 기간을 빠르게 어림잡는 공식입니다. 정확한 계산은 복리 계산기를 이용하세요.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 장기 투자에서 복리의 위력</h2>
          <p className="privacy-text">1,000만원을 연 7% 복리로 투자했을 때:</p>
          <ul className="privacy-list">
            <li>10년 후: 약 <strong>1,967만원</strong> (2배)</li>
            <li>20년 후: 약 <strong>3,870만원</strong> (3.9배)</li>
            <li>30년 후: 약 <strong>7,612만원</strong> (7.6배)</li>
            <li>40년 후: 약 <strong>1억 4,974만원</strong> (15배)</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 복리의 핵심은 <strong>시간</strong>입니다. 수익률이 높은 것보다 <strong>오래 유지하는 것</strong>이 더 중요합니다.
            20년과 30년의 차이는 2배 가까이 납니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 현재가치(PV) 역산</h2>
          <p className="privacy-text">
            목표 금액을 정해두고 <strong>지금 얼마를 투자해야 하는지</strong>를 역산할 수 있습니다.
          </p>
          <div className="guide-formula">PV = FV ÷ (1 + r)^n</div>
          <p className="privacy-text" style={{ marginTop: '10px' }}>
            <strong>예시:</strong> 10년 후 1억원이 필요하고 연 7% 수익을 기대한다면<br />
            PV = 1억 ÷ (1.07)^10 = <strong>약 5,083만원</strong> 지금 투자 필요
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 투자 교육 목적으로 작성된 참고 자료이며, <strong>투자 조언을 제공하지 않습니다.</strong></p>
            <p>복리 수익률은 투자 상품 및 시장 상황에 따라 달라질 수 있으며, 원금 손실 위험이 있습니다.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/compound" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            복리 계산기 바로 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
