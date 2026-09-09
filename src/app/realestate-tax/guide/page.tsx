import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '부동산 양도소득세 완벽 가이드 - 비과세·장기보유공제·세율 | 자산인사이트',
  description: '부동산 양도소득세 계산 방법, 1세대1주택 비과세(12억), 장기보유특별공제(최대 80%), 단기세율, 누진세율 체계까지 완벽 정리합니다.',
  keywords: ['부동산 양도소득세 계산 방법', '1세대1주택 비과세 요건', '장기보유특별공제 계산', '부동산 양도세 세율', '아파트 양도소득세 계산', '부동산 세금 가이드'],
  alternates: { canonical: `${BASE_URL}/realestate-tax/guide/` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '부동산 양도소득세 완벽 가이드',
  description: '부동산 양도소득세 계산 방법, 장기보유특별공제, 1세대1주택 비과세 요건, 누진세율까지 정리합니다.',
  url: `${BASE_URL}/realestate-tax/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function RealEstateTaxGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/realestate-tax" className="back-link">← 부동산 양도소득세 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>부동산 양도소득세 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            부동산을 팔 때 발생하는 이익에 부과되는 세금이 <strong>양도소득세</strong>입니다.
            보유기간, 거주기간, 주택 수, 조정대상지역 여부 등 다양한 요소에 따라 세액이 크게 달라지므로 미리 파악해두는 것이 중요합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 양도차익 계산</h2>
          <div className="guide-formula">양도차익 = 양도가액 − 취득가액 − 필요경비</div>
          <ul className="privacy-list" style={{ marginTop: '14px' }}>
            <li><strong>양도가액:</strong> 실제 매도 금액</li>
            <li><strong>취득가액:</strong> 실제 매수 금액</li>
            <li><strong>필요경비:</strong> 취득세, 중개수수료, 수리비(자본적 지출) 등</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 1세대 1주택 비과세</h2>
          <p className="privacy-text">
            1세대가 1주택만 보유하고 일정 요건을 충족하면 양도소득세가 비과세됩니다.
          </p>
          <ul className="privacy-list">
            <li><strong>비조정대상지역:</strong> 보유기간 2년 이상</li>
            <li><strong>조정대상지역:</strong> 보유기간 2년 + 거주기간 2년 이상</li>
            <li><strong>비과세 한도:</strong> 양도가액 12억원 이하 (2021.12.8 이후 취득분)</li>
            <li><strong>12억원 초과:</strong> 초과분에 해당하는 양도차익에만 과세</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 일시적 2주택, 상속·증여 등 특수한 경우 별도 비과세 요건이 적용될 수 있습니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 장기보유특별공제</h2>
          <p className="privacy-text">3년 이상 보유한 부동산에 적용되어 양도차익을 줄여줍니다.</p>
          <ul className="privacy-list">
            <li><strong>일반 부동산 (토지·건물):</strong> 보유기간 × 2%, 최대 30% (15년 이상)</li>
            <li><strong>1세대 1주택 (12억 초과분):</strong> 보유기간 × 4% + 거주기간 × 4%, 최대 80%</li>
            <li><strong>적용 불가:</strong> 보유기간 3년 미만, 단기세율 적용 대상, 미등기 양도</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '10px', marginBottom: 0 }}>
            <strong>예시:</strong> 10년 보유 + 5년 거주 → 공제율 = 40% + 20% = 60%
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 세율 체계</h2>
          <p className="privacy-text"><strong>보유기간별 단기세율 (주택·조합원입주권)</strong></p>
          <ul className="privacy-list">
            <li>1년 미만 보유: 70%</li>
            <li>2년 미만 보유: 60%</li>
            <li>2년 이상 보유: 기본 누진세율 적용</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '12px' }}><strong>기본 누진세율 (2024년 기준)</strong></p>
          <ul className="privacy-list">
            <li>1,400만원 이하: 6%</li>
            <li>1,400만원 ~ 5,000만원: 15%</li>
            <li>5,000만원 ~ 8,800만원: 24%</li>
            <li>8,800만원 ~ 1억5,000만원: 35%</li>
            <li>1억5,000만원 ~ 3억원: 38%</li>
            <li>3억원 ~ 5억원: 40%</li>
            <li>5억원 ~ 10억원: 42%</li>
            <li>10억원 초과: 45%</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '10px', marginBottom: 0 }}>
            여기에 <strong>지방소득세 10%</strong>가 추가로 부과됩니다. (양도소득세액 × 10%)
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 미등기 양도</h2>
          <p className="privacy-text">
            등기를 하지 않고 부동산을 양도하면 <strong>세율 70%</strong>가 적용되며, 장기보유특별공제도 받을 수 없습니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 투자 교육 목적으로 작성된 참고 자료이며, <strong>세무 조언을 제공하지 않습니다.</strong></p>
            <p>다주택자 중과, 비사업용 토지 등 개별 상황에 따라 세액이 달라질 수 있으므로 세무사에게 문의하세요.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/realestate-tax" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            부동산 양도소득세 계산기 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
