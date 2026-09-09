import Link from 'next/link';

export default function FxLossStockTax() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          달러로는 손해인데 양도세가 나온다고? 환율과 해외주식 세금
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          미국주식 커뮤니티에서 매년 5월이면 반복되는 이야기가 있습니다. &quot;주식은 마이너스인데 세금
          고지서가 왔다&quot;는 것입니다. 착오가 아니라 제도 구조상 실제로 일어나는 일입니다. 해외주식
          양도소득세는 달러 손익이 아니라 <strong>원화로 환산한 손익</strong>에 매기기 때문입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 과세 기준은 원화 환산액이다</h2>
        <p className="privacy-text">
          해외주식 양도차익은 달러 금액을 그대로 쓰지 않습니다. 매수와 매도를 각각 그 시점의 환율로 원화로
          바꾼 뒤 차액을 구합니다.
        </p>
        <div className="guide-formula">
          양도차익 = (매도금액 × 매도 결제일 환율) - (매수금액 × 매수 결제일 환율) - 필요경비
        </div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>
            <strong>체결일이 아니라 결제일 기준</strong>입니다. 미국주식은 통상 체결 후 영업일 기준으로
            며칠 뒤 결제되므로 그 날의 기준환율이 적용됩니다.
          </li>
          <li>
            <strong>실제 환전 시점과는 무관합니다.</strong> 달러를 원화로 바꾸지 않고 계좌에 그대로 뒀어도
            과세는 결제일 환율로 계산됩니다.
          </li>
          <li>
            증권사가 발급하는 <strong>해외주식 양도소득 계산 명세서</strong>에 이 기준으로 환산된 금액이
            들어 있습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 달러 손실인데 세금이 나오는 경우</h2>
        <p className="privacy-text">
          $10,000어치를 사서 $9,000에 팔았다고 해보겠습니다. 달러로는 $1,000, 10% 손실입니다. 그런데 그
          사이 환율이 1,200원에서 1,450원으로 올랐다면 어떻게 될까요.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>달러</th>
                <th>환율</th>
                <th>원화 환산</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매수</td>
                <td>$10,000</td>
                <td>1,200원</td>
                <td>12,000,000원</td>
              </tr>
              <tr>
                <td>매도</td>
                <td>$9,000</td>
                <td>1,450원</td>
                <td>13,050,000원</td>
              </tr>
              <tr>
                <td>손익</td>
                <td>
                  <strong>-$1,000 (-10%)</strong>
                </td>
                <td>—</td>
                <td>
                  <strong>+1,050,000원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          달러로는 10% 손실이지만 원화로는 105만원 이익입니다. 과세는 원화 기준이므로{' '}
          <strong>이 105만원이 양도차익으로 잡힙니다.</strong> 다행히 기본공제 250만원 안이라 이 거래만
          있다면 세금은 0원이지만, 다른 종목에서 이익이 났다면 합산되어 세금이 나옵니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 반대 상황도 있다</h2>
        <p className="privacy-text">
          커뮤니티에서 &quot;환차손은 오히려 양도세 절감의 기회&quot;라는 말이 나오는 이유입니다. 주가가
          올랐어도 환율이 떨어지면 원화 기준 차익이 줄어듭니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>달러</th>
                <th>환율</th>
                <th>원화 환산</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>매수</td>
                <td>$10,000</td>
                <td>1,450원</td>
                <td>14,500,000원</td>
              </tr>
              <tr>
                <td>매도</td>
                <td>$11,000</td>
                <td>1,300원</td>
                <td>14,300,000원</td>
              </tr>
              <tr>
                <td>손익</td>
                <td>
                  <strong>+$1,000 (+10%)</strong>
                </td>
                <td>—</td>
                <td>
                  <strong>-200,000원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          달러로는 10% 수익인데 원화로는 20만원 손실입니다. 세법상 <strong>양도차손</strong>이므로 같은
          해 다른 종목의 이익과 통산할 수 있습니다. 고환율에 사서 저환율에 팔면 세금 측면에서는 유리해지는
          구조입니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 환율이 세금을 얼마나 흔드나</h2>
        <p className="privacy-text">
          $10,000을 사서 $11,000에 판 동일한 거래를, 매수 환율만 1,300원으로 고정하고 매도 환율을 바꿔
          비교했습니다. 다른 종목에서 이미 250만원 공제를 다 썼다고 가정합니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>매도 환율</th>
                <th>원화 양도차익</th>
                <th>양도세 (22%)</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1,200원</td>
                <td>200,000원</td>
                <td>44,000원</td>
              </tr>
              <tr>
                <td>1,300원</td>
                <td>1,300,000원</td>
                <td>286,000원</td>
              </tr>
              <tr>
                <td>1,400원</td>
                <td>2,400,000원</td>
                <td>528,000원</td>
              </tr>
              <tr>
                <td>1,500원</td>
                <td>3,500,000원</td>
                <td>770,000원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          같은 주식, 같은 달러 수익인데 매도 시점 환율에 따라 세금이 <strong>4만원에서 77만원까지</strong>{' '}
          벌어집니다. 환율이 높을 때 매도하면 달러 수익은 같아도 세 부담이 커진다는 뜻입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 실무에서 챙길 점</h2>
        <ul className="privacy-list">
          <li>
            <strong>연말에 손익을 원화 기준으로 확인하세요.</strong> 증권사 앱의 달러 수익률만 보고
            판단하면 실제 과세 대상 금액을 알 수 없습니다. 양도소득 계산 명세서를 발급받아 원화 기준
            누적 손익을 확인하는 것이 정확합니다.
          </li>
          <li>
            <strong>기본공제 250만원은 원화 기준입니다.</strong> 달러 기준으로 계산해 &quot;공제 범위
            안&quot;이라고 판단했다가 환율 때문에 초과하는 경우가 생깁니다.
          </li>
          <li>
            <strong>손실 종목을 같은 해에 정리하면 통산됩니다.</strong> 원화 기준으로 손실인 종목을
            매도하면 이익과 상계됩니다. 다만 매매 비용과 가격 변동 위험은 별도로 감수해야 합니다.
          </li>
          <li>
            <strong>연도를 나누면 공제를 두 번 씁니다.</strong> 기본공제 250만원은 매년 새로 생기고
            이월되지 않습니다. 12월과 1월로 나눠 매도하면 공제를 두 번 활용할 수 있습니다.
          </li>
          <li>
            <strong>환전 자체에는 세금이 없습니다.</strong> 달러를 원화로 바꿀 때 생기는 환차익은 개인의
            경우 과세 대상이 아닙니다. 과세는 주식 양도 시점에 결정됩니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 자주 나오는 오해 정리</h2>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div className="info-box" style={{ marginBottom: 0 }}>
            <strong>&quot;달러를 안 바꿨으니 세금 없다&quot;</strong>
            <br />
            아닙니다. 환전 여부와 무관하게 주식을 매도한 시점에 원화 환산으로 과세가 확정됩니다.
          </div>
          <div className="info-box" style={{ marginBottom: 0 }}>
            <strong>&quot;증권사가 알아서 떼간다&quot;</strong>
            <br />
            해외주식 양도소득세는 원천징수 대상이 아닙니다. 다음 해 5월에 본인이 직접 신고하고 납부해야
            합니다.
          </div>
          <div className="info-box" style={{ marginBottom: 0 }}>
            <strong>&quot;여러 증권사 중 한 곳만 신고하면 된다&quot;</strong>
            <br />
            모든 증권사의 거래를 합산해 신고해야 합니다. 국세청은 증권사로부터 자료를 받으므로 누락은
            대부분 드러납니다.
          </div>
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 계산해 보기</h2>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          원화로 환산한 매도금액과 취득원가를 넣으면 기본공제와 22% 세율을 적용한 세액이 나옵니다.{' '}
          <Link href="/stock-tax" className="privacy-link">
            해외주식 양도소득세 계산기
          </Link>
          를 이용하세요. 달러 기준 평균단가와 원화 환산 손익을 함께 보려면{' '}
          <Link href="/us-stocks" className="privacy-link">
            미국주식 달러 평균단가 계산 방법
          </Link>
          을, 신고 절차와 절세 전략은{' '}
          <Link href="/articles/overseas-stock-tax-guide" className="privacy-link">
            해외주식 양도소득세 신고 방법
          </Link>
          을 참고하세요. 배당금은 양도소득이 아니라 배당소득으로 별도 과세되며{' '}
          <Link href="/articles/us-dividend-tax-guide" className="privacy-link">
            미국주식 배당소득세 완전 정리
          </Link>
          에서 다룹니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>
            본 글의 환율과 금액은 설명을 위한 예시입니다. 실제 적용 환율은 결제일 기준 매매기준율이며
            증권사 명세서에서 확인해야 합니다.
          </p>
          <p>
            본 글은 참고 자료이며 세무 자문이 아닙니다. 세법은 개정될 수 있으니 실제 신고 전 국세청
            자료나 세무 전문가를 통해 확인하세요.
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
