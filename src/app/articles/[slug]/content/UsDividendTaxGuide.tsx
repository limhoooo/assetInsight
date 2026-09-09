import Link from 'next/link';

export default function UsDividendTaxGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          미국주식 배당소득세 완전 정리: 15% 원천징수와 금융소득종합과세
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          미국주식에서 배당금을 받아 보면 공시된 금액보다 적게 들어옵니다. 미국에서 먼저 세금을 떼고
          지급하기 때문입니다. 그런데 배당이 많아지면 국내에서 추가로 세금이 나올 수도 있습니다. 매도
          차익에 붙는 양도소득세와는 완전히 다른 체계인 배당소득세를 정리했습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 양도소득세와 배당소득세는 별개다</h2>
        <p className="privacy-text">
          해외주식에서 발생하는 소득은 두 종류이고, 과세 방식이 전혀 다릅니다. 하나로 묶어 생각하면
          신고에서 실수하기 쉽습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>양도소득세</th>
                <th>배당소득세</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>과세 대상</td>
                <td>매도 차익</td>
                <td>받은 배당금</td>
              </tr>
              <tr>
                <td>세율</td>
                <td>22%</td>
                <td>15.4% 또는 15%</td>
              </tr>
              <tr>
                <td>기본공제</td>
                <td>연 250만 원</td>
                <td>없음</td>
              </tr>
              <tr>
                <td>납부 방식</td>
                <td>다음 해 5월 직접 신고</td>
                <td>지급 시 원천징수</td>
              </tr>
              <tr>
                <td>손익 통산</td>
                <td>가능</td>
                <td>불가</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          배당소득에는 <strong>250만 원 기본공제가 없습니다.</strong> 배당금 1달러부터 세금이 붙습니다.
          매도 차익 쪽 계산은{' '}
          <Link href="/stock-tax" className="privacy-link">
            해외주식 양도소득세 계산기
          </Link>
          에서 따로 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 미국에서 15%를 먼저 뗀다</h2>
        <p className="privacy-text">
          미국 주식의 배당금은 미국 세법에 따라 현지에서 원천징수됩니다. 외국인 투자자에 대한 기본
          원천징수율은 30%지만, <strong>한미 조세조약</strong>에 따라 한국 거주자는 15%가 적용됩니다.
        </p>
        <div className="guide-formula">실수령 배당금 = 배당금 총액 × (1 - 0.15)</div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          국내 증권사를 통해 투자하고 있다면 증권사가 W-8BEN(외국인 신분 증명 서류)을 대행 처리해 주므로
          대부분 자동으로 15%가 적용됩니다. 다만 해외 증권사를 직접 이용하는 경우에는 본인이 W-8BEN을
          제출하지 않으면 30%가 적용될 수 있습니다.
        </p>
        <div className="guide-warning-box">
          배당금 100달러가 공시됐다면 실제 계좌에 들어오는 금액은 85달러입니다. 배당수익률을 계산할 때
          세전 기준인지 세후 기준인지 구분하지 않으면 실제 현금흐름을 과대평가하게 됩니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 국내에서 추가로 내는 세금은 없나</h2>
        <p className="privacy-text">
          한국의 배당소득세율은 15.4%(소득세 14% + 지방소득세 1.4%)입니다. 미국에서 이미 15%를 냈으므로
          국내에서는 차액만 정산하는 구조입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>세율</th>
                <th>설명</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>국내 배당소득세</td>
                <td>14%</td>
                <td>지방소득세 제외한 기본 세율</td>
              </tr>
              <tr>
                <td>미국 원천징수</td>
                <td>15%</td>
                <td>외국납부세액공제 대상</td>
              </tr>
              <tr>
                <td>추가 부담</td>
                <td>없음</td>
                <td>미국 세율이 더 높아 추가 징수 없음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          미국 원천징수율 15%가 국내 세율 14%보다 높기 때문에, 금융소득이 일정 규모 이하라면{' '}
          <strong>국내에서 추가로 낼 세금이 없고 별도 신고도 필요 없습니다.</strong> 다만 더 낸 1%를
          돌려받을 수도 없습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 연 2,000만 원을 넘으면 이야기가 달라진다</h2>
        <p className="privacy-text">
          한 해 이자소득과 배당소득의 합계가 <strong>2,000만 원</strong>을 넘으면 금융소득종합과세
          대상이 됩니다. 초과분이 근로소득·사업소득 등 다른 소득과 합산되어 종합소득세 누진세율(6~45%)로
          과세됩니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>연간 금융소득</th>
                <th>과세 방식</th>
                <th>추가 신고</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2,000만 원 이하</td>
                <td>15.4% 분리과세로 종결</td>
                <td>불필요</td>
              </tr>
              <tr>
                <td>2,000만 원 초과</td>
                <td>초과분을 종합소득에 합산</td>
                <td>다음 해 5월 종합소득세 신고</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          기준선은 <strong>배당금만이 아니라 이자소득까지 합친 금액</strong>입니다. 예금 이자, 채권 이자,
          국내 주식 배당, 해외 주식 배당을 모두 더해서 판단합니다. 은퇴 후 배당과 예금 이자로 생활하는
          경우 특히 주의해야 하는 구간입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 종합과세 대상이 되면 얼마나 더 내나</h2>
        <p className="privacy-text">
          근로소득 8,000만 원인 사람이 배당소득 3,000만 원을 받은 경우를 단순화해 보겠습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>항목</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>배당소득 총액</td>
                <td>30,000,000원</td>
              </tr>
              <tr>
                <td>분리과세로 종결되는 금액</td>
                <td>20,000,000원</td>
              </tr>
              <tr>
                <td>종합소득에 합산되는 금액</td>
                <td>10,000,000원</td>
              </tr>
              <tr>
                <td>적용 한계세율 (근로소득 합산 시)</td>
                <td>약 35% + 지방소득세</td>
              </tr>
              <tr>
                <td>분리과세 대비 추가 부담</td>
                <td>
                  <strong>약 200만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          이미 낸 미국 원천징수 15%는 외국납부세액공제로 차감되지만, 한계세율이 15.4%보다 높은 구간에
          있다면 차액만큼 추가 부담이 발생합니다. 소득이 높을수록 배당 중심 포트폴리오의 세후 수익률이
          낮아진다는 뜻입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. ETF는 상장 국가에 따라 다르다</h2>
        <p className="privacy-text">
          같은 지수를 추종하는 ETF라도 어디에 상장돼 있느냐에 따라 세금 구조가 완전히 달라집니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>미국 상장 ETF</th>
                <th>국내 상장 해외 ETF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매매 차익</td>
                <td>양도소득세 22% (250만 원 공제)</td>
                <td>배당소득세 15.4%</td>
              </tr>
              <tr>
                <td>분배금</td>
                <td>배당소득세 15% 원천징수</td>
                <td>배당소득세 15.4%</td>
              </tr>
              <tr>
                <td>금융소득종합과세</td>
                <td>분배금만 대상</td>
                <td>매매 차익도 대상</td>
              </tr>
              <tr>
                <td>손익 통산</td>
                <td>가능</td>
                <td>제한적</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          매매 차익이 클 것으로 예상된다면 250만 원 공제와 손익 통산이 가능한 미국 상장 ETF가 유리할 수
          있고, 금융소득종합과세 경계에 있다면 국내 상장 ETF의 매매 차익까지 합산된다는 점이 부담이 될 수
          있습니다. 상세 비교는{' '}
          <Link href="/articles/semiconductor-etf-guide" className="privacy-link">
            반도체 ETF 투자 가이드
          </Link>
          에서도 다룹니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 절세 계좌를 활용하는 방법</h2>
        <ul className="privacy-list">
          <li>
            <strong>ISA 계좌</strong> — 계좌 내에서 발생한 손익을 통산한 뒤 200만 원(서민형 400만 원)까지
            비과세하고 초과분은 9.9% 분리과세합니다. 금융소득종합과세 대상에서도 제외됩니다. 다만 미국
            상장 주식을 직접 담을 수는 없고 국내 상장 ETF 등을 활용해야 합니다.
          </li>
          <li>
            <strong>연금저축·IRP</strong> — 운용 기간 중 발생한 배당에 대한 과세가 연금 수령 시점까지
            이연되고, 수령 시 3.3~5.5%의 연금소득세가 적용됩니다. 세율 자체가 낮아지는 효과가 있습니다.
          </li>
          <li>
            <strong>배당 시기 분산</strong> — 금융소득이 2,000만 원 경계에 있다면 매도 시점이나 배당주
            비중을 조정해 특정 연도에 몰리지 않게 관리할 수 있습니다.
          </li>
          <li>
            <strong>가족 간 분산</strong> — 배당소득은 인별 과세이므로 명의가 분산되면 종합과세 기준선을
            넘지 않게 관리할 수 있습니다. 다만 증여세 문제를 함께 검토해야 합니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 배당 투자 전 체크리스트</h2>
        <div className="tax-success-box">
          <strong>세후 기준으로 다시 계산해 보세요</strong>
          <br />· 공시 배당수익률에 0.85를 곱하면 대략적인 세후 수익률
          <br />· 이자소득까지 합쳐 연 2,000만 원을 넘는지 확인
          <br />· 넘는다면 본인의 한계세율이 15.4%보다 높은지 확인
          <br />· ISA·연금계좌로 담을 수 있는 상품인지 검토
          <br />· 환율 변동이 실수령 원화 배당금에 미치는 영향 감안
        </div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          배당을 재투자할 때의 복리 효과는{' '}
          <Link href="/compound" className="privacy-link">
            복리 계산기
          </Link>
          로, 국내 배당주 선별 기준은{' '}
          <Link href="/articles/dividend-stock-investment" className="privacy-link">
            국내 배당주 투자 가이드
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 배당 과세 구조를 설명한 참고 자료이며 세무 자문이나 투자 권유가 아닙니다.</p>
          <p>
            조세조약 내용, 원천징수율, 종합과세 기준은 개정될 수 있습니다. 실제 신고 전 국세청 자료나
            세무 전문가를 통해 최신 기준을 확인하세요.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/stock-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          해외주식 양도소득세 계산기 사용하기 →
        </Link>
      </div>
    </>
  );
}
