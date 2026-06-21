import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '취득세 완벽 가이드 - 세율·계산 방법·다주택 중과 | 자산인사이트',
  description: '부동산 취득세 세율 체계, 계산 방법, 다주택자 중과세율, 지방교육세·농어촌특별세까지 완벽 정리. 아파트·토지·상가 취득세 총정리.',
  keywords: ['취득세 계산 방법', '취득세율', '다주택자 취득세', '취득세 지방교육세', '아파트 취득세 계산', '취득세 가이드'],
  alternates: { canonical: `${BASE_URL}/acquisition-tax/guide` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '취득세 완벽 가이드 - 세율·계산 방법·다주택 중과',
  description: '부동산 취득세 세율 체계, 계산 방법, 다주택자 중과세율, 지방교육세·농어촌특별세까지 완벽 정리.',
  url: `${BASE_URL}/acquisition-tax/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function AcquisitionTaxGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/acquisition-tax" className="back-link">← 취득세 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>취득세 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            부동산을 구입할 때 반드시 납부해야 하는 세금이 <strong>취득세</strong>입니다.
            취득가액, 주택 수, 조정대상지역 여부, 전용면적에 따라 세율이 달라지므로 미리 파악해두는 것이 중요합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 취득세란?</h2>
          <p className="privacy-text">
            취득세는 토지, 주택, 건물 등 부동산을 취득(매매, 증여, 상속 등)할 때 납부하는 지방세입니다.
            취득 후 <strong>60일 이내</strong>에 관할 시·군·구청에 신고·납부해야 하며, 미납 시 가산세가 부과됩니다.
          </p>
          <ul className="privacy-list">
            <li><strong>납부 기한:</strong> 취득일로부터 60일 이내</li>
            <li><strong>신고 방법:</strong> 위택스(wetax.go.kr) 온라인 신고 또는 관할 시·군·구청 방문</li>
            <li><strong>취득세 = 취득가액 × 세율</strong> (단, 시가표준액이 취득가액보다 높은 경우 시가표준액 기준)</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 주택 취득세율 (1세대 기준)</h2>
          <p className="privacy-text"><strong>1주택 기본세율</strong></p>
          <ul className="privacy-list">
            <li>취득가액 <strong>6억원 이하:</strong> 1%</li>
            <li>취득가액 <strong>6억원 초과 ~ 9억원 이하:</strong> 1~3% (선형 보간)<br />
              <span style={{ fontSize: '13px', color: 'var(--text-muted)' }}>세율 = (취득가액 × 2 / 3억 − 3) %</span>
            </li>
            <li>취득가액 <strong>9억원 초과:</strong> 3%</li>
          </ul>

          <div className="guide-formula" style={{ marginTop: '14px' }}>
            예시: 7억5천만원 주택 → 세율 = (7.5억 × 2/3억 − 3)% = 2%
          </div>

          <p className="privacy-text" style={{ marginTop: '16px' }}><strong>다주택자 중과세율</strong></p>
          <ul className="privacy-list">
            <li><strong>2주택 (조정대상지역):</strong> 8%</li>
            <li><strong>2주택 (비조정지역):</strong> 기본세율 (1~3%)</li>
            <li><strong>3주택 (조정대상지역):</strong> 12%</li>
            <li><strong>3주택 (비조정지역):</strong> 8%</li>
            <li><strong>4주택 이상 (모든 지역):</strong> 12%</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 비주택 취득세율</h2>
          <ul className="privacy-list">
            <li><strong>토지·건물(비주택):</strong> 4%</li>
            <li><strong>상가·오피스텔:</strong> 4%</li>
            <li>농지 등 일부는 별도 세율이 적용될 수 있습니다.</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 부가세: 지방교육세 & 농어촌특별세</h2>
          <p className="privacy-text">취득세 외에 두 가지 세금이 추가로 부과됩니다.</p>

          <p className="privacy-text"><strong>지방교육세</strong></p>
          <ul className="privacy-list">
            <li>취득세액의 <strong>10%</strong></li>
            <li>예: 취득세 300만원 → 지방교육세 30만원</li>
          </ul>

          <p className="privacy-text" style={{ marginTop: '12px' }}><strong>농어촌특별세</strong></p>
          <ul className="privacy-list">
            <li><strong>전용면적 85㎡ 이하 주택 (국민주택):</strong> 비과세 (0원)</li>
            <li><strong>전용면적 85㎡ 초과 주택 (기본세율):</strong> 취득가액 × 0.2%</li>
            <li><strong>다주택자 중과(8%, 12%):</strong> 취득가액 × 0.6%</li>
            <li><strong>비주택:</strong> 취득가액 × 0.2%</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 취득세 총 부담 예시</h2>
          <ul className="privacy-list">
            <li><strong>5억원 아파트 (85㎡ 이하, 1주택):</strong><br />
              취득세 500만 + 지방교육세 50만 = <strong>합계 550만원 (1.1%)</strong></li>
            <li><strong>10억원 아파트 (85㎡ 초과, 1주택):</strong><br />
              취득세 300만 + 지방교육세 30만 + 농어촌특별세 20만 = <strong>합계 350만원 (3.5%)</strong></li>
            <li><strong>6억원 아파트 (85㎡ 이하, 2주택·조정지역):</strong><br />
              취득세 480만 + 지방교육세 48만 = <strong>합계 528만원 (8.8%)</strong></li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">6. 취득세 감면·면제</h2>
          <ul className="privacy-list">
            <li><strong>생애최초 주택 구입:</strong> 12억 이하 주택, 200만원 한도 감면 (2025년 기준)</li>
            <li><strong>신혼부부:</strong> 일정 요건 충족 시 감면 혜택</li>
            <li><strong>농지:</strong> 자경농민 등 별도 감면 규정</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 감면 혜택은 세법 개정에 따라 매년 변경될 수 있습니다. 최신 내용은 위택스 또는 세무사에게 확인하세요.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 투자 교육 목적으로 작성된 참고 자료이며, <strong>세무 조언을 제공하지 않습니다.</strong></p>
            <p>세법은 매년 개정될 수 있으므로 실제 취득 전 최신 세율을 확인하거나 세무사에게 문의하세요.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/acquisition-tax" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            취득세 계산기 바로 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
