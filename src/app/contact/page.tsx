import type { Metadata } from 'next';
import Link from 'next/link';

const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL ?? 'https://assetsinsight.net';
const CONTACT_EMAIL = 'dlagh123@gmail.com';

export const metadata: Metadata = {
  title: '문의하기 | 자산인사이트',
  description:
    '자산인사이트 운영자에게 문의하는 방법을 안내합니다. 계산 오류 제보, 기능 제안, 콘텐츠 정정 요청, 제휴 문의를 받고 있습니다.',
  alternates: { canonical: `${BASE_URL}/contact/` },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'ContactPage',
  name: '문의하기 | 자산인사이트',
  url: `${BASE_URL}/contact/`,
  inLanguage: 'ko-KR',
  mainEntity: {
    '@type': 'Organization',
    name: '자산인사이트',
    url: BASE_URL,
    email: CONTACT_EMAIL,
    contactPoint: {
      '@type': 'ContactPoint',
      contactType: 'customer support',
      email: CONTACT_EMAIL,
      availableLanguage: ['ko'],
    },
  },
};

const TOPICS = [
  {
    title: '계산 결과 오류 제보',
    desc: '계산기 결과가 실제 세액·이자와 다르다고 판단되면 알려 주세요. 어떤 계산기에서 어떤 값을 입력했고 어떤 결과가 나왔는지, 그리고 기대한 값이 무엇인지 함께 적어 주시면 훨씬 빠르게 확인할 수 있습니다.',
  },
  {
    title: '세법·제도 변경 알림',
    desc: '세율, 공제 한도, 과세 기준은 매년 개정됩니다. 계산기나 아티클의 내용이 최신 기준과 다르다면 근거와 함께 알려 주시면 반영하겠습니다.',
  },
  {
    title: '기능 제안',
    desc: '필요한 계산기나 있으면 좋을 기능을 제안해 주세요. 실제로 어떤 상황에서 쓰고 싶은지 함께 적어 주시면 우선순위를 정하는 데 도움이 됩니다.',
  },
  {
    title: '콘텐츠 정정 요청',
    desc: '아티클이나 가이드의 사실관계에 오류가 있다면 해당 문단과 정정 근거를 보내 주세요. 확인 후 본문을 수정하고 필요하면 수정 사실을 함께 표기합니다.',
  },
  {
    title: '개인정보 관련 문의',
    desc: '수집 정보, 쿠키, 광고 관련 문의는 개인정보처리방침을 먼저 확인하신 뒤 남겨 주세요.',
  },
  {
    title: '제휴 및 광고 문의',
    desc: '콘텐츠 제휴, 광고 게재와 관련한 문의도 같은 이메일로 받고 있습니다.',
  },
];

export default function ContactPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="container" style={{ paddingTop: '24px', paddingBottom: '40px' }}>
        <Link href="/" className="back-link">
          ← 홈으로
        </Link>

        <div className="card" style={{ marginTop: '16px' }}>
          <h1 style={{ fontSize: '22px', fontWeight: 800, marginBottom: '8px' }}>문의하기</h1>
          <p className="privacy-text" style={{ marginBottom: 0 }}>
            자산인사이트는 개인이 운영하는 금융 계산기·정보 사이트입니다. 계산 결과에 오류가 있거나
            세법 개정으로 내용이 맞지 않게 됐다면 알려 주세요. 확인 후 수정하고 있습니다. 아래 이메일로
            보내 주시면 순차적으로 답변드립니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">이메일</h2>
          <div className="tax-info-box">
            <strong>{CONTACT_EMAIL}</strong>
          </div>
          <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
            답변에는 보통 영업일 기준 2~3일이 걸립니다. 운영자 1인이 관리하는 사이트라 문의가 몰리면
            더 걸릴 수 있는 점 양해 부탁드립니다. 전화 상담이나 실시간 채팅은 운영하지 않습니다.
          </p>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">이런 내용을 보내 주세요</h2>
          <ul className="feature-list" style={{ gap: '12px' }}>
            {TOPICS.map((topic) => (
              <li key={topic.title}>
                <span className="feature-icon">✉️</span>
                <div>
                  <strong>{topic.title}</strong>
                  <p>{topic.desc}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">답변드리기 어려운 문의</h2>
          <p className="privacy-text">
            자산인사이트는 계산 도구와 일반적인 정보를 제공하는 사이트이며, 세무사·투자자문업자 등
            자격을 갖춘 전문가가 운영하는 곳이 아닙니다. 다음과 같은 문의에는 답변드릴 수 없습니다.
          </p>
          <ul className="privacy-list">
            <li>개별 종목의 매수·매도 여부나 목표가에 대한 판단</li>
            <li>특정인의 상황에 대한 세무 대리, 신고 대행, 절세 설계</li>
            <li>대출 승인 가능 여부나 금융기관 심사 결과에 대한 예측</li>
            <li>법률 자문이 필요한 사안</li>
          </ul>
          <div className="guide-warning-box" style={{ marginTop: '14px' }}>
            실제 세금 신고나 투자·대출 결정은 세무사, 회계사, 금융기관 등 자격을 갖춘 전문가와 상담한
            뒤 진행하시기 바랍니다.
          </div>
        </div>

        <div className="card">
          <h2 className="privacy-section-title">운영 정보</h2>
          <ul className="privacy-list">
            <li>사이트명: 자산인사이트 (Assets Insight)</li>
            <li>
              사이트 주소:{' '}
              <a href={BASE_URL} className="privacy-link">
                {BASE_URL}
              </a>
            </li>
            <li>운영 형태: 개인 운영 (비영리 정보 제공 및 광고 기반)</li>
            <li>연락처: {CONTACT_EMAIL}</li>
          </ul>
          <p className="privacy-text" style={{ marginTop: '14px', marginBottom: 0 }}>
            서비스 전반에 대한 설명은{' '}
            <Link href="/about/" className="privacy-link">
              서비스 소개
            </Link>
            , 개인정보 처리 방식은{' '}
            <Link href="/privacy/" className="privacy-link">
              개인정보처리방침
            </Link>
            , 이용 조건은{' '}
            <Link href="/terms/" className="privacy-link">
              이용약관
            </Link>
            에서 확인하실 수 있습니다.
          </p>
        </div>
      </main>
    </>
  );
}
