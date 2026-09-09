import Link from 'next/link';

export default function IndexEtfInvestingGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          지수추종 ETF 적립식 투자: 왜 평범한 방법이 오래 살아남을까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          매달 일정 금액으로 시장 전체를 사는 방식은 화려하지 않습니다. 종목을 고르지도, 타이밍을 재지도
          않습니다. 그런데도 장기 투자 방법론에서 꾸준히 언급되는 이유가 있습니다. 그 근거와 한계, 그리고
          실제로 시작할 때 확인해야 할 것들을 정리했습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 지수추종 ETF란</h2>
        <p className="privacy-text">
          특정 주가지수의 구성 종목을 그대로 담아 지수 수익률을 따라가도록 만든 상품입니다. S&amp;P 500
          지수를 추종하는 ETF를 사면 미국 대형주 500개를 시가총액 비중대로 나눠 산 것과 같은 효과가
          납니다. 운용사가 종목을 고르지 않기 때문에 보수가 낮습니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>분산이 기본으로 된다</strong> — 한 종목이 상장폐지돼도 전체에 미치는 영향이 제한적입니다.
          </li>
          <li>
            <strong>지수가 스스로 갈아탄다</strong> — 편입 기준에 미달한 기업은 빠지고 성장한 기업이
            들어옵니다. 투자자가 교체를 관리할 필요가 없습니다.
          </li>
          <li>
            <strong>보수가 낮다</strong> — 액티브 펀드 대비 운용 보수가 크게 낮고, 이 차이가 장기간
            누적되면 수익률 격차로 이어집니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 보수 1%의 무게</h2>
        <p className="privacy-text">
          연 보수 0.05%짜리 ETF와 1.5%짜리 액티브 펀드는 겉보기에 1.45%포인트 차이지만, 30년을 굴리면
          결과가 크게 벌어집니다. 매달 50만 원씩 연 7% 수익률로 30년 적립한 경우입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>연 보수</th>
                <th>실질 수익률</th>
                <th>30년 후 평가액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.05%</td>
                <td>6.95%</td>
                <td>약 6억 400만 원</td>
              </tr>
              <tr>
                <td>0.50%</td>
                <td>6.50%</td>
                <td>약 5억 5,300만 원</td>
              </tr>
              <tr>
                <td>1.50%</td>
                <td>5.50%</td>
                <td>약 4억 5,700만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          보수 차이만으로 <strong>약 1억 4,700만 원</strong>이 벌어집니다. 총 납입 원금이 1억 8,000만 원인
          것을 감안하면 무시할 수 없는 크기입니다. 직접{' '}
          <Link href="/compound" className="privacy-link">
            복리 계산기
          </Link>
          에 수익률을 바꿔가며 넣어보면 체감할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 적립식이 해결해 주는 것</h2>
        <p className="privacy-text">
          매달 같은 금액을 넣으면 가격이 쌀 때 더 많은 수량을, 비쌀 때 더 적은 수량을 사게 됩니다. 이를
          평균 매입 단가 분산 효과라고 합니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>회차</th>
                <th>가격</th>
                <th>매수 금액</th>
                <th>매수 수량</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1개월차</td>
                <td>10,000원</td>
                <td>500,000원</td>
                <td>50주</td>
              </tr>
              <tr>
                <td>2개월차</td>
                <td>8,000원</td>
                <td>500,000원</td>
                <td>62.5주</td>
              </tr>
              <tr>
                <td>3개월차</td>
                <td>12,500원</td>
                <td>500,000원</td>
                <td>40주</td>
              </tr>
              <tr>
                <td>합계</td>
                <td>평균 10,167원</td>
                <td>1,500,000원</td>
                <td>152.5주</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px' }}>
          단순 평균 가격은 10,167원이지만 실제 평균 매입 단가는 1,500,000 ÷ 152.5 ={' '}
          <strong>9,836원</strong>입니다. 하락 구간에서 수량을 더 확보한 효과입니다.
        </p>
        <div className="guide-warning-box">
          다만 적립식은 <strong>손실을 막아주지 않습니다.</strong> 지수가 장기간 우하향하면 평균 단가를
          낮추면서 계속 물리는 결과가 됩니다. 적립식이 유효하려면 &quot;지수는 장기적으로 우상향한다&quot;는
          전제가 성립해야 하고, 그 전제는 특정 국가·특정 기간에는 성립하지 않았습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 국내 상장 vs 해외 상장</h2>
        <p className="privacy-text">
          같은 지수를 추종해도 어디서 사느냐에 따라 세금 구조가 달라집니다. 이 차이가 장기 수익률에 직접
          영향을 줍니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>국내 상장 해외 ETF</th>
                <th>미국 상장 ETF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매매 차익 과세</td>
                <td>배당소득세 15.4%</td>
                <td>양도소득세 22%</td>
              </tr>
              <tr>
                <td>기본공제</td>
                <td>없음</td>
                <td>연 250만 원</td>
              </tr>
              <tr>
                <td>손익 통산</td>
                <td>제한적</td>
                <td>가능</td>
              </tr>
              <tr>
                <td>금융소득종합과세</td>
                <td>매매 차익도 합산</td>
                <td>분배금만 합산</td>
              </tr>
              <tr>
                <td>연금계좌 편입</td>
                <td>가능</td>
                <td>불가</td>
              </tr>
              <tr>
                <td>환전</td>
                <td>불필요</td>
                <td>필요</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          <strong>연금저축·IRP를 활용한다면 국내 상장 ETF</strong>, 계좌 밖에서 큰 차익이 예상된다면 250만
          원 공제와 손익 통산이 가능한 <strong>미국 상장 ETF</strong>가 일반적으로 유리합니다. 배당 과세는{' '}
          <Link href="/articles/us-dividend-tax-guide" className="privacy-link">
            미국주식 배당소득세 완전 정리
          </Link>
          에서 자세히 다룹니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. ETF를 고를 때 볼 것</h2>
        <ul className="privacy-list">
          <li>
            <strong>총보수</strong> — 낮을수록 좋습니다. 같은 지수를 추종하는 ETF가 여러 개라면 보수가
            가장 큰 차별점입니다.
          </li>
          <li>
            <strong>순자산 규모</strong> — 규모가 너무 작으면 상장폐지 가능성이 있습니다. 상장폐지되어도
            순자산가치로 정산받지만 원치 않는 시점에 청산됩니다.
          </li>
          <li>
            <strong>거래량</strong> — 거래가 적으면 매수·매도 호가 차이가 벌어져 체결 비용이 늘어납니다.
          </li>
          <li>
            <strong>추적오차</strong> — 지수와 얼마나 잘 붙어 움직이는지입니다. 클수록 지수를 제대로
            따라가지 못한다는 뜻입니다.
          </li>
          <li>
            <strong>분배금 처리</strong> — 분배금을 지급하는 상품과 자동 재투자하는 상품이 있습니다.
            재투자형은 과세 시점이 늦춰지는 효과가 있습니다.
          </li>
        </ul>
        <div className="guide-warning-box">
          이름에 <strong>레버리지, 인버스, 2X, 곱버스</strong>가 들어간 상품은 지수추종 ETF와 성격이 전혀
          다릅니다. 일일 수익률을 배수로 추종하기 때문에 변동성이 큰 구간에서는 지수가 제자리로 돌아와도
          손실이 남습니다. 적립식 장기 투자에는 맞지 않습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 절세 계좌를 먼저 채우기</h2>
        <p className="privacy-text">
          같은 상품을 사더라도 어떤 계좌에 담느냐에 따라 세후 수익률이 달라집니다. 일반적으로 다음 순서로
          한도를 채우는 것이 효율적입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>순서</th>
                <th>계좌</th>
                <th>혜택</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>연금저축 + IRP</td>
                <td>납입액 세액공제 13.2~16.5%, 과세 이연</td>
              </tr>
              <tr>
                <td>2</td>
                <td>ISA</td>
                <td>손익 통산 후 200만 원 비과세, 초과분 9.9% 분리과세</td>
              </tr>
              <tr>
                <td>3</td>
                <td>일반 위탁계좌</td>
                <td>한도 없음, 세제 혜택 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          연금저축·IRP는 세액공제만으로 납입 시점에 확정 수익이 생기는 셈입니다. 다만 55세 이전 중도
          인출 시 혜택이 추징되므로 장기간 묶을 수 있는 자금인지 먼저 판단해야 합니다. 자세한 내용은{' '}
          <Link href="/articles/pension-irp-tax-deduction" className="privacy-link">
            연금저축 IRP 세액공제 가이드
          </Link>
          를 참고하세요.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 이 방식의 한계</h2>
        <ul className="privacy-list">
          <li>
            <strong>시장 수익률을 넘지 못합니다.</strong> 지수를 따라가는 것이 목적이므로 초과 수익을
            기대할 수 없습니다.
          </li>
          <li>
            <strong>하락장에서도 그대로 하락합니다.</strong> 지수가 30% 빠지면 계좌도 30% 빠집니다. 이를
            견딜 수 있는 금액만 투입해야 합니다.
          </li>
          <li>
            <strong>회수 시점의 시장 상황에 좌우됩니다.</strong> 30년을 잘 모아도 인출 직전에 큰 하락이
            오면 결과가 달라집니다. 목표 시점이 가까워지면 위험자산 비중을 줄이는 조정이 필요합니다.
          </li>
          <li>
            <strong>특정 지수에 집중되는 위험이 있습니다.</strong> 한 국가·한 지수에만 적립하면 그 시장의
            장기 부진을 그대로 받습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 시작 전 정리할 것</h2>
        <div className="tax-success-box">
          <strong>먼저 확인하세요</strong>
          <br />· 3~6개월치 비상금을 따로 확보했는가
          <br />· 고금리 대출(신용대출·카드론)을 먼저 갚는 편이 낫지 않은가
          <br />· 최소 5~10년 이상 묶어둘 수 있는 자금인가
          <br />· 30% 하락을 견딜 수 있는 금액인가
          <br />· 절세 계좌 한도를 먼저 활용했는가
        </div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          비상금 보관처는{' '}
          <Link href="/articles/parking-account-cma-guide" className="privacy-link">
            파킹통장 · CMA · MMF 비교
          </Link>
          에서, 매달 적립했을 때의 예상 평가액은{' '}
          <Link href="/compound" className="privacy-link">
            복리 계산기
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글은 투자 교육 목적의 참고 자료이며 특정 상품이나 투자 방식을 추천하지 않습니다. 본문의
            수익률은 설명을 위한 가정치이며 미래 수익을 보장하지 않습니다.
          </p>
          <p>모든 투자 판단과 그 결과에 대한 책임은 투자자 본인에게 있습니다.</p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/compound"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          복리 계산기로 적립 시뮬레이션 해보기 →
        </Link>
      </div>
    </>
  );
}
