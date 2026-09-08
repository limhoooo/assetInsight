import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';

export const metadata: Metadata = {
  title: '이용약관 | 자산인사이트',
  description:
    '자산인사이트 서비스 이용약관입니다. 서비스 제공 범위, 계산 결과의 성격과 한계, 면책 사항, 저작권, 광고 게재에 관한 내용을 안내합니다.',
  alternates: { canonical: `${BASE_URL}/terms/` },
  robots: { index: true, follow: true },
};

export default function TermsPage() {
  return (
    <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
      <Link href="/" className="back-link">
        ← 홈으로
      </Link>

      <div className="card" style={{ marginTop: '16px' }}>
        <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '4px' }}>이용약관</h1>
        <p style={{ fontSize: '13px', color: 'var(--text-muted)' }}>시행일: 2025년 1월 1일</p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제1조 (목적)</h2>
        <p className="privacy-text">
          본 약관은 자산인사이트(이하 &quot;서비스&quot;)가 제공하는 금융 계산기 및 정보 콘텐츠의 이용
          조건과 절차, 서비스와 이용자의 권리·의무·책임 사항을 정하는 것을 목적으로 합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제2조 (서비스의 내용)</h2>
        <p className="privacy-text">서비스는 다음의 콘텐츠를 무료로 제공합니다.</p>
        <ul className="privacy-list">
          <li>주식 평균단가(물타기), 복리, 예적금 이자, 대출 이자 등 투자·금융 계산 도구</li>
          <li>해외주식 양도소득세, 부동산 양도소득세, 취득세, 보유세 등 세금 계산 도구</li>
          <li>각 계산기의 사용법과 계산 원리를 설명하는 가이드 문서</li>
          <li>투자·세금·재테크 관련 정보 아티클</li>
        </ul>
        <p className="privacy-text">
          서비스는 회원가입 절차 없이 누구나 이용할 수 있으며, 이용료를 받지 않습니다. 운영은 광고
          수익을 통해 유지됩니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제3조 (계산 결과의 성격과 한계)</h2>
        <p className="privacy-text">
          서비스가 제공하는 모든 계산 결과는 <strong>참고용 개산값</strong>입니다. 다음 사항을 반드시
          확인해 주시기 바랍니다.
        </p>
        <ul className="privacy-list">
          <li>
            계산기는 이용자가 입력한 값과 공개된 일반 기준(세율, 공제 한도 등)만을 사용해 결과를
            산출합니다. 개별 이용자의 구체적 사실관계는 반영되지 않습니다.
          </li>
          <li>
            세법, 금리, 공시가격 기준은 매년 개정됩니다. 서비스는 내용을 갱신하기 위해 노력하지만
            개정 즉시 반영된다고 보장하지 않습니다.
          </li>
          <li>
            계산 결과는 국세청, 지방자치단체, 금융기관이 실제로 산정하는 금액과 다를 수 있습니다.
            실제 신고·납부·거래 금액은 반드시 해당 기관에서 확인해야 합니다.
          </li>
          <li>
            서비스는 세무 대리, 투자자문, 금융상품 중개 등 자격이 필요한 업무를 수행하지 않으며 그러한
            자문을 제공하지 않습니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제4조 (면책)</h2>
        <ul className="privacy-list">
          <li>
            이용자가 서비스의 계산 결과나 정보에 근거해 내린 투자·세무·대출 등의 결정과 그 결과에
            대한 책임은 전적으로 이용자 본인에게 있습니다.
          </li>
          <li>
            서비스는 콘텐츠의 정확성과 최신성을 위해 노력하지만 오류가 없음을 보장하지 않으며, 오류로
            인해 발생한 손해에 대해 법령이 허용하는 범위에서 책임을 지지 않습니다.
          </li>
          <li>
            천재지변, 호스팅 장애, 외부 API(환율 조회 등) 중단 등 서비스가 통제할 수 없는 사유로 인한
            서비스 중단에 대해 책임을 지지 않습니다.
          </li>
          <li>
            서비스에 게재된 외부 링크나 제3자 광고의 내용에 대해서는 해당 사업자가 책임을 부담합니다.
          </li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제5조 (이용자의 의무)</h2>
        <p className="privacy-text">이용자는 서비스를 이용하면서 다음 행위를 해서는 안 됩니다.</p>
        <ul className="privacy-list">
          <li>자동화된 수단으로 과도한 트래픽을 발생시켜 서비스 운영을 방해하는 행위</li>
          <li>서비스의 콘텐츠를 무단으로 복제·배포하거나 상업적으로 이용하는 행위</li>
          <li>서비스의 소스코드나 구조를 무단으로 변경·역분석하는 행위</li>
          <li>기타 관련 법령에 위반되는 행위</li>
        </ul>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제6조 (저작권)</h2>
        <p className="privacy-text">
          서비스가 작성한 계산기, 가이드, 아티클 등 콘텐츠의 저작권은 자산인사이트에 있습니다. 출처를
          명시한 인용은 가능하나, 전문 복제·재배포·상업적 이용은 사전 동의가 필요합니다. 인용이나
          이용 문의는{' '}
          <Link href="/contact/" className="privacy-link">
            문의하기
          </Link>
          를 통해 연락해 주세요.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제7조 (광고 게재)</h2>
        <p className="privacy-text">
          서비스는 운영 비용 충당을 위해 Google AdSense 등 광고 네트워크를 통한 광고를 게재할 수
          있습니다. 광고에 사용되는 쿠키와 데이터 처리에 관한 사항은{' '}
          <Link href="/privacy/" className="privacy-link">
            개인정보처리방침
          </Link>
          에서 확인하실 수 있습니다. 광고주의 상품·서비스에 대한 책임은 해당 광고주에게 있으며,
          서비스는 광고 내용을 보증하거나 추천하지 않습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제8조 (데이터 저장)</h2>
        <p className="privacy-text">
          계산기에 입력한 값은 이용자의 브라우저 안에서만 처리되며 서버로 전송되거나 저장되지 않습니다.
          포트폴리오 저장, 테마 설정 등은 브라우저의 로컬 저장소(localStorage)를 사용하므로 브라우저
          데이터를 삭제하면 함께 사라지며, 서비스는 이를 복구할 수 없습니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제9조 (약관의 변경)</h2>
        <p className="privacy-text">
          서비스는 필요한 경우 본 약관을 변경할 수 있으며, 변경된 약관은 본 페이지에 게시한 시점부터
          효력이 발생합니다. 중요한 변경 사항은 시행일을 함께 표기합니다.
        </p>
      </div>

      <div className="card">
        <h2 className="privacy-section-title">제10조 (문의)</h2>
        <p className="privacy-text">
          본 약관에 관한 문의는 <strong>dlagh123@gmail.com</strong>으로 보내 주시기 바랍니다. 자세한
          안내는{' '}
          <Link href="/contact/" className="privacy-link">
            문의하기
          </Link>{' '}
          페이지를 참고하세요.
        </p>
      </div>
    </main>
  );
}
