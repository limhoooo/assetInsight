import Link from 'next/link';

export default function AppDescription() {
  return (
    <section className="app-desc-section">
      <div className="card">
        <div className="card-title">물타기 계산기란?</div>
        <p className="app-desc-text">
          주식 투자 중 보유 종목의 주가가 하락했을 때, 추가 매수를 통해 평균단가를 낮추는 전략을 <strong>물타기(Averaging Down)</strong>라고 합니다.
          물타기 계산기는 이 과정을 빠르고 정확하게 시뮬레이션해주는 무료 도구입니다.
        </p>

        <div className="app-desc-grid">
          <div className="app-desc-item">
            <div className="app-desc-icon">🔁</div>
            <div>
              <div className="app-desc-label">물타기 시뮬레이션</div>
              <div className="app-desc-sub">회차별 추가 매수 시 평균단가 변화를 표로 확인. 수량 또는 금액으로 입력 가능</div>
            </div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">🎯</div>
            <div>
              <div className="app-desc-label">목표단가 역산</div>
              <div className="app-desc-sub">원하는 평균단가까지 낮추려면 얼마에 몇 주가 필요한지 자동 계산</div>
            </div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">💰</div>
            <div>
              <div className="app-desc-label">손익 현황</div>
              <div className="app-desc-sub">현재 주가 입력 시 평가손익·수익률·본전 상승률 즉시 계산</div>
            </div>
          </div>
          <div className="app-desc-item">
            <div className="app-desc-icon">💱</div>
            <div>
              <div className="app-desc-label">달러(USD) 모드</div>
              <div className="app-desc-sub">미국주식 지원. 실시간 환율 자동 조회로 USD·KRW 동시 확인</div>
            </div>
          </div>
        </div>

        <div className="app-desc-footer">
          <Link href="/guide" className="app-desc-link">물타기 전략 완벽 가이드 읽기 →</Link>
          <Link href="/faq" className="app-desc-link">자주 묻는 질문(FAQ) →</Link>
        </div>
      </div>
    </section>
  );
}
