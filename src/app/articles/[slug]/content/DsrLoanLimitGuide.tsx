import Link from 'next/link';

export default function DsrLoanLimitGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          DSR 완전 정리: 내 대출 한도는 왜 이 금액에서 막힐까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          집을 사려고 은행에 갔는데 &quot;소득 대비 한도가 부족하다&quot;는 말을 듣는 경우가 있습니다.
          담보 가치는 충분한데도 대출이 나오지 않는 이유는 대부분 DSR 때문입니다. DSR이 무엇이고 어떻게
          계산되는지, 그리고 왜 상환 방식과 대출 기간만 바꿔도 한도가 달라지는지 정리했습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. DSR이란 무엇인가</h2>
        <p className="privacy-text">
          DSR(Debt Service Ratio, 총부채원리금상환비율)은 <strong>내가 1년 동안 갚아야 할 모든 대출의
          원금과 이자를 연 소득으로 나눈 비율</strong>입니다. 소득에서 빚 갚는 데 쓰는 비중이 얼마나
          되는지를 보는 지표입니다.
        </p>
        <div className="guide-formula">DSR = 연간 총 원리금 상환액 ÷ 연 소득 × 100</div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          핵심은 &quot;모든 대출&quot;이라는 부분입니다. 새로 받으려는 주택담보대출뿐 아니라 이미 가지고
          있는 신용대출, 자동차 할부, 카드론, 학자금 대출까지 전부 합산합니다. 은행권은 통상 DSR 40%,
          제2금융권은 50%가 규제 상한선으로 적용됩니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. DTI·LTV와 무엇이 다른가</h2>
        <p className="privacy-text">
          대출 규제에는 세 가지 지표가 있고 셋 다 동시에 충족해야 합니다. 하나라도 걸리면 그 선에서
          한도가 정해집니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>지표</th>
                <th>기준</th>
                <th>포함 범위</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>LTV</td>
                <td>담보 가치 대비 대출액</td>
                <td>해당 주택담보대출만</td>
              </tr>
              <tr>
                <td>DTI</td>
                <td>소득 대비 상환액</td>
                <td>주담대 원리금 + 기타 대출 이자</td>
              </tr>
              <tr>
                <td>DSR</td>
                <td>소득 대비 상환액</td>
                <td>모든 대출의 원금 + 이자</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          DTI는 기타 대출의 <strong>이자만</strong> 보지만 DSR은 <strong>원금까지</strong> 봅니다. 그래서
          신용대출이 있는 사람에게는 DSR이 훨씬 빡빡하게 걸립니다. 마이너스 통장 5,000만 원을 쓰고 있다면
          DTI에서는 연 이자 250만 원 정도만 잡히지만, DSR에서는 원금까지 정해진 산식으로 분할해 잡히기
          때문에 연 1,000만 원 이상이 상환액으로 계산될 수 있습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 실제로 계산해 보기</h2>
        <p className="privacy-text">
          연 소득 6,000만 원인 직장인이 DSR 40% 규제를 받는 경우를 보겠습니다. 연간 상환 가능액은 6,000만
          원 × 40% = <strong>2,400만 원</strong>, 월 200만 원입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>기존 대출 없음</th>
                <th>신용대출 5,000만 원 보유</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>연간 상환 가능액</td>
                <td>2,400만 원</td>
                <td>2,400만 원</td>
              </tr>
              <tr>
                <td>기존 대출 상환액</td>
                <td>0원</td>
                <td>약 1,100만 원</td>
              </tr>
              <tr>
                <td>주담대에 쓸 수 있는 여력</td>
                <td>2,400만 원</td>
                <td>약 1,300만 원</td>
              </tr>
              <tr>
                <td>가능 대출액 (연 4.5%, 30년)</td>
                <td>
                  <strong>약 3억 9,500만 원</strong>
                </td>
                <td>
                  <strong>약 2억 1,400만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          같은 소득인데 신용대출 5,000만 원 때문에 주담대 한도가 <strong>1억 8,000만 원 넘게</strong>
          줄었습니다. 주택 구입을 앞두고 있다면 신용대출을 먼저 정리하는 것이 한도를 늘리는 가장 확실한
          방법인 이유입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 대출 기간이 한도를 바꾼다</h2>
        <p className="privacy-text">
          DSR은 <strong>연간</strong> 상환액을 봅니다. 같은 금액을 빌려도 기간을 늘리면 1년에 갚는 돈이
          줄어들기 때문에 DSR이 낮아지고 한도가 올라갑니다. 연 소득 6,000만 원, 금리 4.5%, 원리금균등
          기준입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>대출 기간</th>
                <th>가능 대출액</th>
                <th>총 이자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>20년</td>
                <td>약 3억 1,600만 원</td>
                <td>약 1억 6,400만 원</td>
              </tr>
              <tr>
                <td>30년</td>
                <td>약 3억 9,500만 원</td>
                <td>약 3억 2,500만 원</td>
              </tr>
              <tr>
                <td>40년</td>
                <td>약 4억 4,300만 원</td>
                <td>약 5억 1,700만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          기간을 20년에서 40년으로 늘리면 한도는 1억 2,700만 원 늘지만 총 이자는 3억 5,000만 원 넘게
          늘어납니다. 한도를 채우기 위해 기간을 늘리는 선택은 이자 부담을 미래로 넘기는 것이지 줄이는
          것이 아닙니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 상환 방식도 영향을 준다</h2>
        <p className="privacy-text">
          원금균등은 초기 상환액이 가장 크기 때문에 DSR 심사에서 불리하게 잡힙니다. 총 이자는 원금균등이
          가장 적지만, 한도를 최대한 확보해야 하는 상황이라면 원리금균등이 유리합니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>원리금균등</strong> — 매달 같은 금액. DSR 계산이 단순하고 한도 확보에 무난합니다.
          </li>
          <li>
            <strong>원금균등</strong> — 초기 상환액이 크게 잡혀 DSR이 높아지고 한도가 줄어듭니다.
          </li>
          <li>
            <strong>만기일시</strong> — 이자만 내지만 DSR 계산 시 원금을 일정 기간으로 나눠 반영하므로
            한도 확보에 도움이 되지 않습니다.
          </li>
        </ul>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          상환 방식별 월 납입금과 총 이자는{' '}
          <Link href="/loan" className="privacy-link">
            대출 이자 계산기
          </Link>
          에서 바로 비교할 수 있습니다. 월 납입금에 12를 곱하면 그 대출의 연간 상환액이 되고, 이를 연
          소득으로 나누면 대략적인 DSR을 가늠할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 대출 종류별 DSR 반영 방식</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>대출 종류</th>
                <th>DSR 반영 방식</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>주택담보대출</td>
                <td>실제 원리금 상환액 그대로</td>
              </tr>
              <tr>
                <td>신용대출</td>
                <td>정해진 산정 만기로 원금을 분할해 반영</td>
              </tr>
              <tr>
                <td>마이너스 통장</td>
                <td>한도 전액을 사용한 것으로 간주해 반영</td>
              </tr>
              <tr>
                <td>전세자금대출</td>
                <td>이자만 반영 (원금 제외)</td>
              </tr>
              <tr>
                <td>중도금·이주비 대출</td>
                <td>DSR 산정에서 제외되는 경우가 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          마이너스 통장은 <strong>실제로 쓰지 않아도 한도 전액이 빚으로 잡힙니다.</strong> 쓰지 않는
          마이너스 통장이 있다면 주담대 신청 전에 한도를 줄이거나 해지하는 것만으로 DSR이 크게
          개선됩니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 한도를 늘리는 현실적인 방법</h2>
        <ul className="privacy-list">
          <li>
            <strong>기존 대출 정리</strong> — 신용대출과 마이너스 통장을 먼저 상환하거나 한도를 줄입니다.
            효과가 가장 즉각적입니다.
          </li>
          <li>
            <strong>소득 증빙 보강</strong> — 상여금, 성과급, 임대소득 등 누락된 소득을 증빙에 포함하면
            분모가 커집니다. 프리랜서·개인사업자는 소득금액증명원 기준으로 잡히므로 신고 소득 관리가
            중요합니다.
          </li>
          <li>
            <strong>대출 기간 조정</strong> — 기간을 늘리면 한도가 늘지만 총 이자도 함께 늘어납니다.
          </li>
          <li>
            <strong>배우자 합산</strong> — 부부 공동명의로 각자 소득을 반영하면 합산 소득 기준으로 한도가
            산정될 수 있습니다.
          </li>
          <li>
            <strong>정책 대출 활용</strong> — 보금자리론, 디딤돌대출 등 정책 금융상품은 별도 기준이
            적용되는 경우가 있어 조건이 맞는다면 먼저 확인할 가치가 있습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 신청 전 체크리스트</h2>
        <div className="tax-success-box">
          <strong>미리 확인하면 좋은 것</strong>
          <br />· 보유한 모든 대출의 잔액과 월 상환액 목록
          <br />· 쓰지 않는 마이너스 통장·카드론 한도
          <br />· 최근 2년 소득 증빙 자료
          <br />· 목표 대출액에서 필요한 월 납입금 (계산기로 확인)
          <br />· 상환 방식별 총 이자 차이
        </div>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글은 일반적인 대출 규제 구조를 설명한 참고 자료이며, 특정 금융상품을 추천하지 않습니다.
          </p>
          <p>
            DSR 규제 비율, 산정 만기, 예외 대상은 금융 정책에 따라 수시로 변경됩니다. 실제 한도는 금융기관
            심사 결과에 따라 달라지므로 대출 실행 전 해당 은행에서 확인하세요.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/loan"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          대출 이자 계산기로 월 납입금 확인하기 →
        </Link>
      </div>
    </>
  );
}
