import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetinsight.pages.dev';

export const metadata: Metadata = {
  title: '대출 이자 계산기 가이드 - 상환방식 비교·총 이자 차이 | 자산인사이트',
  description: '원리금균등·원금균등·만기일시 상환방식 비교, 대출 이자 계산 방법, 각 방식의 장단점과 총 이자 차이까지 완벽 정리합니다.',
  keywords: ['원리금균등상환', '원금균등상환', '만기일시상환', '대출 이자 계산 방법', '대출 상환방식 비교', '주택담보대출 이자 계산'],
  alternates: { canonical: `${BASE_URL}/loan/guide` },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '대출 이자 계산기 가이드 - 상환방식 비교',
  description: '원리금균등·원금균등·만기일시 상환방식 비교와 대출 이자 계산 방법 정리.',
  url: `${BASE_URL}/loan/guide`,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
};

export default function LoanGuidePage() {
  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }} />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/loan" className="back-link">← 대출 이자 계산기로 돌아가기</Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>대출 이자 계산기 완벽 가이드</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            대출을 받을 때 가장 중요한 것은 <strong>상환 방식</strong>입니다. 같은 금액, 같은 금리라도 상환 방식에 따라 월 납입금과 총 이자 부담이 크게 달라집니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 원리금균등상환 (가장 일반적)</h2>
          <p className="privacy-text">
            매월 <strong>동일한 금액</strong>을 납입하는 방식입니다. 초기에는 이자 비중이 높고 원금 비중이 낮지만, 시간이 지날수록 원금 비중이 커집니다.
          </p>
          <div className="guide-formula">
            월 납입금 = 대출금 × r(1+r)^n / ((1+r)^n − 1)<br />
            <span style={{ fontSize: '12px' }}>r = 월이율(연이율÷12), n = 총 납입 개월수</span>
          </div>
          <ul className="privacy-list" style={{ marginTop: '12px' }}>
            <li><strong>장점:</strong> 매월 납입금이 일정해 자금 계획 세우기 쉬움</li>
            <li><strong>단점:</strong> 원금균등상환보다 총 이자 부담이 약간 더 높음</li>
            <li><strong>적합한 경우:</strong> 고정적인 수입이 있고 안정적인 상환을 원할 때</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 원금균등상환</h2>
          <p className="privacy-text">
            매월 <strong>동일한 원금</strong>을 납입하고, 남은 잔액에 이자를 붙이는 방식입니다. 초기 납입금이 크고 시간이 지날수록 줄어듭니다.
          </p>
          <div className="guide-formula">
            월 납입 원금 = 대출금 ÷ 납입 개월수<br />
            월 이자 = 잔여 원금 × 월이율
          </div>
          <ul className="privacy-list" style={{ marginTop: '12px' }}>
            <li><strong>장점:</strong> 총 이자 부담이 가장 낮음 (원금이 빠르게 줄어들기 때문)</li>
            <li><strong>단점:</strong> 초기 납입금 부담이 크고, 매월 납입금이 달라짐</li>
            <li><strong>적합한 경우:</strong> 초기 현금 여유가 있고 이자를 최소화하고 싶을 때</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 만기일시상환 (거치식)</h2>
          <p className="privacy-text">
            대출 기간 동안 <strong>이자만 납부</strong>하고, 만기에 원금을 한꺼번에 상환하는 방식입니다.
          </p>
          <div className="guide-formula">월 이자 = 대출금 × 월이율</div>
          <ul className="privacy-list" style={{ marginTop: '12px' }}>
            <li><strong>장점:</strong> 월 납입 부담이 가장 낮음</li>
            <li><strong>단점:</strong> 총 이자 부담이 가장 높음, 만기 시 목돈 필요</li>
            <li><strong>적합한 경우:</strong> 단기 자금 융통, 만기 시 자산 매각 예정인 경우</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 상환방식별 총 이자 비교</h2>
          <p className="privacy-text">3억원, 연 4.5%, 30년(360개월) 기준 비교:</p>
          <ul className="privacy-list">
            <li><strong>원리금균등:</strong> 월 납입금 약 152만원, 총 이자 약 1억 4,700만원</li>
            <li><strong>원금균등:</strong> 첫 달 약 187만원 → 마지막 달 약 112만원, 총 이자 약 1억 3,500만원 (-1,200만원)</li>
            <li><strong>만기일시:</strong> 월 이자 약 112만원, 총 이자 약 4억 500만원 (가장 많음)</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '12px' }}>
            ⚠️ 총 이자는 원금균등 &lt; 원리금균등 &lt; 만기일시 순으로 많습니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 중도상환과 대환대출</h2>
          <ul className="privacy-list">
            <li><strong>중도상환:</strong> 만기 전 원금 일부 또는 전액 상환. 중도상환수수료(보통 1~2%)가 발생할 수 있음. 대출 후 3년이 지나면 수수료 면제되는 경우 多</li>
            <li><strong>대환대출:</strong> 기존 대출을 낮은 금리 상품으로 갈아타는 것. 금리가 0.5%p 이상 낮아진다면 대환 효과가 있을 수 있음. 중도상환수수료와 대환 비용을 먼저 비교해야 함</li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">투자 유의사항</h2>
          <div className="disclaimer-box">
            <p>본 가이드는 교육 목적의 참고 자료이며, <strong>금융 조언을 제공하지 않습니다.</strong></p>
            <p>실제 대출 상품의 금리·수수료·조건은 금융기관마다 다르므로, 대출 전 반드시 해당 기관에 문의하세요.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link href="/loan" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
            대출 이자 계산기 바로 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
