import Link from 'next/link';

export default function TsmcInvestmentAnalysis() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          TSMC 완전 분석: 세계 1위 파운드리의 경쟁력과 투자 포인트
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          TSMC(Taiwan Semiconductor Manufacturing Company)는 애플·엔비디아·AMD·퀄컴의 칩을
          전량 위탁 생산하는 세계 최대 파운드리 기업입니다.
          <strong>왜 TSMC 없이는 AI 시대가 불가능한지</strong>, 사업 구조와 투자 포인트를 정리합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. TSMC란 무엇인가 — 파운드리 사업 모델</h2>
        <p className="privacy-text">
          반도체 산업은 크게 <strong>설계(팹리스)</strong>와 <strong>생산(파운드리)</strong>으로 나뉩니다.
          엔비디아·AMD·애플은 칩을 설계하지만 공장은 없습니다. TSMC는 이 설계된 칩을 대신 만들어 주는 회사입니다.
        </p>
        <div className="tax-result-grid" style={{ marginTop: '12px' }}>
          <div className="tax-row">
            <span className="tax-label">사업 모델</span>
            <span className="tax-value">순수 파운드리 — 자체 칩 설계 없음, 고객과 경쟁하지 않음</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">주요 고객</span>
            <span className="tax-value">애플(20%↑), 엔비디아, AMD, 퀄컴, 미디어텍, 브로드컴</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">글로벌 파운드리 점유율</span>
            <span className="tax-value">약 60% (첨단 공정 기준 90% 이상)</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">상장</span>
            <span className="tax-value">대만 증시(2330 TT) + 미국 ADR(TSM)</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. TSMC의 핵심 경쟁력</h2>
        <ul className="feature-list" style={{ gap: '14px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>공정 기술 리더십 (2nm·3nm)</strong>
              <p>
                삼성전자·인텔보다 앞선 수율(yield)로 첨단 공정을 양산합니다. 엔비디아 B200(블랙웰)에 사용되는
                CoWoS 패키징 기술도 TSMC가 독점 공급합니다.
              </p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>고객 신뢰 — 중립적 위치</strong>
              <p>
                TSMC는 자체 칩을 만들지 않기 때문에 고객의 기밀 설계가 유출될 위험이 없습니다.
                애플과 퀄컴이 경쟁사임에도 같은 공장을 쓸 수 있는 이유입니다.
              </p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>규모의 경제와 공급망</strong>
              <p>
                ASML EUV 노광 장비를 전 세계에서 가장 많이 보유하고 있습니다.
                대규모 수주로 장비 구매 협상력이 높고, 수율 노하우가 수십 년간 축적돼 있습니다.
              </p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. AI 반도체 수요와 TSMC</h2>
        <div className="tax-success-box">
          <strong>CoWoS(Chip on Wafer on Substrate) 패키징 독점</strong><br />
          엔비디아 H100·B200 GPU에 HBM 메모리를 붙이는 고급 패키징 공정을 TSMC가 독점 공급합니다.
          AI 서버 수요가 늘수록 TSMC의 CoWoS 공급이 병목이 됩니다.
        </div>
        <div className="tax-success-box" style={{ marginTop: '10px' }}>
          <strong>첨단 공정 수요 집중</strong><br />
          AI 가속기·애플 실리콘·퀄컴 스냅드래곤은 모두 3nm 이하 공정을 필요로 합니다.
          이 시장에서 경쟁할 수 있는 기업은 현실적으로 TSMC뿐입니다.
        </div>
        <div className="info-box" style={{ marginTop: '10px' }}>
          <strong>수혜 구조 요약</strong><br />
          AI 투자 확대 → 엔비디아 GPU 주문 증가 → TSMC 첨단 공정 + CoWoS 수요 급증 → TSMC 매출·영업이익 성장
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 투자 리스크 — 지정학적 위험</h2>
        <div className="guide-warning-box">
          ⚠️ TSMC의 가장 큰 리스크는 대만 해협 지정학입니다. 전체 생산의 90% 이상이 대만에 집중되어 있습니다.
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>
            <strong>대만 리스크:</strong> 중국의 대만 무력 통일 시나리오는 TSMC 주가에 가장 큰 단기 충격 요인입니다.
          </li>
          <li>
            <strong>미국 공장(TSMC Arizona) 진행 중:</strong> 2nm 공장을 포함한 3개 팹이 건설 중이며,
            CHIPS Act 보조금을 받았습니다. 지리적 분산으로 리스크를 줄이고 있으나 비용 증가가 우려됩니다.
          </li>
          <li>
            <strong>일본(구마모토) 공장:</strong> 2024년 가동 시작. 소니·도요타 등 일본 고객 대응용 성숙 공정 위주입니다.
          </li>
          <li>
            <strong>환율 리스크:</strong> 매출의 상당 부분이 달러 기반이지만 비용은 대만 달러(TWD) 기반으로,
            달러 약세 시 마진 압박이 생깁니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 주요 재무 지표 (참고)</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">영업이익률</span>
            <span className="tax-value">40~45% 수준 (세계 최고 수준의 반도체 기업)</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">매출 성장</span>
            <span className="tax-value">AI 수요로 2024~2025년 고성장 구간 진입</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">배당</span>
            <span className="tax-value">분기 배당 지급, 배당수익률 약 1~2% 수준</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">CAPEX</span>
            <span className="tax-value">연간 300억 달러 이상 투자 — 선단 공정 유지가 핵심</span>
          </div>
          <div className="tax-row tax-row-emphasis">
            <span className="tax-label">투자 방법</span>
            <span className="tax-value">TSM (ADR, 미국 주식 계좌) 또는 반도체 ETF(SMH·SOXX 포함)</span>
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. TSMC vs 삼성전자 파운드리 비교</h2>
        <div className="tax-result-grid">
          <div className="tax-row">
            <span className="tax-label">공정 수율</span>
            <span className="tax-value">TSMC 우위 — 3nm 이하 양산 수율에서 격차</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">고객 신뢰도</span>
            <span className="tax-value">TSMC 우위 — 삼성은 자체 반도체(갤럭시) 생산으로 이해충돌 우려</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">지정학 분산</span>
            <span className="tax-value">삼성 유리 — 한국·미국 생산기지, 대만 집중 리스크 없음</span>
          </div>
          <div className="tax-row">
            <span className="tax-label">HBM 공급</span>
            <span className="tax-value">삼성·SK하이닉스 (메모리) + TSMC CoWoS (패키징) 협력 구조</span>
          </div>
        </div>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 공개된 정보를 바탕으로 작성된 교육 자료이며, 특정 종목의 매수·매도를 권유하지 않습니다.</p>
          <p>재무 수치는 시기에 따라 변동되므로, 투자 전 최신 실적 보고서를 직접 확인하시기 바랍니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/us-stocks"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          미국 주식·ETF 수익률 계산기 →
        </Link>
      </div>
    </>
  );
}
