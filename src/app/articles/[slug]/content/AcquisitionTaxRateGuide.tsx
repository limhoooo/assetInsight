import Link from 'next/link';

export default function AcquisitionTaxRateGuide() {
  return (
    <>
      <div className="card">
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>
          취득세율 완전 정리: 생애최초 감면부터 다주택 중과까지
        </h1>
        <p className="privacy-text" style={{ marginBottom: 0 }}>
          집을 살 때 계약금·중도금·잔금만 준비하면 될 것 같지만, 잔금일 즈음 예상보다 큰 금액이 하나 더
          나갑니다. 취득세입니다. 같은 가격의 집이라도 몇 번째 주택인지, 어느 지역인지, 전용면적이
          얼마인지에 따라 세율이 1%에서 12%까지 벌어집니다. 자금 계획을 세울 때 반드시 먼저 계산해 봐야
          하는 항목입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 취득세는 언제, 얼마나 내나</h2>
        <p className="privacy-text">
          취득세는 부동산을 살 때 한 번 내는 지방세입니다. 취득일(통상 잔금 지급일)로부터{' '}
          <strong>60일 이내</strong>에 신고하고 납부해야 하며, 소유권 이전 등기를 하려면 취득세 납부
          영수증이 필요하기 때문에 실무에서는 대부분 잔금일에 맞춰 처리합니다.
        </p>
        <div className="guide-formula">총 납부세액 = 취득세 + 지방교육세 + 농어촌특별세</div>
        <ul className="privacy-list" style={{ marginTop: '14px' }}>
          <li>
            <strong>취득세</strong> — 주택 수·지역·가액에 따라 1~12%
          </li>
          <li>
            <strong>지방교육세</strong> — 표준세율(1~3%) 구간에서는 취득세액의 10%. 다만 8%·12% 중과
            구간에서는 중과세율에 연동되지 않고 과세표준의 0.4%로 고정됩니다.
          </li>
          <li>
            <strong>농어촌특별세</strong> — 전용면적 85㎡ 초과 주택에만 부과 (85㎡ 이하 국민주택은 비과세)
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 1주택자 세율: 가격에 따라 1~3%</h2>
        <p className="privacy-text">
          무주택자가 처음 집을 사거나 1주택을 유지하는 경우에는 취득가액에 따라 세율이 정해집니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>취득가액</th>
                <th>취득세율</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>6억 원 이하</td>
                <td>1%</td>
              </tr>
              <tr>
                <td>6억 초과 9억 이하</td>
                <td>1~3% (가액에 비례해 연속 증가)</td>
              </tr>
              <tr>
                <td>9억 원 초과</td>
                <td>3%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="info-box" style={{ marginTop: '14px', marginBottom: 0 }}>
          6억~9억 구간은 계단식이 아니라 <strong>연속 함수</strong>로 설계돼 있습니다. 과거처럼 6억 1원에
          세율이 갑자기 뛰는 문제를 없애기 위한 구조입니다. 7억 원이면 약 1.67%, 8억 원이면 약 2.33%
          정도로 완만하게 올라갑니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 다주택자·법인 중과세율</h2>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>보유 주택 수</th>
                <th>조정대상지역</th>
                <th>비조정대상지역</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1주택</td>
                <td>1~3%</td>
                <td>1~3%</td>
              </tr>
              <tr>
                <td>2주택</td>
                <td>8%</td>
                <td>1~3%</td>
              </tr>
              <tr>
                <td>3주택</td>
                <td>12%</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>4주택 이상 · 법인</td>
                <td>12%</td>
                <td>12%</td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="guide-warning-box" style={{ marginTop: '14px' }}>
          다주택 중과세율은 부동산 정책에 따라 완화·유예된 시기가 여러 차례 있었습니다. 위 표는 중과
          제도의 기본 골격이며, 실제 적용 여부는 <strong>취득 시점 기준</strong>으로 반드시 확인해야
          합니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. 숫자로 보는 차이</h2>
        <p className="privacy-text">
          조정대상지역의 전용 84㎡ 아파트를 7억 원에 취득하는 경우입니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>항목</th>
                <th>무주택자</th>
                <th>1주택자가 추가 취득</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>적용 세율</td>
                <td>약 1.67%</td>
                <td>8%</td>
              </tr>
              <tr>
                <td>취득세</td>
                <td>약 1,169만 원</td>
                <td>5,600만 원</td>
              </tr>
              <tr>
                <td>지방교육세</td>
                <td>약 117만 원</td>
                <td>약 280만 원</td>
              </tr>
              <tr>
                <td>농어촌특별세 (85㎡ 이하)</td>
                <td>0원</td>
                <td>0원</td>
              </tr>
              <tr>
                <td>총 납부세액</td>
                <td>
                  <strong>약 1,286만 원</strong>
                </td>
                <td>
                  <strong>약 5,880만 원</strong>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          같은 집인데 총 부담이 <strong>약 4.6배</strong> 차이 납니다. 취득세에서 주택 수 판정이 가장 큰
          변수인 이유입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 전용면적 85㎡의 벽</h2>
        <p className="privacy-text">
          농어촌특별세는 전용면적 85㎡(약 25.7평)를 초과하는 주택에만 붙습니다. 국민주택 규모 이하는
          비과세이므로, 전용 84㎡와 전용 101㎡는 같은 가격이어도 총 납부액이 달라집니다.
        </p>
        <div className="table-wrap">
          <table>
            <thead>
              <tr>
                <th style={{ textAlign: 'left' }}>구분</th>
                <th>전용 84㎡</th>
                <th>전용 101㎡</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>취득세 (7억, 1주택)</td>
                <td>약 1,169만 원</td>
                <td>약 1,169만 원</td>
              </tr>
              <tr>
                <td>지방교육세</td>
                <td>약 117만 원</td>
                <td>약 117만 원</td>
              </tr>
              <tr>
                <td>농어촌특별세</td>
                <td>0원</td>
                <td>약 140만 원</td>
              </tr>
              <tr>
                <td>총 납부세액</td>
                <td>약 1,286만 원</td>
                <td>약 1,426만 원</td>
              </tr>
            </tbody>
          </table>
        </div>
        <p className="privacy-text" style={{ marginTop: '12px', marginBottom: 0 }}>
          국민주택 규모 기준이 84㎡ 평면이 국내에서 압도적으로 많이 공급되는 이유 중 하나입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 생애최초 주택 구입 감면</h2>
        <p className="privacy-text">
          생애 처음으로 주택을 취득하는 경우 취득세를 일정 한도까지 감면받을 수 있습니다. 자동으로
          적용되는 것이 아니라 <strong>신고할 때 함께 신청해야 하는</strong> 제도입니다.
        </p>
        <ul className="privacy-list">
          <li>세대원 전원이 과거에 주택을 소유한 적이 없어야 합니다.</li>
          <li>취득하는 주택의 가액 요건이 있습니다.</li>
          <li>소득 요건이 적용되는 시기가 있었습니다.</li>
          <li>취득 후 일정 기간 안에 전입하고 실거주해야 하며, 이 기간에 매도하거나 임대를 놓으면 감면분이 추징됩니다.</li>
        </ul>
        <div className="info-box" style={{ marginBottom: 0 }}>
          이 밖에 신혼부부, 다자녀 가구, 임대주택 등에 대한 감면이 지방자치단체별로 운영되기도 합니다.
          요건과 한도는 개정이 잦으므로 위택스나 관할 지자체 세무과에서 취득 시점 기준을 확인하세요.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 주택 수 판정에서 자주 틀리는 것들</h2>
        <ul className="privacy-list">
          <li>
            <strong>세대 기준으로 셉니다.</strong> 배우자와 같은 세대의 미혼 자녀가 보유한 주택이
            합산됩니다. 세대분리가 되어 있는지가 중요합니다.
          </li>
          <li>
            <strong>분양권·조합원입주권</strong>은 취득 시점에 따라 주택 수에 포함될 수 있습니다.
          </li>
          <li>
            <strong>주거용 오피스텔</strong>은 주택 수에 포함되지만, 오피스텔 자체를 취득할 때의 세율은
            주택이 아닌 4%가 적용됩니다.
          </li>
          <li>
            <strong>상속주택</strong>은 일정 기간 주택 수에서 제외되는 특례가 있습니다.
          </li>
          <li>
            <strong>공시가격 1억 원 이하 주택</strong>은 주택 수 산정에서 제외되는 경우가 있습니다.
          </li>
        </ul>
        <div className="guide-warning-box">
          일시적 2주택으로 신규 주택을 취득한 뒤 정해진 기간 안에 종전 주택을 처분하지 않으면, 처음에
          1주택 세율로 낸 취득세와 중과세율의 차액을 <strong>가산세와 함께 추징</strong>당합니다. 처분
          기한 관리가 중요합니다.
        </div>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 분양 아파트는 언제 기준인가</h2>
        <p className="privacy-text">
          분양 아파트의 취득 시점은 계약일이나 중도금 납부일이 아니라 <strong>잔금 지급일</strong>
          입니다. 따라서 계약 이후 입주 전에 다른 집을 사면 잔금일 기준으로 주택 수가 늘어 세율이 올라갈
          수 있습니다. 분양권을 보유한 상태에서 추가 주택을 취득하려 한다면 취득세 부담이 어떻게
          달라지는지 먼저 계산해 보는 것이 안전합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">9. 증여·상속으로 받은 집도 취득세를 낸다</h2>
        <p className="privacy-text">
          무상으로 받은 부동산에도 취득세가 부과되며, 세율은 유상 취득과 다릅니다. 조정대상지역의 공시가격
          3억 원 이상 주택을 증여받으면 중과세율이 적용될 수 있습니다. 증여세와는 별개로 내야 하는
          세금이라는 점을 놓치기 쉽습니다. 상속의 경우 신고 기한도 달라서, 상속개시일이 속한 달의
          말일부터 6개월 이내입니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">10. 취득 전 확인 순서</h2>
        <div className="tax-success-box">
          <strong>이 순서로 확인하면 빠뜨리지 않습니다</strong>
          <br />① 세대원 전체가 보유한 주택·분양권·입주권을 모두 센다
          <br />② 취득하려는 주택이 조정대상지역인지 확인한다
          <br />③ 전용면적이 85㎡를 넘는지 확인한다
          <br />④ 생애최초·신혼부부 등 감면 대상인지 확인한다
          <br />⑤ 계산기로 총 납부세액을 산출해 자금 계획에 반영한다
        </div>
        <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
          부동산은 살 때 취득세, 가지고 있는 동안 재산세와 종부세, 팔 때 양도소득세가 각각 붙습니다. 전체
          흐름은{' '}
          <Link href="/articles/realestate-tax-checklist" className="privacy-link">
            부동산 세금 완전 정리
          </Link>
          에서, 보유 단계 세금은{' '}
          <Link href="/holding-tax" className="privacy-link">
            보유세 계산기
          </Link>
          에서 확인할 수 있습니다.
        </p>
      </div>

      <div className="card">
        <div className="disclaimer-box">
          <p>본 글은 취득세 제도의 구조를 설명한 참고 자료이며 세무 자문이 아닙니다.</p>
          <p>
            취득세율, 감면 요건, 중과 적용 여부는 지방세법 개정과 부동산 정책에 따라 자주 바뀝니다. 실제
            신고 전 위택스 또는 관할 지자체 세무과에서 확인하세요.
          </p>
        </div>
      </div>

      <div style={{ textAlign: 'center', marginTop: '8px' }}>
        <Link
          href="/acquisition-tax"
          className="btn btn-primary"
          style={{ display: 'inline-flex', width: 'auto', padding: '13px 32px', textDecoration: 'none' }}
        >
          취득세 계산기로 내 세액 확인하기 →
        </Link>
      </div>
    </>
  );
}
