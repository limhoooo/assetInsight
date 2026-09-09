import type { Metadata } from 'next';
import Link from 'next/link';
import Header from '@/components/Header';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';
const PUBLISHED = '2025-06-01';
const UPDATED = '2026-09-09';

export const metadata: Metadata = {
  title: '미국주식 달러 평균단가 계산 방법 — 환율까지 함께 보는 법 | 자산인사이트',
  description:
    '미국주식의 달러 기준 평균단가를 계산하는 방법과, 같은 달러 평균단가라도 환율에 따라 원화 손익이 달라지는 이유를 정리했습니다. 계산 예시와 유의사항을 함께 안내합니다.',
  keywords: ['미국주식 평균단가', '달러 평균단가 계산', '해외주식 평균단가', '환율 원화 환산 손익', '미국주식 추가 매수'],
  alternates: { canonical: `${BASE_URL}/us-stocks/` },
  openGraph: {
    title: '미국주식 달러 평균단가 계산 방법 | 자산인사이트',
    description: '달러 기준 평균단가 계산법과 환율이 원화 손익에 미치는 영향을 정리했습니다.',
    type: 'article',
    url: `${BASE_URL}/us-stocks/`,
    siteName: '자산인사이트',
    locale: 'ko_KR',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Article',
  headline: '미국주식 달러 평균단가 계산 방법 — 환율까지 함께 보는 법',
  description:
    '미국주식의 달러 기준 평균단가 계산법과, 환율 변동이 원화 기준 손익에 미치는 영향을 설명합니다.',
  url: `${BASE_URL}/us-stocks/`,
  datePublished: PUBLISHED,
  dateModified: UPDATED,
  inLanguage: 'ko-KR',
  author: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  publisher: { '@type': 'Organization', name: '자산인사이트', url: BASE_URL },
  mainEntityOfPage: { '@type': 'WebPage', '@id': `${BASE_URL}/us-stocks/` },
};

const navLinks = [
  { href: '/avgdown', label: '물타기 계산기' },
  { href: '/stock-tax', label: '해외주식 양도세 계산기' },
  { href: '/articles', label: '아티클' },
  { href: '/faq', label: 'FAQ' },
];

export default function UsStocksPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Header
        subtitle="미국주식 평균단가 가이드"
        description="달러 기준 계산과 환율이 만드는 차이"
        navLinks={navLinks}
      />
      <main className="container" style={{ paddingTop: '20px', paddingBottom: '40px' }}>
        <Link href="/avgdown" className="back-link">
          ← 물타기 계산기로 돌아가기
        </Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
            미국주식 달러 평균단가 계산 방법
          </h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            미국주식을 들고 있다가 주가가 내려가면 추가 매수로 평균단가를 낮출지 고민하게 됩니다. 계산
            공식 자체는 국내주식과 똑같지만, 미국주식에는 변수가 하나 더 붙습니다. <strong>환율</strong>
            입니다. 달러 기준으로는 손실인데 원화로는 이익이거나 그 반대인 상황이 실제로 생깁니다. 이
            글에서는 달러 평균단가를 계산하는 방법과, 환율이 결과를 어떻게 바꾸는지를 정리합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">1. 달러 평균단가 계산 공식</h2>
          <p className="privacy-text">
            공식은 원화와 동일합니다. 통화만 달러로 바뀔 뿐 총 투자금을 총 수량으로 나누는 구조는 같습니다.
          </p>
          <div className="guide-formula">달러 평균단가(USD) = 총 투자금액(USD) ÷ 총 보유 수량(주)</div>
          <p className="privacy-text" style={{ marginTop: '14px' }}>
            <strong>계산 예시</strong> — $150에 10주를 산 뒤 $120에 10주를 추가 매수한 경우입니다.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>구분</th>
                  <th>매수가</th>
                  <th>수량</th>
                  <th>투자금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1차 매수</td>
                  <td>$150</td>
                  <td>10주</td>
                  <td>$1,500</td>
                </tr>
                <tr>
                  <td>2차 매수</td>
                  <td>$120</td>
                  <td>10주</td>
                  <td>$1,200</td>
                </tr>
                <tr>
                  <td>합계</td>
                  <td>
                    <strong>평균 $135</strong>
                  </td>
                  <td>20주</td>
                  <td>$2,700</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
            평균단가가 $150에서 $135로 10% 낮아졌습니다. 다만 투입 원금은 $1,500에서 $2,700으로 1.8배가
            됐다는 점을 함께 봐야 합니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">2. 환율이 결과를 바꾸는 지점</h2>
          <p className="privacy-text">
            달러 평균단가가 같아도 매수 시점의 환율이 다르면 원화 기준 투자금과 손익은 달라집니다. 위
            예시에서 1차 매수 시 환율이 1,300원, 2차 매수 시 1,400원이었다고 가정해 보겠습니다.
          </p>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>구분</th>
                  <th>달러 투자금</th>
                  <th>적용 환율</th>
                  <th>원화 투자금</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>1차 매수</td>
                  <td>$1,500</td>
                  <td>1,300원</td>
                  <td>1,950,000원</td>
                </tr>
                <tr>
                  <td>2차 매수</td>
                  <td>$1,200</td>
                  <td>1,400원</td>
                  <td>1,680,000원</td>
                </tr>
                <tr>
                  <td>합계</td>
                  <td>$2,700</td>
                  <td>평균 1,344원</td>
                  <td>
                    <strong>3,630,000원</strong>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
            원화 기준 평균 매입 환율은 1,344원입니다. 이 상태에서 환율이 1,250원으로 내려가면, 주가가
            제자리여도 원화 평가액은 약 7% 줄어듭니다. 반대로 환율이 오르면 달러 손실 일부를 상쇄합니다.
            미국주식은 <strong>주가와 환율 두 가지에 동시에 노출</strong>된다는 뜻입니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">3. 달러 손익과 원화 손익이 엇갈리는 경우</h2>
          <div className="table-wrap">
            <table>
              <thead>
                <tr>
                  <th style={{ textAlign: 'left' }}>상황</th>
                  <th>달러 기준</th>
                  <th>환율</th>
                  <th>원화 기준</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>주가 하락 · 환율 상승</td>
                  <td>-10%</td>
                  <td>+12%</td>
                  <td>약 +0.8%</td>
                </tr>
                <tr>
                  <td>주가 상승 · 환율 하락</td>
                  <td>+10%</td>
                  <td>-12%</td>
                  <td>약 -3.2%</td>
                </tr>
                <tr>
                  <td>주가 보합 · 환율 하락</td>
                  <td>0%</td>
                  <td>-8%</td>
                  <td>약 -8%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
            증권사 앱이 원화로만 손익을 보여주면 주가 때문인지 환율 때문인지 구분하기 어렵습니다. 추가
            매수를 판단할 때는 달러 기준 손익을 따로 확인하는 편이 낫습니다.{' '}
            <Link href="/avgdown" className="privacy-link">
              물타기 계산기
            </Link>
            의 USD 모드는 달러와 원화 손익을 동시에 보여줍니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">4. 계산기 USD 모드 사용 순서</h2>
          <ul className="feature-list" style={{ gap: '12px' }}>
            <li>
              <span className="feature-icon">①</span>
              <div>
                <strong>USD 모드로 전환</strong>
                <p>상단 KRW/USD 토글에서 USD를 선택합니다. 원화 모드와 입력값이 섞이지 않습니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">②</span>
              <div>
                <strong>달러 보유 현황 입력</strong>
                <p>현재 달러 평균 매수가와 보유 수량을 넣습니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">③</span>
              <div>
                <strong>추가 매수 시뮬레이션</strong>
                <p>추가 매수 예정가와 수량(또는 투입할 달러 금액)을 넣으면 새 평균단가가 바로 나옵니다.</p>
              </div>
            </li>
            <li>
              <span className="feature-icon">④</span>
              <div>
                <strong>목표단가 역산</strong>
                <p>
                  반대로 목표 달러 평균단가를 넣으면 그 단가에 도달하는 데 필요한 수량과 금액을 계산합니다.
                </p>
              </div>
            </li>
            <li>
              <span className="feature-icon">⑤</span>
              <div>
                <strong>원화 환산 확인</strong>
                <p>
                  실시간 환율을 조회해 원화 기준 투자금과 손익을 함께 보여줍니다. 환율은 직접 입력해
                  바꿀 수도 있어 시나리오별로 비교할 수 있습니다.
                </p>
              </div>
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">5. 세금도 함께 봐야 합니다</h2>
          <p className="privacy-text">
            미국주식은 매도 차익에 양도소득세 22%가 붙고 연 250만 원의 기본공제가 있습니다. 중요한 것은{' '}
            <strong>과세 기준이 원화 환산액</strong>이라는 점입니다. 매수는 매수 결제일, 매도는 매도
            결제일의 환율로 각각 환산하기 때문에, 달러로는 손실인데 환율이 크게 올라 원화 기준으로는
            차익이 나 세금이 발생하는 경우가 있습니다.
          </p>
          <ul className="privacy-list">
            <li>
              양도소득세 계산은{' '}
              <Link href="/stock-tax" className="privacy-link">
                해외주식 양도소득세 계산기
              </Link>
              에서 확인할 수 있습니다.
            </li>
            <li>
              배당금은 양도소득이 아니라 배당소득으로 별도 과세됩니다.{' '}
              <Link href="/articles/us-dividend-tax-guide" className="privacy-link">
                미국주식 배당소득세 완전 정리
              </Link>
              를 참고하세요.
            </li>
            <li>
              신고와 절세 전략은{' '}
              <Link href="/articles/overseas-stock-tax-guide" className="privacy-link">
                해외주식 양도소득세 신고 방법
              </Link>
              에서 다룹니다.
            </li>
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">6. 추가 매수 전 확인할 것</h2>
          <div className="guide-warning-box">
            환율이 이미 높은 구간이라면 같은 달러 금액을 넣어도 원화 부담이 커집니다. 달러 평균단가는
            내려가지만 원화 평균 매입 환율은 올라가므로, 나중에 환율이 정상화될 때 손실 요인이 될 수
            있습니다.
          </div>
          <ul className="privacy-list" style={{ marginTop: '14px' }}>
            <li>
              레버리지·인버스 ETF는 시간이 지날수록 가치가 깎이는 구조라 평균단가를 낮춰도 회복 전제가
              성립하지 않습니다.
            </li>
            <li>하락 원인이 시장 전체인지 그 기업의 실적 문제인지 먼저 구분하세요.</li>
            <li>한 종목 비중이 과도하게 커지지 않는지 확인하세요. 추가 매수는 필연적으로 비중을 키웁니다.</li>
            <li>추가 투입 자금이 단기간에 쓸 돈이 아닌지 확인하세요.</li>
          </ul>
        </div>

        <div className="card">
          <div className="disclaimer-box">
            <p>
              본 글은 계산 방법을 설명한 참고 자료이며 특정 종목의 매수·매도를 권유하지 않습니다. 본문의
              환율과 주가는 설명을 위한 가정치입니다.
            </p>
            <p>모든 투자 판단과 그 결과에 대한 책임은 투자자 본인에게 있습니다.</p>
          </div>
        </div>

        <div style={{ textAlign: 'center', marginTop: '8px' }}>
          <Link
            href="/avgdown"
            className="btn btn-primary"
            style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
          >
            물타기 계산기 USD 모드 사용하기 →
          </Link>
        </div>
      </main>
    </>
  );
}
