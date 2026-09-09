import Link from 'next/link';

export default function DomesticStockTaxGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          국내주식 양도세, 나도 내야 하나? 대주주 기준과 증권거래세
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          해외주식은 이익이 250만원만 넘어도 세금이 나오는데, 국내주식은 몇 천만원을 벌어도 양도세
          이야기가 없습니다. 과세 체계가 다르기 때문입니다. 다만 &quot;대주주&quot;에 해당하면 상황이
          완전히 달라지고, 그 기준이 2026년에 다시 바뀌었습니다. 내가 대상인지 확인해 보겠습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 일반 투자자는 양도세를 내지 않는다</h2>
        <p className="privacy-text">
          국내 상장주식의 매매차익은 원칙적으로 비과세입니다. 소액주주가 코스피·코스닥 종목을 사고팔아
          얻은 이익에는 양도소득세가 붙지 않습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>국내 상장주식</th>
                <th>해외주식</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매매차익 과세</td>
                <td>소액주주 비과세</td>
                <td>전액 과세</td>
              </tr>
              <tr>
                <td>세율</td>
                <td>대주주만 20~25%</td>
                <td>22%</td>
              </tr>
              <tr>
                <td>기본공제</td>
                <td>연 250만원 (대주주)</td>
                <td>연 250만원</td>
              </tr>
              <tr>
                <td>매도 시 거래세</td>
                <td>있음</td>
                <td>없음 (현지 수수료 별도)</td>
              </tr>
              <tr>
                <td>배당</td>
                <td>15.4% 원천징수</td>
                <td>현지 15% 원천징수</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          국내주식 투자자가 실제로 부담하는 것은 <strong>매도할 때 증권거래세</strong>와{' '}
          <strong>배당받을 때 배당소득세</strong>입니다. 양도세는 대주주에게만 적용됩니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 대주주 기준이 10억원으로 돌아왔다</h2>
        <p className="privacy-text">
          대주주 판정 기준은 정권과 정책에 따라 여러 차례 오르내렸습니다. 2025년 세제개편에서 상장법인
          대주주의 보유금액 기준이 <strong>시가 10억원 이상으로 환원</strong>됐습니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>판정 시점</strong> — 직전 사업연도 종료일(대개 12월 말) 기준으로 보유 현황을 봅니다.
            그날 하루의 보유 상태가 다음 해 과세 여부를 결정합니다.
          </li>
          <li>
            <strong>종목별 판정</strong> — 전체 포트폴리오 합계가 아니라 한 종목 기준입니다. 여러 종목에
            각각 5억씩 총 20억을 갖고 있어도 종목별로 10억을 넘지 않으면 대주주가 아닙니다.
          </li>
          <li>
            <strong>지분율 기준도 병행</strong> — 금액과 별개로 코스피 1%, 코스닥 2% 이상 지분을 보유하면
            금액과 무관하게 대주주입니다.
          </li>
          <li>
            <strong>세율</strong> — 과세표준 3억원 이하 20%, 초과분 25%입니다. 여기에 지방소득세 10%가
            추가됩니다.
          </li>
        </ul>
        <div className="guide-warning-box">
          기준일이 연말 하루라는 점 때문에, 매년 12월이면 대주주 요건을 피하려는 매도 물량이 나온다는
          이야기가 반복됩니다. 다만 기준은 계속 바뀌어 왔으므로 <strong>해당 연도의 확정된 기준</strong>을
          국세청 자료로 직접 확인해야 합니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 가족 합산은 어떻게 되나</h2>
        <p className="privacy-text">
          과거에는 배우자와 직계존비속의 보유분을 모두 합쳐 판정했습니다. 이 때문에 본인은 소액인데
          가족 보유분 때문에 대주주가 되는 사례가 있었고, 이후 합산 범위가 축소돼 최대주주가 아닌
          일반 투자자는 본인 보유분만으로 판정하는 방향으로 정리됐습니다.
        </p>
        <div className="info-box" style={{ marginBottom: 0 }}>
          가족 합산 규정은 개정이 잦았던 항목입니다. 보유 규모가 기준선 근처라면 해당 연도 기준을
          반드시 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 증권거래세 — 이익이 없어도 낸다</h2>
        <p className="privacy-text">
          증권거래세는 <strong>매도할 때 거래대금에 대해</strong> 부과됩니다. 손실을 보고 팔아도 냅니다.
          이익에 매기는 세금이 아니라 거래 자체에 매기는 세금이기 때문입니다. 2025년 세제개편에서
          세율이 인상됐습니다.
        </p>
        <div className="guide-formula">증권거래세 = 매도금액 × 세율</div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          매도금액 1,000만원 기준으로 세율에 따른 부담을 보겠습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>세율</th>
                <th>1,000만원 매도 시</th>
                <th>1억원 매도 시</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0.15%</td>
                <td>15,000원</td>
                <td>150,000원</td>
              </tr>
              <tr>
                <td>0.20%</td>
                <td>20,000원</td>
                <td>200,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          단타 매매가 잦을수록 이 비용이 누적됩니다. 1,000만원을 한 달에 열 번 회전시키면 0.2% 기준으로
          연 240만원이 거래세로만 나갑니다. 수익률을 계산할 때 반드시 빼고 봐야 하는 금액입니다. 정확한
          적용 세율은 시행 시점 기준으로 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 금융투자소득세는 어떻게 됐나</h2>
        <p className="privacy-text">
          한때 도입이 예정됐던 금융투자소득세(금투세)는 국내주식 매매차익 5,000만원 초과분에 과세하는
          제도였습니다. 시행 시기가 여러 차례 미뤄지다 <strong>폐지</strong>로 결론이 났습니다. 현재
          국내주식 소액주주의 매매차익 비과세 구조는 그대로 유지되고 있습니다.
        </p>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          대신 배당 쪽에서 변화가 있습니다. 2026년 1월 1일부터 2028년 12월 31일까지 3년간, 고배당 상장법인
          배당소득을 종합과세에서 제외하고 분리과세하는 특례가 적용됩니다. 최고 세율이 49.5%에서 38.5%로
          내려갑니다. 자세한 내용은{' '}
          <Link href="/articles/dividend-stock-investment" className="privacy-link">
            국내 배당주 투자 가이드
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 국내주식과 해외주식, 손익 통산은 되나</h2>
        <p className="privacy-text">
          2020년 양도분부터 국내주식과 해외주식의 손익 통산이 허용됐습니다. 다만 조건이 있습니다.
        </p>
        <ul className="privacy-list">
          <li>
            통산 대상은 <strong>양도세 과세대상인 국내주식</strong>에 한합니다. 대주주 보유분이나
            비상장주식이 여기 해당합니다.
          </li>
          <li>
            일반 소액주주의 국내 상장주식 매매차익은 <strong>애초에 과세 대상이 아니므로</strong> 해외주식
            손실과 통산할 수 없습니다. 국내주식에서 손실이 났어도 해외주식 이익을 줄여주지 못합니다.
          </li>
          <li>
            기본공제 250만원도 국내·국외를 <strong>합산해 연 1회만</strong> 적용됩니다. 각각 250만원씩
            받는 것이 아닙니다.
          </li>
        </ul>
        <div className="info-box" style={{ marginBottom: 0 }}>
          대부분의 개인 투자자에게는 결국 &quot;해외주식끼리만 통산된다&quot;는 결론이 됩니다. 해외주식
          손익 통산 활용법은{' '}
          <Link href="/articles/overseas-stock-tax-guide" className="privacy-link">
            해외주식 양도소득세 신고 방법
          </Link>
          에서 다룹니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 정리</h2>
        <div className="tax-success-box">
          <strong>일반 개인 투자자라면</strong>
          <br />· 국내 상장주식 매매차익: 비과세
          <br />· 매도 시 증권거래세: 거래대금에 부과 (손실이어도 납부)
          <br />· 배당: 15.4% 원천징수, 연 2,000만원 초과 시 종합과세
          <br />· 양도세 신고 의무 없음
        </div>
        <div className="info-box" style={{ marginTop: '10px', marginBottom: 0 }}>
          <strong>한 종목 10억원 이상을 보유했다면</strong>
          <br />· 연말 기준일 보유 현황으로 대주주 판정
          <br />· 다음 해 매도분부터 양도세 20~25% + 지방소득세
          <br />· 기본공제 250만원 적용, 반기별 예정신고 의무
          <br />· 해당 연도 확정 기준을 국세청 자료로 확인 필요
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 관련 계산기</h2>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          해외주식 양도세는{' '}
          <Link href="/stock-tax" className="privacy-link">
            해외주식 양도소득세 계산기
          </Link>
          에서 계산할 수 있습니다. 환율이 세금에 미치는 영향은{' '}
          <Link href="/articles/fx-loss-stock-tax" className="privacy-link">
            환율과 해외주식 세금
          </Link>
          을, 하락 종목의 추가 매수를 고민 중이라면{' '}
          <Link href="/avgdown" className="privacy-link">
            물타기 계산기
          </Link>
          로 평균단가 변화를 먼저 확인해 보세요. 절세 계좌 활용은{' '}
          <Link href="/articles/isa-account-guide" className="privacy-link">
            ISA 계좌 완전 분석
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            대주주 기준, 증권거래세율, 배당 과세 특례는 세법 개정에 따라 자주 바뀌는 항목입니다. 본 글은
            일반적인 구조를 설명한 참고 자료이며, 투자·신고 판단 전에 국세청 자료로 해당 연도의 확정
            기준을 확인하시기 바랍니다.
          </p>
          <p>본 글은 세무 자문이 아니며 특정 종목의 매수·매도를 권유하지 않습니다.</p>
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
