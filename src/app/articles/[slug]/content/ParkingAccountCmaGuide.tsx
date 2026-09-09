import Link from 'next/link';

export default function ParkingAccountCmaGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          파킹통장 · CMA · MMF 비교: 잠깐 맡길 돈은 어디에 둘까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          비상금, 전세 보증금, 다음 달에 쓸 자금처럼 &quot;곧 써야 하는데 지금 당장은 아닌&quot; 돈이
          있습니다. 정기예금에 묶기엔 짧고 입출금통장에 두자니 이자가 0에 가깝습니다. 이런 단기 자금을 담는
          세 가지 선택지의 구조와 차이를 정리했습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 입출금통장에 그냥 두면 얼마나 손해인가</h2>
        <p className="privacy-text">
          일반 입출금통장 금리는 보통 연 0.1% 수준입니다. 3,000만 원을 1년간 넣어두면 세전 이자가 3만
          원입니다. 같은 돈을 연 3% 파킹통장에 두면 90만 원입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>보관처</th>
                <th>연 금리</th>
                <th>1년 세전 이자</th>
                <th>세후 이자</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>일반 입출금통장</td>
                <td>0.1%</td>
                <td>30,000원</td>
                <td>25,380원</td>
              </tr>
              <tr>
                <td>파킹통장</td>
                <td>3.0%</td>
                <td>900,000원</td>
                <td>761,400원</td>
              </tr>
              <tr>
                <td>정기예금</td>
                <td>3.5%</td>
                <td>1,050,000원</td>
                <td>888,300원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          3,000만 원 기준, 통장을 바꾸는 것만으로 연 73만 원 차이가 납니다. 아무 조건 없이 언제든 뺄 수
          있는 돈이라면 파킹통장에 두지 않을 이유가 없습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 세 상품의 구조 비교</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>파킹통장</th>
                <th>CMA</th>
                <th>MMF</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취급 기관</td>
                <td>은행·저축은행</td>
                <td>증권사</td>
                <td>증권사·은행</td>
              </tr>
              <tr>
                <td>이자 지급</td>
                <td>매일 또는 매월</td>
                <td>매일</td>
                <td>매일 기준가 반영</td>
              </tr>
              <tr>
                <td>수익률 성격</td>
                <td>약정 금리</td>
                <td>운용 실적 또는 약정</td>
                <td>운용 실적</td>
              </tr>
              <tr>
                <td>출금</td>
                <td>즉시</td>
                <td>즉시</td>
                <td>보통 1영업일</td>
              </tr>
              <tr>
                <td>예금자보호</td>
                <td>적용</td>
                <td>종류에 따라 다름</td>
                <td>미적용</td>
              </tr>
              <tr>
                <td>원금 손실 가능성</td>
                <td>없음</td>
                <td>종류에 따라 다름</td>
                <td>이론상 있음</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          단기 자금 보관의 핵심 기준은 수익률이 아니라 <strong>필요할 때 바로 뺄 수 있는지</strong>와{' '}
          <strong>원금이 보장되는지</strong>입니다. 0.2%포인트 더 받으려다 정작 필요한 날 출금이 하루
          늦어지면 의미가 없습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 파킹통장</h2>
        <p className="privacy-text">
          수시 입출금이 가능하면서 예금 수준의 금리를 주는 통장입니다. 하루만 맡겨도 그날치 이자가
          붙습니다. 예금자보호가 적용되고 원금 손실 위험이 없어 단기 자금 보관처로 가장 무난합니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>한도 구간에 주의</strong> — 고금리를 적용하는 금액 한도가 정해진 경우가 많습니다.
            5,000만 원까지 연 3%, 초과분은 연 0.5% 같은 식입니다. 한도를 넘는 자금은 다른 계좌로 나누는
            편이 낫습니다.
          </li>
          <li>
            <strong>우대 조건 확인</strong> — 최고 금리를 받으려면 급여 이체, 카드 실적, 마케팅 동의 같은
            조건이 붙는 경우가 있습니다. 조건을 못 채우면 기본 금리만 적용됩니다.
          </li>
          <li>
            <strong>저축은행 상품</strong> — 시중은행보다 금리가 높은 경우가 많습니다. 예금자보호 한도
            내에서 활용하면 리스크 없이 수익률을 높일 수 있습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. CMA (종합자산관리계좌)</h2>
        <p className="privacy-text">
          증권사의 입출금 계좌입니다. 예치된 돈이 자동으로 단기 금융상품에 운용되고 그 수익이 매일
          쌓입니다. 주식 계좌와 연결돼 있어 매수 대기 자금을 놀리지 않는 용도로 많이 쓰입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>종류</th>
                <th>운용 대상</th>
                <th>예금자보호</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>RP형</td>
                <td>환매조건부채권</td>
                <td>미적용 (증권사 신용)</td>
              </tr>
              <tr>
                <td>발행어음형</td>
                <td>증권사 발행어음</td>
                <td>미적용 (증권사 신용)</td>
              </tr>
              <tr>
                <td>종금형</td>
                <td>종합금융회사 상품</td>
                <td>적용</td>
              </tr>
              <tr>
                <td>MMF형</td>
                <td>머니마켓펀드</td>
                <td>미적용</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          &quot;CMA는 예금자보호가 된다&quot;는 말은 <strong>종금형에만 해당</strong>합니다. 국내에서
          실제로 판매되는 CMA는 대부분 RP형·발행어음형이며 예금자보호 대상이 아닙니다. 증권사가 파산하면
          원금을 잃을 수 있다는 뜻입니다. 실무적으로 대형 증권사 부도 위험은 낮게 보지만, 위험이 0이라고
          설명하는 것은 정확하지 않습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. MMF (머니마켓펀드)</h2>
        <p className="privacy-text">
          만기가 짧고 신용등급이 높은 채권과 기업어음에 투자하는 펀드입니다. 약정 금리가 아니라 운용 실적에
          따라 수익률이 결정되며, 금리 상승기에는 시장 금리를 비교적 빠르게 반영합니다.
        </p>
        <ul className="privacy-list">
          <li>펀드이므로 원금이 보장되지 않고 예금자보호 대상도 아닙니다.</li>
          <li>환매 신청 후 실제 입금까지 통상 1영업일이 걸립니다. 당장 써야 할 돈에는 맞지 않습니다.</li>
          <li>운용 보수가 차감된 뒤의 수익률이 실제 수익입니다.</li>
          <li>법인이나 큰 금액의 단기 자금 운용에 주로 활용됩니다.</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 자금 성격별 선택 기준</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="tax-success-box">
            <strong>파킹통장이 맞는 경우</strong>
            <br />· 비상금 (3~6개월 생활비)
            <br />· 언제 쓸지 모르는 예비 자금
            <br />· 원금 손실 가능성을 조금도 원하지 않는 자금
            <br />· 예금자보호 한도 안에서 관리 가능한 금액
          </div>
          <div className="info-box" style={{ marginBottom: 0 }}>
            <strong>CMA가 맞는 경우</strong>
            <br />· 주식 매수를 위해 대기 중인 자금
            <br />· 증권 계좌와 함께 관리하고 싶은 자금
            <br />· 하루 단위로 자주 들어오고 나가는 자금
          </div>
          <div className="info-box" style={{ marginBottom: 0 }}>
            <strong>MMF가 맞는 경우</strong>
            <br />· 1개월 이상 묶어둘 수 있는 단기 자금
            <br />· 금리 상승기에 시장 금리를 빠르게 반영받고 싶을 때
            <br />· 하루 이틀의 환매 지연을 감수할 수 있을 때
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 세금은 모두 같다</h2>
        <p className="privacy-text">
          세 상품 모두 발생한 수익에 <strong>15.4%</strong>(소득세 14% + 지방소득세 1.4%)가 원천징수됩니다.
          별도 신고는 필요 없습니다. 다만 이자·배당소득 합계가 연 2,000만 원을 넘으면 금융소득종합과세
          대상이 되므로, 단기 자금 규모가 크다면 이 기준선을 함께 관리해야 합니다.
        </p>
        <div className="guide-formula">세후 이자 = 세전 이자 × (1 - 0.154)</div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          ISA 계좌 안에서 운용하면 200만 원(서민형 400만 원)까지 비과세되고 초과분도 9.9% 분리과세됩니다.
          자세한 내용은{' '}
          <Link href="/articles/isa-account-guide" className="privacy-link">
            ISA 계좌 완전 분석
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 단기 자금과 목돈은 나눠서 관리하기</h2>
        <p className="privacy-text">
          단기 자금은 파킹통장에, 1년 이상 쓸 일이 없는 목돈은 정기예금에 두는 것이 기본 구조입니다.
          파킹통장 금리가 아무리 높아도 같은 기간 정기예금보다는 낮은 것이 일반적이기 때문에, 쓸 시점이
          명확한 돈까지 파킹통장에 두면 이자를 손해 봅니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>3~6개월 생활비</strong> — 파킹통장. 언제든 꺼내야 하므로 수익률보다 접근성이
            우선입니다.
          </li>
          <li>
            <strong>6개월~1년 내 사용 예정</strong> — 파킹통장 또는 단기 정기예금. 사용 시점이 확실하면
            만기를 맞춘 예금이 유리합니다.
          </li>
          <li>
            <strong>1년 이상 여유 자금</strong> — 정기예금 또는 투자. 예금과 적금 중 어느 쪽이 유리한지는{' '}
            <Link href="/articles/savings-vs-deposit" className="privacy-link">
              정기예금 vs 적금 비교
            </Link>
            에서 확인하세요.
          </li>
        </ul>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          금액과 기간을 넣고 세후 수령액을 비교하려면{' '}
          <Link href="/savings" className="privacy-link">
            정기예금/적금 계산기
          </Link>
          를 이용하세요.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 상품 구조를 비교한 참고 자료이며 특정 금융상품을 추천하지 않습니다.</p>
          <p>
            본문의 금리는 설명을 위한 예시입니다. 실제 금리, 우대 조건, 한도, 예금자보호 적용 여부는
            금융기관과 시기에 따라 다르므로 가입 전 해당 기관에서 확인하세요.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/savings"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          예적금 계산기로 세후 이자 확인하기 →
        </Link>
      </div>
    </>
  );
}
