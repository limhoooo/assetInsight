import Link from 'next/link';

export default function RateRiseMortgageImpact() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          금리가 1%p 오르면 내 주담대 월 상환액은 얼마나 오를까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          부동산 커뮤니티에서 &quot;금리 여기서 더 오르면 어떻게 되냐&quot;는 글이 끊이지 않습니다. 뉴스는
          연체율이 오른다고 하는데, 정작 내 통장에서 나가는 돈이 얼마나 늘어나는지는 잘 와닿지 않습니다.
          3억 원을 30년 원리금균등으로 빌린 경우를 기준으로 숫자를 놓고 보겠습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 금리별 월 상환액</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>금리</th>
                <th>월 상환액</th>
                <th>총 이자 (30년)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>3.0%</td>
                <td>1,264,812원</td>
                <td>1억 5,533만원</td>
              </tr>
              <tr>
                <td>3.5%</td>
                <td>1,347,134원</td>
                <td>1억 8,497만원</td>
              </tr>
              <tr>
                <td>4.0%</td>
                <td>1,432,246원</td>
                <td>2억 1,561만원</td>
              </tr>
              <tr>
                <td>4.5%</td>
                <td>
                  <strong>1,520,056원</strong>
                </td>
                <td>
                  <strong>2억 4,722만원</strong>
                </td>
              </tr>
              <tr>
                <td>5.0%</td>
                <td>1,610,465원</td>
                <td>2억 7,977만원</td>
              </tr>
              <tr>
                <td>5.5%</td>
                <td>1,703,367원</td>
                <td>3억 1,321만원</td>
              </tr>
              <tr>
                <td>6.0%</td>
                <td>1,798,652원</td>
                <td>3억 4,751만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          4.5%에서 5.5%로 <strong>1%포인트만 올라도 월 18만 3천원</strong>, 연 220만원이 더 나갑니다. 총
          이자는 <strong>6,600만원</strong> 늘어납니다. 원금은 그대로인데 6,600만원을 더 내는 셈입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 대출액이 클수록 충격도 커진다</h2>
        <p className="privacy-text">
          금리 4.5%에서 5.5%로 1%포인트 오를 때, 대출 규모별 월 부담 증가액입니다. 30년 원리금균등
          기준입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>대출액</th>
                <th>월 증가액</th>
                <th>연 증가액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>2억원</td>
                <td>+122,207원</td>
                <td>+147만원</td>
              </tr>
              <tr>
                <td>3억원</td>
                <td>+183,311원</td>
                <td>+220만원</td>
              </tr>
              <tr>
                <td>4억원</td>
                <td>+244,415원</td>
                <td>+293만원</td>
              </tr>
              <tr>
                <td>5억원</td>
                <td>+305,518원</td>
                <td>+367만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          증가액은 대출액에 정비례합니다. 5억을 빌렸다면 1%포인트에 연 367만원, 2%포인트면 연 700만원이
          넘습니다. 연봉이 그만큼 오르지 않는 한 그대로 가처분소득에서 빠집니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 변동금리의 진짜 위험은 재산정 시점</h2>
        <p className="privacy-text">
          혼합형 주담대는 처음 5년은 고정이고 그 뒤 변동으로 바뀝니다. 이때 남은 잔액에 새 금리를 적용해
          상환액을 다시 계산합니다. 3억을 4.5%로 5년 갚은 뒤 금리가 6.5%가 됐다고 가정해 보겠습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>금액</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5년간 월 상환액 (4.5%)</td>
                <td>1,520,056원</td>
              </tr>
              <tr>
                <td>5년 후 잔여 원금</td>
                <td>2억 7,347만원</td>
              </tr>
              <tr>
                <td>6.5% 재산정 후 월 상환액</td>
                <td>
                  <strong>1,846,514원</strong>
                </td>
              </tr>
              <tr>
                <td>월 증가액</td>
                <td>
                  <strong>+326,458원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          5년을 갚았는데 원금은 <strong>3억에서 2억 7,347만원으로 2,653만원밖에 줄지 않았습니다.</strong>{' '}
          원리금균등은 초기에 이자 비중이 커서 원금이 더디게 줄어들기 때문입니다. 그 상태에서 금리가
          오르면 줄어든 원금 효과보다 금리 상승 효과가 훨씬 커서 월 부담이 33만원 뜁니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 내 소득으로 감당 가능한가</h2>
        <p className="privacy-text">
          금융권은 DSR(총부채원리금상환비율)로 이걸 판단합니다. 연간 원리금 상환액이 연 소득에서 차지하는
          비중이며, 은행권 상한은 40%입니다.
        </p>
        <div className="guide-formula">DSR = 연간 총 원리금 상환액 ÷ 연 소득 × 100</div>
        <p className="privacy-text" style={{ marginTop: '14px' }}>
          3억 대출(30년, 원리금균등) 기준으로 연 소득에 따른 DSR을 보겠습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>연 소득</th>
                <th>4.5% 시 DSR</th>
                <th>6.0% 시 DSR</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>5,000만원</td>
                <td>36.5%</td>
                <td>43.2%</td>
              </tr>
              <tr>
                <td>6,000만원</td>
                <td>30.4%</td>
                <td>36.0%</td>
              </tr>
              <tr>
                <td>8,000만원</td>
                <td>22.8%</td>
                <td>27.0%</td>
              </tr>
              <tr>
                <td>1억원</td>
                <td>18.2%</td>
                <td>21.6%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          연 소득 5,000만원인 사람은 금리가 6%가 되면 이 대출 하나만으로 DSR이 43%를 넘어 규제선을
          넘깁니다. 신용대출이나 마이너스 통장이 있다면 더 빨리 도달합니다. 내 조건에서 여력이 얼마나
          남았는지는{' '}
          <Link href="/dsr" className="privacy-link">
            DSR 계산기
          </Link>
          로 확인할 수 있습니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 금리 상승기에 할 수 있는 것</h2>
        <ul className="privacy-list">
          <li>
            <strong>고정금리 전환 검토</strong> — 변동금리에서 고정으로 갈아타면 당장 금리는 조금 높아도
            추가 상승 위험이 사라집니다. 스트레스 DSR에서도 고정금리 비중이 높으면 가산이 줄어듭니다.
          </li>
          <li>
            <strong>금리인하요구권 행사</strong> — 승진, 이직, 소득 증가, 신용점수 상승이 있었다면
            은행에 금리 인하를 요구할 수 있습니다. 법으로 보장된 권리이며 수수료가 없습니다.
          </li>
          <li>
            <strong>대환 비교</strong> — 다른 은행의 조건을 비교해 갈아타는 방법입니다. 중도상환수수료와
            절감되는 이자를 비교해 판단하세요. 실행 후 3년이 지나면 대개 수수료가 면제됩니다.
          </li>
          <li>
            <strong>일부 중도상환</strong> — 여유 자금으로 원금을 줄이면 이자가 붙는 대상이 줄어듭니다.
            대출 초기일수록 효과가 큽니다.
          </li>
          <li>
            <strong>상환 기간 연장</strong> — 월 부담은 줄지만 총 이자는 크게 늘어납니다. 현금흐름이
            막혔을 때의 마지막 선택지로 두는 편이 낫습니다.
          </li>
        </ul>
        <div className="tax-success-box">
          <strong>연체가 예상된다면 먼저 은행에 연락하세요</strong>
          <br />· 연체 전에 상담하면 상환 유예, 기간 연장, 분할 조정 등 협의 여지가 있습니다
          <br />· 연체가 시작되면 연체이자와 신용점수 하락이 함께 옵니다
          <br />· 금융권에는 취약차주 대상 채무조정 프로그램이 운영되고 있습니다
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 대출 전이라면 스트레스 테스트를 먼저</h2>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          아직 대출을 받기 전이라면, 지금 금리가 아니라 <strong>2%포인트 높은 금리</strong>로 월 상환액을
          계산해 보고 그 금액을 감당할 수 있는지 확인하세요. 실제로 스트레스 DSR 제도가 하는 일이 바로
          이것입니다.{' '}
          <Link href="/loan" className="privacy-link">
            대출 이자 계산기
          </Link>
          에서 금리를 바꿔가며 월 납입금을 비교하고,{' '}
          <Link href="/articles/dsr-loan-limit-guide" className="privacy-link">
            DSR 완전 정리
          </Link>
          에서 한도가 정해지는 구조를 확인해 보세요. 상환 방식별 총 이자 차이는{' '}
          <Link href="/articles/loan-repayment-comparison" className="privacy-link">
            원리금균등 vs 원금균등 비교
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글의 금리와 대출 조건은 설명을 위한 예시입니다. 실제 금리와 상환액은 금융기관과 상품에
            따라 다릅니다.
          </p>
          <p>
            본 글은 일반적인 정보 제공을 위한 참고 자료이며 특정 금융상품을 추천하지 않습니다. 대출 관련
            결정은 금융기관 상담을 거쳐 본인 판단으로 하시기 바랍니다.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/loan"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          대출 이자 계산기로 시나리오 비교하기 →
        </Link>
      </div>
    </>
  );
}
