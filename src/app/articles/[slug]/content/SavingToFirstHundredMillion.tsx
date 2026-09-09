import Link from 'next/link';

export default function SavingToFirstHundredMillion() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          월 100만원씩 모으면 1억까지 몇 년 걸릴까
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          재테크 커뮤니티에서 가장 자주 올라오는 질문 중 하나입니다. &quot;월 얼마씩 저축하면 이 정도가
          마지노선인가?&quot;, &quot;지금 속도로 언제 1억을 만드나?&quot; 답은 저축액과 수익률 두 가지로
          정해집니다. 감이 아니라 숫자로 확인해 보겠습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 이자 없이 그냥 모으면</h2>
        <p className="privacy-text">
          수익률 0%, 즉 장롱에 넣어둔다고 가정하면 계산은 단순합니다. 1억 ÷ 월 저축액입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>월 저축액</th>
                <th>1억까지 걸리는 기간</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50만원</td>
                <td>16년 8개월</td>
              </tr>
              <tr>
                <td>100만원</td>
                <td>8년 4개월</td>
              </tr>
              <tr>
                <td>150만원</td>
                <td>5년 7개월</td>
              </tr>
              <tr>
                <td>200만원</td>
                <td>4년 2개월</td>
              </tr>
              <tr>
                <td>300만원</td>
                <td>2년 9개월</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          이게 출발선입니다. 여기서 수익률이 붙으면 기간이 얼마나 줄어드는지가 다음 질문입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 수익률이 붙으면 얼마나 빨라지나</h2>
        <p className="privacy-text">
          월 100만원을 꾸준히 넣었을 때, 연 수익률에 따라 1억 도달 시점이 어떻게 달라지는지 보겠습니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>연 수익률</th>
                <th>1억 도달</th>
                <th>단축 기간</th>
                <th>총 납입 원금</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0% (현금)</td>
                <td>8년 4개월</td>
                <td>—</td>
                <td>1억원</td>
              </tr>
              <tr>
                <td>3% (예금)</td>
                <td>7년 5개월</td>
                <td>11개월</td>
                <td>약 8,940만원</td>
              </tr>
              <tr>
                <td>5%</td>
                <td>7년</td>
                <td>1년 4개월</td>
                <td>약 8,380만원</td>
              </tr>
              <tr>
                <td>7% (주식 장기 평균)</td>
                <td>6년 7개월</td>
                <td>1년 9개월</td>
                <td>약 7,900만원</td>
              </tr>
              <tr>
                <td>10%</td>
                <td>6년 1개월</td>
                <td>2년 3개월</td>
                <td>약 7,300만원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          연 7%로 굴려도 8년 4개월이 6년 7개월로 <strong>1년 9개월 줄어드는 데 그칩니다.</strong> 첫 1억을
          만드는 구간에서는 수익률보다 <strong>저축액이 압도적으로 중요합니다.</strong> 원금이 작을 때는
          복리가 붙을 대상 자체가 작기 때문입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 저축액을 늘리는 게 훨씬 강력하다</h2>
        <p className="privacy-text">
          연 7% 고정으로 두고 저축액만 바꿔 보면 차이가 분명해집니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>월 저축액</th>
                <th>1억 도달 (연 7%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>50만원</td>
                <td>11년 1개월</td>
              </tr>
              <tr>
                <td>100만원</td>
                <td>6년 7개월</td>
              </tr>
              <tr>
                <td>150만원</td>
                <td>4년 8개월</td>
              </tr>
              <tr>
                <td>200만원</td>
                <td>3년 8개월</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="tax-success-box" style={{ marginTop: '14px' }}>
          월 100만원을 150만원으로 <strong>50% 늘리면 1년 11개월이 단축</strong>됩니다. 수익률을 0%에서
          7%까지 끌어올려도 1년 9개월밖에 못 줄이는데, 저축액 50만원 증액이 그보다 큰 효과를 냅니다.
        </div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          &quot;어디에 투자할까&quot;를 고민하는 시간의 절반이라도 &quot;저축액을 어떻게 늘릴까&quot;에
          쓰는 편이, 첫 1억 구간에서는 더 합리적이라는 뜻입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 1억을 넘기면 이야기가 뒤집힌다</h2>
        <p className="privacy-text">
          그렇다고 수익률이 중요하지 않다는 뜻은 아닙니다. 원금이 커질수록 복리의 몫이 급격히 커집니다.
          월 100만원을 계속 넣었을 때 구간별로 걸리는 시간입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구간</th>
                <th>0%</th>
                <th>연 7%</th>
                <th>단축</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>0 → 1억</td>
                <td>8년 4개월</td>
                <td>6년 7개월</td>
                <td>1년 9개월</td>
              </tr>
              <tr>
                <td>1억 → 2억</td>
                <td>8년 4개월</td>
                <td>4년 6개월</td>
                <td>3년 10개월</td>
              </tr>
              <tr>
                <td>2억 → 3억</td>
                <td>8년 4개월</td>
                <td>3년 5개월</td>
                <td>4년 11개월</td>
              </tr>
              <tr>
                <td>3억 → 4억</td>
                <td>8년 4개월</td>
                <td>2년 9개월</td>
                <td>5년 7개월</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          0%일 때는 모든 구간이 똑같이 8년 4개월이지만, 연 7%면 <strong>같은 1억을 쌓는 시간이 6년
          7개월에서 2년 9개월로 절반 이하</strong>가 됩니다. 첫 1억은 저축이 만들고, 그다음부터는 수익률이
          만듭니다. 그래서 첫 1억을 최대한 빨리 만드는 것이 중요합니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 세금과 물가를 빼면</h2>
        <p className="privacy-text">
          위 계산은 세전 명목 수익률 기준입니다. 실제로 손에 남는 돈은 더 적습니다.
        </p>
        <ul className="privacy-list">
          <li>
            <strong>이자·배당소득세 15.4%</strong> — 예금 연 3%는 세후 약 2.54%가 됩니다.
          </li>
          <li>
            <strong>물가상승률</strong> — 연 2.5% 상승을 감안하면, 8년 뒤의 1억은 지금 기준 약 8,200만원의
            구매력입니다.
          </li>
          <li>
            <strong>운용 보수</strong> — 펀드나 ETF의 연 보수도 수익률에서 그대로 빠집니다.
          </li>
        </ul>
        <div className="tax-success-box">
          <strong>세금을 줄이는 게 수익률을 올리는 것과 같습니다</strong>
          <br />· ISA 계좌: 손익 통산 후 200만원(서민형 400만원)까지 비과세, 초과분 9.9% 분리과세
          <br />· 연금저축·IRP: 납입 시점 13.2~16.5% 세액공제 + 과세 이연
          <br />· 세액공제는 그 해에 확정되는 수익이라, 시장 수익률보다 확실합니다
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 현실적으로 접근하는 순서</h2>
        <ul className="feature-list" style={{ gap: '12px' }}>
          <li>
            <span className="feature-icon">①</span>
            <div>
              <strong>비상금부터 확보</strong>
              <p>
                3~6개월치 생활비를 파킹통장에 둡니다. 이게 없으면 급한 일이 생길 때마다 투자금을 깨야
                하고, 그러면 복리가 처음부터 다시 시작됩니다.
              </p>
            </div>
          </li>
          <li>
            <span className="feature-icon">②</span>
            <div>
              <strong>고금리 대출 상환</strong>
              <p>
                연 15% 카드론을 갚는 것은 확정 15% 수익입니다. 어떤 투자보다 확실합니다.
              </p>
            </div>
          </li>
          <li>
            <span className="feature-icon">③</span>
            <div>
              <strong>절세 계좌 한도 채우기</strong>
              <p>연금저축·IRP 세액공제와 ISA 비과세 한도를 먼저 씁니다.</p>
            </div>
          </li>
          <li>
            <span className="feature-icon">④</span>
            <div>
              <strong>저축액 자체를 늘리기</strong>
              <p>
                고정비 점검과 소득 증가가 첫 1억 구간에서는 수익률 개선보다 효과가 큽니다.
              </p>
            </div>
          </li>
          <li>
            <span className="feature-icon">⑤</span>
            <div>
              <strong>그다음이 자산 배분</strong>
              <p>원금이 쌓인 뒤부터 수익률 차이가 결과를 크게 바꿉니다.</p>
            </div>
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 내 숫자로 계산해 보기</h2>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          위 표는 월 100만원을 기준으로 한 예시입니다. 본인의 저축액과 기대 수익률로 직접 넣어보려면{' '}
          <Link href="/compound" className="privacy-link">
            복리 계산기
          </Link>
          의 미래가치 계산에서 월 추가 납입 금액을 입력하면 됩니다. 반대로 목표 금액에서 거꾸로 필요한
          원금을 구하려면 현재가치 역산 탭을 쓰세요. 예적금으로만 모을 계획이라면{' '}
          <Link href="/savings" className="privacy-link">
            정기예금/적금 계산기
          </Link>
          에서 세후 이자를 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글의 수익률은 설명을 위한 가정치이며 미래 수익을 보장하지 않습니다. 실제 투자 수익률은
            해마다 크게 변동하며 원금 손실이 발생할 수 있습니다.
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
          복리 계산기로 내 목표 계산하기 →
        </Link>
      </div>
    </>
  );
}
