import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '물타기란? 주식 평균단가 낮추기 완벽 가이드 | 물타기 계산기',
  description: '물타기(주식 평균단가 낮추기)의 개념, 평균단가 계산 방법, 장단점, 언제 해야 하는지 자세히 설명합니다. 물타기 계산기 활용법도 함께 안내합니다.',
  keywords: ['물타기', '평균단가 낮추기', '주식 물타기 방법', '평균단가 계산', '물타기 전략', 'averaging down'],
};

export default function GuidePage() {
  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">← 계산기로 돌아가기</Link>

      <div className="card" style={{ marginTop: '16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>물타기란? 주식 평균단가 낮추기 완벽 가이드</h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          주식 투자를 하다 보면 보유 종목이 하락해 손실을 보는 상황을 맞이합니다. 이때 많은 투자자들이 선택하는 전략 중 하나가 바로 <strong>물타기(평균단가 낮추기)</strong>입니다. 이 가이드에서는 물타기의 개념부터 계산 방법, 장단점, 실전 활용법까지 자세히 설명합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 물타기(Averaging Down)란?</h2>
        <p className="privacy-text">
          물타기는 보유 중인 주식의 주가가 평균 매수가보다 하락했을 때, <strong>추가로 매수하여 평균 매수 단가를 낮추는 투자 전략</strong>입니다. 영어로는 'Averaging Down' 또는 'Cost Averaging'이라고 합니다.
        </p>
        <p className="privacy-text">
          예를 들어 A 종목을 10,000원에 100주 매수했는데 주가가 8,000원으로 하락했다면, 8,000원에 100주를 추가 매수하면 평균 매수가가 9,000원으로 낮아집니다. 이렇게 되면 주가가 원래 매수가인 10,000원까지 회복되지 않더라도, <strong>9,000원만 넘으면 수익 구간</strong>에 진입할 수 있습니다.
        </p>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          '물을 탄다'는 표현처럼, 농도가 진한 손실에 물을 타서 희석시킨다는 의미에서 물타기라는 이름이 붙었습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 평균단가 계산 방법</h2>
        <p className="privacy-text">평균 매수 단가는 다음 공식으로 계산합니다.</p>
        <div className="guide-formula">
          평균단가 = 총 투자금액 ÷ 총 보유 수량
        </div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          <strong>계산 예시</strong>
        </p>
        <ul className="privacy-list">
          <li>1차 매수: 10,000원 × 100주 = 투자금 1,000,000원</li>
          <li>2차 매수(물타기): 8,000원 × 100주 = 투자금 800,000원</li>
          <li>총 투자금액: 1,800,000원 / 총 보유 수량: 200주</li>
          <li><strong>평균단가: 1,800,000 ÷ 200 = 9,000원</strong></li>
        </ul>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          물타기 이후에는 주가가 10,000원이 아닌 <strong>9,000원만 회복해도 본전</strong>이 됩니다. 본전까지 필요한 상승률이 25%에서 12.5%로 절반으로 줄어든 셈입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 물타기 전략의 장점</h2>
        <ul className="privacy-list">
          <li>
            <strong>본전 회복 가능성 향상</strong><br />
            평균단가가 낮아지므로, 주가가 원래 매수가까지 회복되지 않아도 수익을 낼 수 있습니다.
          </li>
          <li>
            <strong>반등 시 수익 극대화</strong><br />
            주가가 반등할 경우 보유 수량이 늘어나 있어 수익이 더 크게 발생합니다.
          </li>
          <li>
            <strong>장기 투자에 효과적</strong><br />
            기업의 본질 가치를 믿는 장기 투자자에게는 저가 매수 기회로 활용할 수 있습니다.
          </li>
          <li>
            <strong>심리적 안정</strong><br />
            평균단가가 낮아지면 수익 전환 시점이 빨라져 보유에 대한 심리적 부담을 줄일 수 있습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 물타기 전략의 단점과 위험성</h2>
        <div className="guide-warning-box">
          ⚠️ 물타기는 잘못 활용하면 손실을 크게 키울 수 있습니다. 반드시 아래 위험성을 인지하고 활용하세요.
        </div>
        <ul className="privacy-list" style={{ marginTop: '12px' }}>
          <li>
            <strong>하락이 지속될 경우 손실 확대</strong><br />
            주가가 계속 하락한다면 물타기는 오히려 손실을 더욱 키웁니다. "하락하는 칼날을 잡는다"는 표현처럼 저점을 정확히 예측하기는 어렵습니다.
          </li>
          <li>
            <strong>추가 자금 부담</strong><br />
            물타기를 위해서는 반드시 여유 자금이 필요합니다. 생활비나 비상금을 사용해 무리하게 추가 매수하는 것은 매우 위험합니다.
          </li>
          <li>
            <strong>집중 투자로 인한 기회비용</strong><br />
            한 종목에 자금이 집중되면 다른 투자 기회를 놓칠 수 있고, 포트폴리오 분산 원칙에도 어긋납니다.
          </li>
          <li>
            <strong>심리적 압박 가중</strong><br />
            추가 투자 이후에도 하락이 계속되면 심리적 부담이 더욱 커져 합리적인 판단을 방해할 수 있습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 물타기를 고려할 수 있는 상황</h2>
        <ul className="privacy-list">
          <li>일시적인 시장 변동이나 단기 이슈로 인한 하락일 때</li>
          <li>기업의 펀더멘털(실적, 재무구조, 사업 경쟁력)이 여전히 건전할 때</li>
          <li>해당 종목을 장기 보유할 계획이 있을 때</li>
          <li>투자금 외에 충분한 여유 자금이 있을 때</li>
          <li>섹터나 시장 전체의 일시적 조정 국면일 때</li>
        </ul>

        <h2 className="privacy-section-title" style={{ marginTop: '20px' }}>6. 물타기를 피해야 하는 상황</h2>
        <ul className="privacy-list">
          <li>기업의 실적 악화, 재무 부실, 회계 부정 등 본질적인 문제가 있을 때</li>
          <li>해당 섹터 전체 또는 시장 전체가 구조적으로 하락하는 추세일 때</li>
          <li>여유 자금이 없어 생활비나 비상금을 사용해야 할 때</li>
          <li>레버리지 ETF, 인버스 ETF, 파생상품 등 시간 가치가 소멸하는 상품일 때</li>
          <li>상장폐지 또는 관리종목 지정 위험이 있는 종목일 때</li>
          <li>이미 포트폴리오에서 해당 종목 비중이 지나치게 높을 때</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 물타기 계산기 활용법</h2>
        <p className="privacy-text">본 물타기 계산기를 활용하면 다양한 물타기 시나리오를 빠르게 시뮬레이션할 수 있습니다.</p>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>현재 보유 현황 입력</strong>
              <p>현재 평균 매수가와 보유 수량을 상단 카드에 입력합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>물타기 시뮬레이션</strong>
              <p>추가 매수 예정 가격과 수량(또는 금액)을 입력하면 회차별 평균단가 변화를 즉시 확인할 수 있습니다. 여러 차례의 물타기를 순차적으로 추가해볼 수 있습니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>목표단가 역산</strong>
              <p>원하는 평균단가가 있다면, 그 단가에 도달하기 위해 얼마에 몇 주를 사야 하는지 자동으로 계산해드립니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">④</span>
            <div>
              <strong>손익 현황 확인</strong>
              <p>현재 주가를 입력하면 평가금액, 평가손익, 수익률, 본전까지 필요 상승률을 한눈에 확인할 수 있습니다.</p>
            </div>
          </li>
        </ul>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          미국주식 투자자라면 상단의 KRW/USD 토글로 달러 모드로 전환하면 실시간 환율이 자동으로 적용되어 원화 기준 투자금과 손익도 함께 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">투자 유의사항</h2>
        <div className="disclaimer-box">
          <p>본 가이드는 투자 교육 목적으로 작성된 참고 자료이며, <strong>투자 조언이나 특정 종목 추천을 제공하지 않습니다.</strong></p>
          <p>모든 투자 결정과 그에 따른 결과는 전적으로 투자자 본인의 판단과 책임에 있습니다.</p>
          <p>주식 투자는 원금 손실의 위험이 있으며, 투자 전 충분한 학습과 검토가 필요합니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link href="/" className="btn btn-primary" style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}>
          물타기 계산기 바로 사용하기 →
        </Link>
      </div>
    </main>
  );
}
