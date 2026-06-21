import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '보유세 완벽 가이드 - 재산세·종부세 계산 방법 | 자산인사이트',
  description: '재산세와 종합부동산세(종부세) 계산 방법, 공시가격 기준, 납부 일정, 1세대1주택 종부세 공제 12억까지 완벽 정리합니다.',
  keywords: ['재산세 계산 방법', '종합부동산세 계산', '종부세 기준', '공시가격 재산세', '1세대1주택 종부세 공제', '보유세 납부 일정'],
  alternates: { canonical: `${BASE_URL}/holding-tax/guide` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '보유세 완벽 가이드 - 재산세·종부세 계산 방법',
  description: '재산세와 종합부동산세 계산 방법, 납부 일정, 공제 기준 완벽 정리.',
  url: `${BASE_URL}/holding-tax/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function HoldingTaxGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/holding-tax" className="back-link">← 보유세 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>보유세 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            부동산을 보유하면 매년 납부해야 하는 세금이 <strong>보유세</strong>입니다.
            보유세는 <strong>재산세</strong>와 <strong>종합부동산세(종부세)</strong>로 구성되며, 공시가격을 기준으로 계산됩니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 공시가격이란?</h2>
          <p className="privacy-text">
            공시가격은 국토교통부가 매년 1월 1일 기준으로 발표하는 부동산의 공식 가격입니다.
            실거래가와 다르며, 보유세·취득세·양도세 등의 세금 계산 기준이 됩니다.
          </p>
          <ul className="privacy-list">
            <li><strong>공동주택(아파트):</strong> 국토교통부 실거래가 공개시스템에서 확인</li>
            <li><strong>단독주택:</strong> 개별주택가격 공시</li>
            <li>공시가격은 보통 실거래가의 60~80% 수준</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 재산세 계산 방법</h2>
          <p className="privacy-text"><strong>과세표준</strong> = 공시가격 × 60% (공정시장가액비율)</p>
          <p className="privacy-text" style={{ marginTop: '10px' }}><strong>재산세율 (주택)</strong></p>
          <ul className="privacy-list">
            <li>과세표준 <strong>6,000만원 이하:</strong> × 0.1%</li>
            <li>과세표준 <strong>6,000만원 초과 ~ 1억5,000만원:</strong> 6만원 + 초과분 × 0.15%</li>
            <li>과세표준 <strong>1억5,000만원 초과 ~ 3억원:</strong> 19만5,000원 + 초과분 × 0.25%</li>
            <li>과세표준 <strong>3억원 초과:</strong> 57만원 + 초과분 × 0.4%</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '12px' }}><strong>재산세 부가세</strong></p>
          <ul className="privacy-list">
            <li><strong>지방교육세:</strong> 재산세 × 20%</li>
            <li><strong>도시지역분:</strong> 과세표준 × 0.14% (도시지역만)</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 종합부동산세(종부세) 계산 방법</h2>
          <p className="privacy-text"><strong>과세 기준</strong></p>
          <ul className="privacy-list">
            <li><strong>1세대 1주택:</strong> 공시가격 합산 12억원 초과 시 부과</li>
            <li><strong>일반(다주택·법인 등):</strong> 공시가격 합산 9억원 초과 시 부과</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '12px' }}><strong>과세표준</strong> = (공시가격 합산 − 공제액) × 60%</p>
          <p className="privacy-text" style={{ marginTop: '12px' }}><strong>종부세율 (2024년 기준)</strong></p>
          <ul className="privacy-list">
            <li>과세표준 3억원 이하: 0.5%</li>
            <li>3억원 초과 ~ 6억원: 0.7%</li>
            <li>6억원 초과 ~ 12억원: 1.0%</li>
            <li>12억원 초과 ~ 25억원: 1.3%</li>
            <li>25억원 초과 ~ 50억원: 1.5%</li>
            <li>50억원 초과 ~ 94억원: 2.0%</li>
            <li>94억원 초과: 2.7%</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '10px' }}>
            <strong>농어촌특별세:</strong> 종부세액 × 20%
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 보유세 납부 일정</h2>
          <ul className="privacy-list">
            <li><strong>6월 1일:</strong> 과세기준일 (이날 기준 소유자에게 부과)</li>
            <li><strong>7월:</strong> 재산세 1기분 (50%) 납부</li>
            <li><strong>9월:</strong> 재산세 2기분 (50%) 납부</li>
            <li><strong>12월:</strong> 종합부동산세 납부</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 6월 1일 이전에 부동산을 매도하면 해당 연도 보유세를 내지 않아도 됩니다. 매수·매도 시 과세기준일을 확인하세요.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 계산 예시</h2>
          <p className="privacy-text"><strong>공시가격 10억원, 1세대 1주택, 도시지역</strong></p>
          <ul className="privacy-list">
            <li>재산세 과세표준: 10억 × 60% = 6억</li>
            <li>재산세: 57만 + (6억 - 3억) × 0.4% = 57만 + 120만 = 177만원</li>
            <li>지방교육세: 177만 × 20% = 35.4만원</li>
            <li>도시지역분: 6억 × 0.14% = 84만원</li>
            <li><strong>재산세 합계: 약 296만원</strong></li>
            <li>종부세: 10억 &lt; 12억 → <strong>종부세 없음</strong></li>
            <li><strong>총 보유세: 약 296만원</strong></li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 교육 목적의 참고 자료이며, <strong>세무 조언을 제공하지 않습니다.</strong></p>
            <p>세법은 매년 개정될 수 있으므로 실제 납부 전 최신 내용을 확인하거나 세무사에게 문의하세요.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/holding-tax" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            보유세 계산기 바로 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
