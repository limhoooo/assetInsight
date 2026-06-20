import type { Metadata } from 'next';
import Link from 'next/link';

export const metadata: Metadata = {
  title: '개인정보처리방침 | 물타기 계산기',
  description: '물타기 계산기의 개인정보처리방침입니다. 쿠키 사용, Google AdSense 광고 서비스 및 개인정보 처리에 관한 내용을 확인하세요.',
};

export default function PrivacyPage() {
  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">← 계산기로 돌아가기</Link>

      <div className="card" style={{ marginTop: '16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>개인정보처리방침</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>시행일: 2025년 1월 1일</p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">1. 개요</h2>
        <p className="privacy-text">
          물타기 계산기(이하 "서비스")는 사용자의 개인정보를 소중히 여기며, 「개인정보 보호법」 등 관련 법령을 준수합니다.
          본 개인정보처리방침은 서비스가 어떤 정보를 수집하고 어떻게 사용하는지 안내합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">2. 수집하는 정보</h2>
        <p className="privacy-text">
          서비스는 회원가입 없이 이용 가능하며 별도의 개인정보를 직접 수집하지 않습니다.
          다만, 서비스 이용 과정에서 아래 정보가 자동으로 수집될 수 있습니다.
        </p>
        <ul className="privacy-list">
          <li>접속 IP 주소 및 브라우저 종류</li>
          <li>운영체제 및 기기 정보</li>
          <li>방문 일시 및 서비스 이용 기록</li>
          <li>쿠키 및 유사 기술을 통한 정보</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">3. 쿠키(Cookie) 사용</h2>
        <p className="privacy-text">
          서비스는 사용자 편의를 위해 쿠키를 사용합니다. 쿠키는 사용자의 브라우저에 저장되는 작은 텍스트 파일로,
          다음과 같은 목적으로 사용됩니다.
        </p>
        <ul className="privacy-list">
          <li>테마 설정(다크/라이트 모드) 유지</li>
          <li>서비스 이용 통계 분석</li>
          <li>맞춤형 광고 제공 (Google AdSense)</li>
        </ul>
        <p className="privacy-text">
          사용자는 브라우저 설정을 통해 쿠키 저장을 거부하거나 삭제할 수 있습니다.
          단, 쿠키를 비활성화하면 일부 서비스 기능이 제한될 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">4. Google AdSense 광고 서비스</h2>
        <p className="privacy-text">
          본 서비스는 Google LLC가 제공하는 <strong>Google AdSense</strong>를 통해 광고를 게재합니다.
          Google AdSense는 사용자의 관심사에 맞는 광고를 제공하기 위해 쿠키 및 유사 기술을 사용합니다.
        </p>
        <ul className="privacy-list">
          <li>Google은 광고 쿠키를 사용하여 사용자가 해당 사이트 또는 인터넷의 다른 사이트를 방문할 때 표시되는 광고를 게재합니다.</li>
          <li>사용자는 <a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="privacy-link">Google 광고 설정</a>에서 맞춤형 광고를 비활성화할 수 있습니다.</li>
          <li>Google의 데이터 사용 방식에 대한 자세한 내용은 <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="privacy-link">Google 개인정보처리방침</a>을 참고하세요.</li>
        </ul>
        <p className="privacy-text">
          또한 Google Analytics 및 제3자 광고 네트워크를 통해 서비스 이용 통계가 수집될 수 있습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">5. 제3자 서비스</h2>
        <p className="privacy-text">서비스는 다음의 제3자 서비스를 이용합니다.</p>
        <ul className="privacy-list">
          <li>
            <strong>open.er-api.com</strong> — 실시간 환율 정보 조회를 위해 사용됩니다.
            사용자가 USD 모드를 이용할 때 해당 외부 API에 요청이 전송됩니다.
          </li>
          <li>
            <strong>Google AdSense</strong> — 광고 게재를 위해 사용됩니다. Google의 서버로 광고 요청이 전송될 수 있습니다.
          </li>
        </ul>
        <p className="privacy-text">각 제3자 서비스의 개인정보 처리에 대한 책임은 해당 서비스 제공자에게 있습니다.</p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">6. 개인정보의 보유 및 이용기간</h2>
        <p className="privacy-text">
          서비스는 사용자의 개인정보를 별도로 수집·보유하지 않습니다.
          서비스 내 입력하는 계산 데이터(매수가, 수량 등)는 브라우저의 메모리에만 임시 저장되며,
          서버로 전송되거나 저장되지 않습니다.
          광고 서비스 관련 데이터는 Google의 정책에 따라 처리됩니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">7. 사용자의 권리</h2>
        <p className="privacy-text">사용자는 다음과 같은 방법으로 개인정보와 관련한 권리를 행사할 수 있습니다.</p>
        <ul className="privacy-list">
          <li>브라우저 설정 → 쿠키 삭제 또는 차단</li>
          <li><a href="https://www.google.com/settings/ads" target="_blank" rel="noopener noreferrer" className="privacy-link">Google 광고 설정</a>에서 맞춤 광고 비활성화</li>
          <li><a href="https://optout.networkadvertising.org/" target="_blank" rel="noopener noreferrer" className="privacy-link">NAI 옵트아웃 도구</a>를 통한 광고 거부</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">8. 개인정보처리방침 변경</h2>
        <p className="privacy-text">
          본 방침은 관련 법령 변경 또는 서비스 변경에 따라 수정될 수 있습니다.
          내용이 변경될 경우 서비스 내 공지 또는 본 페이지를 통해 안내합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">9. 문의</h2>
        <p className="privacy-text">
          개인정보 처리에 관한 문의사항이 있으시면 아래로 연락 주시기 바랍니다.<br />
          <strong>이메일: dlagh123@gmail.com</strong>
        </p>
      </div>
    </main>
  );
}
