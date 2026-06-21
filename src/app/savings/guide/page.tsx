import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '정기예금/적금 가이드 - 이자 계산·세금·금리 비교 | 자산인사이트',
  description: '정기예금과 정기적금의 이자 계산 방법, 이자소득세 15.4%, 단리·복리 차이, 세금우대·비과세 혜택까지 완벽 정리합니다.',
  keywords: ['정기예금 이자 계산', '정기적금 계산 방법', '이자소득세 15.4', '예금 단리 복리', '세금우대 예금', '비과세 예금 적금'],
  alternates: { canonical: `${BASE_URL}/savings/guide` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '정기예금/적금 가이드 - 이자 계산·세금·금리',
  description: '정기예금·정기적금 이자 계산 방법, 이자소득세, 단리·복리 차이, 세금우대·비과세 혜택 정리.',
  url: `${BASE_URL}/savings/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function SavingsGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/savings" className="back-link">← 예금/적금 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>정기예금/적금 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            정기예금과 정기적금은 가장 기본적인 저축 방법이지만, 이자 계산 방식과 세금 처리를 제대로 이해해야 실제 수령액을 정확히 파악할 수 있습니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 정기예금 vs 정기적금 차이</h2>
          <ul className="privacy-list">
            <li>
              <strong>정기예금:</strong> 목돈을 한 번에 예치하고 만기에 원금 + 이자를 수령. 이미 목돈이 있을 때 활용.
            </li>
            <li>
              <strong>정기적금:</strong> 매월 일정 금액을 납입하고 만기에 원금 합계 + 이자를 수령. 목돈 마련을 목적으로 활용.
            </li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 같은 금리라도 정기적금의 실질 수익률은 정기예금보다 낮습니다. 적금은 매월 납입하므로 평균 잔존기간이 절반 수준이기 때문입니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 정기예금 이자 계산</h2>
          <p className="privacy-text"><strong>단리 (일반적인 정기예금)</strong></p>
          <div className="guide-formula">이자 = 원금 × 연이자율(%) / 100 × 기간(월) / 12</div>
          <p className="privacy-text" style={{ marginTop: '12px' }}>
            <strong>예시:</strong> 1,000만원 × 연 3.5% × 12개월<br />
            이자 = 1,000만 × 0.035 × 1 = <strong>35만원 (세전)</strong>
          </p>

          <p className="privacy-text" style={{ marginTop: '14px' }}><strong>월복리</strong></p>
          <div className="guide-formula">만기금액 = 원금 × (1 + 연이율/1200)^기간(월)</div>
          <p className="privacy-text" style={{ marginTop: '10px', marginBottom: 0 }}>
            복리는 이자에 이자가 붙어 장기일수록 유리하지만, 국내 정기예금은 대부분 단리 방식입니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 정기적금 이자 계산 (단리)</h2>
          <div className="guide-formula">이자 = 월납입금 × 연이율(%) / 1200 × n(n+1) / 2</div>
          <p className="privacy-text" style={{ marginTop: '12px' }}>
            n = 납입 기간(월). 첫 달 납입금은 n개월, 마지막 달 납입금은 1개월 동안 이자가 붙기 때문에 평균 잔존기간은 (n+1)/2 개월입니다.
          </p>
          <p className="privacy-text">
            <strong>예시:</strong> 월 50만원 × 연 4% × 12개월<br />
            이자 = 50만 × (4/1200) × 12×13/2 = 50만 × 0.003333 × 78 = <strong>약 13만원 (세전)</strong>
          </p>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            총 납입 원금 600만원에 세전 이자 약 13만원, 만기 수령액 약 613만원.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 이자소득세</h2>
          <p className="privacy-text">이자를 수령할 때 원천징수되는 세금입니다.</p>
          <ul className="privacy-list">
            <li><strong>일반과세:</strong> 이자 × 15.4% (소득세 14% + 지방소득세 1.4%)</li>
            <li><strong>세금우대:</strong> 이자 × 9.5% (소득세 9% + 지방소득세 0.5%) — 조합·저축은행 등 일부 상품</li>
            <li><strong>비과세:</strong> 세금 없음 — 청년도약계좌, 장기주택마련저축 등 특정 상품</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '10px' }}>
            <strong>예시:</strong> 세전이자 35만원, 일반과세 적용<br />
            이자소득세 = 35만 × 15.4% = 53,900원<br />
            세후 이자 = 35만 − 53,900 = <strong>296,100원</strong>
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 예금자 보호 제도</h2>
          <p className="privacy-text">
            국내 은행·저축은행 등에 예치한 예금은 <strong>예금자보호법</strong>에 따라 1인당 최대 <strong>5,000만원</strong>(원금+이자 합산)까지 보호됩니다.
            금융기관별로 각각 5,000만원 한도이므로, 목돈이 많다면 여러 금융기관에 분산 예치하는 것을 고려하세요.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">6. 금리 선택 팁</h2>
          <ul className="privacy-list">
            <li><strong>단기(6개월 이하):</strong> 금리 인하 예상 시 단기 상품 유리 (재예치 시 높은 금리 기대 어려움)</li>
            <li><strong>장기(12개월 이상):</strong> 금리 상승이 기대된다면 단기 후 재예치, 하락이 기대된다면 장기 고정금리 유리</li>
            <li><strong>특판 예금:</strong> 은행 프로모션 상품은 일반 금리보다 0.3~0.5%p 높을 수 있으므로 적극 활용</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 교육 목적으로 작성된 참고 자료이며, <strong>특정 금융상품 추천을 제공하지 않습니다.</strong></p>
            <p>실제 이자는 금융기관 및 상품에 따라 다를 수 있으며, 중도해지 시 약정 금리보다 낮은 이율이 적용될 수 있습니다.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/savings" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            정기예금/적금 계산기 바로 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
