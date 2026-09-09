import Link from 'next/link';

export default function SemiconductorValueChain() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          반도체 밸류체인 완전 정리: 설계·장비·파운드리·후공정 어디를 봐야 할까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          반도체 주식을 보다 보면 &quot;같은 반도체인데 왜 이 회사는 오르고 저 회사는 빠지지&quot; 하는
          순간이 옵니다. 반도체는 하나의 산업이 아니라 성격이 전혀 다른 여러 단계가 이어진 사슬이기
          때문입니다. 각 단계가 무엇을 하고 어떤 논리로 돈을 버는지 알면 개별 기업 뉴스를 훨씬 잘 해석할
          수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 전체 구조 한눈에 보기</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>단계</th>
                <th>하는 일</th>
                <th>수익 구조의 성격</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>IP · EDA</td>
                <td>설계 자산과 설계 도구 제공</td>
                <td>로열티·구독, 경기 영향 작음</td>
              </tr>
              <tr>
                <td>팹리스 (설계)</td>
                <td>칩을 설계하고 생산은 위탁</td>
                <td>고마진, 제품 경쟁력에 좌우</td>
              </tr>
              <tr>
                <td>장비 · 소재</td>
                <td>생산 설비와 재료 공급</td>
                <td>설비 투자 사이클에 연동</td>
              </tr>
              <tr>
                <td>파운드리</td>
                <td>설계도를 받아 위탁 생산</td>
                <td>가동률 싸움, 대규모 설비 투자</td>
              </tr>
              <tr>
                <td>IDM (종합)</td>
                <td>설계부터 생산까지 직접</td>
                <td>제품 가격 사이클에 직접 노출</td>
              </tr>
              <tr>
                <td>후공정 (OSAT)</td>
                <td>패키징·테스트</td>
                <td>물량 연동, 최근 기술 중요도 상승</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          같은 &quot;반도체 관련주&quot;라도 팹리스는 제품이 팔리는지를, 장비는 고객사가 투자를 늘리는지를,
          메모리 IDM은 제품 가격이 오르는지를 봐야 합니다. 서로 다른 지표로 움직이기 때문에 한 뉴스가
          어떤 기업에는 호재이고 다른 기업에는 악재일 수 있습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 설계: 팹리스와 IP</h2>
        <p className="privacy-text">
          공장을 짓지 않고 칩 설계만 하는 회사를 팹리스라고 합니다. 생산은 파운드리에 맡깁니다. 설비
          투자가 없어 자본 부담이 작고 마진이 높지만, 제품이 시장에서 밀리면 실적이 빠르게 무너집니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>IP 기업</strong> — CPU 명령어 구조 같은 설계 자산을 라이선스하고 로열티를 받습니다.
            칩이 팔릴 때마다 수익이 생기는 구조라 특정 고객 의존도가 낮습니다.
          </li>
          <li>
            <strong>EDA 기업</strong> — 반도체를 설계하는 소프트웨어를 공급합니다. 소수 기업이 시장을
            나눠 갖고 있고 구독 기반이라 실적이 안정적입니다.
          </li>
          <li>
            <strong>팹리스</strong> — GPU, AP, 통신칩 등을 설계합니다. 성능 우위가 곧 점유율이라 기술
            경쟁의 결과가 실적에 직결됩니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 파운드리: 가동률이 전부다</h2>
        <p className="privacy-text">
          팹리스의 설계도를 받아 실제로 칩을 찍어내는 위탁 생산입니다. 공장 하나에 수십조 원이 들어가기
          때문에 고정비가 막대하고, 따라서 <strong>가동률이 수익성을 결정</strong>합니다. 라인이 놀면
          감가상각비가 그대로 손실이 됩니다.
        </p>
        <ul className="privacy-list">
          <li>
            선단 공정(더 미세한 나노 공정)에 먼저 진입한 기업이 고부가 주문을 가져갑니다.
          </li>
          <li>
            고객사가 설계 자산을 맡기는 구조라 신뢰와 수율 실적이 진입장벽으로 작용합니다.
          </li>
          <li>
            고객이 경쟁자가 되지 않는다는 점이 중요합니다. 자체 칩을 만들지 않는 순수 파운드리가 선호되는
            이유입니다.
          </li>
        </ul>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          개별 기업 분석은{' '}
          <Link href="/articles/tsmc-investment-analysis" className="privacy-link">
            TSMC 완전 분석
          </Link>
          과{' '}
          <Link href="/articles/samsung-electronics-stock-analysis" className="privacy-link">
            삼성전자 주식 완전 분석
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 메모리: 가격이 곧 실적</h2>
        <p className="privacy-text">
          D램과 낸드는 규격이 표준화된 제품에 가깝습니다. 그래서 제품 차별화보다 <strong>수급에 따른
          가격</strong>이 실적을 좌우합니다. 메모리 기업의 이익이 흑자와 적자를 크게 오가는 이유입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>국면</th>
                <th>가격</th>
                <th>기업 행동</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>회복</td>
                <td>바닥 확인 후 반등</td>
                <td>감산 유지, 재고 소진</td>
              </tr>
              <tr>
                <td>호황</td>
                <td>상승 지속</td>
                <td>증설 발표, 설비 투자 확대</td>
              </tr>
              <tr>
                <td>조정</td>
                <td>상승 둔화</td>
                <td>신규 라인 가동 시작</td>
              </tr>
              <tr>
                <td>침체</td>
                <td>하락</td>
                <td>감산, 투자 축소</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          메모리 기업은 <strong>실적이 가장 좋을 때 주가가 정점을 지나는 경우</strong>가 많습니다. 호황기
          이익으로 계산한 PER은 낮아 보이지만, 그 이익이 사이클의 꼭대기라면 저평가가 아닙니다. 반대로
          적자 구간에서 PER이 무의미해지는 시점이 바닥인 경우도 있습니다. 사이클 산업에서 PER을 그대로
          읽으면 방향을 거꾸로 잡기 쉽습니다.
        </div>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          사이클 판단 지표는{' '}
          <Link href="/articles/semiconductor-cycle-strategy" className="privacy-link">
            반도체 업황 사이클 완전 분석
          </Link>
          에서 자세히 다룹니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 장비와 소재: 한 박자 먼저 움직인다</h2>
        <p className="privacy-text">
          장비 기업의 실적은 제품 가격이 아니라 <strong>고객사의 설비 투자 결정</strong>에 달려 있습니다.
          반도체 기업이 증설을 발표하면 장비 주문이 먼저 들어가고, 실제 생산과 매출은 1~2년 뒤에 나옵니다.
          그래서 장비주는 업황보다 앞서 움직이는 경향이 있습니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>노광 장비</strong> — 회로를 웨이퍼에 새기는 핵심 장비로, 선단 공정용은 사실상 소수
            업체가 독점합니다. 대체가 어려워 협상력이 매우 강합니다.
          </li>
          <li>
            <strong>식각·증착 장비</strong> — 공정 단계마다 필요하며 미세화가 진행될수록 단계 수가 늘어
            장비 수요도 함께 증가합니다.
          </li>
          <li>
            <strong>소재</strong> — 웨이퍼, 포토레지스트, 특수가스 등입니다. 생산량에 비례해 소모되므로
            가동률과 직결됩니다.
          </li>
        </ul>
        <div className="info-box" style={{ marginBottom: 0 }}>
          장비·소재는 특정 국가나 소수 기업에 공급이 몰려 있는 경우가 많아, 수출 규제 같은 정책 이슈가
          실적에 직접 영향을 줍니다. 기술 경쟁력만이 아니라 지정학 변수를 함께 봐야 하는 영역입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 후공정: 조연에서 주연으로</h2>
        <p className="privacy-text">
          만들어진 칩을 자르고 포장하고 검사하는 단계입니다. 오랫동안 부가가치가 낮은 영역으로 취급됐지만
          최근 위상이 크게 달라졌습니다.
        </p>
        <p className="privacy-text">
          회로를 더 미세하게 만드는 방식이 물리적 한계에 가까워지면서, 여러 칩을 입체로 쌓거나 옆으로 붙여
          하나처럼 동작하게 하는 <strong>첨단 패키징</strong>이 성능을 끌어올리는 핵심 수단이 됐습니다. AI
          연산에 쓰이는 고대역폭 메모리도 칩을 수직으로 쌓아 만드는 구조라 패키징 기술이 곧 제품
          경쟁력입니다.
        </p>
        <ul className="privacy-list">
          <li>패키징 능력이 부족하면 칩을 설계하고 생산해도 완제품 공급이 막힙니다.</li>
          <li>파운드리가 후공정까지 통합하려는 움직임이 나타나는 이유이기도 합니다.</li>
          <li>후공정 병목이 생기면 앞단 수요가 아무리 좋아도 출하가 제한됩니다.</li>
        </ul>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          관련 내용은{' '}
          <Link href="/articles/skhynix-hbm-ai-investment" className="privacy-link">
            SK하이닉스 HBM 투자 포인트
          </Link>
          에서 이어집니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 단계별로 봐야 할 지표</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>단계</th>
                <th>핵심 지표</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>팹리스</td>
                <td>제품 점유율, 신제품 출시 주기, 재고 수준</td>
              </tr>
              <tr>
                <td>파운드리</td>
                <td>가동률, 선단 공정 매출 비중, 수율</td>
              </tr>
              <tr>
                <td>메모리</td>
                <td>D램·낸드 고정거래가, 재고 일수, 감산 여부</td>
              </tr>
              <tr>
                <td>장비</td>
                <td>수주잔고, 고객사 CAPEX 계획, 북투빌 비율</td>
              </tr>
              <tr>
                <td>후공정</td>
                <td>패키징 캐파, 가동률, 신기술 채택 여부</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          업황 뉴스를 읽을 때 &quot;이 소식이 어느 단계에 영향을 주는가&quot;를 먼저 구분하면 해석이
          정확해집니다. 예를 들어 대형 고객사의 설비 투자 축소 발표는 장비주에는 즉각적인 악재지만
          메모리 기업에는 공급 조절 신호로 중장기 호재가 될 수도 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 개별 종목이 부담스럽다면</h2>
        <p className="privacy-text">
          단계별 분석이 어렵다면 밸류체인 전체를 담는 ETF가 대안이 됩니다. 한 기업의 기술 실패나 고객
          이탈 위험을 분산할 수 있습니다. 다만 반도체 섹터 자체가 사이클을 크게 타기 때문에 ETF로 분산해도
          업황 하락은 그대로 반영됩니다.
        </p>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          ETF 선택 기준은{' '}
          <Link href="/articles/semiconductor-etf-guide" className="privacy-link">
            반도체 ETF 투자 가이드
          </Link>
          에서, 지수추종 적립식 접근은{' '}
          <Link href="/articles/index-etf-investing-guide" className="privacy-link">
            지수추종 ETF 적립식 투자
          </Link>
          에서 확인할 수 있습니다. 하락 구간에서 추가 매수를 고민한다면{' '}
          <Link href="/avgdown" className="privacy-link">
            물타기 계산기
          </Link>
          로 평균단가 변화를 먼저 계산해 보세요.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글은 산업 구조를 설명한 투자 교육 자료이며 특정 종목의 매수·매도를 권유하지 않습니다.
          </p>
          <p>
            산업 구조와 기업별 경쟁 상황은 계속 변합니다. 투자 판단 전 최신 공시와 실적 자료를 직접
            확인하시기 바라며, 모든 투자 결정과 결과에 대한 책임은 투자자 본인에게 있습니다.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/articles"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          반도체 아티클 더 보기 →
        </Link>
      </div>
    </>
  );
}
