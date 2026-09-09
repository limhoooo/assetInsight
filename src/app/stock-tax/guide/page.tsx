import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '해외주식 양도소득세 완벽 가이드 - 계산 방법·신고 기한 | 자산인사이트',
  description: '해외주식(미국주식) 양도소득세 계산 방법, 기본공제 250만원 적용, 22% 세율, 손익 통산, 신고 기한(5월)까지 한눈에 정리합니다. 계산기로 바로 확인하세요.',
  keywords: ['해외주식 양도소득세 계산', '미국주식 양도세 계산 방법', '해외주식 양도세 신고', '해외주식 세금 신고 기한', '해외주식 손익 통산', '미국주식 세금 계산기'],
  alternates: { canonical: `${BASE_URL}/stock-tax/guide/` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '해외주식 양도소득세 완벽 가이드',
  description: '해외주식 양도소득세 계산 방법, 기본공제, 세율, 신고 방법까지 정리합니다.',
  url: `${BASE_URL}/stock-tax/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function StockTaxGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/stock-tax" className="back-link">← 해외주식 양도소득세 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>해외주식 양도소득세 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            미국주식, 유럽주식 등 해외주식을 매도해 수익이 발생했다면 <strong>양도소득세 신고 의무</strong>가 생깁니다.
            국내주식과 달리 해외주식은 일반 투자자도 양도세를 납부해야 하므로, 계산 방법과 신고 절차를 미리 파악해두는 것이 중요합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 해외주식 양도소득세란?</h2>
          <p className="privacy-text">
            해외주식을 매도하여 발생한 이익(양도차익)에 부과되는 세금입니다. 국내 상장주식의 경우 대주주가 아니면 비과세이지만,
            <strong> 해외주식은 일반 투자자도 양도소득세 신고 의무</strong>가 있습니다.
          </p>
          <ul className="privacy-list">
            <li><strong>과세 대상:</strong> 미국, 일본, 유럽 등 해외 거래소에 상장된 주식 직접 매도 차익</li>
            <li><strong>비과세:</strong> 국내 ETF, 국내 상장 해외 ETF(배당소득세로 과세됨)는 별도 규정 적용</li>
            <li><strong>신고 단위:</strong> 연간(1월 1일~12월 31일) 합산 손익 기준</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 양도차익 계산 방법</h2>
          <div className="guide-formula">양도차익 = 매도금액 − 취득원가 − 필요경비</div>
          <ul className="privacy-list" style={{ marginTop: '14px' }}>
            <li><strong>매도금액:</strong> 매도 시점의 환율로 환산한 원화 금액</li>
            <li><strong>취득원가:</strong> 매수 시점의 환율로 환산한 원화 금액 (매수가 × 매수 시 환율)</li>
            <li><strong>필요경비:</strong> 해외 증권사 수수료, 환전 수수료 등</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 매수·매도 시점의 환율이 다를 수 있으므로, 각 거래 시점 환율을 별도로 적용해야 합니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 기본공제 및 세율</h2>
          <div className="guide-formula">납부세액 = (연간 양도차익 합계 − 250만원) × 22%</div>
          <ul className="privacy-list" style={{ marginTop: '14px' }}>
            <li><strong>기본공제:</strong> 연간 250만원 (여러 종목 합산 후 적용)</li>
            <li><strong>양도소득세:</strong> 과세표준의 20%</li>
            <li><strong>지방소득세:</strong> 양도소득세의 10% (= 과세표준의 2%)</li>
            <li><strong>합계 세율:</strong> 22%</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '12px' }}>
            <strong>계산 예시:</strong> 연간 해외주식 양도차익 합계 1,000만원<br />
            과세표준 = 1,000만 − 250만 = 750만원<br />
            납부세액 = 750만 × 22% = <strong>165만원</strong>
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 손익 통산</h2>
          <p className="privacy-text">
            같은 해에 A 종목에서 이익이 나고 B 종목에서 손실이 났다면, <strong>이익과 손실을 합산(통산)</strong>하여 순이익에 대해서만 과세합니다.
          </p>
          <ul className="privacy-list">
            <li>A 주식 수익: +500만원 / B 주식 손실: −200만원 → 합산 양도차익: 300만원</li>
            <li>기본공제 250만원 적용 → 과세표준 50만원</li>
            <li>납부세액: 50만 × 22% = 11만원</li>
          </ul>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            단, <strong>국내주식 손익과는 통산되지 않습니다.</strong> 해외주식끼리만 합산 가능합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 신고 방법 및 기한</h2>
          <ul className="privacy-list">
            <li><strong>신고 기한:</strong> 다음 해 5월 1일 ~ 5월 31일 (종합소득세 확정신고 기간)</li>
            <li><strong>신고 방법:</strong> 홈택스(hometax.go.kr) 온라인 신고 또는 세무서 방문</li>
            <li><strong>필요 서류:</strong> 거래내역서 (증권사에서 발급), 환율 자료</li>
            <li><strong>미신고 시:</strong> 가산세 부과 (무신고 가산세 20%, 납부불성실 가산세 별도)</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 양도차익이 250만원 이하여도 신고 의무가 있습니다. 다만 납부세액은 0원입니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 투자 교육 목적으로 작성된 참고 자료이며, <strong>세무 조언을 제공하지 않습니다.</strong></p>
            <p>세법은 매년 개정될 수 있으므로 신고 전 최신 세법 내용을 확인하거나 세무사에게 문의하세요.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/stock-tax" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            해외주식 양도소득세 계산기 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
