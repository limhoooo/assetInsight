import Link from 'next/link';

export default function DividendStockInvestment() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          국내 배당주 투자 가이드: 배당수익률 선별부터 배당소득세 절세까지
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          배당주 투자는 주가 상승 외에도 <strong>매년 배당금이라는 현금흐름을 받을 수 있는 투자 방식</strong>입니다.
          단순히 배당수익률이 높은 종목을 고르는 것이 아니라, 배당의 지속 가능성·세금 처리·재투자 전략까지 이해해야 실질적인 수익을 만들 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 배당주 투자 핵심 지표</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">배당수익률</span>
            <span className="tax-value">연간 배당금 ÷ 현재 주가 × 100</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">배당성향</span>
            <span className="tax-value">배당금 ÷ 순이익 × 100 (지속 가능성 판단)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">배당 성장률</span>
            <span className="tax-value">매년 배당금이 늘고 있는지 확인</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">배당 기준일</span>
            <span className="tax-value">배당 받으려면 이 날 이전에 주식 보유 필요</span>
          </div>
        </div>
        <div className="guide-formula" style={{ marginTop: '14px' }}>
          배당수익률 = 주당 배당금 ÷ 현재 주가 × 100
        </div>
        <div className="guide-warning-box" style={{ marginTop: '10px' }}>
          ⚠️ 배당수익률만 보면 안 됩니다. 주가가 급락해 수익률이 높아 보이는 함정(배당 트랩)을 조심해야 합니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 좋은 배당주 선별 기준</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>배당 지속성 확인 (최소 5년 이상)</strong>
              <p>경기 침체, 코로나 같은 위기 상황에도 배당을 유지하거나 삭감하지 않은 기업인지 과거 10년 배당 이력을 확인합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>배당성향 40~60% 적정 수준</strong>
              <p>배당성향이 80% 이상이면 이익이 조금만 줄어도 배당을 삭감할 위험이 있습니다. 40~60% 수준이 재투자와 배당을 균형 있게 유지합니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>자유현금흐름(FCF) 확인</strong>
              <p>순이익보다 자유현금흐름이 배당 지급 능력을 더 잘 반영합니다. FCF가 배당총액을 충분히 커버하는지 확인하세요.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">④</span>
            <div>
              <strong>배당 성장 기업 선호</strong>
              <p>배당수익률이 2%여도 매년 10%씩 배당이 오른다면 10년 후 취득 원가 기준 수익률이 5%를 넘어섭니다. 배당 성장주가 장기에 더 유리합니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 국내 배당주 대표 섹터</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>금융주 (은행·보험)</strong><br />
            KB금융, 신한지주, 하나금융 등. 배당수익률 5~8% 수준으로 높고, 정부의 밸류업 정책 수혜로 배당 확대 추세. 금리 환경에 민감.
          </div>
          <div className="info-box">
            <strong>통신주</strong><br />
            SK텔레콤, KT, LG유플러스. 안정적 현금흐름에 배당수익률 4~6% 수준. 성장성은 낮지만 배당 안정성이 높아 방어적 포트폴리오에 적합.
          </div>
          <div className="tax-success-box">
            <strong>에너지·인프라</strong><br />
            한국가스공사, 한국전력 등 공기업 계열. 배당 규모가 정책에 따라 변동될 수 있으므로 사전 확인 필요.
          </div>
          <div className="info-box">
            <strong>고배당 ETF</strong><br />
            KODEX 배당다우존스, TIGER 코스피고배당 등 ETF로 배당주에 분산 투자하는 방식도 개별 종목 리스크를 줄이는 좋은 방법.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 배당소득세와 절세 전략</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">배당소득세율</span>
            <span className="tax-value">15.4% (소득세 14% + 지방소득세 1.4%)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">원천징수</span>
            <span className="tax-value">증권사가 자동 징수 후 지급 (별도 신고 불필요)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">금융소득 2,000만원 초과 시</span>
            <span className="tax-value">종합소득세 신고 대상 (세율 올라갈 수 있음)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">ISA 계좌 활용 시</span>
            <span className="tax-value">200만원(서민형 400만원)까지 비과세</span>
          </div>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px', marginTop: '14px' }}>
          <div className="tax-success-box">
            <strong>절세 전략 ①: ISA 계좌 안에서 배당 ETF 보유</strong><br />
            배당 ETF를 ISA 안에 담으면 배당 수익 200만원(서민형 400만원)까지 비과세 혜택을 받습니다.
          </div>
          <div className="info-box">
            <strong>절세 전략 ②: 배당 시기 분산</strong><br />
            금융소득 2,000만원 이하를 유지해 종합소득세 합산을 피하려면, 배우자 계좌 분산 등을 활용하세요.
          </div>
        </div>

        <h3 className="privacy-section-title" style={{ marginTop: '20px' }}>
          2026년부터 적용되는 배당소득 분리과세 특례
        </h3>
        <p className="privacy-text">
          2025년 세제개편으로 <strong>고배당 상장법인에서 받은 배당소득을 종합과세 대상에서 제외하고
          분리과세하는 특례</strong>가 신설됐습니다. 시행 기간은{' '}
          <strong>2026년 1월 1일부터 2028년 12월 31일까지 3년간</strong>입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>기존</th>
                <th>2026~2028</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2,000만원 초과분</td>
                <td>종합소득 합산</td>
                <td>요건 충족 시 분리과세 선택</td>
              </tr>
              <tr>
                <td>최고 세율</td>
                <td>49.5%</td>
                <td><strong>38.5%</strong></td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tax-success-box" style={{ marginTop: '14px' }}>
          최고 구간 기준 <strong>11%포인트</strong>가 낮아집니다. 그동안 종합과세 부담 때문에 배당주
          비중을 늘리기 어려웠던 고소득 투자자에게는 셈법이 달라지는 변화입니다.
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          적용 대상은 <strong>국내 고배당 상장법인</strong>입니다. 미국주식 등 해외 배당은 해당하지
          않으므로 기존 규칙이 그대로 적용됩니다. 배당성향·배당 증가율 등 구체적 요건과 대상 법인 범위는
          시행령에서 정해지며 변경될 수 있으니 투자 전 최신 기준을 확인하세요.
        </div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          해외 배당 과세는{' '}
          <Link href="/articles/us-dividend-tax-guide" className="privacy-link">
            미국주식 배당소득세 완전 정리
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 배당 재투자 전략</h2>
        <p className="privacy-text">
          받은 배당금을 같은 종목 또는 다른 배당주에 재투자하면 <strong>복리 효과로 장기 수익률이 극적으로 높아집니다.</strong>
        </p>
        <div className="guide-formula">
          배당 재투자 복리 효과: 배당수익률 5% × 20년 재투자 → 원금 대비 약 2.65배 성장
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>배당금 수령 즉시 같은 종목을 매수하는 <strong>자동 DRIP 전략</strong>이 장기 투자자에게 유리합니다.</li>
          <li>분기·월 배당 ETF는 재투자 주기가 짧아 복리 효과가 더 빠르게 쌓입니다.</li>
          <li>배당금은 세후 금액을 재투자하므로 ISA 안에서 운용하면 재투자 원금 자체가 커집니다.</li>
        </ul>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 주식·ETF의 매수·매도를 권유하지 않습니다.</p>
          <p>배당금은 기업 실적에 따라 삭감되거나 폐지될 수 있으며, 과거 배당이 미래 배당을 보장하지 않습니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/avgdown"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          배당주 평단가 계산기 →
        </Link>
      </div>
    </>
  );
}
